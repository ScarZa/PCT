function FRDetial(content, id = null) {
    var title = " ข้อมูลแรกรับ";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
  $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
    $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
            //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
    $("#Budget").empty().attr("align", "left").append($("<div class='col-sm-12 alert alert-success'><div class='' id='medical-detial1'></div><div class='' id='medical-detial2'></div></div><br>")
                                                    , $("<div class='col-sm-12 alert alert-danger'><div class='' id='alert'></div></div><br>")
                                                    , $("<div class='col-sm-12 alert alert-info'><div class='' id='ipd-ass'></div></div><br>")
                                                    , $("<div class='col-sm-12 alert alert-info'><u>การประเมินสภาพร่างกายเบื้องต้น</u><div class='' id='condition'></div></div><br>")
                                                    , $("<div class='col-sm-12 alert alert-warning'><div class='' id='conclude'></div></div><br>")
                                                    , $("<div class='col-sm-12'><center><span id='recorder'></span></center></div>")
                                                    )
        $.getJSON('../../back/API/detail_FRAPI.php',{data : id},function (data) { console.log(data)
        $.getJSON('../../back/API/detail_patientAPI.php',{data : data.hn},function (data) {
            $("#medical-detial1").append($("<div class='col-sm-8'><span><label id='medical' class='col-form-label'>เลขบัตรประชาชน : " + data[0].cid + "<br>ชื่อ-สกุล : <b>" + data[0].fullname + "</b>"
                + "<br>ที่อยู่ : " + data[0].informaddr + "<br>วันเกิด : " + data[0].birthday + " อายุ : " + data[0].age + " ปี  สถานะภาพ : " + data[0].mrname + "<br>การวินิจฉัย : " + data[0].pdx + " " + data[0].dx0
                + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5
                + "</label></span></div> "
                + "<div class='col-sm-4 block'> <img src='../../back/API/show_image.php?hn=" + data[0].hn + "' width='100' /></div>"));
        });
        console.log(data.an)
            $("#medical-detial1").prepend($("<div class='col-sm-8'>AN : <b>" + data.an + "</b> HN : <b>" + data.hn + "</b></div>"))
            $("#medical-detial2").append($("<div class='col-sm-12'>ชื่อผู้ให้ประวัติ : <b id='biographer'></b>&nbsp;&nbsp; เกี่ยวข้องเป็น : <b id='relative'></b>&nbsp;&nbsp; โทรศัพท์ : <b id='tel0'></b></div>")
                , $("<div class='col-sm-12' id='tel-rel'>" + data.relative1 + " : <b>" + data.tel1 + "</b>&nbsp;&nbsp; " + data.relative2 + " : <b>" + data.tel2 + "</b> </div>")
                , $("<div class='col-sm-12'>บิดา : <b id='fathername'></b>&nbsp;&nbsp; สถานะ : <b>" + data.father_chk + "</b> <span id='father-detial'>&nbsp;&nbsp; อายุ : <b>" + data.father_age + " ปี</b> &nbsp;&nbsp; อาชีพ : <b>" + data.father_occup + "</b></span></div>")
                , $("<div class='col-sm-12'>มารดา : <b id='mothername'></b>&nbsp;&nbsp; สถานะ : <b>" + data.mother_chk + "</b> <span id='mother-detial'>&nbsp;&nbsp; อายุ : <b>" + data.mother_age + " ปี</b> &nbsp;&nbsp; อาชีพ : <b>" + data.mother_occup + "</b></span></div>")
                , $("<div class='col-sm-12'>สถานะสมรส : <b>" + data.marry_chk + "</b> <span id='marry-detial'>&nbsp;&nbsp; ชื่อ-สกุลคู่สมรส : <b>" + data.spouse_name + "</b> &nbsp;&nbsp; จำนวนบุตร : <b>" + data.child + "</b> คน</span></div>")
                , $("<div class='col-sm-12' id='earmark'>ตำหนิ : <b>" + data.earmark + "</b></div>")
                , $("<div class='col-sm-12'>น้ำหนัก : <b>" + data.bw + " </b>  ก.ก. &nbsp;&nbsp; ส่วนสูง : <b>" + data.height + "</b>  ซ.ม. &nbsp;&nbsp; BMI : <b>" + data.bmi + "</b></div>")
                , $("<div class='col-sm-12' id='cc'>CC : <b>" + data.cc + "</b></div>")
                , $("<div class='col-sm-12' id='hpi'>HPI : <b>" + data.hpi + "</b></div>")
                , $("<div class='col-sm-12' id='pmh'>PMH : <b>" + data.pmh + "</b></div>")
            );
            $("#alert").append($("<div class='col-sm-12' id='typeP'>เฝ้าระวัง : <b id='typeP-detial'></b></div>")
                            , $("<div class='col-sm-12' id='weapon'>ประวัติพกพาอาวุธ : <b>" + data.weapon + "</b></div>")
                            , $("<div class='col-sm-12' id='weaponer'>พกพาอาวุธ(พบในรพจ.) : <b>" + data.weaponer + "</b></div>")
                            , $("<div class='col-sm-12' id='detain'>การจำกัดพฤติกรรม : <b>" + data.detain + "</b></div>")
                            , $("<div class='col-sm-12' id='smiv'>SMI-V : <b id='smiv-detial'></b></div>")
                            , $("<div class='col-sm-12' id='lawpsych'>นิติจิตเวช : <b>" + data.lawpsych + "</b></div>")
                            , $("<div class='col-sm-12' id='sleep'>การนอนหลับ : <b>" + data.sleep + "</b></div>")
                            , $("<div class='col-sm-12' id='IC'>IC : <b>" + data.IC + "</b></div>")
                            , $("<div class='col-sm-12'>การรับยา : <b id='med_chk'></b>&nbsp;&nbsp; <span id='med-detial'>&nbsp;&nbsp; รายละเอียด : <b>" + data.med + "</b></span></div>")
                            , $("<div class='col-sm-12' id='accident'>อุบัติเหตุ : <b>" + data.accident + "</b></div>")
                            , $("<div class='col-sm-12' id='wound'>บาดแผล : <b>" + data.wound + "</b></div>")
                            , $("<div class='col-sm-12' id='surgery'>อุบัติเหตุทางสมอง/การผ่าตัด : <b>" + data.surgery + "</b></div>")
                            , $("<div class='col-sm-12' id='complicate'>ภาวะแทรกซ้อน (ER) : <b>" + data.complicate + "</b></div>")
                            , $("<div class='col-sm-12' id='menses'>ประจำเดือน : <b>" + data.menses + "</b></div>")




            );
            $("#ipd-ass").append($("<div class='col-sm-12'>โรคประจำตัวหรืออาการทางกายในปัจจุบัน  : <b>" + data.disease_chk + "</b> <span id='disease'></span></div>")
                                , $("<div class='col-sm-12'>ประว้ติการชัก  : <b>" + data.whip_chk + "</b> <span id='whip'>รายละเอียด : <b>" + data.whip + "</b></span></div>")
                                , $("<div class='col-sm-12'>ยาที่รับประทานประจำ  : <b>" + data.regular_med_chk + "</b> <span id='regular_med'>รายละเอียด : <b>" + data.regular_med + "</b></span></div>")
                                , $("<div class='col-sm-12'>ประวัติการแพ้ยา   : <b>" + data.adr_chk + "</b> <span id='adr'>รายละเอียด : <b>" + data.adr + "</b></span></div>")
                                , $("<div class='col-sm-12'>แพ้อาหาร/แพ้สารอื่นๆ   : <b>" + data.beallergic_chk + "</b> <span id='beallergic'>รายละเอียด : <b>" + data.beallergic + "</b></span></div>")
                                , $("<div class='col-sm-12'>ประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ   : <b>" + data.old_med_chk + "</b> <span id='old_med'>รายละเอียด : <b>" + data.old_med + "</b></span></div>")
                                , $("<div class='col-sm-12'>ประวัติกรรมพันธุ์โรคทางจิตเวช    : <b>" + data.heredity_chk + "</b> <span id='heredity'>รายละเอียด : <b>" + data.heredity + "</b></span></div>")
                                , $("<div class='col-sm-12'>ประวัติการฆ่าตัวตัวตาย / ทำร้ายร่างตานเอง ( 3 เดือนย้อนหลัง)   : <b>" + data.Hurt_yourself_chk + "</b> <br><div class='col-sm-2'></div><div class='col-sm-10'><span id='Hurt_yourself'></span></div></div>")
                                , $("<div class='col-sm-12'>คดีทั่วไป    : <b>" + data.lawsuit_chk + "</b> <span id='lawsuit'>รายละเอียด : <b>" + data.lawsuit + "</b></span></div>")
                                , $("<div class='col-sm-12'>บุคลิกภาพเดิม    : <b>" + data.personality + "</b></div>")
            );

            $("#condition").append($("<div class='col-sm-12'>รูปร่าง  : <b>" + data.shape_name + "</b></div>")
                                , $("<div class='col-sm-12'>สีผิว  : <b>" + data.skin_name + "</b></div>")
                                , $("<div class='col-sm-12' id='scab'>โรคผิวหนัง   : <span id='scab-detial'></span></div>")
                                , $("<div class='col-sm-12'>อาการบวม   : <b>" + data.swelling_chk + "</b> <span id='swelling'></span></div>")
                                , $("<div class='col-sm-12'>การเคลื่อนไหว  : <b id='movement'>" + data.movement + "</b></div>")
                                , $("<div class='col-sm-12'>ความพิการ   : <b>" + data.disabled_chk + "</b> <span id='disabled'></span></div>")
            );
            $("#conclude").append($("<div class='col-sm-12'>ประเภทผู้ป่วย  : <b>" + data.typep  + "</b></div>")
            , $("<div class='col-sm-12'>การรีเฟอร์แรกรับ  : <b>" + data.refer + "</b></div>")
            , $("<div class='col-sm-12'>ประเภทการมา Admit   : <b>" + data.admit_type + "</b></div>")
            , $("<div class='col-sm-12'>ประเภทการ admit   : <b>" + data.income + "</b> <span id='income'></span></div>")
);
            $("#biographer").append(data.biographer);
            $("#relative").append(data.relative);
            $("#tel0").append(data.tel0);
            if (data.tel1 != '' || data.tel2 != '') { $("#tel-rel").show(); } else { $("#tel-rel").hide(); }
            $("#fathername").append(data.fathername);
            if (data.father_chk == 'ยังมีชีวิตอยู่') { $("#father-detial").show(); } else { $("#father-detial").hide(); }
            $("#mothername").append(data.mothername);
            if (data.mother_chk == 'ยังมีชีวิตอยู่') { $("#mother-detial").show(); } else { $("#mother-detial").hide(); }
            if (data.marry_chk == 'คู่') { $("#marry-detial").show(); } else { $("#marry-detial").hide(); }
            if (data.earmark == '') { $("#earmark").hide(); } else { $("#earmark").show(); }
            if (data.typeP_1 != '' || data.typeP_2 != '' || data.typeP_3 != '' || data.typeP_4 != '' || data.typeP_5 != '') {
                $("#typeP").show();
                if (data.typeP_1 != '') { $("#typeP-detial").append("<b>" + data.typeP_1 + "</b>") }
                if (data.typeP_2 != '') { $("#typeP-detial").append("<b>" + data.typeP_2 + "</b>") }
                if (data.typeP_3 != '') { $("#typeP-detial").append("<b>" + data.typeP_3 + "</b>") }
                if (data.typeP_4 != '') { $("#typeP-detial").append("<b>" + data.typeP_4 + "</b>") }
                if (data.typeP_5 != '') { $("#typeP-detial").append("<b>" + data.typeP_5 + "</b>") }
                
            } else { $("#typeP").hide(); }
            if (data.weapon == '') { $("#weapon").hide(); } else { $("#weapon").show(); }
            if (data.weaponer == '') { $("#weaponer").hide(); } else { $("#weaponer").show(); }
            if (data.detain == '') { $("#detain").hide(); } else { $("#detain").show(); }
            if (data.smi4_1 != '' || data.smi4_2 != '' || data.smi4_3 != '' || data.smi4_4 != '') {
                $("#smiv").show();
                if (data.smi4_1 != '') { $("#smiv-detial").append("<b>" + data.smi4_1 + "</b>") }
                if (data.smi4_2 != '') { $("#smiv-detial").append("<b>" + data.smi4_2 + "</b>") }
                if (data.smi4_3 != '') { $("#smiv-detial").append("<b>" + data.smi4_3 + "</b>") }
                if (data.smi4_4 != '') { $("#smiv-detial").append("<b>" + data.smi4_4 + "</b>") }
                
            } else { $("#smiv").hide(); }
            if (data.lawpsych == '') { $("#lawpsych").hide(); } else { $("#lawpsych").show(); }
            if (data.sleep == '') { $("#sleep").hide(); } else { $("#sleep").show(); }
            if (data.IC == '') { $("#IC").hide(); } else { $("#IC").show(); }
            $("#med_chk").append(data.med_chk);
            if (data.med_chk == 'ขาดยา') { $("#med-detial").show(); } else { $("#med-detial").hide(); }
            if (data.accident == '') { $("#accident").hide(); } else { $("#accident").show(); }
            if (data.wound == '') { $("#wound").hide(); } else { $("#wound").show(); }
            if (data.surgery == '') { $("#surgery").hide(); } else { $("#surgery").show(); }
            if (data.complicate == '') { $("#complicate").hide(); } else { $("#complicate").show(); }
            if (data.menses == '') { $("#menses").hide(); } else { $("#menses").show(); }

            if (data.d1 != '' || data.d2 != '' || data.d3 != '' || data.d4 != '' || data.d5 != '' || data.d6 != '' || data.d7 != '') {
                $("#disease").show().append(" โรคที่พบ : ");
                if (data.d1 != '') { $("#disease").append("<b>" + data.d1 + "</b>") }
                if (data.d2 != '') { $("#disease").append("<b>" + data.d2 + "</b>") }
                if (data.d3 != '') { $("#disease").append("<b>" + data.d3 + "</b>") }
                if (data.d4 != '') { $("#disease").append("<b>" + data.d4 + "</b>") }
                if (data.d5 != '') { $("#disease").append("<b>" + data.d5 + "</b>") }
                if (data.d6 != '') { $("#disease").append("<b>" + data.d6 + "</b>") }
                if (data.d7 != '') { $("#disease").append("<b>" + data.d7 + "</b>") }
                $("#disease").append(" อาการ : <b>" + data.disease + "</b> สถานะ : <b>"+data.heal_chk+"</b> &nbsp; "+data.heal)
            } else { $("#disease").hide(); }
            if (data.whip == '') { $("#whip").hide(); } else { $("#whip").show(); }
            if (data.regular_med == '') { $("#regular_med").hide(); } else { $("#regular_med").show(); }
            if (data.adr == '') { $("#adr").hide(); } else { $("#adr").show(); }
            if (data.beallergic == '') { $("#beallergic").hide(); } else { $("#beallergic").show(); }
            if (data.old_med == '') { $("#old_med").hide(); } else { $("#old_med").show(); }
            if (data.heredity == '') { $("#heredity").hide(); } else { $("#heredity").show(); }
            if (data.lawsuit == '') { $("#lawsuit").hide(); } else { $("#lawsuit").show(); }
            if (data.personality == '') { $("#personality").hide(); } else { $("#personality").show(); }
            if (data.think != '') { $("#Hurt_yourself").append("<b>" + data.think + "</b><br>"); }
            if (data.plan != '') { $("#Hurt_yourself").append("<b>" + data.plan + "</b> รายละเอียด : <b>" + data.plan_detial + "</b><br>"); }
            if (data.action != '') { $("#Hurt_yourself").append("<b>" + data.action + "</b> รายละเอียด : <b>" + data.action_detial + "</b><br>"); }
            
            if (data.sc1 != '' || data.sc2 != '' || data.sc3 != '' || data.sc4 != '' || data.sc5 != '' || data.sc6 != '' || data.sc7 != '' || data.sc8 != '' || data.sc9 != '') {
                $("#scab").show();
                if (data.sc1 != '') { $("#scab").append("<b>" + data.sc1 + "</b> &nbsp;&nbsp; ") }
                if (data.sc2 != '') { $("#scab").append("<b>" + data.sc2 + "</b> &nbsp;&nbsp; ") }
                if (data.sc3 != '') { $("#scab").append("<b>" + data.sc3 + "</b> &nbsp;&nbsp; ") }
                if (data.sc4 != '') { $("#scab").append("<b>" + data.sc4 + "</b> &nbsp;&nbsp; ") }
                if (data.sc5 != '') { $("#scab").append("<b>" + data.sc5 + "</b> &nbsp;&nbsp; ") }
                if (data.sc6 != '') { $("#scab").append("<b>" + data.sc6 + "</b> &nbsp;&nbsp; ") }
                if (data.sc7 != '') { $("#scab").append("<b>" + data.sc7 + "</b> &nbsp;&nbsp; ") }
                if (data.sc8 != '') { $("#scab").append("<b>" + data.sc8 + "</b> &nbsp;&nbsp; ") }
                if (data.sc9 != '') { $("#scab").append("<b>" + data.sc9 + "</b> &nbsp;&nbsp; ") }
                $("#scab").append(" อาการ : <b>" + data.detial_scab + "</b>")
            } else { $("#scab").hide(); }
            if (data.swelling != '') { $("#swelling").append("รายละเอียด : <b>" + data.swelling + "</b>"); }
            if (data.movement != '') { $("#movement").append("<b>" + data.movement + "</b>"); }else{ $("#movement").append("<b>ปกติ</b>"); }
            if (data.disabled != '') { $("#disabled").append("รายละเอียด : <b>" + data.disabled + "</b>"); }
            if (data.income_code = '1') { $("#income").append("ชนิดการ Admit : <b>" + data.admittype_name + "</b>"); }
            $("#recorder").append("ผู้บันทึก "+data.recorder+"<br>วันที่ "+data.recdate);
          // create table
            var $table = $('<table>');
            $table.attr("width", "100%");
            $table.attr("border", "0");
            $table.attr("cellspacing", "");
            $table.attr("cellpadding", "");
            $table.attr("frame", "below");
            $table.attr("class", "divider");
            //$table.addclass("divider");
            var tr = $('<tr></tr>') //creates row
            var th = $('<th></th>') //creates table header cells
            var td = $('<td></td>') //creates table cells
// caption
$table.append('<caption> บันทึกแรกรับ</caption>')
// thead
.append('<thead>').children('thead')
//.append('<tr />').children('tr').append('<th>A</th><th>B</th><th>C</th><th>D</th>');

//tbody
            //////////// Loop tbody part ///////////////////
            var $tbody = $table.append('<tbody />').children('tbody');
            $.each(data,function(d,k) { //console.log(k)
                var row = tr.clone() //creates a row
                // $.each(d,function(e,j) {
                if (k=='') {
                    row.append(td.clone().append(d)).append(td.clone().append(" : -")) //fills in the row
                } else {
                    row.append(td.clone().append(d)).append(td.clone().append(" : "+k)) //fills in the row
                }
                    
                // })
                $tbody.append(row) //puts row on the tbody
            })
            //////////// End Loop tbody part ///////////////////
// // add row
// $tbody.append('<tr />').children('tr:last')
// .append("<td>val</td>")
// .append("<td>val</td>")
// .append("<td>val</td>")
// .append("<td>val</td>");

// // add another row
// $tbody.append('<tr />').children('tr:last')
// .append("<td>val</td>")
// .append("<td>val</td>")
// .append("<td>val</td>")
// .append("<td>val</td>");

// add table to dom
$table.appendTo('#FRD');
      });
}
