onEvent('recipes', e => {
    //===== remove recipes =====//
    colors.forEach(color => {
        if (color !== 'white') {
            removeRecipeByID(e, [
                `minecraft:${color}_wool`,
                `minecraft:${color}_carpet_from_white_carpet`
            ]);
        };
    });
    //===== color variants conversion =====//
    colors.forEach(a => {
        //array initialise
        let wool = [];
        let carpet = [];
        let bed = [];
        colors.forEach(b => {
            //add specific color items into array
            if (a !== b) {
                wool.push(`minecraft:${b}_wool`);
                carpet.push(`minecraft:${b}_carpet`);
                bed.push(`minecraft:${b}_bed`);
            }
        })
        //add recipes using arrays
        e.shapeless(`minecraft:${a}_wool`, [`#forge:dyes/${a}`, wool]).id(`kubejs:minecraft/${a}_wool`);
        e.shapeless(`minecraft:${a}_bed`, [`#forge:dyes/${a}`, bed]).id(`kubejs:minecraft/${a}_bed`);
        e.shaped(`8x minecraft:${a}_carpet`, ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${a}`,
            C: carpet
        }).id(`kubejs:minecraft/${a}_carpet`);
    });
    

});