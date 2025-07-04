// priority: 0

// Make fluix in the Induction Smelter

ServerEvents.recipes( event => {
    event.custom({
        type: "thermal:smelter",
        ingredients: [
            { item: "ae2:charged_certus_quartz_crystal" },
            { item: "minecraft:quartz" },
            { item: "minecraft:redstone" }
        ],
        result: [
            { item: "ae2:fluix_crystal", count: 2 }
        ],
        energy: 100
    });

});
