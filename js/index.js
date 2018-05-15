$(document).ready(function () {


    $.getJSON("http://localhost:8080/zonascarga/temas/consultarTemas", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            if (val != null) {
                items.push("<li id='" + key + "'>" + val + "</li>");
            }
        });
        $('#ItemPreview').attr('src', `data:image/png;base64,${data.itemsTemaDTO[0].recursos[0].imagen}`);
        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });




});