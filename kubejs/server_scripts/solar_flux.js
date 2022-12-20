onEvent('recipes', e => {
    removeRecipeByID(e, [
        'solarflux:mirror',
        'solarflux:photovoltaic_cell_2',
        'solarflux:photovoltaic_cell_3',
        'solarflux:photovoltaic_cell_4',
        'solarflux:photovoltaic_cell_5',
        'solarflux:photovoltaic_cell_6',
    ])
    modifyShaped(e, 'solarflux:mirror', 3, ['GGG', ' C ', 'GGG'], {
        G: 'absentbydesign:slab_glass',
        C: 'pneumaticcraft:ingot_iron_compressed'
    })
    modifyShaped(e, 'solarflux:photovoltaic_cell_2', 2, ['GGG', 'CIC', 'PQP'], {
        G: 'absentbydesign:slab_glass',
        Q: 'minecraft:smooth_quartz',
        C: '#forge:ingots/compressed_iron',
        I: 'minecraft:iron_ingot',
        P: 'solarflux:photovoltaic_cell_1'
    })
    modifyShaped(e, 'solarflux:photovoltaic_cell_3', 2, ['GGG', 'SMS', 'PQP'], {
        G: 'absentbydesign:slab_glass',
        Q: 'minecraft:smooth_quartz',
        S: 'thermal:rf_coil',
        M: '#forge:gears/nickel',
        P: 'solarflux:photovoltaic_cell_2'
    })
    modifyShaped(e, 'solarflux:photovoltaic_cell_4', 2, ['GGG', 'SMS', 'PQP'], {
        G: 'solarflux:blazing_coating',
        Q: 'minecraft:smooth_quartz',
        S: 'industrialforegoing:plastic',
        M: '#forge:ingots/pink_slime',
        P: 'solarflux:photovoltaic_cell_3'
    })
    modifyShaped(e, 'solarflux:photovoltaic_cell_5', 2, ['GGG', 'SMS', 'PQP'], {
        G: 'solarflux:emerald_glass',
        Q: 'minecraft:smooth_quartz',
        S: 'mekanism:alloy_atomic',
        M: 'minecraft:diamond_block',
        P: 'solarflux:photovoltaic_cell_4'
    })
    modifyShaped(e, 'solarflux:photovoltaic_cell_6', 2, ['GGG', 'MSM', 'PQP'], {
        G: 'solarflux:ender_glass',
        Q: 'minecraft:smooth_quartz',
        S: 'mekanism:pellet_antimatter',
        M: 'allthemodium:vibranium_block',
        P: 'solarflux:photovoltaic_cell_5'
    })
})