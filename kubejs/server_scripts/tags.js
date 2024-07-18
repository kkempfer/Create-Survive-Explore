ServerEvents.tags('item', event => {

    // Create

    // Tools
    event.add('c:tools', 'create:extendo_grip');
    event.add('c:tools', 'create:potato_cannon');
    event.add('c:tools', 'create:wand_of_symmetry');
    event.add('c:tools', 'create:wrench');
    event.add('c:mining_tools', 'create:wrench');

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

    // Supplementaries

    // Tools
    event.add('c:tools', 'supplementaries:altimeter');
    event.add('c:tools', 'supplementaries:bubble_blower');
    event.add('c:tools', 'supplementaries:flute');
    event.add('c:tools', 'supplementaries:quiver');
    event.add('c:tools', 'supplementaries:slice_map');
    event.add('c:tools', 'supplementaries:slingshot');

});
