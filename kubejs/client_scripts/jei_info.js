onEvent('jei.information', e => {
    //===== color conversion =====//
    let colorRecipeInfo = (variants) => {
        variants.forEach(variant => {
            e.add(variant, 'Can be crafted with any colour.')
        })
    }
    colorRecipeInfo([
        /minecraft:.+_bed/,
        /minecraft:.+_wool/,
        /minecraft:.+_concrete_powder/,
        /minecraft:.+_concrete/,
        /minecraft:.+_carpet/,
        /minecraft:.+_wool/,
        /minecraft:.+_stained_glass/,
        /minecraft:.+_stained_glass_pane/,
        /thermal:.+_rockwool/,
        /connectedglass:borderless_glass_.+/,
        /connectedglass:clear_glass_.+/,
        /connectedglass:scratched_glass_.+/,
        /connectedglass:tinted_borderless_glass_.+/,
        /connectedglass:borderless_glass_.+_pane/,
        /connectedglass:clear_glass_.+_pane/,
        /connectedglass:scratched_glass_.+_pane/,
        /absentbydesign:slab_glass_.+/,
        /absentbydesign:stairs_glass_.+/,
        /absentbydesign:wall_glass_.+/,
        /absentbydesign:stairs_wool_.+/,
        /absentbydesign:slab_wool_.+/,
        /absentbydesign:slab_concrete_.+/,
        /absentbydesign:slab_terracotta_.+/,
        /absentbydesign:stairs_concrete_.+/,
        /absentbydesign:stairs_terracotta_.+/,
        /botanypotstiers:elite_.+_botany_pot/,
        /botanypotstiers:ultra_.+_botany_pot/,
        /botanypotstiers:creative_.+_botany_pot/,
        /botanypots:.+_botany_pot/,
        /botanypotstiers:creative_hopper_.+_botany_pot/,
        /botanypotstiers:elite_hopper_.+_botany_pot/,
        /botanypotstiers:ultra_hopper_.+_botany_pot/,
        /botanypots:hopper_.+_botany_pot/,
        /waystones:.+_sharestone/
    ])
    //===== draconic evolution =====//
    e.add('draconicevolution:chaos_shard', 'Obtained by defeating chaos guardian spawning every 20000 blocks in the End dimension.')
    //===== sushigocrafting =====//
    e.add('sushigocrafting:nori_sheets', 'Obtain by putting "Dried Seaweed Block" on an iron block and press it by piston.')
    //===== tinker =====//
    e.add('tconstruct:tinker_station', 'Can be crafted with any types of wood.')
    e.add('tconstruct:part_builder', 'Can be crafted with any types of wood.')
    //===== eidolon ======//
    e.add('eidolon:unholy_symbol', 'Obtained by performing Touch of Darkness pray to pewter inlay.')
    e.add('eidolon:soul_shard', 'Obtained by performing rituals with bone meal on brazier, 2x redstone on stone hand and sacrifice 1x undead creature.')
    //===== waystone =====//
    e.add('waystones:return_scroll', 'Return to your previous waystone.')
    e.add('waystones:bound_scroll', 'RC to bind to a waystone. Hold RC to teleport to the binded waystone.')
    e.add('waystones:warp_scroll', 'Allows you to teleport to any activated waystone.')
    e.add('waystones:attuned_shard', 'Obtain by placing warp plate down. Place A attuned shard from A warp plate into B warp plate, and place B attuned shard into A warp plate creates a bi-directional teleportation.')
    //===== guide book =====//
    utils.listOf([
        Item.of('patchouli:guide_book', '{"patchouli:book":"engineersdecor:engineersdecor_manual"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"sushigocrafting:sushigocrafting"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'),
        Item.of('patchouli:guide_book', '{"patchouli:book":"alchemistry:alchemistry_book"}'),
        'tmechworks:book',
        'theoneprobe:probenote',
        'tconstruct:encyclopedia',
        'powah:book',
        'rftoolsbase:manual',
        'solpotato:food_book',
        'ftbquests:book',
        'golems:info_book',
        'occultism:dictionary_of_spirits'
    ]).forEach(book => {
        e.add(book, 'Uncraftable! Check Akashic Tome.')
    })

    //===== ender storage =====//
    e.add('enderstorage:ender_chest', [
        'Cross-dimensional wireless item transfer to any chest on the same channel.',
        'Use dye on the colored bars to set the channel.',
        'Use a diamond on the latch to switch to private channel.',
    ])
    e.add('enderstorage:ender_tank', [
        'Cross-dimensional wireless fluid transfer to any tank on the same channel.',
        'Use dye on the colored bars to set the channel.',
        'Use a diamond on the latch to switch to private channel.',
    ])
    //===== AE2 =====//
    e.add('appliedenergistics2:quantum_entangled_singularity', [
        'Throw a AE2 singularity and Ender Pearl on the ground and then subected to an explosion.',
        'Tiny TNT is recommended due to limited terrain damage.',
        'Use Ender Pearl instead of Ender Pearl Dust!!!'
    ])
    //===== avraitia =====//
    e.add('endless:matter_cluster', 'Obtained by avaritia tools.')
    //===== misc =====//
    e.add('akashictome:tome', 'RC to open the book and choose the desired guide book. LC in the air will return to akashic tome.')
})