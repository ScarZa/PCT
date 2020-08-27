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
    $("#submenu8").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["HN", "ชื่อ - นามสกุล", "อายุ", "PDX", "สิทธิ์การรักษา", "การทดสอบ(ครั้ง)", "รายละเอียด"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_Depression.php','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../front/content/Depress_graph.html',null,null,null,null,'dynamic-table');

}
