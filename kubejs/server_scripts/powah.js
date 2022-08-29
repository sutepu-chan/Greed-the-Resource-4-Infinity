onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'powah:dielectric_paste'
    ])
    e.shapeless('4x powah:dielectric_paste', ['2x #minecraft:coals', 'powah:uraninite']).id(`kubejs:powah/dielectric_paste`)
    e.shapeless('40x powah:dielectric_paste', ['2x #forge:storage_blocks/coal', 'powah:uraninite_block']).id(`kubejs:powah/dielectric_paste/bulk`)
    let tiers = [
        'starter',
        'basic',
        'hardened',
        'blazing',
        'niotic',
        'spirited',
        'nitro'
    ]
    for (let i = 1; i<tiers.length; i++) {
        modifyShaped(e, `powah:reactor_${tiers[i]}`, 1, ['UCU', 'CRC', 'UCU'], {
            U: 'powah:uraninite',
            C: `powah:capacitor_${tiers[i]}`,
            R: `powah:reactor_${tiers[i-1]}`
        })
    }
})