onEvent('recipes', e => {
    modifyShapeless(e, 'waystones:warp_dust', 1, ['#forge:dusts/emerald', 'minecraft:ender_pearl', '#forge:dusts/diamond'])
    modifyShaped(e, 'waystones:warp_stone', 1, ['WPW', 'PGP', 'WPW'], {
        W: 'waystones:warp_dust',
        G: '#forge:gems/emerald',
        P: 'minecraft:ender_pearl'
    })
    modifyShaped(e, 'waystones:sandy_waystone', 1, [' S ', 'SWS', 'OOO'], {
        S: 'minecraft:sandstone',
        O: 'minecraft:obsidian',
        W: 'waystones:warp_stone',
    })
    
    modifyShaped(e, 'waystones:bound_scroll', 3, ['WWW', 'GNG', 'PPP'], {
        G: 'alltheores:gold_dust',
        W: 'waystones:warp_dust',
        N: 'minecraft:ender_pearl',
        P: 'minecraft:paper'
    })
    modifyShaped(e, 'waystones:return_scroll', 3, [' N ', 'GWG', 'PPP'], {
        G: 'alltheores:gold_dust',
        W: 'waystones:warp_dust',
        N: 'minecraft:ender_pearl',
        P: 'minecraft:paper'
    })
    e.remove({output: 'waystones:warp_scroll'})
    e.shaped('3x waystones:warp_scroll', [' E ', 'BSR', 'PPP'], {
        P: 'minecraft:paper',
        R: 'waystones:return_scroll',
        B: 'waystones:bound_scroll',
        S: 'waystones:warp_stone',
        E: 'minecraft:ender_eye'
    }).id(`kubejs:waystones/warp_scroll`)
    e.shaped('3x waystones:warp_scroll', [' E ', 'RSB', 'PPP'], {
        P: 'minecraft:paper',
        R: 'waystones:return_scroll',
        B: 'waystones:bound_scroll',
        S: 'waystones:warp_stone',
        E: 'minecraft:ender_eye'
    }).id(`kubejs:waystones/warp_scroll_inverted`)
})