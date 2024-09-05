const firstJoinItems = [
    'ftbquests:book'
];

// Register the function to handle the player log in event
PlayerEvents.loggedIn(event => {
    const player = event.player;

    // Check if the player already has the 'new_join' stage and if not it adds it,
    // effectively only running this once on first world join
    if (!player.stages.has('first_join')) {
        player.stages.add('first_join');

        firstJoinItems.forEach(item => {
            player.give(item)
        });
    }

});
