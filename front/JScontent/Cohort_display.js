function CohortDis(content, id = null) {
  $(content).empty().append("<div class='row'><div class='col-lg-12'>"
    + "<div class= 'col-lg-5' id='cohD1'><div class= 'col-lg-12' id='cohD1_1'></div><div class= 'col-lg-12' id='cohD1_2'></div></div>"
    + "<div class= 'col-lg-7' id='cohD2'><div class= 'col-lg-12' id='cohD2_1'></div><div class= 'col-lg-12' id='cohD2_2'></div></div><div class= 'col-lg-12'><center><h3>ตารางข้อมูลผู้ป่วยใน Cohort ward</h3></center></div>"
    + "<div class= 'col-lg-12' id='row2'></div></div></div> ");
  $("#cohD2_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  $("#cohD2_2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  $("#cohD1_1").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  $("#cohD1_2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
  var title1 = "ข้อมูล Cohort ward";
  var title2 = "ข้อมูลโรงพยาบาล Refer มาที่ Cohort ward";
  var title3 = "ข้อมูลยอดผู้ป่วยสะสม แยกเพศ";
  var title4 = "ข้อมูล Referin สะสมแยกโรงพยาบาล";
  var subtitle = "รายวัน";
  var subtitle3 = "แยกโรงพยาบาล";
      var unit = "คน";
      $.getJSON('../back/API/graph_DOM.php',{data1:7,data2:2021},function (data) { console.log(data)
        var date = data.day;
          var CChartsCh =  new AJAXCharts('cohD2_1','line',title1,unit,date,'../back/API/DC_columnCohort.php?07?2021',subtitle,['#3ec613', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
          $(CChartsCh.GetCL());
        
          var CChartsChr =  new AJAXCharts('cohD2_2','line',title2,unit,date,'../back/API/DC_columnCohort_refer.php?07?2021',subtitle,['#068246', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', '#CDBB06','#6F6866','#581845','#0055C1','#00B8C1','#A36300','#CD00A1','#065E82']);
          $(CChartsChr.GetCL());
      });
  $.getJSON('../back/API/graph_District.php', function (data) { console.log(data)
          var hosname = data.hosname; 
          var CChartsD = new AJAXCharts('cohD1_1', 'column', title4, unit, hosname, '../back/API/DC_columnCohort_refer_collect.php', subtitle3, ['#068246', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', '#CDBB06','#6F6866','#581845','#0055C1','#00B8C1','#A36300','#CD00A1','#065E82']);
          $(CChartsD.GetCL());
  });
  var PieCharts =  new AJAXCharts('cohD1_2','pie',title3,unit,'','../back/API/DC_pie_sex.php','',['#6c94dd', '#CD00A1']);
  $(PieCharts.GetPie());
  
      $("#row2").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
      var column1 = ["วันที่", "Admit", "D/C", "คงพยาบาล","ยอดสะสม", "รพ.เลย", "รพ.นาด้วง","รพ.เชียงคาน","รพ.ปากชม","รพ.นาแห้ว","รพ.ภูเรือ","รพ.ท่าลี่","รพ.วังสะพุง","รพ.ภูกระดึง","รพ.ภูหลวง","รพ.ผาขาว","รพ.ด่านซ้าย","รพ.เอราวัณ","รพ.หนองหิน"];
      $("#row2").addClass("table-responsive");
      var CTb = new createTableAjax();
      CTb.GetNewTableAjax('row2','../back/API/DT_cohort.php?07?2021','../back/API/tempSendDataAPI.php',column1
      ,null,null,null,null,false,false,null,false,null,false,null,null,null,null,null,null);
}
