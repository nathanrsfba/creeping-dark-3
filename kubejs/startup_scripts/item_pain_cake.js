StartupEvents.registry( 'item', event => {
    event.create( 'pain_cake' )
        .tooltip( Text.red( "Not intended for human consumption" ))
        .burnTime( 20000 )
        .food( food => {
            food
                .effect( 'minecraft:wither', 200, 0, 1 )
                .alwaysEdible()
                .hunger( 10 )
                .saturation( 10 )
                .eaten( ctx => global.painCakeEat( ctx ))
        })
})

global.painCakeEat = ctx => {
    ctx.player.setSecondsOnFire( 10 );
}
