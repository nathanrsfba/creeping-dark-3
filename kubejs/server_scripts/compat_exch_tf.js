// priority: 0

// Allow TF creosote to make IE exchanger core
ServerEvents.recipes( event => {
    event.replaceInput(
        { output: 'exchangers:ie_exchanger_core_tier1' },
        'immersiveengineering:creosote_bucket',
        {
         type: "immersiveengineering:fluid",
         tag: "forge:creosote",
         amount: 1000
      }
    );
});

