onEvent('recipes', e => {
    //===== remove redundant augments =====//
    removeRecipeByOutput(e, [
        'mysticalagriculture:woodcutter_augment',
        'mysticalagriculture:flight_augment'
    ])
    removeRecipeByID(e, [
        'mysticalagriculture:experience_bottle',
        /mysticalagriculture:seed\/infusion.+/,
        'mysticalagriculture:essence/common/tungsten_ingot'
    ])

    //===== fix recipes =====//
    e.shaped('8x appliedenergistics2:silicon', ['EEE', 'E E', 'EEE'], {
        E: 'mysticalagriculture:silicon_essence'
    })
    e.remove({ input: 'mysticalagriculture:steel_essence' })
    e.shaped('mekanism:ingot_steel', ['EEE', 'E E', 'EEE'], {
        E: 'mysticalagriculture:steel_essence'
    }).id(`mysticalagriculture:essence/common/steel_ingot`)

    //===== progress =====//
    modifyShaped(e, 'mysticalagriculture:infusion_pedestal', 1, [' A ', ' P ', 'PPP'], {
        A: 'eidolon:arcane_gold_ingot',
        P: 'eidolon:pewter_ingot'
    })
    modifyShaped(e, 'mysticalagriculture:infusion_altar', 1, ['ACA', 'CPC', 'PPP'], {
        A: 'eidolon:arcane_gold_ingot',
        P: 'eidolon:pewter_ingot',
        C: 'minecraft:red_carpet'
    })
})