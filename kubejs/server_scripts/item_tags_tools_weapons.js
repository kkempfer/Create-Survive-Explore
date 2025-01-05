ServerEvents.tags('item', event => {

    // Tools
    const toolsItems = [
        'create:extendo_grip',
        'create:potato_cannon',
        'create:wand_of_symmetry',
        'create:wrench',
        'farmersdelight:skillet',
        'supplementaries:altimeter',
        'supplementaries:bubble_blower',
        'supplementaries:flute',
        'supplementaries:quiver',
        'supplementaries:slice_map',
        'supplementaries:slingshot',
        'wetlands:oxidizer'
    ];
    event.add('c:tools', toolsItems);

    // Melee Weapons
    const meleeWeaponsItems = [
        'create:wrench',
        'farmersdelight:skillet',
        '#c:tools/knives'
    ];
    event.add('c:melee_weapons', meleeWeaponsItems);
    event.add('c:weapons', meleeWeaponsItems);

    // Ranged Weapons
    const rangedWeaponsItems = [
        'wetlands:oxidizer'
    ];
    event.add('c:ranged_weapons', rangedWeaponsItems);
    event.add('c:weapons', rangedWeaponsItems);

});
