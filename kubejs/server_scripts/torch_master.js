onEvent('recipes', e => {
    e.remove({ output: 'torchmaster:frozen_pearl' })
    e.shapeless('torchmaster:frozen_pearl', ['minecraft:ender_pearl', 'occultism:brush'])
    modifyShaped(e, 'torchmaster:feral_flare_lantern', 1, ['CCC', 'CGC', 'CCC'], {
        C: 'pneumaticcraft:ingot_iron_compressed',
        G: 'minecraft:gold_ingot'
    })
    modifyShaped(e, 'torchmaster:megatorch', 1, ['FFF', 'EWE', 'LWL'], {
        F: 'torchmaster:feral_flare_lantern',
        E: 'thermal:enderium_ingot',
        L: 'thermal:lumium_block',
        W: '#minecraft:logs'
    })
})