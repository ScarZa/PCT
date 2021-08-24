function ConcludeModel () {
$("#createModal").empty().append("<div class='modal' id='ConcludeModel' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><form action='' name='frmConclude' id='frmConclude' method='post' enctype='multipart/form-data'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='hisModalLabel'></h4></div><div class='modal-body' id='modelhis'><span id='his_detail'></span></div>"
                                    +"<div class='modal-footer'><input type='submit' name='submit1' class='btn btn-success' value='บันทึก'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
    $('#ConcludeModel').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
      modal.find('.modal-title').text("แบบสรุปข้อวินิจฉัยทางการพยาบาล")
      var G = new AssConcludeIPD("span#his_detail");
      G.GetCIPD();
      console.log(recipient)
       var DP = new DatepickerThai();
       DP.GetDatepicker("#begin_date"); 
       DP.GetDatepicker("#end_date"); 
    
        $.getJSON('../back/API/FR_Data.php', { data: recipient }, function (data) { 
            $("#Cpart1").append($("<input type='hidden' name='hn' value='" + data.hn + "'>")
                , $("<input type='hidden' name='vn' value='" + data.vn + "'>")
                , $("<input type='hidden' name='an' value='" + data.an + "'>")
              , $("<input type='hidden' name='user' value='" + $.cookie("user") + "'>")
              , $("<input type='hidden' name='ipd_fr_id' value='" + recipient + "'>"))
        });  
        $("#frmConclude").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcconcludeAPI.php",
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
                modal.modal('hide');
                TBRegisIPD('#page-content');
            })
    }));
});
}
