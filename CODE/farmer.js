var reviving = false;
var targetMonster = "crab";
var fighting = false;
var doingStaff = true;
var trashSelled = false;
var potionBuyed = false;
var inMain = false;

let party = ["FunStrike", "FunRangerOne", "FunrangerTwo"];

const potions = {
	hpot0: 0,
	hpot1: 100,
	mpot0: 0,
	mpot1: 500
};

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

setInterval(function () {
    if (!fighting && !doingStaff) {
        return;
    }
    if (doingStaff) {
        staffLogic();
    }
    else {
        fightLogic();
    }
}, 1000 / 4);

if(character.name == party[0]) setInterval(restoreParty, 5000);
setInterval(doStuff, 1000*60*60);

function staffLogic() {
    if (character.rip && !reviving) {
        revive();
        return;
    }

    if(is_moving(character)) return;

    if(!inMain) {
        smart_move('main');
        inMain = true;
    }
    else if(!trashSelled) {
        sellTrash();
        trashSelled = true;
    } else if(!potionBuyed) {
        buyPotions();
        potionBuyed = true;
    } else {
        doingStaff = false;
        smart_move(targetMonster, function () {
            fighting = true;
        });
    }
}

function fightLogic() {
    if (character.rip && !reviving) {
        revive();
        return;
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
}


function sellTrash() {
	character.items.forEach((item, index) => {
		if (item
			&& trash_items.includes(item.name)
			&& item_grade(item) < 5) {
			item.q ? sell(index, item.q) : sell(index, item);
		}
	});
}

function buyPotions() {
	for (const potion in potions) {
		if (quantity(potion) < potions[potion]) buy_with_gold(potion, (potions[potion] - quantity(potion)));
	}
}

function revive() {
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


function doStuff() {
    fighting = false;
    doingStaff = true;
    trashSelled = false;
    potionBuyed = false;
    inMain = false;
}

function use_potions() {
    if (can_use("hp") && ((character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 400)) || 
		character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 500)) {
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
                return true;
			}
			else if (character.level >= 60
				&& targets.length >= 3
				&& !is_on_cooldown("3shot")
				&& character.mp > G.skills["3shot"].mp) {
				use_skill("3shot", targets);
                return true;
			}
		}
	}
    return false;
}

function on_party_invite(name) {
    if (get_player(name) && get_player(name).owner !== character.owner) return;
    accept_party_invite(name);
}

function restoreParty() {
	if (parent.party_list.length < 3) {
		initParty();
	}
}

function initParty() {
	for (const name of party) {
        if(name == party[0]) continue;
		if (!Object.keys(parent.party).includes(name)) send_party_invite(name);
	}
}
