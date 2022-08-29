onEvent('recipes', e => {
    modifyShaped(e, 'hostilenetworks:deep_learner', 1, ['ORO', 'RLR', 'ORO'], {
        R: 'extendedcrafting:redstone_component',
        O: 'occultism:otherstone',
        L: '#forge:gems/lapis'
    })
    modifyShaped(e, 'hostilenetworks:sim_chamber', 1, [' P ', 'OGO', 'OVO'], {
        O: 'mekanism:ingot_refined_obsidian',
        V: '#forge:ingots/vivid_alloy',
        G: '#forge:glass',
        P: 'industrialforegoing:plastic'
    })
    modifyShaped(e, 'hostilenetworks:loot_fabricator', 1, [' P ', 'OGO', 'OSO'], {
        O: 'mekanism:ingot_refined_obsidian',
        S: '#forge:ingots/stellar_alloy',
        G: '#forge:glass',
        P: 'industrialforegoing:plastic'
    })
})