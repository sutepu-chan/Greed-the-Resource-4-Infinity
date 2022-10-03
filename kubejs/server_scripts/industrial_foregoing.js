onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'industrialforegoing:machine_frame_pity',
        'industrialforegoing:machine_frame_simple',
        'industrialforegoing:machine_frame_advanced',
        'industrialforegoing:machine_frame_supreme',

    ])
    //===== black hole tank =====//
    modifyShaped(e, 'industrialforegoing:common_black_hole_tank', 1, ['III', 'PGP', 'BFB'], {
        I: '#forge:ingots/iron',
        P: '#forge:plates/silver',
        B: 'minecraft:bucket',
        F: 'thermal:machine_frame',
        G: '#forge:gears/invar',
    })
    modifyShaped(e, 'industrialforegoing:pity_black_hole_tank', 1, ['PPP', 'MLM', 'TFT'], {
        P: 'industrialforegoing:plastic',
        M: '#forge:plates/electrum',
        T: 'pneumaticcraft:small_tank',
        F: 'industrialforegoing:machine_frame_pity',
        L: 'industrialforegoing:common_black_hole_tank',
    })
    modifyShaped(e, 'industrialforegoing:simple_black_hole_tank', 1, ['PPP', 'MLM', 'TFT'], {
        P: 'industrialforegoing:plastic',
        M: '#forge:plates/lumium',
        T: 'pneumaticcraft:medium_tank',
        F: 'industrialforegoing:machine_frame_simple',
        L: 'industrialforegoing:pity_black_hole_tank',
    })
    modifyShaped(e, 'industrialforegoing:advanced_black_hole_tank', 1, ['PPP', 'MLM', 'TFT'], {
        P: 'industrialforegoing:plastic',
        M: '#forge:plates/signalum',
        T: 'pneumaticcraft:large_tank',
        F: 'industrialforegoing:machine_frame_advanced',
        L: 'industrialforegoing:simple_black_hole_tank',
    })
    modifyShaped(e, 'industrialforegoing:supreme_black_hole_tank', 1, ['PPP', 'MLM', 'TFT'], {
        P: 'industrialforegoing:plastic',
        M: '#forge:plates/enderium',
        T: 'pneumaticcraft:huge_tank',
        F: 'industrialforegoing:machine_frame_supreme',
        L: 'industrialforegoing:advanced_black_hole_tank',
    })
    //===== black hole unit =====//
    modifyShaped(e, 'industrialforegoing:common_black_hole_unit', 1, ['III', 'AGA', 'DFD'], {
        I: '#forge:ingots/iron',
        A: '#forge:ingots/pulsating_iron',
        D: 'dankstorage:dank_2',
        F: 'thermal:machine_frame',
        G: '#forge:gears/invar'
    })
    modifyShaped(e, 'industrialforegoing:pity_black_hole_unit', 1, ['PPP', 'AUA', 'DFD'], {
        P: 'industrialforegoing:plastic',
        A: '#forge:ingots/energetic_alloy',
        D: 'dankstorage:dank_3',
        F: 'industrialforegoing:machine_frame_pity',
        U: 'industrialforegoing:common_black_hole_unit'
    })
    modifyShaped(e, 'industrialforegoing:simple_black_hole_unit', 1, ['PPP', 'AUA', 'DFD'], {
        P: 'industrialforegoing:plastic',
        A: '#forge:ingots/energetic_silver',
        D: 'dankstorage:dank_4',
        F: 'industrialforegoing:machine_frame_simple',
        U: 'industrialforegoing:pity_black_hole_unit'
    })
    modifyShaped(e, 'industrialforegoing:advanced_black_hole_unit', 1, ['PPP', 'AUA', 'DFD'], {
        P: 'industrialforegoing:plastic',
        A: '#forge:ingots/vibrant_alloy',
        D: 'dankstorage:dank_5',
        F: 'industrialforegoing:machine_frame_advanced',
        U: 'industrialforegoing:simple_black_hole_unit'
    })
    modifyShaped(e, 'industrialforegoing:supreme_black_hole_unit', 1, ['PPP', 'AUA', 'DFD'], {
        P: 'industrialforegoing:plastic',
        A: '#forge:ingots/vivid_alloy',
        D: 'dankstorage:dank_6',
        F: 'industrialforegoing:machine_frame_supreme',
        U: 'industrialforegoing:advanced_black_hole_unit'
    })
    //===== black hole controller =====//
    e.remove({ output: 'industrialforegoing:black_hole_controller' })
    draconicFusion(e, 'industrialforegoing:black_hole_controller', 1, 5000000, 'draconicevolution:wyvern_core', [
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core',
        'industrialforegoing:supreme_black_hole_tank',
        'industrialforegoing:supreme_black_hole_unit',
        'industrialforegoing:plastic',
        'industrialforegoing:plastic',
        '#forge:ingots/melodic_alloy',
        '#forge:ingots/melodic_alloy'
    ])
    //===== machine frame =====//
    let dissolutionCrafting = (ingredientList, fluid, fluidAmount, time, result) => {
        e.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredientList.map(i => Item.of(i).toJson()),
            inputFluid: `{FluidName:\"${fluid}\",Amount:${fluidAmount}}`,
            processingTime: time, //default 300
            output: Item.of(result).toJson(),
        }).id(`kubejs:dissolution/${fluid.substring(fluid.indexOf(':') + 1)}/${result.substring(result.indexOf(':') + 1)}`)
    }
    dissolutionCrafting([
        '#forge:plastic',
        '#forge:plastic',
        'industrialforegoing:machine_frame_pity',
        '#forge:ingots/electrical_steel',
        'thermal:iron_plate',
        'thermal:iron_plate',
        '#forge:gears/tin',
        '#forge:gears/tin'
    ], 'industrialforegoing:latex', 1000, 300, 'industrialforegoing:machine_frame_simple')
    dissolutionCrafting([
        '#forge:plastic',
        '#forge:plastic',
        'industrialforegoing:machine_frame_simple',
        '#forge:gears/enderium',
        '#forge:gears/enderium',
        '#forge:plates/gold',
        '#forge:plates/gold',
        'upgradednetherite:wither_upgraded_netherite_ingot'
    ], 'industrialforegoing:pink_slime', 1000, 300, 'industrialforegoing:machine_frame_advanced')
    dissolutionCrafting([
        '#forge:plastic',
        '#forge:plastic',
        'industrialforegoing:machine_frame_advanced',
        '#forge:gears/enderium',
        '#forge:gears/enderium',
        '#forge:plates/netherite',
        '#forge:plates/netherite',
        '#forge:ingots/stellar_alloy'
    ], 'industrialforegoing:ether_gas', 350, 300, 'industrialforegoing:machine_frame_supreme')
    e.recipes.thermal.chiller('industrialforegoing:machine_frame_pity', [Fluid.of('thermal:redstone', 900), '4x chemlib:element_iron'])
    dissolutionCrafting([
        'pneumaticcraft:printed_circuit_board',
        'pneumaticcraft:printed_circuit_board',
        '#forge:plates/signalum',
        '#forge:plates/signalum',
        'chemlib:compound_sodium_chloride',
        'chemlib:compound_sodium_chloride',
        '#forge:ingots/vivid_alloy',
        '#forge:ingots/vivid_alloy'
    ], 'industrialforegoing:pink_slime', 1000, 300, 'minecraft:spawner')
    //===== generators =====//
    modifyShaped(e, 'industrialforegoing:pitiful_generator', 1, ['SSS', 'SGS', 'SFS'], {
        S: '#forge:stone',
        F: 'minecraft:furnace',
        G: '#forge:gears/iron'
    })
    modifyShaped(e, 'industrialforegoing:biofuel_generator', 1, ['PBP', 'IAI', 'GSG'], {
        G: '#forge:gears/gold',
        I: 'industrialforegoing:pitiful_generator',
        P: '#forge:plastic',
        B: 'industrialforegoing:biofuel_bucket',
        A: 'industrialforegoing:machine_frame_advanced',
        S: 'tconstruct:sky_congealed_slime'
    })
    modifyShaped(e, 'industrialforegoing:bioreactor', 1, ['PGP', 'CMC', 'OSO'], {
        P: '#forge:plastic',
        C: 'minecraft:carrot',
        O: 'minecraft:potato',
        S: 'minecraft:sugar',
        M: 'industrialforegoing:machine_frame_simple',
        G: '#forge:gears/gold'
    })

    //===== progress adjust =====//
    modifyShaped(e, 'industrialforegoing:mob_imprisonment_tool', 1, [' G ', 'G G', 'SG '], {
        G: '#forge:ingots/gold',
        S: '#forge:string'
    })
    modifyShaped(e, 'industrialforegoing:fluid_extractor', 1, ['CUC', 'TMT', 'CTC'], {
        T: 'chemlib:element_titanium',
        C: '#forge:coins/enderium',
        M: 'industrialforegoing:machine_frame_pity',
        U: 'thermal:upgrade_augment_1'
    })
    modifyShaped(e, 'industrialforegoing:latex_processing_unit', 1, ['SKS', 'CMC', 'DDD'], {
        D: '#forge:ingots/dark_steel',
        C: 'chemlib:compound_cellulose',
        S: '#forge:coins/signalum',
        K: 'chemlib:compound_kaolinite',
        M: 'industrialforegoing:machine_frame_pity'
    })
    e.replaceInput({ mod: 'industrialforegoing', type: 'minecraft:crafting_shaped' }, '#forge:gears/iron', '#forge:gears/invar')
    e.replaceInput({ mod: 'industrialforegoing', type: 'minecraft:crafting_shaped' }, '#forge:gears/gold', '#forge:gears/lumium')
    e.replaceInput({ mod: 'industrialforegoing', type: 'minecraft:crafting_shaped' }, '#forge:gears/diamond', '#forge:gears/enderium')
    modifyShaped(e, 'industrialforegoing:dissolution_chamber', 1, ['PCP', 'TMT', 'VGV'], {
        C: 'chemlib:compound_mullite',
        P: '#forge:plastic',
        T: 'pneumaticcraft:large_tank',
        V: '#forge:ingots/vibrant_alloy',
        M: 'industrialforegoing:machine_frame_pity',
        G: '#forge:gears/constantan'
    })
    modifyShaped(e, 'industrialforegoing:mob_duplicator', 1, ['PPP', 'CMT', 'EVH'], {
        P: '#forge:plastic',
        C: 'chemlib:compound_protein',
        E: 'chemlib:element_calcium',
        V: '#forge:ingots/vibrant_alloy',
        M: 'industrialforegoing:machine_frame_advanced',
        T: 'chemlib:compound_triglyceride',
        H: 'chemlib:compound_phosphate'
    })
    modifyShaped(e, 'industrialforegoing:wither_builder', 1, ['PEP', 'AMA', 'NSN'], {
        N: 'powah:niotic_crystal_block',
        S: 'powah:spirited_crystal_block',
        A: '#forge:ingots/stellar_alloy',
        M: 'industrialforegoing:machine_frame_supreme',
        E: 'minecraft:nether_star',
        P: '#forge:plastic'
    })
    modifyShaped(e, 'industrialforegoing:mob_slaughter_factory', 1, ['PGP', 'NMN', 'SKS'], {
        P: '#forge:plastic',
        N: 'minecraft:netherite_sword',
        S: '#forge:ingots/soularium',
        K: 'chemlib:compound_potassium_cyanide',
        M: 'industrialforegoing:machine_frame_simple',
        G: '#forge:gears/enderium'
    })
    modifyShaped(e, 'industrialforegoing:mob_crusher', 1, ['PNP', 'SMS', 'GHG'], {
        P: '#forge:plastic',
        S: '#forge:ingots/crystalline_pink_slime',
        G: '#forge:gears/lumium',
        H: 'chemlib:compound_hydrogen_sulfide',
        M: 'industrialforegoing:machine_frame_supreme',
        N: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_sword'
    })
    modifyShaped(e, 'industrialforegoing:fluid_laser_base', 1, ['PNP', 'TMT', 'GCG'], {
        G: '#forge:gears/enderium',
        T: 'industrialforegoing:simple_black_hole_tank',
        P: '#forge:plastic',
        N: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe',
        M: 'industrialforegoing:machine_frame_advanced',
        C: 'chemlib:compound_cadmium_hydroxide'
    })
    modifyShaped(e, 'industrialforegoing:stasis_chamber', 1, ['PPP', 'IMI', 'GCG'], {
        G: '#forge:gears/lumium',
        I: '#forge:ingots/crystalline_pink_slime',
        P: '#forge:plastic',
        M: 'industrialforegoing:machine_frame_advanced',
        C: 'chemlib:compound_sodium_sulfate'
    })
    modifyShaped(e, 'industrialforegoing:laser_drill', 1, ['PEP', 'IMI', 'GCG'], {
        G: '#forge:gears/lumium',
        I: '#forge:ingots/end_steel',
        P: '#forge:plastic',
        M: 'industrialforegoing:machine_frame_advanced',
        C: 'chemlib:element_neon',
        E: '#forge:gears/enderium'
    })
})