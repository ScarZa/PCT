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
    $("#contentGr").append("<div class='col-lg-12 col-sm-12 col-xs-12' id='alert-add'></div>");
    
    //$("#contentTB").empty().append("แบบสัมภาษณ์");
    $("#Budget").append($("<div class=''><div class='col-lg-2 offset-lg-2 col-md-2 offset-md-2'><select class='form-control' id='sel-ward'></select></div>"
                        +"<div class='col-lg-10 offset-lg-2 col-md-10 offset-md-2 col-sm-12 col-xs-12' style='text-align: right;'><form class='form-search'><span class='input-icon'><input type='text' id='search-patient' placeholder='ค้นหา ชื่อ/สกุล/HN/AN'><i class='ace-icon fa fa-search nav-search-icon'></i></span></form></div></div><p>"));
    selectMash("#sel-ward","ward_data.php","เลือก ward",$.cookie("ward"));
    // var column1 = ["ลำดับ","AN","HN","วันที่ admit","ชื่อ - นามสกุล","ward","สภาพจิตใจ","ข้อมูลแรกรับ","ประเมินสภาพจิต"];
    // var CTb = new createTableAjax();
    // CTb.GetNewTableAjax('contentTB','../back/API/DT_ANregis.php?','../back/API/tempSendDataAPI.php',column1
    //     , null, null, null, null, false, false, null, true, 'GaugleModal', true, 'content/FR_detial.html', null, null, null, null, 'dynamic-table');
    HAlert("#alert-add",$.cookie("ward"));
    AddPanel("DT_ANregis.php",$.cookie("ward"));
    $("select#sel-ward").change(function () {
        HAlert("#alert-add",$("#sel-ward").val());
        AddPanel("DT_ANregis.php",$("#sel-ward").val());
    });
    $("input#search-patient").keyup(function () {
        //if ($("#search-patient").val() != '') {
            AddPanel("DT_ANregis_search.php",$("#search-patient").val());
        //}
    });
    

    $("#contentGr").append("<div class='row'><div class='col-lg-12' id='panel-add'></div></div>")
}
