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
        var PL = new PageLayout(content);
        PL.GetPL();
        $("h5.widget-title").empty().prepend("แบบสัมภาษณ์ประวัติผู้ป่วย");
        $("#Budget").remove();
        $("#contentGr").empty().append($("<form action='' name='frminv' id='frminv' method='post' enctype='multipart/form-data'>"
        + "<div class='widget-main row'><div class='col-lg-12' id='cgi-post'>"
        +"<div id='interviewfrm'></div>"
        + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        +"</div></form>"));
        var idvn = id; 
        $.getJSON('../back/API/patient_detail.php',{data:idvn.data},function (data) { 
        $("#interviewfrm").append($("<div class='col-lg-12 row'><label><h4>ชื่อผู้ป่วย <b>"+data[0].fullname+"</b> อายุ <b>"+data[0].age+"</b> ปี  HN <b>"+data[0].hn+"</b>  AN <b>"+data[0].an+"</b>  Admit ครั้งที่ <b>"+data[0].admit+"</b></h4></label></div><p>")
                                ,$("<div class='col-lg-12 row'><div class='col-lg-6 row'><input type='text' id=biographer' name='biographer' placeholder='ชื่อผู้ให้ประวัติ' class='col-xs-12 col-sm-12' /></div><div class='col-lg-6'><input type='text' id='concerned' name='concerned' placeholder='ความเกี่ยวข้องกับผู้ป่วย' class='col-xs-12 col-sm-12' /></div></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>อาการสำคัญ (CC) </b></label></div>")
                                ,$("<textarea name='CC' id='CC' class='form-control' placeholder='อาการสำคัญ (CC)'>"+data[0].cc+"</textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติความเจ็บป่วยปัจจุบัน (PI) </b></label></div>")
                                ,$("<textarea name='HPI' id='HPI' class='form-control' placeholder='ประวัติความเจ็บป่วยปัจจุบัน (PI)'>"+data[0].hpi+"</textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติความเจ็บป่วยในอดีต </b></label></div>")
                                ,$("<textarea name='illness' id='illness' class='form-control' placeholder='ประวัติความเจ็บป่วยในอดีต'>"+data[0].pmh+"</textarea><p>")
                                ,$("<div class=''><div class='alert alert-info'><div class='form-group'><label class='col-sm-5 col-form-label row'><b>โรคประจำตัว </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<div class='form-group'><textarea name='disease' id='disease' class='form-control' placeholder='รายละเอียดโรคประจำตัว'></textarea></div></div></div><p>")
                                ,$("<div class=''><div class='alert alert-info'><div class='form-group'><label class='col-sm-5 col-form-label row'><b>อุบัติเหตุทางสมอง/การผ่าตัด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                                    +"<div class='form-group'><textarea name='surgery' id='surgery' class='form-control' placeholder='รายละเอียดอุบัติเหตุทางสมอง/การผ่าตัด'></textarea></div></div></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประว้ติการชัก </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='whip' id='whip' class='form-control' placeholder='รายละเอียดประว้ติการชัก'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บาดแผล </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='wound' id='wound' class='form-control' placeholder='รายละเอียดบาดแผล'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ยาที่รับประทานประจำ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='regular_med' id='regular_med' class='form-control' placeholder='รายละเอียดยาที่รับประทานประจำ'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติการแพ้ยา/แพ้อาหาร/แพ้สารอื่นๆและ ADR </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name=beAllergic' id='beAllergic' class='form-control' placeholder='รายละเอียดประวัติการแพ้ยา/แพ้อาหาร/แพ้สารอื่นๆและ ADR'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='old_med' id='old_med' class='form-control' placeholder='รายละเอียดประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>สุรา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='N'checked required><span class='lbl'> ไม่ดื่ม</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='Y' required><span class='lbl'> ดื่ม</span></label></div></div>")
                                ,$("<div class='row' id='alcohol'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='alcohol_kind'>ชนิด </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='alcohol_kind' name='alcohol_kind' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='alcohol_volume'>ปริมาณ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='alcohol_volume' name='alcohol_volume' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='alcohol_frequency'>ความถี่ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='alcohol_frequency' name='alcohol_frequency' placeholder='' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='drink_age'>ระยะเวลาที่ดื่มต่อเนื่อง </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='drink_age' name='drink_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='drink_last'>ดื่มครั้งสุดท้าย (วันที่) </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='drink_last' name='drink_last' placeholder='' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='time_stop'>ระยะเวลาที่เลิก </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='time_stop' name='time_stop' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='drink_cause'>สาเหตุการดื่ม </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='drink_cause' name='drink_cause' placeholder='' /></div></div>"
                                    +"</div></div></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ยาเสพติด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='narcotic_chk' value='N'checked required><span class='lbl'> ไม่เสพ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='narcotic_chk' value='Y' required><span class='lbl'> เสพ</span></label></div></div>")    
                                ,$("<div class='row' id='narcotic'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_kind'>ชนิด </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_kind' name='narcotic_kind' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_volume'>ปริมาณ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_volume' name='narcotic_volume' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_frequency'>ความถี่ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_frequency' name='narcotic_frequency' placeholder='' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_age'>ระยะเวลาที่ใช้ต่อเนื่อง </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_age' name='narcotic_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_last'>ใช้ครั้งสุดท้าย (วันที่) </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_last' name='narcotic_last' placeholder='' /></div></div>"
                                    +"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_stop'>ระยะเวลาที่เลิก </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_stop' name='narcotic_stop' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_cause'>สาเหตุการใช้ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_cause' name='narcotic_cause' placeholder='' /></div></div>"
                                    +"</div></div></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>อื่นๆ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='other_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='other_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='other' id='other' class='form-control' placeholder='รายละเอียด'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การคลอด </b></label>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='1' required><span class='lbl'> ที่บ้าน</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='2' checked required><span class='lbl'> ที่โรงพยาบาล</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='3' required><span class='lbl'> คลอดปกติ</span></label></div>"
                                    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='spawn' value='4' required><span class='lbl'> คลอดผิดปกติ</span></label></div></div>")
                                ,$("<textarea name='spawn_normal' id='spawn_normal' class='form-control' placeholder='รายละเอียด'></textarea><p>")
                                ,$("<div class='row'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='career_now'><b>อาชีพปัจจุบัน(ลักษณะงาน) </b></label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='career_now' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='income'><b>รายได้/ปี </b></label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='income' placeholder='' /></div></div>"
                                    +"</div></div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บิดา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='father_chk' value='Y' checked required><span class='lbl'> มีชีวิตอยู่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='father_chk' value='N' required><span class='lbl'> เสียชีวิต</span></label></div></div>")    
                                ,$("<div id='father' class='row'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='father_age'>อายุ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='father_age' name='father_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='father_income'>อาชีพ </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='father_income' name='father_income' placeholder='' /></div></div>"
                                    +"</div></div></div>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>มารดา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='mother_chk' value='Y' checked required><span class='lbl'> มีชีวิตอยู่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mother_chk' value='N' required><span class='lbl'> เสียชีวิต</span></label></div></div>")    
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
                                ,$("<div id='marry' class='row'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-3 control-label no-padding-right' for='marry_age'>คู่สมรส อายุ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='marry_age' name='marry_age' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='marry_career>อาชีพ </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='marry_career' name='marry_career' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-5 row'><label class='col-sm-3 control-label no-padding-right' for='marry_income'>รายได้คู่สมรส/ปี </label>"
                                    +"<div class='col-sm-8'><input class='input-sm' type='text' id='marry_income' name='marry_income' placeholder='' /></div></div>"
                                    +"</div>"
                                    +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                    +"<div class='form-group col-lg-3 row'><label class='col-sm-5 control-label no-padding-right' for='marry_habit'>นิสัยคู่สมรส </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='marry_habit' name='marry_habit' placeholder='' /></div></div>"
                                    +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='child'>จำนวนบุตร </label>"
                                    +"<div class='col-sm-5'><input class='input-sm' type='text' id='child' name='child' placeholder='' /></div></div>"
                                    +"</div></div></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติกรรมพันธุ์โรคทางจิตเวช </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='heredity' id='heredity' class='form-control' placeholder='รายละเอียดประวัติกรรมพันธุ์โรคทางจิตเวช'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติการฆ่าตัวตาย/ทำร้ายร่างกายตัวเอง </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<div id='Hurt_yourself'><div class='checkbox'><label><input name='think' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความคิดอยากฆ่าตัวตาย</span></label></div>"
                                +"<div class='checkbox'><label><input name='plan' id='plan' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความคิดและมีแผนการที่จะฆ่าตัวตาย</span></label></div>"
                                +"<textarea name='plan_datial' id='plan_datial' class='form-control' placeholder='ระบุวิธีการ/ว.ด.ป.'></textarea><p>"
                                +"<div class='checkbox'><label><input name='action' id='action' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความพยายามหรือลงมือกระทำการฆ่าตัวตาย</span></label></div>"
                                +"<textarea name='action_detial' id='action_detial' class='form-control' placeholder='ระบุวิธีการ/ว.ด.ป.'></textarea></div><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>คดี </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
                                ,$("<textarea name='lawsuit' id='lawsuit' class='form-control' placeholder='รายละเอียดคดี'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บุคลิกภาพเดิม </b></label></div>")
                                ,$("<textarea name='personality' id='personality' class='form-control' placeholder='รายละเอียดบุคลิกภาพเดิม'></textarea><p>")
                                ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>วิธีแก้ปัญหาต่างๆ </b></label></div>")
                                ,$("<textarea name='solve' id='solve' class='form-control' placeholder='รายละเอียดวิธีแก้ปัญหาต่างๆ'></textarea><p>"));
                                
                                $("textarea#disease").hide();
                                $("#surgery").hide();
                                $("#whip").hide();
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
                                
                                $("input[type=radio][name=disease_chk]").click(function(){ 
                                    if($("input[type=radio][name=disease_chk]:checked").val()=='Y'){$("textarea#disease").show();}else{$("textarea#disease").hide();}
                                    });
                                $("input[type=radio][name=surgery_chk]").click(function(){
                                    if($("input[type=radio][name=surgery_chk]:checked").val()=='Y'){$("textarea#surgery").show();}else{$("textarea#surgery").hide();}
                                    });  
                                $("input[type=radio][name=whip_chk]").click(function(){
                                    if($("input[type=radio][name=whip_chk]:checked").val()=='Y'){$("textarea#whip").show();}else{$("textarea#whip").hide();}
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
