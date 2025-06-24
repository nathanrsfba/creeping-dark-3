// priority: 0

StartupEvents.registry( 'block', event => {
    event.create( 'certus_ore')
        .displayName( 'Certus Quartz Ore' )
        .stoneSoundType()
        .hardness( 2.0 )
        .resistance( 1.0 )
        .requiresTool( true )
        .tagBlock( 'minecraft:mineable/pickaxe' )
        .tagBlock( 'minecraft:needs_iron_tool' )
        .tagBlock( 'forge:ores' )
        .tagBlock( 'forge:ores/certus_quartz' )
        .tagBlock( 'forge:ores_in_ground/stone' )
})
