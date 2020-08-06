function TBSmivList(content, id = null) {
    $.cookie("dep", "009");
    var title = " ผู้ป่วย SMI-V";
    var subtitle = "ตารางผู้ป่วยผู้ป่วย SMI-V ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu2").parent().find("li:eq(1)").addClass("active")
        var PL = new PageLayout(content);
  PL.GetPL();
  $("#Budget").append($("<p><div class=''><div class='col-lg-2 offset-lg-2'><select class='form-control' id='sel-ward'></select></div>"
                        +"</div></p > <br>"));
    selectMash("#sel-ward","ward_data.php","เลือก ward");
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["เลขที่","HN","วันที่ลงทะเบียน","ชื่อ - นามสกุล","ผู้ลงทะเบียน","admit","กระบวนการ","รายละเอียด"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_SMIVList.php?','../back/API/tempSendDataAPI.php',column1
      , null, null, null, null, false, true, 'IPDSmiV', false, null, false, null, null, null, null, null, 'dynamic-table');
  
  $("select#sel-ward").change(function () {
    console.log($("#sel-ward").val());
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    //var column1 = ["เลขที่","HN","วันที่ลงทะเบียน","ชื่อ - นามสกุล","ผู้ลงทะเบียน","admit","กระบวนการ","รายละเอียด"];
    //var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_SMIVList.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
      , null, null, null, null, false, true, 'IPDSmiV', false, null, false, null, null, null, null, null, 'dynamic-table');
  });
}
