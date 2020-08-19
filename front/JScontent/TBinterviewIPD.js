function TBInterviewIPD(content, id = null) {

    var title = " งานผู้ป่วยใน (IPD)";
    var subtitle = "ตารางผู้ป่วยใน (IPD) ";
    //$("li#page").empty().text(title)
    $("b#head-title").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("span#head-subtitle").empty().append(subtitle);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    $("#prev").hide();
    $("#this-page").text(title);
    $("li").removeClass("active");
    $("#submenu1-1").parent().find("li:eq(0)").addClass("active")
        var PL = new PageLayout(content);
        PL.GetPL();
    //$("#contentTB").empty().append("แบบสัมภาษณ์");
    $("#Budget").append($("<p><div class=''><div class='col-lg-2 offset-lg-2'><select class='form-control' id='sel-ward'></select></div></div></p > <br>"));
    selectMash("#sel-ward","ward_data.php","เลือก ward");
    var column1 = ["AN", "HN", "วันที่ admit", "หมายเลบัตรประชาชน", "ชื่อ - นามสกุล", "ที่อยู่", "สัมภาษณ์"];
    $("#contentTB").addClass("table-responsive");
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('contentTB','../back/API/DT_AN.php?','../back/API/tempSendDataAPI.php',column1
    , null, null, null, null, false, true, 'InterviewIPD', false, null, false, null, null, null, null, null, 'dynamic-table');
     
     
    // $.getJSON('../back/API/DT_AN.php', function (data) { 
    //     var PnL = new PanelLayout("#panel-add",data.length);
    //     PnL.GetPnL();
    //     $.each(data, function (i, item) { 
    //         $("#pics-panel"+i).attr("src",'../back/API/show_image.php?hn='+item.hn)
    //         $("#patient-name"+i).append(" HN : "+item.hn+"<br>AN : "+item.an)
    //         $("#head-panel" + i).append("<b>" + item.fullname + "</b><br>วันที่ admit : " + item.regdate)
    //         $("#menu-panel" + i).append("<li><a data-toggle='tab' href='#' id='menu1_"+i+"'>แรกรับ</a></li></ul>")
    //        $("#body-panel"+i).append("<div class='alert alert-info'>เลขบัตรประชาชน : "+item.cid+"</div>"
    //                                 //+"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
    //                                 +"<div class='alert alert-success'>ที่อยู่ : "+item.informaddr+"</div>"
    //                                 //+"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
    //         )
    //         $("a#menu1_"+i).click(function () {
    //             InterviewIPD("#page-content",{ data:item.an });
    //         })
    //     });
    // });

    $("select#sel-ward").change(function () { 
        
        CTb.GetNewTableAjax('contentTB','../back/API/DT_AN.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
            , null, null, null, null, false, true, 'InterviewIPD', false, null, false, null, null, null, null, null, 'dynamic-table');
        
            // $.getJSON('../back/API/DT_AN.php',{data1:$("#sel-ward").val()}, function (data) { 
            //     var PnL = new PanelLayout("#panel-add",data.length);
            //     PnL.GetPnL();
            //     $.each(data, function (i, item) { 
            //         $("#pics-panel"+i).attr("src",'../back/API/show_image.php?hn='+item.hn)
            //         $("#patient-name"+i).append(" HN : "+item.hn+"<br>AN : "+item.an)
            //         $("#head-panel" + i).append("<b>" + item.fullname + "</b><br>วันที่ admit : " + item.regdate)
            //         $("#menu-panel" + i).append("<li><a data-toggle='tab' href='#' id='menu1_"+i+"'>แรกรับ</a></li></ul>")
            //        $("#body-panel"+i).append("<div class='alert alert-info'>เลขบัตรประชาชน : "+item.cid+"</div>"
            //                                 //+"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
            //                                 +"<div class='alert alert-success'>ที่อยู่ : "+item.informaddr+"</div>"
            //                                 //+"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
            //         )
            //         $("a#menu1_"+i).click(function () {
            //             InterviewIPD("#page-content", { data:item.an });
            //         })
            //     });
            // });
    });
    // $("input#search-patient").keyup(function () {
    //     if($("#search-patient").val() !=''){
    //     $.getJSON('../back/API/DT_AN_search.php',{data1:$("#search-patient").val()}, function (data) { 
    //         var PnL = new PanelLayout("#panel-add",data.length);
    //         PnL.GetPnL();
    //         $.each(data, function (i, item) { 
    //             $("#pics-panel"+i).attr("src",'../back/API/show_image.php?hn='+item.hn)
    //             $("#patient-name"+i).append(" HN : "+item.hn+"<br>AN : "+item.an)
    //             $("#head-panel" + i).append("<b>" + item.fullname + "</b><br>วันที่ admit : " + item.regdate)
    //             $("#menu-panel" + i).append("<li><a data-toggle='tab' href='#' id='menu1_"+i+"'>แรกรับ</a></li></ul>")
    //            $("#body-panel"+i).append("<div class='alert alert-info'>เลขบัตรประชาชน : "+item.cid+"</div>"
    //                                     //+"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
    //                                     +"<div class='alert alert-success'>ที่อยู่ : "+item.informaddr+"</div>"
    //                                     //+"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
    //             )
    //             $("a#menu1_"+i).click(function () {
    //                 InterviewIPD("#page-content",{ data:item.an });
    //             })
    //         });
    //     });
    // }
    // });
    $("#contentGr").append("<div class='col-lg-12'><div class='row' id='panel-add'></div></div>")
    
    // for (var i = 0; i < 8; i++) {
    //     $("#patient-name"+i).append(" นายทดสอบ"+i+" ทดสอบ")
    //      $("#head-panel"+i).append("ข้อมูลในส่วน head")
    //     $("#body-panel"+i).append("<div class='alert alert-info'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
    // +"<div class='alert alert-danger'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
    // +"<div class='alert alert-success'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>"
    // +"<div class='alert'>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>")
    // }
    // $("#widget-box-0").addClass("widget-color-pink")
    // $("#widget-box-1").addClass("widget-color-red")
}
