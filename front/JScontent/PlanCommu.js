function PlanCommu ( content, id = null, url = '../', recorder = null) {
  var title = " งานผู้ป่วยใน (IPD)";
  var subtitle = "แบบสัมภาษณ์ ";
  //$("li#page").empty().text(title)
  $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
  $("span#head-subtitle").empty().append(subtitle);
  $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
  $("#prev").hide();
  $("#this-page").text(title);
  $("li").removeClass("active");
  $("#submenu1").parent().find("li:eq(0)").addClass("active")
  var PL = new PageLayout(content);
  PL.GetPL();
  $("h5.widget-title").empty().prepend("บันทึกแผนการรักษา (จิตเวชชุมชน)");
  $("#Budget").remove();
  $("#contentGr").empty().append($("<form action='' name='frmMR' id='frmMR' method='post' enctype='multipart/form-data'>"
  + "<div class='row'><div class='col-xs-12' id='cgi-post'>"
  + "<div class='card border-success'>"
  + "<div class='card-header col-xs-12'><label class='col-form-label'><b>ข้อมูลคนไข้</b></label></div>"
  + "<div class='card-body'>"
  + "<div id='P-data' class='col-xs-12'></div>"
  + "</div ></div ></div > "
  + "</div></form>"));
   
////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 3
        $.fn.modal.Constructor.prototype.enforceFocus = function () { };
        
        ////////////// แก้ select2 ไม่ทำงานใน modal Bootstrap 4
        //$.fn.modal.Constructor.prototype._enforceFocus = function() {};
 
      
/////////////////////////////////
  $.getJSON(url+'back/API/detail_PCommu_patientAPI.php', { data: id}, function (data) {
    
    $("#P-data").append($("<div class='col-xs-12 row'><div><div class='block'><img src='"+url+"back/API/show_image.php?hn=" + data[0].hn + "' width='150' /></div>"
      + "<span><label class='col-form-label'>HN : " + data[0].hn + "<br>เลขบัตรประชาชน : " + data[0].cid + "<br>ชื่อ-สกุล :" + data[0].fullname
      + "<br>ที่อยู่ : " + data[0].informaddr + "<br>วันเกิด : " + data[0].birthday + " สถานะภาพ : " + data[0].mrname + "<br>การวินิจฉัย : " + data[0].pdx + " " + data[0].dx0
      + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5 + "</label></span></div> "
      + "</div><br>")
    );

    addTBplanpop(id,url,recorder)

  });
}
function addTBplanpop(value,url,recorder) {

    var column1 = ["ลำดับ","รายละเอียดแผน","วันที่เริ่ม","วันที่สิ้นสุด","สถานะ","บันทึกผล"];
$("#contentTB").addClass("table-responsive");
var PTb = new createTableAjax();
$("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i><br> <h3>กำลังดำเนินการ.....</h3></center><br>');
PTb.GetNewTableAjax('contentTB', url+'back/API/DT_planCommu.php?' +value, url+'back/API/tempSendDataAPI.php', column1
  , null, null, null, null, false, false, null, true, 'recPCommuModal?'+recorder, false, null, null, null, null, null, null);
  
}
