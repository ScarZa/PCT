function ClzDetial(content, id = null) {
    var title = " ข้อมูลประเมินยา Clozapine";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
  $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
    $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
            //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
    $("#Budget").empty().attr("align", "left").append($("<div class='col-sm-12 alert alert-info'><div class='' id='medical-detial1'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-danger'><div class='' id='symptom'></div></div")
                                                    , $("<div class='col-sm-12 alert alert-warning'><div class='' id='last-lab'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-success' id='LAB'><u>ผลการตรวจ LAB CBC </u><div class='' id='cbc'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-info'><div class='' id='record' style='text-align: center;'></div></div>")
                                                    , $("<div class='col-sm-12'><br><center><button id='print' class='btn btn-primary'>พิมพ์ข้อมูล</button></center></div>")
                                                    
                                                    )
        $.getJSON('../../back/API/detail_ClozapineAPI.php',{data : id},function (data) {
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
            $("#last-lab").append($("<div class='col-sm-12'>ตรวจ CBC ล่าสุด : <b id='be-last-lab'></b></div>")
                                
            );

             
            if ((data.symplomo01num) + (data.symplomo02num) + (data.symplomo03num) + (data.symplomo04num) + (data.symplomo05num) + (data.symplomo06num) >= 1) {
                if (data.symplomo01num == 1) { $("#be-symptom").append(" <b> มีไข้หนาวสั่น </b><br>") }
                if (data.symplomo02num == 1) { $("#be-symptom").append(" <b> เจ็บคอปวดเมื่อยตามร่างกาย </b><br>") }
                if (data.symplomo03num == 1) { $("#be-symptom").append(" <b> เฉื่อยชา เชื่องช้า / อ่อนเพลียมากกว่าปกติ </b><br>") }
                if (data.symplomo04num == 1) { $("#be-symptom").append(" <b> หน้ามืด วิงเวียน </b><br>") }
                if (data.symplomo05num == 1) { $("#be-symptom").append(" <b> ชัก </b><br>") }
                if (data.symplomo06num == 1) { $("#be-symptom").append(" <b> U/D : DM ,HT, Dyslipidemia, Cardiovascular </b>") }
                
            } else {
                $("#be-symptom").append(" <b style='color:green'>มีอาการปกติ</b>") 
            }
            $("#LAB").hide();
            if (data.last_CBC_val == 0 && data.last_CBC == 'Y') {
                $("#be-last-lab").append("ไม่เคยเจาะ CBC");
            } else if (data.last_CBC == 'Y' && data.last_CBC_val > 0) {
                $("#be-last-lab").append("เจาะ CBC เกิน 6 เดือน");
            } else if (data.last_CBC == 'N' && data.last_CBC_val >= 0) {
                $("#be-last-lab").append("เจาะ CBC ภายใน 6 เดือน");
                $("#LAB").show();
                $("#cbc").empty().append("<b id='LWBC'>WBC < 3,000/mm³ ค่า : " + data.WBC_val + "</b><br><b =id='LANC'>ANC < 1,500/mm³ ค่า : " + data.ANC_val + "</b><br><b =id='LP'>Platelet (กรณี <80,000/mm³) ค่า : " + data.platelet_val + "</b>");

                if(data.WBC_val < 3000){$("#LWBC").append(" <b style='color: red;'>  ต้องแจ้งแพทย์ทันที</b>"); }
                if(data.ANC_val < 1500){$("#LANC").append(" <b style='color: red;'>   ต้องหยุดยาทันที</b>");}
                if(data.platelet_val < 80000){$("#LP").append(" <b style='color: red;'>   ต้องหยุดยาทันที</b>");}
            }
            $("#record").append("<span>ผู้ประเมิน : "+data.recname+"<br>วันทีประเมิน "+data.regdate+"</span>")
        });
        $("button#print").click(function (e) {
          window.print()
      });
}
