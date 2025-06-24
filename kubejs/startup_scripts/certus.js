// priority: 0

StartupEvents.registry( 'block', event => {
  event.create( 'certus_ore')
    .displayName( 'Certus Quartz Ore' )
    .stoneSoundType()
    .hardness( 2.0 )
    .resistance( 1.0 )
    // .tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool( true )
    .tagBlock( 'minecraft:mineable/pickaxe' )
    .tagBlock( 'minecraft:needs_iron_tool' )
})
