function TBNPIQ(content, id = null) {

    var title = " ผลการประเมิน NPI - Q Thai";
    var subtitle = "ตารางผู้ป่วยรับที่รับการประเมิน ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#Ssubmenu8-2").parent().find("li:eq(2)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentGr").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่","HN","ชื่อ - นามสกุล","อายุ (ปี)","PDX","การทดสอบ(ครั้ง)","รายละเอียด"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentGr','../back/API/DT_NPIQ.php','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../back/API/NPIQ_PDF.php',null,null,null,null,'dynamic-table');

}
