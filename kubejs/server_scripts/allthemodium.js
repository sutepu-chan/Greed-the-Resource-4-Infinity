onEvent('recipes', e => {
    let modiumSmelting = (alloy => {
        let metalList = [];
        let blockList = [];
        let dustList = [];
        if (alloy.search('unobtainium') !== -1) {
            metalList.push('allthemodium:unobtainium_ingot')
            dustList.push('allthemodium:unobtainium_dust')
            blockList.push('allthemodium:unobtainium_block')
        }
        if (alloy.search('vibranium') !== -1) {
            metalList.push('allthemodium:vibranium_ingot')
            dustList.push('allthemodium:vibranium_dust')
            blockList.push('allthemodium:vibranium_block')
        }
        if (alloy.search('allthemodium_alloy') !== -1) {
            metalList.push('allthemodium:allthemodium_ingot')
            dustList.push('allthemodium:allthemodium_dust')
            blockList.push('allthemodium:allthemodium_block')
        }

        e.recipes.thermal.smelter(alloy, metalList).id(`kubejs:${alloy.replace(':', '/')}_from_ingot`)
        e.recipes.thermal.smelter(alloy, dustList).id(`kubejs:${alloy.replace(':', '/')}_from_dust`)
        e.recipes.thermal.smelter(alloy.replace('ingot', 'block'), blockList).id(`kubejs:${alloy.replace('ingot', 'block').replace(':', '/')}`)
    })
    modiumSmelting('allthemodium:unobtainium_vibranium_alloy_ingot')
    modiumSmelting('allthemodium:unobtainium_allthemodium_alloy_ingot')
    modiumSmelting('allthemodium:vibranium_allthemodium_alloy_ingot')
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "    A",
            "B  A ",
            " BA  ",
            " CB  ",
            "D  B "
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
            },
            "B": {
                "item": "draconicevolution:awakened_draconium_ingot"
            },
            "C": {
                "type": "forge:nbt",
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_sword",
                "count": 1,
                "nbt": "{Damage:0}"
            },
            "D": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:allthemodium\"}"
            }
        },
        "result": {
            "item": 'allthemodium:alloy_sword'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAAB",
            "   CA",
            "  D A",
            " D  A",
            "D    "
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
            },
            "B": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:signalum\"}"
            },
            "C": {
                "type": "forge:nbt",
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe",
                "count": 1,
                "nbt": "{Damage:0}"
            },
            "D": {
                "item": "draconicevolution:awakened_draconium_ingot"
            }
        },
        "result": {
            "item": 'allthemodium:alloy_pick'
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA  ",
            "ABC  ",
            "A D  ",
            "  D  ",
            "  D  "
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
            },
            "B": {
                "type": "forge:nbt",
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_axe",
                "count": 1,
                "nbt": "{Damage:0}"
            },
            "C": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:diamond\"}"
            },
            "D": {
                "item": "draconicevolution:awakened_draconium_ingot"
            }
        },
        "result": {
            "item": 'allthemodium:alloy_axe',
        }
    })
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            " ABA ",
            "  C  ",
            "  D  ",
            "  D  "
        ],
        "key": {
            "A": {
                "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
            },
            "B": {
                "type": "forge:nbt",
                "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_shovel",
                "count": 1,
                "nbt": "{Damage:0}"
            },
            "C": {
                "type": "forge:nbt",
                "item": "extendedcrafting:singularity",
                "count": 1,
                "nbt": "{Id:\"extendedcrafting:gold\"}"
            },
            "D": {
                "item": "draconicevolution:awakened_draconium_ingot"
            }
        },
        "result": {
            "item": 'allthemodium:alloy_shovel'
        }
    })
    removeRecipeByOutput(e, [
        'allthemodium:alloy_sword',
        'allthemodium:alloy_pick',
        'allthemodium:alloy_shovel',
        'allthemodium:alloy_axe',
    ])
})