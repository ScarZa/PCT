function AddMapping (content,id=null) {
    var PL = new PageLayout(content);
    PL.GetPL();
    var title = " Mapping ข้อมูลผู้ใช้งานระบบกับ Hosxp";
    var subtitle = "ตารางข้อมูลผู้ใช้งานระบบ ";
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#settihg-01").parent().find("li:eq(0)").addClass("active")
        $("#contentGr").empty().append("<div class='row'><div class='col-md-12'>"+
                                    "<form action='' name='frmadduser' id='frmadduser' method='post'>"+
                                    "<div class='col-md-12'>"+
                                    "<h4 class='box-title'> ข้อมูลผู้ใช้งานระบบ </h4></div><div id='DU_content'></div>"+
                                    "<div class='col-md-12' id='DUS_content'></div></form>"+
                                    "<div class='col-md-12'>"+
                                    "<h4> ผู้ใช้งานระบบ </h4><div id='DSP_content'></div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/gear.ico' width='40'> ");
                $("#DUS_content").append($("<div class='form-group'>ผู้ใช้งาน : <select name='doctor' class='form-control select2' id='doctor' required></select></div>")
                                        ,$("<div class='form-group'>งานที่สังกัด : <select name='depcode' class='form-control select2' id='depcode' required></select></div>")
                                        );            
                                    var column1 = ["id.","ชื่อ-นามสกุล","งาน","แก้ไข","ลบ"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('DSP_content','../back/API/DT_UserMap.php?','../back/API/tempSendDataAPI.php',column1
    ,'AddMapping','jvl_mappingDU','mDU_id','index.html',true,false,null,false,null,false,null,null,null,null,null,'dynamic-table');
            //   CTb.GetNewTableAjax('DSP_content','JsonData/DT_User.php','JsonData/tempSendData.php',column1
            //   ,'AddUser','ss_member','ss_UserID','content/add_user.html',true,false,null,false,null,false,null,null,null,null,null,'dbtb');                    
                                
    
            var iduser = id;
            if(iduser == null){
        

                selectMash("select#doctor", "user_dataM.php", "เลือกผู้ใช้");
                selectMash("select#depcode", "dep_data.php", "เลือกงาน");
                                    
            $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='add_user'>");                
            $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-primary' id='USsubmit'>บันทึก</button></div>");
            
            }else{
                $.getJSON('../back/API/edit_user_dataM.php',{data: iduser.data}, function (data) {
                    selectMash("select#doctor", "user_edit_data.php", "เลือกผู้ใช้",data[0].doctorcode);
                    selectMash("select#depcode", "dep_data.php", "เลือกงาน", data[0].depcode);
                    $("div#DUS_content").append("<input type='hidden' id='method' name='method' value='edit_user'>");  
                    $("div#DUS_content").append("<input type='hidden' id='method' name='mDU_id' value='"+data[0].mDU_id+"'>");            
                    $("div#DUS_content").append("<div class='col-md-12' align='center'><button type='submit' class='btn btn-warning' id='USsubmit'>แก้ไข</button></div>");
                });
            }
            $("#frmadduser").on('submit', (function (e) {
                e.preventDefault();
                var dataForm = new FormData(this);
                // ตรวจสอบค่าต่างใน <form></form>
                // for (var value of dataForm.values()) {
                //     console.log(value);
                // }
                var settings = {
                    type: "POST",
                    url: "../back/API/prcMappingAPI.php",
                    async: true,
                    crossDomain: true,
                    data: dataForm,
                    contentType: false,
                    cache: false,
                    processData: false
                }
                $.ajax(settings).done(function (result) { console.log(result);
                        alert(result.messege);
                        AddMapping('#page-content');
                })
            }));
        }
