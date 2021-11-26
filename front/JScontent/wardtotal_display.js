function WardTotalDis(content, id = null) {
  $(content).empty().append("<div class='row'><div class='col-lg-12'>"
  + "<div class= 'col-lg-12' id='cohD1'></div>"
  + "<div class= 'col-lg-12'>เลือกเดือน/ปี</div>"
  + "<div class='col-lg-12'><div align='center' id='sel-div'></div></div>"
  + "<div class= 'col-lg-12' id='cohD2'></div><div class= 'col-lg-12'><center><h3>ตารางข้อมูลผู้ป่วยใน <b id='wardnameTB'></b></h3></center></div>"
  //+ "<div class= 'col-lg-12'><a class='btn btn-success' download='totalIPD.xls' href='#' onClick='return ExcellentExport.excel(this, '', 'totalIPD');'>Export to Excel</a></div>"
  + "<div class= 'col-lg-12' id='row2'></div></div></div>");
  
  
  $("#cohD1").prepend("<div class='row'><div class='col-xs-12 col-sm-12 widget-container-col'>"
    + "<div class='widget-box widget-color-blue' id='widget-box-2'>"
    + "<div class='widget-header'>"
    + "<h5 class='widget-title bigger lighter'><i class='ace-icon fa fa-bar-chart'></i> ข้อมูล <b id='wardname01'></b></h5>"
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
    + "<div class='widget-body'><div class='widget-main no-padding'></div><div class='row'><div align='center'><u><h3>ยอดผู้รับบริการผู้ป่วยใน ประจำวันที่ <span id='today'></span></h3></u></div><div class= 'col-lg-12' id='cohD1_0'><div class='col-lg-12 infobox-container' id='cohD1_01'></div><div class='col-lg-12' align='center'><u><h3>ยอดคงพยาบาลแยกตึก</h3></u></div><br><div class='col-lg-12 infobox-container' id='cohD1_02'></div><br></div></div>"
    + "</div></div></div></div>");
  
    // $("#cohD1").append("<div class='row'><div class='col-xs-12 col-sm-12 widget-container-col'>"
    // + "<div class='widget-box widget-color-blue' id='widget-box-2'>"
    // + "<div class='widget-header'>"
    // + "<h5 class='widget-title bigger lighter'><i class='ace-icon fa fa-bar-chart'></i> ข้อมูล Cohort ward ยอดสะสม</h5>"
    // + "<div class='widget-toolbar widget-toolbar-light no-border'>"
    // + "<select id='simple-colorpicker-2' class='hide'>"
    // + "<option selected='' data-class='blue' value='#307ECC'>#307ECC</option>"
    // + "<option data-class='blue2' value='#5090C1'>#5090C1</option>"
    // + "<option data-class='blue3' value='#6379AA'>#6379AA</option>"
    // + "<option data-class='green' value='#82AF6F'>#82AF6F</option>"
    // + "<option data-class='green2' value='#2E8965'>#2E8965</option>"
    // + "<option data-class='green3' value='#5FBC47'>#5FBC47</option>"
    // + "<option data-class='red' value='#E2755F'>#E2755F</option>"
    // + "<option data-class='red2' value='#E04141'>#E04141</option>"
    // + "<option data-class='red3' value='#D15B47'>#D15B47</option>"
    // + "<option data-class='orange' value='#FFC657'>#FFC657</option>"
    // + "<option data-class='purple' value='#7E6EB0'>#7E6EB0</option>"
    // + "<option data-class='pink' value='#CE6F9E'>#CE6F9E</option>"
    // + "<option data-class='dark' value='#404040'>#404040</option>"
    // + "<option data-class='grey' value='#848484'>#848484</option>"
    // + "<option data-class='default' value='#EEE'>#EEE</option>"
    // + "</select></div></div>"
    // + "<div class='widget-body'><div class='widget-main no-padding'></div><div class='row'><div class= 'col-lg-12' id='cohD1_1'></div><div class= 'col-lg-12' id='cohD1_2'></div></div>"
    // + "</div></div></div></div>");
    //$("#cohD1_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    //$("#cohD1_2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  
  $("#cohD2").prepend("<div class='row'><div class='col-xs-12 col-sm-12 widget-container-col'>"
    + "<div class='widget-box widget-color-blue' id='widget-box-2'>"
    + "<div class='widget-header'>"
    + "<h5 class='widget-title bigger lighter'><i class='ace-icon fa fa-bar-chart'></i> ข้อมูล <b id='wardname02'></b> รายวัน</h5>"
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
    + "<div class='widget-body'><div class='widget-main no-padding'></div><div class='row'><div class= 'col-lg-6' id='cohD2_1'></div>"
    +"<div class='col-lg-6' id='cohD2_2'></div>"
    + "</div></div></div></div>");
    $("#cohD2_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    $("#cohD2_2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  
  $("#cohD1_01").empty().append($("<div class='infobox infobox-red'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-bed'></i></div>"
    + "<div class='infobox-data'><div class='infobox-data-number'><b id='stay'></b> คน</div><div class='infobox-content'>ยอดคงพยาบาล</div>"
    + "</div></div>")
    , $("<div class='infobox infobox-orange'>"
      + "<div class='infobox-icon'><i class='ace-icon fa fa-bed'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'><b id='admit'></b> คน</div><div class='infobox-content'>ยอด Admit</div>"
      + "</div></div>")
    , $("<div class='infobox infobox-green infobox-large'>"
      + "<div class='infobox-icon'><i class='ace-icon fa fa-child'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'><b id='dchdate'></b> คน</div><div div class= 'infobox-content' > ยอดผู้ป่วย D/C</div> "
      + "</div></div>")
  );

  
  $("#cohD1_02").empty().append($("<div class='infobox infobox-green2'>"
  + "<div class='infobox-icon'><i class='ace-icon fa fa-mars'></i></div>"
  + "<div class='infobox-data'><div class='infobox-data-number'><b id='m1'></b> คน</div><div class='infobox-content'>ตึกพุทธรักษา</div>"
    + "</div></div>")
    ,$("<div class='infobox infobox-blue2'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-mars'></i></div>"
    + "<div class='infobox-data'><div class='infobox-data-number'><b id='m2'></b> คน</div><div class='infobox-content'>ตึกจำปาทอง</div>"
      + "</div></div>")
    , $("<div class='infobox infobox-blue'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-mars'></i></div>"
    + "<div class='infobox-data'><div class='infobox-data-number'><b id='m3'></b> คน</div><div class='infobox-content'>ตึกราชาวดี</div>"
    + "</div></div>")
    , $("<div class='infobox infobox-pink'>"
      + "<div class='infobox-icon'><i class='ace-icon fa fa-venus'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'><b id='w1'></b> คน</div><div class='infobox-content'>ตึกลีลาวดี</div>"
      + "</div></div>")
    , $("<div class='infobox infobox-purple'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-venus-mars'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'>ช. <b id='s1m'></b> / ญ. <b id='s1w'></b></div><div div class= 'infobox-content' >ตึกฉัตรชบา</div> "
      + "</div></div>")
      , $("<div class='infobox infobox-orange'>"
    + "<div class='infobox-icon'><i class='ace-icon fa fa-venus-mars'></i></div>"
      + "<div class='infobox-data'><div class='infobox-data-number'>ช. <b id='c1m'></b> / ญ. <b id='c1w'></b></div><div div class= 'infobox-content' >ตึก Cohort ward</div> "
      + "</div></div>")
  );

  $("#sel-div").empty().append("<div class='row'>"
  +"<div class='col-lg-1 offset-lg-2 col-md-2 col-sm-2 offset-md-2' style='text-align: right;'><select class='form-control select2' id='sel-month'></select></div>"
  +"<div class='col-lg-1 offset-lg-2 col-md-2 col-sm-2 offset-md-2' style = 'text-align: right;'><select class='form-control select2' id='sel-year'></select></div></div><p>")
                 
                              var d = new Date();
                              var monthint = d.getMonth()+1;
                              var year = d.getFullYear();
                              var today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
                              
  $("#today").empty().append(getThaiDate2(today));
  
  selectMash("#sel-month", "month_data.php", "เลือกเดือน", monthint);
  selectMash("#sel-year", "year_data.php", "เลือกปี",year);
                   
//   $.getJSON('https://static.easysunday.com/covid-19/getTodayCases.json', function (data) {
// console.log(data)
//   })
  // var month = ($("#sel-month").val() < 10 ? '0' : '') + $("#sel-month").val();
  // console.log($("#sel-month").val())
  // console.log($("#sel-year").val())
  
  AddTotalDis(monthint, year);
 
  var monthval;
  var yearval;
    
  $("select#sel-month").change(function () {
    monthval = $("select#sel-month").val();
    if (($("select#sel-year").val() == '' || $("select#sel-year").val() == null || $("select#sel-year").val() == undefined)&&($("select#sel-ward").val() == '' || $("select#sel-ward").val() == null || $("select#sel-ward").val() == undefined)) {
      yearval = year;
    } else if (($("select#sel-year").val() == '' || $("select#sel-year").val() == null || $("select#sel-year").val() == undefined) && $("select#sel-ward").val() != '') {
      yearval = year;
    }else if ($("select#sel-year").val() != '' && ($("select#sel-ward").val() == '' || $("select#sel-ward").val() == null || $("select#sel-ward").val() == undefined)) {
      yearval = $("select#sel-year").val();
    } else { yearval = $("select#sel-year").val();}
    
    $("#cohD2_1").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    $("#cohD2_2").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    
    AddTotalDis(monthval, yearval);
  });

  $("select#sel-year").change(function () {
    yearval = $("select#sel-year").val();
    if (($("select#sel-month").val() == '' || $("select#sel-month").val() == null || $("select#sel-month").val() == undefined)&&($("select#sel-ward").val() == '' || $("select#sel-ward").val() == null || $("select#sel-ward").val() == undefined)) {
      monthval = monthint; 
    } else if (($("select#sel-month").val() == '' || $("select#sel-month").val() == null || $("select#sel-month").val() == undefined) && $("select#sel-ward").val() != '') {
      monthval = monthint; wradval = $("select#sel-ward").val();
    }else if ($("select#sel-month").val() != '' && ($("select#sel-ward").val() == '' || $("select#sel-ward").val() == null || $("select#sel-ward").val() == undefined)) {
      monthval = $("select#sel-month").val(); 
    }else { monthval = $("select#sel-month").val(); }
    
    $("#cohD2_1").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    $("#cohD2_2").empty().html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
    
    AddTotalDis(monthval, yearval);
  });
}

function AddTotalDis(month, year) {
  $("#total,#dc,#male,#female,#stay,#admit,#dctoday,#maletoday,#femaletoday,#wardnameTB,#wardname01,#wardname02").empty();
  // if(ward==null){ward=''}else{ward=ward}
  
  var month_val = month;
  var year_val = year;
  
  $.getJSON('../back/API/detail_totalward.php', { data: month_val, data2: year_val }, function (data) { 
    
    $("#stay").empty().append(data.stay);
    $("#admit").empty().append(data.admit);
    $("#dchdate").empty().append(data.dchdate);
    $("#m1").empty().append(data.m1);
    $("#m2").empty().append(data.m2);
    $("#m3").empty().append(data.m3);
    $("#w1").empty().append(data.w1);
    $("#s1m").empty().append(data.s1m);
    $("#s1w").empty().append(data.s1w);
    $("#c1m").empty().append(data.c1m);
    $("#c1w").empty().append(data.c1w);
    //$("#femaletoday").empty().append(data.femaletoday);
    
  });
    var title1 = "ข้อมูลผู้ป่วยใน ward";
    var title2 = "ข้อมูลผู้ป่วยในคงพยาบาล แยกward";
    var title3 = "ข้อมูลยอดผู้ป่วยสะสม แยกเพศ";
    var title4 = "ข้อมูล Referin สะสมแยกโรงพยาบาล";
    var subtitle = "รายวัน";
    var subtitle3 = "แยกโรงพยาบาล";
      var unit = "คน";
    $.getJSON('../back/API/graph_DOM.php',{data1:month_val,data2:year_val},function (data) { 
      var date = data.day;
        var CChartsCh =  new AJAXCharts('cohD2_1','line',title1,unit,date,'../back/API/DC_columnTotalWard.php?'+month_val+'?'+year_val,subtitle,['#d92727', '#c99138','#04c20d', '#6c94dd', 'purple',  'orange', 'yellow']);
        $(CChartsCh.GetCL());
      
          });
          $.getJSON('../back/API/graph_DOM.php',{data1:month_val,data2:year_val},function (data) { 
            var date = data.day;
              var CChartsCh2 =  new AJAXCharts('cohD2_2','line',title2,unit,date,'../back/API/DC_columnWard.php?'+month_val+'?'+year_val,subtitle,['#026b43', '#0e4fc7','#1894c9', '#c369e0', '#5f2eb3',  '#c99138', 'yellow']);
              $(CChartsCh2.GetCL());
            
                });
          var column1 = ["วันที่", "ยอดคงพยาบาล", "ยอด Admit", "ยอดผู้ป่วย D/C","ตึกพุทธรักษา", "ตึกจำปาทอง","ตึกราชาวดี","ตึกลีลาวดี","ตึกฉัตรชบา","ตึก Cohort ward"];
          $("#row2").addClass("table-responsive");
      var CTb = new createTableAjax();
        $("#row2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
        CTb.GetNewTableAjax('row2', '../back/API/DT_totalward.php?' + month_val + '?' +year_val, '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null, null);
}