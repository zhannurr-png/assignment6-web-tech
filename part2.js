$(document).ready(function() {
    $("#hideButton").click(function() {
        $("#visibilityText").hide();
    });
    $("#showButton").click(function() {
        $("#visibilityText").show();
    });
    $("#toggleButton").click(function() {
        $("#visibilityText").toggle();
    });


    $("#fadeInButton").click(function() {
        $("#fadeImage").fadeIn(500);
    });
    $("#fadeOutButton").click(function() {
        $("#fadeImage").fadeOut(500);
    });
    $("#fadeToggleButton").click(function() {
        $("#fadeImage").fadeToggle(500);
    });


    $("#slideUpButton").click(function() {
        $("#slidePanel").slideUp(500);
    });
    $("#slideDownButton").click(function() {
        $("#slidePanel").slideDown(500);
    });
    $("#slideToggleButton").click(function() {
        $("#slidePanel").slideToggle(500);
    });
})