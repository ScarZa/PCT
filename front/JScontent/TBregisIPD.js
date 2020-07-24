function TBRegisIPD(content, id = null) {

    var title = " งานผู้ป่วยใน (IPD)";
    var subtitle = "ตารางผู้ป่วยในแรกรับ (IPD) ";
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
    //$("#contentTB").empty().append("แบบสัมภาษณ์");
    $("#Budget").append($("<p><div class=''><div class='col-lg-2 offset-lg-2'><select class='form-control' id='sel-ward'></select></div>"
                        +"<div class='col-md-10 offset-md-3' style='text-align: right;'><input type='text' id='search-patient' placeholder='ค้นหา ชื่อ/สกุล/HN/AN'></div></div></p > <br>"));
    selectMash("#sel-ward","ward_data.php","เลือก ward");
    // var column1 = ["ลำดับ","AN","HN","วันที่ admit","ชื่อ - นามสกุล","ward","สภาพจิตใจ","ข้อมูลแรกรับ","ประเมินสภาพจิต"];
    // var CTb = new createTableAjax();
    // CTb.GetNewTableAjax('contentTB','../back/API/DT_ANregis.php?','../back/API/tempSendDataAPI.php',column1
    //     , null, null, null, null, false, false, null, true, 'GaugleModal', true, 'content/FR_detial.html', null, null, null, null, 'dynamic-table');
    
        $.getJSON('../back/API/DT_ANregis_search.php', function (data) { 
            var PnL = new PanelLayout("#panel-add",data.length);
            PnL.GetPnL();
            $.each(data, function (i, item) { 
                $("#pics-panel"+i).attr("src",'../back/API/show_image.php?hn='+item.hn)
                $("#patient-name"+i).append(" HN : "+item.hn+"<br>AN : "+item.an)
                $("#head-panel" + i).append("<span>" + item.fullname + "</span> สภาพจิต : <span id='mentel-status" + i + "'> &nbsp;" + item.mental + "</span><br>วันที่ admit : " + item.regdate + " ตึก : <b>" + item.name + "</b>"
                                            +"<br>Dx. : "+item.pdx+" "+item.dx0+" "+item.dx2+" "+item.dx3+" "+item.dx4+" "+item.dx5)
                $("#menu-panel" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'><img src='images/printer.ico' width='20'> ข้อมูลแรกรับ</a></li></ul>")
                                            ,$("<li><a data-toggle='tab' href='#' id='menu2_" + i + "'><img src='images/icon_set1/file_edit.ico' width='18'> ประเมินสภาพจิต</a></li></ul>")
                                        )
                                        $("#body-panel"+i).append($("<div class='alert alert-info'><span style='color:#1c2352'>CC : "+item.cc+"<br>HPI : "+item.hpi+"</span></div>")
                                        //+"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
                                        ,$("<div class='alert alert-danger'>เฝ้าระวัง : <span style='background-color:yellow'>"+item.typeP_1R+" "+item.typeP_2R+" "+item.typeP_3R+" "+item.typeP_4R+" "+item.typeP_5R+"</span></div>")
                                        //+"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
                )
            
                $("a#menu1_" + i).click(function () {
                    window.open('content/FR_detial.html?id='+item.ipd_fr_id, '', 'width=820,height=1000');return false;
                    //InterviewIPD("#page-content",{ data:item.an });
                })
                $("a#menu2_" + i).click(function () {
                    $("a#menu2_" + i).attr("onclick",GaugleModal()).attr("data-toggle","modal").attr("data-target","#GaugleModal").attr("data-whatever",item.ipd_fr_id)
                })
                if (item.mental == 'ยังไม่ประเมิน') { $("#mentel-status" + i).attr("style", "color:red;background-color:yellow").append(" !!! ") }
                if((item.typeP_1)+(item.typeP_2)+(item.typeP_3)+(item.typeP_4)+(item.typeP_5) > 0){ $("#widget_box_" + i).addClass("widget-color-red3")}else{$("#widget_box_"+i).addClass("widget-color-green")}
            });
        });

    $("select#sel-ward").change(function () { 
        console.log($("#sel-ward").val()) ;
        // CTb.GetNewTableAjax('contentTB','../back/API/DT_ANregis.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
        //   ,null,null,null,null,false,false,null,true,'GaugleModal',true,'content/FR_detial.html',null,null,null,null,'dynamic-table');
        $.getJSON('../back/API/DT_ANregis.php' ,{ data1: $("#sel-ward").val() }, function (data) { console.log(data)
            var PnL = new PanelLayout("#panel-add",data.length);
            PnL.GetPnL();
            $.each(data, function (i, item) { 
                $("#pics-panel"+i).attr("src",'../back/API/show_image.php?hn='+item.hn)
                $("#patient-name"+i).append(" HN : "+item.hn+"<br>AN : "+item.an)
                $("#head-panel" + i).append("<span>" + item.fullname + "</span> สภาพจิต : <span id='mentel-status"+i+"'> &nbsp;"+item.mental+"</span><br>วันที่ admit : " + item.regdate+" ตึก : <b>"+item.name+"</b>"
                +"<br>Dx. : "+item.pdx+" "+item.dx0+" "+item.dx2+" "+item.dx3+" "+item.dx4+" "+item.dx5)
                $("#menu-panel" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'><img src='images/printer.ico' width='20'> ข้อมูลแรกรับ</a></li></ul>")
                                            ,$("<li><a data-toggle='tab' href='#' id='menu2_" + i + "'><img src='images/icon_set1/file_edit.ico' width='18'> ประเมินสภาพจิต</a></li></ul>")
                                        )
                                        $("#body-panel"+i).append($("<div class='alert alert-info'><span style='color:#1c2352'>CC : "+item.cc+"<br>HPI : "+item.hpi+"</span></div>")
                                        //+"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
                                        ,$("<div class='alert alert-danger'>เฝ้าระวัง : <span style='background-color:yellow'>"+item.typeP_1R+" "+item.typeP_2R+" "+item.typeP_3R+" "+item.typeP_4R+" "+item.typeP_5R+"</span></div>")
                                        //+"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
                 )
                $("a#menu1_" + i).click(function () {
                    window.open('content/FR_detial.html?id='+item.ipd_fr_id, '', 'width=820,height=1000');return false;
                    //InterviewIPD("#page-content",{ data:item.an });
                })
                $("a#menu2_" + i).click(function () {
                    $("a#menu2_" + i).attr("onclick",GaugleModal()).attr("data-toggle","modal").attr("data-target","#GaugleModal").attr("data-whatever",item.ipd_fr_id)
                })
                if (item.mental == 'ยังไม่ประเมิน') { $("#mentel-status" + i).attr("style", "color:red;background-color:yellow").append(" !!! ") }
                if((item.typeP_1)+(item.typeP_2)+(item.typeP_3)+(item.typeP_4)+(item.typeP_5) > 0){ $("#widget_box_" + i).addClass("widget-color-red")}else{$("#widget_box_"+i).addClass("widget-color-green")}
            });
        });

    });
    $("input#search-patient").keyup(function () {
        if($("#search-patient").val() !=''){
        $.getJSON('../back/API/DT_ANregis_search.php',{data1:$("#search-patient").val()}, function (data) { 
            var PnL = new PanelLayout("#panel-add",data.length);
            PnL.GetPnL();
            $.each(data, function (i, item) { 
                $("#pics-panel"+i).attr("src",'../back/API/show_image.php?hn='+item.hn)
                $("#patient-name"+i).append(" HN : "+item.hn+"<br>AN : "+item.an)
                $("#head-panel" + i).append("<span>" + item.fullname + "</span> สภาพจิต : <span id='mentel-status"+i+"'> &nbsp;"+item.mental+"</span><br>วันที่ admit : " + item.regdate+" ตึก : <b>"+item.name+"</b>"
                +"<br>Dx. : "+item.pdx+" "+item.dx0+" "+item.dx2+" "+item.dx3+" "+item.dx4+" "+item.dx5)
                $("#menu-panel" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'><img src='images/printer.ico' width='20'> ข้อมูลแรกรับ</a></li></ul>")
                                            ,$("<li><a data-toggle='tab' href='#' id='menu2_" + i + "'><img src='images/icon_set1/file_edit.ico' width='18'> ประเมินสภาพจิต</a></li></ul>")
                                        )
               $("#body-panel"+i).append($("<div class='alert alert-info'><span style='color:#1c2352'>CC : "+item.cc+"<br>HPI : "+item.hpi+"</span></div>")
                                        //+"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
                                        ,$("<div class='alert alert-danger'>เฝ้าระวัง : <span style='background-color:yellow'>"+item.typeP_1R+" "+item.typeP_2R+" "+item.typeP_3R+" "+item.typeP_4R+" "+item.typeP_5R+"</span></div>")
                                        //+"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
                )
                $("a#menu1_" + i).click(function () {
                    window.open('content/FR_detial.html?id='+item.ipd_fr_id, '', 'width=820,height=1000');return false;
                    //InterviewIPD("#page-content",{ data:item.an });
                })
                $("a#menu2_" + i).click(function () {
                    $("a#menu2_" + i).attr("onclick",GaugleModal()).attr("data-toggle","modal").attr("data-target","#GaugleModal").attr("data-whatever",item.ipd_fr_id)
                })
                if (item.mental == 'ยังไม่ประเมิน') { $("#mentel-status" + i).attr("style", "color:red;background-color:yellow").append(" !!! ") }
                if((item.typeP_1)+(item.typeP_2)+(item.typeP_3)+(item.typeP_4)+(item.typeP_5) > 0){ $("#widget_box_" + i).addClass("widget-color-red")}else{$("#widget_box_"+i).addClass("widget-color-green")}
            });
        });
    }
    });
    $("#contentGr").append("<div class='row'><div class='col-lg-12' id='panel-add'></div></div>")
}
