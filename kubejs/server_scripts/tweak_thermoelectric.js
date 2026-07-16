// priority: 0

// Add thermoelectric generator heat sources
ServerEvents.recipes( event => {

    function addTESource( tag, temp )
    {
        event.custom({
            'type': "immersiveengineering:thermoelectric_source",
            'blockTag': tag,
            'tempKelvin': temp
        });
    }

    addTESource( "forge:storage_blocks/californium250", 4000 );
    addTESource( "forge:storage_blocks/americium241", 2500 );
    addTESource( "forge:storage_blocks/plutonium238", 3000 );
    addTESource( "forge:storage_blocks/uranium238", 1750 );
    addTESource( "forge:storage_blocks/thorium", 1700 );
})
