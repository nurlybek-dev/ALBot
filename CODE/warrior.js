
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

