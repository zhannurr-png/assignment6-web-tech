$(document).ready(function() {
    $(".gallery-image").click(function() {
        const image = $(this);

        if (image.hasClass("enlarged")){
            image.animate({width: "250px", height: "150px"}, 500);
            image.removeClass("enlarged");
        }
        else {
            image.animate({width: "300px", height: "200px"}, 500);
            image.addClass("enlarged");
            }
    });

    $("#hideGalleryButton").click(function() {
        $(".gallery").fadeOut(250);
    });
    $("#showGalleryButton").click(function() {
        $(".gallery").fadeIn(250);
    });
});