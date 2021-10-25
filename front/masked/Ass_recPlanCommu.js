var AssRecPGCommu = function(content){
    this.content = content;
    this.GetRecPGCommu = function () {
        $(this.content).empty().append($("<div class='alert alert-info'>"
        +"<div class='form-group row'><label class='col-sm-12 col-form-label'>แผน : <u><b id='plan-name'> </b></u></label></div>"
        +"<div class='row'><label class='col-sm-4 col-form-label'><b>รายละเอียดผลการปฏิบัติ </b></label></div>"
        + "<textarea name='plan_result' id='plan_result' class='form-control' placeholder='บรรยายรายละเอียดผลการปฏิบัติ'></textarea><p>"
        +"<div class='row'><label class='col-sm-4 col-form-label'><b>แนบเอกสาร </b></label></div>"
        + "<input type='file' name='doc_result' id='doc_result' class='form-control' placeholder=''><p>"
      + "</div>")
        );
              
    }
}
