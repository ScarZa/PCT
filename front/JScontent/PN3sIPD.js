function PN3SIPD(content, id = null) {

    var title = " งานผู้ป่วยใน (IPD)";
    var subtitle = "ตารางผู้ป่วยใน เฝ้าระวัง 3S (IPD) ";
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
    $("#contentGr").append("<div class='col-lg-12' id='alert-add'></div>")
    
    //$("#contentTB").empty().append("แบบสัมภาษณ์");
    $("#Budget").append($("<p><div class=''><div class='col-lg-2 offset-lg-2'><select class='form-control' id='sel-ward'></select></div>"
                        +"<div class='col-md-10 offset-md-3' style='text-align: right;'><input type='text' id='search-patient' placeholder='ค้นหา ชื่อ/สกุล/HN/AN'></div></div></p > <br><br>"));
    selectMash("#sel-ward","ward_data.php","เลือก ward",id);
    HAlert("#alert-add",id);
    AddPanel("DT_3S.php",id);
    $("select#sel-ward").change(function () {
        HAlert("#alert-add",$("#sel-ward").val());
        AddPanel("DT_3S.php",$("#sel-ward").val());
    });
    $("input#search-patient").keyup(function () {
        //if ($("#search-patient").val() != '') {
            AddPanel("DT_3S_search.php",$("#search-patient").val());
        //}
    });
    

    $("#contentGr").append("<div class='row'><div class='col-lg-12' id='panel-add'></div></div>")
}
