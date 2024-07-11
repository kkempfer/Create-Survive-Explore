ServerEvents.recipes(event => {

    // Building Wands

    // Fix missing netherite wand recipe
    event.smithing('wands:netherite_wand', 'wands:diamond_wand', 'minecraft:netherite_ingot')

    // Create Crafts & Additions

    // Replace the zinc sheet from Create Crafts & Additions by the one from Create Deco
    event.remove({ output: 'createaddition:zinc_sheet' })
    event.replaceInput(
        { input: 'createaddition:zinc_sheet' },
        'createaddition:zinc_sheet',
        'createdeco:zinc_sheet',
    );

    // Create Deco

    // Fix broken ladders
    event.remove({ id: 'createdeco:iron_ladder_from_plates_iron_stonecutting' })
    event.remove({ id: 'createdeco:gold_ladder_from_plates_gold_stonecutting' })
    event.remove({ id: 'createdeco:netherite_ladder_from_plates_netherite_stonecutting' })
    event.remove({ id: 'createdeco:zinc_ladder_from_plates_zinc_stonecutting' })
    event.remove({ id: 'createdeco:cast_iron_ladder_from_plates_cast_iron_stonecutting' })
    event.stonecutting('2x createdeco:iron_ladder', 'minecraft:iron_ingot')
    event.stonecutting('2x createdeco:gold_ladder', 'minecraft:gold_ingot')
    event.stonecutting('2x createdeco:netherite_ladder', 'minecraft:netherite_ingot')
    event.stonecutting('2x createdeco:zinc_ladder', 'create:zinc_ingot')
    event.stonecutting('2x createdeco:cast_iron_ladder', 'createdeco:cast_iron_ingot')

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
    const MAX_DAMAGE_ROPE_ARROW = Item.of('supplementaries:rope_arrow').getMaxDamage()
    // Define the recipe for creating the rope arrow
    for (let i = 1; i <= 8; i++) {
        event.shapeless(
            Item.of('supplementaries:rope_arrow', { Damage: MAX_DAMAGE_ROPE_ARROW - i }),
            ['minecraft:arrow', `${i}x farmersdelight:rope`]
        );
    }

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
