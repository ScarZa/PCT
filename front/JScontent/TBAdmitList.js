function TBAdmitList(content, id = null) {
    var title = "(ผู้ป่วยใน)";
    var subtitle = "ตารางผู้ป่วย Admit ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu4").parent().find("li:eq(1)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่", "HN", "วันที่ Admit", "ชื่อ - นามสกุล","ward","สถานะ","สถานะประมิน", "รายละเอียด"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_AdmitList.php?','../back/API/tempSendDataAPI.php',column1
        , null, null, null, null, false, true, 'IPDProgress', false, null, false, null, null, null, null, null, 'dynamic-table');
        $("td > a > img").attr("width", "500")
}
