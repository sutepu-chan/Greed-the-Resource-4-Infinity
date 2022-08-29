onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'pneumaticcraft:pressure_chamber_wall',
        'pneumaticcraft:pressure_chamber_glass',
        'pneumaticcraft:pressure_chamber_valve',
        'pneumaticcraft:pressure_chamber_interface'
    ])
    //compressed iron block
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 0,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'I', 'I'],
                    ['I', 'I', 'I'],
                    ['I', 'I', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'I', 'I'],
                    ['I', 'T', 'I'],
                    ['I', 'I', 'I']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'I', 'I'],
                    ['I', 'I', 'I'],
                    ['I', 'I', 'I']
                ]
            },
        ],
        catalyst: {
            id: 'minecraft:redstone_block',
            Count: 1
        },
        components: {
            I: {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            T: {
                type: 'compactcrafting:block',
                block: 'minecraft:tnt'
            }
        },
        outputs: [
            {
                id: 'pneumaticcraft:compressed_iron_block',
                Count: 6
            }
        ]
    }).id(`compactcrafting:pneumaticcraft/compressed_iron_block`)
    //pressure chamber wall
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 0,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['I', 'I', 'I', 'I', 'I'],
                    ['I', '-', 'T', '-', 'I'],
                    ['I', 'T', 'I', 'T', 'I'],
                    ['I', '-', 'T', '-', 'I'],
                    ['I', 'I', 'I', 'I', 'I']
                ]
            }
        ],
        catalyst: {
            id: 'eidolon:lesser_soul_gem',
            Count: 1
        },
        components: {
            I: {
                type: 'compactcrafting:block',
                block: 'pneumaticcraft:reinforced_bricks'
            },
            T: {
                type: 'compactcrafting:block',
                block: 'pneumaticcraft:reinforced_brick_wall'
            }
        },
        outputs: [
            {
                id: 'pneumaticcraft:pressure_chamber_wall',
                Count: 24
            }
        ]
    }).id(`compactcrafting:pneumaticcraft/pressure_chamber_wall`)
    //pressure chamber glass
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 0,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W'],
                    ['W', 'G', 'W'],
                    ['W', 'W', 'W']
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'pneumaticcraft:pressure_chamber_wall'
            },
            G: {
                type: 'compactcrafting:block',
                block: 'minecraft:glass'
            }
        },
        outputs: [
            {
                id: 'pneumaticcraft:pressure_chamber_glass',
                Count: 8
            }
        ]
    }).id(`compactcrafting:pneumaticcraft/pressure_chamber_glass`)
    //pressure chamber valve
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 0,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W'],
                    ['W', 'T', 'W'],
                    ['W', 'W', 'W']
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'pneumaticcraft:pressure_chamber_wall'
            },
            T: {
                type: 'compactcrafting:block',
                block: 'pneumaticcraft:pressure_tube'
            }
        },
        outputs: [
            {
                id: 'pneumaticcraft:pressure_chamber_valve',
                Count: 4
            }
        ]
    }).id(`compactcrafting:pneumaticcraft/pressure_chamber_valve`)
    //pressure chamber interface
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 0,
        layers: [
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W'],
                    ['W', 'H', 'W'],
                    ['W', 'W', 'W']
                ]
            }
        ],
        catalyst: {
            id: 'minecraft:redstone',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'pneumaticcraft:pressure_chamber_wall'
            },
            H: {
                type: 'compactcrafting:block',
                block: 'minecraft:hopper'
            }
        },
        outputs: [
            {
                id: 'pneumaticcraft:pressure_chamber_interface',
                Count: 2
            }
        ]
    }).id(`compactcrafting:pneumaticcraft/pressure_chamber_interface`)
})