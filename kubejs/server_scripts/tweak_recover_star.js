// priority: 0

// Pulverize beacon to recover nether star
ServerEvents.recipes( event => {

    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": { "item": "minecraft:beacon" },
        "result": [
            {
                "item": "minecraft:nether_star"
            }
        ]
    });
})
