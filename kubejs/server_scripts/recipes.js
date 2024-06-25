ServerEvents.recipes(event => {

    // Create Deco

    // Fix broken ladders
    event.remove({ id: 'createdeco:iron_ladder_from_plates_iron_stonecutting' })
    event.remove({ id: 'createdeco:gold_ladder_from_plates_gold_stonecutting' })
    event.remove({ id: 'createdeco:netherite_ladder_from_plates_netherite_stonecutting' })
    event.remove({ id: 'createdeco:zinc_ladder_from_plates_zinc_stonecutting' })
    event.remove({ id: 'createdeco:cast_iron_ladder_from_plates_cast_iron_stonecutting' })
    event.stonecutting('2x createdeco:iron_ladder', 'minecraft:iron_ingot')
    event.stonecutting('2x createdeco:gold_ladder', 'minecraft:gold_ingot')
    event.stonecutting('2x createdeco:netherite_ladder', 'minecraft:netherite_ingot')
    event.stonecutting('2x createdeco:zinc_ladder', 'create:zinc_ingot')
    event.stonecutting('2x createdeco:cast_iron_ladder', 'createdeco:cast_iron_ingot')

    // Supplementaries

    // Replace the rope from Supplementaries by the one from Farmer's Delight
    event.replaceOutput(
        { output: 'supplementaries:rope' },
        'supplementaries:rope',
        'farmersdelight:rope',
    );
    event.replaceInput(
        { input: 'supplementaries:rope' },
        'supplementaries:rope',
        'farmersdelight:rope',
    );

    // Fix broken gold gate recipe
    event.shaped('2x supplementaries:gold_gate', [
        'ABA',
        'ABA',
        '   '
    ], {
        A: 'minecraft:gold_nugget',
        B: 'minecraft:gold_ingot'
    });

});
