$(document).ready(function () {
    $("#open_menu").click(function () {
        if ($(".control_o").length == 1) {//收回
            $(".control_o").animate({ height: "10%" });
            $(".control_o").removeClass("control_o");
            $(".menu").animate({ width: "toggle" },function() {
                $(".control").removeAttr("style");
            });
        } else {
            //伸出
            $(".menu").animate({ width: "toggle" });
            $(".control").addClass("control_o");
            $(".control_o").animate({ height: "100%" });
        }
    });
    $(".menu_tile").click(function () {
        var this_widget = $(this);
        $(".menu").animate(
            {
                width: "toggle",
            },
            function () {
                $(".control_o").attr("class", "control");
                window.open(this_widget.attr("link"), "_self");
            }
        );
    });
});
