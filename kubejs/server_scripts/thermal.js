onEvent('recipes', e => {
    //===== remove recipes =====//
    removeRecipeByID(e, [
        'thermal:machine/press/packing2x2/press_honeycomb_packing',
        'thermal:machine/press/unpacking/press_honeycomb_unpacking',
        'thermal:machine/centrifuge/centrifuge_oil_sand',
        'thermal:machine/centrifuge/centrifuge_oil_red_sand',
        'thermal:machine/pyrolyzer/pyrolyzer_coal',
        'thermal:machine/pyrolyzer/pyrolyzer_logs',
        'thermal:machine/chiller/chiller_honey_to_honey_block',
        'thermal:machine/bottler/bottler_honey_bottle',
        'thermal:machine/centrifuge/centrifuge_honeycomb',
        'thermal:machine/crucible/crucible_honey_block_to_honey',
        /thermal:parts.+_gear/,
        /thermal:fire_charge.+ingot.+/,
        'thermal:machine/centrifuge/centrifuge_syrup_bottle',
        /thermal:machine\/refinery\/.+/,
        /thermal:.+tree_extractor.+/,
    ])
    removeRecipeByOutput(e, [
        'thermal:rubber_block',
        'thermal:rubber'
    ])
    //===== misc recipes =====//
    function igneousExtruder(fluid, bottom, output) {
        e.custom({
            type: 'thermal:rock_gen',
            adjacent: fluid,
            below: bottom,
            result: {
                item: output
            }
        }).id(`kubejs:thermal/extruder/${output.replace(':', '/')}`)
    }
    igneousExtruder('minecraft:water', 'minecraft:red_sandstone', 'minecraft:red_sand')
    igneousExtruder('minecraft:water', 'minecraft:nether_bricks', 'minecraft:netherrack')
    igneousExtruder('minecraft:water', 'minecraft:soul_soil', 'minecraft:soul_sand')
    igneousExtruder('minecraft:water', 'minecraft:polished_andesite', 'minecraft:andesite')
    igneousExtruder('minecraft:water', 'minecraft:polished_diorite', 'minecraft:diorite')
    igneousExtruder('minecraft:water', 'minecraft:polished_granite', 'minecraft:granite')
    igneousExtruder('minecraft:water', 'minecraft:end_stone_bricks', 'minecraft:end_stone')
    e.shapeless('thermal:rubber_block', '9x thermal:rubber')
    e.shaped('thermal:rubber', ['FFF', 'FWF', 'FFF'], {
        F: '#minecraft:flowers',
        W: '#forge:water/items'
    })
    modifyShaped(e, 'thermal:machine_smelter', 1, [' A ', 'CMC', 'IRI'], {
        C: 'pneumaticcraft:compressed_iron_block',
        I: 'thermal:iron_gear',
        R: 'thermal:rf_coil',
        M: 'thermal:machine_frame',
        A: 'pneumaticcraft:advanced_pcb'
    })

    //===== remove dust crafting recipes =====//
    e.remove({input: 'thermal:earth_charge'})
    utils.listOf([
        'thermal:enderium_dust',
        'thermal:lumium_dust',
        'thermal:signalum_dust',
        'thermal:constantan_dust',
        'thermal:invar_dust',
        'thermal:electrum_dust',
        'thermal:bronze_dust'
    ]).forEach(dust => {
        e.remove({output: dust, type: 'minecraft:crafting_shaped'})
        e.remove({output: dust, type: 'minecraft:crafting_shapelesss'})
    })
    //===== gear =====//
    let gearAssembly = (input, output) => {
        e.custom({
            type: 'pneumaticcraft:assembly_laser',
            input: {
                type: 'pneumaticcraft:stacked_item',
                tag: input,
                count: 4
            },
            result: {
                item: output,
            },
            program: 'laser'
        }).id(`kubejs:${output.replace(':', '/')}`)
    }
    let ingotGear = [
        'iron',
        'gold',
        'netherite',
        'copper',
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium'
    ]
    let gemGear = [
        'lapis',
        'diamond',
        'emerald',
        'quartz',
    ]
    ingotGear.forEach(gear => gearAssembly(`forge:ingots/${gear}`, `thermal:${gear}_gear`))
    gemGear.forEach(gear => gearAssembly(`forge:gems/${gear}`, `thermal:${gear}_gear`))
    //===== progress =====//
    removeRecipeByOutput(e, [
        'thermal:rf_coil',
        'thermal:redstone_servo',
        'thermal:machine_frame'
    ])
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:dusts/redstone',
                count: 2
            },
            {
                tag: 'forge:gears/gold'
            }
        ],
        pressure: 3.5,
        results: [
            {
                item: 'thermal:rf_coil',
            }
        ]
    }).id(`kubejs:thermal/rf_coil`)
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:dusts/redstone',
                count: 2
            },
            {
                tag: 'forge:gears/iron'
            }
        ],
        pressure: 3.5,
        results: [
            {
                item: 'thermal:redstone_servo',
            }
        ]
    }).id(`kubejs:thermal/redstone_servo`)
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:glass',
                count: 3
            },
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:ingots/compressed_iron',
                count: 3
            },
            {
                tag: 'forge:gears/tin'
            }
        ],
        pressure: 3.5,
        results: [
            {
                item: 'thermal:machine_frame',
            }
        ]
    }).id(`kubejs:thermal/machine_frame`)
    modifyShaped(e, 'thermal:energy_cell', 1, ['FRF', 'RSR', 'FRF'], {
        F: 'thermal:energy_cell_frame',
        R: 'minecraft:redstone',
        S: 'thermal:redstone_servo',
    })
    modifyShaped(e, 'thermal:fluid_cell', 1, ['FRF', 'RSR', 'FRF'], {
        F: 'thermal:fluid_cell_frame',
        R: 'minecraft:redstone',
        S: 'thermal:redstone_servo',
    })
    //===== gears =====//
    e.recipes.thermal.press('thermal:lapis_gear', ['4x minecraft:lapis_lazuli', 'thermal:press_gear_die'])
    e.recipes.thermal.press('thermal:diamond_gear', ['4x minecraft:diamond', 'thermal:press_gear_die'])
    e.recipes.thermal.press('thermal:emerald_gear', ['4x minecraft:emerald', 'thermal:press_gear_die'])
    e.recipes.thermal.press('thermal:quartz_gear', ['4x minecraft:quartz', 'thermal:press_gear_die'])
})
