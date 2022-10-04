onEvent('recipes', e => {
    //===== function =====//
    let shapedSurround = (colorItem, dye, array) => {
        e.shaped(Item.of(colorItem, 8), ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${dye}`,
            C: array
        }).id(`kubejs:${colorItem.replace(':', '/')}`);
    }
    colors.forEach(color => {
        //===== remove recipes =====//
        if (color !== 'white') {
            removeRecipeByID(e, [
                `minecraft:${color}_wool`,
                `minecraft:${color}_carpet_from_white_carpet`,
                `minecraft:${color}_stained_glass_plane_from_glass_pane`
            ]);
        };
        //===== readd recipe from colorless =====//
        e.shaped(`minecraft:${color}_stained_glass_pane`,['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${color}`,
            C: 'minecraft:glass_pane'
        }).id(`kubejs:minecraft/${color}_stained_glass_pane`);
    });
    //===== color variants conversion =====//
    colors.forEach(a => {
        //array initialise
        let wool = [];
        let carpet = [];
        let bed = [];
        let glass = [];
        let glassPane = [];
        let connectingGlass = [];
        let connectingGlassPane = [];
        colors.forEach(b => {
            //add specific color items into array
            if (a !== b) {
                wool.push(`minecraft:${b}_wool`);
                carpet.push(`minecraft:${b}_carpet`);
                bed.push(`minecraft:${b}_bed`);
                glass.push(`minecraft:${b}_stained_glass`);
                glassPane.push(`minecraft:${b}_stained_glass_pane`);
                connectingGlass.push(`connectedglass:borderless_glass_${b}`);
                connectingGlassPane.push(`connectedglass:borderless_glass_${b}_pane`);
            }
        })
        //add recipes using arrays
        e.shapeless(`minecraft:${a}_wool`, [`#forge:dyes/${a}`, wool]).id(`kubejs:minecraft/${a}_wool`);
        e.shapeless(`minecraft:${a}_bed`, [`#forge:dyes/${a}`, bed]).id(`kubejs:minecraft/${a}_bed`);
        shapedSurround(`minecraft:${a}_carpet`, a, carpet);
        shapedSurround(`minecraft:${a}_stained_glass`, a, glass);
        shapedSurround(`minecraft:${a}_stained_glass_pane`, a, glassPane);
        shapedSurround(`connectedglass:borderless_glass_${a}`, a, connectingGlass);
        shapedSurround(`connectedglass:borderless_glass_${a}_pane`, a, connectingGlassPane);
    });
    

});