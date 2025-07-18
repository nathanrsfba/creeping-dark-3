// priority: 0

ServerEvents.tags( 'item', event => {

    // Tag Valkyrie loot
    [
        "aether:valkyrie_helmet",
        "aether:valkyrie_chestplate",
        "aether:valkyrie_leggings",
        "aether:valkyrie_boots",
        "aether:valkyrie_gloves",
        "aether:valkyrie_pickaxe",
        "aether:valkyrie_axe",
        "aether:valkyrie_shovel",
        "aether:valkyrie_hoe",
        "aether:lightning_sword",
        "aether:holy_sword",
        "aether:invisibility_cloak",
        "aether:regeneration_stone",
        "aether:music_disc_ascending_dawn",
        "aether:valkyrie_cape"
    ].forEach( item => {
        event.add( 'kubejs:valkyrie_loot', item );
    });

    // Tag slider loot
    [
        "aether:agility_cape",
        "aether:cloud_staff",
        "aether:flaming_sword",
        "aether:hammer_of_kingbdogz",
        "aether:music_disc_sliders_wrath",
        "aether:neptune_boots",
        "aether:neptune_chestplate",
        "aether:neptune_gloves",
        "aether:neptune_helmet",
        "aether:neptune_leggings",
        "aether:phoenix_bow",
        "aether:sentry_boots",
        "aether:shield_of_repulsion",
        "aether:swet_cape",
        "aether:valkyrie_lance"
    ].forEach( item => {
        event.add( 'kubejs:slider_loot', item );
    });

    // Tag Malachite Guard loot
    [
        "gaiadimension:malachite_guard_baton",
        "gaiadimension:malachite_guard_headgear",
        "gaiadimension:malachite_guard_brace",
        "gaiadimension:malachite_guard_gear",
        "gaiadimension:malachite_guard_boots"
    ].forEach( item => {
        event.add( 'kubejs:malachite_loot', item );
    });



});

ServerEvents.recipes( event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "result": { "item": "kubejs:end_orb" },
        "key": {
            "A": { "item": "blue_skies:poison_arc" },
            "C": { "item": "kubejs:pain_cake" }, // Create item
            "F": { "item": "undergarden:forgotten_nugget" },
            "H": { "item": "twilightforest:fiery_blood" },
            "M": { "tag": "kubejs:malachite_loot" },
            "N": { "item": "blue_skies:nature_arc" },
            "S": { "tag": "kubejs:slider_loot" },
            "V": { "tag": "kubejs:valkyrie_loot" },
            "5": { "item": "minecraft:music_disc_5" }, // Ancient loot
            "a": { "item": "astral_dimension:astral_amulet" },
            "e": { "item": "tropicraft:eih_spawn_egg" }, // Eye of head  
            "h": { "item": "kubejs:shadow_flesh" }, // Horned tower loot  
            "n": { "item": "minecraft:nether_star" },
            "q": { "item": "kubejs:quartz_bone" }, // Miniboss loot
            "s": { "item": "kubejs:evil_eye" }, // Spider dome loot
            // "s": { "item": "" }, // Space Needle drop  
            "v": { "item": "minecraft:dragon_head" }, // Void city item  
            "w": { "item": "ars_nouveau:wilden_tribute" }
        },
        "pattern": [
            " Cqh ",
            " VFS ",
            "Hean5",
            " AMN ",
            " vws "
        ]
    });
});
