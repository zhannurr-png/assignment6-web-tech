$(document).ready(function() {
    console.log("jQuery is ready!");
    

    $("#textButton").click(function() {
        $("#demoTitle").text("Text changed");
    });
    $("#htmlButton").click(function() {
        $(".demoText").html('<div>Html changed</div>');
    });
    $("#cssButton").click(function() {
        $("span").css({
            "font-weight": "bold",
            "color": "pink"
        });
    });
})