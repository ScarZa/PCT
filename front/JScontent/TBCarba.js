function TBCarba(content, id = null) {
    $.cookie("dep", "018");
    var title = " งานเภสัชกรรม";
    var subtitle = "ตารางผู้รับการประเมินยา Carbamazepine ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
  $("#Ssubmenu5-1").parent().find("li:eq(2)").addClass("active");
  
        var PL = new PageLayout(content);
  PL.GetPL();
  $("h5#head-table").empty().append("<i class='ace-icon fa fa-table'></i> " + subtitle);
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่", "HN", "วันที่ส่ง", "ชื่อ - นามสกุล", "งานที่ส่ง", "รายละเอียด"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_Carba.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'content/Carba_detial.html',null,null,null,null,'dynamic-table');
}
