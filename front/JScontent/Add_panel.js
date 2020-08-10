function AddPanel(content,id = null) {
    $.getJSON('../back/API/'+content,{data1:id}, function (data) { 
        var PnL = new PanelLayout("#panel-add",data.length);
        PnL.GetPnL();
        $.each(data, function (i, item) {
            $.getJSON('../back/API/check_image.php', { data1: item.hn }, function (data) {
                if (data.cc == '') { var img = 'images/person.png' } else { var img = '../back/API/show_image.php?hn=' + item.hn }
                $("#pics-panel" + i).attr("src", img)
            });
            
            $("#patient-name" + i).append(" HN : " + item.hn + "<br>AN : " + item.an)
            $("#head-panel" + i).append("<span>" + item.fullname + "</span> สภาพจิต : <span id='mentel-status" + i + "'> &nbsp;" + item.mental + "&nbsp; </span><br>วันที่ admit : " + item.regdate + " ( " + item.admit_day + " )<br>ตึก : <b>" + item.name + "</b>"
                + "<br>Dx. : " + item.pdx + " " + item.dx0 + " " + item.dx2 + " " + item.dx3 + " " + item.dx4 + " " + item.dx5)
            if (item.ipd_fr_id) {
                $("#menu-panel" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'><img src='images/printer.ico' width='20'> ข้อมูลแรกรับ</a></li></ul>")
                , $("<li><a data-toggle='tab' href='#' id='menu2_" + i + "'><img src='images/icon_set1/file_edit.ico' width='18'> ประเมินสภาพจิต</a></li></ul>")
                , $("<li><a data-toggle='tab' href='#' id='menu3_" + i + "'><img src='images/icon_set1/file_edit.ico' width='18'> สรุปข้อวินิจฉัยทางการพยาบาล</a></li></ul>")
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
            } else {
                $("#menu-panel" + i).append($("<li><a data-toggle='tab' href='#' id='menu1_" + i + "'><img src='images/icon_set1/file_edit.ico' width='18'> บันทึกแรกรับ</a></li></ul>"))
                $("a#menu1_" + i).click(function () {
                    InterviewIPD("#page-content",{ data:item.an });
                })
            }
            
            $("#body-panel" + i).append($("<div class='alert alert-info'><span style='color:#1c2352'>CC : " + item.cc + "<br>HPI : " + item.hpi + "</span></div>")
                , $("<div class='alert alert-danger'>เฝ้าระวัง : <span style='background-color:yellow'>" + item.typeP_1R + " " + item.typeP_2R + " " + item.typeP_3R + " " + item.typeP_4R + " " + item.typeP_5R + "</span><br><div><div id='smiv_class" + i + "'></div><span style='background-color:yellow' id='smiv-detial" + i + "'></span></div>"
            +"<br><div><div id='HAD"+i+"'></div><span style='background-color:yellow' id='HAD-detial"+i+"'></span></div></div> ")
        )
            $.getJSON('../back/API/detail_SMIVAPI.php', { data: item.hn }, function (data) {
                if (data[0].chk_1 + data[0].chk_2 + data[0].chk_3 + data[0].chk_4 > 0) {
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
            $.getJSON("../back/API/DT_HAD.php", { data: item.vn}, function (data) {
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
                if (((item.typeP_1) + (item.typeP_2) + (item.typeP_3) + (item.typeP_4) + (item.typeP_5) > 0) || item.smi4_id) { $("#widget_box_" + i).addClass("widget-color-red2") } else { $("#widget_box_" + i).addClass("widget-color-green") }
            } else {
                $("#widget-body").attr("style", "color:black;");
            }
        });
    });
}