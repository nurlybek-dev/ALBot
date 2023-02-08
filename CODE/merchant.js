//Debug mode - Set to True for extensive Logs
const merchantDebugMode = true;

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
	mpot1: 90
};
//Cost 19000 @ 50 each
//Cost 30000 @ 50/50/30/30

//Selling parameters
const sellItemLevel = 3;
const profitMargin = 20;

//Max level to be compounded
const maxCompoundLevel = 5;
//Max level to be upgraded
const maxUpgradeLevel = 3;

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
        debug("Visit farm-party");
		update_farming_spot();
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
	const scrolls = ["scroll1", "cscroll1"];
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

//Auto-buy items from other merchants if they are sold below their value
//Also, auto-join Giveaways
function buyCheapStuff() {
	if (merchantDebugMode) debug("Buying cheap Stuff");
	for (const i in parent.entities) {
		const otherPlayer = parent.entities[i];
		if (otherPlayer.player
			&& otherPlayer.ctype === "merchant"
			&& otherPlayer.slots
			&& distance(character, otherPlayer) < G.skills.mluck.range) {

			const tradeSlots = Object.keys(otherPlayer.slots).filter(tradeSlot => tradeSlot.includes("trade"));
			tradeSlots.forEach(tradeSlot => {
				const otherPlayerTradeSlot = otherPlayer.slots[tradeSlot];
				//Must be a Trade-Slot
				if (otherPlayerTradeSlot) {
					if (!otherPlayerTradeSlot.b //Excludes "whishlisted" items! Trade slots can "sell" or "wishlist"!
						&& otherPlayerTradeSlot.price < item_value(otherPlayerTradeSlot)
						&& character.gold > otherPlayerTradeSlot.price
						//Don't try to buy Giveaways
						&& !otherPlayerTradeSlot.giveaway) {
						//If it's a single item, buy it.
						if (!otherPlayerTradeSlot.q) {
							debug(`Bought 1 ${otherPlayerTradeSlot.name} from ${otherPlayer.name}`);
							trade_buy(otherPlayer, tradeSlot, 1);
							//If the item has a quantity, buy as many as possible
						} else if (otherPlayerTradeSlot.q) {
							//Maximum possible quantity of items that can be bought wit available gold
							let maxBuy = Math.floor(character.gold / otherPlayerTradeSlot.price) < otherPlayerTradeSlot.q ? Math.floor(character.gold / otherPlayerTradeSlot.price) : otherPlayerTradeSlot.q;
							trade_buy(otherPlayer, tradeSlot, maxBuy);
							//parent.trade_buy(tradeSlot, otherPlayer.name, otherPlayerTradeSlot.rid, maxBuy);
						}
						//Auto-Join Giveaways
					} else if (otherPlayerTradeSlot.giveaway
						&& !otherPlayerTradeSlot.list.includes(character.name)) {
						parent.socket.emit('join_giveaway', {
							slot: tradeSlot,
							id: otherPlayer.id,
							rid: otherPlayerTradeSlot.rid,
						});
						debug("Joined giveaway!");
					}
				}
			});
		}
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
	if (merchantDebugMode) debug("Restoring Party");
	if (parent.party_list.length < 4) {
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

//Craft Items
function craftItems(action = "default") {
	if (merchantDebugMode) debug("Crafting Items");
	for (const item of craft_items) {
		if (checkCraftIngredients(item)) {
			if (action === "check") return checkCraftIngredients(item);
			smart_move(find_npc("craftsman"), () => {
				auto_craft(item);
				setTimeout(() => {
					// if (!checkCraftIngredients(item)) openMerchantStand();
				}, 3000);
			});
			return;
		}
	}
	//Checks inventory if all needed ingredients are available
	function checkCraftIngredients(item) {
		let ingredientsComplete = [];
		const { items: ingredients } = G.craft[item];
		if (G.craft[item].cost <= character.gold) {
			for (const ingredient of ingredients) {
				if (locate_item(ingredient[1]) !== -1
					//Check that item has no level...
					&& (!character.items[locate_item(ingredient[1])].level
						//... if it has a level, level must be 0 for the item to be crafted
						|| character.items[locate_item(ingredient[1])].level === 0)) {
					//Check if exactly 1 of this ingredient is needed
					if (ingredient[0] === 1) {
						ingredientsComplete.push(true);
						//If more than 1 of this ingredient is needed, check if the inventory holds enough
					} else if (ingredient[0] > 1
						&& (quantity(ingredient[1]) >= ingredient[0])) {
						//&& (character.items[locate_item(ingredient[1])].q >= ingredient[0])) {
						ingredientsComplete.push(true);
					}
				}
			}
		}
		return ingredients.length === ingredientsComplete.length ? true : false;
	}
}

//Dismantle Items
function dismantleItems(action = "default") {
	if (merchantDebugMode) debug("Dismantling Items");
	if (action === "check") return findDismantleItems("find");
	if (findDismantleItems("find")) {
		smart_move(find_npc("craftsman"), () => {
			dismantle(findDismantleItems("slot"));
			setTimeout(() => {
				// if (!findDismantleItems("find")) openMerchantStand();
			}, 3000);
		});
		return;
	}
	function findDismantleItems(arg) {
		for (const slot in character.items) {
			if (character.items[slot]) {
				if (arg === "find") {
					if (dismantle_items.indexOf(character.items[slot].name) !== -1) return true;
				} else if (arg === "slot") {
					if (dismantle_items.indexOf(character.items[slot].name) !== -1) return slot;
				}
			}
		}
	}
}

function goFishing(action = "default") {
	if (fishingToggle) {
		if (merchantDebugMode) debug("Fishing");

		//Equipment to wear when not fishing
		const mainHand = "candycanesword";
		const offHand = "sshield";
		const fishingSpot = {
			map: "main",
			x: -1368,
			y: -34
		}

		//Check if can go fishing, equip regular Gear if not
		if (action === "check") {
			if (is_on_cooldown("fishing")) equipRegularGear();
			return !is_on_cooldown("fishing");
			//Check if character has a fishingrod. If not, craft one
		} else if (action === "checkFishingRod") {
			checkFishingRod();
		}

		//Check if character has a fishingrod. If not, craft one.
		function checkFishingRod() {
			if (locate_item("rod") === -1
				&& character.slots.mainhand?.name !== "rod") {
				if (character.map === "bank"
					&& locate_item("spidersilk") === -1) {
					retrieveFromBank("spidersilk");
				} else if (character.map === "main"
					&& locate_item("spidersilk") !== -1) {
					buy("staff");
				}
			}
		}

		//Go fishing
		if (!is_on_cooldown("fishing")
			&& (locate_item("rod") !== -1
				|| character.slots.mainhand?.name === "rod")) {
			//Move to fishing spot
			if (distance(character, fishingSpot) > 10) {
				smart_move(fishingSpot, () => { equipFishingGear() });
				//If at fishing spot, equip the fishing rod and fish
			} else if (distance(character, fishingSpot) < 10) {
				if (character.slots.mainhand?.name !== "rod") {
					equipFishingGear();
					//Start fishing!
				} else if (character.slots.mainhand?.name === "rod"
					&& !character.c.fishing) {
					use_skill("fishing");
					setTimeout(() => {
						if (is_on_cooldown("fishing")) {
							equipRegularGear();
						}
					}, 15000);
				}
			}
			// ###### Still needed?? ######
			//If fishing is on cooldown, openMerchantStand()
		} /*else if (is_on_cooldown("fishing")) {
		if (distance(character, fishingSpot) < 10) openMerchantStand();
		equipRegularGear();
	}*/

		//Equip Fishingrod
		function equipFishingGear() {
			if (character.slots.offhand) unequip("offhand");
			if (character.slots.mainhand?.name !== "rod"
				&& locate_item("rod") !== -1) {
				equip(locate_item("rod"));
			}
		}

		//Equip regular Gear
		function equipRegularGear() {
			if (character.slots.mainhand?.name !== mainHand
				&& locate_item(mainHand) !== -1) {
				equip(locate_item(mainHand));
			}
			if (character.slots.offhand?.name !== offHand
				&& locate_item(offHand) !== -1) {
				equip(locate_item(offHand));
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
