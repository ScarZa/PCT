function TBDepression(content, id = null) {

    var title = " ผลการประเมินซึมเศร้า";
    var subtitle = "ตารางผู้ป่วยรับที่รับการประเมิน ";
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
    $("#contentGr").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["ลำดับ","VN","HN","วันที่","ชื่อ - นามสกุล","ผู้สัมภาษณ์","รายละเอียด"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentGr','../back/API/DT_Depression.php','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../back/API/ER_PDF.php',null,null,null,null,'dynamic-table');

}
