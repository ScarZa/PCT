function PhyRegis2(content, id = null) {
    
    var title = " ลงทะเบียนนักจิตวิทยา";
    var subtitle = "แบบลงทะเบียน ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu1").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
        $("h5.widget-title").empty().prepend("แบบลงทะเบียนผู้ป่วย");
        $("#Budget").remove();
        $("#contentGr").empty().append($("<form action='' name='frmMR' id='frmMR' method='post' enctype='multipart/form-data'>"
        + "<div class='row'><div class='col-xs-12' id='cgi-post'>"
        + "<div class='card border-success'>"
        + "<div class='card-header col-xs-12'><label class='col-form-label'><b>ข้อมูลคนไข้</b></label></div>"
        + "<div id='P-data' class='card-body col-xs-12'></div></div><p>"
        + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ลงทะเบียน'></center></div>"
        + "</div></form>"));
        var idvn = id; console.log(idvn)
        $.getJSON('../../back/API/detail_CCpatientAPI.php',{data : idvn,data2 :'reg'},function (data) {console.log(data);
        $("#P-data").append($("<div class='col-xs-12 row'><div><div class='block'><img src='../../back/API/show_image.php?hn="+data[0].hn+"' width='150' /></div>"
        +"<span><label class='col-form-label'>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
        +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
        +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"</label></span></div> "
        +"</div><br>")
        // ,$("<textarea name='resend' class='form-control' placeholder='ที่อยู่ที่สามารถติดต่อได้' required></textarea><br>")
        // ,$("<div class='form-group col-xs-12 row'><div class='col-xs-6 row'><label><input class='ace' type='text' name='status' placeholder='หมายเลขโทรศัพท์ 1'></label></div>"
        //     +"<div class='col-xs-6 row'><label><input class='ace' type='text' name='status' placeholder='ความสัมพันธ์บุคคลที่ 1'></label></div></div>")
        // ,$("<div class='form-group col-xs-12 row'><div class='col-xs-6 row'><label><input class='ace' type='text' name='status' placeholder='หมายเลขโทรศัพท์ 2'></label></div>"
        //     +"<div class='col-xs-6 row'><label><input class='ace' type='text' name='status' placeholder='ความสัมพันธ์บุคคลที่ 2'></label></div></div>")
        // ,$("<div class='form-group col-xs-12 row'><div class='col-xs-6 row'><label><input class='ace' type='text' name='status' placeholder='หมายเลขโทรศัพท์ 3'></label></div>"
        //     +"<div class='col-xs-6 row'><label><input class='ace' type='text' name='status' placeholder='ความสัมพันธ์บุคคลที่ 3'></label></div></div>")
        ,$("<div class='form-group col-xs-12 row'><div class='col-xs-4 row'><label><input class='ace' type='date' name='regdate' placeholder='วันที่ลงทะเบียน'></label></div>"
            +"<div class='col-xs-6 row'><label><select name='phy_type' class='form-control select2' id='phy_type' required></select></label></div></div>")
        ,$("<div class='form-group col-xs-12 row'><div class='col-xs-6 row'><label><select name='phy_status' class='form-control select2' id='phy_status' required></select></label></div>"
            //+"<div class='col-xs-3'><label><select name='begin_year' class='form-control select2' id='begin_year' required></select></label></div>"
            +"<div class='col-xs-3'><label><select name='doctor' class='form-control select2' id='doctor' required></select></label></div></div>")
        //,$("<textarea name='note' class='form-control' placeholder='หมายเหตุ' required></textarea><br>")
        );

        selectMash("#phy_type","consult_data.php?data=006","เลือกเหตุผล");                      
        selectMash("#phy_status","member_status_data.php","เลือกสถานะ");
        selectMash("#doctor","clinic_data.php?data=006","เลือกผู้รับผิดชอบ");


$("#cgi-post").append($("<input type='hidden' name='hn' value='"+data[0].hn+"'>")
    , $("<input type='hidden' name='user' value='" + $.cookie("user") + "'>")
    ,$("<input type='hidden' name='tB_id' value='"+idvn+"'>")
    ,$("<input type='hidden' name='method' value='regis_Phy'>"));    
    
    $("#frmMR").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        // ตรวจสอบค่าต่างใน <form></form>
        // for (var value of dataForm.values()) {
        //     console.log(value);
        // }
        var settings = {
            type: "POST",
            url: "../../back/API/prcPhyAPI.php",
            async: true,
            crossDomain: true,
            data: dataForm,
            contentType: false,
            cache: false,
            processData: false
        }
        $.ajax(settings).done(function (result) { console.log(result);
            if(result.check=='N'){
                alert(result.messege);
                
            }else if(result.check=='Y'){
                alert(result.messege);
                KillMe();
            }
            
        })
    }));
});            

    
}
var StayAlive = 1; // เวลาเป็นวินาทีที่ต้องการให้ WIndows เปิดออก 
function KillMe()
{ 
setTimeout("self.close()",StayAlive * 1000); 
} 
