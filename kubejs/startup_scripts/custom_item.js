// Listen to item registry event
onEvent('item.registry', e => {
    e.create('eternal_singularity')
        .maxStackSize(64)
        .displayName('§cEternal Singularity')
})