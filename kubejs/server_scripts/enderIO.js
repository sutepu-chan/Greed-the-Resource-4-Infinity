onEvent('recipes', e => {
    //===== alloy smelting recipes =====//
    let prefix = 'enderioalloys:item_alloy_ingot_'
    e.recipes.thermal.smelter(`${prefix}conductive_iron`, [`minecraft:redstone`, `minecraft:iron_ingot`]).id(`kubejs:enderio/conductive_iron`)
    e.recipes.thermal.smelter(`${prefix}crude_steel`, [`minecraft:gravel`, `#forge:cobblestone`, `minecraft:clay_ball`]).id(`kubejs:enderio/crude_steel`)
    e.recipes.thermal.smelter(`${prefix}energetic_alloy`, [`minecraft:gold_ingot`, `minecraft:redstone`, `minecraft:glowstone_dust`]).id(`kubejs:enderio/energetic_alloy`)
    e.recipes.thermal.smelter(`${prefix}vibrant_alloy`, [`${prefix}energetic_alloy`, `minecraft:ender_pearl`]).id(`kubejs:enderio/vibrant_alloy`)
    e.recipes.thermal.smelter(`${prefix}energetic_silver`, [`#forge:ingots/silver`, `minecraft:redstone`, `minecraft:glowstone_dust`]).id(`kubejs:enderio/energetic_silver`)
    e.recipes.thermal.smelter(`${prefix}vivid_alloy`, [`${prefix}energetic_silver`, `minecraft:ender_pearl`]).id(`kubejs:enderio/vivid_alloy`)
    e.recipes.thermal.smelter(`${prefix}soularium`,[`minecraft:gold_ingot`, `#chipped:soul_sand`]).id(`kubejs:enderio/soularium`)
    e.recipes.thermal.smelter(`${prefix}redstone_alloy`, [`minecraft:redstone`, `#forge:silicon`]).id(`kubejs:enderio/redstone_alloy`)
    e.recipes.thermal.smelter(`${prefix}pulsating_iron`, [`minecraft:iron_ingot`, `minecraft:ender_pearl`]).id(`kubejs:enderio/pulsating_iron`)
    e.recipes.thermal.smelter(`${prefix}melodic_alloy`, [`${prefix}end_steel`, `minecraft:popped_chorus_fruit`]).id(`kubejs:enderio/melodic_alloy`)
    e.recipes.thermal.smelter(`${prefix}stellar_alloy`, [`${prefix}melodic_alloy`, `minecraft:nether_star`, `minecraft:clay_ball`]).id(`kubejs:enderio/stella_alloy`)
    e.recipes.thermal.smelter(`${prefix}dark_steel`, [`minecraft:iron_ingot`, `#forge:dusts/coal`, `#forge:obsidian`]).id(`kubejs:enderio/dark_steel`)
    e.recipes.thermal.smelter(`${prefix}end_steel`, [`${prefix}dark_steel`, `#forge:end_stones`, `#forge:obsidian`]).id(`kubejs:enderio/end_steel`)
    e.recipes.thermal.smelter(`${prefix}electrical_steel`, [`#forge:silicon`, `#forge:dusts/coal`, `#forge:ingots/iron`]).id(`kubejs:enderio/electrical_steel`)
    e.recipes.thermal.smelter(`${prefix}crystalline_alloy`, ['minecraft:gold_ingot', 'enderioalloys:item_material_pulsating_powder'])
    e.recipes.thermal.smelter(`${prefix}crystalline_pink_slime`, [`${prefix}crystalline_alloy`, 'industrialforegoing:pink_slime_ingot'])
    e.recipes.thermal.smelter('enderioalloys:item_material_glazed_nether_brick', ['minecraft:nether_brick', '4x minecraft:nether_wart', '6x minecraft:clay_ball'])
    //steel alternate receipes
    e.recipes.thermal.smelter(`${prefix}dark_steel`, ['#forge:ingots/steel', `#forge:obsidian`]).id(`kubejs:enderio/dark_steel_alt`)
    e.recipes.thermal.smelter(`${prefix}electrical_steel`, [`#forge:silicon`, '#forge:ingots/steel']).id(`kubejs:enderio/electrical_steel_alt`)
    
    //===== crystals =====//
    e.shaped('enderioalloys:item_material_pulsating_crystal', ['NNN', 'NDN', 'NNN'], {
        N: '#forge:nuggets/pulsating_iron',
        D: '#forge:gems/diamond'
    }).id(`kubejs:enderio/pulsating_crystal`)
    e.shaped('enderioalloys:item_material_vibrant_crystal', ['NNN', 'NDN', 'NNN'], {
        N: '#forge:nuggets/vivid_alloy',
        D: '#forge:gems/emerald'
    }).id(`kubejs:enderio/vibrant_crystal`)
    e.shaped('enderioalloys:item_material_weather_crystal', [' P ', 'VEV', ' P '], {
        P: 'enderioalloys:item_material_pulsating_crystal',
        V: 'enderioalloys:item_material_vibrant_crystal',
        E: 'enderioalloys:item_material_ender_crystal'
    }).id(`kubejs:enderio/weather_crystal`)
    e.recipes.thermal.smelter('enderioalloys:item_material_ender_crystal', [Item.of('industrialforegoing:mob_imprisonment_tool', '{entity:"minecraft:enderman"}'), 'enderioalloys:item_material_vibrant_crystal']).id(`kubejs:enderio/ender_crystal`)
    e.recipes.thermal.smelter('enderioalloys:item_material_precient_crystal', [Item.of('industrialforegoing:mob_imprisonment_tool', '{entity:"minecraft:shulker"}'), 'enderioalloys:item_material_vibrant_crystal']).id(`kubejs:enderio/precient_crystal`)

    //===== crystal crushing =====//
    utils.listOf([
        'precient',
        'pulsating',
        'vibrant'
    ]).forEach(material => {
        e.custom({
            type: 'occultism:crushing',
            ingredient: { item: `enderioalloys:item_material_${material}_crystal` },
            result: { item: `enderioalloys:item_material_${material}_powder` },
            crushing_time: 200
        }).id(`kubejs:enderio/crushing_occultism/${material}_crystal`)
        e.recipes.thermal.pulverizer(`enderioalloys:item_material_${material}_powder`, [`enderioalloys:item_material_${material}_crystal`]).id(`kubejs:enderio/crushing_thermal/${material}_crystal`)
        e.recipes.mekanism.crushing(`enderioalloys:item_material_${material}_powder`, [`enderioalloys:item_material_${material}_crystal`]).id(`kubejs:enderio/crushing_mekanism/${material}_crystal`)
    })

    //===== ingot conversion =====//
    utils.listOf([
        'conductive_iron',
        'crude_steel',
        'energetic_alloy',
        'vibrant_alloy',
        'energetic_silver',
        'vivid_alloy',
        'soularium',
        'redstone_alloy',
        'pulsating_iron',
        'melodic_alloy',
        'stellar_alloy',
        'dark_steel',
        'end_steel',
        'electrical_steel',
        'crystalline_alloy',
        'crystalline_pink_slime'
    ]).forEach(alloy => {
        //compress
        e.shapeless(`enderioalloys:block_alloy_${alloy}`, [`9x ${prefix}${alloy}`]).id(`kubejs:enderio/compress/${alloy}_block`)
        e.shapeless(`${prefix}${alloy}`, [`9x enderioalloys:item_alloy_nugget_${alloy}`]).id(`kubejs:enderio/compress/${alloy}_ingot`)
        //deccompress
        e.shapeless(`9x ${prefix}${alloy}`, [`enderioalloys:block_alloy_${alloy}`]).id(`kubejs:enderio/decompress/${alloy}_block`)
        e.shapeless(`9x enderioalloys:item_alloy_nugget_${alloy}`, [`${prefix}${alloy}`]).id(`kubejs:enderio/decompress/${alloy}_ingot`)
    })
})