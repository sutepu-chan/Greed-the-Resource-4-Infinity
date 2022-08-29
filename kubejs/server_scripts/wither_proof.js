onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'witherproofed:reinforced_alloy'
    ])
    e.recipes.thermal.smelter('8x witherproofed:reinforced_alloy', ['6x #forge:ingots/iron', 'minecraft:nether_star', 'minecraft:netherite_scrap']).id(`kubejs:witherproofed/reinforced_alloy`)
    modifyShaped(e, 'witherproofed:heavy_reinforced_obsidian', 1, ['OIO', 'IAI', 'OIO'], {
        O: 'allthecompressed:obsidian_block_1x',
        I: 'minecraft:iron_bars',
        A: 'witherproofed:reinforced_alloy'
    })
    e.shapeless('witherproofed:heavy_reinforced_ghostly_glass', ['witherproofed:heavy_reinforced_glass', 'glassential:glass_ethereal'])
})