//priority: 98
onEvent('recipes', e => {
    //===== Metal Unification =====//
    function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
        e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
        e.replaceOutput(`#forge:dusts/${name}`, dustItem)
        e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
        e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

        utils.listOf([
            'copper',
            'tin',
            'uranium',
            'lead',
            'osmium',
            'bronze',
        ]).forEach(name => {
            e.remove({ id: `mekanism:processing/${name}/storage_blocks/from_ingots`})
            e.remove({ id: `mekanism:processing/${name}/ingot/from_nuggets`})
            e.remove({ id: `mekanism:processing/${name}/ingot/from_block`})
            e.remove({ id: `mekanism:processing/${name}/nugget/from_ingot`})
        })
        utils.listOf([
            'copper',
            'tin',
            'lead',
            'silver',
            'nickel'
        ]).forEach(name => {
            e.remove({ id: `thermal:storage/${name}_block` })
            e.remove({ id: `thermal:storage/${name}_ingot_from_nuggets`})
            e.remove({ id: `thermal:storage/${name}_ingot_from_block`})
            e.remove({ id: `thermal:storage/${name}_nugget_from_ingot`})
        })
        e.remove({ id: `tconstruct:common/materials/copper_block_from_ingots`})
        utils.listOf([
            'copper',
            'aluminum'
        ]).forEach(name => {
            e.remove({ id: `tmechworks:${name}_block_from_${name}_ingot`})
            e.remove({ id: `tmechworks:${name}_ingot_from_${name}_block`})
            e.remove({ id: `tmechworks:${name}_ingot_from_${name}_nugget`})
            e.remove({ id: `tmechworks:${name}_nugget_from_${name}_ingot`})
        })
        utils.listOf([
            'aluminum',
            'copper',
            'lead',
            'tin',
            'silver',
            'osmium',
            'uranium',
            'nickel'
        ]).forEach(name => {
            e.remove({ id: `bno:${name}_block`})
            e.remove({ id: `bno:${name}_ingot-1`})
            e.remove({ id: `bno:${name}_ingot-2`})
            e.remove({ id: `bno:${name}_nugget`})
        })
        utils.listOf([
            'copper',
            'silver'
        ]).forEach(name => {
            e.remove({ id: `occultism:crafting/${name}_block`})
            e.remove({ id: `occultism:crafting/${name}_ingot_from_block`})
            e.remove({ id: `occultism:crafting/${name}_ingot_from_nuggets`})
            e.remove({ id: `occultism:crafting/${name}_nugget`})
        })
        e.remove({ id: `eidolon:lead_block`})
        e.remove({ id: `boss_tools:steel_block`})
        e.remove({ id: `boss_tools:steel_ingot`})
        e.remove({ id: `boss_tools:steel_ingot_from_nugget`})

        e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
        e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })
        e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ingot` })

        e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
        e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
        e.recipes.appliedenergistics2.grinder({ input: { tag: `forge:ingots/${name}` }, result: { primary: { item: dustItem } }, turns: 8 })

        if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
            e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
            e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
            e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`).id(`alltheores:mek_processing/${name}/dust/from_ore`)

            e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ore` })
            e.recipes.appliedenergistics2.grinder({
                input: { tag: `forge:ores/${name}` },
                result: { primary: { item: dustItem, count: 2 } },
                turns: 8
            })
        }
        e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
        e.replaceInput(dustItem, `#forge:dusts/${name}`)
        e.replaceInput(ingotItem, `#forge:ingots/${name}`)
        e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
    }
    function unifyAlloy(name, ingotItem, dustItem, blockItem, nuggetItem) {
        e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
        e.replaceInput(dustItem, `#forge:dusts/${name}`)
        e.replaceInput(ingotItem, `#forge:ingots/${name}`)
        e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

        e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
        e.replaceOutput(`#forge:dusts/${name}`, dustItem)
        e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
        e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
    }
    //metal
    unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
    unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')
    unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget')
    unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget')
    unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
    unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
    unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
    unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
    unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
    unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
    unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')
    unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')
    //alloy
    unifyAlloy('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel')
    unifyAlloy('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
    unifyAlloy('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
    unifyAlloy('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')
    //netherite
    e.replaceOutput('#forge:dusts/netherite', 'thermal:netherite_dust')
    e.replaceInput('mekanism:dust_netherite', '#forge:dusts/netherite')
    //===== Plate Unification =====//
    function plateCasting(material, coolingTime, result) {
        let alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
        let fluid = alltheores.includes(material) ? { tag: `forge:molten_${material}`, amount: 144 } : { name: `tconstruct:molten_${material}`, amount: 144 }

        e.custom({
            type: 'tconstruct:casting_table',
            conditions: [
                {
                    value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
                    type: 'forge:not'
                }
            ],
            cast: { tag: 'tconstruct:casts/multi_use/plate' },
            fluid: fluid,
            result: { item: result },
            cooling_time: coolingTime
        }).id(`kubejs:smeltery/casting/metal/${material}/plate_gold_cast`)
        e.custom({
            type: 'tconstruct:casting_table',
            conditions: [
                {
                    value: { tag: `forge:plates/${material}`, type: 'forge:tag_empty' },
                    type: 'forge:not'
                }
            ],
            cast: { tag: 'tconstruct:casts/single_use/plate' },
            cast_consumed: true,
            fluid: fluid,
            result: { item: result },
            cooling_time: coolingTime
        }).id(`kubejs:smeltery/casting/metal/${material}/plate_sand_cast`)
    }
    function plateProcessing(types) {
        types.forEach(([material, coolingTime, result]) => {
            e.replaceInput(`thermal:${material}_plate`, `#forge:plates/${material}`)
            result = result ? result : `thermal:${material}_plate`
            if (coolingTime !== null) {
                e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_gold_cast` })
                e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/plate_sand_cast` })
                plateCasting(material, coolingTime, result)
            }
            e.remove({ id: `thermal:machine/press/press_${material}_ingot_to_plate` })
            e.recipes.thermal.press(result, `#forge:ingots/${material}`).id(`kubejs:machine/press/press_${material}_ingot_to_plate`)
        })
    }
    plateProcessing([
        ['iron', 60],
        ['gold', 57],
        ['copper', 50],
        ['tin', 39],
        ['lead', 43],
        ['silver', 60],
        ['nickel', 65],
        ['bronze', 57],
        ['electrum', 59],
        ['invar', 63],
        ['constantan', 64],
        ['signalum', null],
        ['lumium', null],
        ['enderium', null]
    ])
    //===== Tinkers Unification =====//
    function tinkerMelting(material, type, typeValues, temperature, time, byproduct) {
        let recipe = {
            type: 'tconstruct:melting',
            ingredient: { tag: `forge:${type}/${material}` },
            result: { fluid: `alltheores:molten_${material}`, amount: typeValues.amount },
            temperature: temperature,
            time: time * typeValues.multiplier
        }
        e.custom(type != 'ores' ? recipe : Object.assign({ byproducts: byproduct }, recipe)).id(`kubejs:melting/${type}/${material}`)
    }
    function tinkerAlloys(entries) {
        entries.forEach(([output, outputAmount, temperature, inputs]) => {
            e.remove({ id: `tconstruct:smeltery/alloys/molten_${output}` })
            e.custom({
                type: 'tconstruct:alloy',
                inputs: inputs,
                result: { fluid: `tconstruct:molten_${output}`, amount: outputAmount },
                temperature: temperature
            }).id(`kubejs:melting/alloys/${output}`)
        })
    }
    function unifyTinkers(entries) {
        let meltingTypes = ['block', 'can', 'coin', 'dust', 'gear', 'ingot', 'nugget', 'ore']
        let meltingTypeValues = {
            storage_blocks: { amount: 1296, multiplier: 88.125 },
            dusts: { amount: 144, multiplier: 21.75 },
            gears: { amount: 576, multiplier: 58.8 },
            ingots: { amount: 144, multiplier: 29.4 },
            nuggets: { amount: 16, multiplier: 10.0 },
            ores: { amount: 288, multiplier: 44.1 },
        }
        let meltingParts = ['broad_axe_head', 'broad_blade', 'hammer_head', 'large_plate', 'pickaxe_head', 'repair_kit', 'small_axe_head', 'small_blade', 'tool_binding', 'tool_handle', 'tough_handle']
        entries.forEach(([material, temperature, time, types, byproduct]) => {
            e.replaceInput(`tconstruct:${material}_ingot`, `#forge:ingots/${material}`)
            e.replaceInput(`tmechworks:${material}_ingot`, `#forge:ingots/${material}`)
            e.replaceInput(`tconstruct:${material}_block`, `#forge:storage_blocks/${material}`)
            e.replaceInput(`tmechworks:${material}_block`, `#forge:storage_blocks/${material}`)
            e.replaceOutput(`tconstruct:${material}_ingot`, `alltheores:${material}_ingot`)
            e.replaceOutput(`tmechworks:${material}_ingot`, `alltheores:${material}_ingot`)
            e.replaceOutput(`tconstruct:${material}_block`, `alltheores:${material}_block`)
            e.replaceOutput(`tmechworks:${material}_block`, `alltheores:${material}_block`)
            e.remove({ id: `tconstruct:smeltery/casting/metal/${material}/block` })
            meltingTypes.forEach(meltingType => {
                if (meltingType !== 'block') e.remove({ id: `tconstruct:smeltery/melting/metal/${material}/${meltingType}` })
                for (let type in meltingTypeValues) if (types.includes(type)) tinkerMelting(material, type, meltingTypeValues[type], temperature, time, byproduct)
            })
            meltingParts.forEach(meltingPart => e.remove({ id: `tconstruct:tools/parts/melting/${meltingPart}/tconstruct/${material}` }))
        })
    }
    function tinkerAlloyMelting(entries) {
        entries.forEach(([input, outputItem, outputBlock, outputNugget]) => {
            e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/block` })
            e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_gold_cast` })
            e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/ingot_sand_cast` })
            e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_gold_cast` })
            e.remove({ id: `tconstruct:smeltery/casting/metal/${input}/nugget_sand_cast` })
            e.custom({
                type: 'tconstruct:casting_basin',
                fluid: { tag: `tconstruct:molten_${input}`, amount: 1296 },
                result: { item: `${outputBlock}` },
                cooling_time: 171
            }).id(`kubejs:smeltery/casting/metal/${input}/block`)
            e.custom({
                type: 'tconstruct:casting_table',
                cast: { tag: 'tconstruct:casts/multi_use/ingot' },
                fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
                result: { item: `${outputItem}` },
                cooling_time: 57
            }).id(`kubejs:smeltery/casting/metal/${input}/ingot_gold_cast`)
            e.custom({
                type: 'tconstruct:casting_table',
                cast: { tag: 'tconstruct:casts/single_use/ingot' },
                cast_consumed: true,
                fluid: { tag: `tconstruct:molten_${input}`, amount: 144 },
                result: { item: `${outputItem}` },
                cooling_time: 57
            }).id(`kubejs:smeltery/casting/metal/${input}/ingot_sand_cast`)
            e.custom({
                type: 'tconstruct:casting_table',
                cast: { tag: 'tconstruct:casts/multi_use/nugget' },
                fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
                result: { item: `${outputNugget}` },
                cooling_time: 19
            }).id(`kubejs:smeltery/casting/metal/${input}/nugget_gold_cast`)
            e.custom({
                type: 'tconstruct:casting_table',
                cast: { tag: 'tconstruct:casts/single_use/nugget' },
                cast_consumed: true,
                fluid: { tag: `tconstruct:molten_${input}`, amount: 16 },
                result: { item: `${outputNugget}` },
                cooling_time: 19
            }).id(`kubejs:smeltery/casting/metal/${input}/nugget_sand_cast`)
        })
    }
    tinkerAlloyMelting([
        ['bronze', 'thermal:bronze_ingot', 'thermal:bronze_block', 'thermal:bronze_nugget'],
        ['constantan', 'thermal:constantan_ingot', 'thermal:constantan_block', 'thermal:constantan_nugget'],
        ['electrum', 'thermal:electrum_ingot', 'thermal:electrum_block', 'thermal:electrum_nugget']
    ])
    unifyTinkers([
        [
            'aluminum',
            425,
            1.6,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
            [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
        ],
        [
            'copper',
            500,
            1.7,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'gears'],
            [{ fluid: 'tconstruct:molten_gold', amount: 16 }]
        ],
        [
            'lead',
            330,
            1.4,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'gears'],
            [{ fluid: 'alltheores:molten_silver', amount: 48 }]
        ],
        [
            'nickel',
            950,
            2.2,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'gears'],
            [{ fluid: 'alltheores:molten_platinum', amount: 16 }]
        ],
        [
            'osmium',
            975,
            2.2,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
            [{ fluid: 'tconstruct:molten_iron', amount: 48 }]
        ],
        [
            'platinum',
            970,
            2.2,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
            [{ fluid: 'tconstruct:molten_gold', amount: 48 }]
        ],
        [
            'silver',
            790,
            2.0,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'gears'],
            [{ fluid: 'alltheores:molten_lead', amount: 48 }]
        ],
        [
            'tin',
            225,
            1.3,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores', 'gears'],
            [{ fluid: 'alltheores:molten_copper', amount: 48 }]
        ],
        [
            'uranium',
            830,
            2.0,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
            [{ fluid: 'alltheores:molten_lead', amount: 48 }]
        ],
        [
            'zinc',
            420,
            1.6,
            ['storage_blocks', 'dusts', 'ingots', 'nuggets', 'ores'],
            [{ fluid: 'alltheores:molten_tin', amount: 48 }]
        ]
    ])
    tinkerAlloys([
        [
            'brass', 288, 605, [
                { tag: 'forge:molten_copper', amount: 144 },
                { tag: 'forge:molten_zinc', amount: 144 }
            ]
        ],
        [
            'bronze', 576, 700, [
                { tag: 'forge:molten_copper', amount: 432 },
                { tag: 'forge:molten_tin', amount: 144 }
            ]
        ],
        [
            'constantan', 288, 920, [
                { tag: 'forge:molten_copper', amount: 144 },
                { tag: 'forge:molten_nickel', amount: 144 }
            ]
        ],
        [
            'electrum', 288, 760, [
                { tag: 'tconstruct:molten_gold', amount: 144 },
                { tag: 'forge:molten_silver', amount: 144 }
            ]
        ],
        [
            'hepatizon', 288, 1400, [
                { tag: 'forge:molten_copper', amount: 288 },
                { tag: 'tconstruct:molten_cobalt', amount: 144 },
                { tag: 'tconstruct:molten_obsidian', amount: 1000 }
            ]
        ],
        [
            'invar', 432, 900, [
                { tag: 'tconstruct:molten_iron', amount: 288 },
                { tag: 'forge:molten_nickel', amount: 144 }
            ]
        ],
        [
            'pewter', 288, 400, [
                { tag: 'tconstruct:molten_iron', amount: 144 },
                { tag: 'forge:molten_lead', amount: 144 }
            ]
        ],
        [
            'rose_gold', 576, 550, [
                { tag: 'forge:molten_copper', amount: 432 },
                { tag: 'tconstruct:molten_gold', amount: 144 }
            ]
        ],
        [
            'tinkers_bronze', 432, 700, [
                { tag: 'forge:molten_copper', amount: 432 },
                { tag: 'tconstruct:molten_glass', amount: 1000 }
            ]
        ]
    ])

    removeRecipeByID(e, [
        'tconstruct:common/materials/copper_ingot_from_block',
        'tconstruct:common/materials/copper_ingot_from_nuggets',
        'tconstruct:common/materials/copper_nugget_from_ingot',
    ])
    //===== Misc Unification =====//
    let miscUnify = (result, tag, variants) => {
        variants.forEach(variant => {
            e.replaceInput(variant, tag)
        })
        e.replaceOutput(tag, result)
    }
    miscUnify('tconstruct:netherite_nugget', '#forge:nuggets/netherite', ['tconstruct:netherite_nugget', 'nourished_nether:netherite_nugget', 'charm:netherite_nugget'])
    miscUnify('thermal:quartz_dust', '#forge:dusts/quartz', ['appliedenergistics2:nether_quartz_dust', 'mekanism:dust_quartz', 'thermal:quartz_dust'])
    miscUnify('allthecompressed:nether_star_block', '#forge:storage_blocks/nether_star', ['allthecompressed:nether_star_block', 'extendedcrafting:nether_star_block'])
    miscUnify('thermal:ender_pearl_dust', '#appliedenergistics2:dusts/ender', ['thermal:ender_pearl_dust', 'appliedenergistics2:ender_dust'])
    miscUnify('mekanism:dust_obsidian', '#forge:dusts/obsidian', ['mekanism:dust_obsidian', 'occultism:obsidian_dust'])
    miscUnify('thermal:sulfur_dust', '#forge:dusts/sulfur', ['thermal:sulfur_dust', 'eidolon:sulfur'])
    miscUnify('thermal:charcoal_block', '#forge:storage_blocks/charcoal', ['mekanism:block_charcoal', 'thermal:charcoal_block'])
    miscUnify('mekanism:dust_coal', '#forge:dusts/coal', ['lazierae2:coal_dust', 'mekanism:dust_coal'])
    miscUnify('boss_tools:iron_stick', '#forge:rods/iron', ['buildersaddition:iron_rod', 'boss_tools:iron_stick'])
    modifyShaped(e, 'boss_tools:iron_stick', 4, ['I', 'I'], {
        I: '#forge:ingots/iron'
    })
    //misc
    e.replaceInput('mekanism:sawdust', 'thermal:sawdust')
    e.replaceOutput('mekanism:dust_diamond', 'thermal:diamond_dust')
    //blocks
    modifyShaped(e, 'piglin_expansion:basalt_quadratiles', 4, ['PB', 'BP'], {
        B: 'minecraft:basalt',
        P: 'minecraft:polished_basalt'
    })
    modifyShaped(e, 'piglin_expansion:basalt_slab', 6, ['BBB'], {
        B: 'nourished_nether:cracked_basalt_bricks'
    })
    removeRecipeByID(e, [
        'biggerreactors:crafting/yellorium_ingot',
        'eidolon:decompress_lead_block',
        'eidolon:decompress_lead_ingot',
        'eidolon:lead_ingot',
    ])
    removeRecipeByOutput(e, [
        'allthecompressed:atm_star_block',
        /allthecompressed:atm_star_block_.+/,
        'extendedcrafting:nether_star_block',
        'biggerreactors:yellorite_ore',
        'biggerreactors:yellorium_dust',
        'titanium:iron_gear',
        'titanium:gold_gear',
        'titanium:diamond_gear',
        'mekanism:upgrade_anchor',
        'thermal:beetroot_block',
        'thermal:potato_block',
        'thermal:carrot_block',
    ])
})
