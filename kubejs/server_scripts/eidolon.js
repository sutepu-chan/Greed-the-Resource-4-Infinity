onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'eidolon:smooth_stone_bricks',
        'compactcrafting:base',
        'compactcrafting:projector_dish',
        'compactcrafting:field_projector'
    ])
    //===== chapter progressing =====//
    modifyShapeless(e, 'eidolon:pewter_blend', 2, ['#forge:dusts/iron', '#forge:dusts/lead'])
    e.custom({
        type: 'eidolon:worktable',
        core: [
            ' G ',
            'ECE',
            'DHD'
        ],
        extras: [
            'F',
            'AA',
            'A'
        ],
        key: {
            A: { item: 'eidolon:gold_inlay' },
            B: { item: 'eidolon:arcane_gold_ingot' },
            C: { item: 'eidolon:shadow_gem' },
            D: { item: 'minecraft:blackstone_slab' },
            E: { item: 'occultism:iesnium_ingot' },
            F: { item: 'eidolon:unholy_symbol' },
            G: { item: 'rangedwirelessredstone:redstone_transmitter' },
            H: { item: 'minecraft:crying_obsidian' }
        },
        result: { item: 'compactcrafting:base' }
    }).id(`kubejs:compactcrafting/base`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            'AB ',
            'ACB',
            'AB '
        ],
        extras: [
            'D',
            'DE',
            'D'
        ],
        key: {
            A: { item: 'mekanism:dust_obsidian' },
            B: { item: 'minecraft:glass' },
            C: { item: 'eidolon:lesser_soul_gem' },
            D: { item: 'minecraft:lantern' },
            E: { item: 'eidolon:unholy_symbol' }
        },
        result: { item: 'compactcrafting:projector_dish' }
    }).id(`kubejs:compactcrafting/projector_dish`)
    e.custom({
        type: 'eidolon:crucible',
        result: {
            item: 'compactcrafting:field_projector',
            count: 2
        },
        steps: [
            {
                ingredients: [
                    { item: 'compactcrafting:projector_dish' },
                    { item: 'compactcrafting:base' }
                ]
            },
            {
                ingredients: [
                    { item: 'occultism:iesnium_dust' },
                    { item: 'thermal:sulfur_dust', count: 2 },
                    { item: 'occultism:crushed_end_stone', count: 4 },
                ],
                stirs: 2
            },
            {
                ingredients: [
                    { item: 'eidolon:arcane_gold_block'}
                ],
                stirs: 3
            }
        ]
    }).id(`kubejs:compactcrafting/field_projector`)

    //===== recipe crashes =====//
    e.shapeless('4x eidolon:smooth_stone_bricks', ['8x minecraft:stone_bricks', 'minecraft:quartz']).id(`kubejs:eidolon/smooth_stone_bricks`)


})