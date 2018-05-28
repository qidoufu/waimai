$(function() {

    setInterval(function() {
        var a = $(".zhong").html();
        var b = $("#rate").html();
        if (a == "本地服务o2o" && b == "25%") {
            $(".zhong").html("到家o2o");
            $("#rate").html("85%");
        } else {
            $(".zhong").html("本地服务o2o");
            $("#rate").html("25%");
        }
    }, 220);
})