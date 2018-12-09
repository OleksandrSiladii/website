$(document).ready(function () {
    $("#loader");
    var o = $(".popup"), e = $(".popup-backdrop"), n = $(".popup-close");
    $(".menuBtn").click(function () {
        $(this).toggleClass("open"), o.toggleClass("open")
    }), e.click(function () {
        o.removeClass("open")
    }), n.click(function () {
        o.removeClass("open")
    })
});