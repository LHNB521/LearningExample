
$(document).ready(function(){
   lihao()
});

function lihao() {

    $(".input").click(function(){
        $(".input").animate({
            width:"500px"});
        $(".nav_ul").removeClass("on");
        $(".nav_ul").addClass("off");
    });

}


