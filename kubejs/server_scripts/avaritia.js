onEvent('recipes', e => {
    e.shapeless('kubejs:neutron_nugget', ['9x kubejs:neutron_pile']).id(`kubejs:avaritia/compress/neutron_nugget`)
    e.shapeless('kubejs:neutronium_ingot', ['9x kubejs:neutron_nugget']).id(`kubejs:avaritia/compress/neutronium_ingot`)
    e.shapeless('kubejs:neutronium', ['9x kubejs:neutronium_ingot']).id(`kubejs:avaritia/compress/neutronium`)
    e.shapeless('9x kubejs:neutron_pile', ['kubejs:neutron_nugget']).id(`kubejs:avaritia/decompress/neutron_nugget`)
    e.shapeless('9x kubejs:neutron_nugget', ['kubejs:neutronium_ingot']).id(`kubejs:avaritia/decompress/neutronium_ingot`)
    e.shapeless('9x kubejs:neutronium_ingot', ['kubejs:neutronium']).id(`kubejs:avaritia/decompress/neutronium`)
    //endest pearl
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "  A  ",
            " BAB ",
            "AACAA",
            " BAB ",
            "  A  "
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:crystaltine_ingot"
            },
            "B": {
                "item": "minecraft:obsidian"
            },
            "C": {
                "item": "minecraft:ender_eye"
            }
        },
        "result": {
            "item": "kubejs:endest_pearl"
        }
    })
    //cosmic meatballs
    e.custom({
        "type": "extendedcrafting:shapeless_table",
        "tier": 4,
        "ingredients": [
            {
                "item": "kubejs:neutron_pile"
            },
            {
                "item": "kubejs:neutron_nugget"
            },
            {
                "item": "kubejs:neutronium_ingot"
            },
            {
                "item": "kubejs:neutronium"
            },
            {
                "item": "minecraft:cooked_porkchop"
            },
            {
                "item": "minecraft:cooked_beef"
            },
            {
                "item": "minecraft:cooked_chicken"
            },
            {
                "item": "minecraft:cooked_rabbit"
            },
            {
                "item": "minecraft:cooked_mutton"
            },
            {
                "item": "minecraft:tropical_fish"
            },
            {
                "item": "minecraft:cooked_cod"
            },
            {
                "item": "minecraft:cooked_salmon"
            },
            {
                "item": "minecraft:pufferfish"
            },
            {
                "item": "nethers_delight:hoglin_sirloin"
            }
        ],
        "result": {
            "item": "kubejs:cosmic_meatballs"
        }
    })
    //ultimate stew
    e.custom({
        "type": "extendedcrafting:shapeless_table",
        "tier": 4,
        "ingredients": [
            {
                "item": "kubejs:neutron_pile"
            },
            {
                "item": "kubejs:neutron_nugget"
            },
            {
                "item": "kubejs:neutronium_ingot"
            },
            {
                "item": "kubejs:neutronium"
            },
            {
                "item": "minecraft:wheat"
            },
            {
                "item": "minecraft:carrot"
            },
            {
                "item": "minecraft:potato"
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": "minecraft:mushroom_stew"
            },
            {
                "item": "minecraft:golden_apple"
            },
            {
                "item": "minecraft:beetroot_soup"
            },
            {
                "item": "minecraft:sweet_berries"
            },
            {
                "item": "minecraft:honey_bottle"
            },
            {
                "item": "minecraft:pumpkin_pie"
            },
            {
                "item": "minecraft:dried_kelp"
            }
        ],
        "result": {
            "item": "kubejs:ultimate_stew"
        }
    })
    //infinity ingot
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAAAA",
            "ABCCBCCBA",
            "ACBBCBBCA",
            "ABCCBCCBA",
            "AAAAAAAAA"
        ],
        "key": {
            "A": {
                "item": "kubejs:neutronium_ingot"
            },
            "B": {
                "item": "extendedcrafting:crystaltine_ingot"
            },
            "C": {
                "item": "extendedcrafting:ultimate_singularity"
            }
        },
        "result": {
            "item": 'upgradednetherite_creative:creative_upgraded_netherite_ingot'
        }
    })
})