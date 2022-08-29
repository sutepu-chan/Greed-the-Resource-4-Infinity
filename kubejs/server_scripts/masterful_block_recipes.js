onEvent('recipes', e => {
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'pneumaticcraft:compressed_iron_block',
                count: 8
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'minecraft:emerald',
                count: 4
            },
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:glass/colorless',
                count: 2
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: 'masterfulmachinery:t0_controller',
            }
        ]
    }).id(`kubejs:masterfulmachinery/t0_controller`)
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'pneumaticcraft:compressed_iron_block',
                count: 8
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'minecraft:redstone',
                count: 4
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'pipez:item_pipe',
                count: 2
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: 'masterfulmachinery:t0_t0_item_port_items_output',
            }
        ]
    }).id(`kubejs:masterfulmachinery/t0_t0_item_port_items_output`)
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'pneumaticcraft:compressed_iron_block',
                count: 8
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'minecraft:gold_ingot',
                count: 4
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'pipez:energy_pipe',
                count: 2
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: 'masterfulmachinery:t0_t0_energy_port_energy_input',
            }
        ]
    }).id(`kubejs:masterfulmachinery/t0_t0_energy_port_energy_input`)
    e.recipes.thermal.smelter('masterfulmachinery:t1_controller', ['2x thermal:enderium_gear', '4x minecraft:gold_block', 'masterfulmachinery:t0_controller'])
    e.recipes.thermal.smelter('masterfulmachinery:t1_t1_item_port_items_output', ['2x thermal:signalum_gear', '4x minecraft:gold_block', 'masterfulmachinery:t0_t0_item_port_items_output'])
    e.recipes.thermal.smelter('masterfulmachinery:t1_t1_energy_port_energy_input', ['2x thermal:lumium_gear', '4x minecraft:gold_block', 'masterfulmachinery:t0_t0_energy_port_energy_input'])
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'masterfulmachinery:t1_controller' },
            { item: 'industrialforegoing:pink_slime_ingot' },
            { item: 'industrialforegoing:pink_slime_ingot' },
            { item: 'industrialforegoing:pink_slime_ingot' },
        ],
        inputFluid: `{FluidName:\"industrialforegoing:ether_gas\",Amount:500}`,
        processingTime: 300,
        output: { item: 'masterfulmachinery:t2_controller' },
    }).id(`kubejs:masterfulmachinery/t2_controller`)
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'masterfulmachinery:t1_t1_item_port_items_output' },
            { item: 'enderioalloys:item_alloy_ingot_redstone_alloy' },
            { item: 'enderioalloys:item_alloy_ingot_redstone_alloy' },
            { item: 'enderioalloys:item_alloy_ingot_redstone_alloy' },
        ],
        inputFluid: `{FluidName:\"industrialforegoing:ether_gas\",Amount:500}`,
        processingTime: 300,
        output: { item: 'masterfulmachinery:t2_t2_item_port_items_output' },
    }).id(`kubejs:masterfulmachinery/t2_t2_item_port_items_output`)
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'minecraft:diamond_block' },
            { item: 'masterfulmachinery:t1_t1_energy_port_energy_input' },
            { item: 'minecraft:emerald' },
            { item: 'minecraft:emerald' },
            { item: 'minecraft:emerald' },
        ],
        inputFluid: `{FluidName:\"industrialforegoing:ether_gas\",Amount:500}`,
        processingTime: 300,
        output: { item: 'masterfulmachinery:t2_t2_energy_port_energy_input' },
    }).id(`kubejs:masterfulmachinery/t2_t2_energy_port_energy_input`)
    e.recipes.mekanism.combining('masterfulmachinery:t3_controller', 'masterfulmachinery:t2_controller', 'minecraft:netherite_block').id(`kubejs:masterfulmachinery/t3_controller`)
    e.recipes.mekanism.combining('masterfulmachinery:t3_t3_item_port_items_output', 'masterfulmachinery:t2_t2_item_port_items_output', 'minecraft:netherite_block').id(`kubejs:masterfulmachinery/t3_t3_item_port_items_output`)
    e.recipes.mekanism.combining('masterfulmachinery:t3_t3_energy_port_energy_input', 'masterfulmachinery:t2_t2_energy_port_energy_input', 'minecraft:netherite_block').id(`kubejs:masterfulmachinery/t3_t3_energy_port_energy_input`)
    draconicFusion(e, 'masterfulmachinery:t4_controller', 3, 5000000, 'masterfulmachinery:t3_controller', [
        'allthemodium:allthemodium_block',
        'allthemodium:allthemodium_block',
        'draconicevolution:awakened_draconium_ingot',
        'draconicevolution:awakened_draconium_ingot',
        'powah:crystal_nitro',
        'powah:crystal_nitro',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core'
    ])
    draconicFusion(e, 'masterfulmachinery:t4_t4_item_port_items_output', 3, 5000000, 'masterfulmachinery:t3_t3_item_port_items_output', [
        'allthemodium:allthemodium_block',
        'allthemodium:allthemodium_block',
        'draconicevolution:awakened_draconium_ingot',
        'draconicevolution:awakened_draconium_ingot',
        'powah:crystal_nitro',
        'powah:crystal_nitro',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core'
    ])
    draconicFusion(e, 'masterfulmachinery:t4_t4_energy_port_energy_input', 3, 5000000, 'masterfulmachinery:t3_t3_energy_port_energy_input', [
        'allthemodium:allthemodium_block',
        'allthemodium:allthemodium_block',
        'draconicevolution:awakened_draconium_ingot',
        'draconicevolution:awakened_draconium_ingot',
        'powah:crystal_nitro',
        'powah:crystal_nitro',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core'
    ])
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "ABCBA",
            "ABBBA",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "allthemodium:vibranium_block"
            },
            "B": {
                "item": "draconicevolution:medium_chaos_frag"
            },
            "C": {
                "item": "masterfulmachinery:t4_controller"
            }
        },
        "result": {
            "item": 'masterfulmachinery:t5_controller'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "ABCBA",
            "ABBBA",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "allthemodium:vibranium_block"
            },
            "B": {
                "item": "draconicevolution:awakened_draconium_block"
            },
            "C": {
                "item": "masterfulmachinery:t4_t4_item_port_items_output"
            }
        },
        "result": {
            "item": 'masterfulmachinery:t5_t5_item_port_items_output'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "ABCBA",
            "ABBBA",
            "AAAAA"
        ],
        "key": {
            "A": {
                "item": "allthemodium:vibranium_block"
            },
            "B": {
                "item": "enderioalloys:block_alloy_vivid_alloy"
            },
            "C": {
                "item": "masterfulmachinery:t4_t4_energy_port_energy_input"
            }
        },
        "result": {
            "item": 'masterfulmachinery:t5_t5_energy_port_energy_input'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABCCCBA",
            "ADEFEDA",
            "ADFGFDA",
            "ADEFEDA",
            "ABCCCBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_block"
            },
            "B": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:netherstar\"}"
            },
            "C": {
                "item": "kubejs:neutronium_ingot"
            },
            "D": {
                "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
            },
            "E": {
                "item": "draconicevolution:chaos_shard"
            },
            "F": {
                "item": "extendedcrafting:ultimate_singularity"
            },
            "G": {
                "item": "masterfulmachinery:t5_controller"
            }
        },
        "result": {
            "item": 'masterfulmachinery:t6_controller'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABCCCBA",
            "ADEFEDA",
            "ADFGFDA",
            "ADEFEDA",
            "ABCCCBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_block"
            },
            "B": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:platinum\"}"
            },
            "C": {
                "item": "kubejs:neutronium_ingot"
            },
            "D": {
                "item": "enderioalloys:item_alloy_ingot_vivid_alloy"
            },
            "E": {
                "item": "draconicevolution:chaos_shard"
            },
            "F": {
                "item": "extendedcrafting:ultimate_singularity"
            },
            "G": {
                "item": "masterfulmachinery:t5_t5_item_port_items_output"
            }
        },
        "result": {
            "item": 'masterfulmachinery:t6_t6_item_port_items_output'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABCCCBA",
            "ADEFEDA",
            "ADFGFDA",
            "ADEFEDA",
            "ABCCCBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_block"
            },
            "B": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:forge_energy\"}"
            },
            "C": {
                "item": "kubejs:neutronium_ingot"
            },
            "D": {
                "item": "enderioalloys:item_alloy_ingot_vibrant_alloy"
            },
            "E": {
                "item": "draconicevolution:chaos_shard"
            },
            "F": {
                "item": "extendedcrafting:ultimate_singularity"
            },
            "G": {
                "item": "masterfulmachinery:t5_t5_energy_port_energy_input"
            }
        },
        "result": {
            "item": 'masterfulmachinery:t6_t6_energy_port_energy_input'
        }
    })
})