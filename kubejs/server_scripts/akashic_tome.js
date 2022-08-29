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
                    'akashictome:displayName': {
                        text: "IndustrialForegoing'sManual"
                    },
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"IndustrialForegoing"}]}'
                    }
                }
            },
            sushigocrafting: {
                id: "patchouli:guide_book",
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'BecomingAnItamae'
                    },
                    "patchouli:book": "sushigocrafting:sushigocrafting",
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"BecomingAnItamae"}]}'
                    }
                }
            },
            theoneprobe: {
                id: 'theoneprobe:probenote',
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'ProbeSettings'
                    },
                    'akashictome:is_morphing': 1
                }
            },
            ftbquests: {
                id: 'ftbquests:book',
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'QuestBook'
                    },
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
                    'akashictome:displayName': {
                        text: 'Thermalpedia'
                    },
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ThermalGuide"}]}'
                    }
                }
            },
            rftoolsbase: {
                id: 'rftoolsbase:manual',
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'TechnologyGuide'
                    },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"RFToolsGuide"}]}'
                    }
                }
            },
            powah: {
                id: 'powah:book',
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'Powah!Manual'
                    },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Powah!"}]}'
                    }
                }
            },
            solpotato: {
                id: "solpotato:food_book",
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'SpiceOfLife:Potato'
                    },
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
                    'akashictome:displayName': {
                        text: 'MysticalAgriculture'
                    },
                    'patchouli:book': 'mysticalagriculture:guide',
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
                    'akashictome:displayName': {
                        text: "Engineer'sDecor"
                    },
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
                    'akashictome:displayName': {
                        text: "ExtendedCrafting"
                    },
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ExtendedCrafting"}]}'
                    }
                }
            },
            tconstruct: {
                id: "tconstruct:encyclopedia",
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'Encyclopedia'
                    },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopedia"}]}'
                    }
                }
            },
            tmechworks: {
                id: "tmechworks:book",
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'TinkerMechworks'
                    },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TinkerMechworks"}]}'
                    }
                }
            },
            occultism: {
                id: "occultism:dictionary_of_spirits",
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: 'DictionaryOfSpirits'
                    },
                    'akashictome:is_morphing': 1,
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"DictionaryOfSpirits"}]}'
                    }
                }
            },
            pneumaticcraft: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'pneumaticcraft:book',
                    'akashictome:displayName': {
                        text: "Pneumaticcraft"
                    },
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"PNC:R"}]}'
                    }
                }
            },
            eidolon: {
                id: 'eidolon:codex',
                Count: 1,
                tag: {
                    'akashictome:displayName': {
                        text: "Eidolon"
                    },
                    display: {
                        Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ArsEcclesia"}]}'
                    }
                }
            },
            alchemistry: {
                id: 'patchouli:guide_book',
                Count: 1,
                tag: {
                    'patchouli:book': 'alchemistry:alchemistry_book',
                    'akashictome:displayName': {
                        text: "Alchemistry"
                    },
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
                    'akashictome:displayName': {
                        text: "AdvancedPeripherals"
                    },
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

