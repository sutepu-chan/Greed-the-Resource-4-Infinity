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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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
                item: "endless:infinity_ingot"
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

})