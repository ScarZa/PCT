function TBPatentRegis(content, id = null) {
    $.cookie("dep", "016");
    var title = " งานสิทธิบัตร";
    var subtitle = "ตารางงานสิทธิบัตร ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu10").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่", "VN", "HN", "วันที่ส่ง", "ชื่อ - นามสกุล", "ตึก Admit", "ลงทะเบียน"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_PatentR.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'MatrixRegis',false,null,false,null,null,null,null,null,'dynamic-table');
}
