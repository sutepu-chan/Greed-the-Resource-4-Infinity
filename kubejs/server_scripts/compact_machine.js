onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'compactmachines:wall'
    ])
    modifyShaped(e, 'compactmachines:personal_shrinking_device', 1, ['ADA', 'BCB', 'AAA'], {
        A: 'minecraft:iron_ingot', 
        B: 'minecraft:ender_pearl',
        C: 'extendedcrafting:redstone_ingot',
        D: 'minecraft:lapis_lazuli'
    })
    //wall
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 1,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'R'
            },
            {
                type: 'compactcrafting:filled',
                component: 'I'
            },
        ],
        catalyst: {
            id: 'eidolon:pewter_ingot',
            Count: 1
        },
        components: {
            I: {
                type: 'compactcrafting:block',
                block: 'minecraft:iron_block'
            },
            R: {
                type: 'compactcrafting:block',
                block: 'minecraft:redstone_wire'
            }
        },
        outputs: [
            {
                id: 'compactmachines:wall',
                Count: 16
            }
        ]
    }).id(`compactcrafting:compactmachines/wall`)
    //tiny
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 3,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'W'
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W'],
                    ['W', 'C', 'W'],
                    ['W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:filled',
                component: 'W'
            }
        ],
        catalyst: {
            id: 'pneumaticcraft:ingot_iron_compressed',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'compactmachines:wall'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'allthecompressed:dirt_block_1x'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_tiny',
                Count: 1
            }
        ]
    }).id(`compactcrafting:compactmachines/machine_tiny`)
    //small
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 5,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'W'
            },
            {
                type: 'compactcrafting:hollow',
                wall: 'W'
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', '-', 'C', '-', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:hollow',
                wall: 'W'
            },
            {
                type: 'compactcrafting:filled',
                component: 'W'
            }
        ],
        catalyst: {
            id: 'pneumaticcraft:ingot_iron_compressed',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'compactmachines:wall'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'allthecompressed:iron_block_1x'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_small',
                Count: 1
            }
        ]
    }).id(`compactcrafting:compactmachines/machine_small`)
    //normal
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 5,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'W'
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', '-', 'C', '-', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', '-', 'C', '-', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', '-', 'C', '-', 'W'],
                    ['W', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:filled',
                component: 'W'
            }
        ],
        catalyst: {
            id: 'pneumaticcraft:ingot_iron_compressed',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'compactmachines:wall'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'allthecompressed:gold_block_1x'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_normal',
                Count: 1
            }
        ]
    }).id(`compactcrafting:compactmachines/machine_normal`)
    //large
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 7,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'W'
            },
            {
                type: 'compactcrafting:hollow',
                wall: 'W'
            },
            {
                type: 'compactcrafting:hollow',
                wall: 'W'
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'C', 'C', 'C', 'C', 'C', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:hollow',
                wall: 'W'
            },
            {
                type: 'compactcrafting:hollow',
                wall: 'W'
            },
            {
                type: 'compactcrafting:filled',
                component: 'W'
            }
        ],
        catalyst: {
            id: 'pneumaticcraft:compressed_iron_block',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'compactmachines:wall'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'allthecompressed:obsidian_block_1x'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_large',
                Count: 1
            }
        ]
    }).id(`compactcrafting:compactmachines/machine_large`)
    //giant
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 7,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'W'
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'C', 'C', 'C', 'C', 'C', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:filled',
                component: 'W'
            }
        ],
        catalyst: {
            id: 'pneumaticcraft:compressed_iron_block',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'compactmachines:wall'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'allthecompressed:diamond_block_1x'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_giant',
                Count: 1
            }
        ]
    }).id(`compactcrafting:compactmachines/machine_giant`)
    //maximum
    e.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 9,
        layers: [
            {
                type: 'compactcrafting:filled',
                component: 'W'
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'C', 'C', 'C', 'C', 'C', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:mixed',
                pattern: [
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', 'C', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]
            },
            {
                type: 'compactcrafting:filled',
                component: 'W'
            }
        ],
        catalyst: {
            id: 'pneumaticcraft:compressed_iron_block',
            Count: 1
        },
        components: {
            W: {
                type: 'compactcrafting:block',
                block: 'compactmachines:wall'
            },
            C: {
                type: 'compactcrafting:block',
                block: 'allthecompressed:emerald_block_1x'
            }
        },
        outputs: [
            {
                id: 'compactmachines:machine_maximum',
                Count: 1
            }
        ]
    }).id(`compactcrafting:compactmachines/machine_maximum`)
})
