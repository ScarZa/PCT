var AssPGCommu = function(content){
    this.content = content;
    this.GetPGCommu = function () {
        $(this.content).empty().append($("<div class='alert alert-success' id='part1'></div>")
        ,$("<div class='alert alert-info'>"
        +"<div class='form-group row'><label class='col-sm-5 col-form-label'><a id='SW-ER-frame'><u><b> Progress note </b></u></a></label></div>"
        +"<div id='ER-frame'>"
        +"<div class='row'><label class='col-sm-4 col-form-label'><b>Subject data </b></label></div>"
        + "<textarea name='subj' id='subj' class='form-control' placeholder='Subject data'></textarea><p>"
        +"<div class='row'><label class='col-sm-4 col-form-label'><b>object data </b></label></div>"
        + "<textarea name='obj' id='obj' class='form-control' placeholder='object data'></textarea><p>"
        +"<div class='row'><label class='col-sm-4 col-form-label'><b>Assessment </b></label></div>"
        +"<div class='row'><div class='row'>"
        +"<div class='col-lg-12 form-horizontal' role='form' id='assess'><label class='col-sm-1 control-label no-padding-right' for='alcohol_kind'>สรุป </label>"
        +"<div class='col-lg-11'><select class='form-control form-control-sm select2' id='assess_type' name='assess_type'></select></div></div>"
        + "</div></div>"
        +"<div class='row'><label class='col-sm-12 col-form-label'><b>Plan</b></label></div>"    
        +"<div class='' id='plan-group'>&nbsp;<input type='button' class='btn btn-success btn-sm' id='plus-btn' value='+ เพิ่มแผน'>  &nbsp;<input type='button' class='btn btn-danger btn-sm' id='minus-btn' value='- ลบแผน'><p>"
        + "<div id='' class='row'><div class= 'col-lg-12 form-horizontal' role='form' ><div id='' class='row'>"
        +"<label class='col-sm-1 control-label no-padding-right' for='plan_type'> แผนที่ <b>1 . </b></label>"
          + "<div class='col-sm-5'><select class='form-control form-control-sm  select2' id='plan_type0' name='plan_type[]'></select></div>"
          +"<label class='col-sm-1 control-label no-padding-right' for='plan_type'>เริ่มแผน</b></label>"
          + "<div class='col-sm-2'><input type='text' class='form-control form-control-sm' id='Bdate0' name='begindate[]'></div>"
          +"<label class='col-sm-1 control-label no-padding-right' for='plan_type'>สิ้นสุด</b></label>"
          +"<div class='col-sm-2'><input type='text' class='form-control form-control-sm' id='Edate0' name='enddate[]'></div>"
        +"</div></div>"
        +"</div><div class='row' id='plan_item'></div>"
        +"<div id='nc_update'></div></div>"
        // +"<p class='alert alert-success'>"
        //     +"สามารถใส่เนื้อหาในนี้ได้</p>"
      + "</div></div>")
        );
        
//////////////////////////// Part 1
      $("#part1").empty().append($("<div class=''><div class='block' id='pics'></div><span class='row'><h5><p>ชื่อผู้ป่วย : <b id='patient_name'></b> &nbsp;&nbsp; อายุ : <b id='age'></b> ปี &nbsp;&nbsp; HN : <b id='hn'></b> &nbsp;&nbsp; AN : <b id='an'></b> &nbsp;&nbsp; Admit ครั้งที่ : <b id='admit_no'></b></p>"
        + "<p>รับวันที่ : <b id='admitdate'></b> &nbsp;&nbsp; เวลา : <b id='regtime'></b> น. &nbsp;&nbsp; จำนวนวันที่ผู้ป่วยอยู่บ้าน : <b id='lastvisit'></b> วัน</p><p>เพศ : <b id='sex'></b> &nbsp;&nbsp; สถานภาพสมรส : <b id='marry_detial'></b> &nbsp;&nbsp; วันเกิด  : <b id='birthday'></b> &nbsp;&nbsp; สัญชาติ : <b id='nation'></b></p>"
        + "<p>ศาสนา : <b id='religion'></b> &nbsp;&nbsp; การศึกษา : <b id='edu'></b> &nbsp;&nbsp; อาชีพ : <b id='occ'></b></p>เลขประจำตัวประชาชน : <b id='cid'></b> &nbsp;&nbsp; สิทธิการรักษา : <b id='ptname'></b></h5></span></div>")
        //, $("<div class='hr'></div>")
      );

    
           
       
    }
}
