function TBPharList(content, id = null) {

    var title = " เภสัชกรรม";
    var subtitle = "ตารางเภสัชกรรม ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu1").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่","HN","วันที่ส่ง","ชื่อ - นามสกุล","ผู้รับผิดชอบ","ผู้ส่ง","รายละเอียด"];
    var CTbPL = new createTableAjax();
    CTbPL.GetNewTableAjax('contentTB','../back/API/DT_PharList.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'MatrixRegis',false,null,false,null,null,null,null,null,'dynamic-table');
}
