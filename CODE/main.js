load_code('consts')

/* PARTY */
let play_char = "Chantme";
let party = ["FunWarIAm", "FunStrike", "Shepart"];
let merchant_name = "Chantme";
let party_leader = party[0];

/* FIGHTER STATES */
let hunter_toggle = false;
let focus_target = true;
let event_monster_toggle = false;
let fishingToggle = true;

let regular_farm_monster_type = "bat";
let farm_monster_type = "bat";

let player_state = 'idle';

load_code('common')
load_code('merchant')
load_code('warrior')
load_code('ranger')
load_code('priest')

let farming_spot = get_farming_spot(farm_monster_type);
let target = null;

start();

if(character.ctype == 'merchant') {
	setInterval(function() {
		
		if (character.rip) {
			setTimeout(respawn, 15000);
			return;
		}

		use_potions();
		loot();
		merchantSkills();

	}, 5000);
}
else {
	setInterval(function () {
		if (character.rip) return;
	
		use_potions();
		loot();
	
		if (is_moving(character)) return;
	
		let target = get_target();
		if (target) {
			// if (character.ctype === "mage") mageSkills(target);
			if (character.ctype === "priest") priestSkills(target);
			if (character.ctype === "ranger") rangerSkills(target, farm_monster_type);
			if (character.ctype === "warrior") warriorSkills(target);
			fight(target);
		} else if (!is_in_spot(farming_spot)) {
			move_to_spot(farming_spot);
		}
	}, 1000 / 4);
	
	setInterval(function() {
		if (character.rip) {
			if(character.name !== merchant_name) player_state = 'respawning';
			setTimeout(respawn, 15000);
			return;
		};
	
		//If the master is moving, he lays breadcrumbs
		if (focus_target && character.name === party_leader) masterBreadcrumbs();
	
		if(is_moving(character)) return;
	
		//Party follows master [Except the merchant]
		if (focus_target && character.name !== party_leader) followMaster();
	
	}, 1000);
	
	setInterval(function() {
		if (character.rip) return;
		update_farming_spot();
		if (is_moving(character)) return;
	
		relocateItems();
		setTimeout(tidyInventory, 500);
	
		requestPotions();
		transferLoot(merchant_name);
		if (hunter_toggle) handle_hunt_quest();
	}, 5000);
}