function TBPharRegis(content, id = null) {
    $.cookie("dep", "018");
    var title = " งานเภสัชกรรม";
    var subtitle = "ตารางานเภสัชกรรม ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu5").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["VN","HN","วันที่ส่ง","หมายเลบัตรประชาชน","ชื่อ - นามสกุล","งานที่ส่ง","ลงทะเบียน"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_Phar.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'MatrixRegis',false,null,false,null,null,null,null,null,'dynamic-table');
}
