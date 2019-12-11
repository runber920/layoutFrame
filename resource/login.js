/**
 * @自定义的脚本 <br>
 * @应用统一的登陆页面样式全局操作
 * @author: 王明 <br>
 * @date: 2019-11-28 08:20:26 上午 <br>
 * @from: [海南省海口市美兰区 runber920@outlook.com] <br>
 * @version: v 1.0 <br>
 */
__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
};
var bootPATH = __CreateJSPath("login.js");
document.write('<link href="' + bootPATH + 'login/css/bootstrap.min.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'login/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'login/css/iconfont.css" rel="stylesheet" type="text/css" />');
document.write('<link href="' + bootPATH + 'login/css/login.css" rel="stylesheet" type="text/css" />');
document.write('<script src="' + bootPATH + 'js/jquery_1.11.js" type="text/javascript" ></sc' + 'ript>');
document.write('<script src="' + bootPATH + 'login/js/bootstrap.min.js" type="text/javascript" ></sc' + 'ript>');
