function TBSnap4(content, id = null) {

    var title = " ผลการประเมิน SNPA-IV";
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
    var column1 = ["HN","ชื่อ - นามสกุล","อายุ(ปี)","PDX","สิทธิ์การรักษา","การทดสอบ(ครั้ง)","รายละเอียด"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentGr','../back/API/DT_Snap4.php','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../front/Snap4_graph.html',null,null,null,null,'dynamic-table');

}
