onEvent('recipes', e => {
    removeRecipeByOutput(e, ['javd:portal_block', 'jamd:mine_portal_block'])
    //mining portal
    e.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
            "item": "minecraft:netherite_pickaxe"
        },
        "ingredients": [
            {
                "item": "allthemodium:allthemodium_ingot"
            },
            {
                "item": "mysticalagriculture:coral_essence"
            },
            {
                "item": "tconstruct:manyullyn_ingot"
            },
            {
                "item": "tconstruct:manyullyn_ingot"
            },
            {
                "item": "allthemodium:allthemodium_ingot"
            },
            {
                "item": "mysticalagriculture:coral_essence"
            },
            {
                "item": "mysticalagriculture:coral_essence"
            },
            {
                "item": "allthemodium:allthemodium_ingot"
            },
            {
                "item": "tconstruct:manyullyn_ingot"
            },
            {
                "item": "tconstruct:manyullyn_ingot"
            },
            {
                "item": "mysticalagriculture:coral_essence"
            },
            {
                "item": "allthemodium:allthemodium_ingot"
            }
        ],
        "result": {
            "item": 'jamd:mine_portal_block'
        }
    })
    //void portal
    e.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 100000,
        "input": {
            "item": "pneumaticcraft:advanced_air_compressor"
        },
        "ingredients": [
            {
                "item": "tconstruct:pig_iron_ingot"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "upgradednetherite:ender_upgraded_netherite_ingot"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "tconstruct:pig_iron_ingot"
            },
            {
                "item": "upgradednetherite:ender_upgraded_netherite_ingot"
            },
            {
                "item": "tconstruct:pig_iron_ingot"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "upgradednetherite:ender_upgraded_netherite_ingot"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "tconstruct:pig_iron_ingot"
            }
        ],
        "result": {
            "item": 'javd:portal_block'
        }
    })
})