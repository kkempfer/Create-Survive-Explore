ServerEvents.tags('item', event => {

    // Tools
    event.add('c:mining_tools', 'create:wrench');
    event.add('c:tools', 'create:wrench');
    event.add('c:tools', 'create:potato_cannon');
    event.add('c:tools', 'create:extendo_grip');
    event.add('c:tools', 'create:wand_of_symmetry');
    event.add('c:shears', 'creategoggles:modifier_remover');
    event.add('c:tools', 'supplementaries:altimeter');
    event.add('c:tools', 'supplementaries:bubble_blower');
    event.add('c:tools', 'supplementaries:flute');
    event.add('c:tools', 'supplementaries:quiver');
    event.add('c:tools', 'supplementaries:slice_map');
    event.add('c:tools', 'supplementaries:slingshot');

    // Compact seeds to make seed oil from Create Crafts & Additions
    event.add('c:seeds', 'supplementaries:flax_seeds');
    event.add('c:seeds', 'corndelight:corn_seeds');

});
