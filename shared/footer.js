// JavaScript source code

// add jquery: https://stackoverflow.com/questions/1140402/how-to-add-jquery-in-js-file/36343307
var jquery = document.createElement("script");
jquery.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
jquery.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jquery);
location.reload();

//var app = document.createElement("script");
//app.text = "alert(\'hello\');"
//app.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(app);

document.write("<footer class=\"back-buttton\">");
document.write("<a href=\"..\/index.html\"><button>Back to Recipes<\/button><\/a>");
document.write("<\/footer>");

$(document).ready(function () {
    alert("doc ready");
    console.log("hellooooo");
});