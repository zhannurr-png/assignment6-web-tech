$(document).ready(function() {
    $("#addButton").click(function() {
        $("#itemList").append("<li>New assignment</li>");
    });
    $("#prependButton").click(function() {
        $("#itemList").prepend("<li>New assignment</li>");
    });
    $("#removeButton").click(function() {
        $("#itemList li").last().remove();
    });

    
    $("#changeImageButton").click(function() {
        $("#demoImage").attr("src", "images/afterImage.jpg");
    });
    $("#changeLinkButton").click(function() {
        $("#demoLink").attr("href", "https://api.jquery.com " );
        $("#demoLink").text("Api jQuery website source");
    });

    
    $("#nameInput").on("input", function() {
        const name = $(this).val();
        $("#nameOutput").text("Name: " + name);
    });
    $("#emailInput").on("input", function() {
        const email = $(this).val();
        $("#emailOutput").text("Email: " + email);
    });
})