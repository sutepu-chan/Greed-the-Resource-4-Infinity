onEvent('recipes', e => {
    //===== crafting component =====//
    modifyShaped(e, 'packagedauto:package_component', 1, ['UPU', 'FEF', 'UPU'], {
        U: 'lazierae2:logic_unit',
        F: 'lazierae2:fluix_steel_ingot',
        E: 'minecraft:ender_eye',
        P: 'lazierae2:speculative_processor'
    })
    modifyShaped(e, 'packagedauto:me_package_component', 1, ['OSO', 'CPC', 'OIO'], {
        O: '#forge:ingots/refined_obsidian',
        C: 'aeadditions:item_storage_component_1024',
        S: 'appliedenergistics2:singularity',
        P: 'packagedauto:package_component',
        I: 'appliedenergistics2:interface'
    })
    //===== recipe remove =====//
    removeRecipeByOutput(e, [
        'packagedauto:recipe_holder',
        'packagedauto:encoder',
        'packagedexcrafting:ultimate_crafter',
        'packagedexcrafting:elite_crafter',
        'packagedexcrafting:advanced_crafter',
        'packagedexcrafting:basic_crafter',
        'packagedauto:unpackager',
        'packagedauto:packager',
        'packagedexcrafting:combination_crafter',
        'packagedexcrafting:marked_pedestal'
    ])
    //===== blocks =====//
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 25600000,
        input: {
            item: 'appliedenergistics2:pattern_terminal'
        },
        ingredients: [
            {
                item: 'enderioalloys:item_alloy_ingot_crude_steel'
            },
            {
                item: 'extendedcrafting:crystaltine_ingot'
            },
            {
                item: 'appliedenergistics2:blank_pattern'
            },
            {
                item: 'aeadditions:fluid_storage_component_1024'
            },
            {
                item: 'aeadditions:item_storage_component_1024'
            },
            {
                item: 'extendedcrafting:crystaltine_ingot'
            },
            {
                item: 'enderioalloys:item_alloy_ingot_crude_steel'
            },
            {
                item: 'aeadditions:chemical_storage_component_1024'
            }
        ],
        result: {
            item: 'packagedauto:encoder'
        }
    }).id(`kubejs:packagedauto/encoder`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 800000,
        input: {
            item: 'appliedenergistics2:blank_pattern'
        },
        ingredients: [
            {
                item: 'lazierae2:fluix_steel_ingot'
            },
            {
                item: 'thermal:signalum_plate'
            },
            {
                item: 'lazierae2:fluix_steel_ingot'
            },
            {
                item: 'enderioalloys:item_material_glazed_nether_brick'
            },
            {
                item: 'enderioalloys:item_alloy_ingot_conductive_iron'
            },
            {
                item: 'thermal:signalum_plate'
            },
            {
                item: 'draconicevolution:draconium_chest',
            },
            {
                item: 'enderioalloys:item_material_glazed_nether_brick'
            }
        ],
        result: {
            item: 'packagedauto:recipe_holder'
        }
    }).id(`kubejs:packagedauto/recipe_holder`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5000000,
        input: {
            item: 'packagedauto:me_package_component'
        },
        ingredients: [
            {
                item: 'industrialforegoing:pink_slime'
            },
            {
                item: 'enderioalloys:item_alloy_ingot_energetic_silver'
            },
            {
                item: 'extendedcrafting:crystaltine_ingot'
            },
            {
                item: 'industrialforegoing:machine_frame_supreme'
            },
            {
                item: 'pneumaticcraft:electrostatic_compressor'
            },
            {
                item: 'enderioalloys:item_alloy_ingot_energetic_silver'
            },
            {
                item: 'tconstruct:queens_slime_ingot'
            },
            {
                item: 'appliedenergistics2:purified_certus_quartz_crystal'
            },
            {
                item: 'industrialforegoing:pink_slime'
            },
            {
                item: 'appliedenergistics2:purified_certus_quartz_crystal'
            },
            {
                item: 'extendedcrafting:crystaltine_ingot'
            },
            {
                item: 'appliedenergistics2:purified_certus_quartz_crystal'
            },
            {
                item: 'pneumaticcraft:electrostatic_compressor'
            },
            {
                item: 'mekanism:ingot_refined_glowstone'
            },
            {
                item: 'tconstruct:queens_slime_ingot'
            },
            {
                item: 'mekanism:ingot_refined_glowstone'
            }
        ],
        result: {
            item: 'packagedauto:packager'
        }
    }).id(`kubejs:packagedauto/packager`)
    e.remove({ output: 'packagedauto:packager_extension' })
    e.shapeless('packagedauto:packager_extension', ['packagedauto:packager', 'appliedenergistics2:inverter_card']).id(`kubejs:packagedauto/packager_extension`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5000000,
        input: {
            item: 'packagedauto:me_package_component'
        },
        ingredients: [
            {
                item: 'appliedenergistics2:export_bus'
            },
            {
                item: 'industrialforegoing:machine_frame_supreme'
            },
            {
                item: 'appliedenergistics2:export_bus'
            },
            {
                item: 'industrialforegoing:pink_slime'
            },
            {
                item: 'tconstruct:queens_slime_ingot'
            },
            {
                item: 'appliedenergistics2:purified_fluix_crystal'
            },
            {
                item: 'appliedenergistics2:export_bus'
            },
            {
                item: 'appliedenergistics2:purified_fluix_crystal'
            },
            {
                item: 'appliedenergistics2:export_bus'
            },
            {
                item: 'thermal:invar_plate'
            },
            {
                item: 'tconstruct:queens_slime_ingot'
            },
            {
                item: 'thermal:invar_plate'
            },
            {
                item: 'industrialforegoing:pink_slime'
            },
            {
                item: 'thermal:invar_plate'
            },
            {
                item: 'appliedenergistics2:purified_fluix_crystal'
            },
            {
                item: 'thermal:invar_plate'
            }
        ],
        result: {
            item: 'packagedauto:unpackager'
        }
    }).id(`kubejs:packagedauto/unpackager`)

    //====== package excrafter =====//
    utils.listOf([
        'basic',
        'advanced',
        'elite',
        'ultimate'
    ]).forEach(tier => {
        e.custom({
            type: 'extendedcrafting:combination',
            powerCost: 123456789,
            input: { item: `extendedcrafting:${tier}_auto_table` },
            ingredients: [
                {
                    item: 'lazierae2:parallel_processor'
                },
                {
                    item: 'industrialforegoing:pink_slime_ingot'
                },
                {
                    item: 'lazierae2:parallel_processor'
                },
                {
                    item: 'mekanism:hdpe_sheet'
                },
                {
                    item: 'enderioalloys:item_alloy_ingot_stellar_alloy'
                },
                {
                    item: 'mekanism:ultimate_control_circuit'
                },
                {
                    item: 'industrialforegoing:machine_frame_supreme'
                },
                {
                    item: 'extendedcrafting:crystaltine_catalyst'
                },
                {
                    item: 'enderioalloys:item_alloy_ingot_stellar_alloy'
                },
                {
                    item: 'industrialforegoing:pink_slime_ingot'
                },
                {
                    item: 'mysticalagradditions:insanium_gemstone'
                },
                {
                    item: 'mekanism:hdpe_sheet'
                },
                {
                    item: 'extendedcrafting:crystaltine_component'
                },
                {
                    item: 'mekanism:ultimate_control_circuit'
                },
                {
                    item: 'mysticalagradditions:insanium_gemstone'
                },
                {
                    item: 'extendedcrafting:crystaltine_catalyst'
                }
            ],
            result: { item: `packagedexcrafting:${tier}_crafter` }
        }).id(`kubejs:packagedexcrafting/${tier}_crafter`)
    })

    //===== combination crafting =====//
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5658000,
        input: {
            item: 'extendedcrafting:pedestal'
        },
        ingredients: [
            {
                item: 'industrialforegoing:machine_frame_simple'
            },
            {
                item: 'extendedcrafting:crystaltine_component'
            },
            {
                item: 'packagedauto:package_component'
            },
            {
                item: 'packagedauto:package_component'
            },
            {
                item: 'extendedcrafting:elite_component'
            },
            {
                item: 'pneumaticcraft:ingot_iron_compressed'
            },
            {
                item: 'industrialforegoing:machine_frame_simple'
            },
            {
                item: 'extendedcrafting:elite_catalyst'
            },
            {
                item: 'extendedcrafting:elite_component'
            },
            {
                item: 'extendedcrafting:crystaltine_component'
            },
            {
                item: 'pneumaticcraft:ingot_iron_compressed'
            },
            {
                item: 'pneumaticcraft:ingot_iron_compressed'
            }
        ],
        result: {
            item: 'packagedexcrafting:marked_pedestal'
        }
    }).id(`kubejs:packagedexcrafting/marked_pedestal`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 256840962,
        input: {
            item: 'extendedcrafting:crafting_core'
        },
        ingredients: [
            {
                item: 'extendedcrafting:crystaltine_component'
            },
            {
                item: 'pneumaticcraft:compressed_iron_block'
            },
            {
                item: 'thermal:enderium_plate'
            },
            {
                item: 'thermal:machine_crafter'
            },
            {
                item: 'extendedcrafting:crystaltine_component'
            },
            {
                item: 'appliedenergistics2:molecular_assembler'
            },
            {
                item: 'thermal:enderium_plate'
            },
            {
                item: 'chemlib:compound_potassium_carbonate'
            },
            {
                item: 'pneumaticcraft:compressed_iron_block'
            },
            {
                item: 'chemlib:lamp_argon'
            },
            {
                item: 'industrialforegoing:machine_frame_supreme'
            },
            {
                item: 'appliedenergistics2:molecular_assembler'
            },
            {
                item: 'thermal:machine_crafter'
            },
            {
                item: 'chemlib:compound_potassium_carbonate'
            },
            {
                item: 'packagedauto:me_package_component'
            },
            {
                item: 'chemlib:lamp_argon'
            }
        ],
        result: {
            item: 'packagedexcrafting:combination_crafter'
        }
    }).id(`kubejs:packagedexcrafting/combination_crafter`)
})