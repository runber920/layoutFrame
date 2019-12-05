
//进行屏幕自动适应展现处理.
function resizeMenuMax() {
    window.moveTo(0,0);
    window.resizeTo(screen.availWidth,screen.availHeight);
    window.outerWidth = screen.availWidth;
    window.outerHeight = screen.availHeight;
}
/**
 * 初始化整体页面
 */
function resizeMenuFramedbClick(divid) {
    resizeMenuMax();
    var h = document.documentElement.clientHeight;//高度
    var j = h - 0;
    document.getElementById(divid).style.height = j + "px"; //定义框体高度
}
function resizeMenuFrame(divid) {
    resizeMenuMax();
    var h = document.documentElement.clientHeight;
    var j = h - 0;
    document.getElementById(divid).style.height = j + "px";
}