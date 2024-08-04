ServerEvents.tags('block', event => {

    // Basalt
    const basaltBlocks = [
        /minecraft:([a-z_]*_)?andesite(_[a-z_]*)?\b/,
        '#chipped:andesite',
        /create:([a-z_]*_)?cut_andesite(_[a-z_]*)?\b/,
        /create:([a-z_]*_)?andesite_brick([a-z_]*)?\b/,
        'create:layered_andesite',
        'create:andesite_pillar',
        /[a-z]*:([a-z_]*_)?diorite(_[a-z_]*)?\b/,
        /[a-z]*:([a-z_]*_)?granite(_[a-z_]*)?\b/,
        /[a-z]*:([a-z_]*_)?limestone(_[a-z_]*)?\b/,
        /[a-z]*:([a-z_]*_)?scorchia(_[a-z_]*)?\b/,
        /[a-z]*:([a-z_]*_)?scoria(_[a-z_]*)?\b/
    ];
    event.add('auditory:basalt_sounds', basaltBlocks);

    // Blackstone
    const blackstoneBlocks = [
        '#chipped:blackstone'
    ];
    event.add('auditory:blackstone_sounds', blackstoneBlocks);

    // Clay brick
    const clayBrickBlocks = [
        '#chipped:bricks',
        /createdeco:([a-z_]*_)?brick([a-z_]*)?\b/,
        /supplementaries:([a-z_]*_)?brick([a-z_]*)?\b/,
        /wetlands:([a-z_]*_)?brick([a-z_]*)?\b/
    ];
    event.add('auditory:clay_brick_sounds', clayBrickBlocks);

    // Dirt
    const dirtBlocks = [
        '#chipped:dirt',
        '#chipped:gravel',
        'decorative_blocks:rocky_dirt',
        'wetlands:bog_iron_ore'
    ];
    event.add('auditory:dirt_sounds', dirtBlocks);

    // Gold
    const goldBlocks = [
        '#chipped:gold_block',
        /supplementaries:([a-z_]*_)?gold([a-z_]*)?\b/
    ];
    event.add('auditory:gold_sounds', goldBlocks);

    // Gourd
    const gourdBlocks = [
        '#chipped:carved_pumpkin',
        '#chipped:jack_o_lantern',
        '#chipped:melon',
        '#chipped:pumpkin'
    ];
    event.add('auditory:gourd_sounds', gourdBlocks);

    // Ice
    const iceBlocks = [
        '#chipped:blue_ice',
        '#chipped:ice',
        '#chipped:packed_ice',
        'chipped:packed_ice_pointed_dripstone',
        /ecologics:([a-z_]*_)?ice([a-z_]*)?\b/
    ];
    event.add('auditory:ice_sounds', iceBlocks);

    // Leaf
    const leafBlocks = [
        '#minecraft:leaves',
        '#minecraft:saplings'
    ];
    event.add('auditory:leaf_sounds', leafBlocks);

    // Lily pad
    const lilyPadBlocks = [
        '#chipped:lily_pad'
    ];
    event.add('auditory:lily_pad_sounds', lilyPadBlocks);

    // Metal
    const metalBlocks = [
        /bellsandwhistles:([a-z_]*_)?grab_rails/,
        /bellsandwhistles:([a-z_]*_)?bogie_steps/,
        /bellsandwhistles:([a-z_]*_)?door_step/,
        /bellsandwhistles:([a-z_]*_)?pilot/,
        /bellsandwhistles:([a-z_]*_)?metro(_[a-z_]*)?\b/,
        '#chipped:iron_bars',
        '#chipped:iron_block',
        'chipped:acacia_barrel',
        'chipped:metal_barrel',
        'chipped:netherite_safe',
        'create:andesite_alloy_block',
        'create:mechanical_piston',
        'create:sticky_mechanical_piston',
        'supplementaries:iron_gate',
        'wetlands:bog_iron_block',
        'wetlands:tattered_bog_iron_block',
        /wetlands:([a-z_]*_)?cut_bog_iron(_[a-z_]*)?\b/
    ];
    event.add('auditory:metal_sounds', metalBlocks);

    // Mushroom
    const mushroomBlocks = [
        '#chipped:brown_mushroom_block',
        '#chipped:red_mushroom_block'
    ];
    event.add('auditory:mushroom_sounds', mushroomBlocks);

    // Mushroom stem
    const mushroomStemBlocks = [
        '#chipped:mushroom_stem'
    ];
    event.add('auditory:mushroom_stem_sounds', mushroomStemBlocks);

    // Netherrack
    const netherrackBlocks = [
        '#chipped:magma_block'
    ];
    event.add('auditory:netherrack_sounds', netherrackBlocks);

    // Obsidian
    const obsidianBlocks = [
        '#chipped:obsidian',
        '#chipped:crying_obsidian'
    ];
    event.add('auditory:obsidian_sounds', obsidianBlocks);

    // Prismarine
    const prismarineBlocks = [
        // The default sounds seem alright, but let's change them for good measure
        '#chipped:prismarine',
        '#chipped:dark_prismarine'
    ];
    event.add('auditory:prismarine_sounds', prismarineBlocks);

    // Purpur
    const purpurBlocks = [
        '#chipped:purpur_block',
    ];
    event.add('auditory:purpur_sounds', purpurBlocks);

    // Raw Ore
    const rawOreBlocks = [
        '#chipped:raw_copper_block',
        '#chipped:raw_gold_block',
        '#chipped:raw_iron_block',
        'create:raw_zinc_block',
        'wetlands:raw_bog_iron_block'
    ];
    event.add('auditory:raw_ore_block_sounds', rawOreBlocks);

    // Sandstone
    const sandstoneBlocks = [
        // The default sounds seem alright, but let's change them for good measure
        '#chipped:sandstone',
        '#chipped:red_sandstone'
    ];
    event.add('auditory:sandstone_sounds', sandstoneBlocks);

    // Small object
    const smallObjectBlocks = [
        '#chipped:torch',
        '#chipped:redstone_torch',
        '#chipped:wall_torch',
        /chipped:([a-z_]*_)?wall_torch/
    ];
    event.add('auditory:small_object_sounds', smallObjectBlocks);

    // Stone brick
    const stoneBrickBlocks = [
        '#chipped:mossy_stone_bricks'
    ];
    event.add('auditory:stone_brick_sounds', stoneBrickBlocks);

    // Stone ore
    const stoneOreBlocks = [
        'create:zinc_ore',
        'expandeddelight:salt_ore'
    ];
    event.add('auditory:stone_brick_sounds', stoneOreBlocks);

    // String
    const stringBlocks = [
        '#chipped:cobweb',
        'createaddition:barbed_wire'
    ];
    event.add('auditory:string_sounds', stringBlocks);

    // Terracotta
    const terracottaBlocks = [
        '#chipped:white_terracotta',
        '#chipped:orange_terracotta',
        '#chipped:magenta_terracotta',
        '#chipped:light_blue_terracotta',
        '#chipped:yellow_terracotta',
        '#chipped:lime_terracotta',
        '#chipped:pink_terracotta',
        '#chipped:gray_terracotta',
        '#chipped:light_gray_terracotta',
        '#chipped:cyan_terracotta',
        '#chipped:purple_terracotta',
        '#chipped:blue_terracotta',
        '#chipped:brown_terracotta',
        '#chipped:green_terracotta',
        '#chipped:red_terracotta',
        '#chipped:black_terracotta',
        '#chipped:terracotta'
    ];
    event.add('auditory:terracotta_sounds', terracottaBlocks);

});
