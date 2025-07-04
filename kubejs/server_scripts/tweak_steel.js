// priority: 0

// Make fluix in the Induction Smelter

ServerEvents.recipes( event => {
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "minecraft:iron_ingot" },
            { 
                value: [
                    { tag: "forge:dusts/coal" },
                    { tag: "forge:dusts/charcoal" }
                ],
                count: 4
            }
        ],
        result: [
            { item: "mekanism:ingot_steel" },
        ],
        energy: 1000
    });

});
