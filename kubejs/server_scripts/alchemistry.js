onEvent('recipes', e => {
    //===== progress =====//
    modifyShaped(e, 'alchemistry:chemical_dissolver', 1, ['EPE', 'EME', 'CIC'], {
        P: 'minecraft:piston',
        C: '#forge:ingots/crystalline_alloy',
        I: '#forge:plates/invar',
        E: '#forge:ingots/electrical_steel',
        M: 'minecraft:magma_block'
    })
    modifyShaped(e, 'alchemistry:liquifier', 1, ['PVP', 'VEV', 'PVP'], {
        P: '#forge:plates/silver',
        V: '#forge:ingots/vivid_alloy',
        E: '#forge:ingots/energetic_alloy'
    })
    modifyShaped(e, 'alchemistry:evaporator', 1, ['E E', 'E E', 'EVE'], {
        E: '#forge:ingots/end_steel',
        V: '#forge:ingots/vibrant_alloy'
    })
    modifyShaped(e, 'alchemistry:slot_filler', 4, ['NNN', 'NPN', 'NNN'], {
        P: '#forge:plates/iron',
        N: '#forge:nuggets/dark_steel'
    })
    modifyShaped(e, 'alchemistry:fission_controller', 1, ['MCM', 'GVG', 'MCM'], {
        G: '#forge:glass',
        V: '#forge:ingots/vibrant_alloy',
        M: '#forge:ingots/melodic_alloy',
        C: 'alchemistry:fission_casing'
    })
    modifyShaped(e, 'alchemistry:fusion_controller', 1, ['MCM', 'GVG', 'MCM'], {
        G: '#forge:glass',
        V: '#forge:ingots/vibrant_alloy',
        M: '#forge:ingots/melodic_alloy',
        C: 'alchemistry:fusion_casing'
    })
    //unusable code in serverpack, causing java.lang.out of array index error
    //not solvable currently
    /*
    modifyShaped(e, 'alchemistry:fission_casing', 6, ['SBS', 'SWS', 'SSS'], {
        S: 'enderioalloys:block_alloy_dark_steel',
        W: 'chemlib:compound_water',
        B: 'allthecompressed:blaze_rod_block'
    })
    modifyShaped(e, 'alchemistry:fusion_casing', 6, ['SBS', 'SWS', 'SSS'], {
        S: 'enderioalloys:block_alloy_dark_steel',
        W: 'chemlib:compound_water',
        B: 'allthecompressed:ender_pearl_block'
    })
    
    modifyShaped(e, 'alchemistry:fission_core', 3, ['SSS', 'SRS', 'SSS'], {
        S: '#forge:storage_blocks/energetic_silver',
        R: 'biggerreactors:reactor_fuel_rod'
    })
    modifyShaped(e, 'alchemistry:fusion_core', 3, ['SSS', 'SRS', 'SSS'], {
        S: '#forge:storage_blocks/energetic_alloy',
        R: 'biggerreactors:reactor_fuel_rod'
    })
    */
})
