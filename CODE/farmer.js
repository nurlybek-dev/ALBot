var reviving = false;
var targetMonster = "crab";
var fighting = true;

if (character.rip) {
    setTimeout(function () {
        respawn();
        setTimeout(function () {
            smart_move(targetMonster, function () {
                fighting = true;
            });
        }, 1000);
    }, 12000);
} else {
    smart_move(targetMonster, function () {
        fighting = true;
    });
}

setInterval(function () {
    if (!fighting) {
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

    let target;
    target = get_nearest_monster({type: targetMonster});
    change_target(target);
    if (target) {
        if (character.ctype === "ranger") rangerSkills(target);
        if (can_attack(target)) {
            attack(target);
        } else {
            let dist = Math.sqrt(Math.pow(target.real_x - character.real_x, 2) + Math.pow(target.real_y - character.real_y, 2))
            if (dist > character.range - 20)
                move((target.real_x + character.real_x) / 2, (target.real_y + character.real_y) / 2);
        }
    }
}, 1000 / 4);

setInterval(transferLoot, 5000);

function use_potions() {
    if (can_use("hp") && ((character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 200)) || 
		character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 300)) {
		use_hp_or_mp();
    }
}

function rangerSkills(target) {

	//How much Mana should be kept in reserve
	const mana_reserve = 0.8;

	
	//Use Ranger Skills
	if (character.mp > (character.max_mp * mana_reserve)) {

		//Multishots (3-Shot and 5-Shot)
		//ONLY if there is no master!
		if (!is_on_cooldown("attack")) {
			const targets = Object.values(parent.entities).filter(entity => entity.mtype === targetMonster && entity.level <= 1 && is_in_range(entity, "3shot") && is_in_range(entity, "5shot"));
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
	}
}

function transferLoot(merchantName) {
	const merchant = get_player(merchantName);
	if (character.ctype !== "merchant"
		&& merchant
		&& merchant.owner === character.owner
		&& distance(character, merchant) < 400) {
		//Transfer Gold
		if (character.gold > 1000) send_gold(merchant, character.gold)
		//Transfer Items
		character.items.forEach((item, index) => {
			if (item && !keepItems.includes(item.name)) {
				send_item(merchant, index, 9999);
			}
		});
		//Send spare jackos to the merchant, too [Deactivated: Jackos don't drop from monsters, only from rare candy]
		//if (locate_item("jacko") !== -1 && locate_item("jacko") !== 40) send_item(merchant, locate_item("jacko"), 9999);
	}
}

function on_party_invite(name) {
    if (get_player(name) && get_player(name).owner !== character.owner) return;
    accept_party_invite(name);
}
