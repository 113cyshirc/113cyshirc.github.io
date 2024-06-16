$(document).ready(function () {
    $("#open_menu").click(function () {
        $(".menu").animate(
            {
                width: "toggle",
            },
            function () {
                if ($(".control").length === 0) {
                    $(".control_o").attr("class", "control");
                } else {
                    $(".control").attr("class", "control_o");
                }
            }
        );
    });
    $(".menu_tile").click(function () {
        var this_widget = $(this);
        $(".menu").animate(
            {
                width: "toggle",
            },
            function () {
                $(".control_o").attr("class", "control");
                window.location.replace(this_widget.attr("link"));
            }
        );
    });
});
