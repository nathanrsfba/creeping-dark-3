// priority: 0

// Add End Key
StartupEvents.registry( 'item', event => {
    // Add the end key
    event.create( 'end_orb' ).displayName( 'End Orb' )

    // Spider loot
    event.create( 'evil_eye' ).displayName( 'Evil Eye' );

    // Lab loot
    event.create( 'quartz_bone' ).displayName( 'Quartz Bone' );

    // May still use this for the horned tower
    event.create( 'shadow_flesh' ).displayName( 'Shadow Flesh' );

    // Create the void city key
    event.create( 'void_rod' ).displayName( 'Void Rod' );

    // Space Needle Loot
    event.create( 'glacio_aquamarine' ).displayName( 'Aquamarine' );

})
