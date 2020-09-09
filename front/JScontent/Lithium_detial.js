function ClzDetial(content, id = null) {
    var title = " ข้อมูลประเมินยา Lithium Carbonate";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
  $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
    $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
            //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
    $("#Budget").empty().attr("align", "left").append($("<div class='col-sm-12 alert alert-info'><div class='' id='medical-detial1'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-danger'><div class='' id='symptom'></div></div")
                                                    , $("<div class='col-sm-12 alert alert-warning'><div class='' id='last-lab'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-success' id='LAB'><u>ผลการตรวจ LAB </u><div class='' id='lithium'></div>"
                                                        +"<div class='' id='bun'></div><div class='' id='cr'></div><div class='' id='thyroid'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-info'><div class='' id='record' style='text-align: center;'></div></div>")
                                                    , $("<div class='col-sm-12'><br><center><button id='print' class='btn btn-primary'>พิมพ์ข้อมูล</button></center></div>")
                                                    
                                                    )
        $.getJSON('../../back/API/detail_LithiumAPI.php',{data : id},function (data) {
        $.getJSON('../../back/API/detail_patientAPI.php',{data : data.hn},function (data) {
            $("#medical-detial1").append($("<div class='col-lg-12'><div class='block'> <img id='pics-panel' width='100' /></div>"
                +"<span id = 'medical' > เลขบัตรประชาชน : " + data[0].cid + " <br> ชื่อ - สกุล : <b>" + data[0].fullname + "</b>"
                + "<br>ที่อยู่ : " + data[0].informaddr + "<br>วันเกิด : " + data[0].birthday + " อายุ : " + data[0].age + " ปี  สถานะภาพ : " + data[0].mrname + "<br>การวินิจฉัย : " + data[0].pdx + " " + data[0].dx0
                + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5
                + "<div class='' id=''>CC : <b>" + data[0].cc + " </b></div>"
                + "<div class='' id=''>HPI : <b>" + data[0].hpi + " </b></div>"
                + "<div class='' id='bmi'>BMI : <b>" + data[0].bmi + " </b></div></span></div> "
                + "")
            );
            if(data[0].bmi<18.5){
                $("#bmi").append(" <b style='color: red;'> ( น้ำหนักต่ำกว่าเกณฑ์ )</b>");
            }else if(data[0].bmi>=18.5 && data[0].bmi<=22.9){
                $("#bmi").append(" <b style='color: green;'> ( สมส่วน )</b>");
            }else if(data[0].bmi>=23 && data[0].bmi<=24.9){
                $("#bmi").append(" <b style='color: red;'> ( น้ำหนักเกิน )</b>");
            }else if(data[0].bmi>=25 && data[0].bmi<=29.9){
                $("#bmi").append(" <b style='color: red;'> ( โรคอ้วน )</b>");
            }else if(data[0].bmi>29.9){
                $("#bmi").append(" <b style='color: red;'> ( โรคอ้วนอันตราย )</b>");
            }
                $.getJSON('../../back/API/check_image.php', { data1: data[0].hn }, function (datai) {
                    if (datai.cc == '') { var img = '../images/person.png' } else { var img = '../../back/API/show_image.php?hn=' + data[0].hn }
                    $("#pics-panel").attr("src", img)
                });
        });
            $("#medical-detial1").prepend($("<div class='col-sm-8'><u>ข้อมูลผู้ป่วย</u><br>HN : <b>" + data.hn + "</b></div>"))

            $("#symptom").append($("<div class='col-sm-12'><span class='row col-sm-3'>อาการหลังจากรับยา : </span><span id='be-symptom' class='col-sm-7'></span></div>")
                                );
            $("#last-lab").append($("<div class='col-sm-12'>ตรวจ lithium ล่าสุด : <b id='lithium-last-lab'></b></div>")
                                , $("<div class='col-sm-12'>ตรวจ BUN ล่าสุด : <b id='bun-last-lab'></b></div>")
                                , $("<div class='col-sm-12'>ตรวจ Creatinine ล่าสุด : <b id='cr-last-lab'></b></div>")
                                , $("<div class='col-sm-12'>ตรวจ Thyroid Function ล่าสุด : <b id='thyroid-last-lab'></b></div>")
            );

             
            if ((data.symplom01num) + (data.symplom02num) + (data.symplom03num) + (data.symplom04num) + (data.symplom05num) + (data.symplom06num)+(data.symplom07num) + (data.symplom08num) + (data.symplom09num) + (data.symplom10num) >= 1) {
                if (data.symplom01num == 1) { $("#be-symptom").append(" <b> อาเจียน / ท้องเสีย / ปวดท้อง </b><br>") }
                if (data.symplom02num == 1) { $("#be-symptom").append(" <b> เดินเซ กล้ามเนื้ออ่อนแรงมาก / พูดไม่ชัด </b><br>") }
                if (data.symplom03num == 1) { $("#be-symptom").append(" <b> สั่นมาก ชัก กระตุก </b><br>") }
                if (data.symplom04num == 1) { $("#be-symptom").append(" <b> งง สับสนมาก </b><br>") }
                if (data.symplom05num == 1) { $("#be-symptom").append(" <b> อ่อนเพลียมาก </b><br>") }
                if (data.symplom06num == 1) { $("#be-symptom").append(" <b> ยาแก้ปวด NSAIDs : diclofenac,Ibuprofen,mefenamic acid ฯลฯ </b><br>") }
                if (data.symplom07num == 1) { $("#be-symptom").append(" <b> ยาขับปัสสาวะ HCTZ </b><br>") }
                if (data.symplom08num == 1) { $("#be-symptom").append(" <b> ยาลดความดัน ACEIs : Enalapril, captopril, lisinopril ฯลฯ </b><br>") }
                if (data.symplom09num == 1) { $("#be-symptom").append(" <b> ยาลดความดัน ARBs : losartan, valsartan, irbesartan ฯลฯ </b><br>") }
                if (data.symplom10num == 1) { $("#be-symptom").append(" <b> ชา กาแฟ เครื่องดื่มที่มีคาเฟอีน (อาจลด/เพิ่มระดับ Li) </b>") }
            } else {
                $("#be-symptom").append(" <b style='color:green'>มีอาการปกติ</b>") 
            }
            $("#LAB").hide();
            if (data.last_lithium_val <= 0) {
                $("#lithium-last-lab").append("ไม่เคยเจาะ Lithium Level");
            } else if (data.last_lithium == 'Y' && data.last_lithium_val > 0) {
                $("#lithium-last-lab").append("เจาะ Lithium Level เกิน 6 เดือน");
            } else if (data.last_lithium == 'N' && data.last_lithium_val > 0) {
                $("#lithium-last-lab").append("เจาะ Lithium Level ภายใน 6 เดือน");
                $("#LAB").show();
                $("#lithium").empty().append("<b id='lithium_val'>Lithium level < 1.5 mEq/L ค่า : " + data.lithium_val + "</b>");

                if(data.lithium_val > 1.5){$("#lithium").append(" <b style='color: red;'>  สูงกว่าค่าปกติ</b>"); }
            }
            if (data.last_BUN_val <= 0) {
                $("#bun-last-lab").append("ไม่เคยเจาะ BUN");
            } else if (data.last_BUN == 'Y' && data.last_BUN_val > 0) {
                $("#bun-last-lab").append("เจาะ BUN เกิน 6 เดือน");
            } else if (data.last_BUN == 'N' && data.last_BUN_val > 0) {
                $("#bun-last-lab").append("เจาะ BUN ภายใน 6 เดือน");
                $("#LAB").show();
                $("#bun").empty().append("<b id='bun_val'>BUN (Normal Range 7-20) ค่า : " + data.BUN_val + "</b>");

                if(data.BUN_val < 7 || data.BUN_val > 20){$("#bun").append(" <b style='color: red;'>  ค่าผิดปกติ</b>"); }
            }

            if (data.last_Cr_val <= 0) {
                $("#cr-last-lab").append("ไม่เคยเจาะ Creatinine");
            } else if (data.last_Cr == 'Y' && data.last_Cr_val > 0) {
                $("#cr-last-lab").append("เจาะ Creatinine เกิน 12 เดือน");
            } else if (data.last_Cr == 'N' && data.last_Cr_val > 0) {
                $("#cr-last-lab").append("เจาะ Creatinine ภายใน 12 เดือน");
                $("#LAB").show();
                $("#cr").empty().append("<b id='cr_val'>Creatinie (Normal Range Male 0.6-1.2 , Female 0.5-1.1) ค่า : " + data.Cr_val + "</b>"
                                        +"<br><b id='eGFR_val'>eGFR (Normal range > 120) ค่า : " + data.eGFR_val + "</b>");

                if(data.sex == 1){
                    if((data.Cr_val <  0.6 || data.Cr_val > 1.2)){$("#cr_val").append(" <b style='color: red;'>  ค่าผิดปกติ</br>");}
                }else{
                    if((data.Cr_val <  0.5 || data.Cr_val > 1.1)){$("#cr_val").append(" <b style='color: red;'>  ค่าผิดปกติ</b>");}
                }
                if(data.eGFR_val < 120){$("#eGFR_val").append(" <b style='color: red;'>  ค่าต่ำกว่ามาตรฐาน</b>");}
            }

            if (data.last_TF_val <= 0) {
                $("#thyroid-last-lab").append("ไม่เคยเจาะ Thyroid Function");
            } else if (data.last_TF == 'Y' && data.last_TF_val > 0) {
                $("#thyroid-last-lab").append("เจาะ Thyroid Function เกิน 12 เดือน");
            } else if (data.last_TF == 'N' && data.last_TF_val > 0) {
                $("#thyroid-last-lab").append("เจาะ Thyroid Function ภายใน 12 เดือน");
                $("#LAB").show();
                $("#thyroid").empty().append("<b id='TSH_val'>TSH (Normal range 0.27-4.2) ค่า : " + data.TSH_val + "</b>"
                                    + "<br><b id='FT3_val'>FT3 (Normal range 2-4.4) ค่า : " + data.FT3_val + "</b>"
                                    + "<br><b id='FT4_val'>FT4 (Normal range 0.93-1.7) ค่า : " + data.FT4_val + "</b>");

                if (data.TSH_val < 0.27 || data.TSH_val > 4.2){$("#TSH_val").append(" <b style='color: red;'>  ค่าผิดปกติ</b>");}
                if (data.FT3_val < 2 || data.FT3_val > 4.4){$("#FT3_val").append(" <b style='color: red;'>  ค่าผิดปกติ</b>");}
                if (data.FT4_val < 0.93 || data.FT4_val > 1.7){$("#FT4_val").append(" <b style='color: red;'>  ค่าผิดปกติ</b>");}
            }
            $("#record").append("<span>ผู้ประเมิน : "+data.recname+"<br>วันทีประเมิน "+data.regdate+"</span>")
        });
        $("button#print").click(function (e) {
          window.print()
      });
}
