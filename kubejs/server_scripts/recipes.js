ServerEvents.recipes(event => {

    // Building Wands

    // Fix missing netherite wand recipe
    event.smithing('wands:netherite_wand', 'wands:diamond_wand', 'minecraft:netherite_ingot');

    // Create Crafts & Additions

    // Replace the zinc sheet from Create Crafts & Additions by the one from Create Deco
    event.remove({ output: 'createaddition:zinc_sheet' });
    event.replaceInput(
        { input: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        'createdeco:zinc_sheet',
    );

    // Create Deco

    // Fix broken ladders
    event.remove({ id: 'createdeco:iron_ladder_from_plates_iron_stonecutting' });
    event.remove({ id: 'createdeco:gold_ladder_from_plates_gold_stonecutting' });
    event.remove({ id: 'createdeco:netherite_ladder_from_plates_netherite_stonecutting' });
    event.remove({ id: 'createdeco:zinc_ladder_from_plates_zinc_stonecutting' });
    event.remove({ id: 'createdeco:cast_iron_ladder_from_plates_cast_iron_stonecutting' });
    event.stonecutting('2x createdeco:iron_ladder', 'minecraft:iron_ingot');
    event.stonecutting('2x createdeco:gold_ladder', 'minecraft:gold_ingot');
    event.stonecutting('2x createdeco:netherite_ladder', 'minecraft:netherite_ingot');
    event.stonecutting('2x createdeco:zinc_ladder', 'create:zinc_ingot');
    event.stonecutting('2x createdeco:cast_iron_ladder', 'createdeco:cast_iron_ingot');

    // Expanded Delight

    // Add salt recipe to make it renewable
    event.recipes.createMixing(
        'expandeddelight:ground_salt',
        [Fluid.of('minecraft:water', 81000)]
    ).heated();

    // Replace cheese recipes
    event.remove({ output: 'expandeddelight:cheese_wheel' });
    event.recipes.createMixing(
        'expandeddelight:cheese_wheel',
        [Fluid.of('milk:still_milk', 81000), 'expandeddelight:ground_salt']
    ).heated();

    // Farmer's Delight

    // Fix apple cider bottle volume inconsistency
    event.remove({ type: 'create:filling', output: 'farmersdelight:apple_cider' });
    event.recipes.createFilling(
        'farmersdelight:apple_cider',
        [Fluid.of('delightfulcreators:apple_cider', 27000), 'minecraft:glass_bottle']
    );

    // Remove hot cocoa recipe from chocolate and fix hot cocoa bottle volume inconsistency
    event.remove({ type: 'create:filling', output: 'farmersdelight:hot_cocoa' });
    event.recipes.createFilling(
        'farmersdelight:hot_cocoa',
        [Fluid.of('delightfulcreators:hot_cocoa', 27000), 'minecraft:glass_bottle']
    );

    // Fix melon juice bottle volume inconsistency
    event.remove({ type: 'create:filling', output: 'farmersdelight:melon_juice' });
    event.recipes.createFilling(
        'farmersdelight:melon_juice',
        [Fluid.of('delightfulcreators:melon_juice', 27000), 'minecraft:glass_bottle']
    );

    // We use the filling by spout recipe from Create
    event.remove({ id: 'farmersdelight:milk_bottle' });
    event.remove({ id: 'farmersdelight:milk_bucket_from_bottles' });

    // Supplementaries

    // Replace the rope from Supplementaries by the one from Farmer's Delight
    event.replaceOutput(
        { output: 'supplementaries:rope' },
        'supplementaries:rope',
        'farmersdelight:rope',
    );

    // Fix broken rope arrow recipes
    // We are not able to fix or remove rope arrow recipes, so we hide them. See `kubejs/client_scripts/rei.js`
    // event.remove({ id: 'supplementaries:rope_arrow_create_display' })
    // event.remove({ id: 'supplementaries:rope_arrow_add_display' })
    const MAX_DAMAGE_ROPE_ARROW = Item.of('supplementaries:rope_arrow').getMaxDamage();
    // Define the recipe for creating the rope arrow
    for (let i = 1; i <= 8; i++) {
        event.shapeless(
            Item.of('supplementaries:rope_arrow', { Damage: MAX_DAMAGE_ROPE_ARROW - i }),
            ['minecraft:arrow', `${i}x farmersdelight:rope`]
        );
    };
    // Define the recipe for repairing the rope arrow
    for (let j = 1; j <= MAX_DAMAGE_ROPE_ARROW; j++) {
        for (let i = 1; i <= Math.min(j, 8); i++) {
            let damagedRopeArrow = Item.of('supplementaries:rope_arrow', { Damage: j }).strongNBT();
            let repairedRopeArrow = Item.of('supplementaries:rope_arrow', { Damage: j - i });
            event.shapeless(
                repairedRopeArrow,
                [damagedRopeArrow, `${i}x farmersdelight:rope`]
            );
        };
    };

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
