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

    // Fix broken ladder recipes
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

    // Create

    // Fix mixing recipes display inconsistencies
    // Tea
    event.remove({ type: 'create:mixing', output: Fluid.of('create:tea') });
    event.recipes.createMixing(
        Fluid.of('create:tea', 54000),
        [{ tag: 'minecraft:leaves' }, Fluid.of('milk:still_milk', 27000), Fluid.of('create:chocolate', 27000)]
    );

    // Delightful Creators

    // Fix mixing recipes display inconsistencies
    // Hot cocoa
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:hot_cocoa') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:hot_cocoa', 40500),
        [Fluid.of('milk:still_milk', 20250), Fluid.of('create:chocolate', 20250)]
    );

    // Fix glass bottle volume inconsistency
    // Apple cider
    event.remove({ type: 'create:filling', output: 'farmersdelight:apple_cider' });
    event.recipes.createFilling(
        'farmersdelight:apple_cider',
        [Fluid.of('delightfulcreators:apple_cider', 27000), 'minecraft:glass_bottle']
    );
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:apple_cider') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:apple_cider', 27000),
        ['2x minecraft:apple', 'minecraft:sugar']
    );
    // Glow Berry Custard
    event.remove({ type: 'create:filling', output: 'farmersdelight:glow_berry_custard' });
    event.recipes.createFilling(
        'farmersdelight:glow_berry_custard',
        [Fluid.of('delightfulcreators:glow_berry_custard', 27000), 'minecraft:glass_bottle']
    );
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:glow_berry_custard') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:glow_berry_custard', 27000),
        [Fluid.of('milk:still_milk', 27000), { tag: 'c:eggs' }, 'minecraft:glow_berries', 'minecraft:sugar']
    );
    // Hot cocoa
    event.remove({ type: 'create:filling', output: 'farmersdelight:hot_cocoa' });
    event.recipes.createFilling(
        'farmersdelight:hot_cocoa',
        [Fluid.of('delightfulcreators:hot_cocoa', 27000), 'minecraft:glass_bottle']
    );
    // Melon juice
    event.remove({ type: 'create:filling', output: 'farmersdelight:melon_juice' });
    event.recipes.createFilling(
        'farmersdelight:melon_juice',
        [Fluid.of('delightfulcreators:melon_juice', 27000), 'minecraft:glass_bottle']
    );

    // Fix soup bowl volume inconsistency
    // Pumpkin soup
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:pumpkin_soup') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:pumpkin_soup', 27000),
        [Fluid.of('milk:still_milk', 27000), 'farmersdelight:pumpkin_slice', { tag: 'c:crops/cabbage' }, { tag: 'c:raw_pork' }]
    );

    // Farmer's Delight

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

    // Fix missing gold gate recipe
    event.shaped('2x supplementaries:gold_gate', [
        'ABA',
        'ABA',
        '   '
    ], {
        A: 'minecraft:gold_nugget',
        B: 'minecraft:gold_ingot'
    });

});
