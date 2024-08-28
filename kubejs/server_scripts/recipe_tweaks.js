ServerEvents.recipes(event => {

    // Vanilla

    // We use the Create recipes
    event.remove({ id: 'minecraft:andesite' });
    event.remove({ id: 'minecraft:diorite' });
    event.remove({ id: 'minecraft:granite' });

    // Add calcite recipe to make it renewable
    event.recipes.createCompacting(
        'minecraft:calcite',
        ['2x minecraft:bone_meal', 'minecraft:cobblestone', Fluid.of('minecraft:lava', 8100)]
    );

    // Add deepslate recipe to make it renewable
    event.recipes.createCompacting(
        'minecraft:deepslate',
        ['4x minecraft:cobblestone', Fluid.of('minecraft:lava', 8100)]
    ).heated();

    // There is no quartz in diorite
    event.remove({ input: '#create:stone_types/diorite', output: 'minecraft:quartz' });

    // Add nametag recipe
    event.shaped('minecraft:name_tag', [
        ' SS',
        'PIS',
        'IP '
    ], {
        S: 'minecraft:string',
        P: 'minecraft:paper',
        I: 'minecraft:iron_ingot'
    });

    // Add tuff recipe to make it renewable
    event.recipes.createCompacting(
        'minecraft:tuff',
        ['2x create:scoria', 'minecraft:cobbled_deepslate', Fluid.of('minecraft:lava', 8100)]
    );

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

    // Add rock recipes to make them renewable
    event.recipes.createCompacting(
        'create:asurine',
        ['2x minecraft:tuff', 'minecraft:andesite', Fluid.of('minecraft:lava', 40500)]
    );
    event.recipes.createCompacting(
        'create:crimsite',
        ['2x minecraft:tuff', 'minecraft:diorite', Fluid.of('minecraft:lava', 40500)]
    );
    event.recipes.createCompacting(
        'create:ochrum',
        ['2x minecraft:tuff', 'minecraft:granite', Fluid.of('minecraft:lava', 40500)]
    );
    event.recipes.createCompacting(
        'create:veridium',
        ['2x minecraft:tuff', 'create:limestone', Fluid.of('minecraft:lava', 40500)]
    );

    // Tea
    event.remove({ type: 'create:mixing', output: Fluid.of('create:tea') });
    event.recipes.createMixing(
        Fluid.of('create:tea', 54000),
        [{ tag: 'minecraft:leaves' }, Fluid.of('minecraft:water', 27000), Fluid.of('milk:still_milk', 27000)]
    ).heated();

    // We use the sweet roll from Expanded Delight
    event.remove({ output: 'create:sweet_roll' });

    // Create Crafts & Additions

    // Remove overpowered pale gold amulet
    event.remove({ output: 'createaddition:electrum_amulet' });

    // There is no silver in this modpack
    event.remove({ type: 'create:mixing', output: 'createaddition:electrum_ingot' });

    // Fix broken small connector with light recipe
    event.remove({ id: 'createaddition:crafting/small_light_connector' })
    event.shapeless(
        'createaddition:small_light_connector',
        ['#c:wires/iron', '#c:colorless_glass', 'createaddition:connector']
    );

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

    // Delightful Creators

    // Apple cider
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:apple_cider') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:apple_cider', 27000),
        ['2x minecraft:apple', 'minecraft:sugar']
    );
    event.remove({ type: 'create:filling', output: 'farmersdelight:apple_cider' });
    event.recipes.createFilling(
        'farmersdelight:apple_cider',
        [Fluid.of('delightfulcreators:apple_cider', 27000), 'minecraft:glass_bottle']
    );

    // Glow Berry Custard
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:glow_berry_custard') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:glow_berry_custard', 27000),
        [Fluid.of('milk:still_milk', 27000), { tag: 'c:eggs' }, 'minecraft:glow_berries', 'minecraft:sugar']
    );
    event.remove({ type: 'create:filling', output: 'farmersdelight:glow_berry_custard' });
    event.recipes.createFilling(
        'farmersdelight:glow_berry_custard',
        [Fluid.of('delightfulcreators:glow_berry_custard', 27000), 'minecraft:glass_bottle']
    );

    // Hot cocoa
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:hot_cocoa') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:hot_cocoa', 54000),
        [Fluid.of('milk:still_milk', 27000), Fluid.of('create:chocolate', 27000)]
    ).heated();
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

    // Pumpkin soup
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:pumpkin_soup') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:pumpkin_soup', 27000),
        [Fluid.of('milk:still_milk', 27000), 'farmersdelight:pumpkin_slice', { tag: 'c:crops/cabbage' }, { tag: 'c:raw_pork' }]
    ).heated();

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

    // Man of many planes

    // Economy plane
    event.remove({ output: 'man_of_many_planes:economy_plane' });
    event.recipes.createMechanicalCrafting('man_of_many_planes:economy_plane', [
        '   S ',
        'S TSP',
        'HH_EC',
        'S TSP',
        '   S '
    ], {
        H: 'immersive_aircraft:hull',
        E: 'immersive_aircraft:boiler',
        P: 'immersive_aircraft:propeller',
        S: 'immersive_aircraft:sail',
        C: 'immersive_aircraft:industrial_gears',
        T: 'create:fluid_tank',
        _: '#create:seats'
    });

    // Scarlet plane
    event.remove({ output: 'man_of_many_planes:scarlet_biplane' });
    event.recipes.createMechanicalCrafting('man_of_many_planes:scarlet_biplane', [
        '   S ',
        'S TSp',
        'HH_EP',
        'S TSp',
        '   S '
    ], {
        H: 'immersive_aircraft:hull_reinforcement',
        E: 'immersive_aircraft:engine',
        P: 'immersive_aircraft:enhanced_propeller',
        S: 'immersive_aircraft:sail',
        p: 'immersive_aircraft:sturdy_pipes',
        T: 'immersive_aircraft:steel_boiler',
        _: '#create:seats'
    });

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
