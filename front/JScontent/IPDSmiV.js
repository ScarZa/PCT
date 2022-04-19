function IPDSmiV(content, id = null) {
    
    var idvn = id; console.log(idvn)
    // if($.cookie("dep")=='009'){
    //     var title = " ลงทะเบียนคลินิกสุราและยาเสพติด";
    //     var process= "prcMRAPI.php";
    // }else if($.cookie("dep")=='008'){
    //     var title = " ลงทะเบียนสังคมสงเคราะห์";
    //     var process = "";
    // }else if($.cookie("dep")=='005'){
    //     var title = " ลงทะเบียนจิตเวชชุมชน";
    //     var process = "";
        
    // }
    var title = " ข้อมูลผู้ป่วย SMI-V test";
    var subtitle = "รายละเอียดผู้ป่วย";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    //$("#submenu1").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
        $("h5.widget-title").empty().prepend("แบบลงทะเบียนผู้ป่วย");
        $("#Budget").remove();
        $("#contentGr").empty().append($("<form action='' name='frmMR' id='frmMR' method='post' enctype='multipart/form-data'>"
        + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
        + "<div class='card border-success'>"
        + "<div class='card-header col-lg-12'><label class='col-form-label'><b>ข้อมูลคนไข้</b></label></div>"
        + "<div id='P-data' class='card-body col-lg-10'></div><div class='col-lg-2' id='vdate'>  </div><p>"
        + "</div></div></div></form>"));
        
;            
    AddDataSMIVDe('detail_IPDSMIVpatientAPI.php',idvn.data);
    
}
function AddDataSMIVDe(json, id) { console.log(id)
    $("#P-data").empty();
    $.getJSON('../back/API/'+json,{data : id},function (data) {
        $("#P-data").append($("<div class='col-lg-12 row'><div class='row col-lg-6'><span><label class='col-form-label'>AN : "+data[0].an+"<br>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
        +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>วันมารับบริการ : "+data[0].vstdate+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
        +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br><b style='color: red'>Admit ที่ : "+data[0].ward+"</b>"
        +"<br>แพทย์เจ้าของไข้ : "+data[0].doctor_name+"<br>ผู้บันทึกการประเมิน SMI-V : "+data[0].recorder
        +"<br>เหตุผล(ผู้ประเมิน) : "+data[0].comment+"<br>เหตุผล(ผู้ยืนยัน) : "+data[0].confirm_comment+"<br>สถานะ : <b>"+data[0].smiv_status+"</b><br><b>"+data[0].confirm+"</b><br>ประเภท SMI-V : <br><b id='smiv-detial'></b></label></span></div> "
        +"<div class='col-lg-6'> <img id='picsEMR-panel' width='230' /></div></div><br>")
        );
        $.getJSON('../back/API/check_image.php', { data1: data[0].hn }, function (datai) {
            if (datai.cc == '') { var img = '../images/person.png' } else { var img = '../back/API/show_image.php?hn=' + data[0].hn; }
            $("#picsEMR-panel").attr("src", img);
        });
        if (data[0].smi1_1 != '') { $("#smiv-detial").append("1.1 "+data[0].smi1_1 + "<br>") }
        if (data[0].smi1_2 != '') { $("#smiv-detial").append("1.2 "+data[0].smi1_2 + "<br>") }
        if (data[0].smi1_3 != '') { $("#smiv-detial").append("1.3 "+data[0].smi1_3 + "<br>") }
        if (data[0].smi1_4 != '') { $("#smiv-detial").append("1.4 "+data[0].smi1_4 + "<br>") }
        if (data[0].smi1_5 != '') { $("#smiv-detial").append("1.5 "+data[0].smi1_5 + "<br>") }
        if (data[0].smi1_6 != '') { $("#smiv-detial").append("1.6 "+data[0].smi1_6 + "<br>") }
        if (data[0].smi1_7 != '') { $("#smiv-detial").append("1.7 "+data[0].smi1_7 + "<br>") }
        if (data[0].smi1_8 != '') { $("#smiv-detial").append("1.8 "+data[0].smi1_8 + "<br>") }
        if (data[0].smi1_9 != '') { $("#smiv-detial").append("1.9 "+data[0].smi1_9 + "<br>") }
        if (data[0].smi1_10 != '') { $("#smiv-detial").append("1.10 "+data[0].smi1_10 + "<br>") }
        if (data[0].smi1_11 != '') { $("#smiv-detial").append("1.11 "+data[0].smi1_11 + "<br>") }
        if (data[0].t1_12 != '') { $("#smiv-detial").append("1.12 "+data[0].t1_12 + "<br>") }
        if (data[0].smi2_1 != '') { $("#smiv-detial").append("2.1 "+data[0].smi2_1 + "<br>") }
        if (data[0].smi2_2 != '') { $("#smiv-detial").append("2.2 "+data[0].smi2_2 + "<br>") }
        if (data[0].smi2_3 != '') { $("#smiv-detial").append("2.3 "+data[0].smi2_3 + "<br>") }
        if (data[0].smi2_4 != '') { $("#smiv-detial").append("2.4 "+data[0].smi2_4 + "<br>") }
        if (data[0].smi2_5 != '') { $("#smiv-detial").append("2.5 "+data[0].smi2_5 + "<br>") }
        if (data[0].smi2_6 != '') { $("#smiv-detial").append("2.6 "+data[0].smi2_6 + "<br>") }
        if (data[0].smi2_7 != '') { $("#smiv-detial").append("2.7 "+data[0].smi2_7 + "<br>") }
        if (data[0].smi2_8 != '') { $("#smiv-detial").append("2.8 "+data[0].smi2_8 + "<br>") }
        if (data[0].smi2_9 != '') { $("#smiv-detial").append("2.9 "+data[0].smi2_9 + "<br>") }
        if (data[0].smi2_10 != '') { $("#smiv-detial").append("2.10 "+data[0].smi2_10 + "<br>") }
        if (data[0].smi2_11 != '') { $("#smiv-detial").append("2.11 "+data[0].smi2_11 + "<br>") }
        if (data[0].t2_12 != '') { $("#smiv-detial").append("2.12 "+data[0].t2_12 + "<br>") }
        if (data[0].smi3_1 != '') { $("#smiv-detial").append("3.1 "+data[0].smi3_1 + "<br>") }
        if (data[0].smi3_2 != '') { $("#smiv-detial").append("3.2 "+data[0].smi3_2 + "<br>") }
        if (data[0].t3_3 != '') { $("#smiv-detial").append("3.3 "+data[0].t3_3 + "<br>") }
        if (data[0].smi4_1 != '') { $("#smiv-detial").append("4.1 "+data[0].smi4_1 + "<br>") }
        if (data[0].smi4_2 != '') { $("#smiv-detial").append("4.2 "+data[0].smi4_2 + "<br>") }
        if (data[0].smi4_3 != '') { $("#smiv-detial").append("4.3 "+data[0].smi4_3 + "<br>") }
        if (data[0].smi4_4 != '') { $("#smiv-detial").append("4.4 "+data[0].smi4_4 + "<br>") }
        if (data[0].smi5_1 != '') { $("#smiv-detial").append("5.1 "+data[0].smi5_1 + "<br>") }
        if (data[0].smi5_2 != '') { $("#smiv-detial").append("5.2 "+data[0].smi5_2 + "<br>") }
        if (data[0].smi5_3 != '') { $("#smiv-detial").append("5.3 "+data[0].smi5_3 + "<br>") }
        if (data[0].smi5_4 != '') { $("#smiv-detial").append("5.4 "+data[0].smi5_4 + "<br>") }
        
        $("#vdate").empty().append($("<b>วันที่บันทึกการประเมิน</b> <div class='row list-group' id='vdate_list'></div>"))  
        console.log(data[0].hn);
        $.getJSON('../back/API/vsdate_Data.php', { data: data[0].hn }, function (data) { 
            $("div#vdate_list").empty();
            $.each(data, function (i, item) {
                $("div#vdate_list").append($("<a href='#' id='li_vdate" + i + "' class='list-group-item list-group-item-action list-group-item-secondary'><b>" + data[i].recdate + "</b> <b style='font-size:13px'>" + data[i].rectime + " น.</b><br><b style='font-size:10px'>( " + data[i].smiv_status + " )</b></a>")
                )
                //if (item.an) { $("#li_vdate" + i).attr("style", "color: red"); }
                $("#li_vdate" + i).click(function () { 
                    AddDataSMIVDe("detail_IPDSMIVpatientAPI.php", item.vn);
                })
            });
        });

})
}