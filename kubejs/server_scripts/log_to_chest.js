onEvent('recipes', e => {
    let logToChest = (result, ingredients) => {
        e.shaped(Item.of(result, 4), ['AAA', 'A A', 'AAA'], {
            A: ingredients
        }).id(`kubejs:log_to_chest/${result.replace(':','/')}`)
    }
    let vanillaLogToChest = (ingredient) => {
        logToChest(`charm:${ingredient}_chest`, [`minecraft:${ingredient}_log`, `minecraft:stripped_${ingredient}_log`])
    }
    let netherLogToChest = (ingredient) => {
        logToChest(`charm:${ingredient}_chest`, [`minecraft:${ingredient}_stem`, `minecraft:stripped_${ingredient}_stem`])
    }
    utils.listOf([
        'oak',
        'birch',
        'jungle',
        'spruce',
        'acacia',
        'dark_oak'
    ]).forEach(vanillaType => {
        vanillaLogToChest(vanillaType)
    })
    utils.listOf([
        'crimson',
        'warped'
    ]).forEach(netherType => {
        netherLogToChest(netherType)
    })
    e.remove({id: 'minecraft:chest'})
})