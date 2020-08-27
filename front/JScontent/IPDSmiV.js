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
    var title = " ข้อมูลผู้ป่วย SMI-V";
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
        + "<div id='P-data' class='card-body col-lg-12'></div></div><p>"
        //+ "<br><center><input type='submit' name='submit' class='btn btn-success' value='บันทึกผล'></center></div>"
        //+ "<br><center><button class='btn btn-success'>ลงทะเบียน</button> <button class='btn btn-danger'>ส่งคืน</button></center></div>"
        + "</div></form>"));
        
        $.getJSON('../back/API/detail_IPDSMIVAPI.php',{data : idvn.data},function (data) {console.log(data);
        $("#P-data").append($("<div class='col-lg-12 row'><div class='block'> <img src='../back/API/show_image.php?hn="+data[0].hn+"' width='125' /></div>><span>AN : "+data[0].an+"<br>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
        +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
        +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br><b style='color: red'>Admit ที่ : "+data[0].ward+"</b>"
        +"<br>แพทย์เจ้าของไข้ : "+data[0].doctor_name+"<br>ผู้บันทึกการประเมิน SMI-V : "+data[0].recorder
        +"<br>เหตุผล(ผู้ประเมิน) : "+data[0].comment+"<br>เหตุผล(ผู้ยืนยัน) : "+data[0].confirm_comment+"<br>ประเภท SMI-V : <br><b id='smiv-detial'></b></span>"
        +"</div><br>")
        );
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
        

$("#cgi-post").append($("<input type='hidden' name='hn' value='"+data[0].hn+"'>")
    ,$("<input type='hidden' name='tB_id' value='"+data[0].tB_id+"'>")
    ,$("<input type='hidden' name='vn' value='"+idvn.data+"'>")
    //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
    ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
    ,$("<input type='hidden' name='method' value='confirm_MR'>"));    
    
    $("#frmMR").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        // console.log(dataForm)
        // for (var value of dataForm.values()) {
        //     console.log(value);
        // }
        var settings = {
            type: "POST",
            url: "../back/API/"+process,
            async: true,
            crossDomain: true,
            data: dataForm,
            contentType: false,
            cache: false,
            processData: false
        }
        console.log(dataForm);
        $.ajax(settings).done(function (result) {
            if(result.check=='N'){
                alert(result.messege);
                $("#page-content").empty();
                TBMtrixRegis('#page-content');
            }else if(result.check=='Y'){
                $("#page-content").empty();
                popup('JScontent/MR_Regis.html?vn='+idvn.data, popup, 710, 520);
                TBMtrixRegis('#page-content');
            }
            
        })
    }));
});            

    
}
