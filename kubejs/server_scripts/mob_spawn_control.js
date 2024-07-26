/**
 * Mob Spawn Control Script highly inspired by Liopyu
 * GitHub Repo: https://github.com/liopyu/spawn_control
 */

// Define the path to the configuration file
const configPath = 'kubejs/config/mob_spawn_control.json';

// Read the configuration from the file with error handling
let config = {};
try {
    config = JsonIO.read(configPath);
} catch (error) {
    console.error(`Failed to read config file at ${configPath}:`, error);
}

// Extract data from the configuration
const mobTypeConditions = config.spawnConditions || {};

// Function to equip items based on chances specified in the configuration file
function equipItems(entity, equipment) {
    Object.entries(equipment).forEach(([slot, entries]) => {
        // Generate random value to determine which item to choose
        const randomValue = Math.random();
        let cumulativeChance = 0;

        // Iterate through options to find the chosen one
        for (const [item, chance] of entries) {
            cumulativeChance += chance;
            if (randomValue <= cumulativeChance) {
                entity.setItemSlot(slot, item);
                // Stop iterating once an option is chosen
                break;
            }
        }
    });
};

// Register the function to handle the mob spawning event
EntityEvents.spawned(event => {
    // Define constants
    const entity = event.entity;

    // Skip the logic if the entity is a player, is not living, or is a baby
    if (entity.isPlayer() || !entity.isLiving() || entity.isBaby()) {
        return;
    }

    // Get this mob-specific conditions
    const mobConditions = mobTypeConditions[entity.type];

    // Return early if mobConditions are not defined for this mob
    if (!mobConditions) {
        return;
    }

    // Equip items if specified in mobConditions
    if (mobConditions.equipment) {
        equipItems(entity, mobConditions.equipment);
    }

});