onEvent('recipes', e => {
    let crushingRitual = (type, metal, result) => {
        e.custom({
            type: 'occultism:crushing',
            ingredient: {
              tag: `forge:ores/${metal}`
            },
            result: {
              item: result,
              count: 2
            },
            crushing_time: 200
        }).id(`kubejs:occultism/${metal}_dust_from_ore`);
        e.custom({
            type: 'occultism:crushing',
            ingredient: {
              tag: `forge:${type}/${metal}`
            },
            result: {
              item: result,
            },
            crushing_time: 200
        }).id(`kubejs:occultism/${metal}_dust`);
    };
    let alloyCrushingRitual = (metal, result) => {
        e.custom({
            type: 'occultism:crushing',
            ingredient: {
              tag: `forge:ingots/${metal}`
            },
            result: {
              item: result,
            },
            crushing_time: 200
        }).id(`kubejs:occultism/${metal}_dust`);
    };
    let ingotCrushingRitual = (metal, result) => {
        crushingRitual('ingots', metal, result);
    };
    let gemCrushingRitual = (metal, result) => {
        crushingRitual('gems', metal, result);
    };
    //===== ingot crushing =====//
    utils.listOf([
        'gold',
        'iron',
        'aluminum',
        'copper',
        'lead',
        'nickel',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'osmium',
    ]).forEach(metal => {
        ingotCrushingRitual(metal, `alltheores:${metal}_dust`);
    });
    utils.listOf([
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]).forEach(metal => {
        ingotCrushingRitual(metal, `allthemodium:${metal}_dust`);
    });

    //===== gem crushing =====//
    utils.listOf([
        'emerald',
        'diamond',
        'quartz',
        'lapis'
    ]).forEach(metal => {
        gemCrushingRitual(metal, `thermal:${metal}_dust`);
    });

    //===== alloy crushing =====//
    utils.listOf([
        'netherite',
        'bronze',
        'constantan',
        'electrum',     
        'enderium',
        'signalum',
        'lumium',
        'invar'
    ]).forEach(metal => {
        alloyCrushingRitual(metal, `thermal:${metal}_dust`);
    });
    alloyCrushingRitual('steel', 'mekanism:dust_steel');
    
    //===== misc crushing =====//
    utils.listOf([
        'constantan',
        'electrum',     
        'enderium',
        'signalum',
        'lumium',
        'invar'
    ]).forEach(metal => {
        e.recipes.mekanism.crushing(`#forge:ingots/${metal}`, `thermal:${metal}_dust`)
    });
    e.recipes.mekanism.crushing('thermal:emerald_dust', 'minecraft:emerald');
    e.recipes.mekanism.crushing('occultism:crushed_end_stone', '#chisel:end_stone');
    e.recipes.thermal.pulverizer('mekanism:dust_steel', 'mekanism:ingot_steel');
    e.recipes.thermal.pulverizer('mekanism:dust_coal', 'minecraft:coal');
    e.recipes.thermal.pulverizer('mekanism:dust_charcoal', 'minecraft:charcoal');
    e.recipes.thermal.pulverizer('mekanism:dust_refined_obsidian', 'mekanism:ingot_refined_obsidian');
    e.recipes.thermal.pulverizer('mekanism:dust_fluorite', 'mekanism:fluorite_gem');
    e.recipes.thermal.pulverizer('occultism:crushed_end_stone', '#chisel:end_stone');
});