onEvent('recipes', e => {
    modifyShaped(e, 'bettermuffling:muffling_block', 1, ['MWM', 'WNW', 'MWM'], {
        W: '#forge:wool',
        N: 'minecraft:note_block',
        M: 'mekanism:upgrade_muffling'
    })
    modifyShaped(e, 'bettermuffling:upgrade', 1, ['GEG', 'EME', 'GEG'], {
        M: 'bettermuffling:muffling_block',
        G: 'allthecompressed:gold_block_1x',
        E: '#forge:gears/gold'
    })
    e.remove({id: 'bettermuffling:muffling_block_advanced'})
    e.shapeless('bettermuffling:muffling_block_advanced', ['bettermuffling:muffling_block', 'bettermuffling:upgrade']).id(`kubejs:bettermuffling/muffling_block_advanced`)

})