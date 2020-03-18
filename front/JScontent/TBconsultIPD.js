function TBConsultIPD(content, id = null) {
    //$.cookie("dep", "009");
    var title = " ผู้ป่วยที่ส่ง Consult";
    var subtitle = "ตารางผู้ป่วยที่ส่ง Consult ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu1").parent().find("li:eq(0)").addClass("active");
    
        var PL = new PageLayout(content);
        PL.GetPL();
        // $("#Budget").append($("<p><div class='col-lg-12 row'><div class='col-lg-2 offset-lg-2'><select class='form-control' id='sel-ward'></select></div></div></p><br>"));
        // selectMash("#sel-ward","ward_data.php","เลือก ward");
    $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
    var column1 = ["ลำดับ","HN","วันที่ส่ง","ชื่อ - นามสกุล","คลินิกที่ส่ง","สถานะ","รายละเอียด"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_IPDcase.php?','../back/API/tempSendDataAPI.php',column1
    ,null,null,null,null,false,true,'IPDConsult',false,null,false,null,null,null,null,null,'dynamic-table');

    // $("select#sel-ward").change(function () { 
    //     console.log($("#sel-ward").val()) ;
    //     CTb.GetNewTableAjax('contentTB','../back/API/DT_IPDcase.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
    //     ,null,null,null,null,false,true,'IPDConsult',false,null,false,null,null,null,null,null,'dynamic-table');
    // });
}
