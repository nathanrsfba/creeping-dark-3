ServerEvents.recipes( event => {
    // Summon Wilden requires scribing table and enchanter
    event.remove( {output: "ars_nouveau:ritual_wilden_summon"} );
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: { item: "ars_nouveau:ritual_wilden_summon" },
        pedestalItems: [
            { item: "ars_nouveau:purple_archwood_log" },
            { item: "minecraft:emerald_block" },
            { item: "minecraft:iron_sword" },
            { item: "minecraft:bow" },
            { item: "lapis_block" }
        ],
        reagent: [
            { item: "ars_nouveau:glyph_summon_steed" }
        ],
        sourceCost: 2500
    });
    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        keepNbtOfReagent: false,
        output: { item: "ars_nouveau:ritual_wilden_summon" },
        pedestalItems: [
            { item: "ars_nouveau:purple_archwood_log" },
            { tag: "ars_nouveau:wilden_drop" },
            { tag: "ars_nouveau:wilden_drop" },
            { tag: "ars_nouveau:wilden_drop" },
            { item: "lapis_block" }
        ],
        reagent: [
            { item: "ars_nouveau:glyph_summon_steed" }
        ],
        sourceCost: 1000
    });

});

