const available_maps = [
	"main",
	"woffice",
	"tunnel",
	"bank",
	"cave",
	"arena",
	"tavern",
	"mansion",
	"level1",
	"hut",
	"halloween",
	"mtunnel",
	"test",
	"cyberland",
	"winterland",
	"desertland",
	"resort_e",
	"level2",
	"spookytown",
	"winter_inn",
	"winter_cave",
	"level2n",
	"level2s",
	"level3",
	"level2e",
	"level2w",
	"winter_inn_rooms",
	"level4"
];

const monsters_to_hunt = [
	"hen", "rooster", "goo", "crab", "bee", "cutebee", "minimush", "frog",
	"squigtoad", "osnake", "snake", "rat", "armadillo", "croc",
	"squig", "poisio", "snowman", "arcticbee",
	"spider", "tortoise", "bat", "goldenbat", "wabbit", "scorpion", "gscorpion",
	"iceroamer", "crabx", "bbpompom",
];

const monsters_require_focus = [
	"snowman", "scorpion", "gscorpion", "stoneworm",
	"goldenbat", "iceroamer", "crabx", "jr", "greenjr",
	"bbpompom", "booboo", "prat", "boar", "ghost", "mummy",
	"mole", "wolfie", "wolf", "xscorpion", "bigbird",
    "bat", "wabbit", "phoenix", "fvampire", "mvampire", "grinch"
];

const event_monsters = ["wabbit", "snowman"];

const special_monsters = ["cutebee", "snowman", "goldenbat", "wabbit", "phoenix", "fvampire", "mvampire", "grinch"];

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

const items = [
// HELMETS
    "helmet",
    "wcap",
    "partyhat",
    "xmashat",
    "rednose",
    "helmet1",
    "bunnyears",
    "eears",
    "gphelmet",
    "mphat",
    "mmhat",
    "mwhelmet",
    "mrnhat",
    "mrhood",
    "mchat",
    "phelmet",
    "ghatb",
    "ghatp",
    "cyber",
    "hhelmet",
    "tigerhelmet",
    "xhelmet",
    "fury",
    "oxhelmet",

// ARMORS
    "tshirt1",
    "tshirt3",
    "tshirt8",
    "tshirt9",
    "tshirt2",
    "tshirt0",
    "tshirt7",
    "tshirt6",
    "tshirt4",
    "tshirt88",
    "coat",
    "wattire",
    "xmassweater",
    "epyjamas",
    "coat1",
    "mwarmor",
    "mrnarmor",
    "mmarmor",
    "mrarmor",
    "mcarmor",
    "mparmor",
    "luckyt",
    "sweaterhs",
    "pyjamas",
    "harmor",
    "mcape",
    "xarmor",
    "vattire",
    "cdragon",
    "warpvest",

// UNDERARMORS
    "pants",
    "wbreeches",
    "xmaspants",
    "pants1",
    "mmpants",
    "mcpants",
    "mppants",
    "mwpants",
    "mrpants",
    "mrnpants",
    "frankypants",
    "hpants",
    "fallen",
    "starkillers",
    "xpants",

// GLOVES
    "gloves",
    "wgloves",
    "poker",
    "gloves1",
    "mittens",
    "mcgloves",
    "mwgloves",
    "mpgloves",
    "mmgloves",
    "mrgloves",
    "mrngloves",
    "fierygloves",
    "hgloves",
    "vgloves",
    "supermittens",
    "handofmidas",
    "powerglove",
    "xgloves",
    "goldenpowerglove",
    "mpxgloves",

// SHOES
    "shoes",
    "eslippers",
    "wshoes",
    "xmasshoes",
    "shoes1",
    "wingedboots",
    "mcboots",
    "mmshoes",
    "mrboots",
    "mpshoes",
    "mrnboots",
    "mwboots",
    "vboots",
    "snowboots",
    "iceskates",
    "hboots",
    "xboots",

// CAPES
    "gcape",
    "cape",
    "ecape",
    "angelwings",
    "vcape",
    "stealthcape",
    "bcape",
    "tigercape",
    "fcape",

// RINGS
    "dexring",
    "ringsj",
    "intring",
    "vitring",
    "strring",
    "cdarktristone",
    "ctristone",
    "armorring",
    "resistancering",
    "cring",
    "solitaire",
    "suckerpunch",
    "vring",
    "zapper",
    "ringofluck",
    "trigger",
    "ringhs",
    "goldring",

// EARRINGS
    "strearring",
    "dexearring",
    "intearring",
    "vitearring",
    "dexearringx",
    "lostearring",
    "cearring",
    "molesteeth",
    "mearring",

// AMULETS
    "hpamulet",
    "warmscarf",
    "dexamulet",
    "skullamulet",
    "intamulet",
    "stramulet",
    "t2dexamulet",
    "t2stramulet",
    "t2intamulet",
    "spookyamulet",
    "snring",
    "bfangamulet",
    "amuletofm",
    "sanguine",
    "mpxamulet",
    "northstar",

// BELTS
    "hpbelt",
    "lbelt",
    "dexbelt",
    "strbelt",
    "intbelt",
    "mbelt",
    "santasbelt",
    "sbelt",
    "mpxbelt",

// ORBS
    "test_orb",
    "orbg",
    "jacko",
    "ftrinket",
    "talkingskull",
    "rabbitsfoot",
    "charmer",
    "orbofsc",
    "orbofdex",
    "orbofint",
    "orbofvit",
    "orbofstr",
    "tigerstone",
    "vorb",

// WEAPONS
    "broom",
    "mace",
    "wbasher",
    "claw",
    "blade",
    "cclaw",
    "staff",
    "stinger",
    "hbow",
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
    "fclaw",
    "spear",
    "candycanesword",
    "fsword",
    "basher",
    "frostbow",
    "t2bow",
    "rapier",
    "pmace",
    "cupid",
    "snowflakes",
    "carrotsword",
    "fireblade",
    "ornamentstaff",
    "merry",
    "bataxe",
    "pinkie",
    "dagger",
    "firebow",
    "firestaff",
    "swordofthedead",
    "daggerofthedead",
    "woodensword",
    "maceofthedead",
    "staffofthedead",
    "bowofthedead",
    "harbringer",
    "oozingterror",
    "froststaff",
    "firestars",
    "crossbow",
    "spearofthedead",
    "harpybow",
    "t3bow",
    "pmaceofthedead",
    "lmace",
    "hammer",
    "gstaff",
    "hdagger",
    "dragondagger",
    "gbow",
    "scythe",
    "vsword",
    "vdagger",
    "vstaff",
    "vhammer",
    "heartwood",
    "dartgun",
    "wblade",

// SHILDS
    "wshield",
    "shield",
    "sshield",
    "tigershield",
    "xshield",
    "mshield",

// OFFHANDS
    "wbook0",
    "quiver",
    "lantern",
    "wbookhs",
    "wbook1",
    "t2quiver",
    "exoarm",

// ELIXIRS
    "xshot",
    "gum",
    "cake",
    "candypop",
    "pumpkinspice",
    "elixirstr0",
    "elixirint0",
    "eggnog",
    "elixirvit0",
    "elixirdex0",
    "bunnyelixir",
    "hotchocolate",
    "greenbomb",
    "swirlipop",
    "espresso",
    "elixirvit1",
    "elixirstr1",
    "elixirdex1",
    "elixirint1",
    "ale",
    "wine",
    "whiskey",
    "elixirvit2",
    "elixirstr2",
    "elixirdex2",
    "elixirint2",
    "blue",
    "pico",
    "vblood",
    "elixirpnres",
    "elixirluck",
    "elixirfzres",
    "elixirfires",

// POTIONS
    "hpot0",
    "mpot0",
    "hpot1",
    "mpot1",
    "snakeoil",
    "hpotx",
    "mpotx",

// SCROLLS
    "scroll0",
    "cscroll0",
    "evasionscroll",
    "outputscroll",
    "strscroll",
    "critscroll",
    "goldscroll",
    "lifestealscroll",
    "forscroll",
    "intscroll",
    "apiercingscroll",
    "armorscroll",
    "resistancescroll",
    "mpcostscroll",
    "xpscroll",
    "reflectionscroll",
    "manastealscroll",
    "frequencyscroll",
    "rpiercingscroll",
    "dreturnscroll",
    "vitscroll",
    "speedscroll",
    "dexscroll",
    "luckscroll",
    "scroll1",
    "cscroll1",
    "offeringp",
    "scroll2",
    "cscroll2",
    "offering",
    "offeringx",
    "scroll3",
    "scroll4",
    "cscroll3",

// Crafting and Collecting
    "essenceoflife",
    "rattail",
    "frogt",
    "carrot",
    "pstem",
    "whiteegg",
    "bfur",
    "electronics",
    "essenceofgreed",
    "mbones",
    "gslime",
    "beewings",
    "bandages",
    "rfur",
    "smush",
    "dstones",
    "crabclaw",
    "bwing",
    "spores",
    "lspores",
    "cscale",
    "cocoon",
    "spidersilk",
    "pleather",
    "drapes",
    "ascale",
    "feather0",
    "feather1",
    "brownegg",
    "snakefang",
    "tshell",
    "bronzenugget",
    "sstinger",
    "essenceofnature",
    "ink",
    "lotusf",
    "emptyheart",
    "rfangs",
    "svenom",
    "bfang",
    "cshell",
    "essenceoffire",
    "bronzeingot",
    "essenceofether",
    "essenceoffrost",
    "btusk",
    "ectoplasm",
    "goldnugget",
    "trinkets",
    "ijx",
    "bcandle",
    "watercore",
    "goldingot",
    "platinumnugget",
    "nheart",
    "networkcard",
    "platinumingot",

// Exchangeables
    "5bucks",
    "gift1",
    "seashell",
    "gift0",
    "leather",
    "ornament",
    "troll",
    "basketofeggs",
    "mistletoe",
    "candycane",
    "candy1",
    "gem1",
    "greenenvelope",
    "redenvelopev2",
    "redenvelopev3",
    "redenvelopev4",
    "redenvelope",
    "gemfragment",
    "goldenegg",
    "armorbox",
    "bugbountybox",
    "candy0",
    "gem0",
    "weaponbox",
    "xbox",
    "cosmo2",
    "cosmo0",
    "mysterybox",
    "cosmo3",

// KEYS
    "frozenkey",
    "cryptkey",
    "stonekey",
    "tombkey",
    "bkey",
    "ukey",
    "dkey",

// OTHERS
    "emptyjar",
    "cxjar",
    "snowball",
    "emotionjar",
    "coal",
    "tracker",
    "confetti",
    "smoke",
    "firecrackers",
    "shadowstone",
    "poison",
    "rod",
    "pickaxe",
    "x2",
    "x0",
    "x7",
    "x5",
    "egg3",
    "egg5",
    "egg0",
    "egg2",
    "egg4",
    "egg6",
    "x3",
    "x1",
    "x6",
    "x4",
    "egg8",
    "egg1",
    "egg7",
    "x8",
    "puppyer",
    "funtoken",
    "monstertoken",
    "frozenstone",
    "pvptoken",
    "friendtoken",
    "stand0",
    "stick",
    "gem2",
    "fieldgen0",
    "xptome",
    "gem3",
    "qubics",
    "bottleofxp",
    "cosmo1",
    "licence",
    "cosmo4",
    "supercomputer",
    "computer",
    "goldbooster",
    "xpbooster",
    "luckbooster",
    "flute",
]

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
        // "tshirt1",
        // "tshirt3",
        // "tshirt8",
        // "tshirt9",
        // "tshirt2",
        // "tshirt0",
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
        // "hpamulet",
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
        // "hpbelt",
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
        "scroll0",
        "cscroll0",
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
        // "vitscroll",
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
        // "frogt",
        // "carrot",
        // "pstem",
        // "whiteegg",
        // "bfur",
        // "electronics",
        // "essenceofgreed",
        // "mbones",
        // "gslime",
        // "beewings",
        // "bandages",
        // "rfur",
        // "smush",
        // "dstones",
        // "crabclaw",
        // "bwing",
        // "spores",
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
        // "lotusf",
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
        // "bcandle",
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
        // "smoke",
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
]


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
            move({
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
                move({
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
    move({
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
			move(pos);
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
	console.log(`${character.name}: ${message}`);
}
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
			move("scrolls", () => {
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
				move(npc, () => {
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
		move("main");
	}

	//Visit farm-party every 10 minutes.
	//Bring potions, take their gold and items
	//and store gold and good items in bank
	if (new Date().getMinutes() % 10 === 0) {
		merchant_state = "visit";
        debug("Visit farm-party");
		update_farming_spot();
        move("main", () => {
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

            move(pos, () => {
                transferPotions();
                merchantsLuck();
                setTimeout(function() {
                    move("bank", () => {
                        depositGold();
                        depositSelectedItems();
						setTimeout(function() {
							move("main", () => {
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
			move(find_npc("craftsman"), () => {
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
		move(find_npc("craftsman"), () => {
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
				move(fishingSpot, () => { equipFishingGear() });
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


function warriorSkills(target) {
	//How much Mana should be kept in reserve
	const manaReserve = 0.8;

	//Use Ranger Skills
	if (character.mp > (character.max_mp * manaReserve)) {
        if(target.target != character.name && !is_on_cooldown("taunt")) {
            use_skill("taunt", target);
            debug("Used taunt");
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
				debug("Healing Party");
			}

			//Heal ONE Partymember
			if (partyMember.hp < ((partyMember.max_hp - G.items.hpot1.gives[0][1]) - maxHealing)
				&& !partyMember.rip
				&& character.mp >= character.mp_cost
				//&& can_heal(partyMember)
				&& is_in_range(partyMember, "heal")
				&& !is_on_cooldown("heal")) {
				heal(partyMember);
                debug(`Healing ${partyMember.name}`);
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
				debug(`Absorbed sins of ${partyMember.name}`);
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


let farming_spot = get_farming_spot(farm_monster_type);
let target = null;

// start();

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