
const trash_items = [
    "helmet",
    "wcap",
    "partyhat",
    "xmashat",
    "rednose",
    "helmet1",
    "bunnyears",
    "eears",
    "ghatb",
    "ghatp",
    "coat",
    "wattire",
    "xmassweater",
    "epyjamas",
    "coat1",
    "sweaterhs",
    "pyjamas",
    "harmor",
    "pants",
    "wbreeches",
    "xmaspants",
    "pants1",
    "hpants",
    "gloves",
    "wgloves",
    "poker",
    "gloves1",
    "mittens",
    "hgloves",

    "shoes",
    "eslippers",
    "wshoes",
    "xmasshoes",
    "shoes1",

    "iceskates",
    "hboots",

    "broom",
    "mace",
    "wbasher",
    "claw",
    "blade",
    "cclaw",
    "stinger",
    "bow",
    "glolipop",
    "ololipop",
    "mushroomstaff",
    "slimestaff",
    "pouchbow",
    "weaver",
    "xmace",
    "sword",
    "swifty",
    "wand",
    "throwingstars",
    "spear",
    "candycanesword",
    "basher",
    "rapier",
    "pmace",
    "cupid",
    "snowflakes",
    "carrotsword",
    "ornamentstaff",
    "merry",
    "bataxe",
    "pinkie",
    "dagger",
    "swordofthedead",
    "daggerofthedead",
    "maceofthedead",
    "staffofthedead",
    "bowofthedead",
    "crossbow",
    "pmaceofthedead",
    "wshield",
    "wbook0",
    "hpot0",
    "mpot0",
    "scroll0",
    "cscroll0"
]

const monsters_require_focus = [];
const monsters_to_hunt = [];
const event_monsters = [];

const special_monsters = ["cutebee", "snowman", "goldenbat", "wabbit", "phoenix", "fvampire", "mvampire", "grinch"];

const party = ['FunWarIAm', 'FunStrike', 'Shepart'];
const leader = party[0];

var reviving = false;
var farm_monster_type = "crab";
var fighting = false;
var focus_target = false;

var target = null;


if (character.rip) {
    setTimeout(function () {
        respawn();
        setTimeout(function () {
            smart_move(farm_monster_type, function () {
                fighting = true;
            });
        }, 1000);
    }, 12000);
} else {
    smart_move(farm_monster_type, function () {
        fighting = true;
    });
}

setInterval(function () {
    if (!fighting || is_moving(character)) {
        return;
    }
    if (character.rip && !reviving) {
        reviving = true;
        fighting = false;
        var position = {
            x: character.real_x,
            y: character.real_y,
            map: character.map,
        };
        setTimeout(function () {
            respawn();
            setTimeout(function () {
                reviving = false;
                smart_move(position, function () {
                    fighting = true;
                });
            }, 1000)
        }, 12000)
    }

    use_potions();
    loot();

    if (is_moving(character)) return;

    target = get_target();
    if (target) {
        // if (character.ctype === "mage") mageSkills(target);
        if (character.ctype === "priest") priestSkills(target);
        if (character.ctype === "ranger") rangerSkills(target, farm_monster_type);
        if (character.ctype === "warrior") warriorSkills(target);
        fight(target);
    }
}, 1000 / 4);


function restoreParty() {
	if (parent.party_list.length < 3) {
		initParty();
	}
}

function initParty() {
	for (const name of party) {
		if (!Object.keys(parent.party).includes(name)) send_party_invite(name);
	}
}


function sellTrash() {
    if(character.name == leader) restoreParty();

    console.log("Sell trash");
    let hasEmptySpace = false;
    character.items.forEach((item, index) => {
        if(item === null) {
            hasEmptySpace = true;
        }
    });

    console.log("has empty space: " + hasEmptySpace);

    if(!hasEmptySpace) {
        fighting = false;
        smart_move('main', () => {

            setTimeout(() => {
                smart_move('bank', () => {
                    bank_deposit(character.gold);
                    smart_move(targetMonster, function () {
                        fighting = true;
                    });
                });
            }, 5000);

            let i = 0;
            let a = setInterval(() => {
                const item = character.items[i];
                if (item && trash_items.includes(item.name)) {
                    item.q ? sell(index, item.q) : sell(index, item);
                }
                i = i + 1;
                if(i >= 45) {
                    clearInterval(a);
                }
            }, 100);

            // BUY POTIONS
        })
    }

    setTimeout(60000, sellTrash);
}

setTimeout(60000, sellTrash);



function warriorSkills(target) {
	//How much Mana should be kept in reserve
	const manaReserve = 0.8;

	//Use Ranger Skills
	if (character.mp > (character.max_mp * manaReserve)) {
        if(target.target != character.name && !is_on_cooldown("taunt")) {
            use_skill("taunt", target);
        }
	}
}



function rangerSkills(target) {

	//How much Mana should be kept in reserve
	const mana_reserve = 0.8;

	
	//Use Ranger Skills
	if (character.mp > (character.max_mp * mana_reserve)) {

		//Multishots (3-Shot and 5-Shot)
		//ONLY if there is no master!
		if (!focus_target
			&& !is_on_cooldown("attack")
			//Only use these skills against weak monsters
			&& !monsters_require_focus.includes(farm_monster_type)) {
			const targets = Object.values(parent.entities).filter(entity => entity.mtype === farm_monster_type && entity.level <= 1 && is_in_range(entity, "3shot") && is_in_range(entity, "5shot"));
			if (character.level >= 75
				&& targets.length >= 5
				&& !is_on_cooldown("5shot")
				&& character.mp > G.skills["5shot"].mp) {
				use_skill("5shot", targets);
			}
			else if (character.level >= 60
				&& targets.length >= 3
				&& !is_on_cooldown("3shot")
				&& character.mp > G.skills["3shot"].mp) {
				use_skill("3shot", targets);
			}
		}

		//Piercingshot
		if (character.level >= 72
			&& valid_offense_skill(target, mana_reserve)
			&& target.armor > 0
			&& character.mp > G.skills.piercingshot.mp
			&& is_in_range(target, "piercingshot")
			&& !is_on_cooldown("piercingshot")) {
			use_skill("piercingshot");
		}
		//Hunters Mark
		if (valid_offense_skill(target, mana_reserve)
			&& character.mp > G.skills.huntersmark.mp
			&& is_in_range(target, "huntersmark")
			&& !is_on_cooldown("huntersmark")) {
			use_skill("huntersmark");
		}
		//Supershot
		if (valid_offense_skill(target, mana_reserve)
			&& character.mp > G.skills.supershot.mp
			&& is_in_range(target, "supershot")
			&& !is_on_cooldown("supershot")) {
			use_skill("supershot");
		}
	}
}


function priestSkills(target) {

	//How much Mana should be kept in reserve
	const manaReserve = 0.7;
	const maxHealing = character.attack;
	const maxPartyHealing = (() => { for (let i = G.skills.partyheal.levels.length - 1; i >= 0; i--) if (G.skills.partyheal.levels[i][0] <= character.level) return G.skills.partyheal.levels[i][1] })();
	let hurtPartyMembers = 0;

	//Healing (Party-Heal and healing individual characters)
	for (const name of parent.party_list) {
		const partyMember = get_player(name);
		if (partyMember) {

			//Heal COMPLETE Party
			if (partyMember.hp < ((partyMember.max_hp - G.items.hpot1.gives[0][1]) - maxPartyHealing)
				&& !partyMember.rip) hurtPartyMembers++;
			if (hurtPartyMembers >= 2
				&& character.mp >= G.skills.partyheal.mp
				&& !is_on_cooldown("partyheal")) {
				use_skill("partyheal");
			}

			//Heal ONE Partymember
			if (partyMember.hp < ((partyMember.max_hp - G.items.hpot1.gives[0][1]) - maxHealing)
				&& !partyMember.rip
				&& character.mp >= character.mp_cost
				//&& can_heal(partyMember)
				&& is_in_range(partyMember, "heal")
				&& !is_on_cooldown("heal")) {
				heal(partyMember);
			}

			//Absorb Sins of a Partymember
			if (character.level >= 55
				&& !partyMember.rip
				&& partyMember.name !== character.name //Don"t absorb own sins
				&& partyMember.hp < (partyMember.max_hp - (maxHealing * 2))
				&& character.mp >= G.skills.absorb.mp
				//&& can_heal(partyMember)
				&& is_in_range(partyMember, "absorb")
				&& !is_on_cooldown("absorb")) {
				use_skill("absorb", partyMember);
			}
		}
	}

	//Use Dark Blessing
	if (character.level >= 70
		&& valid_offense_skill(target, manaReserve)
		&& character.mp > (character.max_mp * manaReserve)
		&& character.mp > G.skills.darkblessing.mp
		&& !is_on_cooldown("darkblessing")) {
		use_skill("darkblessing");
		debug("Used Dark Blessing");
	}

	//Curse the enemy
	if (valid_offense_skill(target, manaReserve)
		&& character.mp > (character.max_mp * manaReserve)
		&& character.mp > G.skills.curse.mp
		&& is_in_range(target, "curse")
		&& !is_on_cooldown("curse")) {
		use_skill("curse");
		debug("Cursed the enemy");
	}
}

function valid_offense_skill(target, mana_reserve) {
    if (target &&
        target.level > 1 &&
        monsters_require_focus.includes(target.mtype) &&
        character.mp > (character.max_mp * mana_reserve)
    ) return true;
}

function fight(target) {
    if (can_attack(target) && !is_on_cooldown("attack")) {
        attack(target);
    } else {
        let dist = Math.sqrt(Math.pow(target.real_x - character.real_x, 2) + Math.pow(target.real_y - character.real_y, 2))
        if (dist > character.range - 20)
            smart_move((target.real_x + character.real_x) / 2, (target.real_y + character.real_y) / 2);
    }
}

function get_target() {
    if(target && parent.entities[target] && valid_target(parent.entities[target])) {
        return target;
    } else {
        change_target(null);
    }

    if ((!focus_target || character.name == party_leader) || (focus_target && !(get_player(party_leader)))) {
        //Returns any monster that targets any party-member
        for (let member of parent.party_list) {
            target = get_nearest_monster({
                target: member
            });
            if (valid_target(target)) {
                change_target(target);
                return target;
            }
        }

        //Looks for special monsters
        target = Object.values(parent.entities).filter(entity => special_monsters.includes(entity.mtype))[0];
        if (valid_target(target)) {
            change_target(target);
            return target;
        }


        //Returns any monster that targets nobody
        target = get_nearest_monster({
            type: farm_monster_type,
            no_target: true
        });
		change_target(target);
		return target;
    } else if (focus_target && get_player(party_leader) && get_player(party_leader).target) {
        target = parent.entities[get_player(party_leader).target];
        if (valid_target(target)) {
            change_target(target);
            return target;
        }
    }  else {
        change_target(null);
        return null;
    }
}

function valid_target(target) {
    if (target && target !== null && !target.dead && target.visible && parent.entities[target.id] &&
        (monsters_to_hunt.includes(target.mtype) || event_monsters.includes(target.mtype))) {
        return true;
    } else {
        return false;
    }
}

function use_potions() {
    if (can_use("hp") && ((character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 400)) || 
		character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 300)) {
		use_hp_or_mp();
    }
}