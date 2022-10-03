onEvent('recipes', e => {
    // ===== functions =====//
    function armorupgrade(material, previous, next) {
        e.recipes.allthemodium.atmshaped_crafting({
            pattern: ['XXX', 'XYX'],
            key: {
                X: { tag: `forge:${material}` },
                Y: { item: `${previous}_helmet` }
            },
            result: { item: `${next}_helmet` }
        }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_helmet_upgrade`)

        e.recipes.allthemodium.atmshaped_crafting({
            pattern: ['XYX', 'XXX', 'XXX'],
            key: {
                X: { tag: `forge:${material}` },
                Y: { item: `${previous}_chestplate` }
            },
            result: { item: `${next}_chestplate` }
        }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_chestplate_upgrade`)

        e.recipes.allthemodium.atmshaped_crafting({
            pattern: ['XXX', 'XYX', 'X X'],
            key: {
                X: { tag: `forge:${material}` },
                Y: { item: `${previous}_leggings` }
            },
            result: { item: `${next}_leggings` }
        }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_leggings_upgrade`)

        e.recipes.allthemodium.atmshaped_crafting({
            pattern: ['XYX', 'X X'],
            key: {
                X: { tag: `forge:${material}` },
                Y: { item: `${previous}_boots` }
            },
            result: { item: `${next}_boots` }
        }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_boots_upgrade`)
    }

    removeRecipeByOutput(e, [
        'allthemodium:allthemodium_helmet',
        'allthemodium:allthemodium_boots',
        'allthemodium:allthemodium_leggings',
        'allthemodium:allthemodium_chestplate',
        'allthemodium:unobtainium_boots',
        'allthemodium:unobtainium_leggings',
        'allthemodium:unobtainium_chestplate',
        'allthemodium:unobtainium_helmet',
        'allthemodium:vibranium_boots',
        'allthemodium:vibranium_leggings',
        'allthemodium:vibranium_chestplate',
        'allthemodium:vibranium_helmet'
    ])
    
    //===== armor upgrade =====//
    armorupgrade('ingots/iron', 'minecraft:leather', 'minecraft:iron')
    armorupgrade('ingots/gold', 'minecraft:iron', 'minecraft:golden')
    armorupgrade('gems/diamond', 'minecraft:iron', 'minecraft:diamond')
    armorupgrade('ingots/allthemodium', 'upgradednetherite_ultimate:ultimate_upgraded_netherite', 'allthemodium:allthemodium')
    armorupgrade('ingots/vibranium', 'allthemodium:allthemodium', 'allthemodium:vibranium')
    armorupgrade('ingots/unobtainium', 'allthemodium:vibranium', 'allthemodium:unobtainium')
})
