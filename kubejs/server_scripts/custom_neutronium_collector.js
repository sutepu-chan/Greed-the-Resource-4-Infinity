onEvent('recipes', e => {
    e.recipes.custommachinery.custom_machine('custommachinery:neutronium_collector', 5000)
        .requireEnergyPerTick(10000)
        .produceItem('kubejs:neutron_pile', 'neutron_output')
    e.custom({
        type: 'draconicevolution:fusion_crafting',
        result: {
            type: 'forge:nbt',
            item: 'custommachinery:custom_machine_item',
            count: 1,
            nbt: '{machine:\"custommachinery:neutronium_collector\"}'
        },
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
})
