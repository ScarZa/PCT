function SodiumDetial(content, id = null) {
  var title = " ข้อมูลประเมินยา Sodium Valproate";
  var subtitle = "";
  var PL = new PageLayout(content);
      PL.GetPL();
$("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
  $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
          //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
  $("#Budget").empty().attr("align", "left").append($("<div class='col-sm-12 alert alert-info'><div class='' id='medical-detial1'></div></div>")
    , $("<div class='col-sm-12 alert alert-danger'><div class='' id='symptom'></div></div")
    , $("<div class='col-sm-12 alert alert-warning'><div class='' id='last-lab'></div></div>")
    , $("<div class='col-sm-12 alert alert-success' id='LAB'><u>ผลการตรวจ LAB Liver Function Test </u><div class='' id='cbc'></div></div>")
    , $("<div class='col-sm-12 alert alert-info'><div class='' id='record' style='text-align: center;'></div></div>")
    , $("<div class='col-sm-12'><br><center><button id='print' class='btn btn-primary'>พิมพ์ข้อมูล</button></center></div>")
                                                  
  );
      $.getJSON('../../back/API/detail_SodiumAPI.php',{data : id},function (data) { 
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

           
          if ((data.symplom01num) + (data.symplom02num) + (data.symplom03num) >= 1) {
              if (data.symplom01num == 1) { $("#be-symptom").append(" <b> ผู้ป่วยใช้เครื่องดื่มที่มีแอลกอฮอล์ประจำ/ได้รับวินิจฉัย F10.xx </b><br>") }
              if (data.symplom02num == 1) { $("#be-symptom").append(" <b> Sodium Valproate ≥ 1500 mg/day </b><br>") }
              if (data.symplom03num == 1) { $("#be-symptom").append(" <b> ใช้ยาร่วมกับยาที่มีพิษต่อตับ: carbamazepine, phenytoin, phenobarbital </b>") }
              
          } else {
              $("#be-symptom").append(" <b style='color:green'>มีอาการปกติ</b>") 
          }
          $("#LAB").hide();
          if (data.last_lft_val == 0) {
              $("#be-last-lab").append("ไม่เคยเจาะ Liver Function Test");
          } else if (data.last_lft == 'Y' && data.last_lft_val > 0) {
              $("#be-last-lab").append("เจาะ Liver Function Test เกิน 12 เดือน");
          } else if (data.last_lft == 'N' && data.last_lft_val > 0) {
              $("#be-last-lab").append("เจาะ Liver Function Test ภายใน 12 เดือน");
              $("#LAB").show();
            $("#cbc").empty().append("<b id='albumin'>albumin (3.5-5.2) ค่า : " + data.albumin_val + "</b><br>"
                                  + "<b id='AST'>AST (M<37 / F<31) ค่า : " + data.ast_val + "</b><br>"
                                  + "<b id='ALT'>ALT (M<41 / F<31) ค่า : " + data.alt_val + "</b><br>"
                                  + "<b id='ALP'>ALP (M 53-128 / F 42-119) ค่า : " + data.alp_val + "</b><br>"
                                  + "<b id='total'>total bilirubin (0.1-1.2) ค่า : " + data.total_bilirubin_val + "</b><br>"
                                  + "<b id='direct'>direct bilirubin (0-0.3) ค่า : " + data.direct_bilirubin_val + "</b>");

                                  if(data.albumin_val < 3.5 || data.albumin_val > 5.2){$("#albumin").append(" <b style='color: red;'>  ค่าผิดปกติ"); }
                                  if(data.sex == 1){
                                    if (data.ast_val > 37) { $("#AST").append(" <b style='color: red;'>  ค่าสูงกว่าปกติ"); }
                                    if (data.alt_val > 41) { $("#ALT").append(" <b style='color: red;'>  ค่าสูงกว่าปกติ"); }
                                    if(data.alp_val <  53 || data.alp_val > 128){$("#ALP").append(" <b style='color: red;'>  ค่าผิดปกติ");}
                                }else{
                                    if (data.ast_val > 31) { $("#AST").append(" <b style='color: red;'>  ค่าสูงกว่าปกติ</b>"); }
                                    if (data.alt_val > 31) { $("#ALT").append(" <b style='color: red;'>  ค่าสูงกว่าปกติ</b>"); }
                                    if(data.alp_val <  42 || data.alp_val > 119){$("#ALP").append(" <b style='color: red;'>  ค่าผิดปกติ");}
                                }
            if (data.total_bilirubin_val < 0.1 || data.total_bilirubin_val > 1.2) { $("#total").append(" <b style='color: red;'>  ค่าผิดปกติ"); }
            if(data.direct_bilirubin_val < 0 || data.direct_bilirubin_val > 0.3) { $("#direct").append(" <b style='color: red;'>  ค่าผิดปกติ"); }
          }
          $("#record").append("<span>ผู้ประเมิน : "+data.recname+"<br>วันทีประเมิน "+data.regdate+"</span>")
      });
      $("button#print").click(function (e) {
        window.print()
    });
}
