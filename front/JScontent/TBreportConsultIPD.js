function TBreportConsultIPD(content, id = null) {
    $.cookie("dep", "");
    var title = " รายงานผู้ป่วยที่ส่ง Consult";
    var subtitle = "ตารางรายงานผู้ป่วยที่ส่ง Consult ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#Ssubmenu1").parent().find("li:eq(1)").addClass("active");
    
        var PL = new PageLayout(content);
        PL.GetPL();
  $("#Budget").append($("<p><div class='col-lg-12 row'><div class='col-lg-2 offset-lg-2'><select class='form-control' id='dep_clinic'></select></div>"
    + "<div class='col-lg-2 offset-lg-2'><select class='form-control' id='year-clinic'></select></div></div ></p > <br>"));
        selectMash("#dep_clinic","department_data.php","เลือกงาน");
  var option = "<option value=''> เลือกปีงบประมาณ </option>";
  var beginyear = 2020; 
  for (var i=0; i < 10;i++) {
    option += "<option value='" + beginyear + "'> " + (beginyear + 543) + " </option>";
    beginyear++;
                } console.log(option)
                $("#year-clinic").empty().append(option);
                $(".select2").select2();
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["รหัส", "รายการ Consult", "ต.ค", "พ.ย", "ธ.ค", "ม.ค", "ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","รวม","รายละเอียด"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_reportIPDcase.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'IPDConsult',false,null,false,null,null,null,null,null,'dynamic-table');

    // $("select#sel-ward").change(function () { 
    //     console.log($("#sel-ward").val()) ;
    //     CTb.GetNewTableAjax('contentTB','../back/API/DT_IPDcase.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
    //     ,null,null,null,null,false,true,'IPDConsult',false,null,false,null,null,null,null,null,'dynamic-table');
    // });
}
