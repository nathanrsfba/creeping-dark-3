// priority: 0

// Gate Ars to Botania

ServerEvents.recipes( event => {

    // Imbuement chamber uses livingwood
    event.remove({ output: "ars_nouveau:imbuement_chamber" });
    event.shaped(
        Item.of( "ars_nouveau:imbuement_chamber" ),
        [
            "xyx",
            "z z",
            "xyx"
        ],
        {
            x: "ars_nouveau:archwood_planks",
            y: "#forge:ingots/gold",
            z: "botania:livingwood_log"
        }
    );
});

