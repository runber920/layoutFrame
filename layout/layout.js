//轮播组件应用.
jQuery(".picScroll").slide({
    mainCell: "ul",
    autoPlay: false,
    effect: "left",
    vis: 6,
    scroll: 1,
    autoPage: true,
    pnLoop: false
});
//时间计时器
timeTick();
//全屏与退出全屏方法
$(".fullscreen").click(function () {
    resizeMax();
    if (fullScreenClickCount % 2 == 0) {
        handleFullScreen();  //全屏
        document.getElementById("feature_enlarge").style.display = "none";//全屏
        document.getElementById("feature_narrow").style.display = "";//退出
    } else {
        exitFullscreen();    //退出
        document.getElementById("feature_enlarge").style.display = "";//隐藏
        document.getElementById("feature_narrow").style.display = "none";//隐藏
    }
    fullScreenClickCount++;
});
//点击当前导航栏选择并且调整到响应得页面操作.
function clickAppMenu(id,urlLink,otype) {
    resizeMax();
    if ($("#" + id).attr('class') == 'active') {
        return;
    }
    $("#sysmain").attr("src",urlLink);
    $('#navnew').children("li").each(function () {
        $("#activeID" + this.id + "").removeClass("activeID");
        if (this.id == id) {
            $("#activeID" + id + "").addClass("activeID"); // 追加样式
        } else {
            $("#navnew li a").addClass("picScroll ul li a");
        }
    });
}
//隐藏左边栏与显示左边栏操作
var fullmp_retractCount = 0;
$(".fullrev_exit").click(function () {
    resizeMax();
    if (fullmp_retractCount % 2 == 0) {
        var t_width = document.documentElement.clientWidth;     //宽度
        //var t_height = document.documentElement.clientHeight;    //高度
        var j_width = t_width - 220;
        document.getElementById("layout_frame_side").style.width = "0px";
        document.getElementById("layout_frame_main").style.width = t_width + "px";
        document.getElementById("layout_frame_main").style.left = "0px";
        document.getElementById("mp_retract").style.display = "none";//收起
        document.getElementById("mp_stretch").style.display = "";//伸展
    } else {
        var t_width = document.documentElement.clientWidth;     //宽度
        //var t_height = document.documentElement.clientHeight;    //高度
        var j_width = t_width - 220;
        document.getElementById("layout_frame_side").style.width = "220px";
        document.getElementById("layout_frame_main").style.width = j_width + "px";
        document.getElementById("layout_frame_main").style.left = "219px";
        document.getElementById("mp_retract").style.display = "";//收起
        document.getElementById("mp_stretch").style.display = "none";//伸展
    }
    fullmp_retractCount++;
});
//进行框体页面重新宽度 高度重新定义操作
function resizeMax() {
    window.moveTo(0,0);
    window.resizeTo(screen.availWidth,screen.availHeight);
    window.outerWidth = screen.availWidth;
    window.outerHeight = screen.availHeight;
}