function recPCommuModal ( recorder = null,url = '../../') {
$("#createModal").empty().append("<div class='modal' id='recPCommuModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><form action='' name='frmRPC' id='frmRPC' method='post' enctype='multipart/form-data'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='recPCommuModalLabel'></h4></div><div class='modal-body' id='modelFrIPD'><span id='FrIPD_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='submit' class='btn btn-success'>บันทึก</button> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#recPCommuModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text("บันทึกแผนรักษา (จิตเวชชุมชน)")
    // var G = new AssGaugeIPD("span#FrIPD_detail");
    // G.GetGIPD();
    var id = recipient;
    console.log(id)

    var idvn = id;
    var tB_id = id;

    var FR = new AssRecPGCommu("span#FrIPD_detail");
    FR.GetRecPGCommu();
    $("#FrIPD_detail").append($("<input type='hidden' name='method' value='add_plan_result'>")
      , $("<input type='hidden' name='plan_cid' value='"+id+"'>")
      , $("<input type='hidden' name='recorder' value='"+recorder+"'>")
    );

    ////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 3
    $.fn.modal.Constructor.prototype.enforceFocus = function () { };
        
    ////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 4
    //$.fn.modal.Constructor.prototype._enforceFocus = function() {};
 
    $.getJSON(url + 'back/API/detail_plan.php', { data: id }, function (data) {
      
      $("#plan-name").text(data.plan_name)  

      $("#frmRPC").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        // console.log(dataForm)
        for (var value of dataForm.values()) {
          console.log(value);
        }
        var settings = {
          type: "POST",
          url: url + "back/API/prcprogress.php",
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
          window.location.reload();
          
        })
      }));
    });
  });
}
