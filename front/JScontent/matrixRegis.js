function MatrixRegis(content, id = null) {
    
    var idvn = id; console.log(idvn)
    if($.cookie("dep")=='009'){
        var title = " ลงทะเบียนคลินิกสุราและยาเสพติด";
        var method = "confirm_MR";
        var process= "prcMRAPI.php";
        var popup_ = "MR_Regis.html"
    }else if($.cookie("dep")=='008'){
        var title = " ลงทะเบียนสังคมสงเคราะห์";
        var method = "confirm_Social";
        var process = "prcSocialAPI.php";
        var popup_ = "Social_Regis.html"
    }else if($.cookie("dep")=='005'){
        var title = " ลงทะเบียนจิตเวชชุมชน";
        var method = "confirm_COMMU";
        var process = "prcCOMMAPI.php";
        var popup_ = "COMMU_Regis.html"      
    }else if($.cookie("dep")=='018'){
        var title = " ลงทะเบียนเภสัชกรรม";
        var method = "confirm_Phar";
        var process = "prcPharAPI.php";
        var popup_ = "Phar_Regis.html"      
    }else if($.cookie("dep")=='006'){
        var title = " ลงทะเบียนนักจิตวิทยา";
        var method = "confirm_Phy";
        var process = "prcPhyAPI.php";
        var popup_ = "Phy_Regis.html"      
    }else if($.cookie("dep")=='024'){
        var title = " ลงทะเบียนงานโภชนาการ";
        var method = "confirm_Food";
        var process = "prcFoodAPI.php";
        var popup_ = "Food_Regis.html"      
    }
    var subtitle = "แบบลงทะเบียน";
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
        + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
        + "<div class='card border-success'>"
        + "<div class='card-header col-lg-12'><label class='col-form-label'><b>ข้อมูลคนไข้</b></label></div>"
        + "<div id='P-data' class='card-body col-lg-12'></div></div><p>"
        + "<br><center><input type='submit' name='submit' class='btn btn-success' value='บันทึกผล'></center></div>"
        //+ "<br><center><button class='btn btn-success'>ลงทะเบียน</button> <button class='btn btn-danger'>ส่งคืน</button></center></div>"
        + "</div></form>"));
        
        $.getJSON('../back/API/detail_CCpatientAPI.php',{data : idvn.data},function (data) {console.log(data);
        $("#P-data").append($("<div class='col-lg-12 row'><div class='block'> <img src='../back/API/show_image.php?hn="+data[0].hn+"' width='125px' /></div><span>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
        +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
        +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br><b style='color: red'>Admit ที่ : "+data[0].ward+"</b> <br>ส่งให้ : "+data[0].department+" <br>ส่งมาเพื่อ : "+data[0].cons_name+" <br>สาเหตุที่ส่ง/อาการ/ความจำเป็น : "+data[0].cause
        +"<br>แพทย์เจ้าของไข้ : "+data[0].doctor_name+"<br>ผู้ส่งบำบัด : "+data[0].sender_name+"</span>"
        +"</div><br>")
        ,$("<div class='form-group row'><div class='col-sm-2'><label><input class='ace' type='radio' name='status' value='Y'checked required><span class='lbl'> ลงทะเบียน</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='status' value='N' required><span class='lbl'> ส่งคืน</span></label></div></div>")
        ,$("<textarea name='resend' class='form-control' placeholder='สรุปความเห็น/ผลการให้คำปรึกษา'></textarea><br>"));

        $("textarea[name=resend]").hide();

        $("input[type=radio][name=status]").click(function(){
            if($("input[type=radio][name=status]:checked").val()=='N'){$("textarea[name=resend]").show();}else{$("textarea[name=resend]").hide();}
            });

$("#cgi-post").append($("<input type='hidden' name='hn' value='"+data[0].hn+"'>")
    ,$("<input type='hidden' name='tB_id' value='"+data[0].tB_id+"'>")
    ,$("<input type='hidden' name='vn' value='"+idvn.data+"'>")
    //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
    ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
    ,$("<input type='hidden' name='method' value='"+method+"'>"));    
    
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
                if($.cookie("dep")=='009'){
                    TBMtrixRegis('#page-content');
                }else if($.cookie("dep")=='008'){
                    TBSocialRegis('#page-content');
                }else if($.cookie("dep")=='005'){
                    TBCommuRegis('#page-content');
                }else if($.cookie("dep")=='018'){
                    TBPharRegis('#page-content');
                }else if($.cookie("dep")=='006'){
                    TBPhyRegis('#page-content');
                }else if($.cookie("dep")=='024'){
                    TBFoodRegis('#page-content');
                }
            }else if(result.check=='Y'){
                $("#page-content").empty();
                popup('JScontent/'+popup_+'?vn='+idvn.data, popup, 710, 520);
                if($.cookie("dep")=='009'){
                    TBMtrixRegis('#page-content');
                }else if($.cookie("dep")=='008'){
                    TBSocialRegis('#page-content');
                }else if($.cookie("dep")=='005'){
                    TBCommuRegis('#page-content');                    
                }else if($.cookie("dep")=='018'){
                    TBPharRegis('#page-content');
                }else if($.cookie("dep")=='006'){
                    TBPhyRegis('#page-content');
                }else if($.cookie("dep")=='024'){
                    TBFoodRegis('#page-content');
                }
                
            }
            
        })
    }));
});            

    
}
