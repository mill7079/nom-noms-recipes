// JavaScript source code

// random flag as background
let gradients = [
    //"linear-gradient(#5CC85F, #CAF69C, white, #CCCCCC, #222222)",   // aro
    //"linear-gradient(#222222, #C6C6C6, white, #A322A3)",            // ace
    //"linear-gradient(#F22292, #F22292, #AE69BB, #2254C2, #2254C2)", // bi
    //"linear-gradient(#FFF652, white, #BE7BF3, #222222)",            // nb
    //"linear-gradient(#55FFFF, #FADBEB, #FFFFFF, #FADBEB, #55FFFF)"  // trans
    "linear-gradient(190deg, rgba(0,0,0,1), rgba(164,164,164,1), rgba(255,255,255,1), rgba(129,0,129,1))"
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