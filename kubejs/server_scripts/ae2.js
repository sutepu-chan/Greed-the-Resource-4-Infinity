onEvent('recipes', e => {
    removeRecipeByID(e, [
        /mekanism:compat\/appliedenergistics2\/.+crystal_purification/,
        /mekanism:compat\/appliedenergistics2\/.+purified_crystal/,
        /ae2extras:.+/
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
    e.shapeless('ae2extras:256k_crafting_storage', ['aeadditions:item_storage_component_256', 'appliedenergistics2:crafting_unit']).id(`kubejs:ae2extras/256k_crafting_storage`)
    e.shapeless('ae2extras:1m_crafting_storage', ['aeadditions:item_storage_component_1024', 'appliedenergistics2:crafting_unit']).id(`kubejs:ae2extras/1m_crafting_storage`)
    e.shapeless('ae2extras:4m_crafting_storage', ['aeadditions:item_storage_component_4096', 'appliedenergistics2:crafting_unit']).id(`kubejs:ae2extras/4m_crafting_storage`)
    e.shapeless('ae2extras:16m_crafting_storage', ['aeadditions:item_storage_component_16384', 'appliedenergistics2:crafting_unit']).id(`kubejs:ae2extras/16m_crafting_storage`)
    e.shaped('inventorystatistics:item_speed_monitor', ['SFS', 'CTC', 'PAP'], {
        S: 'lazierae2:speculative_processor',
        C: 'appliedenergistics2:16k_cell_component',
        P: 'lazierae2:parallel_processor',
        A: 'appliedenergistics2:annihilation_core',
        F: 'appliedenergistics2:formation_core',
        T: 'appliedenergistics2:terminal'
    }).id(`kubejs:inventorystatistics/item_speed_monitor`)
})