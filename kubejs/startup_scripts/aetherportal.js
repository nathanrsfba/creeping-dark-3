// priority: 0

// Add Aether Portal block

StartupEvents.registry( 'block', event => {
    event.create( 'aether_portal' )
        .displayName( 'Aether Portal Block' )
        .glassSoundType()
        .hardness( 1.0 )
        .resistance( 1.0 )
        .lightLevel( 1.0 )
        .requiresTool( true )
})
