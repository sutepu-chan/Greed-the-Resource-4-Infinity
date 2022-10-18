//priority: 99
//===== Item Tag =====//
onEvent('item.tags', e => {
    //mekanism
    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
    let allthemodiumores = ['allthemodium', 'vibranium', 'unobtainium']
    allthemodiumores.forEach(item => {
        e.add(`mekanism:clumps/${item}`, `allthemodium:${item}_clump`)
        e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
        e.add(`mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`)
        e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
        e.add(`mekanism:shards/${item}`, `allthemodium:${item}_shard`)
        e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
        e.add(`mekanism:crystals/${item}`, `allthemodium:${item}_crystal`)
        e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
    })
    alltheores.forEach(item => {
        e.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
        e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
        e.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
        e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
        e.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
        e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
        e.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
        e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
    })
    //add item tags
    e.add('minecraft:logs_unstripped', '/^.+:(?!stripped_).+_log$/')
    e.add('forge:swords', ['allthemodium:alloy_paxel', 'allthemodium:alloy_sword'])
    e.add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])
    e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
    e.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/dimensionalshard'])
    e.add('forge:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
    e.add('forge:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#forge:farmland/tier6'])
    e.add('forge:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#forge:farmland/tier5'])
    e.add('forge:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#forge:farmland/tier4'])
    e.add('forge:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#forge:farmland/tier3'])
    e.add('forge:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#forge:farmland/tier2'])
    e.add('forge:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
    e.add('forge:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice'])
    e.add('forge:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
    e.add('forge:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
    e.add('forge:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
    e.add('forge:pickaxes', ['allthemodium:alloy_pick'])
    e.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
    e.add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])
    e.add('appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
    e.add('appliedenergistics2:dusts/nether_quartz', '#forge:dusts/quartz')
    e.add('appliedenergistics2:dusts/quartz', '#forge:dusts/quartz')
    e.add('appliedenergistics2:dusts/ender', '#forge:dusts/ender_pearl')
    e.add('forge:ingots', ['#forge:ingots/unobtainium_allthemodium_alloy', '#forge:ingots/vibranium_unobtainium_alloy', '#forge:ingots/vibranium_allthemodium_alloy', '#forge:ingots/oratchalcum'])
    e.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')
    e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
    e.add('forge:storage_blocks', '#forge:storage_blocks/uraninite')
    e.add('forge:gems', '#forge:gems/dimensionalshard')
    e.add('forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
    e.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])
    e.add('minecraft:wart_blocks', '/.+_wart_block/')
    e.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/'])
    e.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
    e.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
    e.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
    e.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])
    e.add('forge:water/items', ['#forge:water', 'minecraft:water_bucket', 'mysticalagriculture:water_essence'])
    e.add('forge:botany_pots', colors.map(color => `botanypots:${color}_botany_pot`).concat('botanypots:botany_pot'))
    e.add('forge:barrels', ['minecraft:barrel', 'charm:oak_barrel', 'charm:spruce_barrel', 'charm:birch_barrel', 'charm:jungle_barrel', 'charm:acacia_barrel', 'charm:dark_oak_barrel', 'charm:crimson_barrel', 'charm:warped_barrel'])
    e.add('forge:nuggets/netherite', ['tconstruct:netherite_nugget', 'nourished_nether:netherite_nugget', 'charm:netherite_nugget'])
    let enderioTag = (alloys) => {
        alloys.forEach(alloy => {
            e.add(`forge:ingots/${alloy}`, `enderioalloys:item_alloy_ingot_${alloy}`)
            e.add('forge:ingots', `enderioalloys:item_alloy_ingot_${alloy}`)
            e.add(`forge:nuggets/${alloy}`, `enderioalloys:item_alloy_nugget_${alloy}`)
            e.add('forge:nuggets', `enderioalloys:item_alloy_nugget_${alloy}`)
            e.add(`forge:storage_blocks/${alloy}`, `enderioalloys:block_alloy_${alloy}`)
            e.add('forge:storage_blocks', `enderioalloys:block_alloy_${alloy}`)
        })
    }
    enderioTag([
        'dark_steel',
        'conductive_iron',
        'crude_steel',
        'crystalline_alloy',
        'crystalline_pink_slime',
        'electrical_steel',
        'end_steel',
        'energetic_alloy',
        'energetic_silver',
        'melodic_alloy',
        'pulsating_iron',
        'redstone_alloy',
        'soularium',
        'vivid_alloy',
        'vibrant_alloy',
        'stellar_alloy'
    ])
    e.add('mtr:rail_connector_two_way', ['mtr:rail_connector_20', 'mtr:rail_connector_40', 'mtr:rail_connector_60', 'mtr:rail_connector_80', 'mtr:rail_connector_120', 'mtr:rail_connector_160', 'mtr:rail_connector_200', 'mtr:rail_connector_300'])
    e.add('mtr:rail_connector_one_way', ['mtr:rail_connector_20_one_way', 'mtr:rail_connector_40_one_way', 'mtr:rail_connector_60_one_way', 'mtr:rail_connector_80_one_way', 'mtr:rail_connector_120_one_way', 'mtr:rail_connector_160_one_way', 'mtr:rail_connector_200_one_way', 'mtr:rail_connector_300_one_way'])
    e.add('mtr:rail_connector', ['#mtr:rail_connector_two_way', '#mtr:rail_connector_one_way'])
    e.add('mtr:platforms', ['mtr:platform', 'mtr:platform_indented', 'mtr:platform_na_1', 'mtr:platform_na_1_indented', 'mtr:platform_na_2', 'mtr:platform_na_2_indented', 'mtr:platform_uk_1', 'mtr:platform_uk_1_indented'])
    e.add('forge:bucket_xp', ['industrialforegoing:essence_bucket', 'pneumaticcraft:memory_essence_bucket'])
    e.add('forge:ingots/neutronium', 'endless:neutronium_ingot')
    e.add('forge:ingots', 'endless:neutronium_ingot')
    e.add('forge:nuggets/neutronium', 'endless:neutronium_nugget')
    e.add('forge:nuggets', 'endless:neutronium_nugget')
    e.add('forge:storage_blocks/neutronium', 'endless:neutronium_block')
    e.add('forge:storage_blocks', 'endless:neutronium_block')
    e.add('forge:dusts/ender_pearl', 'appliedenergistics2:ender_dust')
    //remove item tags
    e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
    e.remove('curios:ring', ['balancedflight:ascended_flight_ring', 'balancedflight:basic_flight_ring'])
    e.remove('curios:charm', ['balancedflight:ascended_flight_ring', 'balancedflight:basic_flight_ring'])
    e.remove('forge:chests/personal', 'mekanism:personal_chest')
    e.remove('forge:chests/electric', 'mekanism:personal_chest')
    e.remove('forge:chests', 'mekanism:personal_chest')
    e.remove('forge:plates/iron', 'boss_tools:iron_plate')
    e.remove('forge:gears', 'pneumaticcraft:compressed_iron_gear')
    e.remove('forge:gears/compressed_iron', 'pneumaticcraft:compressed_iron_gear')
})

//===== Block Tag =====//
onEvent('block.tags', e => {
    //add block tags
    e.add('forge:ores/certus_quartz', ['appliedenergistics2:quartz_ore', 'appliedenergistics2:charged_quartz_ore'])
    e.add('forge:ores/quartz', '#forge:ores/certus_quartz')
    e.add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
    e.add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
    e.add('forge:no_moving', ['#minecraft:wither_immune', 'appliedenergistics2:cable_bus', 'draconicevolution:chaos_crystal', 'draconicevolution:chaos_crystal_part', /^appliedenergistics2:/, /^thermal:/, /^mekanism:/])
    e.add('mekanism:cardboard_blacklist', '#forge:no_moving')
    e.add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/nether_star', '#forge:storage_blocks/neutronium'])
    e.add('forge:storage_blocks/nether_star', 'allthecompressed:nether_star_block')
    e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
    e.add('forge:storage_blocks/neutronium', 'endless:neutronium_block')
    e.add('mcwwindows:window', '/mcwwindows:.+_win/')
    e.add('forge:concrete', '/minecraft:.+_concrete/')
    e.add('buildinggadgets:blacklist/copy_paste', [/^windowlogging:.+$/, /^mekanism:.+$/])
    e.add('buildinggadgets:blacklist/building', [/^windowlogging:.+$/, /^mekanism:.+$/])
    //remove block tags
    e.removeAll('minecraft:enderman_holdable')
    e.remove('forge:chests/personal', 'mekanism:personal_chest')
    e.remove('forge:chests/electric', 'mekanism:personal_chest')
    e.remove('forge:chests', 'mekanism:personal_chest')
})

//===== Fluid Tag =====//
onEvent('fluid.tags', e => {
    let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
    alltheores.forEach(material => {
        e.add(`forge:molten_${material}`, [`alltheores:molten_${material}`, `#tconstruct:molten_${material}`])
        e.add(`tconstruct:metal_like`, `alltheores:molten_${material}`)
    })
})