function HAlert(content, id = null) {
    $(content).empty().append($("<div class='col-lg-12 alert alert-danger'><div class='row' id='row-1'></div></div>"))
    $("#row-1").empty().append($(" <div class='col-lg-2'><a id='suiside-panel' href='#' class='btn btn-pink btn-block' title='กดเพื่อดูรายละเอียด'><img src='images/suiside.png' height='55'> ป้องกันฆ่าตัวตาย <span class='badge badge-warning'><b id='suiside' style='font-size:275%;'> 0 </b></span></a></div> ")
                                ,$(" <div class='col-lg-2'><a id='angry-panel' href='#' class='btn btn-danger btn-block' title='กดเพื่อดูรายละเอียด'><img src='images/angry.png' height='55'> ป้องกันก้าวร้าว <span class='badge badge-warning'><b id='angry' style='font-size:275%;color:white;'> 0 </b></span></a></div> ")
                                , $(" <div class='col-lg-2'><a id='escap-panel' href='#' class='btn btn-warning btn-block' title='กดเพื่อดูรายละเอียด'><img src='images/escap.png' height='55'> ป้องกันหลบหนี <span class='badge badge-danger'><b id='escap' style='font-size:275%;color:white;'> 0 </b></span></a></div> ")
                                , $(" <div class='col-lg-2'><a id='accident-panel' href='#' class='btn btn-yellow btn-block' title='กดเพื่อดูรายละเอียด'><img src='images/accident.png' height='55'> ป้องกันอุบัติเหตุ <span class='badge badge-danger'><b id='accident' style='font-size:275%;'> 0 </b></span></a></div> ")
                                , $(" <div class='col-lg-2'><a id='3s-panel' href='#' class='btn btn-purple btn-block' title='กดเพื่อดูรายละเอียด'><img src='images/3S.png' height='55'> เฝ้าระวัง 3S <span class='badge badge-warning'><b id='S3' style='font-size:275%;'> 0 </b></span></a></div> ")
                                , $(" <div class='col-lg-2'><a id='smiv-panel' href='#' class='btn btn-inverse btn-block' title='กดเพื่อดูรายละเอียด'><img src='images/smiv.png' height='20'><p></p> เฝ้าระวัง SMI-V <span class='badge badge-danger'><b id='smiv' style='font-size:275%;'> 0 </b></span></a></div> ")
    )
    $.getJSON('../back/API/DT_panelAlert.php', function (data) { console.log(data)
        $("#suiside").empty().append(data.count_suiside)
        $("#angry").empty().append(data.count_assail)
        $("#escap").empty().append(data.count_escab)
        $("#accident").empty().append(data.count_accident)
        $("#S3").empty().append(data.count_3s)
        $("#smiv").empty().append(data.count_smiv)
    });
    if ($.cookie("username")) {
        $("a#suiside-panel").click(function () {
            PNSuisideIPD("#page-content");
        });
        $("a#angry-panel").click(function () {
            PNAssailIPD("#page-content");
        });
        $("a#escap-panel").click(function () {
            PNEscapIPD("#page-content");
        });
        $("a#accident-panel").click(function () {
            PNAccidentIPD("#page-content");
        });
        $("a#3s-panel").click(function () {
            PN3SIPD("#page-content");
        });
        $("a#smiv-panel").click(function () {
            PNSmivIPD("#page-content");
        });
    }
}
