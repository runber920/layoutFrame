$(document).ready(function(){
    $("#main-nav li ul").hide();                                            // Hide all sub menus
    $("#main-nav li a.current").parent().find("ul").slideToggle("slow");    // Slide down the current menu item's sub menu
    $("#main-nav li a.nav-top-item").click(                                 // When a top menu item is clicked...

function(){
        $(this).parent().siblings().find("ul").slideUp("normal");           // Slide up all sub menus except the one clicked
        $(this).next().slideToggle("normal");                               // Slide down the clicked sub menu
        return false;
    });
    $("#main-nav li a.submenu").click(                                      // When a menu item with no sub menu is clicked...
function(){
        window.parent.frames["mainframe"].location.href = (this.href);
        return false;
    });
    $("#main-nav li ul li a").click(                                        // aileen add 鼠标点击高亮二级菜单项
function(){
        $("#main-nav li ul li a.current").removeClass("current");
        $(this).addClass("current");
    });
    $("#main-nav li ul li a.submenu-item").click(                           // aileen add 鼠标点击高亮三级级菜单项
function(){
        $(this).parent().siblings().find("ul").slideUp("normal");           // Slide up all sub menus except the one clicked
        $(this).next().slideToggle("normal");                               // Slide down the clicked sub menu
        return false;
    });
    $("#main-nav li ul li a.thirdmenu").click(                           // aileen add 鼠标点击高亮三级级菜单项没有下级菜单
function(){
        $(this).parent().siblings().find("ul").slideUp("normal");           // Slide up all sub menus except the one clicked
        window.parent.frames["mainframe"].location.href = (this.href);      // Just open the link instead of a sub menu
        return false;
    });
    $("#main-nav li ul li a.thirdmenu").click(                              // aileen add 鼠标点击高亮三级级菜单项
function(){
        window.parent.frames["mainframe"].location.href = (this.href);      // Just open the link instead of a sub menu
        return false;
    });
    $("#main-nav li .nav-top-item").hover(function(){
        $(this).stop().animate({paddingRight: "2px"}, 200);
    }, function(){
        $(this).stop().animate({paddingRight: "2px"});
    });
    $(".content-box-header h3").css({"cursor": "s-resize"});                // Give the h3 in Content Box Header a different cursor
    $(".closed-box .content-box-content").hide();                           // Hide the content of the header if it has the class "closed"
    $(".closed-box .content-box-tabs").hide();                              // Hide the tabs in the header if it has the class "closed"
    $(".content-box-header h3").click(                                      // When the h3 is clicked...
function(){
        $(this).parent().next().toggle();                                   // Toggle the Content Box
        $(this).parent().parent().toggleClass("closed-box");                // Toggle the class "closed-box" on the content box
        $(this).parent().find(".content-box-tabs").toggle();                // Toggle the tabs
    });
    // Content box tabs:
    $('.content-box .content-box-content div.tab-content').hide();          // Hide the content divs
    $('ul.content-box-tabs li a.default-tab').addClass('current');          // Add the class "current" to the default tab
    $('.content-box-content div.default-tab').show();                       // Show the div with class "default-tab"
    $('.content-box ul.content-box-tabs li a').click(                       // When a tab is clicked...
function(){
        $(this).parent().siblings().find("a").removeClass('current');       // Remove "current" class from all tabs
        $(this).addClass('current');                                        // Add class "current" to clicked tab
        var currentTab = $(this).attr('href');                              // Set variable "currentTab" to the value of href of clicked tab
        $(currentTab).siblings().hide();                                    // Hide all content divs
        $(currentTab).show();                                               // Show the content div with the id equal to the id of clicked tab
        return false;
    });
    //Close button:
    $(".ui-icon-close").click(function(){
        $(this).parent().fadeTo(400, 0, function(){                         // Links with the class "close" will close parent
            $(this).slideUp(400);
        });
        return false;
    });
    // Alternating table rows:
    $('tbody tr:even').addClass("alt-row");                                 // Add class "alt-row" to even table rows
                                                                            // Check all checkboxes when the one in a table head is checked:
    $('.check-all').click(function(){
        $(this).parent().parent().parent().parent().find("input[type='checkbox']").attr('checked', $(this).is(':checked'));
    });
});
