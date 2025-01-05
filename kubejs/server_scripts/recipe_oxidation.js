ServerEvents.recipes(event => {

    const fluid = Fluid.of('minecraft:water', 8100);

    // Create: Bells & Whistles

    // Corrugated metro casing
    event.recipes.createFilling('bellsandwhistles:corrugated_metro_casing', [fluid, 'bellsandwhistles:metro_casing']);
    event.recipes.createSplashing('bellsandwhistles:corrugated_metro_casing', 'bellsandwhistles:metro_casing');

    // Corrugated metro panel
    event.recipes.createFilling('bellsandwhistles:corrugated_metro_panel', [fluid, 'bellsandwhistles:metro_panel']);
    event.recipes.createSplashing('bellsandwhistles:corrugated_metro_panel', 'bellsandwhistles:metro_panel');

    // Wetlands

    // Raw bog iron
    event.recipes.createCompacting('wetlands:raw_bog_iron', ['minecraft:raw_iron', fluid]);

    // Bog iron ingot
    event.recipes.createCompacting('wetlands:bog_iron_ingot', ['minecraft:iron_ingot', fluid]);

});
