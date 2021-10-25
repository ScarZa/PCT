function IPDProgress(content, id = null) {
    
    var idvn = id;
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
    var title = " รายชื่อผู้ป่วย Admit";
    var subtitle = "แบบลงทะเบียน";
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
        $("h5.widget-title").empty().prepend("แบบลงบันทึก Progres note");
        $("#Budget").remove();
        $("#contentGr").empty().append($("<form action='' name='frmMR' id='frmMR' method='post' enctype='multipart/form-data'>"
        + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
        + "<div class='card border-success'>"
        + "<div class='card-header col-lg-12'><label class='col-form-label'><b>ข้อมูลคนไข้</b></label></div>"
        + "<div id='P-data' class='card-body col-lg-12'></div></div><p>"
        //+ "<br><center><input type='submit' name='submit' class='btn btn-success' value='บันทึกผล'></center></div>"
        //+ "<br><center><button class='btn btn-success'>ลงทะเบียน</button> <button class='btn btn-danger'>ส่งคืน</button></center></div>"
        + "</div></form>"));
        
        $.getJSON('../back/API/detail_IPDpatientProgressAPI.php',{data : idvn.data},function (data) {
        $("#P-data").append($("<div class='col-lg-12 row'><div class='block'> <img id='pics-panel' width='125' /></div><span>AN : "+data[0].an+"<br>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
        +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" อายุ : "+data[0].age_y+" ปี "+data[0].age_m+" เดือน สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
        +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br><b style='color: red'>Admit ที่ : "+data[0].ward+"</b>  <br>แพทย์เจ้าของไข้ : "+data[0].doctor_name+"</span>"
        +"</div><br>")
            , $("<br><div class='row'><div class='col-lg-12'><a href='' id='progress-not' class='btn btn-success'><i class='fa fa-pencil-square-o'></i> Progress note</a></div></div>")
            );
            
        patient_photo('','../',data[0].hn,data[0].an,'#pics-panel');
        
$("#progress-not").click(function(){
    $("a#progress-not").attr("onclick", PGCommuModal()).attr("data-toggle", "modal").attr("data-target", "#PGCommuModal").attr("data-whatever", [data[0].an+' '+data[0].tB_id])
})

var column1 = ["ลำดับ", "วันบันทึก", "ผู้บันทึก", "Subject data","Object data", "สรุป","บันทึกแผน","รายละเอียดแผน"];
$("#contentTB").addClass("table-responsive");
var PTb = new createTableAjax();
$("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
PTb.GetNewTableAjax('contentTB', '../back/API/DT_progressCommu.php?' +data[0].ipd_fr_id, '../back/API/tempSendDataAPI.php', column1
, null, null, null, null, false, false, null, true, 'PCommuModal', true, 'content/PlanCommu.html?recorder='+$.cookie("user"), null, null, null, null, null);

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
