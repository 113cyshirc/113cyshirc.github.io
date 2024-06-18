$(document).ready(function () {
    $("#open_menu").click(function () {
        if ($(".control_o").length == 1) {//收回
            $(".control_o").animate({ height: "10%" });
            $(".control_o").removeClass("control_o");
            $(".bar").css("background-color","rgba(0,0,0,0.5)"); //FIXME
            $(".menu").animate({ width: "toggle" },function() {
                $(".control").removeAttr("style");
            });
        } else {
            //伸出
            $(".menu").animate({ width: "toggle" });
            $(".control").addClass("control_o");
            $(".control_o").animate({ height: "100%" });
            $(".bar").css("background-color","rgba(2,0,0,0.7)"); //FIXME
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
