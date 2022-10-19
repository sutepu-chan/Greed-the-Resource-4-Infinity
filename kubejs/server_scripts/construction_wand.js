onEvent('recipes', e => {
    modifyShaped(e, 'constructionwand:stone_wand', 1, ['  M', ' S ', 'S  '], {
        S: '#forge:rods/wooden',
        M: 'allthecompressed:cobblestone_block_1x'
    })
    modifyShaped(e, 'constructionwand:iron_wand', 1, ['  M', ' S ', 'S  '], {
        S: '#forge:rods/wooden',
        M: 'minecraft:iron_block'
    })
    modifyShaped(e, 'constructionwand:diamond_wand', 1, ['  M', ' S ', 'S  '], {
        S: '#forge:rods/wooden',
        M: 'minecraft:diamond_block'
    })
    modifyShaped(e, 'constructionwand:infinity_wand', 1, ['  M', ' S ', 'S  '], {
        S: '#forge:rods/wooden',
        M: 'allthecompressed:nether_star_block'
    })
})