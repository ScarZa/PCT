function Page01(content, id = null) {
//    var PL = new PageLayout(content);
//    PL.GetPL();
    var title = " Dashboard";
    var subtitle = "overview & stats ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);

    if ($.cookie("username")) {
        var PL = new PageLayout(content);
        PL.GetPL();
        
        $("#head-table").empty().append("<i class='ace-icon fa fa-table'></i> Dashboard")
        HAlert("#contentGr");
        WardTotalDis("#contentTB");
        $("#contentTB").prepend("<div class='col-lg-12' id='menu-report'></div>");
        $("#menu-report").empty().append("<a href='#' class='btn btn-info' id='ward-report'>รายงงานแยก ward</a>")
        $("#ward-report").click(function () { 
            WardDis("#contentTB");
        });
    } else {
        CohortDis(content);
        //$(content).empty().append("Hello world!!!!");
    }
    
}
