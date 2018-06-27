$(document).ready(function() {
    $("#rate_1").addClass("addingGrayScale");
    $("#rate_2").addClass("addingGrayScale");
    $("#rate_3").addClass("addingGrayScale");
    $("#rate_4").addClass("addingGrayScale");
    $("#rate_5").addClass("addingGrayScale");


    if ($("#rate_1").mouseenter(function() {
        $("#rate_1").removeClass("addingGrayScale");
    }));
    if ($("#rate_1").mouseleave(function() {
        $("#rate_1").addClass("addingGrayScale");
    }));

    if ($("#rate_2").mouseenter(function() {
        $("#rate_1 , #rate_2").removeClass("addingGrayScale");
    }));
    if ($("#rate_2").mouseleave(function() {
        $("#rate_1 , #rate_2").addClass("addingGrayScale");
    }));

    if ($("#rate_3").mouseenter(function() {
        $("#rate_1 , #rate_2 , #rate_3").removeClass("addingGrayScale");
    }));
    if ($("#rate_3").mouseleave(function() {
        $("#rate_1 , #rate_2 , #rate_3").addClass("addingGrayScale");
    }));

    if ($("#rate_4").mouseenter(function() {
        $("#rate_1 , #rate_2 , #rate_3 , #rate_4").removeClass("addingGrayScale");
    }));
    if ($("#rate_4").mouseleave(function() {
        $("#rate_1 , #rate_2 , #rate_3 , #rate_4").addClass("addingGrayScale");
    }));

    if ($("#rate_5").mouseenter(function() {
        $("#rate_1 , #rate_2 , #rate_3 , #rate_4 , #rate_5").removeClass("addingGrayScale");
    }));
    if ($("#rate_5").mouseleave(function() {
        $("#rate_1 , #rate_2 , #rate_3 , #rate_4 , #rate_5").addClass("addingGrayScale");
    }));

});
