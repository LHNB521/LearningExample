$(document).ready(function () {
    showInitTag()
});

function showInitTag() {

    $("#123").click(function () {
        $(".box").removeClass("");
        $(this).addClass("active");
    });

}