ServerEvents.recipes(event => {

    const volume = 8100;

    // Create: Bells & Whistles

    // Corrugated metro casing
    event.recipes.createFilling('bellsandwhistles:corrugated_metro_casing', [Fluid.of('minecraft:water', volume), 'bellsandwhistles:metro_casing'])
    event.recipes.createSplashing('bellsandwhistles:corrugated_metro_casing', 'bellsandwhistles:metro_casing');

    // Corrugated metro panel
    event.recipes.createFilling('bellsandwhistles:corrugated_metro_panel', [Fluid.of('minecraft:water', volume), 'bellsandwhistles:metro_panel'])
    event.recipes.createSplashing('bellsandwhistles:corrugated_metro_panel', 'bellsandwhistles:metro_panel');

    // Wetlands

    // Raw bog iron
    event.recipes.createCompacting(
        'wetlands:raw_bog_iron',
        ['minecraft:raw_iron', Fluid.of('minecraft:water', volume)]
    );

    // Bog iron ingot
    event.recipes.createCompacting(
        'wetlands:bog_iron_ingot',
        ['minecraft:iron_ingot', Fluid.of('minecraft:water', volume)]
    );

});
