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
        input: { item: 'appliedenergistics2:pattern_terminal' },
        ingredients: [
            { item: 'appliedenergistics2:blank_pattern' },
            { item: 'aeadditions:item_storage_component_1024' },
            { item: 'aeadditions:fluid_storage_component_1024' },
            { item: 'aeadditions:chemical_storage_component_1024' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'enderioalloys:item_alloy_ingot_crude_steel' },
            { item: 'enderioalloys:item_alloy_ingot_crude_steel' },
        ],
        result: { item: 'packagedauto:encoder' }
    }).id(`kubejs:packagedauto/encoder`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 800000,
        input: { item: 'appliedenergistics2:blank_pattern' },
        ingredients: [
            { item: 'lazierae2:fluix_steel_ingot' },
            { item: 'lazierae2:fluix_steel_ingot' },
            { item: 'thermal:signalum_plate' },
            { item: 'thermal:signalum_plate' },
            { item: 'enderioalloys:item_material_glazed_nether_brick' },
            { item: 'enderioalloys:item_material_glazed_nether_brick' },
            { item: 'enderioalloys:item_alloy_ingot_conductive_iron' },
            { item: 'draconicevolution:draconium_chest' },
        ],
        result: { item: 'packagedauto:recipe_holder' }
    }).id(`kubejs:packagedauto/recipe_holder`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5000000,
        input: { item: 'packagedauto:me_package_component' },
        ingredients: [
            { item: 'industrialforegoing:pink_slime' },
            { item: 'industrialforegoing:pink_slime' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'appliedenergistics2:purified_certus_quartz_crystal' },
            { item: 'appliedenergistics2:purified_certus_quartz_crystal' },
            { item: 'appliedenergistics2:purified_certus_quartz_crystal' },
            { item: 'enderioalloys:item_alloy_ingot_energetic_silver' },
            { item: 'enderioalloys:item_alloy_ingot_energetic_silver' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'extendedcrafting:crystaltine_ingot' },
            { item: 'pneumaticcraft:electrostatic_compressor' },
            { item: 'pneumaticcraft:electrostatic_compressor' },
            { item: 'tconstruct:queens_slime_ingot' },
            { item: 'tconstruct:queens_slime_ingot' },
            { item: 'mekanism:ingot_refined_glowstone' },
            { item: 'mekanism:ingot_refined_glowstone' }
        ],
        result: { item: 'packagedauto:packager' }
    }).id(`kubejs:packagedauto/packager`)
    e.remove({ output: 'packagedauto:packager_extension' })
    e.shapeless('packagedauto:packager_extension', ['packagedauto:packager', 'appliedenergistics2:inverter_card']).id(`kubejs:packagedauto/packager_extension`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5000000,
        input: { item: 'packagedauto:me_package_component' },
        ingredients: [
            { item: 'appliedenergistics2:export_bus' },
            { item: 'appliedenergistics2:export_bus' },
            { item: 'appliedenergistics2:export_bus' },
            { item: 'appliedenergistics2:export_bus' },
            { item: 'appliedenergistics2:purified_fluix_crystal' },
            { item: 'appliedenergistics2:purified_fluix_crystal' },
            { item: 'appliedenergistics2:purified_fluix_crystal' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'industrialforegoing:pink_slime' },
            { item: 'industrialforegoing:pink_slime' },
            { item: 'tconstruct:queens_slime_ingot' },
            { item: 'tconstruct:queens_slime_ingot' },
            { item: 'thermal:invar_plate' },
            { item: 'thermal:invar_plate' },
            { item: 'thermal:invar_plate' },
            { item: 'thermal:invar_plate' }
        ],
        result: { item: 'packagedauto:unpackager' }
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
                { item: 'lazierae2:parallel_processor' },
                { item: 'lazierae2:parallel_processor' },
                { item: 'industrialforegoing:machine_frame_supreme' },
                { item: 'industrialforegoing:pink_slime_ingot' },
                { item: 'industrialforegoing:pink_slime_ingot' },
                { item: 'enderioalloys:item_alloy_ingot_stellar_alloy' },
                { item: 'enderioalloys:item_alloy_ingot_stellar_alloy' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'mekanism:ultimate_control_circuit' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mekanism:hdpe_sheet' },
                { item: 'mysticalagradditions:insanium_gemstone' },
                { item: 'mysticalagradditions:insanium_gemstone' },
                { item: 'extendedcrafting:crystaltine_component' },
                { item: 'extendedcrafting:crystaltine_catalyst' },
                { item: 'extendedcrafting:crystaltine_catalyst' }
            ],
            result: { item: `packagedexcrafting:${tier}_crafter` }
        }).id(`kubejs:packagedexcrafting/${tier}_crafter`)
    })

    //===== combination crafting =====//
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5658000,
        input: { item: 'extendedcrafting:pedestal' },
        ingredients: [
            { item: 'packagedauto:package_component' },
            { item: 'packagedauto:package_component' },
            { item: 'industrialforegoing:machine_frame_simple' },
            { item: 'industrialforegoing:machine_frame_simple' },
            { item: 'extendedcrafting:elite_catalyst' },
            { item: 'extendedcrafting:elite_component' },
            { item: 'extendedcrafting:elite_component' },
            { item: 'extendedcrafting:crystaltine_component' },
            { item: 'extendedcrafting:crystaltine_component' },
            { item: 'pneumaticcraft:ingot_iron_compressed' },
            { item: 'pneumaticcraft:ingot_iron_compressed' },
            { item: 'pneumaticcraft:ingot_iron_compressed' }
        ],
        result: { item: 'packagedexcrafting:marked_pedestal' }
    }).id(`kubejs:packagedexcrafting/marked_pedestal`)
    e.custom({
        type: 'extendedcrafting:combination',
        powerCost: 256840962,
        input: { item: 'extendedcrafting:crafting_core' },
        ingredients: [
            { item: 'thermal:enderium_plate' },
            { item: 'thermal:enderium_plate' },
            { item: 'thermal:machine_crafter' },
            { item: 'thermal:machine_crafter' },
            { item: 'extendedcrafting:crystaltine_component' },
            { item: 'extendedcrafting:crystaltine_component' },
            { item: 'pneumaticcraft:compressed_iron_block' },
            { item: 'pneumaticcraft:compressed_iron_block' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'appliedenergistics2:molecular_assembler' },
            { item: 'appliedenergistics2:molecular_assembler' },
            { item: 'chemlib:compound_potassium_carbonate' },
            { item: 'chemlib:compound_potassium_carbonate' },
            { item: 'packagedauto:me_package_component' },
            { item: 'chemlib:lamp_argon' },
            { item: 'chemlib:lamp_argon' }
        ],
        result: { item: 'packagedexcrafting:combination_crafter' }
    }).id(`kubejs:packagedexcrafting/combination_crafter`)
})