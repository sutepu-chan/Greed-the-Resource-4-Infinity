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
})
