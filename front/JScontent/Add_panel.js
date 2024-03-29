function AddPanel(content,id = null) {
    $.getJSON('../back/API/'+content,{data1:id}, function (data) { console.log(data)
        var PnL = new PanelLayout("#panel-add", data.length);
        $("#total-admit").empty().append("Admit : "+data.length+" ราย")
        PnL.GetPnL();
        $.each(data, function (i, item) { 
            // $.getJSON('../back/API/check_image.php', { data1: item.hn, data2: item.an }, function (data) { console.log(data)
            //     if (data.cc == '') { var img = 'images/person.png' } else {
            //         if (data.chk == 'Y') {
            //             var img = 'PI_imgs/'+data.cc
            //         } else {
            //             var img = '../back/API/show_image.php?hn=' + item.hn
            //         }
                    
            //     }
            //     $("#pics-panel" + i).attr("src", img)
            // });
            patient_photo('','../',item.hn,item.an,'#pics-panel' + i);
            $("#patient-name" + i).append(" HN : " + item.hn + "<br>AN : " + item.an)
            $("#head-panel" + i).append("<span>" + item.fullname + "</span> <br>สภาพจิต : <span id='mentel-status" + i + "'> &nbsp;" + item.mental + "&nbsp; </span><br>Admit : " + item.regdate + " (" + item.admit_day + ") Admit <b>"+item.admit+"</b> ครั้ง<br>ตึก : <b>" + item.name + "</b>"
                + "<br>Dx. : " + item.pdx + " " + item.dx0 + " " + item.dx2 + " " + item.dx3 + " " + item.dx4 + " " + item.dx5)
            $("#box-alert" + i).append("<span id='row-alert_" + i+"'></span>")
            if (item.ipd_fr_id) {
                $("#menu-panel" + i).append($("<ul class='dropdown-navbar'>"
                    + "<li class= 'dropdown-header' > <img src='images/icon_set2/contacts.ico' width='30px'> กระบวนการ</li > <li class='dropdown-content'><ul class='dropdown-menu dropdown-navbar' id='menu01-body" + i + "'></ul></li>"
                    + "<li class= 'dropdown-header' > <img src='images/icon_set2/compose.ico' width='30px'> แบบประเมิน </li > <li class='dropdown-content'><ul class='dropdown-menu dropdown-navbar' id='menu02-body" + i + "'></ul></li>"
                    + "<li class= 'dropdown-header' > <img src='images/icon_set2/compose.ico' width='30px'> แบบ High Alert Drug </li > <li class='dropdown-content'><ul class='dropdown-menu dropdown-navbar' id='menu03-body" + i + "'></ul></li>"
                                        +"</ul> "))
                    $("#menu01-body" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'> <img src='images/icon_set2/browser.ico' width='20'> ข้อมูลแรกรับ</a></li>")
                                                , $("<li><a data-toggle='tab' href='#' id='menu11_" + i + "'> <img src='images/icon_set2/browser.ico' width='20'> แก้ไขข้อมูลแรกรับ</a></li>")
                                                , $("<li><a data-toggle='tab' href='#' id='menu3_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> สรุปข้อวินิจฉัยทางการพยาบาล</a></li>")
                                                , $("<li><a data-toggle='tab' href='#' id='menu6_" + i + "'> <img src='images/icon_set2/camera.ico' width='20'> รูปผู้ป่วย</a></li>")
                )
                    $("#menu02-body" + i).append($("<li><a data-toggle='tab' href='#' id='menu2_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> ประเมินสภาพจิต</a></li>")
                                            , $("<li><a data-toggle='tab' href='#' id='menu4_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> ประเมิน SMI-V</a></li>")
                                            , $("<li><a data-toggle='tab' href='#' id='menu5_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> ประเมินซึมเศร้า</a></li>")
                                            , $("<li><a data-toggle='tab' href='#' id='menu12_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> ประเมิน SAVE</a></li>")
                )
                $("#menu03-body" + i).append($("<li><a data-toggle='tab' href='#' id='menu7_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> Cozapine</a></li>")
                                            ,$("<li><a data-toggle='tab' href='#' id='menu8_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> Lithium Carbonate</a></li>")
                                            ,$("<li><a data-toggle='tab' href='#' id='menu9_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> Carbamazepine</a></li>")
                                            ,$("<li><a data-toggle='tab' href='#' id='menu10_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> Sodium Valproate</a></li>")
                )
                $("a#menu1_" + i).click(function () {
                    window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu2_" + i).click(function () {
                    $("a#menu2_" + i).attr("onclick", GaugleModal()).attr("data-toggle", "modal").attr("data-target", "#GaugleModal").attr("data-whatever", item.ipd_fr_id)
                })
                $("a#menu3_" + i).click(function () {
                    $("a#menu3_" + i).attr("onclick", ConcludeModel()).attr("data-toggle", "modal").attr("data-target", "#ConcludeModel").attr("data-whatever", item.ipd_fr_id)
                })
                $("a#menu4_" + i).click(function () { 
                    popup('../../CF-Form/font/content/Ass_SMIV.html?vn='+item.vn+'?user='+$.cookie("username"), popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu5_" + i).click(function () {
                    popup('../../CF-Form/font/content/Ass_Depress.html?vn=' + item.vn + '?user=' + $.cookie("username"), popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu6_" + i).click(function () {
                    $("a#menu6_" + i).attr("onclick", photoPIModal()).attr("data-toggle", "modal").attr("data-target", "#photoPIModal").attr("data-whatever", item.ipd_fr_id)
                })
                $("a#menu7_" + i).click(function () {
                    popup('../../CF-Form/font/content/Ass_Cozapine.html?vn=' + item.vn + '?user=' + $.cookie("username"), popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu8_" + i).click(function () {
                    popup('../../CF-Form/font/content/Ass_Lithium.html?vn=' + item.vn + '?user=' + $.cookie("username"), popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu9_" + i).click(function () {
                    popup('../../CF-Form/font/content/Ass_Carba.html?vn=' + item.vn + '?user=' + $.cookie("username"), popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu10_" + i).click(function () {
                    popup('../../CF-Form/font/content/Ass_Sodium.html?vn=' + item.vn + '?user=' + $.cookie("username"), popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
                $("a#menu11_" + i).click(function () {
                    $("a#menu11_" + i).attr("onclick", FrIPDModal()).attr("data-toggle", "modal").attr("data-target", "#FrIPDModal").attr("data-whatever", item.an)
                })
                $("a#menu12_" + i).click(function () {
                    popup('../../CF-Form/font/content/Ass_SAVE.html?vn=' + item.vn + '?user=' + $.cookie("username")+'?process=IPD', popup, 1440, 900);
                    //window.open('content/FR_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
                })
            } else {
                $("#menu-panel" + i).append($("<ul class='dropdown-navbar'>"
                    + "<li class= 'dropdown-header' > <img src='images/icon_set2/contacts.ico' width='30px'> กระบวนการ</li > <li class='dropdown-content'><ul class='dropdown-menu dropdown-navbar' id='menu01-body" + i + "'></ul></li>"
                    //+ "<li class= 'dropdown-header' > <img src='images/icon_set2/compose.ico' width='30px'> แบบประเมิน </li > <li class='dropdown-content'><ul class='dropdown-menu dropdown-navbar' id='menu02-body" + i + "'></ul></li>"
                                        +"</ul> "))
                $("#menu01-body" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'> <img src='images/icon_set1/file_edit.ico' width='18'> บันทึกแรกรับ</a></li>"))
                $("a#menu1_" + i).click(function () {
                    InterviewIPD("#page-content",{ data:item.an });
                })
            }
            if (item.typeP_1R != '') { $("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-purple' title='เฝ้าระวัง 3S'><b>3S</b></button> ") }
            if (item.typeP_3R != '') { $("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-pink' title='เฝ้าระวังฆ่าตัวตาย'><b> S </b></button> ") }
            if (item.typeP_4R != '') { $("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-yellow' title='เฝ้าระวังอุบัติเหตุ'><b> A </b></button> ") }
            if (item.typeP_5R != '') { $("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-danger' title='เฝ้าระวังก้าวร้าว'><b> V </b></button> ") }
            if (item.typeP_2R != '') { $("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-warning' title='เฝ้าระวังหลบหนี'><b> E </b></button> ") }
            //<i class='ace-icon fa fa-exclamation-triangle'></i>
            
            $("#body-panel" + i).append($("<div class='alert alert-info'><span style='color:#1c2352'>CC : " + item.cc + "<br>HPI : " + item.hpi + "</span></div>")
                , $("<div class='alert alert-danger'>เฝ้าระวัง : <span style='background-color:yellow'>" + item.typeP_1R + " " + item.typeP_2R + " " + item.typeP_3R + " " + item.typeP_4R + " " + item.typeP_5R + "</span><br><div><div id='smiv_class" + i + "'></div><span style='background-color:yellow' id='smiv-detial" + i + "'></span></div>"
                    + "<br><div><div id='HAD" + i + "'></div><span style='background-color:' id='HAD-detial" + i + "'></span></div></div> ")
                ,$("<a href='#' id='resSAVE"+i+"' class='btn btn-warning'> ผลประเมิน SAVE</a>")
                ,$("<div class='' id='tab-progerss" + i+"'><a href='#' id='show-detial" + i+"'> แสดงรายละเอียด <img src='images/click.gif' width='75'></a></div>")
            );
            $("a#resSAVE"+i).click(function () {
                window.open('content/SAVE_detial.html?id=' + item.ipd_fr_id, '', 'width=900,height=1000'); return false;
            })
            $("a#show-detial" + i).click(function () {
                var PL = new TabLayout('#tab-progerss' + i, 2);
                PL.GetTL();
                $("h5.widget-title").empty().prepend("Progress note");
                //$("#Budget").remove();
        
                $("#tab-progerss" + i+"l0 >a").empty().append(" Progress note(ชุมชน)");
                $("#tab-progerss" + i+"c0 >p").empty().append($("<div class='widget-main row'>"
                    + "<div id='progressCommu" + i + "' class='col-lg-12 col-md-12 col-sm-12 col-xs-12 scroll'></div>"
                    + "</div>"));
                $("#progressCommu" + i).empty();
                var column1 = ["ลำดับ", "วันบันทึก", "ผู้บันทึก", "Subject data", "Object data", "สรุป", "รายละเอียดแผน"];
                $("#progressCommu" + i).addClass("table-responsive");
                var PTb = new createTableAjax();
                $("#progressCommu" + i).html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
                PTb.GetNewTableAjax('progressCommu' + i, '../back/API/DT_progressCommu.php?' + item.ipd_fr_id, '../back/API/tempSendDataAPI.php', column1
                    , null, null, null, null, false, false, null, true, 'PCommuModal?', false, null, null, null, null, null, null);
            
                $("#tab-progerss" + i+"l1 >a").empty().append("Progress note(?)");
                $("#tab-progerss" + i+"c1 >p").empty().append($("<div class='widget-main row'><form action='' name='frmgauge' id='frmgauge' method='post' enctype='multipart/form-data'>"
                    + ""
                    + "<div id='gaugefrm' class='col-lg-12 col-md-12 col-sm-12 col-xs-12 scroll'></div>"
                    + "</form></div>"));
            });
            $.getJSON('../back/API/detail_SMIVAPI.php', { data: item.hn }, function (data) {
                if (data[0].chk_1 + data[0].chk_2 + data[0].chk_3 + data[0].chk_4 > 0) {
                    $("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-grey' title='เฝ้าระวัง SMI-V'>SMI</button> ")
                    $("#smiv-detial" + i).show();
                    if (data[0].smiv_class != '') { $("#smiv_class" + i).append("SMI-V : " + data[0].smiv_class) }
                    if (data[0].smi1_2 != '') { $("#smiv-detial" + i).append("1.2 " + data[0].smi1_2 + "<br>") }
                    if (data[0].smi1_3 != '') { $("#smiv-detial" + i).append("1.3 " + data[0].smi1_3 + "<br>") }
                    if (data[0].smi1_4 != '') { $("#smiv-detial" + i).append("1.4 " + data[0].smi1_4 + "<br>") }
                    if (data[0].smi1_5 != '') { $("#smiv-detial" + i).append("1.5 " + data[0].smi1_5 + "<br>") }
                    if (data[0].smi1_6 != '') { $("#smiv-detial" + i).append("1.6 " + data[0].smi1_6 + "<br>") }
                    if (data[0].smi1_7 != '') { $("#smiv-detial" + i).append("1.7 " + data[0].smi1_7 + "<br>") }
                    if (data[0].smi1_8 != '') { $("#smiv-detial" + i).append("1.8 " + data[0].smi1_8 + "<br>") }
                    if (data[0].smi1_9 != '') { $("#smiv-detial" + i).append("1.9 " + data[0].smi1_9 + "<br>") }
                    if (data[0].smi1_10 != '') { $("#smiv-detial" + i).append("1.10 " + data[0].smi1_10 + "<br>") }
                    if (data[0].smi1_11 != '') { $("#smiv-detial" + i).append("1.11 " + data[0].smi1_11 + "<br>") }
                    if (data[0].t1_12 != '') { $("#smiv-detial" + i).append("1.12 " + data[0].t1_12 + "<br>") }
                    if (data[0].smi2_1 != '') { $("#smiv-detial" + i).append("2.1 " + data[0].smi2_1 + "<br>") }
                    if (data[0].smi2_2 != '') { $("#smiv-detial" + i).append("2.2 " + data[0].smi2_2 + "<br>") }
                    if (data[0].smi2_3 != '') { $("#smiv-detial" + i).append("2.3 " + data[0].smi2_3 + "<br>") }
                    if (data[0].smi2_4 != '') { $("#smiv-detial" + i).append("2.4 " + data[0].smi2_4 + "<br>") }
                    if (data[0].smi2_5 != '') { $("#smiv-detial" + i).append("2.5 " + data[0].smi2_5 + "<br>") }
                    if (data[0].smi2_6 != '') { $("#smiv-detial" + i).append("2.6 " + data[0].smi2_6 + "<br>") }
                    if (data[0].smi2_7 != '') { $("#smiv-detial" + i).append("2.7 " + data[0].smi2_7 + "<br>") }
                    if (data[0].smi2_8 != '') { $("#smiv-detial" + i).append("2.8 " + data[0].smi2_8 + "<br>") }
                    if (data[0].smi2_9 != '') { $("#smiv-detial" + i).append("2.9 " + data[0].smi2_9 + "<br>") }
                    if (data[0].smi2_10 != '') { $("#smiv-detial" + i).append("2.10 " + data[0].smi2_10 + "<br>") }
                    if (data[0].smi2_11 != '') { $("#smiv-detial" + i).append("2.11 " + data[0].smi2_11 + "<br>") }
                    if (data[0].t2_12 != '') { $("#smiv-detial" + i).append("2.12 " + data[0].t2_12 + "<br>") }
                    if (data[0].smi3_1 != '') { $("#smiv-detial" + i).append("3.1 " + data[0].smi3_1 + "<br>") }
                    if (data[0].smi3_2 != '') { $("#smiv-detial" + i).append("3.2 " + data[0].smi3_2 + "<br>") }
                    if (data[0].t3_3 != '') { $("#smiv-detial" + i).append("3.3 " + data[0].t3_3 + "<br>") }
                    if (data[0].smi4_1 != '') { $("#smiv-detial" + i).append("4.1 " + data[0].smi4_1 + "<br>") }
                    if (data[0].smi4_2 != '') { $("#smiv-detial" + i).append("4.2 " + data[0].smi4_2 + "<br>") }
                    if (data[0].smi4_3 != '') { $("#smiv-detial" + i).append("4.3 " + data[0].smi4_3 + "<br>") }
                    if (data[0].smi4_4 != '') { $("#smiv-detial" + i).append("4.4 " + data[0].smi4_4 + "<br>") }
                    if (data[0].smi5_1 != '') { $("#smiv-detial" + i).append("5.1 " + data[0].smi5_1 + "<br>") }
                    if (data[0].smi5_2 != '') { $("#smiv-detial" + i).append("5.2 " + data[0].smi5_2 + "<br>") }
                    if (data[0].smi5_3 != '') { $("#smiv-detial" + i).append("5.3 " + data[0].smi5_3 + "<br>") }
                    if (data[0].smi5_4 != '') { $("#smiv-detial" + i).append("5.4 " + data[0].smi5_4 + "<br>") }
            
                } else { $("#smiv-detial").hide(); }
            });
            $.getJSON("../back/API/DT_HAD.php", { data: item.an }, function (data) {
                //console.log(data)
                if (data.Clozapine100 != null || data.Clozapine25 != null || data.Carbamazepine200 != null || data.LithiumCarbonate300 != null || data.SodiumValproate200 != null || data.SodiumValproate200CHRONO != null || data.SodiumValproate500 != null)
                    {$("#row-alert_" + i).append("<button class='buttonalert btn btn-minier btn-info' title='เฝ้าระวัง High Alert Drug'><b>H</b></button>")}
                if(data.Clozapine100 != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.Clozapine100+" (สั่งล่าสุด "+data.Clozapine100Date+")<br>");
                }
                if(data.Clozapine25 != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.Clozapine25+" (สั่งล่าสุด "+data.Clozapine25Date+")<br>");
                }
                if(data.Carbamazepine200 != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.Carbamazepine200+" (สั่งล่าสุด "+data.Carbamazepine200Date+")<br>");
                }
                if(data.LithiumCarbonate300 != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.LithiumCarbonate300+" (สั่งล่าสุด "+data.LithiumCarbonate300Date+")<br>");
                }
                if(data.SodiumValproate200 != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.SodiumValproate200+" (สั่งล่าสุด "+data.SodiumValproate200Date+")<br>");
                }
                if(data.SodiumValproate200CHRONO != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.SodiumValproate200CHRONO+" (สั่งล่าสุด "+data.SodiumValproate200CHRONODate+")<br>");
                }
                if(data.SodiumValproate500 != null){
                    $("#HAD-detial"+i).append("<b style='color: red'>High Alert Drug : </b>"+data.SodiumValproate500+" (สั่งล่าสุด "+data.SodiumValproate500Date+")");
                }
            
            });
            
            if (item.mental == 'ยังไม่ประเมิน') { $("#mentel-status" + i).attr("style", "color:red;background-color:yellow") }
            if (item.ipd_fr_id){
                //if (((item.typeP_1) + (item.typeP_2) + (item.typeP_3) + (item.typeP_4) + (item.typeP_5) > 0) || item.smi4_id) { $("#widget_box_" + i).addClass("widget-color-red2") } else { $("#widget_box_" + i).addClass("widget-color-blue2") }
                $("#widget_box_" + i).addClass("widget-color-default"); $("#head-panel" + i).attr("style", "color:#575757");$("#patient-name"+i).attr("style", "color:#575757");
            } else {
                $("#widget_box_" + i).addClass("widget-color-blue2"); $("#head-panel" + i).attr("style", "color:#FFFF");;$("#patient-name"+i).attr("style", "color:#FFFF");
            }
        });
    });
}