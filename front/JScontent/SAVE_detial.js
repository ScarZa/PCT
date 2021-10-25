function SAVEDetial(content, id = null) {
    var title = " ข้อมูลการประเมิน SAVE";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
  $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
    $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
            //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
    $("#Budget").empty().attr("align", "left").append($("<div class='col-lg-12 col-md-12 col-xs-12 alert alert-success'><div class='' id='medical-detial1'></div></div>")
        , $("<div class='col-sm-12' id='conclude-nurse'><u><b>ผลการประเมิน SAVE</b></u>"
                                                    +"<div class= '' id = 'S-result' ></div> <br><div class='' id='A-result'></div><div class='' id='V-result'></div><div class='' id='E-result'></div></div>")
                                                    //, $("<div class='col-sm-12 alert alert-warning'><div class='' id='conclude'></div></div><br>")
                                                    , $("<div class='col-sm-12'><center><span id='recorder'></span></center></div>")
                                                    , $("<div class='col-sm-12'><br><center><button id='print' class='btn btn-primary'>พิมพ์ข้อมูล</button></center></div>")
                                                    );
        $.getJSON('../../back/API/detail_FRAPI.php',{data : id},function (data) { console.log(data)
        $.getJSON('../../back/API/detail_patientAPI.php',{data : data.hn},function (data) {
            $("#medical-detial1").append($("<div class='col-sm-12'><span><label id='medical' class='col-form-label'>เลขบัตรประชาชน : " + data[0].cid + "<br>ชื่อ-สกุล : <b>" + data[0].fullname + "</b>"
                + "<br>ที่อยู่ : " + data[0].informaddr + "<br>วันเกิด : " + data[0].birthday + " อายุ : " + data[0].age + " ปี  สถานะภาพ : " + data[0].mrname + "<br>การวินิจฉัย : " + data[0].pdx + " " + data[0].dx0
                + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5
                + "</label></span> "
                + "<div class='col-sm-4 block' align='right'> <img id='pics-panel' width='100' /></div></div>"));
                $.getJSON('../../back/API/check_image.php', { data1: data[0].hn , data2: data[0].an }, function (datai) { 
                    if (datai.cc == '') { var img = '../images/person.png' } else {
                        if (datai.chk == 'Y') {
                            var img = '../PI_imgs/'+datai.cc
                        } else {
                            var img = '../../back/API/show_image.php?hn=' + data[0].hn
                        }
                        
                    }
                    $("#pics-panel").attr("src", img)
                });
        });
            $("#medical-detial1").prepend($("<div class='col-sm-8'>AN : <b>" + data.an + "</b> HN : <b>" + data.hn + "</b></div>"))
            
            var column1 = ["<b>แบบประเมินฆ่าตัวตาย (S : Suicide)</b>"];
            var Column1 = new $.Deferred();
            $.getJSON('../../back/API/SAVE_date.php', { data: data.vn }, function (data) {
                for (var keys in data) {
                    column1.push(getThaiDate2(data[keys].recdate));
                }
                Column1.resolve(column1);//console.log(Column1);
            });
            var column2 = ["<b>แบบประเมินอุบัติเหตุ (A : Accident)</b>"];
            var Column2 = new $.Deferred();
            $.getJSON('../../back/API/SAVE_date.php',{data : data.vn}, function (data) {
                for (var keys in data) { 
                    column2.push(getThaiDate2(data[keys].recdate));
                }
                Column2.resolve(column2);//console.log(Column1);
            });
            var column3 = ["<b>แบบประเมินพฤติกรรมรุนแรง (V : Violence)</b>"];
            var Column3 = new $.Deferred();
            $.getJSON('../../back/API/SAVE_date.php', { data: data.vn }, function (data) {
                for (var keys in data) {
                    column3.push(getThaiDate2(data[keys].recdate));
                }
                Column3.resolve(column3);//console.log(Column1);
            });
            var column4 = ["<b>แบบประเมินหลบหนี (E : Escape)</b>"];
            var Column4 = new $.Deferred();
            $.getJSON('../../back/API/SAVE_date.php',{data : data.vn}, function (data) {
                for (var keys in data) { 
                    column4.push(getThaiDate2(data[keys].recdate));
                }
                Column4.resolve(column4);//console.log(Column1);
            })
            var CTbS = new createTableAjax();
            var CTbA = new createTableAjax();
            var CTbV = new createTableAjax();
            var CTbE = new createTableAjax();
            
            var vn = data.vn;
            $("#S-result").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
            $.when(Column1).done(function (data) {
                return CTbS.GetNewTableAjax('S-result', '../../back/API/DT_SAVEreport.php?' + vn + '?1', '../../back/API/tempSendData.php', data
                    , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null, null);
            });
            $("#A-result").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
            $.when(Column2).done(function (data) {
                return CTbA.GetNewTableAjax('A-result', '../../back/API/DT_SAVEreport.php?' + vn + '?2', '../../back/API/tempSendData.php', data
                    , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null, null);
            });
            $("#V-result").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
            $.when(Column3).done(function (data) {
                return CTbV.GetNewTableAjax('V-result', '../../back/API/DT_SAVEreport.php?' + vn + '?3', '../../back/API/tempSendData.php', data
                    , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null, null);
            });
            $("#E-result").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
            $.when(Column4).done(function (data) {
                return CTbE.GetNewTableAjax('E-result', '../../back/API/DT_SAVEreport.php?' + vn + '?4', '../../back/API/tempSendData.php', data
                    , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null, null);
            });
                
        });
        $("button#print").click(function (e) {
            window.print()
        });
}
