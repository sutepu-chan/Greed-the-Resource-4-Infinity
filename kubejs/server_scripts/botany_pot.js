onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'botanypots:botany_pot',
        'botanypotstiers:elite_botany_pot',
        'botanypotstiers:ultra_botany_pot',
        'botanypotstiers:creative_botany_pot',
        'botanypots:hopper_botany_pot',
        'botanypotstiers:elite_hopper_botany_pot',
        'botanypotstiers:ultra_hopper_botany_pot',
        'botanypotstiers:creative_hopper_botany_pot',
        /botanypots:.+_botany_pot/,
        /botanypots:hopper_.+_botany_pot/,
        /botanypotstiers:.+_botany_pot/,
        /botanypotstiers:.+_hopper_.+_botany_pot/
    ])
    let potTiers = [
        'elite',
        'ultra',
        'creative'
    ]
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 1,
        "pattern": [
            "A A",
            "ABA",
            " A "
        ],
        "key": {
            "A": {
                "item": "minecraft:terracotta"
            },
            "B": {
                "item": "minecraft:flower_pot"
            }
        },
        "result": {
            "item": "botanypots:botany_pot"
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            "AB BA",
            "ACBCA",
            "ACCCA",
            " DDD "
        ],
        "key": {
            "A": {
                "item": "alltheores:silver_ingot"
            },
            "B": {
                "item": "botanypots:botany_pot"
            },
            "C": {
                "item": "pneumaticcraft:ingot_iron_compressed"
            },
            "D": {
                "item": "minecraft:iron_block"
            }
        },
        "result": {
            "item": "botanypotstiers:elite_botany_pot"
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 3,
        "pattern": [
            "       ",
            "       ",
            "AB   BA",
            "CDEFEDC",
            "GBDHDBG",
            "GGDFDGG",
            "  CBC  "
        ],
        "key": {
            "A": {
                "item": "thermal:enderium_coin"
            },
            "B": {
                "item": "botanypotstiers:elite_botany_pot"
            },
            "C": {
                "item": "mekanism:alloy_reinforced"
            },
            "D": {
                "item": "alltheores:platinum_block"
            },
            "E": {
                "item": "thermal:enderium_plate"
            },
            "F": {
                "item": "mekanism:elite_control_circuit"
            },
            "G": {
                "item": "minecraft:diamond_block"
            },
            "H": {
                "item": "mekanism:alloy_atomic"
            }
        },
        "result": {
            "item": "botanypotstiers:ultra_botany_pot"
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 3,
        "pattern": [
            "       ",
            "A     A",
            "ABCDCBA",
            "ECDFDCE",
            "EBGHGBE",
            "IEIGIEI",
            " JJBJJ "
        ],
        "key": {
            "A": {
                "item": "mekanism:ultimate_control_circuit"
            },
            "B": {
                "item": "botanypotstiers:ultra_botany_pot"
            },
            "C": {
                "item": "mekanism:alloy_atomic"
            },
            "D": {
                "item": "minecraft:dragon_head"
            },
            "E": {
                "item": "allthemodium:unobtainium_ingot"
            },
            "F": {
                "item": "thermal:signalum_gear"
            },
            "G": {
                "item": "draconicevolution:awakened_draconium_block"
            },
            "H": {
                "item": "minecraft:dragon_breath"
            },
            "I": {
                "item": "allthemodium:vibranium_ingot"
            },
            "J": {
                "item": "allthemodium:allthemodium_ingot"
            }
        },
        "result": {
            "item": "botanypotstiers:creative_botany_pot"
        }
    })
    //from normal botany pot to hopper botany pot
    potTiers.forEach(tiers => {
        e.shaped(`botanypotstiers:${tiers}_hopper_botany_pot`, [' H ', 'PSP', ' C '], {
            H: 'minecraft:hopper',
            P: 'pipez:item_pipe',
            C: '#forge:chests/wooden',
            S: `botanypotstiers:${tiers}_botany_pot`
        }).id(`kubejs:botanypots/${tiers}_hopper_botany_pot`)
    })
    e.shaped(`botanypots:hopper_botany_pot`, [' H ', 'PSP', ' C '], {
        H: 'minecraft:hopper',
        P: 'pipez:item_pipe',
        C: '#forge:chests/wooden',
        S: `botanypots:botany_pot`
    }).id(`kubejs:botanypots/hopper_botany_pot`)
    //color botany pot from terracotta pot
    colors.forEach(color => {
        e.shapeless(`botanypots:${color}_botany_pot`, [`#forge:dyes/${color}`, 'botanypots:botany_pot']).id(`kubejs:botanypots/${color}_botany_pot`)
        e.shapeless(`botanypots:hopper_${color}_botany_pot`, [`#forge:dyes/${color}`, 'botanypots:hopper_botany_pot']).id(`kubejs:botanypots/hopper_${color}_botany_pot`)
        potTiers.forEach(tiers => {
            e.shapeless(`botanypotstiers:${tiers}_${color}_botany_pot`, [`#forge:dyes/${color}`, `botanypotstiers:${tiers}_botany_pot`]).id(`kubejs:botanypots/${tiers}_${color}_botany_pot`)
            e.shapeless(`botanypotstiers:${tiers}_hopper_${color}_botany_pot`, [`#forge:dyes/${color}`, `botanypotstiers:${tiers}_hopper_botany_pot`]).id(`kubejs:botanypots/${tiers}_hopper_${color}_botany_pot`)
        })
    })
    colors.forEach(a => {
        //array initialise
        let pot = []
        let hopperPot = []
        let elitePot = []
        let eliteHopperPot = []
        let ultraPot = []
        let ultraHopperPot = []
        let creativePot = []
        let creativeHopperPot = []
        colors.forEach(b => {
            if (a !== b) {
                pot.push(`botanypots:${b}_botany_pot`)
                hopperPot.push(`botanypots:hopper_${b}_botany_pot`)
                elitePot.push(`botanypotstiers:elite_${b}_botany_pot`)
                eliteHopperPot.push(`botanypotstiers:elite_hopper_${b}_botany_pot`)
                ultraPot.push(`botanypotstiers:ultra_${b}_botany_pot`)
                ultraHopperPot.push(`botanypotstiers:ultra_hopper_${b}_botany_pot`)
                creativePot.push(`botanypotstiers:creative_${b}_botany_pot`)
                creativeHopperPot.push(`botanypotstiers:creative_hopper_${b}_botany_pot`)
            }
        })
        e.shapeless(`botanypots:${a}_botany_pot`, [`#forge:dyes/${a}`, pot]).id(`kubejs:botanypots/${a}_botany_pot_from_dye`)
        e.shapeless(`botanypots:hopper_${a}_botany_pot`, [`#forge:dyes/${a}`, hopperPot]).id(`kubejs:botanypots/hopper_${a}_botany_pot_from_dye`)
        e.shapeless(`botanypotstiers:elite_${a}_botany_pot`, [`#forge:dyes/${a}`, elitePot]).id(`kubejs:botanypots/elite_${a}_botany_pot_from_dye`)
        e.shapeless(`botanypotstiers:elite_hopper_${a}_botany_pot`, [`#forge:dyes/${a}`, eliteHopperPot]).id(`kubejs:botanypots/elite_hopper_${a}_botany_pot_from_dye`)
        e.shapeless(`botanypotstiers:ultra_${a}_botany_pot`, [`#forge:dyes/${a}`, ultraPot]).id(`kubejs:botanypots/ultra_${a}_botany_pot_from_dye`)
        e.shapeless(`botanypotstiers:ultra_hopper_${a}_botany_pot`, [`#forge:dyes/${a}`, ultraHopperPot]).id(`kubejs:botanypots/ultra_hopper_${a}_botany_pot_from_dye`)
        e.shapeless(`botanypotstiers:creative_${a}_botany_pot`, [`#forge:dyes/${a}`, creativePot]).id(`kubejs:botanypots/creative_${a}_botany_pot_from_dye`)
        e.shapeless(`botanypotstiers:creative_hopper_${a}_botany_pot`, [`#forge:dyes/${a}`, creativeHopperPot]).id(`kubejs:botanypots/creative_hopper_${a}_botany_pot_from_dye`)
    });
})