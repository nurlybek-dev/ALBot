function start() {
    if (character.name == party_leader) {
        for (i in party) {
			start_character(party[i], "main");
        }
    }
}

function stop() {
	if (character.name == party_leader) {
        for (i in party) {
			stop_character(party[i], "main");
        }
    }
}


//Relocate certain items to certain slots
function relocateItems() {
	//All Characters Special Items
	if (locate_item("tracker") !== -1
		&& locate_item("tracker") !== 0) swap(locate_item("tracker"), 0);
	if (locate_item("jacko") !== -1
		&& locate_item("jacko") !== 1) swap(locate_item("jacko"), 1);
	//Only farmers have Hand of Midas
	if (character.ctype !== "merchant"
		&& locate_item("handofmidas") !== -1
		&& locate_item("handofmidas") !== 2) swap(locate_item("handofmidas"), 2);
	//Only Priest and Mage have a lantern
	if ((character.ctype !== "priest"
		|| character.ctype !== "mage")
		&& locate_item("lantern") !== -1
		&& locate_item("lantern") !== 3) swap(locate_item("lantern"), 3);
	//Potions
	if (locate_item("hpot1") !== -1
		&& locate_item("hpot1") !== 35) swap(locate_item("hpot1"), 35);
	if (locate_item("mpot1") !== -1
		&& locate_item("mpot1") !== 36) swap(locate_item("mpot1"), 36);
}

function tidyInventory() {
	for (let i = 0; i <= 34; i++) {
		if (character.items[i] === null) {
			for (let j = 34; j > i; j--) {
				if (character.items[j]) swap(j, i);
			}
		}
	}
}

//If a characters Health / Mana Potions are exhausted,
//it will request some from other Party-Members
function requestPotions() {
	if (character.ctype === "merchant") return;
	const potions = ["hpot1", "mpot1"];
	let recipients = [];
	let neededPotions = [];
	for (member of parent.party_list) if (member !== character.name && member !== merchant_name) recipients.push(member);
	for (potion of potions) if (locate_item(potion) === -1) neededPotions.push(potion);
	if (neededPotions.length) {
		send_cm(recipients, {
			message: "needPotions",
			potions: neededPotions
		});
	}
}

function transferLoot(merchantName) {
	if (character.ctype === "merchant") return;
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
				debug("Sent items to merchant.");
			}
		});
		//Send spare jackos to the merchant, too [Deactivated: Jackos don't drop from monsters, only from rare candy]
		//if (locate_item("jacko") !== -1 && locate_item("jacko") !== 40) send_item(merchant, locate_item("jacko"), 9999);
	}
}



//Handle Hunter Quest
function handle_hunt_quest() {
    let monster_type;
    let hunted_monsters;
    if (hunter_toggle) {
        //Get the quest
        if (!character.s.monsterhunt) {
            debug("Getting new hunterQuest");
            if(character.name !== merchant_name) player_state = 'getting quest';
            smart_move({
                to: "monsterhunter"
            }, function () {
                parent.socket.emit("monsterhunt");
                update_farming_spot();
            });
            //If character has a quest, handle it
        } else if (character.s.monsterhunt) {
            monster_type = character.s.monsterhunt.id;
            hunted_monsters = _get("hunted_monsters") || [];
            //Check if quest can be pursued
            if (character.s.monsterhunt.c > 0) {
                let already_added;
                hunted_monsters.forEach(element => {
                    if (element.quest_giver === character.name) already_added = true
                });
                if (monsters_to_hunt.includes(monster_type) && !already_added) {
                    hunted_monsters.unshift({
                        monster_type: monster_type,
                        quest_giver: character.name,
                        timestamp: Date.now() + character.s.monsterhunt.ms
                    });
                    _set("hunted_monsters", hunted_monsters);
                    debug("Setting HunterQuest in locStor");
                }
            }
            //Turn in fulfilled quest
            if (character.s.monsterhunt.c === 0) {
                debug("Fulfilled Hunter Quest");
                smart_move({
                    to: "monsterhunter"
                }, function () {
                    //Remove fulfilled quest from localStorage
                    hunted_monsters.forEach((element, index) => {
                        if (element.quest_giver === character.name) {
                            hunted_monsters.splice(index, 1);
                        }
                    });
                    _set("hunted_monsters", hunted_monsters);
                    //Turn in quest
                    parent.socket.emit("monsterhunt");
                    //Get new quest
                    parent.socket.emit("monsterhunt");
                    //Update farming spot
                    update_farming_spot();
                });
            }
            //Remove quests older than 30 minutes
            hunted_monsters.forEach((element, index) => {
                if (element.timestamp && Date.now() > element.timestamp) {
                    hunted_monsters.splice(index, 1);
                    _set("hunted_monsters", hunted_monsters);
                    debug("Deleted old quest from LocStor");
                }
            });
        }
    }
}

function use_potions() {
    if (can_use("hp") && ((character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 200)) || 
		character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 300)) {
		use_hp_or_mp();
    }
}

//on_party_invite gets called _automatically_ by the game on an Invite-Event 
function on_party_invite(name) {
    if (get_player(name) && get_player(name).owner !== character.owner) return;
    accept_party_invite(name);
}

//Handles "Stacked" Character-Event
character.on("stacked", (data) => {
    //If there"s a master, stay close
    if (monsters_require_focus.includes(farm_monster_type)) {
        //if (character.name === characterNames[0]) xmove(character.x, character.y + 20);
        if (character.name === party[1]) xmove(character.x + 40, character.y - 45);
        if (character.name === party[2]) xmove(character.x - 40, character.y - 45);
        if (character.name === merchant_name) xmove(character.x, character.y - 80);
    }
    //If there is no master, spread the characters around, for better farming efficiency
    else {
        //if (character.name === characterNames[0]) xmove(character.x, character.y + 60);
        if (character.name === party[1]) xmove(character.x + 70, character.y - 60);
        if (character.name === party[2]) xmove(character.x - 70, character.y - 60);
        if (character.name === merchant_name) xmove(character.x, character.y - 80);
    }
});

function get_farming_spot(monster_type) {
    //Find all spawns of the monster
    let spots = [];
    for (map in G.maps) {
        if (!available_maps.includes(map)) continue;
        for (monsters in G.maps[map].monsters) {
            let monster = G.maps[map].monsters[monsters];
            if (monster.type === monster_type) {
                spots.push({
                    map: map,
                    monster: monster
                });
            }
        }
    }
    //Find the spawn with most monsters
    let most_monsters = 0;
    let index_most_monsters = 0;
    spots.forEach((farmingSpot, index) => {
        if (farmingSpot.monster.count > most_monsters) {
            most_monsters = farmingSpot.monster.count;
            index_most_monsters = index;
        }
    });

    return spots[index_most_monsters];
}

function is_in_spot(spot) {
    x1 = spot.monster.boundary[0];
    y1 = spot.monster.boundary[1];

    x2 = spot.monster.boundary[2];
    y2 = spot.monster.boundary[3];

    return character.real_x > x1 && character.real_y > y1 && character.real_x < x2 && character.real_y < y2;
}

function move_to_spot(spot) {
    let boundary = spot.monster.boundary;

    let spot_center_x = Math.floor(boundary[0] + ((boundary[2] - boundary[0]) / 2));
    let spot_center_y = Math.floor(boundary[1] + ((boundary[3] - boundary[1]) / 2));
    if(character.name !== merchant_name) player_state = 'moving to spot';
    debug("Moving to spot");
    smart_move({
        map: spot.map,
        x: spot_center_x,
        y: spot_center_y
    }, function () {
        if (character.name === party[1]) xmove(spot_center_x + 70, spot_center_y - 30); //Old: +45 / -20
        if (character.name === party[2]) xmove(spot_center_x - 70, spot_center_y - 30); //Old: -45 / -20
    });
}

//Update farming spot.
//1. Check for Event-Monsters
//2. Do Hunting-Quests
//3. Regular farming
function update_farming_spot() {
    let hunted_monsters = _get("hunted_monsters");
    //Check for rare Event-Monsters
    if (event_monster_toggle && find_event_monster("get_monster")) {
        farm_monster_type = find_event_monster("get_monster");
        //Hunted Monsters can be not set, or an empty array
        //of length 0, that"s why both must be checked
    } else if (hunter_toggle && hunted_monsters && hunted_monsters.length > 0) {
        farm_monster_type = hunted_monsters[hunted_monsters.length - 1].monsterType;
    } else {
        farm_monster_type = regular_farm_monster_type;
    }
    //No matter if a hunt is going on or not, update farmingSpotData
    farming_spot = get_farming_spot(farm_monster_type);
    //Adjust master according to monster difficulty
    focus_target = monsters_require_focus.includes(farm_monster_type) ? true : false;

    if(character.name !== merchant_name) player_state = `farm ${farm_monster_type}`;
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
        if (valid_target(target)) {
            change_target(target);
            return target;
        }
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

//Only use skill when necessary
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
            move((target.real_x + character.real_x) / 2, (target.real_y + character.real_y) / 2);
    }
}


function initParty() {
	for (const name of party) {
		if (!Object.keys(parent.party).includes(name)) send_party_invite(name);
	}
}

//Handles all incoming CodeMessages
function on_cm(name, data) {
    if (get_player(name)
        && get_player(name).owner === character.owner) {

        //Handles all CM's
        if (data.message === "needPotions") sendPotion(name, data);
    }
}
  
//Sends Health Potions to Partymembers
function sendPotion(name, data) {
    if (character.ctype === "merchant") return;
    for (potion of data.potions) if (locate_item(potion) !== -1 && quantity(potion) >= 2) send_item(name, locate_item(potion), Math.floor(quantity(potion) / 2));
    log(`Got cm from ${name} requesting ${data.potions}`, "red")
}

  //Master character lays breadcrumbs
function masterBreadcrumbs() {
	//Master writes location to localStorage
	if (focus_target && character.name === party_leader) {
        _set("MasterPos", {
            map: character.map,
            in: character.in,
            x: Math.floor(character.real_x),
            y: Math.floor(character.real_y)
	    });
    }
}

//Follow master character
function followMaster() {
	const theMaster = get_player(party_leader);
	const masterMaxDist = character.range;
	let pos = _get("MasterPos");
	if (focus_target && character.name !== party_leader) {
		//If master is on screen, follow him
		if (theMaster && Math.ceil(distance(character, theMaster)) > masterMaxDist) {
			debug("Following Master with Get_Player");
			xmove(theMaster.x, theMaster.y);
            if(character.name !== merchant_name) player_state = 'follow master';
		}
		//If the master is too far away,
		//followers read masters location from localStorage
		else if (!theMaster && pos) {
			debug("Following Master from Local Storage");
			smart_move(pos);
            if(character.name !== merchant_name) player_state = 'follow master';
		}
	}
}



function _get(name)
{
	// persistent get function that works for serializable objects
	try{
		return JSON.parse(get("cstore_"+name));
	}catch(e){
		return null;
	}
}

function _set(name,value)
{
	// persistent set function that works for serializable objects
	try{
		set("cstore_"+name,JSON.stringify(value));
		return true;
	}catch(e){
		debug("set() call failed for: "+name+" reason: "+e,colors.code_error);
		return false;
	}
}

/**
 * log
 * error
 * success
 */
function debug(message) {
	game_log(`${character.name}: ${message}`);
}