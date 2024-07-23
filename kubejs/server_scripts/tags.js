ServerEvents.tags('item', event => {

    // Create

    // Tools
    event.add('c:tools', 'create:extendo_grip');
    event.add('c:tools', 'create:potato_cannon');
    event.add('c:tools', 'create:wand_of_symmetry');
    event.add('c:tools', 'create:wrench');
    event.add('c:mining_tools', 'create:wrench');

    // Upright on belt
    const uprightOnBeltItems = [
        // Bottles
        'mining_helmet:miner_charm',
        // Bowls
        'corndelight:nachos_bowl',
        'minecraft:bowl',
        'pickyourpoison:blue_poison_dart_frog_bowl',
        'pickyourpoison:crimson_poison_dart_frog_bowl',
        'pickyourpoison:golden_poison_dart_frog_bowl',
        'pickyourpoison:green_poison_dart_frog_bowl',
        'pickyourpoison:luxalamander_bowl',
        'pickyourpoison:orange_poison_dart_frog_bowl',
        'pickyourpoison:rana_bowl',
        'pickyourpoison:red_poison_dart_frog_bowl',
        // Buckets
        '#c:empty_buckets',
        '#c:honey_buckets',
        '#c:lava_buckets',
        '#c:milk_buckets',
        '#c:mob_buckets',
        '#c:water_buckets',
        'dehydration:purified_water_bucket',
        'minecraft:powder_snow_bucket',
        'naturalist:bass_bucket',
        'naturalist:catfish_bucket',
        'naturalist:snail_bucket',
        // Cakes
        'delightfulcreators:incomplete_sweet_berry_cheesecake',
        'farmersdelight:cake_slice',
        'farmersdelight:sweet_berry_cheesecake',
        'farmersdelight:sweet_berry_cheesecake_slice',
        // Drinks
        '#c:drinks',
        // Animal food
        'delightfulcreators:incomplete_horse_feed',
        'farmersdelight:dog_food',
        'farmersdelight:horse_feed',
        // Others
        'corndelight:cornbread_stuffing',
        'corndelight:creamed_corn',
        'expandeddelight:cinnamon_apples',
        'expandeddelight:cinnamon_rice',
        'expandeddelight:peanut_butter',
        'farmersdelight:bone_broth',
        'farmersdelight:cooked_rice',
        'farmersdelight:fried_rice',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:tomato_sauce',
        'oceansdelight:braised_sea_pickle',
        // Pasta
        'delightfulcreators:incomplete_pasta_with_meatballs',
        'delightfulcreators:incomplete_pasta_with_mutton_chop',
        'expandeddelight:peperonata',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:vegetable_noodles',
        'kubejs:incomplete_pasta_dish',
        'kubejs:incomplete_squid_ink_pasta',
        'kubejs:incomplete_vegetable_noodles',
        // Pies
        'delightfulcreators:incomplete_apple_pie',
        'delightfulcreators:incomplete_pumpkin_pie',
        'delightfulcreators:pumpkin_pie_slice',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:chocolate_pie_slice',
        'minecraft:apple_pie',
        'minecraft:pumpkin_pie',
        // Plates
        'delightfulcreators:incomplete_bacon_and_eggs',
        'delightfulcreators:incomplete_grilled_salmon',
        'delightfulcreators:incomplete_roasted_mutton_chops',
        'delightfulcreators:incomplete_steak_and_potatoes',
        'expandeddelight:asparagus_and_bacon_cheesy',
        'expandeddelight:mac_and_cheese',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:grilled_salmon',
        'farmersdelight:mushroom_rice',
        'farmersdelight:ratatouille',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:steak_and_potatoes',
        'nethersdelight:grilled_strider',
        'nethersdelight:warped_moldy_meat',
        // Salads
        'delightfulcreators:incomplete_fruit_salad',
        'delightfulcreators:incomplete_mixed_salad',
        'delightfulcreators:incomplete_nether_salad',
        'expandeddelight:peanut_salad',
        'expandeddelight:sweet_potato_salad',
        'farmersdelight:fruit_salad',
        'farmersdelight:mixed_salad',
        'farmersdelight:nether_salad',
        'oceansdelight:seagrass_salad',
        // Soups
        'corndelight:corn_soup',
        'expandeddelight:asparagus_soup',
        'expandeddelight:asparagus_soup_creamy',
        'expandeddelight:peanut_honey_soup',
        'farmersdelight:chicken_soup',
        'farmersdelight:noodle_soup',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:vegetable_soup',
        'minecraft:beetroot_soup',
        'oceansdelight:bowl_of_guardian_soup',
        // Special foods
        '#diet:special_food',
        'delightfulcreators:incomplete_honey_glazed_ham',
        'delightfulcreators:incomplete_rice_roll_medley',
        'delightfulcreators:incomplete_roast_chicken',
        'delightfulcreators:incomplete_shepherds_pie',
        'delightfulcreators:incomplete_stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:roast_chicken',
        'farmersdelight:shepherds_pie',
        'farmersdelight:stuffed_pumpkin',
        'nethersdelight:plate_of_stuffed_hoglin_ham',
        'nethersdelight:plate_of_stuffed_hoglin_roast',
        'nethersdelight:plate_of_stuffed_hoglin_snout',
        // Stews
        'ecologics:tropical_stew',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:beef_stew',
        'farmersdelight:fish_stew',
        'minecraft:mushroom_stew',
        'minecraft:rabbit_stew',
        'minecraft:suspicious_stew',
        'nethersdelight:strider_moss_stew',
        // Sweet Rolls
        'expandeddelight:berry_sweet_roll',
        'expandeddelight:glow_berry_sweet_roll',
        'expandeddelight:sweet_roll',
        'farmersdelight:wheat_dough',
        'kubejs:incomplete_sweet_roll'
    ];
    uprightOnBeltItems.forEach(item => {
        event.add('create:upright_on_belt', item);
    });

    // Create Goggles

    // Tools
    event.add('c:shears', 'creategoggles:modifier_remover');

    // Create Crafts & Additions

    // Allow seeds to be compacted to make seed oil
    event.add('c:seeds', 'supplementaries:flax_seeds');
    event.add('c:seeds', 'corndelight:corn_seeds');

    // Diet

    // Add special food
    event.add('diet:special_food', 'corndelight:nachos');
    event.add('diet:special_food', 'farmersdelight:honey_glazed_ham_block');
    event.add('diet:special_food', 'farmersdelight:rice_roll_medley_block');
    event.add('diet:special_food', 'farmersdelight:roast_chicken_block');
    event.add('diet:special_food', 'farmersdelight:shepherds_pie_block');
    event.add('diet:special_food', 'farmersdelight:stuffed_pumpkin_block');
    event.add('diet:special_food', 'nethersdelight:stuffed_hoglin');
    event.add('diet:special_food', 'oceansdelight:guardian_soup');

    // Farmer's Delight

    // Tools
    event.add('c:tools', 'farmersdelight:skillet');

    // Supplementaries

    // Tools
    event.add('c:tools', 'supplementaries:altimeter');
    event.add('c:tools', 'supplementaries:bubble_blower');
    event.add('c:tools', 'supplementaries:flute');
    event.add('c:tools', 'supplementaries:quiver');
    event.add('c:tools', 'supplementaries:slice_map');
    event.add('c:tools', 'supplementaries:slingshot');

});
