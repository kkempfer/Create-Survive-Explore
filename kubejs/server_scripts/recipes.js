ServerEvents.recipes(event => {

    // Vanilla

    // Add nametag recipe
    event.shaped('minecraft:name_tag', [
        ' AA',
        'BCA',
        'CB '
    ], {
        A: 'minecraft:string',
        B: 'minecraft:paper',
        C: 'minecraft:iron_ingot'
    });

    // Create

    // Replace the dough from Create by the one from Farmer's Delight
    event.replaceOutput(
        { output: 'create:dough' },
        'create:dough',
        'farmersdelight:wheat_dough',
    );
    // Manage Vanilla recipes. We manage the modded ones via a data pack
    event.remove({ id: 'create:smelting/bread' });
    event.remove({ id: 'create:smoking/bread' });
    let vanillaCraftingTypes = [
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless',
        'minecraft:campfire_cooking'
    ];
    vanillaCraftingTypes.forEach(type => {
        event.replaceInput(
            { type: type, input: 'create:dough' },
            'create:dough',
            'farmersdelight:wheat_dough',
        );
    });

    // We use the sweet roll from Expanded Delight
    event.remove({ output: 'create:sweet_roll' });

    // Create Crafts & Additions

    // Remove overpowered pale gold amulet
    event.remove({ output: 'createaddition:electrum_amulet' });

    // There is no silver in this modpack
    event.remove({ type: 'create:mixing', output: 'createaddition:electrum_ingot' });

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

    // Replace cheese recipes
    event.remove({ output: 'expandeddelight:cheese_wheel' });
    event.recipes.createMixing(
        'expandeddelight:cheese_wheel',
        [Fluid.of('milk:still_milk', 81000), 'expandeddelight:ground_salt']
    ).heated();

    // Add salt recipe to make it renewable
    event.recipes.createMixing(
        'expandeddelight:ground_salt',
        [Fluid.of('minecraft:water', 81000)]
    ).heated();

    // Farmer's Delight

    // Replace the fried egg from Farmer's Delight by the cooked egg from Naturalist
    event.remove({ output: 'farmersdelight:fried_egg' });
    event.replaceInput(
        { input: 'farmersdelight:fried_egg' },
        'farmersdelight:fried_egg',
        'naturalist:cooked_egg',
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
    }
    // Define the recipe for repairing the rope arrow
    for (let j = 1; j <= MAX_DAMAGE_ROPE_ARROW; j++) {
        for (let i = 1; i <= Math.min(j, 8); i++) {
            let damagedRopeArrow = Item.of('supplementaries:rope_arrow', { Damage: j }).strongNBT();
            let repairedRopeArrow = Item.of('supplementaries:rope_arrow', { Damage: j - i });
            event.shapeless(
                repairedRopeArrow,
                [damagedRopeArrow, `${i}x farmersdelight:rope`]
            );
        }
    }

    // Fix missing gold gate recipe
    event.shaped('2x supplementaries:gold_gate', [
        'ABA',
        'ABA',
        '   '
    ], {
        A: 'minecraft:gold_nugget',
        B: 'minecraft:gold_ingot'
    });

    // Wetlands

    // Add raw bog iron recipe
    event.recipes.createCompacting(
        'wetlands:raw_bog_iron',
        ['minecraft:raw_iron', Fluid.of('minecraft:water', 27000)]
    );

    // Add bog iron recipe to make it renewable
    event.recipes.createCompacting(
        'wetlands:bog_iron_ingot',
        ['minecraft:iron_ingot', Fluid.of('minecraft:water', 27000)]
    );

    // Fix missing bog iron grate recipe
    event.shaped('2x wetlands:bog_iron_grate', [
        'AAA',
        'AAA',
        '   '
    ], {
        A: 'wetlands:bog_iron_ingot'
    });

    // Fix missing tattered bog iron block recipe
    event.recipes.createCompacting(
        'wetlands:tattered_bog_iron_block',
        ['wetlands:bog_iron_block']
    );

});
