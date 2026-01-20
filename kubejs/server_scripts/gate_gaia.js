// priority: 0

ServerEvents.recipes( event => {
    event.remove({ output: 'gaiadimension:crystallized_lapis_lazuli' });
    event.remove({ output: 'gaiadimension:crystallized_redstone' });
    event.custom({
        type: "thermal:crystallizer",
        ingredients: [
            { fluid: "thermal:redstone", amount: 100 },
            { item: "minecraft:redstone" }
        ],
        result: [
            { item: "gaiadimension:crystallized_redstone" }
        ],
        energy: 500
    });
    event.custom({
        type: "thermal:crystallizer",
        ingredients: [
            { fluid: "minecraft:water", amount: 100 },
            { item: "minecraft:lapis_lazuli" },
            { item: "thermal:apatite_dust" },
        ],
        result: [
            { item: "gaiadimension:crystallized_lapis_lazuli" }
    
        ],
        energy: 500
    });

});
