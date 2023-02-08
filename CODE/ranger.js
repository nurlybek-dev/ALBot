
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
