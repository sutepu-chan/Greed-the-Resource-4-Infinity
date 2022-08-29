onEvent('recipes', e => {
    e.shaped('4x framedblocks:framed_cube', ['PRP', 'R R', 'PRP'], {
        P: '#minecraft:planks',
        R: '#forge:rods/wooden'
    }).id(`kubejs:framed_cube/var_1`)
    e.shaped('4x framedblocks:framed_cube', ['RPR', 'P P', 'RPR'], {
        P: '#minecraft:planks',
        R: '#forge:rods/wooden'
    }).id(`kubejs:framed_cube/var_2`)
    let framedWoodcutting = (e, entries) => {
        entries.forEach(([output, count]) => {
            e.custom({
                type: "corail_woodcutter:woodcutting",
                ingredient: { item: "framedblocks:framed_cube" },
                result: output,
                count: count
            }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
            switch (count) {
                case 1:
                    e.shapeless('framedblocks:framed_cube', output).id(`kubejs:${output.replace(':', '/')}/recycle_${count}`)
                    break;
                case 2:
                    e.shaped('framedblocks:framed_cube', ['BB'], {
                        B: output
                    }).id(`kubejs:${output.replace(':', '/')}/recycle_${count}_horizontal`)
                    e.shaped('framedblocks:framed_cube', ['B', 'B'], {
                        B: output
                    }).id(`kubejs:${output.replace(':', '/')}/recycle_${count}_vertical`)
                    break;
                case 3:
                    e.shaped('framedblocks:framed_cube', ['BBB'], {
                        B: output
                    }).id(`kubejs:${output.replace(':', '/')}/recycle_${count}_horizontal`)
                    e.shaped('framedblocks:framed_cube', ['B', 'B', 'B'], {
                        B: output
                    }).id(`kubejs:${output.replace(':', '/')}/recycle_${count}_vertical`)
                    break;
                case 4:
                    e.shaped('framedblocks:framed_cube', ['BB', 'BB'], {
                        B: output
                    }).id(`kubejs:${output.replace(':', '/')}/recycle_${count}`)
                    break;
            }
        })
    }
    framedWoodcutting(e, [
        ['framedblocks:framed_half_stairs', 2],
        ['framedblocks:framed_slope', 1],
        ['framedblocks:framed_corner_slope', 1],
        ['framedblocks:framed_inner_corner_slope', 1],
        ['framedblocks:framed_prism_corner', 1],
        ['framedblocks:framed_inner_prism_corner', 1],
        ['framedblocks:framed_threeway_corner', 1],
        ['framedblocks:framed_inner_threeway_corner', 1],
        ['framedblocks:framed_slab', 2],
        ['framedblocks:framed_slab_edge', 4],
        ['framedblocks:framed_slab_corner', 4],
        ['framedblocks:framed_panel', 2],
        ['framedblocks:framed_corner_pillar', 2],
        ['framedblocks:framed_stairs', 1],
        ['framedblocks:framed_wall', 1],
        ['framedblocks:framed_fence', 1],
        ['framedblocks:framed_gate', 1],
        ['framedblocks:framed_door', 1],
        ['framedblocks:framed_trapdoor', 1],
        ['framedblocks:framed_pressure_plate', 1],
        ['framedblocks:framed_ladder', 1],
        ['framedblocks:framed_button', 1],
        ['framedblocks:framed_lever', 1],
        ['framedblocks:framed_sign', 1],
        ['framedblocks:framed_double_slope', 1],
        ['framedblocks:framed_double_corner', 1],
        ['framedblocks:framed_double_prism_corner', 1],
        ['framedblocks:framed_double_threeway_corner', 1],
        ['framedblocks:framed_half_pillar', 2],
        ['framedblocks:framed_post', 1],
        ['framedblocks:framed_floor_board', 1],
        ['framedblocks:framed_lattice_block', 1],
        ['framedblocks:framed_vertical_stairs', 1],
        ['framedblocks:framed_chest', 1],
        ['framedblocks:framed_bars', 1],
        ['framedblocks:framed_pane', 3],
        ['framedblocks:framed_flower_pot', 1],
        ['framedblocks:framed_pillar', 1],
        ['framedblocks:framed_double_slope_slab', 1],
        ['framedblocks:framed_inv_double_slope_slab', 1],
        ['framedblocks:framed_sloped_prism', 2],
        ['framedblocks:framed_slope_slab', 2],
        ['framedblocks:framed_elevated_slope_slab', 1]
    ])
    removeRecipeByOutput(e, [
        'framedblocks:framed_cube',
        'framedblocks:framed_double_prism_corner',
        'framedblocks:framed_double_corner',
        'framedblocks:framed_door',
        'framedblocks:framed_corner_slope',
        'framedblocks:framed_corner_pillar',
        'framedblocks:framed_chest',
        'framedblocks:framed_button',
        'framedblocks:framed_bars',
        'framedblocks:framed_threeway_corner',
        'framedblocks:framed_stairs',
        'framedblocks:framed_slope',
        'framedblocks:framed_slab_edge',
        'framedblocks:framed_slab_corner',
        'framedblocks:framed_slab',
        'framedblocks:framed_sign',
        'framedblocks:framed_prism_corner',
        'framedblocks:framed_pressure_plate',
        'framedblocks:framed_post',
        'framedblocks:framed_pillar',
        'framedblocks:framed_panel',
        'framedblocks:framed_floor_board',
        'framedblocks:framed_flower_pot',
        'framedblocks:framed_gate',
        'framedblocks:framed_half_pillar',
        'framedblocks:framed_half_stairs',
        'framedblocks:framed_inner_corner_slope',
        'framedblocks:framed_inner_prism_corner',
        'framedblocks:framed_inner_threeway_corner',
        'framedblocks:framed_ladder',
        'framedblocks:framed_lattice_block',
        'framedblocks:framed_lever',
        'framedblocks:framed_pane',
        'framedblocks:framed_fence',
        'framedblocks:framed_double_threeway_corner',
        'framedblocks:framed_double_slope',
        'framedblocks:framed_wall',
        'framedblocks:framed_vertical_stairs',
        'framedblocks:framed_trapdoor',
        'framedblocks:framed_inv_double_slope_slab',
        'framedblocks:framed_double_slope_slab',
        'framedblocks:framed_sloped_prism',
        'framedblocks:framed_slope_slab',
        'framedblocks:framed_elevated_slope_slab',
    ])
})