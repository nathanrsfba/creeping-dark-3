// priority: 0

// Add End Key
StartupEvents.registry( 'item', event => {
    // Add the end key
    event.create( 'end_orb' ).displayName( 'End Orb' )

    // Minibosses/dungeons loot:
    // Horned tower: ? (unsure of either dimension or miniboss)
    // Space Needle: ? (Found on glacio, unsure of miniboss)
    // Broken Sphere: Tropics, Eye of head (no custom loot needed)
    // Underground Lab: Probably Solara, unsure of miniboss
    // Spider Dome: Mining Dimension, evil eye
    // Void City: Dimensional storage, unsure of loot

    // Spider loot
    event.create( 'evil_eye' ).displayName( 'Evil Eye' );
    // Lab loot
    event.create( 'quartz_bone' ).displayName( 'Quartz Bone' );
    // Not sure what this will be for, but let's
    // yoink it from CD2 on general principles
    event.create( 'shadow_flesh' ).displayName( 'Shadow Flesh' );

    // Create the void city key
    event.create( 'void_rod' ).displayName( 'Void Rod' );
})
