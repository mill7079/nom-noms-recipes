// JavaScript source code

// random flag as background
let gradients = [
    //"linear-gradient(#5CC85F, #CAF69C, white, #CCCCCC, #222222)",   // aro
    //"linear-gradient(#222222, #C6C6C6, white, #A322A3)",            // ace
    //"linear-gradient(#F22292, #F22292, #AE69BB, #2254C2, #2254C2)", // bi
    "linear-gradient(#FFF652, white, #BE7BF3, #222222)",            // nb
    "linear-gradient(#55FFFF, #FADBEB, #FFFFFF, #FADBEB, #55FFFF)",  // trans

    "linear-gradient(187deg, rgba(58,166,63,1), rgba(168,212,122,1), rgba(255,255,255,1), rgba(170,170,170,1), rgba(0,0,0,1))", // aro
    "linear-gradient(190deg, rgba(0,0,0,1), rgba(164,164,164,1), rgba(255,255,255,1), rgba(129,0,129,1))",                      // ace
    //"linear-gradient(190deg, rgba(208,0,112,0.9) 40%, rgba(140,71,153,0.9) 40%, rgba(140,71,153,0.9) 60%, rgba(0,50,160,0.9) 60%)"  // hard bi
    "linear-gradient(185deg, rgba(140,71,153,0) 40%, rgba(140,71,153,0.85) 60%, rgba(0, 50, 160, 0.85) 60%), linear-gradient(190deg, rgba(208, 0, 112, 0.85) 40%, rgba(140, 71, 153, 0.85) 40%)"  // funky bi
];
let flag = gradients[Math.floor(Math.random() * gradients.length)];

$(document).ready(function () {
    // set flag, make flag stop tiling
    $("body").css({
        "background": flag,
        "height": "100%",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed"
    });

    // add back button near top of recipe
    $("h1").append("<div><a href=\"..\/index.html\"><button>Back to Recipes<\/button><\/a><\/div>");
});