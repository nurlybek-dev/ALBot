
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

var reviving = false;
var targetMonster = "crab";
var fighting = false;

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

    if (can_use("hp") && (character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 200)) {
        use("hp");
    }

    if (can_use("mp") && character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 300)) {
        use("mp");
    }
    loot();

    if (character.ctype == "ranger") {
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
        } else {
            let target;
            target = get_nearest_monster({ type: targetMonster });
            change_target(target);
            if (target) {
                if (can_attack(target)) {
                    attack(target);
                } else {
                    let dist = Math.sqrt(Math.pow(target.real_x - character.real_x, 2) + Math.pow(target.real_y - character.real_y, 2))
                    if (dist > character.range - 20)
                        move((target.real_x + character.real_x) / 2, (target.real_y + character.real_y) / 2);
                }
            }
        }
    } else {
        let target;
        target = get_nearest_monster({ type: targetMonster });
        change_target(target);
        if (target) {
            if (can_attack(target)) {
                attack(target);
            } else {
                let dist = Math.sqrt(Math.pow(target.real_x - character.real_x, 2) + Math.pow(target.real_y - character.real_y, 2))
                if (dist > character.range - 20)
                    move((target.real_x + character.real_x) / 2, (target.real_y + character.real_y) / 2);
            }
        }
    }

}, 1000 / 2);




function sellTrash() {
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
            setInterval(() => {
                const item = character.items[i];
                if (item && trash_items.includes(item.name)) {
                    item.q ? sell(index, item.q) : sell(index, item);
                }
                i = i + 1;
            }, 100);

            // BUY POTIONS
        })
    }

    setTimeout(60000, sellTrash);
}

setTimeout(60000, sellTrash);
