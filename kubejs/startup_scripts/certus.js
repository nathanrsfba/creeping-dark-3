// priority: 0

// Add Certis Quartz Ore

StartupEvents.registry( 'block', event => {
    event.create( 'certus_ore')
        .displayName( 'Certus Quartz Ore' )
        .stoneSoundType()
        .hardness( 2.0 )
        .resistance( 1.0 )
        .requiresTool( true )
        .tagBlock( 'minecraft:mineable/pickaxe' )
        .tagBlock( 'minecraft:needs_iron_tool' )
        .tagBoth( 'forge:ores' )
        .tagBoth( 'forge:ores/certus_quartz' )
        .tagBoth( 'forge:ores_in_ground/stone' )
})
