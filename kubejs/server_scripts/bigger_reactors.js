onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'biggerreactors:reactor_terminal',
        'biggerreactors:reactor_glass'
    ])
    e.custom({
        type: 'tconstruct:casting_table',
        cast: { item: 'biggerreactors:reactor_casing' },
        cast_consumed: true,
        switch_slots: true,
        fluid: {
            name: 'boss_tools:molten_desh',
            amount: 2000
        },
        result: 'biggerreactors:reactor_terminal',
        cooling_time: 60
    }).id(`kubejs:biggerreactors/reactor_terminal`)
    e.shaped('36x biggerreactors:reactor_casing', ['IGI', 'GUG', 'IGI'], {
        I: '#forge:storage_blocks/iron',
        G: '#forge:storage_blocks/graphite',
        U: '#forge:storage_blocks/uranium'
    }).id(`kubejs:biggerreactors/reactor_casing/bulk`)
    e.shaped('9x biggerreactors:reactor_fuel_rod', ['IGI', 'IUI', 'IGI'], {
        I: '#forge:storage_blocks/iron',
        G: '#forge:storage_blocks/graphite',
        U: '#forge:storage_blocks/uranium'
    }).id(`kubejs:biggerreactors/reactor_fuel_rod/bulk`)
    e.shapeless('biggerreactors:reactor_glass', ['#forge:glass/colorless', 'biggerreactors:reactor_casing']).id(`kubejs:biggerreactors/reactor_glass`)
    modifyShaped(e, 'biggerreactors:reactor_control_rod', 1, ['SGS', 'GUG', 'MMM'], {
        S: 'boss_tools:moon_sand',
        M: 'boss_tools:moon_stone',
        G: '#forge:storage_blocks/graphite',
        U: '#forge:storage_blocks/uranium'
    })
    modifyShaped(e, 'biggerreactors:reactor_power_tap', 1, ['CRC', 'RDR', 'CRC'], {
        C: 'biggerreactors:reactor_casing',
        R: '#forge:dusts/redstone',
        D: '#boss_tools:compresseds/desh'
    })
})