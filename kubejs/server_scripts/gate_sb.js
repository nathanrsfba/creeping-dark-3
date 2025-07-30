// priority: 0

// Gate Setback to Ars

ServerEvents.recipes( event => {
    event.remove({ output: "astral_dimension:setback" });
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: { item: "astral_dimension:setback" },
        pedestalItems: [
            { item: "astral_dimension:nanta_pearl" },
            { item: "astral_dimension:nanta_pearl" },
            { item: "astral_dimension:nanta_pearl" },
            { item: "astral_dimension:nanta_pearl" },
            { item: "ars_nouveau:glyph_ignite" }
        ],
        reagent: [
            { item: "astral_dimension:faded_star" }
        ],
        sourceCost: 1000
    });
});
