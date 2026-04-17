// priority: 0

// Make some EnderIO alloys in the induction smelter

ServerEvents.recipes( event => {
    event.custom({
        type: "thermal:smelter",
        result: [ { item: "enderio:dark_steel_ingot", count: 1 } ],
        ingredients: [
            { tag: "forge:ingots/steel" },
            { tag: "forge:obsidian" }
        ],
        energy: 100
    });

});
