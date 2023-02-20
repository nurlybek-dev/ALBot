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

    if (can_use("hp") && (character.hp / character.max_hp <= .50) || (character.max_hp - character.hp > 400)) {
        use("hp");
    }

    if (can_use("mp") && character.mp / character.max_mp <= .50 || (character.max_mp - character.mp > 300)) {
        use("mp");
    }
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
