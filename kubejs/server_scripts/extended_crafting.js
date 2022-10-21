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
		'endless:neutronium_nugget',
		'endless:neutronium_nugget'
	])
	//===== singularity =====//
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