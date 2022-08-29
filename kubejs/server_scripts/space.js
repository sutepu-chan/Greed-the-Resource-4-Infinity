onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'boss_tools:iron_plate',
        'boss_tools:nasa_workbench',
        'boss_tools:rocket_launch_pad'
    ])
    removeRecipeByID(e, [
        /boss_tools:compressing/
    ])
    e.replaceInput('boss_tools:iron_plate', 'thermal:iron_plate')
    //nasa table
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            " A A ",
            "A   A",
            " A A ",
            "BBCBB",
            "BDEFB"
        ],
        "key": {
            "A": {
                "item": "boss_tools:compressed_steel"
            },
            "B": {
                "item": "enderioalloys:block_alloy_electrical_steel"
            },
            "C": {
                "item": "extendedcrafting:elite_table"
            },
            "D": {
                "item": "allthemodium:unobtainium_vibranium_alloy_block"
            },
            "E": {
                "item": "allthemodium:unobtainium_allthemodium_alloy_block"
            },
            "F": {
                "item": "allthemodium:vibranium_allthemodium_alloy_block"
            }
        },
        "result": {
            "item": "boss_tools:nasa_workbench"
        }
    })
    modifyShaped(e, 'boss_tools:oxygen_bubble_distributor', 1, ['FFF', 'RLR', 'RSR'], {
        L: 'boss_tools:oxygen_loader',
        R: 'mekanism:hdpe_rod',
        S: 'mekanism:hdpe_sheet',
        F: 'boss_tools:engine_fan'
    })
    modifyShaped(e, 'boss_tools:oxygen_loader', 1, ['EIE', 'IOI', 'ETE'], {
        E: 'enderioalloys:item_alloy_ingot_end_steel',
        T: 'boss_tools:oxygen_tank',
        O: 'chemlib:element_oxygen',
        I: '#forge:plates/iron'
    })
    modifyShaped(e, 'boss_tools:fuel_refinery', 1, ['EIE', 'IRI', 'EDE'], {
        D: 'enderioalloys:block_alloy_dark_steel',
        E: 'enderioalloys:item_alloy_ingot_end_steel',
        I: '#forge:plates/iron',
        R: 'pneumaticcraft:refinery'
    })
    modifyShaped(e, 'boss_tools_giselle_addon:fuel_loader', 1, ['ESE', 'STS', 'ERE'], {
        E: 'enderioalloys:item_alloy_ingot_end_steel',
        S: 'boss_tools:compressed_steel',
        R: 'pneumaticcraft:refinery_output',
        T: 'industrialforegoing:supreme_black_hole_tank'
    })
    modifyShaped(e, 'boss_tools_giselle_addon:gravity_normalizer', 1, ['ESE', 'SBS', 'ESE'], {
        S: 'enderioalloys:item_alloy_ingot_electrical_steel',
        E: 'enderioalloys:item_alloy_ingot_end_steel',
        B: 'boss_tools:space_boots',
    })
    //launch pad
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            "     ",
            "A   A",
            "BCCCB",
            "BBBBB"
        ],
        "key": {
            "A": {
                "item": "mekanism:ingot_steel"
            },
            "B": {
                "item": "enderioalloys:item_alloy_ingot_dark_steel"
            },
            "C": {
                "item": "enderioalloys:item_alloy_ingot_electrical_steel"
            }
        },
        "result": {
            "item": "boss_tools:rocket_launch_pad",
            "count": 9
        }
    })
    //netherite spacesuit
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "ABBBA",
            "BCDCB",
            "ABBBA",
            " AAA "
        ],
        "key": {
            "A": {
                "item": "minecraft:netherite_ingot"
            },
            "B": {
                "item": "thermal:copper_plate"
            },
            "C": {
                "item": "minecraft:glass_pane"
            },
            "D": {
                "item": "boss_tools:oxygen_mask"
            }
        },
        "result": {
            "item": "boss_tools:netherite_oxygen_mask"
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A A ",
            "ABABA",
            "ABCBA",
            "ABDBA",
            " AEA "
        ],
        "key": {
            "A": {
                "item": "minecraft:netherite_ingot"
            },
            "B": {
                "item": "thermal:iron_plate"
            },
            "C": {
                "item": "boss_tools:space_suit",
            },
            "D": {
                "item": "boss_tools:oxygen_gear"
            },
            "E": {
                "item": "thermal:copper_plate"
            }
        },
        "result": {
            "item": "boss_tools:netherite_space_suit"
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "CBDBC",
            "CB BC",
            "AA AA"
        ],
        "key": {
            "A": {
                "item": "minecraft:netherite_ingot"
            },
            "B": {
                "item": "thermal:copper_plate"
            },
            "C": {
                "item": "thermal:iron_plate"
            },
            "D": {
                "item": "boss_tools:space_pants",
            }
        },
        "result": {
            "item": "boss_tools:netherite_space_pants"
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            " AAA ",
            " BCB ",
            " D D ",
            "DD DD"
        ],
        "key": {
            "A": {
                "item": "thermal:iron_plate"
            },
            "B": {
                "item": "thermal:copper_plate"
            },
            "C": {
                "item": "boss_tools:space_boots",
            },
            "D": {
                "item": "minecraft:netherite_ingot"
            }
        },
        "result": {
            "item": "boss_tools:netherite_space_boots"
        }
    })
    e.remove({input: 'boss_tools:mars_silicon_ore'})
    e.remove({output: 'boss_tools:silicon_ingot'})
    e.recipes.mekanism.combining('2x boss_tools:silicon_ingot', 'boss_tools:mars_silicon_ore', 'boss_tools:ice_shard').id(`kubejs:combining/boss_tools/silicon_ingot`)
})