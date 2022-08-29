onEvent('recipes', e => {
    //tinker
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  A  ",
            " BCB ",
            "ADEDA",
            " BCB ",
            "  A  "
        ],
        key: {
            A: {
                item: "minecraft:nether_star"
            },
            B: {
                item: "mysticalagradditions:nether_star_crux"
            },
            C: {
                item: "tconstruct:hepatizon_ingot"
            },
            D: {
                item: "tconstruct:manyullyn_ingot"
            },
            E: {
                item: "extendedcrafting:ultimate_singularity"
            }
        },
        result: {
            type: "forge:nbt",
            item: "tconstruct:creative_slot",
            count: 1,
            nbt: "{slot:\"abilities\"}"
        }
    }).id(`kubejs:tconstruct/creative_slot/abilities`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  AA ",
            " BCDA",
            "ACECA",
            "ADCB ",
            " AA  "
        ],
        key: {
            A: {
                type: "forge:nbt",
                item: "tconstruct:repair_kit",
                count: 1,
                nbt: "{Material:\"tconstruct:gold\"}"
            },
            B: {
                item: "tconstruct:tinkers_bronze_ingot"
            },
            C: {
                item: "mekanism:enriched_gold"
            },
            D: {
                item: "thermal:gold_plate"
            },
            E: {
                item: "extendedcrafting:ultimate_singularity"
            }
        },
        result: {
            type: "forge:nbt",
            item: "tconstruct:creative_slot",
            count: 1,
            nbt: "{slot:\"sensor\"}"
        }
    }).id(`kubejs:tconstruct/creative_slot/sensor`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  A  ",
            " BCB ",
            "ABDBA",
            " BCB ",
            "  A  "
        ],
        key: {
            A: {
                item: "minecraft:emerald"
            },
            B: {
                item: "enderioalloys:item_alloy_ingot_soularium"
            },
            C: {
                item: "extendedcrafting:crystaltine_ingot"
            },
            D: {
                item: "extendedcrafting:ultimate_singularity"
            }
        },
        result: {
            type: "forge:nbt",
            item: "tconstruct:creative_slot",
            count: 1,
            nbt: "{slot:\"souls\"}"
        }
    }).id(`kubejs:tconstruct/creative_slot/souls`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "A   A",
            "AA AA",
            "ABCBA",
            "ABDBA",
            " AAA "
        ],
        key: {
            A: {
                item: "alltheores:uranium_block"
            },
            B: {
                item: "tconstruct:slimesteel_ingot"
            },
            C: {
                item: "extendedcrafting:ultimate_singularity"
            },
            D: {
                item: "minecraft:scute"
            }
        },
        result: {
            type: "forge:nbt",
            item: "tconstruct:creative_slot",
            count: 1,
            nbt: "{slot:\"defense\"}"
        }
    }).id(`kubejs:tconstruct/creative_slot/defense`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "BBAAA",
            "BB   ",
            "  C  ",
            "  D  ",
            "EEFEE"
        ],
        key: {
            A: {
                item: "mekanism:hdpe_stick"
            },
            B: {
                item: 'allthecompressed:iron_block_1x'
            },
            C: {
                item: "extendedcrafting:ultimate_singularity"
            },
            D: {
                item: "enderioalloys:item_alloy_ingot_crystalline_pink_slime"
            },
            E: {
                item: "enderioalloys:item_alloy_ingot_vibrant_alloy"
            },
            F: {
                item: 'tconstruct:tinkers_anvil'
            }
        },
        result: {
            type: "forge:nbt",
            item: "tconstruct:creative_slot",
            count: 1,
            nbt: "{slot:\"upgrades\"}"
        }
    }).id(`kubejs:tconstruct/creative_slot/upgrades`)
    //ae
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "BBBBBBBBB",
            "CCCCCCCCC",
            "DEEFGFEED",
            "HHGFDFGHH",
            "DEEFGFEED",
            "CCCCCCCCC",
            "BBBBBBBBB",
            "AAAAAAAAA"
        ],
        key: {
            A: {
                item: "aeadditions:item_storage_cell_16384"
            },
            B: {
                item: "aeadditions:fluid_storage_cell_4096"
            },
            C: {
                item: "aeadditions:chemical_storage_cell_4096"
            },
            D: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            E: {
                item: "appliedenergistics2:fluix_crystal"
            },
            F: {
                item: "appliedenergistics2:singularity"
            },
            G: {
                item: "extendedcrafting:ultimate_singularity"
            },
            H: {
                item: "lazierae2:fluix_steel_ingot"
            }
        },
        result: {
            item: 'appliedenergistics2:creative_storage_cell'
        }
    }).id(`kubejs:appliedenergistics2/creative_storage_cell`)
    //pnc
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "ABBCDCBBA",
            "BAECCCEAB",
            "BEAFGFAEB",
            "HIFJKJFIH",
            "IIGKGKGII",
            "HIFJKJFIH",
            "BEAFGFAEB",
            "BAECCCEAB",
            "ABBCDCBBA"
        ],
        key: {
            A: {
                item: "pneumaticcraft:advanced_liquid_compressor"
            },
            B: {
                item: "enderioalloys:item_alloy_ingot_end_steel"
            },
            C: {
                item: "pneumaticcraft:thermal_compressor"
            },
            D: {
                item: "pneumaticcraft:compressed_iron_gear"
            },
            E: {
                item: "pneumaticcraft:advanced_pcb"
            },
            F: {
                item: "pneumaticcraft:plastic_brick_white"
            },
            G: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            H: {
                item: "pneumaticcraft:advanced_air_compressor"
            },
            I: {
                item: "pneumaticcraft:flux_compressor"
            },
            J: {
                item: "pneumaticcraft:safety_tube_module"
            },
            K: {
                item: "extendedcrafting:ultimate_singularity"
            }
        },
        result: {
            item: 'pneumaticcraft:creative_compressor'
        }
    }).id(`kubejs:pneumaticcraft/creative_compressor`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " A     A ",
            "A AAAAA A",
            " ABBCBBA ",
            " ABDDDBA ",
            " ACDEDCA ",
            " ABDDDBA ",
            " ABBCBBA ",
            "A AAAAA A",
            " A     A "
        ],
        key: {
            A: {
                item: "pneumaticcraft:compressed_iron_block"
            },
            B: {
                item: "pneumaticcraft:heat_frame"
            },
            C: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            D: {
                item: "extendedcrafting:ultimate_singularity"
            },
            E: {
                item: "mekanism:resistive_heater"
            }
        },
        result: {
            item: 'pneumaticcraft:creative_compressed_iron_block'
        }
    }).id(`kubejs:pneumaticcraft/creative_compressed_iron_block`)
    //thermal
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAA ",
            "ABCBA",
            "ADEDA",
            "ABCBA",
            " AAA "
        ],
        key: {
            A: {
                item: "minecraft:flint"
            },
            B: {
                item: "extendedcrafting:ultimate_singularity"
            },
            C: {
                item: "allthecompressed:sand_block_4x"
            },
            D: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            E: {
                item: "allthecompressed:sand_block_8x"
            }
        },
        result: {
            item: 'thermal:machine_catalyst_creative_augment'
        }
    }).id(`kubejs:thermal/machine_catalyst_creative_augment`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "ABCBA",
            "BDEDB",
            "CDFDC",
            "BDEDB",
            "ABCBA"
        ],
        key: {
            A: {
                item: "thermal:enderium_block"
            },
            B: {
                item: "enderioalloys:item_alloy_ingot_redstone_alloy"
            },
            C: {
                item: "thermal:rf_coil"
            },
            D: {
                item: "extendedcrafting:ultimate_singularity"
            },
            E: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            F: {
                item: "allthecompressed:uranium_block_8x"
            }
        },
        result: {
            item: 'thermal:machine_efficiency_creative_augment'
        }
    }).id(`kubejs:thermal/machine_efficiency_creative_augment`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AABAA",
            "ACDCA",
            "BEFEB",
            "ACDCA",
            "AABAA"
        ],
        key: {
            A: {
                item: "mekanism:dynamic_tank"
            },
            B: {
                item: "pneumaticcraft:huge_tank"
            },
            C: {
                item: "extendedcrafting:ultimate_singularity"
            },
            D: {
                type: "forge:nbt",
                item: "thermal:fluid_cell",
                count: 1,
                nbt: "{BlockEntityTag:{TankInv:[{FluidName:\"minecraft:empty\",Capacity:32000,Tank:0b,Amount:0}]}}"
            },
            E: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            F: {
                item: "industrialforegoing:supreme_black_hole_tank"
            }
        },
        result: {
            item: 'thermal:fluid_tank_creative_augment'
        }
    }).id(`kubejs:thermal/fluid_tank_creative_augment`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "ABABA",
            "CDDDC",
            "AEFEA",
            "CDDDC",
            "ABABA"
        ],
        key: {
            A: {
                item: "mekanism:pellet_antimatter"
            },
            B: {
                item: "mekanism:ultimate_induction_provider"
            },
            C: {
                item: "mekanism:ultimate_induction_cell"
            },
            D: {
                item: "extendedcrafting:ultimate_singularity"
            },
            E: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            F: {
                item: "draconicevolution:reactor_core"
            }
        },
        result: {
            item: 'thermal:rf_coil_creative_augment'
        }
    }).id(`kubejs:thermal/rf_coil_creative_augment`)
    //mekansim
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAABBBAAA",
            "ACCCCCCCA",
            "ADEEDEEDA",
            "FGHHIHHGF",
            "FJIKLKIJF",
            "FMHHIHHMF",
            "ADEEDEEDA",
            "ACCCCCCCA",
            "AAABBBAAA"
        ],
        key: {
            A: {
                item: "pipez:infinity_upgrade"
            },
            B: {
                item: "mekanism:ultimate_induction_provider"
            },
            C: {
                item: "mekanism:pellet_antimatter"
            },
            D: {
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            E: {
                item: "draconicevolution:large_chaos_frag"
            },
            F: {
                item: "mekanism:ultimate_induction_cell"
            },
            G: {
                item: "chemlib:element_polonium"
            },
            H: {
                item: "draconicevolution:chaotic_core"
            },
            I: {
                item: "extendedcrafting:ultimate_singularity"
            },
            J: {
                item: "draconicevolution:awakened_draconium_block"
            },
            K: {
                item: "allthecompressed:nitro_crystal_block_4x"
            },
            L: {
                type: "forge:nbt",
                item: "mekanism:ultimate_energy_cube",
                count: 1,
                nbt: "{mekData:{EnergyContainers:[{Container:0b,stored:\"256000000\"}]}}"
            },
            M: {
                item: "chemlib:element_plutonium"
            }
        },
        result: {
            item: 'mekanism:creative_energy_cube'
        }
    }).id(`kubejs:mekanism/creative_energy_cube`)
    //creativerite
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
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
            item: 'upgradednetherite_creative:creative_upgraded_netherite_pickaxe',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:fortune\"}]}"
        }
    }).id(`kubejs:creativerite/pickaxe`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            B: {
                item: "kubejs:neutronium_ingot"
            }
        },
        result: {
            item: 'upgradednetherite_creative:creative_upgraded_netherite_axe'
        }
    }).id(`kubejs:creativerite/axe`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            B: {
                item: "kubejs:neutronium_ingot"
            }
        },
        result: {
            type: "forge:nbt",
            item: 'upgradednetherite_creative:creative_upgraded_netherite_shovel',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:fortune\"}]}"
        }
    }).id(`kubejs:creativerite/shovel`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
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
            item: "upgradednetherite_creative:creative_upgraded_netherite_sword",
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:looting\"},{lvl:100,id:\"minecraft:sweeping\"},{lvl:2147483647,id:\"minecraft:sharpness\"}]}"
        }
    }).id(`kubejs:creativerite/sword`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
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
            item: 'upgradednetherite_creative:creative_upgraded_netherite_bow',
            count: 1,
            nbt: "{Enchantments:[{lvl:1,id:\"minecraft:infinity\"},{lvl:2147483647,id:\"minecraft:power\"}]}"
        }
    }).id(`kubejs:creativerite/bow`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
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
            item: 'upgradednetherite_creative:creative_upgraded_netherite_helmet'
        }
    }).id(`kubejs:creativerite/helmet`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
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
            item: 'upgradednetherite_creative:creative_upgraded_netherite_chestplate'
        }
    }).id(`kubejs:creativerite/chestplate`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
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
            item: 'upgradednetherite_creative:creative_upgraded_netherite_leggings'
        }
    }).id(`kubejs:creativerite/leggings`)
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
                item: "upgradednetherite_creative:creative_upgraded_netherite_ingot"
            },
            C: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_boots",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'upgradednetherite_creative:creative_upgraded_netherite_boots'
        }
    }).id(`kubejs:creativerite/boots`)
})