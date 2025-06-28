// priority: 0

ServerEvents.recipes( event => {

    // Gate deep dark portal to tropics with arc furnace
    event.remove( {output: "the_deep_dark:deep_dark_portal"} );
    event.remove( {output: "the_deep_dark:the_overworld_portal"} );
    event.custom({
        type: "immersiveengineering:arc_furnace",
        time: 400,
        energy: 204800,
        additives: [
            {item: "tropicraft:eudialyte_gem"},
            {item: "tropicraft:zircon_gem"},
            {item: "tropicraft:azurite_gem"}
        ],
        input: {item: "tropicraft:chunk"},
        results: [
            {item: "the_deep_dark:deep_dark_portal"}
        ],
        slag: {item: "the_deep_dark:the_overworld_portal"}
    });

});
