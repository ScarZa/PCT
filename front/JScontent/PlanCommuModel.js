function PCommuModal ( url = '../', recorder = null) {
$("#createModal").empty().append("<div class='modal' id='PCommuModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><form action='' name='frmPGC' id='frmPGC' method='post' enctype='multipart/form-data'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='PCommuModalLabel'></h4></div><div class='modal-body' id='modelFrIPD'><span id='FrIPD_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
    $('#PCommuModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
      modal.find('.modal-title').text("แผนรักษา (จิตเวชชุมชน)")
      // var G = new AssGaugeIPD("span#FrIPD_detail");
      // G.GetGIPD();
      var id = recipient

        var idvn = id;
        var tB_id = id;

    var FR = new AssPGCommu("span#FrIPD_detail");
    FR.GetPGCommu();
    // $("#FrIPD_detail").append("<input type='hidden' name='method' value='add_PG_commu'>");    
////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 3
        $.fn.modal.Constructor.prototype.enforceFocus = function () { };
        
        ////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 4
        //$.fn.modal.Constructor.prototype._enforceFocus = function() {};
 
      
/////////////////////////////////
        addTBplan(recipient);

    //   $("#frmPGC").on('submit', (function (e) {
    //     e.preventDefault();
    //     var dataForm = new FormData(this);
    //     // console.log(dataForm)
    //     for (var value of dataForm.values()) {
    //         console.log(value);
    //     }
    //     var settings = {
    //         type: "POST",
    //         url: url+"back/API/prcprogress.php",
    //         async: true,
    //         crossDomain: true,
    //         data: dataForm,
    //         contentType: false,
    //         cache: false,
    //         processData: false
    //     }
    //     console.log(settings)
    //     $.ajax(settings).done(function (result) {
    //         alert(result.messege);
    //         modal.modal('hide');
    //         TBCommuList('#page-content');
    //     })
    // }));
});
}
function addTBplan(value) {

    var column1 = ["ลำดับ","รายละเอียดแผน","วันที่เริ่ม","วันที่สิ้นสุด","วันบันทึกผล","ผล","เอกสารแนบ","เอกสาร"];
$("#FrIPD_detail").addClass("table-responsive");
var PTb = new createTableAjax();
$("#FrIPD_detail").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
PTb.GetNewTableAjax('FrIPD_detail', '../back/API/DT_planCommuTotal.php?' +value, '../back/API/tempSendDataAPI.php', column1
, null, null, null, null, false, false, null, false, null, true, '../back/API/planCommuDocs.php', null, null, null, null, null);
}
