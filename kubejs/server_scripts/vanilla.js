onEvent('recipes', e => {
    //===== Vanilla QoL Recipe =====//
    e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/decompress/clay`)
    e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/decompress/quartz`)
    e.shapeless('9x minecraft:melon_slice', 'minecraft:melon').id(`kubejs:minecraft/decompress/melon`)
    e.shapeless('9x minecraft:honeycomb', 'minecraft:honeycomb_block').id('kubejs:minecraft/decompress/honeycomb')
    e.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`kubejs:minecraft/decompress/nether_wart`)
    e.shapeless('minecraft:blaze_rod', '2x minecraft:blaze_powder').id('kubejs:minecraft/compress/blaze_powder')
    e.shaped('16x minecraft:stick', ['L', 'L'], {
        'L': '#minecraft:logs'
    }).id(`kubejs:minecraft/sticks`)
    e.shaped('12x minecraft:grass', [' E ', 'E E'], {
        'E': 'mysticalagriculture:nature_essence'
    }).id('kubejs:minecraft/grass')
    e.shaped('3x minecraft:glass', ['GGG', 'G G', 'GGG',], {
        G: 'minecraft:glass_pane'
    })
    e.shaped('minecraft:diamond_horse_armor', ['D D', 'DDD', 'D D'], {
        D: '#forge:gems/diamond'
    })
    e.shaped('minecraft:golden_horse_armor', ['G G', 'GGG', 'G G'], {
        G: '#forge:ingots/gold'
    })
    e.shaped('minecraft:iron_horse_armor', ['I I', 'III', 'I I'], {
        I: '#forge:ingots/iron'
    })
    e.shaped('minecraft:totem_of_undying', ['RER', 'GVG', ' E '], {
        E: '#forge:storage_blocks/emerald',
        R: '#forge:storage_blocks/redstone',
        G: '#forge:storage_blocks/gold',
        V: 'minecraft:villager_spawn_egg'
    })
    e.shaped('4x minecraft:ladder', ['S S', 'SPS', 'S S'], {
        S: '#forge:rods/wooden',
        P: '#minecraft:planks'
    })
    e.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
        L: '#minecraft:logs',
        I: '#forge:ingots/iron'
    })
    e.shaped('minecraft:brown_mushroom_block', ['MM', 'MM'], {
        M: 'minecraft:brown_mushroom'
    })
    e.shaped('minecraft:red_mushroom_block', ['MM', 'MM'], {
        M: 'minecraft:red_mushroom'
    })
    e.shapeless('minecraft:mushroom_stem', ['#forge:dyes/white', ['minecraft:red_mushroom_block', 'minecraft:brown_mushroom_block']])
    e.shaped('minecraft:bell', ['SSS', 'G G', 'B B'], {
        S: '#forge:rods/wooden',
        G: 'minecraft:gold_ingot',
        B: 'minecraft:gold_block'
    })
    e.shaped('minecraft:crying_obsidian', [' O ', 'OGO', ' O '], {
        O: '#forge:obsidian',
        G: 'minecraft:ghast_tear'
    })
    colors.forEach(color => {
        e.shaped(`3x minecraft:${color}_stained_glass`, ['GGG', 'G G', 'GGG',], {
            G: `minecraft:${color}_stained_glass_pane`
        }).id(`kubejs:minecraft/${color}_pane_to_glass`)
    })
    //===== Add Tag Recipe =====//
    e.replaceInput('minecraft:glass_pane', '#forge:glass_panes')
    e.replaceInput('minecraft:stick', '#forge:rods/wooden')
    modifySmelt(e, 'minecraft:glass', '#forge:sand')
    modifyShaped(e, 'minecraft:white_wool', 1, ['SS', 'SS'], {
        S: '#forge:string'
    })
    modifyShaped(e, 'minecraft:dark_prismarine', 1, ['SSS', 'SBS', 'SSS'], {
        S: 'minecraft:prismarine_shard',
        B: '#forge:dyes/black'
    })
    modifyShaped(e, 'minecraft:sticky_piston', 1, ['B', 'P'], {
        B: '#forge:slimeballs',
        P: 'minecraft:piston'
    })
    modifyShaped(e, 'minecraft:daylight_detector', 1, ['GGG', 'QQQ', 'SSS'], {
        G: '#forge:glass',
        Q: '#forge:gems/quartz',
        S: '#minecraft:wooden_slabs'
    })
    colors.forEach(color => {
        e.replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`)
    })
    //===== recipe fix =====//
    removeRecipeByOutput(e, [
        'minecraft:trident'
    ])
    e.shaped('minecraft:trident', [' KU', ' HK', 'R  '], {
        U: 'upgrade_aquatic:thrasher_tooth', 
        K: 'outvoted:kraken_tooth', 
        H: 'minecraft:heart_of_the_sea', 
        R: 'outvoted:prismarine_rod'
    }).id(`kubejs:minecraft/trident`)
})
