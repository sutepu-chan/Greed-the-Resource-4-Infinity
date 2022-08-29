onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'quarryplus:workbenchplus',
    ])
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 7,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'I', 'I', 'I', 'I', 'I', 'I'],
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I'],
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I'],
                    ['I', 'R', 'G', 'D', 'G', 'R', 'I'],
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I'],
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I'],
                    ['I', 'I', 'I', 'I', 'I', 'I', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'R', 'G', 'D', 'G', 'R', 'I'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['D', '-', '-', '-', '-', '-', 'D'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['I', 'R', 'G', 'D', 'G', 'R', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['G', '-', '-', '-', '-', '-', 'G'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['R', '-', '-', '-', '-', '-', 'R'],
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'I', 'I', 'I', 'I', 'I', 'I'],
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I'],
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I'],
                    ['I', 'R', 'G', 'D', 'G', 'R', 'I'],
                    ['I', 'R', 'G', 'G', 'G', 'R', 'I'],
                    ['I', 'R', 'R', 'R', 'R', 'R', 'I'],
                    ['I', 'I', 'I', 'I', 'I', 'I', 'I']
                ]
            },
        ],
        catalyst: {
            id: 'mekanism:sulfuric_acid_bucket',
            Count: 1
        },
        components: {
            I: {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            G: {
                type: 'compactcrafting:block',
                block: 'mekanism:block_refined_glowstone'
            },
            R: {
                type: 'compactcrafting:block',
                block: 'minecraft:redstone_block'
            },
            D: {
                type: 'compactcrafting:block',
                block: 'minecraft:diamond_block'
            }
        },
        outputs: [
            {
                id: 'quarryplus:workbenchplus',
                Count: 1
            }
        ]
    }).id(`compactcrafting:quarryplus/workbenchplus`)

})