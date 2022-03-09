$(document).ready(function () {
    showInitTag()
    ShowCommentPost = function (){
        $(".jieshao").slideToggle();
        $(".zuanye").slideToggle();
        $(".luokuan0").slideToggle();
    }
});




/*
jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

addClass() - 向被选元素添加一个或多个类
removeClass() - 从被选元素删除一个或多个类
toggleClass() - 对被选元素进行添加/删除类的切换操作
css() - 设置或返回样式属性*/
function showInitTag(){

    $("#i2").removeClass("i_2");
    $("#i2").addClass("i_2_on");

    $("#i1").click(function(){
        $("#i2").removeClass("i_2_on");
        $("#i2").addClass("i_2");
        $(".left_i2").removeClass("on");
        $(".left_i2").addClass("off");


        $("#i3").removeClass("i_3_on");
        $("#i3").addClass("i_3");
        $(".left_i3").removeClass("on");
        $(".left_i3").addClass("off");

        $("#i1").removeClass("i_1");
        $("#i1").addClass("i_1_on");
        $(".left_i1").removeClass("off");
        $(".left_i1").addClass("on");
    });

    $("#i2").click(function(){
        $("#i1").removeClass("i_1_on");
        $("#i1").addClass("i_1");
        $(".left_i1").removeClass("on");
        $(".left_i1").addClass("off");

        $("#i3").removeClass("i_3_on");
        $("#i3").addClass("i_3");
        $(".left_i3").removeClass("on");
        $(".left_i3").addClass("off");

        $("#i2").removeClass("i_2");
        $("#i2").addClass("i_2_on");
        $(".left_i2").removeClass("off");
        $(".left_i2").addClass("on");
    });


    $("#i3").click(function(){
        $("#i2").removeClass("i_2_on");
        $("#i2").addClass("i_2");
        $(".left_i2").removeClass("on");
        $(".left_i2").addClass("off");

        $("#i1").removeClass("i_1_on");
        $("#i1").addClass("i_1");
        $(".left_i1").removeClass("on");
        $(".left_i1").addClass("off");

        $("#i3").removeClass("i_3");
        $("#i3").addClass("i_3_on");
        $(".left_i3").removeClass("off");
        $(".left_i3").addClass("on");
    });

    $("#666").click(function(){
        $(".main1").removeClass("on");
        $(".main1").addClass("off");
        $(".main3").removeClass("on");
        $(".main3").addClass("off");
        $(".main4").removeClass("on");
        $(".main4").addClass("off");
        $(".main2").removeClass("off");
        $(".main2").addClass("on");

    });

    $("#888").click(function(){
        $(".main2").removeClass("on");
        $(".main2").addClass("off");
        $(".main3").removeClass("on");
        $(".main3").addClass("off");
        $(".main4").removeClass("on");
        $(".main4").addClass("off");
        $(".main1").removeClass("off");
        $(".main1").addClass("on");

    });

    $("#555").click(function(){
        $(".main2").removeClass("on");
        $(".main2").addClass("off");
        $(".main1").removeClass("on");
        $(".main1").addClass("off");
        $(".tengfei").removeClass("on");
        $(".tengfei").addClass("off");
        $(".main4").removeClass("on");
        $(".main4").addClass("off");
        $(".main3").removeClass("off");
        $(".main3").addClass("on");
        $(".cainaio").removeClass("off");
        $(".cainaio").addClass("on");
    });

    $("#222").click(function(){
        $(".main2").removeClass("on");
        $(".main2").addClass("off");
        $(".main1").removeClass("on");
        $(".main1").addClass("off");
        $(".cainaio").removeClass("on");
        $(".cainaio").addClass("off");
        $(".main3").removeClass("on");
        $(".main3").addClass("off");
        $(".main4").removeClass("off");
        $(".main4").addClass("on");
        $(".tengfei").removeClass("off");
        $(".tengfei").addClass("on");

    });

}


