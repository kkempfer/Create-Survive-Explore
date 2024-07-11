// Hide multiple items from REI. This does not remove recipes
REIEvents.hide('item', event => {
    let itemsToHide = [

        // Create Crafts & Additions

        // Accumulators are deprecated
        'createaddition:accumulator',
        // We do not use ComputerCraft
        'createaddition:digital_adapter',
        // We use the zinc sheet from Create Deco
        'createaddition:zinc_sheet',

        // Supplementaries

        // Redstone
        // The speaker block is not compatible with the Mindful Darkness mod
        'supplementaries:speaker_block',
        'supplementaries:bellows',
        'supplementaries:spring_launcher',
        'supplementaries:turn_table',
        'supplementaries:pulley_block',
        'supplementaries:crystal_display',
        'supplementaries:clock_block',
        'supplementaries:crank',
        'supplementaries:cog_block',
        'supplementaries:lock_block',
        'supplementaries:dispenser_minecart',
        'supplementaries:relayer',

        // Functional
        // We use the rope from Farmer's Delight
        // 'supplementaries:rope',
        'supplementaries:urn',

        // Building
        // The blackboard is not compatible with the Mindful Darkness mod
        'supplementaries:blackboard',
        /supplementaries:timber_[a-z][a-z_]*[a-z]\b/,
        'supplementaries:notice_board',
        /supplementaries:flag_[a-z][a-z_]*[a-z]\b/,
        /supplementaries:lapis_bricks(_[_a-z]*[a-z])?\b/,
        /supplementaries:[a-z][a-z_]*[a-z]_lamp\b/,
        /supplementaries:stone_tile(_[_a-z]*[a-z])?\b/,
        /supplementaries:blackstone_tile(_[_a-z]*[a-z])?\b/,
        /supplementaries:sconce(_[_a-z]*[a-z])?\b/,
        // There is no silver in this modpack
        /supplementaries:silver(_[_a-z]*[a-z])?\b/,
        // There is no lead in this modpack
        /supplementaries:lead(_[_a-z]*[a-z])?\b/,
        'supplementaries:crimson_lantern',
        // The Quark mod is not in this modpack
        'supplementaries:checker_vertical_slab',
        'supplementaries:raked_gravel',

        // Tools
        // The Create Wrench is the one and only
        'supplementaries:wrench',
        // The Oreganized mod is not in this modpack
        /supplementaries:bomb_spiky(_[_a-z]*[a-z])?\b/,

        // I have no clue what this is, let's get rid of it
        'supplementaries:placeable_item',

    ];

    itemsToHide.forEach(item => {
        event.hide(item);
    });
});


// Hide multiple recipes from REI. This does not remove recipes
REIEvents.removeRecipes(event => {
    const recipesToHide = [

        // Supplementaries

        // We are not able to remove broken rope arrow recipes, so we hide them
        'supplementaries:rope_arrow_create_display',
        'supplementaries:rope_arrow_add_display',

    ];

    event.removeFromAll(recipesToHide);
});
