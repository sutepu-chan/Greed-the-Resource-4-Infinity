onEvent('recipes', e => {
	//===== crafting table recipes =====//
	removeRecipeByOutput(e, [
		'extendedcrafting:compressor',
		'extendedcrafting:crafting_core',
		'extendedcrafting:pedestal'
	])
	let tiers = [
		'basic',
		'advanced',
		'elite',
		'ultimate'
	]
	tiers.forEach(tier => {
		e.remove({ output: `extendedcrafting:${tier}_table` })
		e.remove({ output: `extendedcrafting:${tier}_auto_table` })
	})
	e.shaped('extendedcrafting:basic_table', ['BBB', 'CWC', 'ACA'], {
		A: 'extendedcrafting:basic_catalyst',
		C: 'extendedcrafting:basic_component',
		B: 'minecraft:iron_block',
		W: '#forge:workbench',
	})
	//advanced crafting table
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"tier": 1,
		"pattern": [
			"AAA",
			"BCB",
			"DCD"
		],
		"key": {
			"A": {
				"item": "minecraft:gold_block"
			},
			"B": {
				"item": "extendedcrafting:basic_table"
			},
			"C": {
				"item": "extendedcrafting:advanced_component"
			},
			"D": {
				"item": "extendedcrafting:advanced_catalyst"
			}
		},
		"result": {
			"item": "extendedcrafting:advanced_table"
		}
	})
	//elite crafting table
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"tier": 2,
		"pattern": [
			"AAAAA",
			"BCDCB",
			"EDDDE",
			"CBEBC",
			"BEFEB"
		],
		"key": {
			"A": {
				"item": "minecraft:diamond_block"
			},
			"B": {
				"item": "extendedcrafting:elite_catalyst"
			},
			"C": {
				"item": "extendedcrafting:advanced_table"
			},
			"D": {
				"item": "enderioalloys:item_alloy_ingot_vivid_alloy"
			},
			"E": {
				"item": "extendedcrafting:elite_component"
			},
			"F": {
				"item": "extendedcrafting:black_iron_slate"
			}
		},
		"result": {
			"item": "extendedcrafting:elite_table"
		}
	})
	//ultimate crafting table
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"tier": 3,
		"pattern": [
			"AAAAAAA",
			"BCDEDCB",
			"CBEDEBC",
			"EFGDGFE",
			"BHHEHHB",
			"IDHCHDI",
			"DICJCID"
		],
		"key": {
			"A": {
				"item": "minecraft:emerald_block"
			},
			"B": {
				"item": "allthemodium:vibranium_ingot"
			},
			"C": {
				"item": "extendedcrafting:ultimate_catalyst"
			},
			"D": {
				"item": "extendedcrafting:elite_table"
			},
			"E": {
				"item": "enderioalloys:item_material_vibrant_powder"
			},
			"F": {
				"item": "minecraft:dragon_head"
			},
			"G": {
				"item": "enderioalloys:item_alloy_ingot_stellar_alloy"
			},
			"H": {
				"item": "extendedcrafting:ultimate_component"
			},
			"I": {
				"item": "enderioalloys:item_alloy_ingot_pulsating_iron"
			},
			"J": {
				"item": "extendedcrafting:black_iron_slate"
			}
		},
		"result": {
			"item": "extendedcrafting:ultimate_table"
		}
	})
	//auto crafting table
	tiers.forEach(tier => {
		e.custom({
			type: 'extendedcrafting:shaped_table',
			tier: 2,
			pattern: [
				'ABCBA',
				'DEFED',
				'CFGFC',
				'DEFED',
				'ABCBA'
			],
			key: {
				A: {
					item: 'extendedcrafting:crystaltine_component'
				},
				B: {
					item: 'extendedcrafting:black_iron_ingot'
				},
				C: {
					item: 'extendedcrafting:redstone_catalyst'
				},
				D: {
					item: 'extendedcrafting:redstone_component'
				},
				E: {
					item: 'extendedcrafting:crystaltine_catalyst'
				},
				F: {
					item: 'extendedcrafting:black_iron_slate'
				},
				G: {
					item: `extendedcrafting:${tier}_table`
				}
			},
			result: {
				item: `extendedcrafting:${tier}_auto_table`
			}
		}).id(`kubejs:extendedcraft/${tier}_auto_table`)
	})
	draconicFusion(e, 'extendedcrafting:compressor', 3, 972000000, 'extendedcrafting:frame', [
		'extendedcrafting:ultimate_catalyst',
		'extendedcrafting:ultimate_catalyst',
		'extendedcrafting:black_iron_slate',
		'extendedcrafting:crystaltine_block',
		'draconicevolution:draconic_energy_core',
		'draconicevolution:draconic_energy_core',
		'minecraft:dragon_head',
		'minecraft:dragon_head',
		'kubejs:neutron_nugget',
		'kubejs:neutron_nugget'
	])
	//===== singularity =====//
	e.custom({
		"type": "extendedcrafting:shapeless_table",
		"ingredients": [
			{
				"item": "kubejs:neutron_pile"
			},
			{
				"item": "kubejs:neutron_nugget"
			},
			{
				"item": "kubejs:neutronium_ingot"
			},
			{
				"item": "kubejs:neutronium"
			},
			{
				"item": "kubejs:endest_pearl"
			},
			{
				"item": "kubejs:cosmic_meatballs"
			},
			{
				"item": "kubejs:ultimate_stew"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:copper\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:diamond\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:dirt\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:electrum\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:emerald\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:end_stone\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:ender_pearl\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:enderium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:flesh\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:glass\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:glowstone\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:gold\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:gunpowder\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:invar\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:lead\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:lumium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:melon\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:iron\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:phantom_membrane\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:mushroom\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:netherite\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:netherrack\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:netherstar\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:nickel\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:obsidian\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:osmium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:platinum\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:pumpkin\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:quartz\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:redstone\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:sand\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:heart_of_the_sea\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:shulker\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:signalum\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:silver\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:soul_sand\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:steel\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:tin\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:unobtainium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:uraninite\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:uranium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:vibranium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:zinc\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:allthemodium\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:aluminum\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:bronze\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:cake\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:clay\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:coal\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:cobblestone\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:forge_energy\"}"
			},
			{
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:constantan\"}"
			}
		],
		"result": {
			"item": 'extendedcrafting:ultimate_singularity'
		}
	})
	e.custom({
		"type": "extendedcrafting:compressor",
		"powerCost": 1000000000,
		"powerRate": 1000000000,
		"inputCount": 1,
		"ingredient": {
			"item": "mekanism:ultimate_induction_cell"
		},
		"catalyst": {
			"item": 'extendedcrafting:ultimate_catalyst'
		},
		"result": {
			"item": "extendedcrafting:singularity",
			"nbt": {
				"Id": "extendedcrafting:forge_energy"
			}
		}
	})
	//===== combination crafting =====//
	e.custom({
		type: 'compactcrafting:miniaturization',
		recipeSize: 3,
		layers: [
			{
				type: 'compactcrafting:mixed',
				pattern: [
					['I', 'I', 'I'],
					['I', 'D', 'I'],
					['I', 'I', 'I']
				]
			},
			{
				type: 'compactcrafting:mixed',
				pattern: [
					['L', 'G', 'L'],
					['G', 'F', 'G'],
					['L', 'G', 'L']
				]
			},
			{
				type: 'compactcrafting:mixed',
				pattern: [
					['I', 'I', 'I'],
					['I', 'I', 'I'],
					['I', 'I', 'I']
				]
			}
		],
		catalyst: {
			id: 'extendedcrafting:elite_component',
			Count: 2
		},
		components: {
			I: {
				type: 'compactcrafting:block',
				block: 'extendedcrafting:black_iron_block'
			},
			L: {
				type: 'compactcrafting:block',
				block: 'boss_tools:coal_lantern'
			},
			G: {
				type: 'compactcrafting:block',
				block: 'minecraft:glass'
			},
			D: {
				type: 'compactcrafting:block',
				block: 'minecraft:diamond_block'
			},
			F: {
				type: 'compactcrafting:block',
				block: 'extendedcrafting:frame'
			}
		},
		outputs: [
			{
				id: 'extendedcrafting:crafting_core',
				Count: 1
			}
		]
	}).id(`compactcrafting:extendedcrafting/crafting_core`)
	e.custom({
		type: 'pneumaticcraft:assembly_laser',
		input: {
			type: 'pneumaticcraft:stacked_item',
			item: 'extendedcrafting:black_iron_block',
			count: 2
		},
		result: {
			item: 'extendedcrafting:pedestal',
		},
		program: 'drill'
	}).id(`kubejs:extendedcrafting/extendedcrafting`)
})