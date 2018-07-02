var headImgs = [];

headImgs.push("./recourse/header-panda.jpg"); headImgs.push("./recourse/baby-lion.jpg");
headImgs.push("./recourse/bear.jpg");
headImgs.push("./recourse/bird.jpg");
headImgs.push("./recourse/monkey.jpg");
var currentHeaderImageIndex = 0;

function headerPhoto() {
    currentHeaderImageIndex += 1;
    currentHeaderImageIndex %= headImgs.length;
    $("#header-log").css("background-image", 'url(' + headImgs[currentHeaderImageIndex] + ')');
    setTimeout(headerPhoto, 5000)
}

$(document).ready(setTimeout(headerPhoto, 5000));

function firstPage() {
    $("#ticket").show();
    $("#visitorInfo").hide();
    $("#aboutUs").hide();
    $("#animals").hide();
    $("#contactUs").hide();
    $("#gallery").hide();
}
$(document).ready(firstPage);

$(document).ready(function () {
    $("#btn-home").click(function () {
        $("#ticket").show();
        $("#visitorInfo").hide();
        $("#aboutUs").hide();
        $("#animals").hide();
        $("#contactUs").hide();
        $("#gallery").hide();
    });
    $("#btn-aboutUs").click(function () {
        $("#ticket").hide();
        $("#visitorInfo").hide();
        $("#aboutUs").show();
        $("#animals").hide();
        $("#contactUs").hide();
        $("#gallery").hide();
    });
    $("#btn-animals").click(function () {
        $("#ticket").hide();
        $("#visitorInfo").hide();
        $("#aboutUs").hide();
        $("#animals").show();
        $("#contactUs").hide();
        $("#gallery").hide();
    });
    $("#btn-visitorInfo").click(function () {
        $("#ticket").hide();
        $("#visitorInfo").show();
        $("#aboutUs").hide();
        $("#animals").hide();
        $("#contactUs").hide();
        $("#gallery").hide();
    });
    $("#btn-gallery").click(function () {
        $("#ticket").hide();
        $("#visitorInfo").hide();
        $("#aboutUs").hide();
        $("#animals").hide();
        $("#contactUs").hide();
        $("#gallery").show();

    });
    $("#btn-contactUs").click(function () {
        $("#ticket").hide();
        $("#visitorInfo").hide();
        $("#aboutUs").hide();
        $("#animals").hide();
        $("#contactUs").show();
        $("#gallery").hide();
    });
});

var photoGallery = [];
photoGallery.push("./recourse/gallery/1.jpg");
photoGallery.push("./recourse/gallery/2.jpg");
photoGallery.push("./recourse/gallery/3.jpg");
photoGallery.push("./recourse/gallery/4.jpg");

var count = 0;

$(document).ready(function () {
    $("#nextGallery").click(function () {
        if (count <= photoGallery.length - 2) {
            count += 1;
            $('#imageGallery').attr('src', photoGallery[count]);
        }
    });
    $("#imageGallery").click(function () {
        if (count <= photoGallery.length - 2) {
            count += 1;
            $('#imageGallery').attr('src', photoGallery[count]);
        }
    });
});

$(document).ready(function () {
    $("#prevGallery").click(function () {
        if (count >= 1) {
            count -= 1;
            $('#imageGallery').attr('src', photoGallery[count]);
        }
    });
});