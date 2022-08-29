onEvent('worldgen.remove', e => {
    e.removeOres(ore => {
        ore.blocks = [
            'biggerreactors:yellorite_ore',
            'nourished_nether:basalt_redstone_ore',
            'nourished_nether:nether_iron_ore'
        ]
    })
})
onEvent('worldgen.add', e => {
    e.addOre(ore => {
        ore.block = 'allthemodium:allthemodium_ore'
        ore.spawnsIn.blacklist = false 
        ore.spawnsIn.values = [
            '#minecraft:base_stone_overworld' 
        ]
        ore.biomes.blacklist = false 
        ore.biomes.values = [ 
            'jamd:mining'
        ]
        ore.clusterMinSize = 4
        ore.clusterMaxSize = 8
        ore.clusterCount = 5
        ore.minHeight = 5
        ore.maxHeight = 45
        ore.squared = true // Adds random value to X and Z between 0 and 16. Recommended to be true
        ore.chance = 3 // Spawns the ore every ~3 chunks. You usually combine this with clusterCount = 1 for rare ores
    })
})