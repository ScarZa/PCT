function TBnewSocial(content, id = null) {

    var title = " สังคมสงเคราะห์";
    var subtitle = "ตารางผู้ป่วยใหม่ ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu3").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["ลำดับ","VN","HN","วันที่","ชื่อ - นามสกุล","ผู้สัมภาษณ์","ใบสัมภาษณ์"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentGr','../back/API/DT_Social.php?1','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../back/API/socialPDF.php',null,null,null,null,'dynamic-table');

    var CTb2 = new createTableAjax();
    CTb2.GetNewTableAjax('contentTB','../back/API/DT_Social.php?2','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../back/API/social02PDF.php',null,null,null,null,'dynamic-table2');



}
