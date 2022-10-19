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
    //===== items =====//
    e.custom({
        type: 'extendedcrafting:shapeless_table',
        ingredients: [
            { item: "endless:neutronium_pile" },
            { item: "endless:neutronium_nugget" },
            { item: "endless:neutronium_ingot" },
            { item: "endless:neutronium_block" },
            { item: "endless:crystal_matrix_ingot" },
            { item: "endless:crystal_matrix_block" },
            { item: "endless:cosmic_meatballs" },
            { item: "endless:ultimate_stew" },
            { item: "endless:endest_pearl" },
            { item: "endless:record_fragment" },
            { item: "appliedenergistics2:singularity" },
            { item: "mysticalagradditions:insanium_gemstone_block" },
            { item: "aeadditions:item_storage_cell_16384" },
            { item: "aeadditions:fluid_storage_cell_4096" },
            { item: "aeadditions:chemical_storage_cell_4096" },
            { item: "tconstruct:hepatizon_block" },
            { item: "tconstruct:manyullyn_block" },
            { item: "tconstruct:queens_slime_block" },
            { item: "tconstruct:pig_iron_block" },
            { item: "tconstruct:rose_gold_block" },
            { item: "tconstruct:tinkers_bronze_block" },
            { item: "tconstruct:slimesteel_block" },
            { item: "tconstruct:cobalt_block" },
            { item: "draconicevolution:draconium_core" },
            { item: "draconicevolution:wyvern_core" },
            { item: "draconicevolution:awakened_core" },
            { item: "draconicevolution:chaotic_core" },
            { item: "ironfurnaces:million_furnace" },
            { item: 'kubejs:eternal_singularity' }
        ],
        result: {
            item: 'endless:infinity_catalyst'
        }
    }).id(`kubejs:infinity_catalyst`)
    //===== blocks =====//
    e.custom({
        type: 'draconicevolution:fusion_crafting',
        result: { item: 'endless:neutronium_collector' },
        catalyst: { item: 'draconicevolution:infused_obsidian' },
        total_energy: 56412000,
        tier: 'DRACONIC',
        ingredients: [
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:energy_pylon' },
            { item: 'draconicevolution:energy_pylon' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_core' },
        ]
    }).id(`kubejs:fusion_crafting/neutronium_collector`)
    //===== tools =====//
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
                item: 'endless:crystal_matrix_block'
            },
            C: {
                item: 'endless:neutronium_ingot'
            }
        },
        result: { item: 'endless:infinity_pickaxe' }
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
                item: 'endless:neutronium_ingot'
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
                item: 'endless:neutronium_ingot'
            }
        },
        result: { item: 'endless:infinity_shovel' }
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
                item: 'endless:neutronium_ingot'
            },
            D: {
                item: 'endless:infinity_catalyst'
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
                item: 'endless:crystal_matrix_block'
            }
        },
        result: { item: 'endless:infinity_bow' }
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
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: 'endless:infinity_catalyst'
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
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: 'endless:crystal_matrix_block'
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
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: 'endless:infinity_catalyst'
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_pants",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            },
            E: {
                item: 'endless:crystal_matrix_block'
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
                item: 'endless:neutronium_ingot'
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