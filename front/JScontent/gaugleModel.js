function GaugleModal () {
$("#createModal").empty().append("<div class='modal' id='GaugleModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><form action='' name='frmgauge' id='frmgauge' method='post' enctype='multipart/form-data'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='hisModalLabel'></h4></div><div class='modal-body' id='modelhis'><span id='his_detail'></span></div>"
                                    +"<div class='modal-footer'><input type='submit' name='submit1' class='btn btn-success' value='บันทึก'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
    $('#GaugleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
      modal.find('.modal-title').text("การประเมินสภาพจิต")
      var G = new AssGaugeIPD("span#his_detail");
      G.GetGIPD();
      console.log(recipient)
  
      
  $("#think_group").hide();
  $("#think_group2").hide();
  $("#think_1D").hide();
  $("#think_2D").hide();
  $("#think_6D").hide();
  $("#Recognition").hide();
  $("#heal_0").hide();
  $("textarea#heal").hide();
  $("#div-admittype").hide();
  //$("#condition_group").hide();
  $("textarea#accept").hide();
  $("textarea#memoS").hide();
  $("textarea#memoL").hide();
  $("#Recog_group").hide();
  $("#Recog_1D").hide();
  $("#Recog_2D").hide();
  $("#Recog_3D").hide();
  $("#Recog_4D").hide();
  $("#Recog_5D").hide();
  $("#other_mood").hide();
  $("#action_4D").hide();
  $("#action_6D").hide();
      $("#action_10D").hide();
      
      $("input[type=checkbox][name=mood5]").click(function () {
        if ($("input[type=checkbox][name=mood5]:checked").prop("checked") == true) { $("textarea#other_mood").show(); } else { $("textarea#other_mood").hide(); }
    });
    $("input[type=checkbox][name=action_4]").click(function () {
        if ($("input[type=checkbox][name=action_4]:checked").prop("checked") == true) { $("textarea#action_4D").show(); } else { $("textarea#action_4D").hide(); }
    });
    $("input[type=checkbox][name=action_6]").click(function () {
        if ($("input[type=checkbox][name=action_6]:checked").prop("checked") == true) { $("textarea#action_6D").show(); } else { $("textarea#action_6D").hide(); }
    });
    $("input[type=checkbox][name=action_10]").click(function () {
        if ($("input[type=checkbox][name=action_10]:checked").prop("checked") == true) { $("textarea#action_10D").show(); } else { $("textarea#action_10D").hide(); }
    });
    $("input[type=radio][name=think_chk]").click(function () {
      if ($("input[type=radio][name=think_chk]:checked").val() == 'N') { $("div#think_group").show(); } else { $("div#think_group").hide(); }
  });
  $("input[type=radio][name=think_chk]").click(function () {
      if ($("input[type=radio][name=think_chk]:checked").val() == 'Y') { $("div#think_group2").show(); } else { $("div#think_group2").hide(); }
  });
  $("input[type=checkbox][name=think_1]").click(function () {
      if ($("input[type=checkbox][name=think_1]:checked").prop("checked") == true) { $("textarea#think_1D").show(); } else { $("textarea#think_1D").hide(); }
  });
  $("input[type=checkbox][name=think_2]").click(function () {
      if ($("input[type=checkbox][name=think_2]:checked").prop("checked") == true) { $("textarea#think_2D").show(); } else { $("textarea#think_2D").hide(); }
  });
  $("input[type=checkbox][name=think_6]").click(function () {
      if ($("input[type=checkbox][name=think_6]:checked").prop("checked") == true) { $("textarea#think_6D").show(); } else { $("textarea#think_6D").hide(); }
  });
  $("input[type=radio][name=Recognition_chk]").click(function () {
      if ($("input[type=radio][name=Recognition_chk]:checked").val() == 'Y') { $("#Recog_group").show(); } else { $("#Recog_group").hide(); }
  });
      $("input[type=checkbox][name=Recog_1]").click(function () {
          if ($("input[type=checkbox][name=Recog_1]:checked").prop("checked") == true) { $("#Recog_1D").show(); } else { $("#Recog_1D").hide(); }
      });
      $("input[type=checkbox][name=Recog_2]").click(function () {
          if ($("input[type=checkbox][name=Recog_2]:checked").prop("checked") == true) { $("#Recog_2D").show(); } else { $("#Recog_2D").hide(); }
      });
      $("input[type=checkbox][name=Recog_3]").click(function () {
          if ($("input[type=checkbox][name=Recog_3]:checked").prop("checked") == true) { $("#Recog_3D").show(); } else { $("#Recog_3D").hide(); }
      });
      $("input[type=checkbox][name=Recog_4]").click(function () {
          if ($("input[type=checkbox][name=Recog_4]:checked").prop("checked") == true) { $("#Recog_4D").show(); } else { $("#Recog_4D").hide(); }
      });
      $("input[type=checkbox][name=Recog_5]").click(function () {
          if ($("input[type=checkbox][name=Recog_5]:checked").prop("checked") == true) { $("#Recog_5D").show(); } else { $("#Recog_5D").hide(); }
      });
      $("input[type=radio][name=accept_chk]").click(function () {
        if ($("input[type=radio][name=accept_chk]:checked").val() == 'Y') { $("#accept").show(); } else { $("#accept").hide(); }
    });
      $("input[type=radio][name=memo_short]").click(function () {
        if ($("input[type=radio][name=memo_short]:checked").val() == 'Y') { $("#memoS").show(); } else { $("#memoS").hide(); }
    });
    $("input[type=radio][name=memo_long]").click(function () {
        if ($("input[type=radio][name=memo_long]:checked").val() == 'Y') { $("#memoL").show(); } else { $("#memoL").hide(); }
    });
        $.getJSON('../back/API/FR_Data.php', { data: recipient }, function (data) { 
            $("#Gpart2").append($("<input type='hidden' name='hn' value='" + data.hn + "'>")
                , $("<input type='hidden' name='vn' value='" + data.vn + "'>")
                , $("<input type='hidden' name='an' value='" + data.an + "'>")
                , $("<input type='hidden' name='user' value='" + $.cookie("user") + "'>"))
        });  
        $.getJSON('../back/API/mental_Data.php', { data: recipient }, function (data) { console.log(data)
            if(data.ipd_fr_id !='N'){ $("input[type=submit][name=submit1]").attr("disabled", "disabled");}
                
        }); 
        $("#frmgauge").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcInterviewAPI.php",
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
