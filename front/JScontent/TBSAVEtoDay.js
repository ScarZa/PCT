function TBSAVEtoDay(content, id = null) {
    if (id == null) { id = '';}
    var title = " ประเมิน SAVE";
    var subtitle = "ตารางผู้ป่วยที่ต้องประเมิน SAVE ";
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
    $(".widget-body").append("<div class='row'><div class='col-lg-12'><label id='LTB2'></label><div id='contentTB2'></div></div></div>");
    $("#LGr").append("<u><h4>ผู้ป่วยครบประเมิน 3 วันแรก</h4></u>");
    $("#LTB").append("<u><h4>ผู้ป่วยครบประเมิน 7 วันแรก</h4></u>");
    $("#LTB2").append("<u><h4>ผู้ป่วยครบประเมิน 7 วัน</h4></u> ");
  $('#head-table').empty().append('ผู้ป่วยที่ต้องประเมิน SAVE ')
    $("#contentGr").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    $("#contentTB2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["VN", "AN", "HN", "ชื่อ - นามสกุล", "ward", "ประเมิน SAVE"];
    $("#contentGr").addClass("table-responsive");
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentGr','../back/API/DT_SAVE3.php?'+id,'../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../../CF-Form/font/content/Ass_SAVE.html?user=' + $.cookie("username")+'?process=IPD',null,null,null,null,'dynamic-table');

    var CTb2 = new createTableAjax();
    CTb2.GetNewTableAjax('contentTB','../back/API/DT_SAVE7day.php?'+id,'../back/API/tempSendDataAPI.php',column1
        , null, null, null, null, false, false, null, false, null, true, '../../CF-Form/font/content/Ass_SAVE.html?user=' + $.cookie("username") + '?process=IPD', null, null, null, null, 'dynamic-table2');
    
    var CTb3 = new createTableAjax();
    CTb3.GetNewTableAjax('contentTB2','../back/API/DT_SAVE7.php?'+id,'../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,false,null,true,'../../CF-Form/font/content/Ass_SAVE.html?user=' + $.cookie("username")+'?process=IPD',null,null,null,null,'dynamic-table3');



}
