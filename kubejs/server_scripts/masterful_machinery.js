onEvent('recipes', e => {
    //===== ingots and gems =====//
    //functions
    let oreResourceGenerate = (resource, outputIngot, outputBlock) => {
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_0`,
            controllerId: 't0',
            ticks: 400,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 8000
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputIngot,
                        count: 1
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t0`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_1`,
            controllerId: 't1',
            ticks: 400,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 15000
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputIngot,
                        count: 2
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t1`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_2`,
            controllerId: 't2',
            ticks: 200,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 52400
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputIngot,
                        count: 4
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t2`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_3`,
            controllerId: 't3',
            ticks: 200,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 104200
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 1
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t3`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_4`,
            controllerId: 't4',
            ticks: 160,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 409600
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 4
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t4`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_5`,
            controllerId: 't5',
            ticks: 100,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 819200
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 8
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t5`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_6`,
            controllerId: 't6',
            ticks: 40,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 10560000
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 8
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t6`)
    }
    let blockResourceGenerate = (resource, outputBlock) => {
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_0`,
            controllerId: 't0',
            ticks: 400,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 8000
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 2
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t0`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_1`,
            controllerId: 't1',
            ticks: 400,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 15000
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 4
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t1`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_2`,
            controllerId: 't2',
            ticks: 300,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 52400
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 4
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t2`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_3`,
            controllerId: 't3',
            ticks: 200,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 104200
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 4
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t3`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_4`,
            controllerId: 't4',
            ticks: 200,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 409600
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 8
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t4`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_5`,
            controllerId: 't5',
            ticks: 100,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 819200
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 16
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t5`)
        e.custom({
            type: 'masterfulmachinery:machine_process',
            structureId: `${resource}_6`,
            controllerId: 't6',
            ticks: 20,
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    data: {
                        amount: 10560000
                    }
                }
            ],
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: {
                        item: outputBlock,
                        count: 64
                    }
                }
            ]
        }).id(`kubejs:masterfulmachinery/${resource}_t6`)
    }
    let tier0Structure = (resource, baseBlock) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_0`,
            controllerId: 't0',
            name: `${resource} Generator Tier 0`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                I: { block: 'masterfulmachinery:t0_t0_item_port_items_output' },
                O: { block: 'masterfulmachinery:t0_t0_energy_port_energy_input' }
            }
        })
    }
    let tier1Structure = (resource, baseBlock, layer1) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_1`,
            controllerId: 't1',
            name: `${resource} Generator Tier 1`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ],
                [
                    'QQQ',
                    'QQQ',
                    'QQQ'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                Q: { block: layer1 },
                I: { block: 'masterfulmachinery:t1_t1_item_port_items_output' },
                O: { block: 'masterfulmachinery:t1_t1_energy_port_energy_input' }
            }
        })
    }
    let tier2Structure = (resource, baseBlock, layer1, layer2) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_2`,
            controllerId: 't2',
            name: `${resource} Generator Tier 2`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ],
                [
                    'QQQ',
                    'QQQ',
                    'QQQ'
                ],
                [
                    'WWW',
                    'WWW',
                    'WWW'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                Q: { block: layer1 },
                W: { block: layer2 },
                I: { block: 'masterfulmachinery:t2_t2_item_port_items_output' },
                O: { block: 'masterfulmachinery:t2_t2_energy_port_energy_input' }
            }
        })
    }
    let tier3Structure = (resource, baseBlock, layer1, layer2, layer3) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_3`,
            controllerId: 't3',
            name: `${resource} Generator Tier 3`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ],
                [
                    'QQQ',
                    'QQQ',
                    'QQQ'
                ],
                [
                    'WWW',
                    'WWW',
                    'WWW'
                ],
                [
                    'EEE',
                    'EEE',
                    'EEE'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                Q: { block: layer1 },
                W: { block: layer2 },
                E: { block: layer3 },
                I: { block: 'masterfulmachinery:t3_t3_item_port_items_output' },
                O: { block: 'masterfulmachinery:t3_t3_energy_port_energy_input' }
            }
        })
    }
    let tier4Structure = (resource, baseBlock, layer1, layer2, layer3, layer4) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_4`,
            controllerId: 't4',
            name: `${resource} Generator Tier 4`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ],
                [
                    'QQQ',
                    'QQQ',
                    'QQQ'
                ],
                [
                    'WWW',
                    'WWW',
                    'WWW'
                ],
                [
                    'EEE',
                    'EEE',
                    'EEE'
                ],
                [
                    'RRR',
                    'RRR',
                    'RRR'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                Q: { block: layer1 },
                W: { block: layer2 },
                E: { block: layer3 },
                R: { block: layer4 },
                I: { block: 'masterfulmachinery:t4_t4_item_port_items_output' },
                O: { block: 'masterfulmachinery:t4_t4_energy_port_energy_input' }
            }
        })
    }
    let tier5Structure = (resource, baseBlock, layer1, layer2, layer3, layer4, layer5) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_5`,
            controllerId: 't5',
            name: `${resource} Generator Tier 5`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ],
                [
                    'QQQ',
                    'QQQ',
                    'QQQ'
                ],
                [
                    'WWW',
                    'WWW',
                    'WWW'
                ],
                [
                    'EEE',
                    'EEE',
                    'EEE'
                ],
                [
                    'RRR',
                    'RRR',
                    'RRR'
                ],
                [
                    'TTT',
                    'TTT',
                    'TTT'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                Q: { block: layer1 },
                W: { block: layer2 },
                E: { block: layer3 },
                R: { block: layer4 },
                T: { block: layer5 },
                I: { block: 'masterfulmachinery:t5_t5_item_port_items_output' },
                O: { block: 'masterfulmachinery:t5_t5_energy_port_energy_input' }
            }
        })
    }
    let tier6Structure = (resource, baseBlock, layer1, layer2, layer3, layer4, layer5, layer6) => {
        e.custom({
            type: 'masterfulmachinery:machine_structure',
            id: `${resource}_6`,
            controllerId: 't6',
            name: `${resource} Generator Tier 6`,
            layout: [
                [
                    'BBB',
                    'BBB',
                    'ICO'
                ],
                [
                    'QQQ',
                    'QQQ',
                    'QQQ'
                ],
                [
                    'WWW',
                    'WWW',
                    'WWW'
                ],
                [
                    'EEE',
                    'EEE',
                    'EEE'
                ],
                [
                    'RRR',
                    'RRR',
                    'RRR'
                ],
                [
                    'TTT',
                    'TTT',
                    'TTT'
                ],
                [
                    'YYY',
                    'YYY',
                    'YYY'
                ]
            ],
            legend: {
                B: { block: baseBlock },
                Q: { block: layer1 },
                W: { block: layer2 },
                E: { block: layer3 },
                R: { block: layer4 },
                T: { block: layer5 },
                Y: { block: layer6 },
                I: { block: 'masterfulmachinery:t6_t6_item_port_items_output' },
                O: { block: 'masterfulmachinery:t6_t6_energy_port_energy_input' }
            }
        })
    }
    let createStructure = (resource, baseBlock, layer1, layer2, layer3, layer4, layer5, layer6) => {
        tier0Structure(resource, baseBlock)
        tier1Structure(resource, baseBlock, layer1)
        tier2Structure(resource, baseBlock, layer1, layer2)
        tier3Structure(resource, baseBlock, layer1, layer2, layer3)
        tier4Structure(resource, baseBlock, layer1, layer2, layer3, layer4)
        tier5Structure(resource, baseBlock, layer1, layer2, layer3, layer4, layer5)
        tier6Structure(resource, baseBlock, layer1, layer2, layer3, layer4, layer5, layer6)
    }
    let oreResource = (resource, ioResources) => {
        createStructure(resource, ioResources[1], ioResources[2], ioResources[3], ioResources[4], ioResources[5], ioResources[6], ioResources[7])
        oreResourceGenerate(resource, ioResources[0], ioResources[1])
    }
    let blockResource = (resource, ioResources) => {
        createStructure(resource, ioResources[0], ioResources[1], ioResources[2], ioResources[3], ioResources[4], ioResources[5], ioResources[6])
        blockResourceGenerate(resource, ioResources[0])
    }
    //vanillaIngots
    utils.listOf([
        'iron',
        'gold',
        'netherite'
    ]).forEach(resource => {
        oreResource(resource, [
            `minecraft:${resource}_ingot`,
            `minecraft:${resource}_block`,
            `allthecompressed:${resource}_block_1x`,
            `allthecompressed:${resource}_block_2x`,
            `allthecompressed:${resource}_block_3x`,
            `allthecompressed:${resource}_block_4x`,
            `allthecompressed:${resource}_block_5x`,
            `allthecompressed:${resource}_block_6x`
        ])
    })
    //vanilla gems
    utils.listOf([
        'coal',
        'redstone',
        'diamond',
        'emerald',
        'quartz'
    ]).forEach(resource => {
        oreResource(resource, [
            `minecraft:${resource}`,
            `minecraft:${resource}_block`,
            `allthecompressed:${resource}_block_1x`,
            `allthecompressed:${resource}_block_2x`,
            `allthecompressed:${resource}_block_3x`,
            `allthecompressed:${resource}_block_4x`,
            `allthecompressed:${resource}_block_5x`,
            `allthecompressed:${resource}_block_6x`
        ])
    })
    //other items in vanilla
    oreResource('lapis', ['minecraft:lapis_lazuli', 'minecraft:lapis_block', 'allthecompressed:lapis_block_1x', 'allthecompressed:lapis_block_2x', 'allthecompressed:lapis_block_3x', 'allthecompressed:lapis_block_4x', 'allthecompressed:lapis_block_5x', 'allthecompressed:lapis_block_6x'])
    oreResource('netherstar', ['minecraft:nether_star', 'allthecompressed:nether_star_block', 'allthecompressed:nether_star_block_1x', 'allthecompressed:nether_star_block_2x', 'allthecompressed:nether_star_block_3x', 'allthecompressed:nether_star_block_4x', 'allthecompressed:nether_star_block_5x', 'allthecompressed:nether_star_block_6x'])
    oreResource('clay', ['minecraft:clay_ball', 'minecraft:clay', 'allthecompressed:clay_block_1x', 'allthecompressed:clay_block_2x', 'allthecompressed:clay_block_3x', 'allthecompressed:clay_block_4x', 'allthecompressed:clay_block_5x', 'allthecompressed:clay_block_6x'])
    oreResource('glowstone', ['minecraft:glowstone_dust', 'minecraft:glowstone', 'allthecompressed:glowstone_block_1x', 'allthecompressed:glowstone_block_2x', 'allthecompressed:glowstone_block_3x', 'allthecompressed:glowstone_block_4x', 'allthecompressed:glowstone_block_5x', 'allthecompressed:glowstone_block_6x'])
    //alltheores
    utils.listOf([
        'aluminum',
        'copper',
        'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc'
    ]).forEach(resource => {
        oreResource(resource, [
            `alltheores:${resource}_ingot`,
            `alltheores:${resource}_block`,
            `allthecompressed:${resource}_block_1x`,
            `allthecompressed:${resource}_block_2x`,
            `allthecompressed:${resource}_block_3x`,
            `allthecompressed:${resource}_block_4x`,
            `allthecompressed:${resource}_block_5x`,
            `allthecompressed:${resource}_block_6x`
        ])
    })
    //allthemodium
    utils.listOf([
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]).forEach(resource => {
        oreResource(resource, [
            `allthemodium:${resource}_ingot`,
            `allthemodium:${resource}_block`,
            `allthecompressed:${resource}_block_1x`,
            `allthecompressed:${resource}_block_2x`,
            `allthecompressed:${resource}_block_3x`,
            `allthecompressed:${resource}_block_4x`,
            `allthecompressed:${resource}_block_5x`,
            `allthecompressed:${resource}_block_6x`
        ])
    })
    //thermal
    utils.listOf([
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium'
    ]).forEach(resource => {
        oreResource(resource, [
            `thermal:${resource}_ingot`,
            `thermal:${resource}_block`,
            `allthecompressed:${resource}_block_1x`,
            `allthecompressed:${resource}_block_2x`,
            `allthecompressed:${resource}_block_3x`,
            `allthecompressed:${resource}_block_4x`,
            `allthecompressed:${resource}_block_5x`,
            `allthecompressed:${resource}_block_6x`
        ])
    })
    //powah
    oreResource('uraninite', ['powah:uraninite', 'powah:uraninite_block', 'allthecompressed:uraninite_block_1x', 'allthecompressed:uraninite_block_2x', 'allthecompressed:uraninite_block_3x', 'allthecompressed:uraninite_block_4x', 'allthecompressed:uraninite_block_5x', 'allthecompressed:uraninite_block_6x'])
    //mekanism
    oreResource('steel', ['mekanism:ingot_steel', 'mekanism:block_steel', 'allthecompressed:steel_block_1x', 'allthecompressed:steel_block_2x', 'allthecompressed:steel_block_3x', 'allthecompressed:steel_block_4x', 'allthecompressed:steel_block_5x', 'allthecompressed:steel_block_6x'])

    //===== blocks =====//
    utils.listOf([
        'cobblestone',
        'dirt',
        'end_stone',
        'gravel',
        'netherrack',
        'obsidian',
        'sand',
        'pumpkin',
        'melon',
        'soul_sand',
        'glass'
    ]).forEach(resource => {
        blockResource(resource, [
            `minecraft:${resource}`,
            `allthecompressed:${resource}_block_1x`,
            `allthecompressed:${resource}_block_2x`,
            `allthecompressed:${resource}_block_3x`,
            `allthecompressed:${resource}_block_4x`,
            `allthecompressed:${resource}_block_5x`,
            `allthecompressed:${resource}_block_6x`
        ])
    })

    //===== special generation =====//
    //chaos fragment
    e.custom({
        type: 'masterfulmachinery:machine_structure',
        id: `chaos_5`,
        controllerId: 't5',
        name: `Chaos Generator Tier 5`,
        layout: [
            [
                'BBB',
                'BBB',
                'ICO'
            ]
        ],
        legend: {
            B: { block: 'draconicevolution:chaotic_crafting_injector' },
            I: { block: 'masterfulmachinery:t5_t5_item_port_items_output' },
            O: { block: 'masterfulmachinery:t5_t5_energy_port_energy_input' }
        }
    })
    e.custom({
        type: 'masterfulmachinery:machine_structure',
        id: `chaos_6`,
        controllerId: 't6',
        name: `Chaos Generator Tier 6`,
        layout: [
            [
                'BBB',
                'BBB',
                'ICO'
            ],
            [
                'QQQ',
                'QQQ',
                'QQQ'
            ]
        ],
        legend: {
            B: { block: 'draconicevolution:chaotic_crafting_injector' },
            Q: { block: 'draconicevolution:reactor_core' },
            I: { block: 'masterfulmachinery:t6_t6_item_port_items_output' },
            O: { block: 'masterfulmachinery:t6_t6_energy_port_energy_input' }
        }
    })
    e.custom({
        type: 'masterfulmachinery:machine_process',
        structureId: `chaos_5`,
        controllerId: 't5',
        ticks: 2000,
        inputs: [
            {
                type: 'masterfulmachinery:energy',
                data: {
                    amount: 5000000
                }
            }
        ],
        outputs: [
            {
                type: 'masterfulmachinery:items',
                data: {
                    item: 'draconicevolution:small_chaos_frag',
                    count: 2
                }
            }
        ]
    }).id(`kubejs:masterfulmachinery/chaos_t5`)
    e.custom({
        type: 'masterfulmachinery:machine_process',
        structureId: `chaos_6`,
        controllerId: 't6',
        ticks: 400,
        inputs: [
            {
                type: 'masterfulmachinery:energy',
                data: {
                    amount: 20000000
                }
            }
        ],
        outputs: [
            {
                type: 'masterfulmachinery:items',
                data: {
                    item: 'draconicevolution:medium_chaos_frag',
                    count: 2
                }
            }
        ]
    }).id(`kubejs:masterfulmachinery/chaos_t6`)
})