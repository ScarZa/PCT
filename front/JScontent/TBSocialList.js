function TBSocialList(content, id = null) {
    $.cookie("dep", "008");
    var title = " คลินิกสังคมสงเคราะห์";
    var subtitle = "ตารางผู้ป่วยคลินิกสังคมสงเคราะห์ ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu3").parent().find("li:eq(2)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่", "HN", "วันที่ส่ง", "ชื่อ - นามสกุล", "ผู้รับผิดชอบ", "ผู้ส่ง", "รายละเอียด"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_SocialList.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'IPDConsult',false,null,false,null,null,null,null,null,'dynamic-table');
}
