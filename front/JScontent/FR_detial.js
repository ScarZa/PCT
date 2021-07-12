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
                                                    , $("<div class='col-sm-12 alert alert-success' id='mental-panel'><u>การประเมินสภาพจิตใจ</u><div class='' id='mental'></div><br></div>")
                                                    , $("<div class='col-sm-12 alert alert-info' id='conclude-nurse'><u>สรุปข้อวินิจฉัยทางการพยาบาล</u><div class='' id='CCnurse'></div><br></div>")
                                                    , $("<div class='col-sm-12 alert alert-warning'><div class='' id='conclude'></div></div><br>")
                                                    , $("<div class='col-sm-12'><center><span id='recorder'></span></center></div>")
                                                    , $("<div class='col-sm-12'><br><center><button id='print' class='btn btn-primary'>พิมพ์ข้อมูล</button></center></div>")
                                                    );
        $.getJSON('../../back/API/detail_FRAPI.php',{data : id},function (data) { console.log(data)
        $.getJSON('../../back/API/detail_patientAPI.php',{data : data.hn},function (data) {
            $("#medical-detial1").append($("<div class='col-sm-8'><span><label id='medical' class='col-form-label'>เลขบัตรประชาชน : " + data[0].cid + "<br>ชื่อ-สกุล : <b>" + data[0].fullname + "</b>"
                + "<br>ที่อยู่ : " + data[0].informaddr + "<br>วันเกิด : " + data[0].birthday + " อายุ : " + data[0].age + " ปี  สถานะภาพ : " + data[0].mrname + "<br>การวินิจฉัย : " + data[0].pdx + " " + data[0].dx0
                + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5
                + "</label></span></div> "
                + "<div class='col-sm-4 block'> <img id='pics-panel' width='100' /></div>"));
                $.getJSON('../../back/API/check_image.php', { data1: data[0].hn , data2: data[0].an }, function (datai) { console.log(datai)
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
                            , $("<div class='col-sm-12 row' id='smiv'><div class='col-sm-1'>SMI-V</div><b class='col-sm-11' id='smiv-detial'></b></div>")
                            , $("<div class='col-sm-12' id='lawpsych'>นิติจิตเวช : <b>" + data.lawpsych + "</b></div>")
                            , $("<div class='col-sm-12' id='sleep'>การนอนหลับ : <b>" + data.sleep + "</b></div>")
                            , $("<div class='col-sm-12' id='IC'>IC : <b>" + data.IC + "</b></div>")
                            , $("<div class='col-sm-12'>การรับยา : <b id='med_chk'></b>&nbsp;&nbsp; <span id='med-detial'>&nbsp;&nbsp; รายละเอียด : <b>" + data.med + "</b></span></div>")
                            , $("<div class='col-sm-12' id='accident'>อุบัติเหตุ : <b>" + data.accident + "</b></div>")
                            , $("<div class='col-sm-12' id='wound'>บาดแผล : <b>" + data.wound + "</b></div>")
                            , $("<div class='col-sm-12' id='surgery'>อุบัติเหตุทางสมอง/การผ่าตัด : <b>" + data.surgery + "</b></div>")
                            , $("<div class='col-sm-12' id='complicate'>ภาวะแทรกซ้อน (ER) : <b>" + data.complicate + "</b></div>")
                , $("<div class='col-sm-12' id='menses'>ประจำเดือน : <b>" + data.menses + "</b></div>")
                , $("<div class='col-sm-12' id='alcohol'><span class='row col-sm-2'>การดื่มสุรา : </span><span class='col-sm-10'>ชนิด : <b>" + data.name + "</b>  ปริมาณ : <b>" + data.volume_type + "</b> ความถี่ในการใช้ : <b>" + data.alcohol_frequency+"</b>"
                            + "<br>ดื่มต่อเนื่อง : <b>"+data.drink_age+"</b> ดื่มครั้งสุดท้าย : <b>"+data.last_useA+"</b><br>ระยะเวลาที่หยุดดื่ม : <b>"+data.time_stop+"</b> สาเหตุการดื่ม : <b>"+data.drink_cause+"</b></span></div>")
                , $("<div class='col-sm-12' id='dope'><span class='row col-sm-2'>การใช้ยาเสพติด : </span><span id='nct_item' class='col-sm-10'></span></div>")




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
            $("#smiv").hide(); 
            $.getJSON('../../back/API/detail_SMIVAPI.php', { data: data.hn }, function (data) {
                if (data[0].chk_1 + data[0].chk_2 + data[0].chk_3 + data[0].chk_4 > 0) {
                    $("#smiv").show();
                    
                    if (data[0].smi1_2 != '') { $("#smiv-detial").append("1.2 " + data[0].smi1_2 + "<br>") }
                    if (data[0].smi1_3 != '') { $("#smiv-detial").append("1.3 " + data[0].smi1_3 + "<br>") }
                    if (data[0].smi1_4 != '') { $("#smiv-detial").append("1.4 " + data[0].smi1_4 + "<br>") }
                    if (data[0].smi1_5 != '') { $("#smiv-detial").append("1.5 " + data[0].smi1_5 + "<br>") }
                    if (data[0].smi1_6 != '') { $("#smiv-detial").append("1.6 " + data[0].smi1_6 + "<br>") }
                    if (data[0].smi1_7 != '') { $("#smiv-detial").append("1.7 " + data[0].smi1_7 + "<br>") }
                    if (data[0].smi1_8 != '') { $("#smiv-detial").append("1.8 " + data[0].smi1_8 + "<br>") }
                    if (data[0].smi1_9 != '') { $("#smiv-detial").append("1.9 " + data[0].smi1_9 + "<br>") }
                    if (data[0].smi1_10 != '') { $("#smiv-detial").append("1.10 " + data[0].smi1_10 + "<br>") }
                    if (data[0].smi1_11 != '') { $("#smiv-detial").append("1.11 " + data[0].smi1_11 + "<br>") }
                    if (data[0].t1_12 != '') { $("#smiv-detial").append("1.12 " + data[0].t1_12 + "<br>") }
                    if (data[0].smi2_1 != '') { $("#smiv-detial").append("2.1 " + data[0].smi2_1 + "<br>") }
                    if (data[0].smi2_2 != '') { $("#smiv-detial").append("2.2 " + data[0].smi2_2 + "<br>") }
                    if (data[0].smi2_3 != '') { $("#smiv-detial").append("2.3 " + data[0].smi2_3 + "<br>") }
                    if (data[0].smi2_4 != '') { $("#smiv-detial").append("2.4 " + data[0].smi2_4 + "<br>") }
                    if (data[0].smi2_5 != '') { $("#smiv-detial").append("2.5 " + data[0].smi2_5 + "<br>") }
                    if (data[0].smi2_6 != '') { $("#smiv-detial").append("2.6 " + data[0].smi2_6 + "<br>") }
                    if (data[0].smi2_7 != '') { $("#smiv-detial").append("2.7 " + data[0].smi2_7 + "<br>") }
                    if (data[0].smi2_8 != '') { $("#smiv-detial").append("2.8 " + data[0].smi2_8 + "<br>") }
                    if (data[0].smi2_9 != '') { $("#smiv-detial").append("2.9 " + data[0].smi2_9 + "<br>") }
                    if (data[0].smi2_10 != '') { $("#smiv-detial").append("2.10 " + data[0].smi2_10 + "<br>") }
                    if (data[0].smi2_11 != '') { $("#smiv-detial").append("2.11 " + data[0].smi2_11 + "<br>") }
                    if (data[0].t2_12 != '') { $("#smiv-detial").append("2.12 " + data[0].t2_12 + "<br>") }
                    if (data[0].smi3_1 != '') { $("#smiv-detial").append("3.1 " + data[0].smi3_1 + "<br>") }
                    if (data[0].smi3_2 != '') { $("#smiv-detial").append("3.2 " + data[0].smi3_2 + "<br>") }
                    if (data[0].t3_3 != '') { $("#smiv-detial").append("3.3 " + data[0].t3_3 + "<br>") }
                    if (data[0].smi4_1 != '') { $("#smiv-detial").append("4.1 " + data[0].smi4_1 + "<br>") }
                    if (data[0].smi4_2 != '') { $("#smiv-detial").append("4.2 " + data[0].smi4_2 + "<br>") }
                    if (data[0].smi4_3 != '') { $("#smiv-detial").append("4.3 " + data[0].smi4_3 + "<br>") }
                    if (data[0].smi4_4 != '') { $("#smiv-detial").append("4.4 " + data[0].smi4_4 + "<br>") }
                    if (data[0].smi5_1 != '') { $("#smiv-detial").append("5.1 " + data[0].smi5_1 + "<br>") }
                    if (data[0].smi5_2 != '') { $("#smiv-detial").append("5.2 " + data[0].smi5_2 + "<br>") }
                    if (data[0].smi5_3 != '') { $("#smiv-detial").append("5.3 " + data[0].smi5_3 + "<br>") }
                    if (data[0].smi5_4 != '') { $("#smiv-detial").append("5.4 " + data[0].smi5_4 + "<br>") }
                
                } else { $("#smiv").hide(); }
            });

            $.getJSON('../../back/API/detail_narcotic.php', { data: data.ipd_fr_id }, function (dataNct) {
                $("#nct_item").empty();
                $.each(dataNct, function (key, value) {
                    $("#nct_item").append($("<span class='col-sm-10'><div class='row hr'></div><b>"+(key+1)+".</b> ชนิด : <b>" + value.drug_name + "</b>  ปริมาณ : <b>" + value.narcotic_vol + "</b> ความถี่ในการใช้ : <b>" + value.narcotic_frequency + "</b>"
                        + "<br>ใช้ต่อเนื่อง : <b>" + value.narcotic_age + "</b> ใช้ครั้งสุดท้าย : <b>" + value.last_useD + "</b><br>ระยะเวลาที่หยุดใช้ : <b>" + value.narcotic_stop + "</b> สาเหตุการใช้ : <b>" + value.narcotic_cause + "</b></span>"));
                });
            });
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
            if (data.alcohol_chk == 'ไม่ดื่ม') { $("#alcohol").hide(); } else { $("#alcohol").show(); }
            if (data.dope_chk == 'ไม่เสพ') { $("#dope").hide(); } else { $("#dope").show(); }

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
            $("#recorder").append("ผู้บันทึก " + data.recorder + "<br>วันที่ " + data.recdate);
            
            if (data.mental_id == '') { $("#mental-panel").hide() } else {
                $("#mental").append($("<div class='row col-sm-12'><span class='col-sm-3'>ความคิด  : <b>" + data.think_chk + "</b></span> <span class='col-sm-9' id='think-detial'></span></div>")
                    , $("<div class='row col-sm-12'><span class='col-sm-2'>อารมณ์ : </span> <span class='col-sm-10' id='mood-detial'></span></div>")
                    , $("<div class='row col-sm-12'><span class='col-sm-2'>พฤติกรรม : </span> <span class='col-sm-10' id='action-detial'></span></div>")
                    , $("<div class='row col-sm-12'><span class='col-sm-5'>การรับรู้ (perception) : <b>" + data.recognition_chk + "</b></span> <span class='col-sm-7' id='recognition-detial'></span></div>")
                    , $("<div class='row col-sm-12'><span class='col-sm-5'>การตระหนักรู้ (insigth) : <b>" + data.accept_chk + "</b></span> <span class='col-sm-7' id='accept-detial'></span></div>")
                    , $("<div class='row col-sm-12'><span class='col-sm-5'><u>ความจำ</u></span></div>")
                    , $("<div class='row col-sm-12'><div class='row col-sm-1'>&nbsp;</div><span class='col-sm-3'>ระยะสั้น : <b>" + data.memo_short + "</b></span> <span class='col-sm-8' id='memos-detial'></span></div>")
                    , $("<div class='row col-sm-12'><div class='row col-sm-1'>&nbsp;</div><span class='col-sm-3'>ระยะยาว : <b>" + data.memo_long + "</b></span> <span class='col-sm-8' id='memol-detial'></span></div>")
                    , $("<div class='row col-sm-12' style='text-align: center;'><span>( ผู้ประเมิน "+data.recorder2+" วันที่ "+data.recdate2+" )</span></div>")
                );
                if (data.think_chk == 'สมเหตุสมผล') {
                    $("#think-detial").append($("<b>" + data.continuous + "</b> รายละเอียด : <b>"+data.continuous_detial+"</b>"))
                } else {
                    if (data.think_1 != '') { $("#think-detial").append("<b>" + data.think_1 + "</b> รายละเอียด : <b>" + data.think_1d + "</b><br>") }
                    if (data.think_2 != '') { $("#think-detial").append("<b>" + data.think_2 + "</b> รายละเอียด : <b>" + data.think_2d + "</b><br>") }
                    if (data.think_3 != '') { $("#think-detial").append("<b>" + data.think_3 + "</b><br>") }
                    if (data.think_4 != '') { $("#think-detial").append("<b>" + data.think_4 + "</b><br>") }
                    if (data.think_5 != '') { $("#think-detial").append("<b>" + data.think_5 + "</b><br>") }
                    if (data.think_6 != '') { $("#think-detial").append("<b>" + data.think_6 + "</b> รายละเอียด : <b>" + data.think_6d + "</b><br>") }
                }
                if (data.mood1 != '') { $("#mood-detial").append("<b>" + data.mood1 + "</b><br>") }
                if (data.mood2 != '') { $("#mood-detial").append("<b>" + data.mood2 + "</b><br>") }
                if (data.mood3 != '') { $("#mood-detial").append("<b>" + data.mood3 + "</b><br>") }
                if (data.mood4 != '') { $("#mood-detial").append("<b>" + data.mood4 + "</b><br>") }
                if (data.mood5 != '') { $("#mood-detial").append("<b>" + data.mood5 + "</b> รายละเอียด : <b>" + data.other_mood + "</b><br>") }

                if (data.action_1 != '') { $("#action-detial").append("<b>" + data.action_1 + "</b><br>") }
                if (data.action_2 != '') { $("#action-detial").append("<b>" + data.action_2 + "</b><br>") }
                if (data.action_3 != '') { $("#action-detial").append("<b>" + data.action_3 + "</b><br>") }
                if (data.action_4 != '') { $("#action-detial").append("<b>" + data.action_4 + "</b> รายละเอียด : <b>" + data.action_4d + "</b><br>") }
                if (data.action_5 != '') { $("#action-detial").append("<b>" + data.action_5 + "</b><br>") }
                if (data.action_6 != '') { $("#action-detial").append("<b>" + data.action_6 + "</b> รายละเอียด : <b>" + data.action_6d + "</b><br>") }
                if (data.action_7 != '') { $("#action-detial").append("<b>" + data.action_7 + "</b><br>") }
                if (data.action_8 != '') { $("#action-detial").append("<b>" + data.action_8 + "</b><br>") }
                if (data.action_9 != '') { $("#action-detial").append("<b>" + data.action_9 + "</b><br>") }
                if (data.action_10 != '') { $("#action-detial").append("<b>" + data.action_10 + "</b> รายละเอียด : <b>" + data.action_10d + "</b><br>") }

                if (data.recognition_chk == 'ประสาทหลอน') {
                    if (data.recog_1 != '') { $("#recognition-detial").append("&nbsp;&nbsp;<b>" + data.recog_1 + "</b> รายละเอียด : <b>" + data.recog_1d + "</b><br>") }
                    if (data.recog_2 != '') { $("#recognition-detial").append("&nbsp;&nbsp;<b>" + data.recog_2 + "</b> รายละเอียด : <b>" + data.recog_2d + "</b><br>") }
                    if (data.recog_3 != '') { $("#recognition-detial").append("&nbsp;&nbsp;<b>" + data.recog_3 + "</b> รายละเอียด : <b>" + data.recog_3d + "</b><br>") }
                    if (data.recog_4 != '') { $("#recognition-detial").append("&nbsp;&nbsp;<b>" + data.recog_4 + "</b> รายละเอียด : <b>" + data.recog_4d + "</b><br>") }
                    if (data.recog_5 != '') { $("#recognition-detial").append("&nbsp;&nbsp;<b>" + data.recog_5 + "</b> รายละเอียด : <b>" + data.recog_5d + "</b><br>") }
                }
                if (data.accept_chk == 'ไม่ยอมรับการเจ็บป่วย') { $("#accept-detial").append("รายละเอียด : <b>" + data.accept + "</b>") }
                if (data.memo_short == 'ไม่ปกติ') { $("#memos-detial").append("รายละเอียด : <b>" + data.memos + "</b>") }
                if (data.memo_long == 'ไม่ปกติ') { $("#memol-detial").append("รายละเอียด : <b>"+data.memol+"</b>")}
            }
            // $.getJSON('../../back/API/detail_concludeAPI.php', { data: data.ipd_fr_id }, function (data) {
            //     $.each(data,function(d,k) { console.log(k)
            //         $("#CCnurse").append($("<div></div>"))
            //     })
            // })
            $.getJSON('../../back/API/detail_concludeAPI.php', { data: data.ipd_fr_id }, function (data) { console.log(data)
            if (data == '') { $("#conclude-nurse").hide() } else {
                // create table
                var $table = $('<table>');
                $table.attr("width", "100%");
                $table.attr("border", "1");
                $table.attr("cellspacing", "");
                $table.attr("cellpadding", "");
                //$table.attr("frame", "below");
                $table.attr("class", "divider");
                //$table.addclass("divider");
                var tr = $('<tr></tr>') //creates row
                var th = $('<th></th>') //creates table header cells
                var td = $('<td></td>') //creates table cells
                // caption
                $table.append('<caption> บันทึกสรุป</caption>')
                    // thead
                    .append('<thead>').children('thead')
                    .append('<tr />').children('tr').append('<th> สรุปข้อวินิจฉัยทางการพยาบาล</th><th> วันที่เริ่มต้น</th><th> วันที่สิ้นสุดปัญหา</th><th> ผู้บันทึก</th><th> วันที่บันทึก</th>');

                //tbody
                //////////// Loop tbody part ///////////////////
                var $tbody = $table.append('<tbody />').children('tbody');
                
                    $.each(data, function (d, k) {
                        console.log(k)
                        var row = tr.clone() //creates a row
                        // $.each(d,function(e,j) {
                
                        row.append(td.clone().append(k.topic)).append(td.clone().append(k.begin_date)).append(td.clone().append(k.end_date)).append(td.clone().append(k.name)).append(td.clone().append(k.recdate)) //fills in the row
                
                    
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
                $table.appendTo('#CCnurse');
                }
            })
        });
        $("button#print").click(function (e) {
            window.print()
        });
}
