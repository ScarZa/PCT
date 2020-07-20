function TBRegisIPD(content, id = null) {

    var title = " งานผู้ป่วยใน (IPD)";
    var subtitle = "ตารางผู้ป่วยในแรกรับ (IPD) ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu1-1").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    //$("#contentTB").empty().append("แบบสัมภาษณ์");
    $("#Budget").append($("<p><div class='col-lg-12 row'><div class='col-lg-2 offset-lg-2'><select class='form-control' id='sel-ward'></select></div></div></p><br>"));
    selectMash("#sel-ward","ward_data.php","เลือก ward");
    var column1 = ["ลำดับ","AN","HN","วันที่ admit","ชื่อ - นามสกุล","ward","สภาพจิตใจ","ข้อมูลแรกรับ","ประเมินสภาพจิต"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_ANregis.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,false,null,true,'GaugleModal',true,'content/FR_detial.html',null,null,null,null,'dynamic-table');

    $("select#sel-ward").change(function () { 
        console.log($("#sel-ward").val()) ;
        CTb.GetNewTableAjax('contentTB','../back/API/DT_ANregis.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
          ,null,null,null,null,false,false,null,true,'GaugleModal',true,'content/FR_detial.html',null,null,null,null,'dynamic-table');

    });
}
