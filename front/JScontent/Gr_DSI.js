function GrDSI(content, id = null) {
    var title = " ผลการประเมิน DSI 300";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
        $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
        
        $.getJSON('../../back/API/detail_patientAPI.php',{data : $.cookie('hn')},function (data) {
            $("#Budget").empty().attr("align","left").append($("<div class='col-sm-12 alert alert-success'><div class='col-sm-8'><span><label class='col-form-label'>HN : <b>"+data[0].hn+"</b><br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล : <b>"+data[0].fullname+"</b>"
            +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" อายุ : "+data[0].age+" ปี  สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
            +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5
            +"</label></span></div> "
            +"<div class='col-sm-4 block'> <img src='../../back/API/show_image.php?hn="+data[0].hn+"' width='100' /></div></div><br>"))
        });
        var title1 = "ผลการประเมิน DSI 300";
        var subtitle = "รายครั้ง";
        var unit = "ปี";
        $.getJSON('../../back/API/graph_DSI.php',{data:$.cookie('hn')},function (data) { console.log(data)
            var date = data.date
            var CChartsP =  new AJAXCharts('contentGr','line',title1,unit,date,'../../back/API/DC_columnDSI.php?'+$.cookie('hn'),subtitle,['#3ec613', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
            $(CChartsP.GetCL());
        });
        $("#contentTB").html('<center><i class="fa fa-spinner fa-pulse" style="font-size:48px"></i></center><br>');
        var column1 = ["วันที่ประเมิน", "ช่วงอายุ", "GM", "FM", , "RL", "EL", "PS","ผู้ประเมิน"];
        $("#contentTB").addClass("table-responsive");
        var CTb = new createTableAjax();
        CTb.GetNewTableAjax('contentTB','../../back/API/DT_DSI300.php?'+$.cookie('hn'),'../back/API/tempSendDataAPI.php',column1
        ,null,null,null,null,false,false,null,false,null,false,null,null,null,null,null,'dynamic-table');
                   
}
