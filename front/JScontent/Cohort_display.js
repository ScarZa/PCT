function CohortDis(content, id = null) {
  $(content).empty().append("<div class='row'><div class='col-lg-12'>"
    + "<div class= 'col-lg-6' id='cohD1'></div>"
    + "<div class= 'col-lg-6' id='cohD2'></div><div class= 'col-lg-12'><center><h3>ตารางข้อมูลผู้ป่วยใน Cohort ward</h3></center></div>"
    + "<div class= 'col-lg-12' id='row2' align='center'></div></div></div> ");
  
  
  $("#cohD1").prepend("<div class='row'><div class='col-xs-12 col-sm-12 widget-container-col'>"
    + "<div class='widget-box widget-color-blue' id='widget-box-2'>"
    + "<div class='widget-header'>"
    + "<h5 class='widget-title bigger lighter'><i class='ace-icon fa fa-bar-chart'></i> ข้อมูล Cohort ward</h5>"
    + "<div class='widget-toolbar widget-toolbar-light no-border'>"
    + "<select id='simple-colorpicker-1' class='hide'>"
    + "<option selected='' data-class='blue' value='#307ECC'>#307ECC</option>"
    + "<option data-class='blue2' value='#5090C1'>#5090C1</option>"
    + "<option data-class='blue3' value='#6379AA'>#6379AA</option>"
    + "<option data-class='green' value='#82AF6F'>#82AF6F</option>"
    + "<option data-class='green2' value='#2E8965'>#2E8965</option>"
    + "<option data-class='green3' value='#5FBC47'>#5FBC47</option>"
    + "<option data-class='red' value='#E2755F'>#E2755F</option>"
    + "<option data-class='red2' value='#E04141'>#E04141</option>"
    + "<option data-class='red3' value='#D15B47'>#D15B47</option>"
    + "<option data-class='orange' value='#FFC657'>#FFC657</option>"
    + "<option data-class='purple' value='#7E6EB0'>#7E6EB0</option>"
    + "<option data-class='pink' value='#CE6F9E'>#CE6F9E</option>"
    + "<option data-class='dark' value='#404040'>#404040</option>"
    + "<option data-class='grey' value='#848484'>#848484</option>"
    + "<option data-class='default' value='#EEE'>#EEE</option>"
    + "</select></div></div>"
    + "<div class='widget-body'><div class='widget-main no-padding'></div><div class='row'><br><div class= 'col-lg-12 infobox-container' id='cohD1_0'>"
    + "<div class= 'col-lg-12' id = 'cohD1_01' ></div> <div class='col-lg-12' id='cohD1_02'></div><div class='col-lg-12 col-md-12 col-sm-12 col-xs-12' id='cohD1_03'></div></div ></div > "
    + "</div></div></div></div>");
  
    $("#cohD1").append("<div class='row'><div class='col-xs-12 col-sm-12 widget-container-col'>"
    + "<div class='widget-box widget-color-blue' id='widget-box-2'>"
    + "<div class='widget-header'>"
    + "<h5 class='widget-title bigger lighter'><i class='ace-icon fa fa-bar-chart'></i> ข้อมูล Cohort ward ยอดสะสม</h5>"
    + "<div class='widget-toolbar widget-toolbar-light no-border'>"
    + "<select id='simple-colorpicker-2' class='hide'>"
    + "<option selected='' data-class='blue' value='#307ECC'>#307ECC</option>"
    + "<option data-class='blue2' value='#5090C1'>#5090C1</option>"
    + "<option data-class='blue3' value='#6379AA'>#6379AA</option>"
    + "<option data-class='green' value='#82AF6F'>#82AF6F</option>"
    + "<option data-class='green2' value='#2E8965'>#2E8965</option>"
    + "<option data-class='green3' value='#5FBC47'>#5FBC47</option>"
    + "<option data-class='red' value='#E2755F'>#E2755F</option>"
    + "<option data-class='red2' value='#E04141'>#E04141</option>"
    + "<option data-class='red3' value='#D15B47'>#D15B47</option>"
    + "<option data-class='orange' value='#FFC657'>#FFC657</option>"
    + "<option data-class='purple' value='#7E6EB0'>#7E6EB0</option>"
    + "<option data-class='pink' value='#CE6F9E'>#CE6F9E</option>"
    + "<option data-class='dark' value='#404040'>#404040</option>"
    + "<option data-class='grey' value='#848484'>#848484</option>"
    + "<option data-class='default' value='#EEE'>#EEE</option>"
    + "</select></div></div>"
    + "<div class='widget-body'><div class='widget-main no-padding'></div><div class='row'><div class= 'col-lg-12' id='cohD1_1'></div><div class= 'col-lg-11' id='cohD1_2' align='center'></div></div>"
    + "</div></div></div></div>");
    $("#cohD1_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    $("#cohD1_2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  
  $("#cohD2").prepend("<div class='row'><div class='col-xs-12 col-sm-12 widget-container-col'>"
    + "<div class='widget-box widget-color-blue' id='widget-box-2'>"
    + "<div class='widget-header'>"
    + "<h5 class='widget-title bigger lighter'><i class='ace-icon fa fa-bar-chart'></i> ข้อมูล Cohort ward รายวัน</h5>"
    + "<div class='widget-toolbar widget-toolbar-light no-border'>"
    + "<select id='simple-colorpicker-3' class='hide'>"
    + "<option selected='' data-class='blue' value='#307ECC'>#307ECC</option>"
    + "<option data-class='blue2' value='#5090C1'>#5090C1</option>"
    + "<option data-class='blue3' value='#6379AA'>#6379AA</option>"
    + "<option data-class='green' value='#82AF6F'>#82AF6F</option>"
    + "<option data-class='green2' value='#2E8965'>#2E8965</option>"
    + "<option data-class='green3' value='#5FBC47'>#5FBC47</option>"
    + "<option data-class='red' value='#E2755F'>#E2755F</option>"
    + "<option data-class='red2' value='#E04141'>#E04141</option>"
    + "<option data-class='red3' value='#D15B47'>#D15B47</option>"
    + "<option data-class='orange' value='#FFC657'>#FFC657</option>"
    + "<option data-class='purple' value='#7E6EB0'>#7E6EB0</option>"
    + "<option data-class='pink' value='#CE6F9E'>#CE6F9E</option>"
    + "<option data-class='dark' value='#404040'>#404040</option>"
    + "<option data-class='grey' value='#848484'>#848484</option>"
    + "<option data-class='default' value='#EEE'>#EEE</option>"
    + "</select></div></div>"
    + "<div class='widget-body'><div class='widget-main no-padding'></div><div align='center' id='sel-div'></div><div class='row'><div class= 'col-lg-12' id='cohD2_1'></div><div class= 'col-lg-12' id='cohD2_2' align='center'></div></div>"
    + "</div></div></div></div>");
    $("#cohD2_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    
  
  $("#cohD1_01").empty().append($("<div class='infobox infobox-red'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-bed'></i></div>"
    + "<div class='infobox-data'><div class='infobox-data-number'><b id='total'></b> คน</div><div class='infobox-content'>ยอดสะสมผู้ป่วย Admit</div>"
    + "</div></div>")
    , $("<div class='infobox infobox-orange'>"
      + "<div class='infobox-icon'><i class='ace-icon fa fa-child'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'><b id='dc'></b> คน</div><div class='infobox-content'>ยอดสะสมผู้ป่วย D/C</div>"
      + "</div></div>")
    , $("<div class='infobox infobox-pink infobox-large'>"
      + "<div class='infobox-icon'><i class='ace-icon fa fa-venus-mars'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'>ช. <b id='male'></b> / ญ. <b id='female'></b></div><div div class= 'infobox-content' > ยอดผู้ป่วยสะสมแยกเพศ</div> "
      + "</div></div>")
  );

  
  $("#cohD1_02").empty().append($("<div class='infobox infobox-blue'>"
  + "<div class='infobox-icon'><i class='ace-icon fa fa-bed'></i></div>"
  + "<div class='infobox-data'><div class='infobox-data-number'><b id='stay'></b> คน</div><div class='infobox-content'>ยอดผู้ป่วยคงพยาบาล</div>"
    + "</div></div>")
    , $("<div class='infobox infobox-green'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-bed'></i></div>"
    + "<div class='infobox-data'><div class='infobox-data-number'><b id='admit'></b> คน</div><div class='infobox-content'>ผู้ป่วย Admit ในวัน</div>"
    + "</div></div>")
    , $("<div class='infobox infobox-orange2'>"
      + "<div class='infobox-icon'><i class='ace-icon fa fa-child'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'><b id='dctoday'></b> คน</div><div class='infobox-content'>ผู้ป่วย D/C ในวัน</div>"
      + "</div></div>")
    , $("<div class='infobox infobox-purple'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-venus-mars'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'>ช. <b id='maletoday'></b> / ญ. <b id='femaletoday'></b></div><div div class= 'infobox-content' >ผู้ป่วยคงพยาบาลแยกเพศ</div> "
      + "</div></div>")
  );

  $("#cohD1_03").empty().append($("<button class='btn btn-lg btn-danger btn-block'>"
    + "<i class='ace-icon fa fa-bed fa-lg'></i> ผู้ป่วยรับใหม่วันนี้<br>"
    +"<span id='Pan-body' style='font-size:16px;color:yellow'></span>"
+"</button><p>")
  );

  $("#sel-div").empty().append("<div class='row'><p></p><div class='col-lg-12 offset-lg-2 col-md-10 offset-sm-2 col-sm-12 col-xs-12' style='text-align: right;'><div class='col-lg-2 offset-lg-2 col-md-2 col-sm-2 offset-md-2' style='text-align: right;'><select class='form-control select2' id='sel-month'></select></div>"
                              +"<div class= 'col-lg-2 offset-lg-2 col-md-2 col-sm-2 offset-md-2' style = 'text-align: right;'><select class='form-control select2' id='sel-year'></select></div></div></div><p>")
                 
                              var d = new Date();
                              var monthint = d.getMonth()+1;
                              
                              var year = d.getFullYear();
  selectMash("#sel-month", "month_data.php", "เลือกเดือน", monthint);
  selectMash("#sel-year", "year_data.php", "เลือกปี",year);
                   
  $.getJSON('../back/API/detail_cohort.php', function (data) {
    $("#total").empty().append(data.total);
    $("#dc").empty().append(data.dc);
    $("#male").empty().append(data.male);
    $("#female").empty().append(data.female);
    $("#stay").empty().append(data.stay);
    $("#admit").empty().append(data.admit);
    $("#dctoday").empty().append(data.dctoday);
    $("#maletoday").empty().append(data.maletoday);
    $("#femaletoday").empty().append(data.femaletoday);
    //var value = data.maletoday + "," + data.femaletoday;
    // $("span#sparkline").data("values");
    // $("span#sparkline").data("values", '10');
    
    
  });
  $.getJSON('../back/API/DT_hosTocohort.php', function (data) {
    $("span#Pan-body").empty();
    if(data==''){$("span#Pan-body").append("ยังไม่มีผู้ป่วยรับใหม่")}
    $.each(data, function (key, value) {
      $("span#Pan-body").append("Refer จาก" + value.hosname + " " + value.sex + " " + value.count + " ราย <p>");
    });
  });
//   $.getJSON('https://static.easysunday.com/covid-19/getTodayCases.json', function (data) {
// console.log(data)
//   })
  // var month = ($("#sel-month").val() < 10 ? '0' : '') + $("#sel-month").val();
  // console.log($("#sel-month").val())
  // console.log($("#sel-year").val())
  
  var title3 = "ข้อมูลยอดผู้ป่วยสะสม แยกเพศ";
  var title4 = "ข้อมูล Referin สะสมแยกโรงพยาบาล";
  
  var subtitle3 = "แยกโรงพยาบาล";
      var unit = "คน";


  AddDisCo(monthint, year)
  
  $.getJSON('../back/API/graph_District.php', function (data) { 
          var hosname = data.hosname; 
          var CChartsD = new AJAXCharts('cohD1_1', 'column', title4, unit, hosname, '../back/API/DC_columnCohort_refer_collect.php', subtitle3, ['#04c20d', '#c99138', '#6c94dd', 'purple', '#d92727', 'orange', '#CDBB06','#6F6866','#581845','#0055C1','#00B8C1','#cc6945','#CD00A1','#065E82']);
          $(CChartsD.GetCL());
  });
  var PieCharts =  new AJAXCharts('cohD1_2','pie',title3,unit,'','../back/API/DC_pie_sex.php','',['#6c94dd', '#CD00A1']);
  $(PieCharts.GetPie());
  
      
      
  $("select#sel-month").change(function () {
    if ($("select#sel-year").val() == '' || $("select#sel-year").val() == null || $("select#sel-year").val() == undefined) {
      var yearval = year;
    } else { var yearval = $("select#sel-year").val(); }
    console.log($("select#sel-month").val() + '-' + yearval);
    $("#cohD2_1").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    

    AddDisCo($("select#sel-month").val(), yearval)
    
  });
  $("select#sel-year").change(function () {
    if ($("select#sel-month").val() == '' || $("select#sel-month").val() == null || $("select#sel-month").val() == undefined) {
      var monthval = monthint;
    } else { var monthval = $("select#sel-month").val(); }
    console.log(monthval + '-' + $("select#sel-year").val());
    $("#cohD2_1").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    
    AddDisCo(monthval, $("select#sel-year").val())
    
  });
}
function AddDisCo(month, year) {
  
  var month_val = month;
  var year_val = year;
  var title1 = "ข้อมูล Cohort ward";
  var title2 = "ข้อมูลโรงพยาบาล Refer มาที่ Cohort ward";
  var subtitle = "รายวัน";
  var unit = "คน";
  $("#cohD2_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    $.getJSON('../back/API/graph_DOM.php', { data1: month_val, data2: year_val }, function (data) {
      var date = data.day;
      var CChartsCh = new AJAXCharts('cohD2_1', 'line', title1, unit, date, '../back/API/DC_columnCohort.php?' + month_val + '?' + year_val, subtitle, ['#04c20d', '#c99138', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
      $(CChartsCh.GetCL());
      
      $("#cohD2_2").empty().append("<a href='#' id='showRefer'>กดเพื่อดู ข้อมูลโรงพยบาล Refer มาที่ Cohort Ward <img src='images/click.gif' width='75'></a>");
      $("a#showRefer").click(function () {
        $("#cohD2_2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
        var CChartsChr = new AJAXCharts('cohD2_2', 'line', title2, unit, date, '../back/API/DC_columnCohort_refer.php?' + month_val + '?' + year_val, subtitle, ['#04c20d', '#c99138', '#6c94dd', 'purple', '#d92727', 'orange', '#CDBB06', '#6F6866', '#581845', '#0055C1', '#00B8C1', '#cc6945', '#CD00A1', '#065E82']);
        $(CChartsChr.GetCL());
      });
    });
        var column1 = ["วันที่", "Admit", "D/C", "คงพยาบาล","ยอดสะสม", "รพ.เลย", "รพ.นาด้วง","รพ.เชียงคาน","รพ.ปากชม","รพ.นาแห้ว","รพ.ภูเรือ","รพ.ท่าลี่","รพ.วังสะพุง","รพ.ภูกระดึง","รพ.ภูหลวง","รพ.ผาขาว","รพ.ด่านซ้าย","รพ.เอราวัณ","รพ.หนองหิน"];
      $("#row2").addClass("table-responsive");
  var CTb = new createTableAjax();
  
  $("#row2").empty().append("<a href='#' id='showTBcohort'>กดเพื่อแสดง ตารางข้อมูลผู้ป่วยใน Cohort ward <img src='images/click.gif' width='75'></a>");
  $("a#showTBcohort").click(function () {
    $("#row2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    CTb.GetNewTableAjax('row2', '../back/API/DT_cohort.php?' + month_val + '?' +year_val, '../back/API/tempSendDataAPI.php', column1
      , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
  });
}