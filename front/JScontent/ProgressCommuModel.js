function PGCommuModal ( url = '../', recorder = null) {
$("#createModal").empty().append("<div class='modal' id='PGCommuModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><form action='' name='frmPGC' id='frmPGC' method='post' enctype='multipart/form-data'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='PGCommuModalLabel'></h4></div><div class='modal-body' id='modelFrIPD'><span id='FrIPD_detail'></span></div>"
                                    +"<div class='modal-footer'><input type='submit' name='submit1' class='btn btn-success' value='บันทึก'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
    $('#PGCommuModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
      modal.find('.modal-title').text("บันทึก Progress note (จิตเวชชุมชน)")
      // var G = new AssGaugeIPD("span#FrIPD_detail");
      // G.GetGIPD();
      var id = recipient.split(" ");

        var idvn = id[0];
        var tB_id = id[1];
        console.log(tB_id);
    var FR = new AssPGCommu("span#FrIPD_detail");
    FR.GetPGCommu();
    $("#FrIPD_detail").append("<input type='hidden' name='method' value='add_PG_commu'>");    
////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 3
        $.fn.modal.Constructor.prototype.enforceFocus = function () { };
        
        ////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 4
        //$.fn.modal.Constructor.prototype._enforceFocus = function() {};
        
        selectMash("#assess_type", "assessment_data.php?005", " เลือกสรุป ");
        $("#assess_type").change(function () {
            selectMash("#plan_type0", "plan_data.php?005"+"?"+$("#assess_type").val(), " เลือกแผน ");

        });
    
    var DP = new DatepickerThai();
    DP.GetDatepicker("#Bdate0"); 
    DP.GetDatepicker("#Edate0"); 

     
      
/////////////////////////////////

      $.getJSON(url+'back/API/FR_detail.php', { data: idvn }, function (data) { console.log(data)
        $("b#patient_name").append(data[0].fullname);
        $("b#age").append(data[0].age);
        $("#hn").append(data[0].hn);
        $("#an").append(data[0].an);
        $("#FrIPD_detail").append($("<input type='hidden' name='hn' value='" + data[0].hn + "'>")
                                            , $("<input type='hidden' name='vn' value='" + data[0].vn + "'>")
                                            , $("<input type='hidden' name='an' value='" + data[0].an + "'>")
                                            , $("<input type='hidden' name='ipd_fr_id' value='" + data[0].ipd_fr_id + "'>")
                                            , $("<input type='hidden' name='tB_id' value='" + tB_id + "'>")
            
        );
        
        if (recorder == null) {
            $("#FrIPD_detail").append($("<input type='hidden' name='user' value='" + $.cookie("user") + "'>"));
        } else {
            $.getJSON('../../back/API/userToDCcodeAPI.php', { data: recorder }, function (data) {console.log(data);
                $("#FrIPD_detail").append($("<input type='hidden' name='user' value='" + data.user + "'>"));
            });
        }
        $("#admit_no").append(data[0].admit);
        $("#admitdate").append(data[0].admitdate);
        $("#regtime").append(data[0].regtime);
        $("#lastvisit").append(data[0].lastvisit);
        $("#sex").append(data[0].sex);
        $("#marry_detial").append(data[0].marry_name);
        $("#birthday").append(data[0].birthday);
        $("#nation").append(data[0].nation_name);
        $("#religion").append(data[0].religion_name);
        $("#edu").append(data[0].edu_name);
        $("#occ").append(data[0].occ_name);
        $("#cid").append(data[0].cid);
        $("#ptname").append(data[0].ptname);
        var img = data[0].hn;
        $.getJSON(url+'back/API/check_image.php', { data1: img }, function (data) {
            if (data.cc) { 
                $("#pics").append("<img src='"+url+"back/API/show_image.php?hn=" + img+ "' width='125' />");
            } else { 
                $("#pics").append("<img src='images/person.png' width='125' />");
            }
        });
        
          

        ///////// ER Zone /////////// 
        
        //$("div#ER-frame").hide();
        $("a#SW-ER-frame").click(function () {
            $("div#ER-frame").toggle();
        });
             //////////////// เพิ่มชนิดยาเสพติด
             var i=1;
             if(i==1){ $('#minus-btn').hide(); }//else{$('#minus-btn').show()}
  $('#plus-btn').click(function () {
      i++;
          if(i<=5){
              $("#plan_item").append("<p></p><div class='row'><div class= 'col-lg-12 form-horizontal' role='form' >"
              +"<label class='col-sm-1 control-label no-padding-right' for='plan_type'> แผนที่ <b>"+i+" . </b></label>"
                  + "<div class='col-sm-5'><select class='form-control form-control-sm  select2' id='plan_type" + i + "' name='plan_type[]'></select></div>"
                  +"<label class='col-sm-1 control-label no-padding-right' for='plan_type'>เริ่มแผน</b></label>"
                  + "<div class='col-sm-2'><input type='text' class='form-control form-control-sm' id='Bdate" + i + "' name='begindate[]'></div>"
                  +"<label class='col-sm-1 control-label no-padding-right' for='plan_type'>สิ้นสุด</b></label>"
          +"<div class='col-sm-2'><input type='text' class='form-control form-control-sm' id='Edate" + i + "' name='enddate[]'></div>"
              +"</div></div>")
              //console.log("#Sdiag_"+i);
              selectMash("#plan_type" + i, "plan_data.php?005"+"?"+$("#assess_type").val(), " เลือกแผน ");
                DP.GetDatepicker("#Bdate"+i); 
              DP.GetDatepicker("#Edate" + i);
             
          }
      if (i != 1) { $('#minus-btn').show(); }
      if (i >= 5) { $('#plus-btn').prop("disabled", true); }
             });
  $('#minus-btn').click(function () {
      if (i == 2) { $('#minus-btn').hide(); }//$("#IMsubmit").hide(); }//else{$('#minus-btn').show()}
      
              //$("select#Sdiag_"+i).remove();
              $("div#plan_item >div:last").remove();
              $('#plus-btn').show();
             
      i--;
      if(i<3){ $('#plus-btn').removeAttr("disabled");}
          }); 
//////////////// สิ้นสุดเพิ่มชนิดยาเสพติด   
      
        ///////// End ER Zone ///////////
$(".select2").select2();
      });
      $("#frmPGC").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        // console.log(dataForm)
        for (var value of dataForm.values()) {
            console.log(value);
        }
        var settings = {
            type: "POST",
            url: url+"back/API/prcprogress.php",
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
            if (tB_id != 'undefined') {
                TBCommuList('#page-content');
            } else {
                TBAdmitList('#page-content');
            }
            
        })
    }));
});
}
