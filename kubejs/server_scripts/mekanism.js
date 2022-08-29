onEvent('recipes', e => {
    //===== fix duplicating recipes =====//
    e.remove([
        { output: 'minecraft:emerald_ore', input: '5x #forge:dusts/emerald' },
        { output: 'minecraft:diamond_ore', input: '5x #forge:dusts/diamond' },
        { output: 'minecraft:ancient_debris', input: '2x #forge:dusts/netherite' }
    ])
    function oreRecover(oreList) {
        oreList.forEach(([ore, ingredient, count, block]) => {
            e.recipes.mekanism.combining(ore, Item.of(ingredient, count), block).id(`kubejs:combiner/${ore.replace(':', '/')}`)
        })
    }
    oreRecover([
        ['minecraft:diamond_ore', '#forge:dusts/diamond', 9, '#forge:cobblestone'],
        ['minecraft:emerald_ore', '#forge:dusts/emerald', 9, '#forge:cobblestone'],
        ['minecraft:ancient_debris', '#forge:dusts/netherite', 9, '#chisel:basalt'],
        ['draconicevolution:end_draconium_ore', 'draconicevolution:draconium_dust', 9, '#chisel:end_stone'],
        ['draconicevolution:nether_draconium_ore', 'draconicevolution:draconium_dust', 9, '#forge:netherrack'],
        ['draconicevolution:overworld_draconium_ore', 'draconicevolution:draconium_dust', 9, '#forge:cobblestone']
    ])
    //===== biofuel crushing recipes =====//
    e.recipes.mekanism.crushing('2x mekanism:bio_fuel', '#forge:biofuel2')
    e.recipes.mekanism.crushing('4x mekanism:bio_fuel', '#forge:biofuel4')
    e.recipes.mekanism.crushing('5x mekanism:bio_fuel', '#forge:biofuel5')
    e.recipes.mekanism.crushing('7x mekanism:bio_fuel', '#forge:biofuel7')
    e.recipes.mekanism.crushing('8x mekanism:bio_fuel', '#forge:biofuel8')
    //===== sawdust sawing recipes =====//
    function sawdustproduce(modid, treetype) {
        e.recipes.mekanism.sawing(
            `6x ${modid}:${treetype}_planks`,
            [`${modid}:stripped_${treetype}_log`, `${modid}:${treetype}_log`],
            Item.of('thermal:sawdust').withChance(0.25)
        ).id(`kubejs:saw/${modid}_log_${treetype}`)
    }
    sawdustproduce('upgrade_aquatic', 'driftwood')
    sawdustproduce('upgrade_aquatic', 'river')
    sawdustproduce('environmental', 'willow')
    sawdustproduce('environmental', 'cherry')
    sawdustproduce('environmental', 'wisteria')

    //===== misc recipes =====//
    e.recipes.mekanism.crushing('9x minecraft:bone_meal', 'minecraft:bone_block')
    e.recipes.mekanism.enriching('6x draconicevolution:draconium_dust', '#forge:ores/draconium')
    e.recipes.mekanism.crushing('2x minecraft:black_dye', '#minecraft:coals')
    //===== QoL recipes =====//
    e.recipes.mekanism.enriching('9x mekanism:enriched_redstone', 'minecraft:redstone_block').id(`kubejs:mekanism/enriching/enriched_redstone`)
    e.recipes.mekanism.enriching('9x mekanism:enriched_diamond', 'minecraft:diamond_block').id(`kubejs:mekanism/enriching/enriched_diamond`)

    //===== progress =====//
    e.recipes.thermal.smelter('mekanism:ingot_steel', ['#forge:ingots/iron', '3x #forge:dusts/coal'])
    modifyShaped(e, 'mekanism:combiner', 1, ['PSP', 'BMB', 'TFT'], {
        T: 'thermal:tin_coin',
        B: 'thermal:bronze_plate',
        P: 'industrialforegoing:plastic',
        S: '#forge:ingots/steel',
        M: 'industrialforegoing:machine_frame_supreme',
        F: 'industrialforegoing:biofuel_bucket'
    })
    e.recipes.mekanism.combining('mekanism:steel_casing', '2x #forge:ingots/steel', '#forge:ingots/osmium').id(`kubejs:mekanism/combining/steel_casing`)
    modifyShaped(e, 'mekanism:enrichment_chamber', 1, ['PPP', 'TCT', 'SAS'], {
        P: 'industrialforegoing:plastic',
        S: 'thermal:signalum_coin',
        C: 'mekanism:steel_casing',
        T: 'thermal:tin_coin',
        A: '#forge:ingots/crystalline_alloy'
    })
    modifyShaped(e, 'mekanism:metallurgic_infuser', 1, ['PDP', 'RCR', 'EFE'], {
        E: 'thermal:electrum_coin',
        R: 'mekanism:enriched_redstone',
        P: 'industrialforegoing:plastic',
        D: 'mekanism:enriched_diamond',
        C: 'mekanism:steel_casing',
        F: 'minecraft:furnace'
    })
    modifyShaped(e, 'mekanism:energized_smelter', 1, ['PAP', 'BSB', 'CFC'], {
        P: '#forge:plastic',
        B: 'mekanism:basic_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        C: '#forge:coins/copper',
        F: 'ironfurnaces:diamond_furnace'
    })
    modifyShaped(e, 'mekanism:purification_chamber', 1, ['PAP', 'BSB', 'CTC'], {
        P: '#forge:plastic',
        B: 'mekanism:advanced_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        C: '#forge:coins/copper',
        T: 'mekanism:enriched_tin'
    })
    modifyShaped(e, 'mekanism:crusher', 1, ['PAP', 'BSB', 'CEC'], {
        P: '#forge:plastic',
        B: 'mekanism:advanced_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        C: '#forge:coins/copper',
        E: 'occultism:crushed_end_stone'
    })
    modifyShaped(e, 'mekanism:electrolytic_separator', 1, ['PAP', 'BSB', 'CEC'], {
        P: '#forge:plastic',
        B: 'mekanism:basic_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_infused',
        C: '#forge:coins/iron',
        E: 'mekanism:electrolytic_core'
    })
    modifyShaped(e, 'mekanism:chemical_injection_chamber', 1, ['PAP', 'BSB', 'CEC'], {
        P: '#forge:plastic',
        B: 'mekanism:elite_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_reinforced',
        C: '#forge:coins/silver',
        E: 'mekanism:purification_chamber'
    })
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 3,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['S', 'S', 'S'],
                    ['S', 'C', 'S'],
                    ['S', 'S', 'S']
                ]
            }
        ],
        catalyst: {
            id: 'mekanism:alloy_infused',
            Count: 2
        },
        components: {
            S: {
                type: 'compactcrafting:block',
                block: 'mekanism:block_steel'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'alltheores:copper_block'
            }
        },
        outputs: [
            {
                id: 'mekanism:thermal_evaporation_block',
                Count: 16
            }
        ]
    }).id(`compactcrafting:mekanism/thermal_evaporation_block`)
    modifyShaped(e, 'mekanism:thermal_evaporation_valve', 2, ['EEE', 'CAC', 'EEE'], {
        E: 'mekanism:thermal_evaporation_block',
        C: '#forge:plates/copper',
        A: 'mekanism:advanced_control_circuit'
    })
    modifyShaped(e, 'mekanism:thermal_evaporation_controller', 1, ['CIC', 'EGE', 'EEE'], {
        E: 'mekanism:thermal_evaporation_block',
        C: 'mekanism:advanced_control_circuit',
        I: '#forge:plates/iron',
        G: '#forge:glass'
    })
    modifyShaped(e, 'mekanism:chemical_infuser', 1, ['PAP', 'BSB', 'CTC'], {
        P: '#forge:plastic',
        B: 'mekanism:advanced_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_reinforced',
        C: '#forge:coins/copper',
        T: 'mekanism:basic_chemical_tank'
    })
    modifyShaped(e, 'mekanism:chemical_oxidizer', 1, ['PAP', 'BSB', 'CEC'], {
        P: '#forge:plastic',
        B: 'mekanism:elite_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_atomic',
        C: '#forge:coins/bronze',
        E: 'chemlib:element_oxygen'
    })
    modifyShaped(e, 'mekanism:rotary_condensentrator', 1, ['PAP', 'BSB', 'CTF'], {
        P: '#forge:plastic',
        B: 'mekanism:elite_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:basic_chemical_tank',
        F: 'mekanism:basic_fluid_tank',
        T: 'mekanism:energy_tablet'
    })
    modifyShaped(e, 'mekanism:chemical_dissolution_chamber', 1, ['PAP', 'BSB', 'COC'], {
        P: '#forge:plastic',
        B: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:advanced_chemical_tank',
        O: 'mekanism:block_refined_obsidian'
    })
    modifyShaped(e, 'mekanism:chemical_washer', 1, ['PAP', 'BSB', 'FOC'], {
        P: '#forge:plastic',
        B: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:advanced_chemical_tank',
        F: 'mekanism:advanced_fluid_tank',
        O: 'mekanism:block_refined_obsidian'
    })
    modifyShaped(e, 'mekanism:chemical_crystallizer', 1, ['PAP', 'BSB', 'COC'], {
        P: '#forge:plastic',
        B: 'mekanism:ultimate_control_circuit',
        S: 'mekanism:steel_casing',
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:fluorite_gem',
        O: 'mekanism:block_refined_obsidian'
    })
    
    //===== recipes balance =====//
    //digital miner
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            '  ABA  ',
            'BCABACB',
            'AAADAAA',
            'EEFGFEE',
            'HIJKJIH',
            'LCJJJCL',
            'LLLJLLL'
        ],
        key: {
            A: {
                item: 'mekanism:alloy_atomic'
            },
            B: {
                item: 'boss_tools:moon_bricks'
            },
            C: {
                item: 'mekanism:logistical_sorter'
            },
            D: {
                item: 'allthemodium:vibranium_ingot'
            },
            E: {
                item: 'xnet:advanced_connector_routing'
            },
            F: {
                item: 'allthemodium:allthemodium_ingot'
            },
            G: {
                item: 'mekanism:robit'
            },
            H: {
                item: 'enderioalloys:item_alloy_ingot_vivid_alloy'
            },
            I: {
                item: 'enderioalloys:item_alloy_ingot_vibrant_alloy'
            },
            J: {
                item: 'mekanism:steel_casing'
            },
            K: {
                item: 'allthemodium:unobtainium_ingot'
            },
            L: {
                item: 'mekanism:teleportation_core'
            }
        },
        result: {
            item: 'mekanism:digital_miner'
        }
    }).id(`kubejs:mekanism/digital_miner`)
    //free runner
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AA AA',
            'AA AA',
            ' BCB ',
            ' DED ',
            'BBFBB'
        ],
        key: {
            A: {
                item: 'enderioalloys:item_alloy_ingot_energetic_alloy'
            },
            B: {
                item: 'upgradednetherite:feather_upgraded_netherite_ingot'
            },
            C: {
                item: 'balancedflight:basic_flight_ring'
            },
            D: {
                item: 'mekanism:energy_tablet'
            },
            E: {
                item: 'balancedflight:ascended_flight_anchor'
            },
            F: {
                item: 'upgradednetherite:feather_upgraded_netherite_boots',
            }
        },
        result: {
            item: 'mekanism:free_runners'
        }
    }).id(`kubejs:mekanism/free_runner`)
    //atomic disassembler
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            ' AABC',
            ' ADEB',
            '  ADA',
            ' F AA',
            'F    '
        ],
        key: {
            A: {
                item: 'extendedcrafting:crystaltine_ingot'
            },
            B: {
                item: 'enderioalloys:item_alloy_ingot_melodic_alloy'
            },
            C: {
                item: 'allthemodium:allthemodium_ingot'
            },
            D: {
                item: 'mekanism:alloy_atomic'
            },
            E: {
                item: 'mekanism:energy_tablet'
            },
            F: {
                item: 'mekanism:hdpe_rod'
            }
        },
        result: {
            item: 'mekanism:atomic_disassembler',
        }
    }).id(`kubejs:mekanism/atomic_disassembler`)
    //meka helmet
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBCBBA",
            "ADBCBDA",
            "ADDEDDA",
            "AFGHGFA",
            "I     I",
            "I     I",
            "II   II"
        ],
        "key": {
            "A": {
                "item": "mekanism:hdpe_sheet"
            },
            "B": {
                "item": "mekanism:ultimate_control_circuit"
            },
            "C": {
                "item": "allthemodium:unobtainium_allthemodium_alloy_block"
            },
            "D": {
                "item": "mekanism:pellet_plutonium"
            },
            "E": {
                "item": "draconicevolution:awakened_core"
            },
            "F": {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            "G": {
                "item": "mekanism:alloy_atomic"
            },
            "H": {
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet",
            },
            "I": {
                "item": "mekanism:pellet_polonium"
            }
        },
        "result": {
            "item": 'mekanism:mekasuit_helmet'
        }
    })
    //meka chestplate
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A     A",
            "AB   BA",
            "ABB BBA",
            "ACBDBCA",
            "ECCFCCE",
            "EEEGEEE",
            "HHEGEHH"
        ],
        "key": {
            "A": {
                "item": "mekanism:ultimate_control_circuit"
            },
            "B": {
                "item": "mekanism:hdpe_sheet"
            },
            "C": {
                "item": "mekanism:pellet_plutonium"
            },
            "D": {
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate",
            },
            "E": {
                "item": "mekanism:pellet_polonium"
            },
            "F": {
                "item": "draconicevolution:awakened_core"
            },
            "G": {
                "item": "allthemodium:unobtainium_vibranium_alloy_block"
            },
            "H": {
                "item": "mekanism:alloy_atomic"
            }
        },
        "result": {
            "item": 'mekanism:mekasuit_bodyarmor'
        }
    })
    //meka leggings
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABCBAA",
            "ABDEDBA",
            "ADDEDDA",
            "AFFGFFA",
            "HF   FH",
            "HI   IH",
            "JI   IJ"
        ],
        "key": {
            "A": {
                "item": "mekanism:hdpe_sheet"
            },
            "B": {
                "item": "draconicevolution:draconium_ingot"
            },
            "C": {
                "item": "draconicevolution:awakened_core"
            },
            "D": {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            "E": {
                "item": "allthemodium:vibranium_allthemodium_alloy_block"
            },
            "F": {
                "item": "mekanism:pellet_plutonium"
            },
            "G": {
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings",
            },
            "H": {
                "item": "mekanism:alloy_atomic"
            },
            "I": {
                "item": "mekanism:pellet_polonium"
            },
            "J": {
                "item": "mekanism:ultimate_control_circuit"
            }
        },
        "result": {
            "item": 'mekanism:mekasuit_pants',
        }
    })
    //meka boots
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABCBA ",
            " DBCBD ",
            " EBFBE ",
            " EBGBE ",
            " HI IH ",
            "III III",
            "JJJ JJJ"
        ],
        "key": {
            "A": {
                "item": "draconicevolution:draconium_ingot"
            },
            "B": {
                "item": "mekanism:hdpe_sheet"
            },
            "C": {
                "item": "allthemodium:unobtainium_allthemodium_alloy_block"
            },
            "D": {
                "item": "mekanism:ultimate_control_circuit"
            },
            "E": {
                "item": "mekanism:alloy_atomic"
            },
            "F": {
                "item": "draconicevolution:awakened_core"
            },
            "G": {
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_boots",
            },
            "H": {
                "item": "mekanism:pellet_plutonium"
            },
            "I": {
                "item": "mekanism:pellet_polonium"
            },
            "J": {
                "item": "draconicevolution:awakened_draconium_ingot"
            }
        },
        "result": {
            "item": 'mekanism:mekasuit_boots',
        }
    })
    
    //===== recipe remove =====//
    removeRecipeByOutput(e, [
        'mekanism:steel_casing',
        'mekanism:thermal_evaporation_block'
    ])
    removeRecipeByID(e, [
        'mekanism:gas_conversion/flint_to_oxygen',
        'mekanism:gas_conversion/sulfur_to_sulfuric_acid',
        'mekanism:purification_chamber',
        'mekanism:chemical_injection_chamber',
        'mekanism:chemical_infuser',
        'mekanism:chemical_oxidizer',
        'mekanism:rotary_condensentrator',
        'mekanism:chemical_dissolution_chamber',
        'mekanism:chemical_washer',
        'mekanism:chemical_crystallizer',
        'mekanism:digital_miner',
        'mekanism:free_runners',
        'mekanism:atomic_disassembler',
        'mekanism:mekasuit_helmet',
        'mekanism:mekasuit_bodyarmor',
        'mekanism:mekasuit_pants',
        'mekanism:mekasuit_boots',
    ])
})