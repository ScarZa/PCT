function InterviewIPD(content, id = null) {
    
    var title = " งานผู้ป่วยใน (IPD)";
    var subtitle = "แบบสัมภาษณ์ ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu1").parent().find("li:eq(0)").addClass("active")
        var PL = new TabLayout(content,3);
        PL.GetTL();
        $("#Tl0 >a").empty().append("แบบแรกรับ");
        $("h5.widget-title").empty().prepend("แบบสัมภาษณ์ประวัติผู้ป่วย");
        $("#Budget").remove();
        $("#Tc0 >p").empty().append($("<form action='' name='frminv' id='frminv' method='post' enctype='multipart/form-data'>"
        + "<div class='widget-main row'><div class='col-lg-12' id='cgi-post'>"
        +"<div id='interviewfrm'></div>"
        + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        +"</div></form>"));
        var idvn = id; 
        $.getJSON('../back/API/patient_detail.php',{data:idvn.data},function (data) { 
        $("#interviewfrm").append($("<div class='col-lg-12 row'><div class='col-lg-10 row'><label><h4><p>ชื่อผู้ป่วย : <b>"+data[0].fullname+"</b> &nbsp;&nbsp; อายุ : <b>"+data[0].age+"</b> ปี &nbsp;&nbsp; HN : <b>"+data[0].hn+"</b> &nbsp;&nbsp; AN : <b>"+data[0].an+"</b> &nbsp;&nbsp; Admit ครั้งที่ : <b>"+data[0].admit+"</b></p><p>"
                                    +"รับวันที่ : <b>"+data[0].admitdate+"</b> &nbsp;&nbsp; เวลา : <b>"+data[0].regtime+"</b> น. &nbsp;&nbsp; จำนวนวันที่ผู้ป่วยอยู่บ้าน : <b>"+data[0].lastvisit+"</b> วัน</p><p>เพศ : <b>"+data[0].sex+"</b> &nbsp;&nbsp; สถานภาพสมรส : <b>"+data[0].marry_name+"</b> &nbsp;&nbsp; วันเกิด  : <b>"+data[0].birthday+"</b> &nbsp;&nbsp; สัญชาติ : <b>"+data[0].nation_name+"</b></p><p>"
                                    +"ศาสนา : <b>"+data[0].religion_name+"</b> &nbsp;&nbsp; การศึกษา : <b>"+data[0].edu_name+"</b> &nbsp;&nbsp; อาชีพ : <b>"+data[0].occ_name+"</b></p><p>เลขประจำตัวประชาชน : <b>"+data[0].cid+"</b> &nbsp;&nbsp; สิทธิการรักษา : <b>"+data[0].ptname+"</b></p></h4></label></div><div class='col-lg-2 block'> <img src='../back/API/show_image.php?hn="+data[0].hn+"' width='125' /></div></div><p>")
                                    ,$("<div class='col-lg-12 row'>"
                                    +"<div class='form-group col-lg-5 row'><label class='col-sm-3 control-label no-padding-left' for='biographer'>ชื่อผู้ให้ประวัติ </label>"
                                    +"<div class='col-sm-9 row'><input class='input-sm' type='text' id='biographer' name='biographer' placeholder='ชื่อผู้ให้ประวัติ'/></div> "
                                    +"</div>"
                                    +"<div class='form-group col-lg-5 row'><label class='col-sm-3 control-label no-padding-right' for='relative'>เกี่ยวข้องเป็น </label>"
                                    +"<div class='col-sm-9 row'><input class='input-sm' type='text' id='relative' name='relative'  placeholder='ความเกี่ยวข้องกับผู้ป่วย' /></div> "
                                    +"</div>"
                                +"</div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ที่อยู่ (สามารถติดต่อได้) ของผู้ป่วย </b></label></div>")
                                ,$("<textarea name='patient_add' id='patient_add' class='form-control' placeholder='ที่อยู่ (สามารถติดต่อได้) ของผู้ป่วย'>"+data[0].fulladdressname+"</textarea><p>")
                                ,$("<div class='col-lg-12 row'>"
                                    +"<div class='form-group col-lg-5 row'><label class='col-sm-5 control-label no-padding-left' for='tel0'>หมายเลขโทรศัพท์ติดต่อได้</label>"
                                    +"<div class='col-sm-7 row'><input class='input-sm' type='text' id='tel0' name='tel0' value='"+data[0].hometel+"' placeholder='หมายเลขโทรศัพท์' /></div> "
                                    +"</div>"
                                +"</div>")
                                ,$("<div class='col-lg-12 row'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-left' for='tel1'>หมายเลขโทรศัพท์ 1</label>"
                                    +"<div class='col-sm-7 row'><input class='input-sm' type='text' id='tel1' name='tel1' value='"+data[0].informtel+"' placeholder='หมายเลขโทรศัพท์' /></div> "
                                    +"</div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-4 control-label no-padding-right' for='relative1'>เกี่ยวข้องเป็น </label>"
                                    +"<div class='col-sm-8 row'><input class='input-sm' type='text' id='relative1' name='relative1'  value='' placeholder='ความเกี่ยวข้องกับผู้ป่วย' /></div> "
                                    +"</div>"
                                +"</div>")
                                ,$("<div class='col-lg-12 row'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-left' for='tel2'>หมายเลขโทรศัพท์ 2</label>"
                                    +"<div class='col-sm-7 row'><input class='input-sm' type='text' id='tel2' name='tel2' placeholder='หมายเลขโทรศัพท์' /></div> "
                                    +"</div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-4 control-label no-padding-right' for='relative2'>เกี่ยวข้องเป็น </label>"
                                    +"<div class='col-sm-8 row'><input class='input-sm' type='text' id='relative2' name='relative2' placeholder='ความเกี่ยวข้องกับผู้ป่วย' /></div> "
                                    +"</div>"
                                +"</div>")    
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บิดา </b> <input class='input-sm' type='text' name='father_name' value='"+data[0].fathername+"' placeholder='ชื่อบิดา' required></label><div class='col-sm-2'><label><input class='ace' type='radio' name='father_chk' value='Y' checked required><span class='lbl'> มีชีวิตอยู่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='father_chk' value='N' required><span class='lbl'> เสียชีวิต</span></label></div></div>")    
                                ,$("<div id='father' class='row'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='father_age'>อายุ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='father_age' name='father_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='father_income'>อาชีพ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='father_income' name='father_income' placeholder='' /></div></div>"
                                    +"</div></div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>มารดา </b>  <input class='input-sm' type='text' name='mother_name' value='"+data[0].mothername+"' placeholder='ชื่อมารดา' required></label><div class='col-sm-2'><label><input class='ace' type='radio' name='mother_chk' value='Y' checked required><span class='lbl'> มีชีวิตอยู่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mother_chk' value='N' required><span class='lbl'> เสียชีวิต</span></label></div></div>")    
                                ,$("<div id='mother' class='row'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='mother_age'>อายุ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='mother_age' name='mother_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='mother_income'>อาชีพ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='mother_income' name='mother_income' placeholder='' /></div></div>"
                                    +"</div></div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การสมรส </b></label>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='0'checked required><span class='lbl'> โสด</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='1' required><span class='lbl'> หม้าย</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='2' required><span class='lbl'> หย่า/แยก</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='3' required><span class='lbl'> คู่</span></label></div></div>")
                                ,$("<div id='marry' class='row'>"
                                    //+"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    // +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='marry_age'>คู่สมรส อายุ </label>"
                                    // +"<div class='col-sm-8'><input class='input-sm' type='text' id='marry_age' name='marry_age' placeholder='' /></div></div>"
                                    // +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='marry_career>อาชีพ </label>"
                                    // +"<div class='col-sm-8'><input class='input-sm' type='text' id='marry_career' name='marry_career' placeholder='' /></div></div>"
                                    // +"<div class='form-group col-lg-5 row'><label class='col-sm-3 control-label no-padding-right' for='marry_income'>รายได้คู่สมรส/ปี </label>"
                                    // +"<div class='col-sm-8'><input class='input-sm' type='text' id='marry_income' name='marry_income' placeholder='' /></div></div>"
                                    //+"</div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-5 control-label no-padding-right' for='spouse_name'>คู่สมรสชื่อ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='spouse_name' name='spouse_name' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='child'>จำนวนบุตร </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='child' name='child' placeholder='' /></div></div>"
                                    +"</div></div></div><p>")
                                ,$("<div class='col-lg-12 row'>"
                                    +"<div class='form-group col-lg-2 row'><label class='col-sm-4 control-label no-padding-left' for='earmark'>ตำหนิ </label>"
                                    +"<div class='col-sm-8 row'><input class='input-sm' type='text' id='earmark' name='earmark' placeholder='ตำหนิ' /></div>"
                                    +"</div>"
                                +"</div>")
                                    ,$("<div class='col-lg-10 row'><div class='row col-lg-2'><input type='text' name='bw' class='form-control' value='"+data[0].bw+"' placeholder='น้ำหนัก (ก.ก.)' required></div> <div class='col-lg-2'> <input type='text' name='height' class='form-control' value='"+data[0].height+"' placeholder='ส่วนสูง (ซ.ม.)' required></div>"
                                    +"<div class='col-lg-1'><input type='button' class='btn btn-sm btn-success' id='BMIcal' value='คำนวณ'></div> <div class='col-lg-2'> <input type='text' name='bmi' class='form-control' placeholder='BMI' required></div><div class='col-lg-3'> <b id='BMIresult'></b></div></div><div class='col-lg-12 row'>&nbsp;</div>")
                                    
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>อาการสำคัญ (CC) </b></label></div>")
                                ,$("<textarea name='CC' id='CC' class='form-control' placeholder='อาการสำคัญ (CC)'>"+data[0].cc+"</textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติความเจ็บป่วยปัจจุบัน (PI) </b></label></div>")
                                ,$("<textarea name='HPI' id='HPI' class='form-control' placeholder='ประวัติความเจ็บป่วยปัจจุบัน (PI)'>"+data[0].hpi+"</textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติความเจ็บป่วยทางจิตเวชในอดีต </b></label></div>")
                                ,$("<textarea name='illness' id='illness' class='form-control' placeholder='ประวัติความเจ็บป่วยทางจิตเวชในอดีต'>"+data[0].pmh+"</textarea><p>")
                                ,$("<div class='widget-body'><div class='widget-main row'>"
                                    +"<div class='alert alert-danger'>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> ส่วนของ ER </b></u></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>พกพาอาวุธ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<textarea name='weapon' id='weapon' class='form-control' placeholder='รายละเอียดการพกพาอาวุธ'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การจำกัดพฤติกรรม </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<textarea name='detain' id='detain' class='form-control' placeholder='รายละเอียดการจำกัดพฤติกรรม'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>สรุปประเภทผู้ป่วย </b></label><div class='col-sm-1'><label><input class='ace' type='checkbox' name='typeP_1' value='1'><span class='lbl'> 3s</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_2' value='2'><span class='lbl'> เฝ้าระวังหลบหนี</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_3' value='3'><span class='lbl'> เฝ้าระวังฆ่าตัวตาย</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_4' value='4'><span class='lbl'> เฝ้าระวังอุบัติเหตุ</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_5' value='5'><span class='lbl'> เฝ้าระวังพฤติกรรมรุนแรง</span></label></div>"
                                    +"<div class='col-sm-2'></div><div class='col-sm-3'><label><input class='ace' type='checkbox' name='typeP_6' value='6'><span class='lbl'> พรบ. 120 ยาเสพติด</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_7' value='7'><span class='lbl'> พรบ.สุรา</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การคัดกรอง SMI-V </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='smi4_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='smi4_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<div class='form-group row' id='smi4_group'><div class='col-sm-2'></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_1' value='1'><span class='lbl'> 1</span></label></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_2' value='2'><span class='lbl'> 2</span></label></div>"
                                    +"<div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_3' value='3'><span class='lbl'> 3</span></label></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_4' value='4'><span class='lbl'> 4</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>นิติจิตเวช </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<textarea name='lawpsych' id='lawpsych' class='form-control' placeholder='ระบุ (เลขคดี/คดี/เลขที่หนังสือนำส่ง)'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การนอนหลับ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='sleep_chk' value='N'checked required><span class='lbl'> หลับได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='sleep_chk' value='Y' required><span class='lbl'> นอนไม่หลับ</span></label></div></div>"
                                    +"<textarea name='sleep' id='sleep' class='form-control' placeholder='รายละเอียด'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การคัดกรอง IC  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='IC_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='IC_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<textarea name='IC' id='IC' class='form-control' placeholder='รายละเอียด'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การรับประทานยา  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='N'checked required><span class='lbl'> ต่อเนื่อง</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='A' required><span class='lbl'> ไม่สม่ำเสมอ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='Y' required><span class='lbl'> ขาดยา</span></label></div></div>"
                                    +"<textarea name='med' id='med' class='form-control' placeholder='รายละเอียด'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บาดแผล </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<textarea name='wound' id='wound' class='form-control' placeholder='รายละเอียดบาดแผล'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>อุบัติเหตุทางสมอง/การผ่าตัด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<textarea name='surgery' id='surgery' class='form-control' placeholder='รายละเอียดอุบัติเหตุทางสมอง/การผ่าตัด'></textarea><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>สุรา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='N'checked required><span class='lbl'> ไม่ดื่ม</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='Y' required><span class='lbl'> ดื่ม</span></label></div></div>"
                                    +"<div class='row' id='alcohol'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='alcohol_kind'>ชนิด </label>"
                                    +"<div class='col-sm-8'><select class='form-control form-control-sm select2' id='alcohol_type' name='alcohol_type'></select></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='alcohol_vol'>ปริมาณ </label>"
                                    +"<div class='col-sm-8'><select class='form-control form-control-sm select2' id='alcohol_vol' name='alcohol_vol'></select></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='alcohol_frequency'>ความถี่ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='alcohol_frequency' name='alcohol_frequency' placeholder='' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='drink_age'>ระยะเวลาที่ดื่มต่อเนื่อง </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='drink_age' name='drink_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='last_useA'>ดื่มครั้งสุดท้าย (จำนวนวัน) </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='last_useA' name='last_useA' placeholder='ระบุจำนวนวัน' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='time_stop'>ระยะเวลาที่เลิก </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='time_stop' name='time_stop' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='drink_cause'>สาเหตุการดื่ม </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='drink_cause' name='drink_cause' placeholder='' /></div></div>"
                                    +"</div></div></div><p>"
                                    +"<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ยาเสพติด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='narcotic_chk' value='N'checked required><span class='lbl'> ไม่เสพ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='narcotic_chk' value='Y' required><span class='lbl'> เสพ</span></label></div></div>"    
                                    +"<div class='row' id='narcotic'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_kind'>ชนิด </label>"
                                    +"<div class='col-sm-8'><select class='form-control form-control-sm  select2' id='dope_type' name='dope_type'></select></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_volume'>ปริมาณ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_volume' name='narcotic_volume' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_frequency'>ความถี่ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_frequency' name='narcotic_frequency' placeholder='' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_age'>ระยะเวลาที่ใช้ต่อเนื่อง </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_age' name='narcotic_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='last_useD'>ใช้ครั้งสุดท้าย (จำนวนวัน) </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='last_useD' name='last_useD' placeholder='ระบุจำนวนวัน' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_stop'>ระยะเวลาที่เลิก </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_stop' name='narcotic_stop' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='narcotic_cause'>สาเหตุการใช้ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_cause' name='narcotic_cause' placeholder='' /></div></div>"
                                    +"</div></div></div><p>"
                                    +"</div>"
                                    // +"<p class='alert alert-success'>"
                                    //     +"สามารถใส่เนื้อหาในนี้ได้</p>"
                                    +"</div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>โรคประจำตัวหรืออาการทางกายในปัจจุบัน </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<div class='form-group'><textarea name='disease' id='disease' class='form-control' placeholder='รายละเอียดโรคประจำตัว'></textarea></div>"
                                    +"<div class='form-group' id='heal_0'><div class='col-sm-2'><input class='ace' type='radio' name='heal_chk' value='N'checked required><span class='lbl'> ไม่ได้รักษา</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heal_chk' value='Y' required><span class='lbl'> อยู่ระหว่างรักษา</span></label></div></div>"
                                    +"<textarea name='heal' id='heal' class='form-control' placeholder='ระบุชื่อยา/สถานพยาบาล'></textarea><p>")
                                
                                
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประว้ติการชัก </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='whip' id='whip' class='form-control' placeholder='รายละเอียดประว้ติการชัก'></textarea><p>")
                                
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ยาที่รับประทานประจำ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='regular_med' id='regular_med' class='form-control' placeholder='รายละเอียดยาที่รับประทานประจำ'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติการแพ้ยา/แพ้อาหาร/แพ้สารอื่นๆและ ADR </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name=beAllergic' id='beAllergic' class='form-control' placeholder='รายละเอียดประวัติการแพ้ยา/แพ้อาหาร/แพ้สารอื่นๆและ ADR'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='old_med' id='old_med' class='form-control' placeholder='รายละเอียดประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ'></textarea><p>")
                                
                                // ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>อื่นๆ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='other_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='other_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                // ,$("<textarea name='other' id='other' class='form-control' placeholder='รายละเอียด'></textarea><p>")
                                // ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การคลอด </b></label>"
                                //     +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='1' required><span class='lbl'> ที่บ้าน</span></label></div>"
                                //     +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='2' checked required><span class='lbl'> ที่โรงพยาบาล</span></label></div>"
                                //     +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='3' required><span class='lbl'> คลอดปกติ</span></label></div>"
                                //     +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='4' required><span class='lbl'> คลอดผิดปกติ</span></label></div></div>")
                                // ,$("<textarea name='spawn_normal' id='spawn_normal' class='form-control' placeholder='รายละเอียด'></textarea><p>")
                                // ,$("<div class='row'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                //     +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='career_now'><b>อาชีพปัจจุบัน(ลักษณะงาน) </b></label>"
                                //     +"<div class='col-sm-5'><input class='input-sm' type='text' id='career_now' placeholder='' /></div></div>"
                                //     +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='income'><b>รายได้/ปี </b></label>"
                                //     +"<div class='col-sm-5'><input class='input-sm' type='text' id='income' placeholder='' /></div></div>"
                                //     +"</div></div></div>")
                                
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติกรรมพันธุ์โรคทางจิตเวช </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='heredity' id='heredity' class='form-control' placeholder='รายละเอียดประวัติกรรมพันธุ์โรคทางจิตเวช'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติการฆ่าตัวตัวตาย / ทำร้ายร่างตานเอง ( 3 เดือนย้อนหลัง) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<div id='Hurt_yourself'><div class='checkbox'><label><input name='think' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความคิดอยากฆ่าตัวตาย</span></label></div>"
                                +"<div class='checkbox'><label><input name='plan' id='plan' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความคิดและมีแผนการที่จะฆ่าตัวตาย</span></label></div>"
                                +"<textarea name='plan_datial' id='plan_datial' class='form-control' placeholder='ระบุวิธีการ/ว.ด.ป.'></textarea><p>"
                                +"<div class='checkbox'><label><input name='action' id='action' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความพยายามหรือลงมือกระทำการฆ่าตัวตาย</span></label></div>"
                                +"<textarea name='action_detial' id='action_detial' class='form-control' placeholder='ระบุวิธีการ/ว.ด.ป.'></textarea></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>คดีทั่วไป </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='lawsuit' id='lawsuit' class='form-control' placeholder='รายละเอียดคดี'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บุคลิกภาพเดิม </b></label></div>")
                                ,$("<textarea name='personality' id='personality' class='form-control' placeholder='รายละเอียดบุคลิกภาพเดิม'></textarea><p>")
                                 ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การประเมินสภาพร่างกายเบื้องต้น  </b></label></div>")
                                ,$("<div class='col-lg-12'>"
                                    +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-right' for='shape'>รูปร่าง</label>"
                                    +"<div class='col-sm-10 row'><input class='input-sm  col-lg-12' type='text' id='shape' name='shape' placeholder='ลักษณะรูปร่าง' /></div> "
                                    +"</div>"
                                    +"<div class='form-group col-lg-6 row'><label class='col-sm-1 control-label no-padding-left' for='skin_color'> สีผิว</label>"
                                    +"<div class='col-sm-11 row'><input class='input-sm col-lg-12' type='text' id='skin_color' name='skin_color' placeholder='สีผิว'/></div> "
                                    +"</div>"
                                    +"</div>")
                                    ,$("<div class='col-lg-12'>"
                                    +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-right' for='scab'>โรคผิวหนัง</label>"
                                    +"<div class='col-sm-10 row'><input class='input-sm  col-lg-12' type='text' id='scab' name='scab' placeholder='ลักษณะโรคผิวหนัง' /></div> "
                                    +"</div>"
                                    +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-left' for='swelling'> อาการบวม</label>"
                                    +"<div class='col-sm-10 row'><input class='input-sm col-lg-12' type='text' id='swelling' name='swelling' placeholder='อาการบวม'/></div> "
                                    +"</div>"
                                    +"</div>")
                                    ,$("<div class='col-lg-12'>"
                                    +"<div class='form-group col-lg-6 row'><label class='col-sm-3 control-label no-padding-right' for='movement'>การเคลื่อนไหว</label>"
                                    +"<div class='col-sm-9 row'><input class='input-sm  col-lg-12' type='text' id='movement' name='movement' placeholder='ลักษณะการเคลื่อนไหว' /></div> "
                                    +"</div>"
                                    +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-left' for='disabled'> ความพิการ</label>"
                                    +"<div class='col-sm-10 row'><input class='input-sm col-lg-12' type='text' id='disabled' name='disabled' placeholder='ลักษณะความพิการ'/></div> "
                                    +"</div>"
                                    +"</div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การประเมินสภาพจิต  </b></label></div>")
                                ,$("<div class='form-group row'><label class='col-sm-2 col-form-label'><b>อารมณ์ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='1'><span class='lbl'> แจ่มใส</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='2'><span class='lbl'> หงุดหงิด</span></label></div>"
                                +"<div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='3'><span class='lbl'> ซึมเศร้า</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='4'><span class='lbl'> เฉยเมย/ไร้อารมณ์</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='5'><span class='lbl'> อื่นๆ</span></label></div></div>")
                                ,$("<textarea name='other_mood' id='other_mood' class='form-control' placeholder='รายละเอียด'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-2 col-form-label'><b>พฤติกรรม </b></label><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_1' value='1'><span class='lbl'> ก้าวร้าว</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_2' value='2'><span class='lbl'> ทำลายสิ่งของเครื่องใช้</span></label></div></div>")
                                ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_3' value='3'><span class='lbl'> หวาดระแวง</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_4' value='4'><span class='lbl'> ทำร้ายตัวเอง</span></label></div></div>")
                                ,$("<textarea name='action_4D' id='action_4D' class='form-control' placeholder='ระบุวิธีการ'></textarea><p>")
                                ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_5' value='5'><span class='lbl'> พูดมาก</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_6' value='6'><span class='lbl'> ทำร้ายผู้อื่น</span></label></div></div>")
                                ,$("<textarea name='action_6D' id='action_6D' class='form-control' placeholder='ระบุวิธีการ'></textarea><p>")
                                ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_7' value='7'><span class='lbl'> พูดคนเดียว</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_8' value='8'><span class='lbl'> หัวเราะคนเดียว</span></label></div></div>")
                                ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_9' value='9'><span class='lbl'> ร้องไห้ไม่สมเหตุผล</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_10' value='10'><span class='lbl'> อื่นๆ</span></label></div></div>")
                                ,$("<textarea name='action_10D' id='action_10D' class='form-control' placeholder='ระบุวิธีการ'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ความคิด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='think_chk' value='Y' checked><span class='lbl'> สมเหตุสมผล</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='think_chk' value='N'><span class='lbl'> ไม่สมเหตุสมผล</span></label></div></div>")
                                ,$("<div id='think_group' class='row'><div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_1' value='1'><span class='lbl'> หลงผิด</span></label></div></div>"
                                    +"<textarea name='think_1D' id='think_1D' class='form-control' placeholder='ระบุลักษณะการหลงผิด'></textarea><p>"
                                    +"<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_2' value='2'><span class='lbl'> หวาดระแวง</span></label></div></div>"
                                    +"<textarea name='think_2D' id='think_2D' class='form-control' placeholder='ระบุอาการหวาดระแวง'></textarea><p>"
                                    +"<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_3' value='3'><span class='lbl'> หยุดชะงัก</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_4' value='4'><span class='lbl'> วกวน</span></label></div></div>"
                                    +"<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_5' value='5'><span class='lbl'> หลากหลาย/ฟุ้งซาน</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_6' value='6'><span class='lbl'> อื่นๆ</span></label></div></div>"
                                    +"<textarea name='action_10D' id='think_6D' class='form-control' placeholder='ระบุวิธีการ'></textarea></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การรับรู้ (perception) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Recognition_chk' value='N'checked required><span class='lbl'> ตรงสภาพที่เป็นจริง</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Recognition_chk' value='Y' required><span class='lbl'> ประสาทหลอน</span></label></div></div>")
                                ,$("<textarea name='Recognition' id='Recognition' class='form-control' placeholder='ระบุรายละเอียด'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การตระหนักรู้ (insigth) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='accept_chk' value='N'checked required><span class='lbl'> ยอมรับการเจ็บป่วย</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='accept_chk' value='Y' required><span class='lbl'> ไม่ยอมรับการเจ็บป่วย</span></label></div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ความจำ  </b></label></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ระยะสั้น  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_short' value='N'checked required><span class='lbl'> ปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_short' value='Y' required><span class='lbl'> ไม่ปกติ</span></label></div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ระยะยาว  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_long' value='N'checked required><span class='lbl'> ปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_long' value='Y' required><span class='lbl'> ไม่ปกติ</span></label></div></div>")
                                // ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>วิธีแก้ปัญหาต่างๆ </b></label></div>")
                                // ,$("<textarea name='solve' id='solve' class='form-control' placeholder='รายละเอียดวิธีแก้ปัญหาต่างๆ'></textarea><p>")
                                );

                                selectMash("#alcohol_type","alcoholType_data.php"," เลือกชนิดสุรา ");
                                    selectMash("#alcohol_vol","alcoholVol_Data.php"," เลือกปริมาณ ");
                                    selectMash("#dope_type","drugs_data.php"," เลือกชนิดยาเสพติด ");

                                    $("#last_useA").attr("onkeyup","inputDigits(last_useA)");
                                    $("#last_useD").attr("onkeyup","inputDigits(last_useD)");

                                var bmi;
                                $("#BMIcal").click(function(){
                                    var height= $("input[type=text][name=height]").val()/100;
                                    bmi = ($("input[type=text][name=bw]").val()/(height*height)).toFixed(1);
                                    $("input[type=text][name=bmi]").val(bmi);
                                    if(bmi<18.5){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> น้ำหนักต่ำกว่าเกณฑ์</b>");
                                    }else if(bmi>=18.5 && bmi<=22.9){
                                        $("#BMIresult").empty().append(" <b style='color: green;'> สมส่วน</b>");
                                    }else if(bmi>=23 && bmi<=24.9){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> น้ำหนักเกิน</b>");
                                    }else if(bmi>=25 && bmi<=29.9){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> โรคอ้วน</b>");
                                    }else if(bmi>29.9){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> โรคอ้วนอันตราย</b>");
                                    }
                                });
                                $("textarea#disease").hide();
                                $("#surgery").hide();
                                $("#whip").hide();
                                $("#weapon").hide();
                                $("#detain").hide();
                                $("#wound").hide();
                                $("#regular_med").hide();
                                $("#beAllergic").hide();
                                $("#old_med").hide();
                                $("#alcohol").hide();
                                $("#narcotic").hide();
                                $("#other").hide();
                                $("#marry").hide();
                                $("#heredity").hide();
                                $("#Hurt_yourself").hide();
                                $("#plan_datial").hide();
                                $("#action_detial").hide();
                                $("textarea[name=lawsuit]").hide();
                                $("textarea[name=lawpsych]").hide();
                                $("#IC").hide();
                                $("#sleep").hide();
                                $("#med").hide();
                                $("#smi4_group").hide();
                                $("#other_mood").hide();
                                $("#action_4D").hide();
                                $("#action_6D").hide();
                                $("#action_10D").hide();
                                $("#think_group").hide();
                                $("#think_1D").hide();
                                $("#think_2D").hide();
                                $("#think_6D").hide();
                                $("#Recognition").hide();
                                $("#heal_0").hide();
                                $("textarea#heal").hide();
                                
                                $("input[type=radio][name=disease_chk]").click(function(){ 
                                    if($("input[type=radio][name=disease_chk]:checked").val()=='Y'){$("textarea#disease").show();$("div#heal_0").show();}else{$("textarea#disease").hide();$("div#heal_0").hide();}
                                    });
                                    $("input[type=radio][name=heal_chk]").click(function(){ 
                                        if($("input[type=radio][name=heal_chk]:checked").val()=='Y'){$("textarea#heal").show();}else{$("textarea#heal").hide();}
                                        });
                                $("input[type=radio][name=surgery_chk]").click(function(){
                                    if($("input[type=radio][name=surgery_chk]:checked").val()=='Y'){$("textarea#surgery").show();}else{$("textarea#surgery").hide();}
                                    });  
                                $("input[type=radio][name=whip_chk]").click(function(){
                                    if($("input[type=radio][name=whip_chk]:checked").val()=='Y'){$("textarea#whip").show();}else{$("textarea#whip").hide();}
                                    });  
                                $("input[type=radio][name=weapon_chk]").click(function(){
                                    if($("input[type=radio][name=weapon_chk]:checked").val()=='Y'){$("textarea#weapon").show();}else{$("textarea#weapon").hide();}
                                    });
                                $("input[type=radio][name=detain_chk]").click(function(){
                                    if($("input[type=radio][name=detain_chk]:checked").val()=='Y'){$("textarea#detain").show();}else{$("textarea#detain").hide();}
                                    });
                                $("input[type=radio][name=wound_chk]").click(function(){
                                    if($("input[type=radio][name=wound_chk]:checked").val()=='Y'){$("textarea#wound").show();}else{$("textarea#wound").hide();}
                                    });
                                $("input[type=radio][name=regular_med_chk]").click(function(){
                                    if($("input[type=radio][name=regular_med_chk]:checked").val()=='Y'){$("textarea#regular_med").show();}else{$("textarea#regular_med").hide();}
                                    });
                                $("input[type=radio][name=beAllergic_chk]").click(function(){
                                    if($("input[type=radio][name=beAllergic_chk]:checked").val()=='Y'){$("textarea#beAllergic").show();}else{$("textarea#beAllergic").hide();}
                                    });
                                $("input[type=radio][name=old_med_chk]").click(function(){
                                    if($("input[type=radio][name=old_med_chk]:checked").val()=='Y'){$("textarea#old_med").show();}else{$("textarea#old_med").hide();}
                                    });  
                                $("input[type=radio][name=alcohol_chk]").click(function(){
                                    if($("input[type=radio][name=alcohol_chk]:checked").val()=='Y'){$("div#alcohol").show();}else{$("div#alcohol").hide();}
                                    });   
                                $("input[type=radio][name=narcotic_chk]").click(function(){
                                    if($("input[type=radio][name=narcotic_chk]:checked").val()=='Y'){$("div#narcotic").show();}else{$("div#narcotic").hide();}
                                    });  
                                $("input[type=radio][name=other_chk]").click(function(){
                                    if($("input[type=radio][name=other_chk]:checked").val()=='Y'){$("textarea#other").show();}else{$("textarea#other").hide();}
                                    });  
                                $("input[type=radio][name=father_chk]").click(function(){
                                    if($("input[type=radio][name=father_chk]:checked").val()=='Y'){$("div#father").show();}else{$("div#father").hide();}
                                    });
                                $("input[type=radio][name=mother_chk]").click(function(){
                                    if($("input[type=radio][name=mother_chk]:checked").val()=='Y'){$("div#mother").show();}else{$("div#mother").hide();}
                                    });  
                                $("input[type=radio][name=marry_chk]").click(function(){
                                    if($("input[type=radio][name=marry_chk]:checked").val()=='3'){$("div#marry").show();}else{$("div#marry").hide();}
                                    }); 
                                $("input[type=radio][name=heredity_chk]").click(function(){
                                    if($("input[type=radio][name=heredity_chk]:checked").val()=='Y'){$("textarea#heredity").show();}else{$("textarea#heredity").hide();}
                                    });
                                $("input[type=radio][name=Hurt_yourself_chk]").click(function(){
                                    if($("input[type=radio][name=Hurt_yourself_chk]:checked").val()=='Y'){$("div#Hurt_yourself").show()}
                                    else{$("div#Hurt_yourself").hide();}
                                    });  
                                    $("input[type=checkbox][name=plan]").click(function(){
                                        if($("input[type=checkbox][name=plan]").prop("checked") == true){$("textarea#plan_datial").show();}
                                        else{$("textarea#plan_datial").hide();}
                                        });
                                    $("input[type=checkbox][name=action]").click(function(){    
                                        if($("input[type=checkbox][name=action]").prop("checked") == true){$("textarea#action_detial").show();
                                        }else{$("textarea#action_detial").hide();}
                                    });
                                $("input[type=radio][name=lawsuit_chk]").click(function(){
                                    if($("input[type=radio][name=lawsuit_chk]:checked").val()=='Y'){$("textarea#lawsuit").show();}else{$("textarea#lawsuit").hide();}
                                    }); 
                                $("input[type=radio][name=lawpsych_chk]").click(function(){
                                    if($("input[type=radio][name=lawpsych_chk]:checked").val()=='Y'){$("textarea#lawpsych").show();}else{$("textarea#lawpsych").hide();}
                                });
                                $("input[type=radio][name=IC_chk]").click(function(){
                                    if($("input[type=radio][name=IC_chk]:checked").val()=='Y'){$("textarea#IC").show();}else{$("textarea#IC").hide();}
                                });     
                                $("input[type=radio][name=sleep_chk]").click(function(){
                                    if($("input[type=radio][name=sleep_chk]:checked").val()=='Y'){$("textarea#sleep").show();}else{$("textarea#sleep").hide();}
                                });  
                                $("input[type=radio][name=med_chk]").click(function(){
                                    if($("input[type=radio][name=med_chk]:checked").val()=='Y'){$("textarea#med").show();}else{$("textarea#med").hide();}
                                });   
                                $("input[type=radio][name=smi4_chk]").click(function(){
                                    if($("input[type=radio][name=smi4_chk]:checked").val()=='Y'){$("div#smi4_group").show();}else{$("div#smi4_group").hide();}
                                });
                                $("input[type=radio][name=mood_chk]").click(function(){
                                    if($("input[type=radio][name=mood_chk]:checked").val()=='5'){$("textarea#other_mood").show();}else{$("textarea#other_mood").hide();}
                                });
                                $("input[type=checkbox][name=action_4]").click(function(){
                                    if($("input[type=checkbox][name=action_4]:checked").prop("checked") == true){$("textarea#action_4D").show();}else{$("textarea#action_4D").hide();}
                                });
                                $("input[type=checkbox][name=action_6]").click(function(){
                                    if($("input[type=checkbox][name=action_6]:checked").prop("checked") == true){$("textarea#action_6D").show();}else{$("textarea#action_6D").hide();}
                                });
                                $("input[type=checkbox][name=action_10]").click(function(){
                                    if($("input[type=checkbox][name=action_10]:checked").prop("checked") == true){$("textarea#action_10D").show();}else{$("textarea#action_10D").hide();}
                                });
                                $("input[type=radio][name=think_chk]").click(function(){
                                    if($("input[type=radio][name=think_chk]:checked").val()=='N'){$("div#think_group").show();}else{$("div#think_group").hide();}
                                });
                                $("input[type=checkbox][name=think_1]").click(function(){
                                    if($("input[type=checkbox][name=think_1]:checked").prop("checked") == true){$("textarea#think_1D").show();}else{$("textarea#think_1D").hide();}
                                });
                                $("input[type=checkbox][name=think_2]").click(function(){
                                    if($("input[type=checkbox][name=think_2]:checked").prop("checked") == true){$("textarea#think_2D").show();}else{$("textarea#think_2D").hide();}
                                });
                                $("input[type=checkbox][name=think_6]").click(function(){
                                    if($("input[type=checkbox][name=think_6]:checked").prop("checked") == true){$("textarea#think_6D").show();}else{$("textarea#think_6D").hide();}
                                });
                                $("input[type=radio][name=Recognition_chk]").click(function(){
                                    if($("input[type=radio][name=Recognition_chk]:checked").val()=='Y'){$("textarea#Recognition").show();}else{$("textarea#Recognition").hide();}
                                    }); 
                                $("#biographer").val(data[0].relative);

///////// ER Zone /////////// 
    
    if(data[0].weapon_chk == 'Y'){
        $("input[type=radio][name=weapon_chk][value='Y']").attr("checked","checked");
        $("textarea#weapon").show();
        $("textarea#weapon").val(data[0].weapon);
    }
    if(data[0].detain_chk == 'Y'){
        $("input[type=radio][name=detain_chk][value='Y']").attr("checked","checked");
        $("textarea#detain").show();
        $("textarea#detain").val(data[0].detain);
    }console.log(data[0].typeP_1)
    if(data[0].typeP_1 == '1'){$("input[type=checkbox][name=typeP_1]").attr("checked","checked");}
    if(data[0].typeP_2 == '2'){$("input[type=checkbox][name=typeP_2]").attr("checked","checked");}
    if(data[0].typeP_3 == '3'){$("input[type=checkbox][name=typeP_3]").attr("checked","checked");}
    if(data[0].typeP_4 == '4'){$("input[type=checkbox][name=typeP_4]").attr("checked","checked");}
    if(data[0].typeP_5 == '5'){$("input[type=checkbox][name=typeP_5]").attr("checked","checked");}
    if(data[0].typeP_6 == '6'){$("input[type=checkbox][name=typeP_6]").attr("checked","checked");}
    if(data[0].typeP_7 == '7'){$("input[type=checkbox][name=typeP_7]").attr("checked","checked");}
    if(data[0].smi4_chk == 'Y'){
        $("input[type=radio][name=smi4_chk][value='Y']").attr("checked","checked");
        $("div#smi4_group").show();
        if(data[0].smi4_1 == '1'){$("input[type=checkbox][name=smi4_1]").attr("checked","checked");}
        if(data[0].smi4_2 == '2'){$("input[type=checkbox][name=smi4_2]").attr("checked","checked");}
        if(data[0].smi4_3 == '3'){$("input[type=checkbox][name=smi4_3]").attr("checked","checked");}
        if(data[0].smi4_4 == '4'){$("input[type=checkbox][name=smi4_4]").attr("checked","checked");}
    }
    if(data[0].lawpsych_chk == 'Y'){
        $("input[type=radio][name=lawpsych_chk][value='Y']").attr("checked","checked");
        $("textarea#lawpsych").show();
        $("textarea#lawpsych").val(data[0].lawpsych);
    }
    if(data[0].sleep_chk == 'Y'){
        $("input[type=radio][name=sleep_chk][value='Y']").attr("checked","checked");
        $("textarea#sleep").show();
        $("textarea#sleep").val(data[0].sleep);
    }
    if(data[0].IC_chk == 'Y'){
        $("input[type=radio][name=IC_chk][value='Y']").attr("checked","checked");
        $("textarea#IC").show();
        $("textarea#IC").val(data[0].IC);
    }
    if(data[0].med_chk == 'Y'){
        $("input[type=radio][name=med_chk][value='Y']").attr("checked","checked");
        $("textarea#med").show();
        $("textarea#med").val(data[0].med);
    }
    if(data[0].wound_chk == 'Y'){
        $("input[type=radio][name=wound_chk][value='Y']").attr("checked","checked");
        $("textarea#wound").show();
        $("textarea#wound").val(data[0].wound);
    }
    if(data[0].surgery_chk == 'Y'){
        $("input[type=radio][name=surgery_chk][value='Y']").attr("checked","checked");
        $("textarea#surgery").show();
        $("textarea#surgery").val(data[0].surgery);
    }
    if(data[0].alcohol_chk == 'Y'){
        $("input[type=radio][name=alcohol_chk][value='Y']").attr("checked","checked");
        $("div#alcohol").show();
        selectMash("#alcohol_type","alcoholType_data.php"," เลือกชนิดสุรา ",data[0].alcohol_type);
        selectMash("#alcohol_vol","alcoholVol_Data.php"," เลือกปริมาณ ",data[0].alcohol_vol);
        $("input#last_useA").val(data[0].last_useA);
    }
    if(data[0].dope_chk == 'Y'){
        $("input[type=radio][name=narcotic_chk][value='Y']").attr("checked","checked");
        $("div#narcotic").show();
        selectMash("#dope_type","drugs_data.php"," เลือกชนิดยาเสพติด ",data[0].dope_type);
        $("input#last_useD").val(data[0].last_useD);
    }

///////// End ER Zone ///////////
                                });
                                
    

    $("#frminv").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        // console.log(dataForm)
        // for (var value of dataForm.values()) {
        //     console.log(value);
        // }
        var settings = {
            type: "POST",
            url: "../back/API/prcSocialAPI.php",
            async: true,
            crossDomain: true,
            data: dataForm,
            contentType: false,
            cache: false,
            processData: false
        }
        console.log(settings)
        $.ajax(settings).done(function (result) {
            alert(result.messege);
            $("#body_text").empty();
            popup('../back/API/socialPDF.php?id='+result.id, popup, 450, 500);
            AssSocial('#index_content',$.cookie('hn'));
        })
    }));
}
