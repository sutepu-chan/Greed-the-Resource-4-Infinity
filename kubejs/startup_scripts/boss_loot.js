onEvent('entity.loot_tables', e => {
    e.addEntity('minecraft:wither', table => {
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem('eidolon:soul_shard', 1, [0,1])
        })
        table.addPool(pool => {
            pool.rolls = 3
            pool.addItem('mysticalagriculture:tertium_essence', 1, [0,2])
        })
    })
    e.addEntity('minecraft:ender_dragon', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('8x tconstruct:dragon_scale')
        })
        table.addPool(pool => {
            pool.rolls = 5
            pool.addItem('mysticalagriculture:tertium_essence', 1, [0,2])
        })
    })
    e.addEntity('cataclysm:ender_golem', table => {
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem('mysticalagriculture:tertium_essence', 1, [0,1])
        })
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem('allthecompressed:ender_pearl_block_3x', 1, [0,1])
        })
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('64x mekanism:alloy_atomic')
        })
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('64x mekanism:ingot_refined_obsidian')
        })
    })
    e.addEntity('cataclysm:ender_guardian', table => {
        table.addPool(pool => {
            pool.rolls = 5
            pool.addItem('mysticalagriculture:supremium_essence', 1, [1,3])
        })
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem('allthecompressed:enderium_block_3x', 1, [0,1])
        })
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:obsidian"}'))
        })
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ender_pearl"}'))
        })

    })
    e.addEntity('cataclysm:ignis', table => {
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem('mysticalagriculture:tertium_essence', 1, [1,3])
        })
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('8x allthemodium:allthemodium_ingot')
            pool.addItem('64x thermal:signalum_ingot')
        })
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:phantom_membrane"}'))
        })
    })
    e.addEntity('cataclysm:netherite_monstrosity', table => {
        table.addPool(pool => {
            pool.rolls = 5
            pool.addItem('mysticalagriculture:supremium_essence', 1, [1,3])
        })
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('64x minecraft:netherite_block')
        })
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}'))
        })
        table.addPool(pool => {
            pool.rolls = 2
            pool.addItem(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherrack"}'))
        })
    })
})