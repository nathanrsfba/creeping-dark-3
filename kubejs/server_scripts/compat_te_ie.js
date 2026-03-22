// Compatibility fixes for Thermal Expansion and Immersive Engineering

// Remove rockwool smelting recipe, as it conflicts with IE slag glass.
// (Rockwool will now be made only in the blast furnace)

ServerEvents.recipes( event => {
    
    event.remove({ id: 'thermal:rockwool/white_rockwool_from_smelting' });

});




