onEvent('recipes', e => {
	e.custom({
		type: 'eidolon:crucible',
		result: {
			type: 'forge:nbt',
			item: 'custommachinery:custom_machine_item',
			count: 1,
			nbt: '{machine:\"custommachinery:mystical_crafter\"}'
		},
		steps: [
			{
				ingredients: [
					{ tag: 'minecraft:logs' },
					{ item: 'minecraft:cobblestone' }
				]
			},
			{
				ingredients: [
					{ item: 'eidolon:arcane_gold_ingot', count: 3 },
					{ item: 'eidolon:pewter_ingot', count: 2 },
					{ item: 'minecraft:redstone_block', count: 1 },
				],
				stirs: 2
			},
			{
				ingredients: [
					{ item: 'minecraft:wheat_seeds' },
					{ item: 'mysticalagriculture:prosperity_shard' }
				],
				stirs: 3
			}
		]
	}).id(`kubejs:custommachinery/mystical_crafter`);
	function checkEssenceLevel(level) {
		// 1 inferium
		// 2 prudentium
		// 3 tertium
		// 4 imperium
		// 5 supremium
		// 6 insanium	
		switch (level) {
			case 1:
				return 'mysticalagriculture:inferium_essence';
				break;
			case 2:
				return 'mysticalagriculture:prudentium_essence';
				break;
			case 3:
				return 'mysticalagriculture:tertium_essence';
				break;
			case 4:
				return 'mysticalagriculture:imperium_essence';
				break;
			case 5:
				return 'mysticalagriculture:supremium_essence';
				break;
			case 6:
				return 'mysticalagradditions:insanium_essence';
				break;
		};
	};
	function mysticalCrafting(recipes) {
		recipes.forEach(([essenceLevel, ingredient_other, outputSeed]) => {
			e.recipes.custommachinery.custom_machine("custommachinery:mystical_crafter", 60)
				.requireItem(Item.of('mysticalagriculture:prosperity_seed_base', 1), "seed")
				.requireItem(Item.of(checkEssenceLevel(essenceLevel), 4), "essence")
				.requireItem(Item.of(ingredient_other, 4), "other")
				.requireEnergyPerTick(500)
				.produceItem(Item.of(outputSeed, 1), "seed_output");
		});
	};
	function mobSeedCrafting(recipes) {
		recipes.forEach(([essenceLevel, soulJarIngredient, outputSeed]) => {
			e.recipes.custommachinery.custom_machine("custommachinery:mystical_crafter", 60)
				.requireItem('mysticalagriculture:soulium_seed_base', "seed")
				.requireItem(Item.of(checkEssenceLevel(essenceLevel), 4), "essence")
				.requireItem(soulJarIngredient, "other")
				.requireEnergyPerTick(500)
				.produceItem(Item.of(outputSeed, 1), "seed_output");
		});
	};
	mysticalCrafting([
		[1, 'mysticalagriculture:air_agglomeratio', 'mysticalagriculture:air_seeds'],
		[1, 'mysticalagriculture:earth_agglomeratio', 'mysticalagriculture:earth_seeds'],
		[1, 'mysticalagriculture:fire_agglomeratio', 'mysticalagriculture:fire_seeds'],
		[1, 'mysticalagriculture:water_agglomeratio', 'mysticalagriculture:water_seeds'],
		[1, 'minecraft:stone', 'mysticalagriculture:stone_seeds'],
		[1, 'minecraft:dirt', 'mysticalagriculture:dirt_seeds'],
		[1, 'minecraft:oak_log', 'mysticalagriculture:wood_seeds'],
		[1, 'minecraft:ice', 'mysticalagriculture:ice_seeds'],
		[2, 'mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_seeds'],
		[2, 'mysticalagriculture:dye_agglomeratio', 'mysticalagriculture:dye_seeds'],
		[2, 'mysticalagriculture:nether_agglomeratio', 'mysticalagriculture:nether_seeds'],
		[2, 'minecraft:coal', 'mysticalagriculture:coal_seeds'],
		[2, 'mysticalagriculture:coral_agglomeratio', 'mysticalagriculture:coral_seeds'],
		[2, 'mysticalagriculture:honey_agglomeratio', 'mysticalagriculture:honey_seeds'],
		[2, 'appliedenergistics2:silicon', 'mysticalagriculture:silicon_seeds'],
		[2, 'thermal:sulfur_dust', 'mysticalagriculture:sulfur_seeds'],
		[2, 'alltheores:aluminum_ingot', 'mysticalagriculture:aluminum_seeds'],
		[2, 'alltheores:copper_ingot', 'mysticalagriculture:copper_seeds'],
		[2, 'thermal:niter_dust', 'mysticalagriculture:saltpeter_seeds'],
		[2, 'chisel:marble/raw', 'mysticalagriculture:marble_seeds'],
		[2, 'chisel:limestone/raw', 'mysticalagriculture:limestone_seeds'],
		[2, 'minecraft:basalt', 'mysticalagriculture:basalt_seeds'],
		[3, 'minecraft:iron_ingot', 'mysticalagriculture:iron_seeds'],
		[3, 'minecraft:smooth_quartz', 'mysticalagriculture:nether_quartz_seeds'],
		[3, 'minecraft:glowstone', 'mysticalagriculture:glowstone_seeds'],
		[3, 'minecraft:redstone', 'mysticalagriculture:redstone_seeds'],
		[3, 'minecraft:obsidian', 'mysticalagriculture:obsidian_seeds'],
		[3, 'mysticalagriculture:prismarine_agglomeratio', 'mysticalagriculture:prismarine_seeds'],
		[3, 'alltheores:platinum_ingot', 'mysticalagriculture:tin_seeds'],
		[3, 'thermal:bronze_ingot', 'mysticalagriculture:bronze_seeds'],
		[3, 'alltheores:zinc_ingot', 'mysticalagriculture:zinc_seeds'],
		[3, 'alltheores:silver_ingot', 'mysticalagriculture:silver_seeds'],
		[3, 'alltheores:lead_ingot', 'mysticalagriculture:lead_seeds'],
		[3, 'biggerreactors:graphite_ingot', 'mysticalagriculture:graphite_seeds'],
		[3, 'tconstruct:tinkers_bronze_ingot', 'mysticalagriculture:tinkers_bronze_seeds'],
		[3, 'tconstruct:slimesteel_ingot', 'mysticalagriculture:slimesteel_seeds'],
		[3, 'tconstruct:pig_iron_ingot', 'mysticalagriculture:pig_iron_seeds'],
		[3, 'appliedenergistics2:sky_stone_block', 'mysticalagriculture:sky_stone_seeds'],
		[3, 'appliedenergistics2:certus_quartz_crystal', 'mysticalagriculture:certus_quartz_seeds'],
		[4, 'minecraft:gold_ingot', 'mysticalagriculture:gold_seeds'],
		[4, 'minecraft:lapis_lazuli', 'mysticalagriculture:lapis_lazuli_seeds'],
		[4, 'mysticalagriculture:end_agglomeratio', 'mysticalagriculture:end_seeds'],
		[4, 'mekanism:ingot_steel', 'mysticalagriculture:steel_seeds'],
		[4, 'alltheores:nickel_ingot', 'mysticalagriculture:nickel_seeds'],
		[4, 'thermal:constantan_ingot', 'mysticalagriculture:constantan_seeds'],
		[4, 'thermal:electrum_ingot', 'mysticalagriculture:electrum_seeds'],
		[4, 'thermal:invar_ingot', 'mysticalagriculture:invar_seeds'],
		[4, 'alltheores:uranium_ingot', 'mysticalagriculture:uranium_seeds'],
		[4, 'thermal:signalum_ingot', 'mysticalagriculture:signalum_seeds'],
		[4, 'thermal:lumium_ingot', 'mysticalagriculture:lumium_seeds'],
		[4, 'tconstruct:cobalt_ingot', 'mysticalagriculture:cobalt_seeds'],
		[4, 'tconstruct:rose_gold_ingot', 'mysticalagriculture:rose_gold_seeds'],
		[4, 'alltheores:osmium_ingot', 'mysticalagriculture:osmium_seeds'],
		[4, 'mekanism:fluorite_gem', 'mysticalagriculture:fluorite_seeds'],
		[4, 'mekanism:ingot_refined_glowstone', 'mysticalagriculture:refined_glowstone_seeds'],
		[4, 'mekanism:ingot_refined_obsidian', 'mysticalagriculture:refined_obsidian_seeds'],
		[4, 'pneumaticcraft:ingot_iron_compressed', 'mysticalagriculture:compressed_iron_seeds'],
		[4, 'appliedenergistics2:fluix_crystal', 'mysticalagriculture:fluix_seeds'],
		[4, 'powah:steel_energized', 'mysticalagriculture:energized_steel_seeds'],
		[4, 'powah:crystal_blazing', 'mysticalagriculture:blazing_crystal_seeds'],
		[5, 'minecraft:diamond', 'mysticalagriculture:diamond_seeds'],
		[5, 'minecraft:emerald', 'mysticalagriculture:emerald_seeds'],
		[5, 'minecraft:netherite_ingot', 'mysticalagriculture:netherite_seeds'],
		[5, 'alltheores:platinum_ingot', 'mysticalagriculture:platinum_seeds'],
		[5, 'thermal:enderium_ingot', 'mysticalagriculture:enderium_seeds'],
		[5, 'tconstruct:manyullyn_ingot', 'mysticalagriculture:manyullyn_seeds'],
		[5, 'tconstruct:queens_slime_ingot', 'mysticalagriculture:queens_slime_seeds'],
		[5, 'tconstruct:hepatizon_ingot', 'mysticalagriculture:hepatizon_seeds'],
		[5, 'draconicevolution:draconium_ingot', 'mysticalagriculture:draconium_seeds'],
		[5, 'powah:crystal_niotic', 'mysticalagriculture:niotic_crystal_seeds'],
		[5, 'powah:crystal_spirited', 'mysticalagriculture:spirited_crystal_seeds'],
		[5, 'powah:uraninite', 'mysticalagriculture:uraninite_seeds'],
		[6, 'minecraft:nether_star', 'mysticalagriculture:nether_star_seeds'],
		[6, 'mysticalagradditions:dragon_scale', 'mysticalagriculture:dragon_egg_seeds'],
		[6, 'draconicevolution:awakened_draconium_ingot', 'mysticalagriculture:awakened_draconium_seeds'],
		[6, 'powah:crystal_nitro', 'mysticalagriculture:nitro_crystal_seeds'],
	]);
	mobSeedCrafting([
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:pig"}'), 'mysticalagriculture:pig_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:chicken"}'), 'mysticalagriculture:chicken_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:cow"}'), 'mysticalagriculture:cow_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:sheep"}'), 'mysticalagriculture:sheep_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:squid"}'), 'mysticalagriculture:squid_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:fish"}'), 'mysticalagriculture:fish_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:12.0d,Type:"mysticalagriculture:slime"}'), 'mysticalagriculture:slime_seeds'],
		[2, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:turtle"}'), 'mysticalagriculture:turtle_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:zombie"}'), 'mysticalagriculture:zombie_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:skeleton"}'), 'mysticalagriculture:skeleton_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:creeper"}'), 'mysticalagriculture:creeper_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:spider"}'), 'mysticalagriculture:spider_seeds'],
		[4, Item.of('mysticalagriculture:soul_jar', '{Souls:10.0d,Type:"mysticalagriculture:blaze"}'), 'mysticalagriculture:blaze_seeds'],
		[4, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:rabbit"}'), 'mysticalagriculture:rabbit_seeds'],
		[4, Item.of('mysticalagriculture:soul_jar', '{Souls:4.0d,Type:"mysticalagriculture:ghast"}'), 'mysticalagriculture:ghast_seeds'],
		[4, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:enderman"}'), 'mysticalagriculture:enderman_seeds'],
		[5, Item.of('mysticalagriculture:soul_jar', '{Souls:8.0d,Type:"mysticalagriculture:wither_skeleton"}'), 'mysticalagriculture:wither_skeleton_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:blizz"}'), 'mysticalagriculture:blizz_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:blitz"}'), 'mysticalagriculture:blitz_seeds'],
		[3, Item.of('mysticalagriculture:soul_jar', '{Souls:6.0d,Type:"mysticalagriculture:basalz"}'), 'mysticalagriculture:basalz_seeds']
	]);
});

onEvent('cm_upgrades', e => {
	let mysticalTier = [
		'inferium',
		'prudentium',
		'tertium',
		'imperium',
		'supremium'
	];
	for (let i = 0; i < mysticalTier.length; i++) {
		e.create(Item.of(`mysticalagriculture:${mysticalTier[i]}_ingot`), 1)
			.tooltip('Mystical Crafter Upgrade')
			.machine('custommachinery:mystical_crafter')
			.mulInput('custommachinery:speed', 1 - (i + 1) * 0.15);
	}
	e.create(Item.of('mysticalagradditions:insanium_ingot'), 1)
		.tooltip('Mystical Crafter Upgrade')
		.machine('custommachinery:mystical_crafter')
		.mulInput('custommachinery:speed', 0.1);
});