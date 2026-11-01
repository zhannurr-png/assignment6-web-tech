$(document).ready(function() {
    $("#basicAnimateButton").click(function() {
        $("#basicBox").animate({width: "120px", height: "120px", left: "150px", top: "50px" }, 1000);
    });


    $("#sequenceButton").click(function() {
        $("#sequenceBox").animate({left: "250px" }, 1000)
        .animate({top: "100px" }, 1000)
        .animate({width: "30px", height: "30px"}, 1000)
        .animate({width: "60px", height: "60px", left: "15px", top: "15px" }, 1000);
    });


    $("#combinedButton").click(function() {
        $("#combinedBox").animate({ opacity: 0.3, width: "100px", height: "100px", left: "200px", top: "60px"}, 1000);
    });
});