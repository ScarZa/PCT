var AssFirstRecIPD = function(content){
    this.content = content;
    this.GetFRIPD = function () {
        $(this.content).empty().append($("<div class='alert alert-success' id='part1'></div>")
        ,$("<div class='alert alert-danger'>"
        +"<div class='form-group row'><label class='col-sm-5 col-form-label'><a id='SW-ER-frame'><u><b> ข้อมูลจากห้องฉุกเฉิน </b></u></a></label></div>"
        +"<div id='ER-frame'>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประวัติพกพาอาวุธ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        + "<textarea name='weapon' id='weapon' class='form-control' placeholder='รายละเอียดการพกพาอาวุธ'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>พกพาอาวุธ(ตรวจค้น) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='weaponer_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weaponer_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        +"<textarea name='weapon' id='weaponer' class='form-control' placeholder='รายละเอียดการพกพาอาวุธ'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การจำกัดพฤติกรรม </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        +"<textarea name='detain' id='detain' class='form-control' placeholder='รายละเอียดการจำกัดพฤติกรรม'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การคัดกรอง SMI-V </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='smi4_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='smi4_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
        // +"<div class='form-group row' id='smi4_group'><div class='col-sm-2'></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_1' value='1'><span class='lbl'> 1</span></label></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_2' value='2'><span class='lbl'> 2</span></label></div>"
        // +"<div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_3' value='3'><span class='lbl'> 3</span></label></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_4' value='4'><span class='lbl'> 4</span></label></div></div>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>นิติจิตเวช </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        +"<textarea name='lawpsych' id='lawpsych' class='form-control' placeholder='ระบุ (เลขคดี/คดี/เลขที่หนังสือนำส่ง)'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การนอนหลับ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='sleep_chk' value='N'checked required><span class='lbl'> หลับได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='sleep_chk' value='Y' required><span class='lbl'> นอนไม่หลับ</span></label></div></div>"
        +"<textarea name='sleep' id='sleep' class='form-control' placeholder='รายละเอียด'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การคัดกรอง IC  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='IC_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='IC_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
        +"<textarea name='IC' id='IC' class='form-control' placeholder='รายละเอียด'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การรับประทานยา  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='N'checked required><span class='lbl'> ต่อเนื่อง</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='A' required><span class='lbl'> ไม่สม่ำเสมอ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='Y' required><span class='lbl'> ขาดยา</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='0' required><span class='lbl'> ไม่เคยรับยา</span></label></div></div>"
        + "<textarea name='med' id='med' class='form-control' placeholder='รายละเอียด'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>อุบัติเหตุ  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='accident_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='accident_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='accident_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        +"<textarea name='accident' id='accident' class='form-control' placeholder='รายละเอียด'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>บาดแผล </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
        +"<textarea name='wound' id='wound' class='form-control' placeholder='รายละเอียดบาดแผล'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>อุบัติเหตุทางสมอง/การผ่าตัด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        + "<textarea name='surgery' id='surgery' class='form-control' placeholder='รายละเอียดอุบัติเหตุทางสมอง/การผ่าตัด'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ภาวะแทรกซ้อน (ER) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='complicate_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='complicate_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='complicate_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
        +"<textarea name='complicate' id='complicate' class='form-control' placeholder='รายละเอียดภาวะแทรกซ้อน (ER)'></textarea><p>"
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>สุรา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='N'checked required><span class='lbl'> ไม่ดื่ม</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='Y' required><span class='lbl'> ดื่ม</span></label></div></div>"
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
        +"<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ยาเสพติด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='narcotic_chk' value='N'checked required><span class='lbl'> ไม่เสพ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='narcotic_chk' value='Y' required><span class='lbl'> เสพ</span></label></div></div>"    
        +"<div class='row' id='narcotic'><div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
        +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='dope_type'>ชนิด </label>"
        +"<div class='col-sm-8'><select class='form-control form-control-sm  select2' id='dope_type' name='dope_type'></select></div></div>"
        +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_volume'>ปริมาณ </label>"
        +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_vol' name='narcotic_vol' placeholder='' /></div></div>"
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
        +"</div></div><p>"
        +"</div>"
        // +"<p class='alert alert-success'>"
        //     +"สามารถใส่เนื้อหาในนี้ได้</p>"
      + "</div></div>")
            , $("<div class='alert alert-info' id='part2'></div>")
            ,$("<div class='alert alert-warning'>"
        + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> ประเภทผู้ป่วย </b></u></label></div>"
        +"<div class='form-group row'><div class='col-sm-3'><label><input class='ace' type='radio' name='typeP' value='1'><span class='lbl'> จิตเวชทั่วไป </span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='typeP' value='2'><span class='lbl'> พรบ.สุรา/ยาเสพติด</span></label></div>"
        + "</div></div>")
        ,$("<div class='alert alert-success'>"
        + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> การรีเฟอร์แรกรับ </b></u></label></div>"
        +"<div class='form-group row'><div class='col-sm-2'><label><input class='ace' type='radio' name='refer' value='1'><span class='lbl'> Refer-in</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='refer' value='2'><span class='lbl'> ไม่มีใบ Refer</span></label></div>"
          + "</div></div>")
          ,$("<div class='alert alert-info'>"
            + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> ประเภทการมา Admit </b></u></label></div>"
            +"<div class='form-group row'><div class='col-sm-3'><label><input class='ace' type='radio' name='admit_type' value='1'><span class='lbl'> มารับบริการเอง</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='admit_type' value='2'><span class='lbl'> รพ.ในเครือข่ายนำส่ง</span></label></div>"
            +"<div class='col-sm-3'><label><input class='ace' type='radio' name='admit_type' value='3'><span class='lbl'> รพ.นอกเครือข่ายนำส่ง</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='admit_type' value='4'><span class='lbl'> มูลนิธินำส่ง</span></label></div>"
            +"<div class='col-sm-3'><label><input class='ace' type='radio' name='admit_type' value='5'><span class='lbl'> ตำรวจ/หรือฝ่ายปกครองนำส่ง</span></label></div>"
            + "</div></div>")
            ,$("<div class='alert alert-warning'>"
        + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> ประเภทการ admit </b></u></label></div>"
        +"<div class='form-group row'><div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='1'><span class='lbl'> Admit แบบปกติ</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='3'><span class='lbl'> Admit โดยการ Refer กลับ</span></label></div>"
                + "<div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='3'><span class='lbl'> Admit เพื่อการ Rehabilitation</span></label></div>"
                +"</div><div class='row' id='div-admittype'><div class='col-sm-6'><select class='form-control form-control-sm select2' id='admittype' name='admittype' style='width: 50%'></select></div></div>"
              + "</div>")
              ,$("<div class='alert alert-danger'>"
        + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> การประเมินผู้ป่วย </b></u></label></div>"
       +"<div class='form-group row'><div class='col-sm-1'><label><input class='ace' type='checkbox' name='typeP_1' value='1'><span class='lbl'> 3s</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_2' value='2'><span class='lbl'> เฝ้าระวังหลบหนี</span></label></div>"
       +"<div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_3' value='3'><span class='lbl'> เฝ้าระวังฆ่าตัวตาย</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_4' value='4'><span class='lbl'> เฝ้าระวังอุบัติเหตุ</span></label></div><div class='col-sm-3'><label><input class='ace' type='checkbox' name='typeP_5' value='5'><span class='lbl'> เฝ้าระวังพฤติกรรมรุนแรง</span></label></div>"
                  + "</div></div>"
              +"<input type='hidden' name='method' value='add_FR'>")
                //   ,$("<div class='row alert alert-warning'>"
                //   + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> สภาพผู้ป่วย </b></u></label></div>"
                //   +"<div class='form-group row'><div class='col-sm-3'><label><input class='ace' type='radio' name='condition' value='Y' checked><span class='lbl' checked> ประเมินได้</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='condition' value='N'><span class='lbl'> ประเมินไม่ได้</span></label></div>"
                //           +"</div><div class='row' id='condition_group'><div class='col-sm-3'><label><input class='ace' type='radio' name='condition_type' value='1'><span class='lbl'> อาการทางจิตรุนแรง</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='condition_type' value='2'><span class='lbl'> ไม่ให้ความร่วมมือ</span></label></div>"
                //           +"<div class='col-sm-3'><label><input class='ace' type='radio' name='condition_type' value='3'><span class='lbl'> หลับ/มึนงง</span></label></div></div>"
                //         + "</div>") 
        );
        
//////////////////////////// Part 1
        $("#part1").empty().append($("<div class='col-lg-12 row'><div class='col-lg-10 row'><label><h4><p>ชื่อผู้ป่วย : <b id='patient_name'></b> &nbsp;&nbsp; อายุ : <b id='age'></b> ปี &nbsp;&nbsp; HN : <b id='hn'></b> &nbsp;&nbsp; AN : <b id='an'></b> &nbsp;&nbsp; Admit ครั้งที่ : <b id='admit_no'></b></p><p>"
            + "รับวันที่ : <b id='admitdate'></b> &nbsp;&nbsp; เวลา : <b id='regtime'></b> น. &nbsp;&nbsp; จำนวนวันที่ผู้ป่วยอยู่บ้าน : <b id='lastvisit'></b> วัน</p><p>เพศ : <b id='sex'></b> &nbsp;&nbsp; สถานภาพสมรส : <b id='marry_detial'></b> &nbsp;&nbsp; วันเกิด  : <b id='birthday'></b> &nbsp;&nbsp; สัญชาติ : <b id='nation'></b></p><p>"
            + "ศาสนา : <b id='religion'></b> &nbsp;&nbsp; การศึกษา : <b id='edu'></b> &nbsp;&nbsp; อาชีพ : <b id='occ'></b></p><p>เลขประจำตัวประชาชน : <b id='cid'></b> &nbsp;&nbsp; สิทธิการรักษา : <b id='ptname'></b></p></h4></label></div><div class='block' id='pics'> </div></div><p>")
            , $("<div class='row'>"
                + "<div class='form-group col-lg-5'><label class='col-sm-3 control-label no-padding-left' for='biographer'>ชื่อผู้ให้ประวัติ </label>"
                + "<div class='col-sm-7 row'><input class='input-sm' type='text' id='biographer' name='biographer' placeholder='ชื่อผู้ให้ประวัติ'/></div> "
                + "</div>"
                + "<div class='form-group col-lg-5'><label class='col-sm-3 control-label no-padding-right' for='relative'>เกี่ยวข้องเป็น </label>"
                + "<div class='col-sm-7 row'><input class='input-sm' type='text' id='relative' name='relative'  placeholder='ความเกี่ยวข้องกับผู้ป่วย' /></div> "
                + "</div>"
                + "</div>")
            , $("<div class='row'><label class='col-sm-5 col-form-label'><b>ที่อยู่ (สามารถติดต่อได้) ของผู้ป่วย </b></label></div>")
            , $("<textarea name='patient_add' id='patient_add' class='form-control' placeholder='ที่อยู่ (สามารถติดต่อได้) ของผู้ป่วย'></textarea><br>")
            , $("<div class='row'>"
                + "<div class='form-group col-lg-5'><label class='col-sm-3 control-label no-padding-left' for='tel0'>หมายเลขโทรศัพท์ติดต่อได้</label>"
                + "<div class='col-sm-7 row'><input class='input-sm' type='text' id='tel0' name='tel0' value='' placeholder='หมายเลขโทรศัพท์' /></div> "
                + "</div>"
                + "</div>")
            , $("<div class='row'>"
                + "<div class='form-group col-lg-5'><label class='col-sm-3 control-label no-padding-left' for='tel1'>หมายเลขโทรศัพท์ 1</label>"
                + "<div class='col-sm-5 row'><input class='input-sm' type='text' id='tel1' name='tel1' value='' placeholder='หมายเลขโทรศัพท์' /></div> "
                + "</div>"
                + "<div class='form-group col-lg-4'><label class='col-sm-3 control-label no-padding-right' for='relative1'>เกี่ยวข้องเป็น (1) </label>"
                + "<div class='col-sm-8 row'><input class='input-sm' type='text' id='relative1' name='relative1'  value='' placeholder='ความเกี่ยวข้องกับผู้ป่วย' /></div> "
                + "</div>"
                + "</div>")
            , $("<div class='row'>"
                + "<div class='form-group col-lg-5'><label class='col-sm-3 control-label no-padding-left' for='tel2'>หมายเลขโทรศัพท์ 2</label>"
                + "<div class='col-sm-5 row'><input class='input-sm' type='text' id='tel2' name='tel2' placeholder='หมายเลขโทรศัพท์' /></div> "
                + "</div>"
                + "<div class='form-group col-lg-4'><label class='col-sm-3 control-label no-padding-right' for='relative2'>เกี่ยวข้องเป็น (2) </label>"
                + "<div class='col-sm-8 row'><input class='input-sm' type='text' id='relative2' name='relative2' placeholder='ความเกี่ยวข้องกับผู้ป่วย' /></div> "
                + "</div>"
                + "</div>")
            , $("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>บิดา </b> <input class='input-sm' type='text' name='fathername' id='fathername' value='' placeholder='ชื่อบิดา' required></label><div class='col-sm-2'><label><input class='ace' type='radio' name='father_chk' value='Y' checked required><span class='lbl'> มีชีวิตอยู่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='father_chk' value='N' required><span class='lbl'> เสียชีวิต</span></label></div></div>")
            , $("<div id='father' class='row'><div class='form-horizontal' role='form'>"
                + "<div class='form-group col-lg-3 row'><label class='col-sm-1 control-label no-padding-right' for='father_age'>อายุ </label>"
                + "<div class='col-sm-4'><input class='input-sm' type='text' id='father_age' name='father_age' placeholder='' /></div></div>"
                + "<div class='form-group col-lg-3 row'><label class='col-sm-1 col-lg-2 control-label no-padding-right' for='father_occup'>อาชีพ </label>"
                + "<div class='col-sm-4'><input class='input-sm' type='text' id='father_occup' name='father_occup' placeholder='' /></div></div>"
                + "</div></div>")
            , $("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>มารดา </b>  <input class='input-sm' type='text' name='mothername' id='mothername' value='' placeholder='ชื่อมารดา' required></label><div class='col-sm-2'><label><input class='ace' type='radio' name='mother_chk' value='Y' checked required><span class='lbl'> มีชีวิตอยู่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mother_chk' value='N' required><span class='lbl'> เสียชีวิต</span></label></div></div>")
            , $("<div id='mother' class='row'><div class='form-horizontal' role='form'>"
                + "<div class='form-group col-lg-3 row'><label class='col-sm-1 control-label no-padding-right' for='mother_age'>อายุ </label>"
                + "<div class='col-sm-4'><input class='input-sm' type='text' id='mother_age' name='mother_age' placeholder='' /></div></div>"
                + "<div class='form-group col-lg-3 row'><label class='col-sm-1 col-lg-2 control-label no-padding-right' for='mother_occup'>อาชีพ </label>"
                + "<div class='col-sm-4'><input class='input-sm' type='text' id='mother_occup' name='mother_occup' placeholder='' /></div></div>"
                + "</div></div>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การสมรส </b></label>"
                + "<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='0'checked required><span class='lbl'> โสด</span></label></div>"
                + "<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='1' required><span class='lbl'> หม้าย</span></label></div>"
                + "<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='2' required><span class='lbl'> หย่า/แยก</span></label></div>"
                + "<div class='col-sm-2'><label><input class='ace' type='radio' name='marry_chk' value='3' required><span class='lbl'> คู่</span></label></div></div>")
            , $("<div id='marry' class='row'>"
                + "<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                + "<div class='form-group col-lg-3 row'><label class='col-sm-5 control-label no-padding-right' for='spouse_name'>คู่สมรสชื่อ </label>"
                + "<div class='col-sm-5'><input class='input-sm' type='text' id='spouse_name' name='spouse_name' placeholder='' /></div></div>"
                + "<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='child'>จำนวนบุตร </label>"
                + "<div class='col-sm-5'><input class='input-sm' type='text' id='child' name='child' placeholder='' /></div></div>"
                + "</div></div></div> ")
        
            , $("<div class='col-lg-12 row'>"
                + "<div class='form-group col-lg-2 row'><label class='col-sm-4 control-label no-padding-left' for='earmark'>ตำหนิ </label>"
                + "<div class='col-sm-8 row'><input class='input-sm' type='text' id='earmark' name='earmark' placeholder='ตำหนิ'></div>"
                + "</div>"
                + "</div>")
            , $("<div class='col-lg-12 alert alert-warning'><div class='row col-lg-2'><input type='text' name='bw' class='form-control' value='' placeholder='น้ำหนัก (ก.ก.)' required></div> <div class='col-lg-2'> <input type='text' name='height' class='form-control' value='' placeholder='ส่วนสูง (ซ.ม.)' required></div>"
                + "<div class='col-lg-1'><input type='button' class='btn btn-sm btn-success' id='BMIcal' value='คำนวณ BMI'></div> <div class='col-lg-2'> <input type='text' name='bmi' class='form-control' placeholder='BMI' required></div><div class='col-lg-3'> <b id='BMIresult'></b></div><br>"
                + "<br><div class='row col-lg-12'><div class='col-lg-2'>Temp. : <span id='Temp'></span></div><div class='col-lg-2'>PR : <span id='PR'></span></div><div class='col-lg-2'>RR : <span id='RR'></span></div><div class='col-lg-2'>BP : <span id='BP'></span></div></div></div> ")
        
            , $("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>อาการสำคัญ (CC) </b></label></div>")
            , $("<textarea name='CC' id='CC' class='form-control' placeholder='อาการสำคัญ (CC)'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติความเจ็บป่วยปัจจุบัน (PI) </b></label></div>")
            , $("<textarea name='HPI' id='HPI' class='form-control' placeholder='ประวัติความเจ็บป่วยปัจจุบัน (PI)'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ประวัติความเจ็บป่วยทางจิตเวชในอดีต </b></label></div>")
            , $("<textarea name='pmh' id='pmh' class='form-control' placeholder='ประวัติความเจ็บป่วยทางจิตเวชในอดีต'></textarea><p>"));
 
///////////////////////////Part 2
        
        $("#part2").empty().append($("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>โรคประจำตัวหรืออาการทางกายในปัจจุบัน </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='disease_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
            + "<div class='row' id='disease_group'></div>"
            + "<div class='form-group'><textarea name='disease' id='disease' class='form-control' placeholder='รายละเอียดโรคประจำตัว'></textarea></div>"
            + "<div class='form-group row' id='heal_0'><div class='col-sm-2'><label><input class='ace' type='radio' name='heal_chk' value='N'checked required><span class='lbl'> ไม่ได้รักษา</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heal_chk' value='Y' required><span class='lbl'> อยู่ระหว่างรักษา</span></label></div></div>"
            + "<textarea name='heal' id='heal' class='form-control' placeholder='ระบุชื่อยา/สถานพยาบาล'></textarea><p>")
    
    
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประว้ติการชัก </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='whip_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name='whip' id='whip' class='form-control' placeholder='รายละเอียดประว้ติการชัก'></textarea><p>")
    
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ยาที่รับประทานประจำ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='regular_med_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name='regular_med' id='regular_med' class='form-control' placeholder='รายละเอียดยาที่รับประทานประจำ'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประวัติการแพ้ยา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='ADR_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='ADR_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='ADR_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name='ADR' id='ADR' class='form-control' placeholder='รายละเอียดประวัติการแพ้ยาะ ADR'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>แพ้อาหาร/แพ้สารอื่นๆ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='beAllergic_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name=beAllergic' id='beAllergic' class='form-control' placeholder='รายละเอียดประวัติการแพ้อาหาร/แพ้สารอื่นๆ'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='old_med_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name='old_med' id='old_med' class='form-control' placeholder='รายละเอียดประวัติการใช้/รับประทานยาก่อนมา รพจ.เลยฯ'></textarea><p>")
    
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
    
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประวัติกรรมพันธุ์โรคทางจิตเวช </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heredity_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name='heredity' id='heredity' class='form-control' placeholder='รายละเอียดประวัติกรรมพันธุ์โรคทางจิตเวช'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประวัติการฆ่าตัวตัวตาย / ทำร้ายร่างตานเอง ( 3 เดือนย้อนหลัง) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Hurt_yourself_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<div id='Hurt_yourself'><div class='checkbox'><label><input name='think' id='think' value='1' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความคิดอยากฆ่าตัวตาย</span></label></div>"
                + "<div class='checkbox'><label><input name='plan' id='plan' value='1' class='ace ace-checkbox-2' type='checkbox' /><span class='lbl'> มีความคิดและมีแผนการที่จะฆ่าตัวตาย</span></label></div>"
                + "<textarea name='plan_detial' id='plan_detial' class='form-control' placeholder='ระบุวิธีการ/ว.ด.ป.'></textarea><p>"
                + "<div class='checkbox'><label><input name='action' id='action' class='ace ace-checkbox-2' type='checkbox' value='1' /><span class='lbl'> มีความพยายามหรือลงมือกระทำการฆ่าตัวตาย</span></label></div>"
                + "<textarea name='action_detial' id='action_detial' class='form-control' placeholder='ระบุวิธีการ/ว.ด.ป.'></textarea></div><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>คดีทั่วไป </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='Y' required><span class='lbl'> มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawsuit_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>")
            , $("<textarea name='lawsuit' id='lawsuit' class='form-control' placeholder='รายละเอียดคดี'></textarea><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>บุคลิกภาพเดิม </b></label></div>")
            , $("<textarea name='personality' id='personality' class='form-control' placeholder='รายละเอียดบุคลิกภาพเดิม'></textarea><br>")
            ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><u><b> การประเมินสภาพร่างกายเบื้องต้น  </b></u></label></div>")
            , $("<div class='form-group row'><label class='col-sm-1 col-form-label' style='text-align:right;'><b>รูปร่าง </b></label> <div class='col-lg-3'><select class='form-control form-control-sm select2' id='shape' name='shape' style='width: 100%' required></select></div>"
                + "<label class='col-sm-1 col-form-label' style='text-align:right;'><b>สีผิว </b></label> <div class='col-lg-3'><select class='form-control form-control-sm select2' id='skin_color' name='skin_color' style='width: 100%' required></select></div></div>")
            , $("<p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>โรคผิวหนัง </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='scab_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='scab_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                // + "<div id='scab_group'><select class='form-control form-control-sm select2' id='scab' name='scab' style='width: 30%'></select><p><p>"
                + "<div id='scab_group'><div class='row' id='scab'></div>"
                + "<textarea name='detial_scab' id='detial_scab' class='form-control' placeholder='ลักษณะโรคผิวหนัง'></textarea></div><p>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>อาการบวม </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='swelling_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='swelling_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                + "<textarea name='swelling' id='swelling' class='form-control' placeholder='ลักษณะอาการบวม'></textarea><br>")
            , $("<div class='form-group row'>"
                + "<label class='col-sm-1 col-form-label' for='movement'><b>การเคลื่อนไหว</b></label>"
                + "<div class='col-sm-11'><input class='input-sm  col-lg-12' type='text' id='movement' name='movement' placeholder='ลักษณะการเคลื่อนไหว' /></div> "
                + "</div>")
            , $("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ความพิการ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='disabled_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='disabled_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
                + "<textarea name='disabled' id='disabled' class='form-control' placeholder='ลักษณะความพิการ'></textarea><p>"));
    
           
       
    }
}
