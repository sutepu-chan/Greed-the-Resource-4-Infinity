onEvent('recipes', e => {
    //===== remove original recipe =====//
    e.remove({ id: 'akashictome:tome' })
    //===== renew recipe =====//
    e.shapeless(Item.of('akashictome:tome', {
        'akashictome:is_morphing': 1,
        'akashictome:data': {
            industrialforegoing: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'industrialforegoing:industrial_foregoing',
                    'akashictome:displayName': { text: "IndustrialForegoing'sManual" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"IndustrialForegoing"}]}'
                    }
                }
            },
            sushigocrafting: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'sushigocrafting:sushigocrafting',
                    'akashictome:displayName': { text: "BecomingAnItamae" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"SushiGoCrafting"}]}'
                    }
                }
            },
            theoneprobe: {
                id: 'theoneprobe:probenote',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "ProbeSetting" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TheOneProbe"}]}'
                    }
                }
            },
            ftbquests: {
                id: 'ftbquests:book',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "QuestBook" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FTBQuest"}]}'
                    }
                }
            },
            thermal: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'thermal:guidebook',
                    'akashictome:displayName': { text: "Thermalpedia" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ThermalSeries"}]}'
                    }
                }
            },
            rftoolsbase: {
                id: 'rftoolsbase:manual',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "TechnologyGuide" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"RFTools"}]}'
                    }
                }
            },
            powah: {
                id: 'powah:book',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "Powah!Manual" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Powah!"}]}'
                    }
                }
            },
            solpotato: {
                id: 'solpotato:food_book',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "SpiceOfLife:Potato" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FoodBook"}]}'
                    }
                }
            },
            mysticalagriculture: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'mysticalagriculture:guide',
                    'akashictome:displayName': { text: "MysticalAgriculture" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MysticalAgriculture"}]}'
                    }
                }
            },
            engineersdecor: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'engineersdecor:engineersdecor_manual',
                    'akashictome:displayName': { text: "EngineersDecor" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"EngineersDecor"}]}'
                    }
                }
            },
            extendedcrafting: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'extendedcrafting:guide',
                    'akashictome:displayName': { text: "ExtendedCrafting" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ExtendedCrafting"}]}'
                    }
                }
            },
            tconstruct: {
                id: 'tconstruct:encyclopedia',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "TinkerEncyclopedia" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TinkersConstruct"}]}'
                    }
                }
            },
            tmechworks: {
                id: 'tmechworks:book',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "TinkerMechworks" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TinkerMechworks"}]}'
                    }
                }
            },
            occultism: {
                id: 'occultism:dictionary_of_spirits',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "DictionaryOfSpirits" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Occultism"}]}'
                    }
                }
            },
            pneumaticcraft: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'pneumaticcraft:book',
                    'akashictome:displayName': { text: "PNC:R" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"PneumaticCraft"}]}'
                    }
                }
            },
            eidolon: {
                id: 'eidolon:codex',
                Count: 1,
                tag: {
                    'akashictome:displayName': { text: "ArsEcclesia" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Eidolon"}]}'
                    }
                }
            },
            alchemistry: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'alchemistry:alchemistry_book',
                    'akashictome:displayName': { text: "Alchemistry" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Alchemistry"}]}'
                    }
                }
            },
            advancedperipherals: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'advancedperipherals:manual',
                    'akashictome:displayName': { text: "AdvancedPeripherals" },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"AdvancedPeripherals"}]}'
                    }
                }
            },

        }
    }), 'minecraft:stick').id(`kubejs:akashik_tome`)
    removeRecipeByOutput(e, [
        Item.of('patchouli:guide_book', '{"patchouli:book":"engineersdecor:engineersdecor_manual"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"sushigocrafting:sushigocrafting"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"alchemistry:alchemistry_book"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"advancedperipherals:manual"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"advancedperipherals:manual"}'),
        'tmechworks:book',
        'theoneprobe:probenote',
        'tconstruct:encyclopedia',
        'powah:book',
        'rftoolsbase:manual',
        'solpotato:food_book',
        'ftbquests:book',
        'occultism:dictionary_of_spirits'
    ])
})

