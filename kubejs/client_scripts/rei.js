// Hide multiple items from REI. This does not remove them from the game
REIEvents.hide('item', event => {
    const itemsToHide = [

        // Create

        // We use the wheat dough from Farmer's Delight
        'create:dough',

        // We use the sweet roll from Expanded Delight
        'create:sweet_roll',

        // The player does not need to see these items
        /create:[a-z][a-z_]*[a-z]_placeable/,

        // Create Crafts & Additions

        // Accumulators are deprecated
        'createaddition:accumulator',
        // We do not use ComputerCraft
        'createaddition:digital_adapter',
        // We use the zinc sheet from Create Deco
        'createaddition:zinc_sheet',

        // Create Goggles

        // The player does not need to see these items
        /creategoggles:[a-z][a-z_]*[a-z]_placeable/,

        // Create Jetpack

        // The player does not need to see these items
        /create_jetpack:[a-z][a-z_]*[a-z]_placeable/,

        // Decorative Blocks

        // This block should not exist
        'decorative_blocks:blockstate_copy_item',

        // Every Compat

        // The player does not need to see this item
        'everycomp:all_woods',

        // Farmer's Delight

        // We use the cooked egg from Naturalist
        'farmersdelight:fried_egg',

        // Supplementaries

        // Redstone
        // The speaker block is not compatible with the Mindful Darkness mod
        'supplementaries:speaker_block',
        'supplementaries:bellows',
        'supplementaries:spring_launcher',
        'supplementaries:turn_table',
        'supplementaries:pulley_block',
        'supplementaries:crystal_display',
        'supplementaries:crank',
        'supplementaries:cog_block',
        'supplementaries:lock_block',
        'supplementaries:dispenser_minecart',
        'supplementaries:relayer',

        // Functional
        // The player does not need to see this item
        'supplementaries:placeable_item',
        // We use the rope from Farmer's Delight
        'supplementaries:rope',

        // Building
        // The blackboard is not compatible with the Mindful Darkness mod
        'supplementaries:blackboard',
        /supplementaries:flag_[a-z][a-z_]*[a-z]\b/,
        /supplementaries:lapis_bricks(_[_a-z]*[a-z])?\b/,
        /supplementaries:stone_tile(_[_a-z]*[a-z])?\b/,
        /supplementaries:blackstone_tile(_[_a-z]*[a-z])?\b/,
        // The Endergetic Expansion mod is not in this modpack
        'supplementaries:sconce_ender',
        // The Infernal Expansion mod is not in this modpack
        'supplementaries:sconce_glow',
        // The Caverns & Chasms mod is not in this modpack
        'supplementaries:sconce_green',
        // The Architect's Palette mod is not in this modpack
        'supplementaries:sconce_nether_brass',
        // There is no silver in this modpack
        /supplementaries:silver(_[_a-z]*[a-z])?\b/,
        // There is no lead in this modpack
        /supplementaries:lead(_[_a-z]*[a-z])?\b/,
        'supplementaries:crimson_lantern',
        // The Quark mod is not in this modpack
        'supplementaries:checker_vertical_slab',
        'supplementaries:raked_gravel',

        // Tools
        // The Create wrench is the one and only
        'supplementaries:wrench',
        // The Oreganized mod is not in this modpack
        'supplementaries:bomb_spiky',
        // The player does not need to see these items
        /supplementaries:bomb(_[a-z_]*[a-z])?_projectile/,

        // Wetlands

        // This block has no texture
        'wetlands:wisp_block',
        // This squared valve can spawn in an elder goldem dungeon only
        'wetlands:copper_valve',
        // The pipe has no functionality
        'wetlands:pipe'

    ];

    event.hide(itemsToHide);
});


// Hide multiple recipes from REI. This does not remove them from the game
REIEvents.removeRecipes(event => {
    const recipesToHide = [

        // Supplementaries

        // We are not able to remove broken rope arrow recipes, so we hide them
        'supplementaries:rope_arrow_create_display',
        'supplementaries:rope_arrow_add_display'

    ];

    event.removeFromAll(recipesToHide);
});
