var images = ["background1.jpg",
    "background2.jpg",
    "background3.jpg"
];

$(function ()  {
    var i = 0;
    $("#first_section").css("background-image", "url(images/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#first_section").fadeOut("slow", function () {
            $(this).css("background-image", "url(images/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 5000); 
});