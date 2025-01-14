const monsters_to_hunt = [
	"crab", "minimush", "frog",
	"squigtoad", "osnake", "snake", "rat", "armadillo", "croc",
	"squig", "poisio", "tortoise", "bat", "goldenbat"
];

const special_monsters = ["hen", "rooster", "cutebee", "goldenbat", "wabbit"];

const monsters_require_focus = [];

const keepItems = [
	//Items
	"tracker", "computer",
	//Orbs
	"jacko", "orbg", "talkingskull",
	//Gloves
	"handofmidas", "mpgloves", "mmgloves", "mrngloves",
	//Offhands
	"lantern", "wbook1", "t2quiver",
	//Potions & Elixirs
	"hpot1", "mpot1",
	"elixirdex0", "elixirdex1", "elixirdex2",
	"elixirint0", "elixirint1", "elixirint2",
	//"elixirvit0", "elixirvit1", "elixirvit2",
	//"elixirstr0", "elixirstr1", "elixirstr2",
	"elixirluck"
];

/* PARTY */
let play_char = "Chantme";
let party = ["FunStrike", "FunRangerOne", "FunrangerTwo"];
let merchant_name = "Chantme";
let party_leader = party[0];

let farm_monster_type = monsters_to_hunt[0];
let monster_index = 0;
let focus_target = false;

function start() {
    if (character.name == merchant_name) {
        for (i in party) {
			start_character(party[i], "main");
        }
    }
}

function stop() {
	if (character.name == merchant_name) {
        for (i in party) {
			stop_character(party[i], "main");
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
			}
		});
		//Send spare jackos to the merchant, too [Deactivated: Jackos don't drop from monsters, only from rare candy]
		//if (locate_item("jacko") !== -1 && locate_item("jacko") !== 40) send_item(merchant, locate_item("jacko"), 9999);
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

function get_target() {

    if(target && parent.entities[target] && valid_target(parent.entities[target])) {
        return target;
    } else {
        change_target(null);
    }

    if ((!focus_target || character.name == party_leader) || (focus_target && !(get_player(party_leader)))) {
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
        (monsters_to_hunt.includes(target.mtype) || special_monsters.includes(target.mtype))) {
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
    if (get_player(name) && get_player(name).owner === character.owner) {

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

/**
 * log
 * error
 * success
 */
function debug(message) {
	console.log(`${character.name}: ${message}`);
}
//Debug mode - Set to True for extensive Logs
const merchantDebugMode = false;

//Money in pocked [Used to buy Potions, Scrolls and cheap Items]
const reserveMoney = 1000000;
//Minimal number of Upgrade & Compound Scrolls to have
const minScrolls = 10;

//Number of potions to buy each round. 
//Gets tripled if the hunted monster requires a master
const potions = {
	hpot0: 0,
	hpot1: 150,
	mpot0: 0,
	mpot1: 150
};
//Cost 19000 @ 50 each
//Cost 30000 @ 50/50/30/30

//Selling parameters
const sellItemLevel = 5;
const profitMargin = 50;

//Max level to be compounded
const maxCompoundLevel = 5;
//Max level to be upgraded
const maxUpgradeLevel = 5;

let merchant_state = 'idle';


function merchantSkills() {

	//Check if party is incomplete, restore of not
	restoreParty();

	//Buff players with merchant's luck
	merchantsLuck();

	if(is_moving(character)) {
		if(character.stand) close_stand();
		return;
	}

    //Functions only used on "main" map
    if (character.map === "main" && Math.abs(character.real_x) < 20 && Math.abs(character.real_y) < 20 && !is_moving(character)) {
		debug("In main");
        //Sell unwanted items
        sellTrash();

        //Upgrade items
        if(upgradeItems()) return;

		if (buyScrolls("check")) {
			smart_move("scrolls", () => {
				buyScrolls("buy");
			});
        }

        //Compound items
        for (let i = 0; i < maxCompoundLevel; i++) {
			if (findTriple(i)) {
				compoundItems(i);
				return;
			}	
		}

        //searchItems2bSold Returns Array SLOTS. Therefor it can return ZEROES
        //So we have to specifically look for UNDEFINED
        if (searchItems2bSold(sellItemLevel) !== undefined && findEmptyTradeSlots() !== undefined) sellItems(sellItemLevel, profitMargin);

		if(exchangeGemsQuests('check')) {
			const npc = find_npc(locateGems("findNpc"));
			if(distance(character, npc) > 1) {
				smart_move(npc, () => {
					exchangeGemsQuests();
				});
			} else {
				exchangeGemsQuests();
			}
			return;
		}

		openMerchantStand();
    } else if(!is_moving(character) && merchant_state == 'idle') {
		debug("Not in main");
		smart_move("main");
	}

	//Visit farm-party every 10 minutes.
	//Bring potions, take their gold and items
	//and store gold and good items in bank
	if (new Date().getMinutes() % 10 === 0) {
		merchant_state = "visit";
        smart_move(farm_monster_type, () => {
            smart_move("main", () => {
                buyPotions();
                relocateItems();
                let boundary = farming_spot.monster.boundary;
    
                let spot_center_x = Math.floor(boundary[0] + ((boundary[2] - boundary[0]) / 2));
                let spot_center_y = Math.floor(boundary[1] + ((boundary[3] - boundary[1]) / 2));
    
                let pos = {
                    map: farming_spot.map,
                    x: spot_center_x,
                    y: spot_center_y
                };
    
                smart_move(pos, () => {
                    transferPotions();
                    merchantsLuck();
                    setTimeout(function() {
                        smart_move("bank", () => {
                            depositGold();
                            depositSelectedItems();
                            setTimeout(function() {
                                smart_move("main", () => {
                                    merchant_state = "idle";
                                });
                            }, 5000);
                        });
                    }, 5000)
                });
            });
        });
	}
}



//Buy potions
function buyPotions() {
	if (merchantDebugMode) debug("Buying Potions");
	//If farmMonsterType requires a master, buy more potions!	
	const potionModifier = monsters_require_focus.includes(farm_monster_type) ? 3 : 1;
	for (const potion in potions) {
		if (quantity(potion) < potions[potion]) buy_with_gold(potion, (potions[potion] - quantity(potion)) * potionModifier);
	}
}

//Transfer potions to characters
function transferPotions() {
	if (merchantDebugMode) debug("Transferring Potions");
	//All potions not listed here get sold (Check "trash_items"-Array)
	const essentialPotions = ["hpot1", "mpot1"];
	const dexPotions = ["elixirdex0", "elixirdex1", "elixirdex2"];
	const intPotions = ["elixirint0", "elixirint1", "elixirint2"];
	const luckPotions = ["elixirluck"];

	for (const name of parent.party_list) {
		const partyMember = get_player(name);
		if (partyMember) {

			//Deliver essential potions (Health & Mana)
			essentialPotions.forEach(potion => {
				if (locate_item(potion) !== -1) {
					send_item(partyMember, locate_item(potion), Math.floor(quantity(potion) / 3));
					debug("Delivered essential Potions!");
				}
			});
			//Deliver luck potions
			luckPotions.forEach(potion => {
				if (locate_item(potion) !== -1) {
					send_item(partyMember, locate_item(potion), Math.floor(quantity(potion) / 3));
					debug("Delivered Luck Potions!");
				}
			});
			//Deliver dexterity potions to ranger
			if (partyMember.ctype === "ranger") {
				dexPotions.forEach(potion => {
					if (locate_item(potion) !== -1) {
						send_item(partyMember, locate_item(potion), quantity(potion));
						debug("Delivered DexPotions!");
					}
				});
			}
			//Deliver intelligence potions to Priest & Mage
			if (partyMember.ctype === "priest" || partyMember.ctype === "mage") {
				intPotions.forEach(potion => {
					if (locate_item(potion) !== -1 && quantity(potion) % 2 === 0) {
						send_item(partyMember, locate_item(potion), quantity(potion) / 2);
						debug("Delivered intPotions!");
					}
					if (quantity(potion) % 2 !== 0 && Math.round(Math.random()) === 1) {
						send_item(partyMember, locate_item(potion), 1);
						debug("Delivered intPotions!");
					}
				});
			}
		}
	}
}

//Buy Scrolls
function buyScrolls(action) {
	const scrolls = ["scroll0", "cscroll0", "scroll1", "cscroll1"];
	for (const scroll of scrolls) {
		const missingScrolls = minScrolls - quantity(scroll);
		const affordableScrolls = Math.floor(character.gold / G.items[scroll].g);
		const scrollNum = (missingScrolls <= affordableScrolls) ? missingScrolls : affordableScrolls;
		if (action === "check") {
			if (merchantDebugMode) debug("Checking Scrolls");
			if (scrollNum > 0) return true;
		}
		else if (action === "buy"
			&& scrollNum
			&& scrollNum > 0) {
			if (merchantDebugMode) debug("Buying Scrolls");
			buy(scroll, scrollNum);
			debug(`Bought ${scrollNum} ${G.items[scroll].name}`);
		}
	}
}

//Sell trash, keep if it's high grade. (Grades: 0 Normal / 1 High /  2 Rare
function sellTrash() {
	if (merchantDebugMode) debug("Selling Trash");
	character.items.forEach((item, index) => {
		if (item
			&& trash_items.includes(item.name)
			&& item_grade(item) < 5) {
            debug(`Merchant is unloading trash ${item.name}`);
			item.q ? sell(index, item.q) : sell(index, item);
		}
	});
}

//Deposit Gold in bank
function depositGold() {
	if (merchantDebugMode) debug("Depositing Gold");
	bank_deposit(character.gold - reserveMoney);
	debug(`Money deposited! Money in Pocket: ${character.gold}`);
}

//Collects similar items in the bank
//First item has to be stored manually to initialize!
//This is a precaution not to store unwanted items (Overflow bank)
function depositSelectedItems() {
	if (merchantDebugMode) debug("Depositing Items");
	const keepItems = [
		//Items
		"stand0", "tracker", "computer", "sshield", "candycanesword", "rod",
		//Orbs
		"jacko", "orbg", "talkingskull"
	];
	//Loops through character's inventory
	character.items.forEach((item, index) => {
		//Flag to break both nested for-loops
		//[Preventing multiple bank_store() operations of the same item, potentially resulting in a kick]
		let breakLoop = false;
		if (item
			&& !keepItems.includes(item.name)) {
			//Loops through bank-sections
			for (const box in character.bank) {
				if (breakLoop) break;
				//Can't store anything in gold-box
				if (box === "gold") continue;
				//Loops through individual bank-slots
				for (const slot of character.bank[box]) {
					if (slot) {
						if (item_grade(item) === 2
							|| (item.level
								&& item.level > sellItemLevel)
							|| (slot.name === item.name
								&& (slot.q
									|| slot.level <= item.level))) {
							bank_store(index);
							debug(`Stored ${item.name} in bank!`);
							breakLoop = true;
							break;
						}
					}
				}
			}
		}
	});
}

//Upgrade Items
function upgradeItems() {
	if (merchantDebugMode) debug("Upgrading Items");

	if(character.q.upgrade) return true;

	const scrolls = ["scroll0", "scroll1", "scroll2"];
	for (slot in character.items) {
		if (!character.q.upgrade && character.items[slot] && 
			(character.items[slot].name && upgrade_items.indexOf(character.items[slot].name) !== -1 && G.items[character.items[slot].name].upgrade)
			&& character.items[slot].level <= maxUpgradeLevel) {
			//Use massproduction skill
			massProduction();
			//Upgrade item
			upgrade(slot, locate_item(scrolls[item_grade(character.items[slot])]));
			debug(`Try upgrade ${character.items[slot].name}`);
			return true;
		}
	}

	return false;
}

//Compound items
function compoundItems(level) {
	if (merchantDebugMode) debug("Compounding Items");
	const scrolls = ["cscroll0", "cscroll1", "cscroll2"];
	const triple = findTriple(level);
	if (triple
		&& triple.length === 3
		&& !character.q.compound) {
		//Use massproduction skill
		massProduction();
		//Compound item
		compound(triple[0], triple[1], triple[2], locate_item(scrolls[item_grade(character.items[triple[0]])]));
		debug(`Compound accessory!`)
	}
}

//Mass Production
function massProduction() {
	if (merchantDebugMode) debug("Using Mass Production Skill");
	if (character.level >= 60
		&& character.mp > G.skills.massproductionpp.mp
		&& !is_on_cooldown("massproductionpp")) {
		use_skill("massproductionpp");
		debug("Used Mass Production 90%");
	} else if (character.level >= 30
		&& character.mp > G.skills.massproduction.mp
		&& !is_on_cooldown("massproduction")) {
		use_skill("massproduction");
		debug("Used Mass Production 50%");
	}
}

//Find a triple of items (same item, same level) 
function findTriple(level) {
	if (merchantDebugMode) debug("Finding Triple");
	let compoundTriple = [];
	//Look for triples
	for (let i = 0; i <= 41; i++) {
		if (character.items[i]?.level === level
			//First loop selects a compoundable item so the two 
			// nested loops only need to match item name & item level
			&& G.items[character.items[i].name]?.compound
			//Validate Compound: If  item is needed for crafting,
			//it must NOT be compounded (Craft only takes lvl 0 items!)
			&& validateCompound(character.items[i].name)) {
			for (let j = i + 1; j <= 41; j++) {
				if (character.items[j]
					&& character.items[j].name === character.items[i].name
					&& character.items[j].level === level) {
					for (let k = j + 1; k <= 41; k++) {
						if (character.items[k]
							&& character.items[k].name === character.items[j].name
							&& character.items[k].level === level) {
                            debug(`Slot i: ${i} item: ${character.items[i].name} Slot j: ${j} item: ${character.items[j].name} Slot k: ${k} item: ${character.items[k].name}`)
							compoundTriple.push(i, j, k);
							return compoundTriple
						}
					}
				}
			}
		}
	}

	//Validate Compound: If  item is needed for crafting,
	//it must NOT be compounded (Craft only takes lvl 0 items!)
	function validateCompound(compoundItem) {
		for (const craftItem of craft_items) {
			const { items: ingredients } = G.craft[craftItem];
			for (const ingredient of ingredients) {
				if (compoundItem === ingredient[1]) return false;
			}
		}
		return true;
	}
}

//Find items to be sold  in the merchant stand
function searchItems2bSold(sellItemLevel = 3) {
	if (merchantDebugMode) debug("Searching Items to be sold");
	for (const slot in character.items) {
		if (character.items[slot]
			&& !craft_items.includes(character.items[slot].name)
			&& character.items[slot].level === sellItemLevel) return slot;
	}
}

//Sell items that match a certain level, with a profit
function sellItems(sellItemLevel = 2, profitMargin = 15) {
	if (merchantDebugMode) debug("Selling Items");
	trade(searchItems2bSold(sellItemLevel), findEmptyTradeSlots(), item_value(character.items[searchItems2bSold(sellItemLevel)]) * profitMargin);
}

//Find empty trade-slots to put goods in
function findEmptyTradeSlots() {
	const tradeSlots = Object.keys(character.slots).filter(tradeSlot => tradeSlot.includes("trade"));
	//Returns slot + 1 because character.slots is 0-indexed,
	//but Trate-Slots start with 1 NOT ZERO!
	for (const slot in tradeSlots) {
		if (!character.slots[tradeSlots[slot]]) return Number(slot) + 1;
	}
}

//Buff other characters with Merchants Luck!
function merchantsLuck() {
	if (merchantDebugMode) debug("Using Merchants Luck Skill");
	let otherPlayers = [];
	for (i in parent.entities) {
		if (parent.entities[i].player
			&& parent.entities[i].ctype
			&& !parent.entities[i].rip
			&& !parent.entities[i].npc
			&& (!parent.entities[i].s.mluck
				|| parent.entities[i].s.mluck.strong === false)
			/*
			&& (!parent.entities[i].s.mluck
			 || !parent.entities[i].s.mluck.f
			 || parent.entities[i].s.mluck.f != character.name)
			*/
			&& character.mp > (character.max_mp / 10)
			&& character.mp > G.skills.mluck.mp
			&& distance(character, parent.entities[i]) < G.skills.mluck.range
			&& is_in_range(parent.entities[i], "mluck")
			&& !is_on_cooldown("mluck")) {
			//All eligible players get pushed to the array...
			otherPlayers.push(parent.entities[i]);
		}
	}
	//...and then one random player is picked!
	if (otherPlayers.length > 0) {
		const luckyPlayer = Math.floor(Math.random() * otherPlayers.length)
		use_skill("mluck", otherPlayers[luckyPlayer].name);
		debug(`Giving luck to: ${otherPlayers[luckyPlayer].name}`);
	}
}

//If a character is not in the party, reatore it
function restoreParty() {
	if (parent.party_list.length < 3) {
		initParty();
	}
}

//Go to the market and sell things
function openMerchantStand() {
	if (merchantDebugMode) debug("Opening Merchant Stand");
	/*
	IMPORTANT!!! Because this function gets called with a setTimeout(),
	it can be called WHILE the character is moving,
	causing too many calls to the server, resulting in a kick!
	We therefor MUST check in the beginning if the character is already moving!
	*/
	if (is_moving(character)) {
		if(character.stand) close_stand();
		return;
	}

	if(!character.stand) open_stand();
}

//Exchange Gems & Quests at the corresponding NPC
function exchangeGemsQuests(action = "default") {
	if (merchantDebugMode) debug("Exchanging Gems & Quests");
	if (action === "check") return locateGems("findGems");
	if (locateGems("findGems")) {
		if(!character.q.exchange) {
			exchange(locateGems("getSlotNum"));
		}
	}
}

//Finds Gems & Quests in Inventory
function locateGems(arg) {
	for (const slotNum in character.items) {
		if (character.items[slotNum]) {
			const item = G.items[character.items[slotNum].name];
			//If the item is a gem, exchange it
			if ((item.type === "gem"
				|| item.type === "box"
				|| item.type === "misc"
				|| item.type === "quest")
				//"e"-key means the item is exchangeable
				&& item.e
				//Some quests (seashells, ornaments) need more than 1 item to be exchangeable
				&& item.e <= character.items[slotNum].q) {
				//Gem found
				if (arg === "findGems") {
					return true;
					//Return slot
				} else if (arg === "getSlotNum") {
					return slotNum;
					//Go to the correct NPC
				} else if (arg === "findNpc") {
					//If the item is a gem (not a quest), go to Xyn
					if (!item.quest) {
						return "exchange";
						//If the item is  a quest, go to the corresponding NPC
					} else if (item.quest) {
						for (const npc in G.npcs) {
							if (G.npcs[npc].quest === item.quest) return npc;
						}
					}
				}
			}
		}
	}
}

//Retrieve items from Bank
function retrieveFromBank(item) {
	//Loops through bank-sections
	for (const box in character.bank) {
		//Can't retrieve  anything from gold-box
		if (box === "gold") continue;
		//Loops through individual bank-slots
		for (const slot in character.bank[box]) {
			if (character.bank[box][slot]) {
				if (character.bank[box][slot].name === item) {
					bank_retrieve(box, slot);
					return;
				}
			}
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
				debug("Used 5-Shot");
			}
			else if (character.level >= 60
				&& targets.length >= 3
				&& !is_on_cooldown("3shot")
				&& character.mp > G.skills["3shot"].mp) {
				use_skill("3shot", targets);
				debug("Used 3-Shot");
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
			debug("Used Piercingshot");
		}
		//Hunters Mark
		if (valid_offense_skill(target, mana_reserve)
			&& character.mp > G.skills.huntersmark.mp
			&& is_in_range(target, "huntersmark")
			&& !is_on_cooldown("huntersmark")) {
			use_skill("huntersmark");
			debug("Used Hunters Mark");
		}
		//Supershot
		if (valid_offense_skill(target, mana_reserve)
			&& character.mp > G.skills.supershot.mp
			&& is_in_range(target, "supershot")
			&& !is_on_cooldown("supershot")) {
			use_skill("supershot");
			debug("Used Supershot");
		}
	}
}

let target = null;

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

        if(is_moving(character)) return;

		target = get_target();
		if (target) {
			// if (character.ctype === "mage") mageSkills(target);
			if (character.ctype === "priest") priestSkills(target);
			if (character.ctype === "ranger") rangerSkills(target, farm_monster_type);
			if (character.ctype === "warrior") warriorSkills(target);
			fight(target);
		}
	}, 1000 / 4);
	
	setInterval(function() {
		if (character.rip) {
            respawn();
            return;
        };
		requestPotions();
		transferLoot(merchant_name);
	}, 5000);

    setInterval(function() {
        if(!is_moving(character) && !target) smart_move(farm_monster_type);
    }, 30000);
}

setInterval(function() {
    monster_index++;
    if(monster_index >= monsters_to_hunt.length) {
        monster_index = 0;
    }
    farm_monster_type = monsters_to_hunt[monster_index];
    smart_move(farm_monster_type);
}, 1000 * 60 * 30)
