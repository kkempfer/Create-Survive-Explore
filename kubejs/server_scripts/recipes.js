ServerEvents.recipes(event => {

    // Supplementaries

    // Replace the rope from Supplementaries by the one from Farmer's Delight
    event.replaceOutput(
        { output: 'supplementaries:rope' },
        'supplementaries:rope',
        'farmersdelight:rope',
    );
    event.replaceInput(
        { input: 'supplementaries:rope' },
        'supplementaries:rope',
        'farmersdelight:rope',
    );

});