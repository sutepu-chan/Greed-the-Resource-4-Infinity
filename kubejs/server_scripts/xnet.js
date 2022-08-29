onEvent('recipes', e => {
    let cnetCableColor = ['blue', 'red', 'yellow', 'green']
    removeRecipeByOutput(e, [
        'xnet:controller',
        'xnet:connector_red',
        'xnet:connector_green',
        'xnet:connector_blue',
        'xnet:connector_yellow',
        'xnet:advanced_connector_red',
        'xnet:advanced_connector_green',
        'xnet:advanced_connector_blue',
        'xnet:advanced_connector_yellow',
        'xnet:netcable_blue',
        'xnet:netcable_red',
        'xnet:netcable_green',
        'xnet:netcable_yellow',
        'xnet:router',
        'xnet:wireless_router'
    ])
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:ingots/compressed_iron',
                count: 7
            },
            {
                item: 'rangedwirelessredstone:redstone_receiver'
            },
            {
                tag: 'forge:ingots/gold'
            }
        ],
        pressure: 1.5,
        results: [
            {
                item: 'xnet:controller',
            }
        ]
    }).id(`kubejs:xnet/controller`)
    e.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                tag: 'forge:ingots/compressed_iron',
                count: 5
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'pneumaticcraft:compressed_iron_gear',
                count: 2
            },
            {
                type: 'pneumaticcraft:stacked_item',
                item: 'minecraft:redstone',
                count: 3
            },
            { tag: 'forge:ingots/silver' }
        ],
        pressure: 2.0,
        results: [
            {
                item: 'xnet:router',
            }
        ]
    }).id(`kubejs:xnet/router`)
    e.recipes.mekanism.combining('xnet:wireless_router', 'appliedenergistics2:wireless_access_point', 'xnet:router').id(`kubejs:xnet/wireless_router`)
    modifyShaped(e, 'xnet:facade', 16, ['PPP', 'PCP', 'PPP'], {
        P: 'minecraft:paper',
        C: '#forge:ingots/compressed_iron'
    })
    e.shaped('4x xnet:connector_blue', ['LIL', 'RCR', 'LIL'], {
        C: '#forge:chests/wooden',
        R: 'minecraft:redstone',
        L: 'minecraft:lapis_lazuli',
        I: '#forge:ingots/iron'
    }).id(`kubejs:xnet/connector_blue`)
    e.shaped('16x xnet:netcable_blue', [' L ', 'IRI', ' L '], {
        L: 'minecraft:lapis_lazuli',
        I: '#forge:ingots/iron',
        R: 'minecraft:redstone'
    }).id(`kubejs:xnet/netcable_blue`)
    modifyShaped(e, 'xnet:connector_routing', 4, ['IRI', 'TPT', 'ITI'], {
        I: '#forge:ingots/iron',
        T: '#forge:ingots/tin',
        P: '#forge:ingots/platinum',
        R: 'minecraft:redstone'
    })
    modifyShaped(e, 'xnet:advanced_connector_routing', 4, ['CEC', 'PDP', 'CRC'], {
        C: 'xnet:connector_routing',
        P: '#forge:ingots/platinum',
        D: 'minecraft:diamond',
        E: 'minecraft:ender_pearl',
        R: 'minecraft:redstone'
    })
    modifyShaped(e, 'xnet:netcable_routing', 16, [' L ', 'TRT', ' L '], {
        L: 'minecraft:lapis_lazuli',
        T: '#forge:ingots/tin',
        R: 'minecraft:redstone'
    })
    cnetCableColor.forEach(a => {
        //advanced connectors recipes
        e.shaped(`4x xnet:advanced_connector_${a}`, ['CRC', 'GDG', 'CRC'], {
            C: `xnet:connector_${a}`,
            R: 'minecraft:redstone',
            D: 'minecraft:diamond',
            G: 'minecraft:gold_ingot'
        }).id(`kubejs:xnet/advanced_connector_${a}`)
        //array initialise
        let cable = []
        let advancedCable = []
        let networkCable = []
        cnetCableColor.forEach(b => {
            if (a !== b) {
                cable.push(`xnet:connector_${b}`)
                advancedCable.push(`xnet:advanced_connector_${b}`)
                networkCable.push(`xnet:netcable_${b}`)
            }
        })
        e.shaped(`8x xnet:connector_${a}`, ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${a}`,
            C: cable
        }).id(`kubejs:xnet/connector_${a}_from_dye`)
        e.shaped(`8x xnet:advanced_connector_${a}`, ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${a}`,
            C: advancedCable
        }).id(`kubejs:xnet/advanced_connector_${a}_from_dye`)
        e.shaped(`8x xnet:netcable_${a}`, ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${a}`,
            C: networkCable
        }).id(`kubejs:xnet/netcable_${a}_from_dye`)
    });
})