
$(document).ready(function () {

    var button = $("#button_change");
    var colorbutton = $("#button_toggle_colors");
    var boxedges = $("#button_toggle_roundedges");
    var addbox = $("#button_add_box");


    $(button).click(function () {

        var inputValue = $("#input_color").val();

        var element = $(".cow_color");

        $(element).html(inputValue);

    });



    $(colorbutton).click(function () {
        /* Your code goes here for Step 2 */
        $(".box").each(function () {

            if ($(this).css('background-color') == colorTeal) {
                $(this).css('background-color', "white");
            }
            else {
                $(this).css('background-color', colorTeal);
            }
        });
    });

    $(boxedges).click(function () {
        /* Your code goes here for Step 3 */
        $(".box").each(function () {
            $(this).toggleClass('round-edge');
        });
    });


    $(addbox).click(function () {
        var new_box = document.createElement("div");
        var existingBoxes = $(".box").length;

        $(new_box).attr("id", "box4");
        $(new_box).addClass("box");
        $(new_box).addClass("outlined");
        $("#boxes").append(new_box);

    })

});


