// priority: 0

ServerEvents.recipes( event => {

    // Gate RFT machines to certus, via machine frame
    event.remove({ output: "rftoolsbase:machine_frame" });
    event.shaped(
        Item.of( "rftoolsbase:machine_frame" ),
        [
            "ili",
            "C C",
            "ili"
        ],
        {
            i: "#forge:ingots/iron",
            l: "#forge:dyes/blue",
            C: '#forge:gems/certus_quartz'
        }
    );
});
