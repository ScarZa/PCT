function TBInterviewIPD(content, id = null) {

    var title = " งานผู้ป่วยใน (IPD)";
    var subtitle = "ตารางผู้ป่วยใน (IPD) ";
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
    //$("#contentTB").empty().append("แบบสัมภาษณ์");
    var column1 = ["AN","HN","วันที่ admit","หมายเลบัตรประชาชน","ชื่อ - นามสกุล","ที่อยู่","สัมภาษณ์"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_AN.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'InterviewIPD',false,null,false,null,null,null,null,null,'dynamic-table');
}
