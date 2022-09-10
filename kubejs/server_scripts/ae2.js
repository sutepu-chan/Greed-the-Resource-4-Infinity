onEvent('recipes', e => {
    removeRecipeByID(e, [
        /mekanism:compat\/appliedenergistics2\/.+crystal_purification/,
        /mekanism:compat\/appliedenergistics2\/.+purified_crystal/
    ])
    removeRecipeByOutput(e, [
        'ae2wtlib:infinity_booster_card'
    ])
    modifyShaped(e, 'appliedenergistics2:quartz_glass', 4, ['QGQ', 'GQG', 'QGQ'], {
        G: '#forge:glass/colorless',
        Q: '#appliedenergistics2:dusts/quartz'
    })
    modifyShaped(e, 'appliedenergistics2:quartz_fiber', 3, ['GGG', 'QQQ', 'GGG'], {
        G: '#forge:glass/colorless',
        Q: '#appliedenergistics2:dusts/quartz'
    })
    modifyShaped(e, 'appliedenergistics2:inscriber', 1, ['FPA', 'F  ', 'FPA'], {
        P: 'pneumaticcraft:printed_circuit_board',
        A: 'eidolon:arcane_gold_ingot',
        F: 'appliedenergistics2:fluix_crystal'
    })
    modifyShaped(e, 'appliedenergistics2:grindstone', 1, ['SGS', 'QSQ', 'SQS'], {
        Q: 'appliedenergistics2:certus_quartz_crystal',
        S: '#minecraft:stone_bricks',
        G: '#forge:gears/invar'
    })
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AAAABBB',
            'ACCDEEB',
            'AFFDEEB',
            'AFFDBBB',
            'AGGD   ',
            'AGGD   ',
            'AAAA   '
        ],
        key: {
            A: {
                item: 'appliedenergistics2:advanced_card'
            },
            B: {
                item: 'mekanism:alloy_atomic'
            },
            C: {
                item: 'appliedenergistics2:fluix_pearl'
            },
            D: {
                item: 'lazierae2:parallel_processor'
            },
            E: {
                item: 'extendedcrafting:ultimate_singularity'
            },
            F: {
                item: 'lazierae2:fluix_steel_ingot'
            },
            G: {
                item: 'appliedenergistics2:wireless_receiver'
            }
        },
        result: {
            item: 'ae2wtlib:infinity_booster_card'
        }
    }).id(`kubejs:ae2wtlib/infinity_booster_card`)
})