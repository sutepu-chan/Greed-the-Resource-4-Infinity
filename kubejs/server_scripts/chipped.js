onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'chipped:botanist_workbench',
        'chipped:glassblower',
        'chipped:carpenters_table',
        'chipped:loom_table',
        'chipped:mason_table',
        'chipped:alchemy_bench',
        'chipped:mechanist_workbench'
    ])
    e.custom({
        type: 'eidolon:worktable',
        core: [
            '   ',
            ' A ',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { item: 'minecraft:flower_pot' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:botanist_workbench' }
    }).id(`kubejs:chipped/botanist_workbench`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            ' B ',
            'CAC',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { item: 'minecraft:tnt' },
            B: { item: 'minecraft:redstone_torch' },
            C: { item: 'minecraft:piston' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:mechanist_workbench' }
    }).id(`kubejs:chipped/mechanist_workbench`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            ' A ',
            ' B ',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { tag: 'forge:glass/colorless' },
            B: { item: 'minecraft:blast_furnace' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:glassblower' }
    }).id(`kubejs:chipped/glassblower`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            '   ',
            ' A ',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { item: 'minecraft:wooden_axe' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:carpenters_table' }
    }).id(`kubejs:chipped/carpenters_table`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            '   ',
            ' A ',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { item: 'minecraft:loom' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:loom_table' }
    }).id(`kubejs:chipped/loom_table`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            '   ',
            ' A ',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { item: 'minecraft:stonecutter' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:mason_table' }
    }).id(`kubejs:chipped/mason_table`)
    e.custom({
        type: 'eidolon:worktable',
        core: [
            '   ',
            ' A ',
            ' W '
        ],
        extras: [
            'X',
            'XX',
            'Y'
        ],
        key: {
            A: { item: 'minecraft:brewing_stand' },
            W: { tag: 'forge:workbench' },
            X: { item: 'minecraft:stick' },
            Y: { tag: 'minecraft:logs' }
        },
        result: { item: 'chipped:alchemy_bench' }
    }).id(`kubejs:chipped/alchemy_bench`)
})