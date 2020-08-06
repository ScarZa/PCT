var AssConcludeIPD = function(content){
    this.content = content;
    this.GetCIPD = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-info' id='Cpart1'></div>"));

      $("#Cpart1").empty().append($("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>สรุปข้อวินิจฉัยทางการพยาบาล  </b></label></div>")
        , $("<div class='row'><div class='col-sm-6'><label><input class='ace' type='text' name='begin_date' id='begin_date' required><span class='lbl'> วันเริ่มต้น</span></label></div>"
          +"<div class= 'col-sm-6'> <label><input class='ace' type='text' name='end_date' id='end_date' required><span class='lbl'> วันสิ้นสุด</span></label></div></div>"
                +"<textarea name='topic' id='topic' class='form-control' placeholder='ระบุรายละเอียดสรุปข้อวินิจฉัยทางการพยาบาล' required></textarea>")
            , $("<input type='hidden' name='method' value='add_CC'>")
            );
    }
}
