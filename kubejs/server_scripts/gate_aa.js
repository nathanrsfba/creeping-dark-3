// priority: 0

// Gate Ad Astra to Osmium
ServerEvents.recipes( event => {
    
    // Coal Generator uses Osmium in place of Iron
    event.replaceInput(
        { output: 'ad_astra:coal_generator' },
        'minecraft:iron_ingot',
        'mekanism:ingot_osmium' );

    // Compressor uses Osmium in place of Iron
    event.replaceInput(
        { output: 'ad_astra:compressor' },
        'minecraft:iron_ingot',
        'mekanism:ingot_osmium' );

    // Blast furnace uses osmium
    event.remove({ output: 'ad_astra:etrionic_blast_furnace' });
    event.shaped(
        Item.of( 'ad_astra:etrionic_blast_furnace' ),
        [
            'POP',
            'RBR', 
            'POP'
        ],
        {
            P: '#forge:plates/iron',
            O: 'mekanism:ingot_osmium',
            R: 'minecraft:redstone',
            B: 'minecraft:blast_furnace'
        }
    )

    // NASA Workbench uses Osmium in place of Iron
    event.replaceInput(
        { output: 'ad_astra:nasa_workbench' },
        '#ad_astra:steel_blocks',
        'mekanism:block_osmium' );

});

