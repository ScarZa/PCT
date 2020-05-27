function AddUser (content,id=null) {
    var PL = new PageLayout(content);
    PL.GetPL();
    var title = " เพิ่มข้อมูลผู้ใช้งานระบบ";
    var subtitle = "ตารางข้อมูลผู้ใช้งานระบบ ";
        $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
        $("#head-table").empty().append(subtitle);
        $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
        $("#prev").hide();
        $("#this-page").text(title);
        $("li").removeClass("active");
        $("#submenu1").parent().find("li:eq(0)").addClass("active")

        $("#contentGr").empty().append("<div class='row'><div class='col-md-12'>"+
                                    "<form action='' name='frmadduser' id='frmadduser' method='post'>"+
                                    "<div class='col-md-12'>"+
                                    "<h4 class='box-title'> ข้อมูลผู้ใช้งานระบบ </h4></div><div id='DU_content'></div>"+
                                    "<div class='col-md-12' id='DUS_content'></div></form>"+
                                    "<div class='col-md-12'>"+
                                    "<h4> ผู้ใช้งานระบบ </h4><div id='DSP_content'></div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                $("#DUS_content").append($("<div class='form-group'>ผู้ใช้งาน : <select name='doctor' class='form-control select2' id='doctor' required></select></div>")
                    , $("<div class='form-group'>งานที่สังกัด : <select name='depcode' class='form-control select2' id='depcode' required></select></div>")
                    ,$("<div class='form-group'>ระดับการใช้งาน : <select name='status_user' class='form-control select2' id='status_user' required></select></div>")
                    ,$("<div class='form-group'>ชื่อผู้ใช้ : <INPUT TYPE='text' NAME='username' id='username' class='form-control' placeholder='ระบุชื่อผู้ใช้' required></div>")
                    ,$("<div class='form-group'>รหัสผ่าน : <INPUT TYPE='password' NAME='password' id='password' class='form-control' placeholder='ระบุรหัสผ่าน' required></div>")
                    ,$("<div class='form-group'>ยืนยันรหัสผ่าน : <INPUT TYPE='password' NAME='con_password' id='con_password' class='form-control' placeholder='ยืนยันรหัสผ่าน' required></div>")
    );   
    $("select#status_user").append($("<option value=''> เลือกระดับการใช้งาน </option>")
                                            ,$("<option value='ADMIN'> ผู้ดูแลระบบสูงสุด </option>")
                                            ,$("<option value='USER'> ผู้ใช้ทั่วไป </option>"));
                                    var column1 = ["id.","ชื่อ-นามสกุล","งาน","สถานะ","Username","แก้ไข","ลบ"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('DSP_content','../back/API/DT_User.php?','../back/API/tempSendDataAPI.php',column1
    ,'AddUser','jvlmatrix_user','user_id','index.html',true,false,null,false,null,false,null,null,null,null,null,'dynamic-table');
            //   CTb.GetNewTableAjax('DSP_content','JsonData/DT_User.php','JsonData/tempSendData.php',column1
            //   ,'AddUser','ss_member','ss_UserID','content/add_user.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                
    
            var iduser = id;
            if(iduser == null){
        

                selectMash("select#doctor", "user_edit_data.php", "เลือกผู้ใช้");
                selectMash("select#depcode", "dep_data.php", "เลือกงาน");
                                    
            $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='add_user'>");                
            $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button></div>");
            
            }else{
                $.getJSON('../back/API/edit_user_data.php',{data: iduser.data}, function (data) { console.log(data)
                    selectMash("select#doctor", "user_edit_data.php", "เลือกผู้ใช้",data[0].doctorcode);
                    selectMash("select#depcode", "dep_data.php", "เลือกงาน", data[0].depcode);
                    $("select#status_user").empty().append($("<option value=''> เลือกระดับการใช้งาน </option>")
                                            ,$("<option value='ADMIN'> ผู้ดูแลระบบสูงสุด </option>")
                                            ,$("<option value='USER'> ผู้ใช้ทั่วไป </option>"));
                                            if(data[0].status_user=='ADMIN'){
                                                $("option[value^=ADMIN]").attr("selected","selected");
                                            }else if(data[0].status_user=='USER'){
                                                $("option[value^=USER]").attr("selected","selected");
                    }
                    $("input#username").attr("value", data[0].username);
                    $("input#password").removeAttr("required", "required");
                    $("input#con_password").removeAttr("required", "required");
                    $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='edit_user'>");  
                    $("div#DUS_content").append("<input type='hidden' id='method' name='user_id' value='"+data[0].user_id+"'>");            
                    $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button></div>");
                });
            }
    $("#frmadduser").on('submit', (function (e) {
        if ($("#password").val() != $("#con_password").val()) {
            alert("รหัสผ่านไม่ตรงกันครับ กรุณายืนยันอีกครับ");
            $("#con_password").attr("value", "").focus();
            e.preventDefault();
        } else {
            e.preventDefault();
            var dataForm = new FormData(this);
            // ตรวจสอบค่าต่างใน <form></form>
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcUserAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $.ajax(settings).done(function (result) {
                console.log(result);
                alert(result.messege);
                AddUser('#page-content');
            })
        }
            }));
        }
