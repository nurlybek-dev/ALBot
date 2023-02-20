const upgrade_items = [
	//Hunter Sets
	"mchat", "mcgloves", "mcpants", "mcarmor", "mcboots",
	"mmhat", "mmgloves", "mmpants", "mmarmor", "mmshoes",
	"mphat", "mpgloves", "mppants", "mparmor", "mpshoes",
	"mphat", "mpgloves", "mppants", "mparmor", "mpshoes",
	"mrnhat", "mrngloves", "mrnpants", "mrnarmor", "mrnboots",
];

const craft_items = [
	"rod", 
	"ctristone", 
	"firebow", 
	"frostbow", 
	"fierygloves", 
	"wingedboots", 
	"elixirdex1", 
	"elixirdex2", 
	"elixirint1", 
	"elixirint2",
	"elixirvit1", 
	"elixirvit2", 
	"xbox", 
	"basketofeggs"
];

const dismantle_items = [
	// "fireblade", "daggerofthedead", "swordofthedead", "spearofthedead", "goldenegg"
];

const trash_items = [
    // HELMETS
        "helmet",
        "wcap",
        "partyhat",
        "xmashat",
        "rednose",
        "helmet1",
        "bunnyears",
        "eears",
        // "gphelmet",
        // "mphat",
        // "mmhat",
        // "mwhelmet",
        // "mrnhat",
        // "mrhood",
        // "mchat",
        // "phelmet",
        "ghatb",
        "ghatp",
        // "cyber",
        // "hhelmet",
        // "tigerhelmet",
        // "xhelmet",
        // "fury",
        // "oxhelmet",
    
    // ARMORS
        "tshirt1",
        // "tshirt3",
        // "tshirt8",
        // "tshirt9",
        "tshirt2",
        "tshirt0",
        // "tshirt7",
        // "tshirt6",
        // "tshirt4",
        // "tshirt88",
        "coat",
        "wattire",
        "xmassweater",
        "epyjamas",
        "coat1",
        // "mwarmor",
        // "mrnarmor",
        // "mmarmor",
        // "mrarmor",
        // "mcarmor",
        // "mparmor",
        // "luckyt",
        "sweaterhs",
        "pyjamas",
        "harmor",
        // "mcape",
        // "xarmor",
        // "vattire",
        // "cdragon",
        // "warpvest",
    
    // UNDERARMORS
        "pants",
        "wbreeches",
        "xmaspants",
        "pants1",
        // "mmpants",
        // "mcpants",
        // "mppants",
        // "mwpants",
        // "mrpants",
        // "mrnpants",
        // "frankypants",
        "hpants",
        // "fallen",
        // "starkillers",
        // "xpants",
    
    // GLOVES
        "gloves",
        "wgloves",
        "poker",
        "gloves1",
        "mittens",
        // "mcgloves",
        // "mwgloves",
        // "mpgloves",
        // "mmgloves",
        // "mrgloves",
        // "mrngloves",
        // "fierygloves",
        "hgloves",
        // "vgloves",
        // "supermittens",
        // "handofmidas",
        // "powerglove",
        // "xgloves",
        // "goldenpowerglove",
        // "mpxgloves",
    
    // SHOES
        "shoes",
        "eslippers",
        "wshoes",
        "xmasshoes",
        "shoes1",
        // "wingedboots",
        // "mcboots",
        // "mmshoes",
        // "mrboots",
        // "mpshoes",
        // "mrnboots",
        // "mwboots",
        // "vboots",
        // "snowboots",
        "iceskates",
        "hboots",
        // "xboots",
    
    // CAPES
        // "gcape",
        // "cape",
        // "ecape",
        // "angelwings",
        // "vcape",
        // "stealthcape",
        // "bcape",
        // "tigercape",
        // "fcape",
    
    // RINGS
        // "dexring",
        // "ringsj",
        // "intring",
        // "vitring",
        // "strring",
        // "cdarktristone",
        // "ctristone",
        // "armorring",
        // "resistancering",
        // "cring",
        // "solitaire",
        // "suckerpunch",
        // "vring",
        // "zapper",
        // "ringofluck",
        // "trigger",
        // "ringhs",
        // "goldring",
    
    // EARRINGS
        // "strearring",
        // "dexearring",
        // "intearring",
        // "vitearring",
        // "dexearringx",
        // "lostearring",
        // "cearring",
        // "molesteeth",
        // "mearring",
    
    // AMULETS
        "hpamulet",
        // "warmscarf",
        // "dexamulet",
        // "skullamulet",
        // "intamulet",
        // "stramulet",
        // "t2dexamulet",
        // "t2stramulet",
        // "t2intamulet",
        // "spookyamulet",
        // "snring",
        // "bfangamulet",
        // "amuletofm",
        // "sanguine",
        // "mpxamulet",
        // "northstar",
    
    // BELTS
        "hpbelt",
        // "lbelt",
        // "dexbelt",
        // "strbelt",
        // "intbelt",
        // "mbelt",
        // "santasbelt",
        // "sbelt",
        // "mpxbelt",
    
    // ORBS
        // "test_orb",
        // "orbg",
        // "jacko",
        // "ftrinket",
        // "talkingskull",
        // "rabbitsfoot",
        // "charmer",
        // "orbofsc",
        // "orbofdex",
        // "orbofint",
        // "orbofvit",
        // "orbofstr",
        // "tigerstone",
        // "vorb",
    
    // WEAPONS
        "broom",
        "mace",
        "wbasher",
        "claw",
        "blade",
        "cclaw",
        // "staff",
        "stinger",
        // "hbow",
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
        // "fclaw",
        "spear",
        "candycanesword",
        // "fsword",
        "basher",
        // "frostbow",
        // "t2bow",
        "rapier",
        "pmace",
        "cupid",
        "snowflakes",
        "carrotsword",
        // "fireblade",
        "ornamentstaff",
        "merry",
        "bataxe",
        "pinkie",
        "dagger",
        // "firebow",
        // "firestaff",
        "swordofthedead",
        "daggerofthedead",
        // "woodensword",
        "maceofthedead",
        "staffofthedead",
        "bowofthedead",
        // "harbringer",
        // "oozingterror",
        // "froststaff",
        // "firestars",
        "crossbow",
        // "spearofthedead",
        // "harpybow",
        // "t3bow",
        "pmaceofthedead",
        // "lmace",
        // "hammer",
        // "gstaff",
        // "hdagger",
        // "dragondagger",
        // "gbow",
        // "scythe",
        // "vsword",
        // "vdagger",
        // "vstaff",
        // "vhammer",
        // "heartwood",
        // "dartgun",
        // "wblade",
    
    // SHILDS
        "wshield",
        // "shield",
        // "sshield",
        // "tigershield",
        // "xshield",
        // "mshield",
    
    // OFFHANDS
        "wbook0",
        // "quiver",
        // "lantern",
        // "wbookhs",
        // "wbook1",
        // "t2quiver",
        // "exoarm",
    
    // ELIXIRS
        // "xshot",
        // "gum",
        // "cake",
        // "candypop",
        // "pumpkinspice",
        // "elixirstr0",
        // "elixirint0",
        // "eggnog",
        // "elixirvit0",
        // "elixirdex0",
        // "bunnyelixir",
        // "hotchocolate",
        // "greenbomb",
        // "swirlipop",
        // "espresso",
        // "elixirvit1",
        // "elixirstr1",
        // "elixirdex1",
        // "elixirint1",
        // "ale",
        // "wine",
        // "whiskey",
        // "elixirvit2",
        // "elixirstr2",
        // "elixirdex2",
        // "elixirint2",
        // "blue",
        // "pico",
        // "vblood",
        // "elixirpnres",
        // "elixirluck",
        // "elixirfzres",
        // "elixirfires",
    
    // POTIONS
        "hpot0",
        "mpot0",
        // "hpot1",
        // "mpot1",
        // "snakeoil",
        // "hpotx",
        // "mpotx",
    
    // SCROLLS
        // "scroll0",
        // "cscroll0",
        // "evasionscroll",
        // "outputscroll",
        // "strscroll",
        // "critscroll",
        // "goldscroll",
        // "lifestealscroll",
        // "forscroll",
        // "intscroll",
        // "apiercingscroll",
        // "armorscroll",
        // "resistancescroll",
        // "mpcostscroll",
        // "xpscroll",
        // "reflectionscroll",
        // "manastealscroll",
        // "frequencyscroll",
        // "rpiercingscroll",
        // "dreturnscroll",
        "vitscroll",
        // "speedscroll",
        // "dexscroll",
        // "luckscroll",
        // "scroll1",
        // "cscroll1",
        // "offeringp",
        // "scroll2",
        // "cscroll2",
        // "offering",
        // "offeringx",
        // "scroll3",
        // "scroll4",
        // "cscroll3",
    
    // Crafting and Collecting
        // "essenceoflife",
        // "rattail",
        "frogt",
        // "carrot",
        "pstem",
        "whiteegg",
        // "bfur",
        // "electronics",
        // "essenceofgreed",
        // "mbones",
        "gslime",
        "beewings",
        // "bandages",
        // "rfur",
        // "smush",
        // "dstones",
        "crabclaw",
        // "bwing",
        "spores",
        // "lspores",
        // "cscale",
        // "cocoon",
        // "spidersilk",
        // "pleather",
        // "drapes",
        // "ascale",
        // "feather0",
        // "feather1",
        // "brownegg",
        // "snakefang",
        // "tshell",
        // "bronzenugget",
        // "sstinger",
        // "essenceofnature",
        // "ink",
        "lotusf",
        // "emptyheart",
        // "rfangs",
        // "svenom",
        // "bfang",
        // "cshell",
        // "essenceoffire",
        // "bronzeingot",
        // "essenceofether",
        // "essenceoffrost",
        // "btusk",
        // "ectoplasm",
        // "goldnugget",
        // "trinkets",
        // "ijx",
        "bcandle",
        // "watercore",
        // "goldingot",
        // "platinumnugget",
        // "nheart",
        // "networkcard",
        // "platinumingot",
    
    // Exchangeables
        // "5bucks",
        // "gift1",
        // "seashell",
        // "gift0",
        // "leather",
        // "ornament",
        // "troll",
        // "basketofeggs",
        // "mistletoe",
        // "candycane",
        // "candy1",
        // "gem1",
        // "greenenvelope",
        // "redenvelopev2",
        // "redenvelopev3",
        // "redenvelopev4",
        // "redenvelope",
        // "gemfragment",
        // "goldenegg",
        // "armorbox",
        // "bugbountybox",
        // "candy0",
        // "gem0",
        // "weaponbox",
        // "xbox",
        // "cosmo2",
        // "cosmo0",
        // "mysterybox",
        // "cosmo3",
    
    // KEYS
        // "frozenkey",
        // "cryptkey",
        // "stonekey",
        // "tombkey",
        // "bkey",
        // "ukey",
        // "dkey",
    
    // OTHERS
        // "emptyjar",
        // "cxjar",
        // "snowball",
        // "emotionjar",
        // "coal",
        // "tracker",
        // "confetti",
        "smoke",
        // "firecrackers",
        // "shadowstone",
        // "poison",
        // "rod",
        // "pickaxe",
        // "x2",
        // "x0",
        // "x7",
        // "x5",
        // "egg3",
        // "egg5",
        // "egg0",
        // "egg2",
        // "egg4",
        // "egg6",
        // "x3",
        // "x1",
        // "x6",
        // "x4",
        // "egg8",
        // "egg1",
        // "egg7",
        // "x8",
        // "puppyer",
        // "funtoken",
        // "monstertoken",
        // "frozenstone",
        // "pvptoken",
        // "friendtoken",
        // "stand0",
        // "stick",
        // "gem2",
        // "fieldgen0",
        // "xptome",
        // "gem3",
        // "qubics",
        // "bottleofxp",
        // "cosmo1",
        // "licence",
        // "cosmo4",
        // "supercomputer",
        // "computer",
        // "goldbooster",
        // "xpbooster",
        // "luckbooster",
        // "flute",
];

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

let party = ["FunStrike", "FunRangerOne", "FunrangerTwo"];

function use_potions() {
    if (can_use("hp") && ((character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 200)) || 
		character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 300)) {
		use_hp_or_mp();
    }
}

function initParty() {
	for (const name of party) {
		if (!Object.keys(parent.party).includes(name)) send_party_invite(name);
	}
}

setInterval(function() {
		
    if (character.rip) {
        setTimeout(respawn, 15000);
        return;
    }

    use_potions();
    loot();
    merchantSkills();

}, 5000);


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
let visitBank = false;
let _exchange = false;


function merchantSkills() {

	//Check if party is incomplete, restore of not
	restoreParty();

	//Buff players with merchant's luck
	merchantsLuck();

	if(is_moving(character)) {
		if(character.stand) close_stand();
		return;
	}

	if(_exchange) {
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
		_exchange = false;
	}

    //Functions only used on "main" map
    if (character.map === "main" && Math.abs(character.real_x) < 20 && Math.abs(character.real_y) < 20 && !is_moving(character)) {
        //Sell unwanted items
        sellTrash();
		buyPotions();

        //Upgrade items
        if(upgradeItems()) return;

		if (buyScrolls("check")) {
			smart_move("scrolls", () => {
				buyScrolls("buy");
			});
			return;
        }

        //Compound items
        for (let i = 0; i < maxCompoundLevel; i++) {
			if (findTriple(i) && compoundItems(i)) {
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
			_exchange = true;
			return;
		}
        
		if(!visitBank) {
			smart_move("bank", () => {
				depositGold();
				depositSelectedItems();
				setTimeout(function() {
					smart_move("main", () => {
						merchant_state = "idle";
					});
				}, 5000);
			});
			visitBank = true;
		}

		openMerchantStand();
    } else if(!is_moving(character)) {
		if(merchant_state == 'idle') {
			smart_move("main");
		}
		if(merchant_state == 'visit') {
			relocateItems();
			transferPotions();
			merchantsLuck();
			merchant_state = 'idle';
			smart_move("main");
		}
	}

	//Visit farm-party every 10 minutes.
	//Bring potions, take their gold and items
	//and store gold and good items in bank
	if (new Date().getMinutes() % 10 === 0) {
		merchant_state = "visit";
		visitBank = false;
		smart_move('crab');
	}
}



//Buy potions
function buyPotions() {
	if (merchantDebugMode) debug("Buying Potions");
	//If farmMonsterType requires a master, buy more potions!	
	const potionModifier = 1;
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
