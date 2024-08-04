// Define a mapping of item IDs/tags to sound IDs
const soundMappings = {
    'c:bows': 'auditory:item.shield.raise',
    'c:fishing_rods': 'auditory:item.shield.raise',
    'c:tools/knives': 'auditory:item.sword.swing',
    'create:extendo_grip': 'auditory:item.shield.raise',
    'create:potato_cannon': 'auditory:item.shield.raise',
    'create:wand_of_symmetry': 'auditory:item.axe.swing',
    'create:wrench': 'auditory:item.axe.swing',
    'farmersdelight:skillet': 'auditory:item.tool.swing',
    'supplementaries:bubble_blower': 'auditory:item.shield.raise',
    'supplementaries:slingshot': 'auditory:item.shield.raise',
    'wetlands:oxidizer': 'auditory:item.shield.raise'
};

// Function to play a sound track a player can hear
function playSound(id, category, entity, volume, pitch) {
    entity.level.runCommandSilent(`playsound ${id} ${category} @p ${entity.x} ${entity.y} ${entity.z} ${volume} ${pitch}`)
};

// Register the function to handle the player swinging event
PlayerEvents.tick(event => {
    const player = event.player;
    const itemInHand = player.getMainHandItem();

    if (player.swinging && player.swingTime === 0) {
        // Find and play the sound for the item
        for (const [key, soundId] of Object.entries(soundMappings)) {
            if (itemInHand.hasTag(key) || itemInHand.id === key) {
                playSound(soundId, 'player', player, 0.1, 0.8 + Math.random() * 0.4);
                break;
            }
        }
    }

});