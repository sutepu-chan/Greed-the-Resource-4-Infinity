onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        //tools and armors
        'endless:infinity_pickaxe',
        'endless:infinity_axe',
        'endless:infinity_shovel',
        'endless:infinity_hoe',
        'endless:infinity_sword',
        'endless:skullfire_sword',
        'endless:infinity_bow',
        'endless:infinity_crossbow',
        'endless:crystal_matrix_sword',
        'endless:crystal_matrix_pickaxe',
        'endless:crystal_matrix_axe',
        'endless:crystal_matrix_shovel',
        'endless:crystal_matrix_hoe',
        'endless:neutronium_sword',
        'endless:neutronium_pickaxe',
        'endless:neutronium_axe',
        'endless:neutronium_shovel',
        'endless:neutronium_hoe',
        'endless:infinity_helmet',
        'endless:infinity_chestplate',
        'endless:infinity_leggings',
        'endless:infinity_boots',
        'endless:crystal_matrix_helmet',
        'endless:crystal_matrix_chestplate',
        'endless:crystal_matrix_leggings',
        'endless:crystal_matrix_boots',
        'endless:neutronium_helmet',
        'endless:neutronium_chestplate',
        'endless:neutronium_leggings',
        'endless:neutronium_boots',
    ])
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAAAAAA ",
            "AAAABAAAA",
            "AA  C  AA",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "extendedcrafting:crystaltine_block"
            },
            C: {
                item: "kubejs:neutronium_ingot"
            }
        },
        result: {
            type: "forge:nbt",
            item: 'endless:infinity_pickaxe',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:fortune\"}]}"
        }
    }).id(`kubejs:avaritia/pickaxe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " A       ",
            "AAAAA    ",
            "AAAA     ",
            " AB      ",
            "  B      ",
            "  B      ",
            "  B      ",
            "  B      ",
            "  B      "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "kubejs:neutronium_ingot"
            }
        },
        result: {
            item: 'endless:infinity_axe'
        }
    }).id(`kubejs:avaritia/axe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "      AAA",
            "     AAAA",
            "      AAA",
            "     B A ",
            "    B    ",
            "   B     ",
            "  B      ",
            " B       ",
            "B        "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "kubejs:neutronium_ingot"
            }
        },
        result: {
            type: "forge:nbt",
            item: 'endless:infinity_shovel',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:fortune\"}]}"
        }
    }).id(`kubejs:avaritia/shovel`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "       AA",
            "      AAA",
            "     AAA ",
            "    AAA  ",
            " B AAA   ",
            "  BAA    ",
            "  CB     ",
            " C  B    ",
            "D        "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "extendedcrafting:crystaltine_ingot"
            },
            C: {
                item: "kubejs:neutronium_ingot"
            },
            D: {
                item: "extendedcrafting:ultimate_singularity"
            }
        },
        result: {
            type: "forge:nbt",
            item: 'endless:infinity_sword',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:looting\"},{lvl:100,id:\"minecraft:sweeping\"}}"
        }
    }).id(`kubejs:avaritia/sword`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "   AA    ",
            "  A B    ",
            " A  B    ",
            "A   B    ",
            "C   B    ",
            "A   B    ",
            " A  B    ",
            "  A B    ",
            "   AA    "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "minecraft:white_wool"
            },
            C: {
                item: "extendedcrafting:crystaltine_block"
            }
        },
        result: {
            type: "forge:nbt",
            item: 'endless:infinity_bow',
            count: 1,
            nbt: "{Enchantments:[{lvl:1,id:\"minecraft:infinity\"},{lvl:2147483647,id:\"minecraft:power\"}]}"
        }
    }).id(`kubejs:avaritia/bow`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  AAAAA  ",
            " ABBBBBA ",
            " A CBC A ",
            " ABBDBBA ",
            " ABBBBBA ",
            " AB B BA ",
            "         ",
            "         ",
            "         "
        ],
        key: {
            A: {
                item: "kubejs:neutronium_ingot"
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: "extendedcrafting:ultimate_singularity"
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_helmet",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'endless:infinity_helmet'
        }
    }).id(`kubejs:avaritia/helmet`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AA   AA ",
            "AAA   AAA",
            "AAA   AAA",
            " ABBBBBA ",
            " ABBCBBA ",
            " ABBDBBA ",
            " ABBBBBA ",
            " ABBBBBA ",
            "  AAAAA  "
        ],
        key: {
            A: {
                item: "kubejs:neutronium_ingot"
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: "extendedcrafting:crystaltine_block"
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_bodyarmor",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'endless:infinity_chestplate'
        }
    }).id(`kubejs:avaritia/chestplate`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "ABBBCBBBA",
            "ABAADAABA",
            "ABA   ABA",
            "AEA   AEA",
            "ABA   ABA",
            "ABA   ABA",
            "ABA   ABA",
            "ABA   ABA"
        ],
        key: {
            A: {
                item: "kubejs:neutronium_ingot"
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: "extendedcrafting:ultimate_singularity"
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_pants",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            },
            E: {
                item: "extendedcrafting:crystaltine_block"
            }
        },
        result: {
            item: 'endless:infinity_leggings'
        }
    }).id(`kubejs:avaritia/leggings`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAA AAA ",
            " ABA ABA ",
            " ABA ABA ",
            "AABA ABAA",
            "ABBA ABBA",
            "AAAACAAAA",
            "         ",
            "         ",
            "         "
        ],
        key: {
            A: {
                item: "kubejs:neutronium_ingot"
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_boots",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'endless:infinity_boots'
        }
    }).id(`kubejs:avaritia/boots`)
})