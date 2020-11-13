function SMIVDetailModal () {
$("#createModal").empty().append("<div class='modal' id='SMIVDetailModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><form action='' name='frmgauge' id='frmgauge' method='post' enctype='multipart/form-data'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='SMIVDetailModalLabel'></h4></div><div class='modal-body' id='modelhis'><span id='his_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
    $('#SMIVDetailModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
      modal.find('.modal-title').text("รายละเอียดผู้ป่วย")
      var G = new AssSMIVD("span#his_detail");
      G.GetSMIVD();
      console.log(recipient)
  
      $.getJSON('../back/API/detail_IPDSMIVAPI.php',{data : recipient},function (data) {console.log(data);
        $("#SMIVpart1").append($("<div class='col-lg-12 row'><div class='block'> <img id='pics-panel' width='125' /></div><span>AN : "+data[0].an+"<br>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
        +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
        +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br><b style='color: red'>Admit ที่ : "+data[0].ward+"</b>"
        +"<br>แพทย์เจ้าของไข้ : "+data[0].doctor_name+"<br>ผู้บันทึกการประเมิน SMI-V : "+data[0].recorder
        +"<br>เหตุผล(ผู้ประเมิน) : "+data[0].comment+"<br>เหตุผล(ผู้ยืนยัน) : "+data[0].confirm_comment+"<br>ประเภท SMI-V : <br><b id='smiv-detial'></b></span>"
        +"</div>")
            );
            patient_photo('','../',data[0].hn,data[0].an,'#pics-panel');
        if (data[0].smi1_1 != '') { $("#smiv-detial").append("1.1 "+data[0].smi1_1 + "<br>") }
        if (data[0].smi1_2 != '') { $("#smiv-detial").append("1.2 "+data[0].smi1_2 + "<br>") }
        if (data[0].smi1_3 != '') { $("#smiv-detial").append("1.3 "+data[0].smi1_3 + "<br>") }
        if (data[0].smi1_4 != '') { $("#smiv-detial").append("1.4 "+data[0].smi1_4 + "<br>") }
        if (data[0].smi1_5 != '') { $("#smiv-detial").append("1.5 "+data[0].smi1_5 + "<br>") }
        if (data[0].smi1_6 != '') { $("#smiv-detial").append("1.6 "+data[0].smi1_6 + "<br>") }
        if (data[0].smi1_7 != '') { $("#smiv-detial").append("1.7 "+data[0].smi1_7 + "<br>") }
        if (data[0].smi1_8 != '') { $("#smiv-detial").append("1.8 "+data[0].smi1_8 + "<br>") }
        if (data[0].smi1_9 != '') { $("#smiv-detial").append("1.9 "+data[0].smi1_9 + "<br>") }
        if (data[0].smi1_10 != '') { $("#smiv-detial").append("1.10 "+data[0].smi1_10 + "<br>") }
        if (data[0].smi1_11 != '') { $("#smiv-detial").append("1.11 "+data[0].smi1_11 + "<br>") }
        if (data[0].t1_12 != '') { $("#smiv-detial").append("1.12 "+data[0].t1_12 + "<br>") }
        if (data[0].smi2_1 != '') { $("#smiv-detial").append("2.1 "+data[0].smi2_1 + "<br>") }
        if (data[0].smi2_2 != '') { $("#smiv-detial").append("2.2 "+data[0].smi2_2 + "<br>") }
        if (data[0].smi2_3 != '') { $("#smiv-detial").append("2.3 "+data[0].smi2_3 + "<br>") }
        if (data[0].smi2_4 != '') { $("#smiv-detial").append("2.4 "+data[0].smi2_4 + "<br>") }
        if (data[0].smi2_5 != '') { $("#smiv-detial").append("2.5 "+data[0].smi2_5 + "<br>") }
        if (data[0].smi2_6 != '') { $("#smiv-detial").append("2.6 "+data[0].smi2_6 + "<br>") }
        if (data[0].smi2_7 != '') { $("#smiv-detial").append("2.7 "+data[0].smi2_7 + "<br>") }
        if (data[0].smi2_8 != '') { $("#smiv-detial").append("2.8 "+data[0].smi2_8 + "<br>") }
        if (data[0].smi2_9 != '') { $("#smiv-detial").append("2.9 "+data[0].smi2_9 + "<br>") }
        if (data[0].smi2_10 != '') { $("#smiv-detial").append("2.10 "+data[0].smi2_10 + "<br>") }
        if (data[0].smi2_11 != '') { $("#smiv-detial").append("2.11 "+data[0].smi2_11 + "<br>") }
        if (data[0].t2_12 != '') { $("#smiv-detial").append("2.12 "+data[0].t2_12 + "<br>") }
        if (data[0].smi3_1 != '') { $("#smiv-detial").append("3.1 "+data[0].smi3_1 + "<br>") }
        if (data[0].smi3_2 != '') { $("#smiv-detial").append("3.2 "+data[0].smi3_2 + "<br>") }
        if (data[0].t3_3 != '') { $("#smiv-detial").append("3.3 "+data[0].t3_3 + "<br>") }
        if (data[0].smi4_1 != '') { $("#smiv-detial").append("4.1 "+data[0].smi4_1 + "<br>") }
        if (data[0].smi4_2 != '') { $("#smiv-detial").append("4.2 "+data[0].smi4_2 + "<br>") }
        if (data[0].smi4_3 != '') { $("#smiv-detial").append("4.3 "+data[0].smi4_3 + "<br>") }
        if (data[0].smi4_4 != '') { $("#smiv-detial").append("4.4 "+data[0].smi4_4 + "<br>") }
        if (data[0].smi5_1 != '') { $("#smiv-detial").append("5.1 "+data[0].smi5_1 + "<br>") }
        if (data[0].smi5_2 != '') { $("#smiv-detial").append("5.2 "+data[0].smi5_2 + "<br>") }
        if (data[0].smi5_3 != '') { $("#smiv-detial").append("5.3 "+data[0].smi5_3 + "<br>") }
        if (data[0].smi5_4 != '') { $("#smiv-detial").append("5.4 "+data[0].smi5_4 + "<br>") }
    });
});
}
