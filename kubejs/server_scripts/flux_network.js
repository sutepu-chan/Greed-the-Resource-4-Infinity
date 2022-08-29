onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'fluxnetworks:flux_plug',
        'fluxnetworks:flux_point'
    ])
    e.smelting('fluxnetworks:flux_dust', ['#forge:dusts/redstone']).id(`kubejs:smelting/flux_dust`)
    let dissolutionCrafting = (ingredientList, fluid, fluidAmount, time, result) => {
        e.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredientList.map(i => Item.of(i).toJson()),
            inputFluid: `{FluidName:\"${fluid}\",Amount:${fluidAmount}}`,
            processingTime: time, //default 300
            output: Item.of(result).toJson(),
        }).id(`kubejs:dissolution/${fluid.substring(fluid.indexOf(':') + 1)}/${result.substring(result.indexOf(':') + 1)}`)
    }
    dissolutionCrafting([
        'fluxnetworks:flux_block',
        'fluxnetworks:flux_block',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_core',
        'pneumaticcraft:plastic',
        'pneumaticcraft:plastic'
    ], 'industrialforegoing:latex', 1000, 300, 'fluxnetworks:flux_plug')
    dissolutionCrafting([
        'minecraft:redstone_block',
        'minecraft:redstone_block',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_core',
        'fluxnetworks:flux_core',
        'pneumaticcraft:plastic',
        'pneumaticcraft:plastic'
    ], 'industrialforegoing:latex', 1000, 300, 'fluxnetworks:flux_point')
    modifyShaped(e, 'fluxnetworks:flux_configurator', 1, [' PC', ' EQ', 'B  '], {
        B: 'fluxnetworks:flux_block',
        P: 'fluxnetworks:flux_plug',
        Q: 'fluxnetworks:flux_point',
        C: 'fluxnetworks:flux_controller',
        E: 'minecraft:ender_eye'
    })
    modifyShaped(e, 'fluxnetworks:flux_core', 1, ['GBG', 'BFB', 'GBG'], {
        B: '#forge:obsidian',
        G: '#forge:gears/iron',
        F: 'fluxnetworks:flux_dust'
    })
    modifyShaped(e, 'fluxnetworks:flux_block', 1, ['FCF', 'CGC', 'FCF'], {
        C: 'fluxnetworks:flux_core',
        G: '#forge:gears/gold',
        F: 'fluxnetworks:flux_dust'
    })
})