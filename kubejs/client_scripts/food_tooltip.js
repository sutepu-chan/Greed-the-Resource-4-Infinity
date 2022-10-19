console.info("running client script food_tooltip.js");

// compose a string representing the change to apply the effect
function describe_chance(chance) {
	if (chance >= 1) {
		return "";
	}
	else if (chance < 0.01) {
		return "§f(§6<1%§f)";
	}
	return "§7(§6" + (chance * 100).toFixed(0) + "%§8 chance§7)";
}

// compose a string representing the duration of the effect
function describe_duration(duration) {
	if (duration < 200) {
		return "§f" + (duration / 20).toFixed(2) + "§7s";
	}
	var minutes = Math.floor(duration / 1200);
	var seconds = (duration - 1200 * minutes) / 20;
	if (minutes == 0) {
		return "§f" + seconds.toFixed(0).padStart(2, '0') + "§7s";
	}
	return "§f" + minutes.toFixed(0) + "§7m§f" + seconds.toFixed(0).padStart(2, '0') + "§7s";

}

// compose a string representing the level of the effect
function describe_amplifier(amplifier) {
	var level = amplifier + 1;
	return "§7Lv. §f" + level.toFixed(0);
}

// compose a tooltip line describing everything about the effect
function food_effect_tooltip_line(entry) {
	var EffectInstance = entry.getFirst();
	var chance = entry.getSecond();

	// EffectInstance.getDuration
	var duration = EffectInstance.func_76459_b();

	// EffectInstance.getAmplifier
	var amplifier = EffectInstance.func_76458_c();

	// EffectInstance.getEffect
	var Effect = EffectInstance.func_188419_a();

	// // Effect.isBeneficial
	var category = Effect.func_220303_e();

	// Effect.getDisplayName
	var displayName = Effect.func_199286_c();

	var line = "";
	line += describe_amplifier(amplifier) + " ";
	line += (category == "BENEFICIAL") ? "§2" : ((category == "HARMFUL") ? "§4" : "§b");
	line += displayName.getString() + " ";
	line += "(" + describe_duration(duration) + ") ";
	line += describe_chance(chance);
	return line;
}


onEvent("item.tooltip", event => {

	// check all items, since there's no way I know of to
	// select just the items that are edible
	event.addAdvanced("*", (stack, advanced, lines) => {

		let item = stack.getItem();

		// if the item is not edible, return
		if (item.func_219967_s === undefined) { return; } // Item.getFoodProperties
		var Food = item.func_219967_s();
		if (Food == null) { return; }

		// if the food item has no effects, return
		if (Food.func_221464_f === undefined) { return; } // Food.getEffects
		var effect_pairs = Food.func_221464_f();
		if (effect_pairs == null) { return; }

		// add a line indicating that the following lines represent
		// effects gained when the food is eaten
		if (effect_pairs.length > 0) {
			lines.add("§fWhen eaten:");
		}

		// add a line for each effect in the list
		effect_pairs.forEach((entry) => {
			var line = food_effect_tooltip_line(entry);
			if (line !== null) {
				lines.add("● " + line);
			}
		});

	});

});