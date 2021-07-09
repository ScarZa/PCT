function InterviewIPD(content, id = null, url = '../', recorder = null) {

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
    var PL = new TabLayout(content, 2);
    PL.GetTL();
    $("h5.widget-title").empty().prepend("แบบสัมภาษณ์ประวัติผู้ป่วย");
    $("#Budget").remove();

    $("#Tl0 >a").empty().append("แบบแรกรับ (หอผู้ป่วย)");
    $("#Tc0 >p").empty().append($("<div class='widget-main row'><form action='' name='frminv' id='frminv' method='post' enctype='multipart/form-data'>"
        + ""
        + "<div id='interviewfrm' class='col-lg-12 col-md-12 col-sm-12 col-xs-12 scroll'></div>"
        + "<center><input type='submit' name='submit1' class='btn btn-success' value='บันทึก'></center>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        + "</form></div>"));

    $("#Tl1 >a").empty().append("แบบประเมินสภาพจิตใจ");
    $("#Tc1 >p").empty().append($("<div class='widget-main row'><form action='' name='frmgauge' id='frmgauge' method='post' enctype='multipart/form-data'>"
        + ""
        + "<div id='gaugefrm' class='col-lg-12 col-md-12 col-sm-12 col-xs-12 scroll'></div>"
        + "<center><input type='submit' name='submit2' class='btn btn-success' value='ประเมิน'></center>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        + "</form></div>"));
    var idvn = id;

    var FR = new AssFirstRecIPD("#interviewfrm");
    FR.GetFRIPD();
    
    var G = new AssGaugeIPD("#gaugefrm");
    G.GetGIPD();

    selectMash("#alcohol_type", "alcoholType_data.php", " เลือกชนิดสุรา ");
    selectMash("#alcohol_vol", "alcoholVol_Data.php", " เลือกปริมาณ ");
    selectMash("#dope_type0", "drugs_data.php", " เลือกชนิดยาเสพติด ");
    //////////////// เพิ่มชนิดยาเสพติด
                                    var i=1;
                                       if(i==1){ $('#minus-btn').hide(); }//else{$('#minus-btn').show()}
                            $('#plus-btn').click(function () {
                                i++;
                                    if(i<=3){
                                        $("#narcotic_item").append("<div><div class= 'col-lg-12 row' > <div class='form-horizontal' role='form'>"
                                        +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='dope_type'><b>"+i+" . </b>ชนิด </label>"
                                        +"<div class='col-sm-8'><select class='form-control form-control-sm  select2' id='dope_type"+i+"' name='dope_type[]'></select></div></div>"
                                        +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_volume'>ปริมาณ </label>"
                                        +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_vol"+i+"' name='narcotic_vol[]' placeholder='จำนวน (ตัวเลข)' /></div></div>"
                                        +"<div class='form-group col-lg-3 row'><label class='col-sm-3 control-label no-padding-right' for='narcotic_frequency'>ความถี่ </label>"
                                        +"<div class='col-sm-8'><input class='input-sm' type='text' id='narcotic_frequency"+i+"' name='narcotic_frequency[]' placeholder='' /></div></div>"
                                            + "</div></div>"
                                            +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                            +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_age'>ระยะเวลาที่ใช้ต่อเนื่อง </label>"
                                            +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_age"+i+"' name='narcotic_age[]' placeholder='' /></div></div>"
                                            +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='last_useD'>ใช้ครั้งสุดท้าย (จำนวนวัน) </label>"
                                            +"<div class='col-sm-5'><input class='input-sm' type='text' id='last_useD"+i+"' name='last_useD[]' placeholder='ระบุจำนวนวัน' /></div></div>"
                                            +"</div></div>"
                                            +"<div class='col-lg-12 row'><div class='form-horizontal' role='form'>"
                                            +"<div class='form-group col-lg-4 row'><label class='col-sm-5 control-label no-padding-right' for='narcotic_stop'>ระยะเวลาที่เลิก </label>"
                                            +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_stop"+i+"' name='narcotic_stop[]' placeholder='' /></div></div>"
                                            +"<div class='form-group col-lg-4 row'><label class='col-sm-6 control-label no-padding-right' for='narcotic_cause'>สาเหตุการใช้ </label>"
                                            +"<div class='col-sm-5'><input class='input-sm' type='text' id='narcotic_cause"+i+"' name='narcotic_cause[]' placeholder='' /></div></div>"
                                            +"</div></div></div>")
                                        //console.log("#Sdiag_"+i);
                                        selectMash("#dope_type"+i,"drugs_data.php", " เลือกชนิดยาเสพติด ");
                                    }
                                if (i != 1) { $('#minus-btn').show(); }
                                if (i >= 3) { $('#plus-btn').prop("disabled", true); }
                                       });
                            $('#minus-btn').click(function () {
                                if (i == 2) { $('#minus-btn').hide(); }//$("#IMsubmit").hide(); }//else{$('#minus-btn').show()}
                                
                                        //$("select#Sdiag_"+i).remove();
                                        $("div#narcotic_item >div:last").remove();
                                        $('#plus-btn').show();
                                       
                                i--;
                                if(i<3){ $('#plus-btn').removeAttr("disabled");}
                                    }); 
    //////////////// สิ้นสุดเพิ่มชนิดยาเสพติด                                
    $("textarea#disease").hide();
    $("#disease_group").hide();
    $("#surgery").hide();
    $("#complicate").hide();
    $("#whip").hide();
    $("#weapon").hide();
    $("#weaponer").hide();
    $("#detain").hide();
    $("#wound").hide();
    $("#regular_med").hide();
    $("#ADR").hide();
    $("#beAllergic").hide();
    $("#old_med").hide();
    $("#alcohol").hide();
    $("#narcotic").hide();
    $("#other").hide();
    $("#marry").hide();
    $("#heredity").hide();
    $("#Hurt_yourself").hide();
    $("#plan_detial").hide();
    $("#action_detial").hide();
    $("textarea[name=lawsuit]").hide();
    $("textarea[name=lawpsych]").hide();
    $("#IC").hide();
    $("#sleep").hide();
    $("#med").hide();
    $("#accident").hide();
    $("#smi4_group").hide();
    $("#other_mood").hide();
    $("#action_4D").hide();
    $("#action_6D").hide();
    $("#action_10D").hide();
    $("#scab_group").hide(); 
    $("#swelling").hide();
    $("#disabled").hide();
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

    $("input[type=radio][name=disease_chk]").click(function () {
        if ($("input[type=radio][name=disease_chk]:checked").val() == 'Y') {
            $("textarea#disease").show(); $("#disease_group").show(); $("div#heal_0").show();
        } else {
            $("input[type=radio][name=heal_chk][value='N']").prop("checked", true);
            $("textarea#heal").val('').hide();
            $("textarea#disease").hide(); $("div#heal_0").hide(); $("#disease_group").hide();
        }
    });
    $("input[type=radio][name=heal_chk]").click(function () {
        if ($("input[type=radio][name=heal_chk]:checked").val() == 'Y') { $("textarea#heal").show(); } else { $("textarea#heal").hide(); }
    });
    $("input[type=radio][name=surgery_chk]").click(function () {
        if ($("input[type=radio][name=surgery_chk]:checked").val() == 'Y') { $("textarea#surgery").show(); } else { $("textarea#surgery").hide(); }
    });
    $("input[type=radio][name=whip_chk]").click(function () {
        if ($("input[type=radio][name=whip_chk]:checked").val() == 'Y') { $("textarea#whip").show(); } else { $("textarea#whip").hide(); }
    });
    $("input[type=radio][name=weapon_chk]").click(function () {
        if ($("input[type=radio][name=weapon_chk]:checked").val() == 'Y') { $("textarea#weapon").show(); } else { $("textarea#weapon").hide(); }
    });
    $("input[type=radio][name=weaponer_chk]").click(function () {
        if ($("input[type=radio][name=weaponer_chk]:checked").val() == 'Y') { $("textarea#weaponer").show(); } else { $("textarea#weaponer").hide(); }
    });
    $("input[type=radio][name=complicate_chk]").click(function () {
        if ($("input[type=radio][name=complicate_chk]:checked").val() == 'Y') { $("textarea#complicate").show(); } else { $("textarea#complicate").hide(); }
    });
    
    $("input[type=radio][name=detain_chk]").click(function () {
        if ($("input[type=radio][name=detain_chk]:checked").val() == 'Y') { $("textarea#detain").show(); } else { $("textarea#detain").hide(); }
    });
    $("input[type=radio][name=wound_chk]").click(function () {
        if ($("input[type=radio][name=wound_chk]:checked").val() == 'Y') { $("textarea#wound").show(); } else { $("textarea#wound").hide(); }
    });
    $("input[type=radio][name=regular_med_chk]").click(function () {
        if ($("input[type=radio][name=regular_med_chk]:checked").val() == 'Y') { $("textarea#regular_med").show(); } else { $("textarea#regular_med").hide(); }
    });
    $("input[type=radio][name=beAllergic_chk]").click(function () {
        if ($("input[type=radio][name=beAllergic_chk]:checked").val() == 'Y') { $("textarea#beAllergic").show(); } else { $("textarea#beAllergic").hide(); }
    });
    $("input[type=radio][name=ADR_chk]").click(function () {
        if ($("input[type=radio][name=ADR_chk]:checked").val() == 'Y') { $("textarea#ADR").show(); } else { $("textarea#ADR").hide(); }
    });
    $("input[type=radio][name=old_med_chk]").click(function () {
        if ($("input[type=radio][name=old_med_chk]:checked").val() == 'Y') { $("textarea#old_med").show(); } else { $("textarea#old_med").hide(); }
    });
    $("input[type=radio][name=alcohol_chk]").click(function () {
        if ($("input[type=radio][name=alcohol_chk]:checked").val() == 'Y') { $("div#alcohol").show(); } else { $("div#alcohol").hide(); }
    });
    $("input[type=radio][name=narcotic_chk]").click(function () {
        if ($("input[type=radio][name=narcotic_chk]:checked").val() == 'Y') { $("div#narcotic").show(); } else { $("div#narcotic").hide(); }
    });
    $("input[type=radio][name=other_chk]").click(function () {
        if ($("input[type=radio][name=other_chk]:checked").val() == 'Y') { $("textarea#other").show(); } else { $("textarea#other").hide(); }
    });
    $("input[type=radio][name=father_chk]").click(function () {
        if ($("input[type=radio][name=father_chk]:checked").val() == 'Y') { $("div#father").show(); } else { $("div#father").hide(); }
    });
    $("input[type=radio][name=mother_chk]").click(function () {
        if ($("input[type=radio][name=mother_chk]:checked").val() == 'Y') { $("div#mother").show(); } else { $("div#mother").hide(); }
    });
    $("input[type=radio][name=marry_chk]").click(function () {
        if ($("input[type=radio][name=marry_chk]:checked").val() == '3') { $("div#marry").show(); } else { $("div#marry").hide(); }
    });
    $("input[type=radio][name=heredity_chk]").click(function () {
        if ($("input[type=radio][name=heredity_chk]:checked").val() == 'Y') { $("textarea#heredity").show(); } else { $("textarea#heredity").hide(); }
    });
    $("input[type=checkbox][name=plan]").click(function () {
        if ($("input[type=checkbox][name=plan]").prop("checked") == true) { $("textarea#plan_detial").show(); }
        else { $("textarea#plan_detial").hide(); }
    });
    $("input[type=checkbox][name=action]").click(function () {
        if ($("input[type=checkbox][name=action]").prop("checked") == true) {
            $("textarea#action_detial").show();
        } else { $("textarea#action_detial").hide(); }
    });
    $("input[type=radio][name=lawsuit_chk]").click(function () {
        if ($("input[type=radio][name=lawsuit_chk]:checked").val() == 'Y') { $("textarea#lawsuit").show(); } else { $("textarea#lawsuit").hide(); }
    });
    $("input[type=radio][name=lawpsych_chk]").click(function () {
        if ($("input[type=radio][name=lawpsych_chk]:checked").val() == 'Y') { $("textarea#lawpsych").show(); } else { $("textarea#lawpsych").hide(); }
    });
    $("input[type=radio][name=IC_chk]").click(function () {
        if ($("input[type=radio][name=IC_chk]:checked").val() == 'Y') { $("textarea#IC").show(); } else { $("textarea#IC").hide(); }
    });
    $("input[type=radio][name=sleep_chk]").click(function () {
        if ($("input[type=radio][name=sleep_chk]:checked").val() == 'Y') { $("textarea#sleep").show(); } else { $("textarea#sleep").hide(); }
    });
    $("input[type=radio][name=med_chk]").click(function () {
        if ($("input[type=radio][name=med_chk]:checked").val() == 'Y') { $("textarea#med").show(); } else { $("textarea#med").hide(); }
    });
    $("input[type=radio][name=accident_chk]").click(function () {
        if ($("input[type=radio][name=accident_chk]:checked").val() == 'Y') { $("textarea#accident").show(); } else { $("textarea#accident").hide(); }
    });
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
    $("input[type=radio][name=scab_chk]").click(function () {
        if ($("input[type=radio][name=scab_chk]:checked").val() == 'N') { $("#scab_group").hide(); } else { $("#scab_group").show(); }
    });
    $("input[type=radio][name=disabled_chk]").click(function () {
        if ($("input[type=radio][name=disabled_chk]:checked").val() == 'N') { $("#disabled").hide(); } else { $("#disabled").show(); }
    });
    $("input[type=radio][name=swelling_chk]").click(function () {
        if ($("input[type=radio][name=swelling_chk]:checked").val() == 'N') { $("#swelling").hide(); } else { $("#swelling").show(); }
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
    $("input[type=radio][name=income]").click(function () {
        if ($("input[type=radio][name=income]:checked").val() == '1') { $("#div-admittype").show(); } else { $("#div-admittype").hide(); }
    });
    // $("input[type=radio][name=condition]").click(function () {
    //     if ($("input[type=radio][name=condition]:checked").val() == 'N') { $("#condition_group").show(); } else { $("#condition_group").hide(); }
    // });
    $("input[type=radio][name=accept_chk]").click(function () {
        if ($("input[type=radio][name=accept_chk]:checked").val() == 'Y') { $("#accept").show(); } else { $("#accept").hide(); }
    });
    $("input[type=radio][name=memo_short]").click(function () {
        if ($("input[type=radio][name=memo_short]:checked").val() == 'Y') { $("#memoS").show(); } else { $("#memoS").hide(); }
    });
    $("input[type=radio][name=memo_long]").click(function () {
        if ($("input[type=radio][name=memo_long]:checked").val() == 'Y') { $("#memoL").show(); } else { $("#memoL").hide(); }
    });
    
     
    $.getJSON(url+'back/API/disease_Data.php', function (data) {
        var ii = 0;
        $("div#disease_group").empty();
        $.each(data, function (i, item) {
            $("div#disease_group").append($("<div class='col-lg-2'><label><input class='ace' type='checkbox' name='D" + ii + "' value='" + item.disease_id + "' ><span class='lbl'> " + item.disease_name + "</label></div>"))
            ii++;
        });
    });
    $.getJSON(url+'back/API/scab_Data.php', function (data) {
        var ii = 0;
        $("div#scab").empty();
        $.each(data, function (i, item) {
            $("div#scab").append($("<div class='col-lg-2'><label><input class='ace' type='checkbox' name='scab_" + ii + "' value='" + item.id + "' ><span class='lbl'> " + item.name + "</span></label></div>"))
            ii++;
        });
    });
        
    selectMash("#admittype", "admittype_Data.php", " เลือกชนิดการ admit ");
    selectMash("#shape", "shape_Data.php", " เลือกรูปร่าง ");
    selectMash("#skin_color", "skin_Data.php", " เลือกสีผิว ");
    console.log(idvn)
    $.getJSON(url+'back/API/patient_detail.php', { data: idvn.data }, function (data) { 
        $("b#patient_name").append(data[0].fullname);
        $("b#age").append(data[0].age);
        $("#hn").append(data[0].hn);
        $("#an").append(data[0].an);
        $("#interviewfrm ,#gaugefrm").append($("<input type='hidden' name='hn' value='" + data[0].hn + "'>")
                                            , $("<input type='hidden' name='vn' value='" + data[0].vn + "'>")
                                            , $("<input type='hidden' name='an' value='" + data[0].an + "'>")
        );
        
        if (recorder == null) {
            $("#interviewfrm ,#gaugefrm").append($("<input type='hidden' name='user' value='" + $.cookie("user") + "'>"));
        } else {
            $.getJSON('../../back/API/userToDCcodeAPI.php', { data: recorder }, function (data) {console.log(data);
                $("#interviewfrm ,#gaugefrm").append($("<input type='hidden' name='user' value='" + data.user + "'>"));
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
        
        $("#biographer").val(data[0].relative);
        $("#patient_add").val(data[0].fulladdressname);
        $("#tel0").val(data[0].hometel);
        $("#tel1").val(data[0].informtel);
        $("#fathername").val(data[0].fathername);
        $("#mothername").val(data[0].mothername);
        $("#bw").val(data[0].bw);
        $("#height").val(data[0].height);
        $("#CC").val(data[0].cc);
        $("#HPI").val(data[0].hpi);
        $("#pmh").val(data[0].pmh);

        $("#last_useA").attr("onkeyup", "inputDigits(last_useA)");
        $("#last_useD").attr("onkeyup", "inputDigits(last_useD)");

        var bmi;
        $("#BMIcal").click(function () {
            var height = $("input[type=text][name=height]").val() / 100;
            bmi = ($("input[type=text][name=bw]").val() / (height * height)).toFixed(1);
            $("input[type=text][name=bmi]").val(bmi);
            if (bmi < 18.5) {
                $("#BMIresult").empty().append(" <b style='color: red;'> น้ำหนักต่ำกว่าเกณฑ์</b>");
            } else if (bmi >= 18.5 && bmi <= 22.9) {
                $("#BMIresult").empty().append(" <b style='color: green;'> สมส่วน</b>");
            } else if (bmi >= 23 && bmi <= 24.9) {
                $("#BMIresult").empty().append(" <b style='color: red;'> น้ำหนักเกิน</b>");
            } else if (bmi >= 25 && bmi <= 29.9) {
                $("#BMIresult").empty().append(" <b style='color: red;'> โรคอ้วน</b>");
            } else if (bmi > 29.9) {
                $("#BMIresult").empty().append(" <b style='color: red;'> โรคอ้วนอันตราย</b>");
            }
        });
        $("#Temp").append(data[0].temp+'  ํc');
        if (data[0].temp < 36.5) { $("#Temp").css("background-color", "yellow"); } else if (data[0].temp > 37.5) { $("#Temp").css({ "background-color":"red","color":"white"});}
        $("#PR").append(data[0].pr+' /min.');
        if (data[0].pr < 50) { $("#PR").css("background-color", "yellow"); } else if (data[0].pr > 100) { $("#PR").css({ "background-color":"red","color":"white"});}
        $("#RR").append(data[0].rr+' /min.');
        if (data[0].rr < 20) { $("#RR").css("background-color", "yellow"); } else if (data[0].rr > 40) { $("#RR").css({ "background-color":"red","color":"white"});}
        $("#BP").append(data[0].bps+'/'+data[0].bpd+' mmHg.');
        if (data[0].bps < 100) { $("#BP").css("background-color", "yellow"); } else if (data[0].bps > 130) { $("#BP").css({ "background-color": "red", "color": "white" }); }
        
        if (data[0].accident == 'Y') {
            $("input[type=radio][name=accident_chk][value='Y']").attr("checked", "checked");
            $("textarea#accident").show();
            $("textarea#accident").val(data[0].accident);
        }
        if (data[0].surgery == 'Y') {
            $("input[type=radio][name=surgery_chk][value='Y']").attr("checked", "checked");
            $("textarea#surgery").show();
            $("textarea#surgery").val(data[0].surgery);
        }
        $.getJSON(url+'back/API/allergy_Data.php', { data: $.cookie("hn") }, function (data) { console.log(data)
            var text;
            $.each( data, function( key, value ) {
                text += value.drugallergy+"<br>";
              });
            if (data!='') {
                $("input[type=radio][name=ADR_chk][value='Y']").attr("checked", "checked");
                $("textarea#ADR").show();
                $("textarea#ADR").val(text);
            }
            
        });
        ///////// ER Zone /////////// 
        $("div#ER-frame").hide();
        $("a#SW-ER-frame").click(function () {
            $("div#ER-frame").toggle();
        });
        if (data[0].weapon_chk == 'Y') {
            $("input[type=radio][name=weapon_chk][value='Y']").attr("checked", "checked");
            $("textarea#weapon").show();
            $("textarea#weapon").val(data[0].weapon);
        }
        if (data[0].weaponer_chk == 'Y') {
            $("input[type=radio][name=weaponer_chk][value='Y']").attr("checked", "checked");
            $("textarea#weaponer").show();
            $("textarea#weaponer").val(data[0].weapon);
        }
        if (data[0].detain_chk == 'Y') {
            $("input[type=radio][name=detain_chk][value='Y']").attr("checked", "checked");
            $("textarea#detain").show();
            $("textarea#detain").val(data[0].detain);
        }
        if (data[0].typeP_1 == '1') { $("input[type=checkbox][name=typeP_1]").attr("checked", "checked"); }
        if (data[0].typeP_2 == '2') { $("input[type=checkbox][name=typeP_2]").attr("checked", "checked"); }
        if (data[0].typeP_3 == '3') { $("input[type=checkbox][name=typeP_3]").attr("checked", "checked"); }
        if (data[0].typeP_4 == '4') { $("input[type=checkbox][name=typeP_4]").attr("checked", "checked"); }
        if (data[0].typeP_5 == '5') { $("input[type=checkbox][name=typeP_5]").attr("checked", "checked"); }
        
        if (data[0].typeP_7 == '7' || data[0].typeP_6 == '6') { $("input[type=radio][name=typeP][value='2']").attr("checked", "checked"); }
        else { $("input[type=radio][name=typeP][value='1']").attr("checked", "checked"); }
        
        if (data[0].refer == '1') { $("input[type=radio][name=refer][value='1']").attr("checked", "checked"); }
        else if (data[0].refer == '2')  { $("input[type=radio][name=refer][value='2']").attr("checked", "checked"); }

        if (data[0].admit_type == '1') { $("input[type=radio][name=admit_type][value='1']").attr("checked", "checked"); }
        else if (data[0].admit_type == '2') { $("input[type=radio][name=admit_type][value='2']").attr("checked", "checked"); }
        else if (data[0].admit_type == '3') { $("input[type=radio][name=admit_type][value='3']").attr("checked", "checked"); }
        else if (data[0].admit_type == '4') { $("input[type=radio][name=admit_type][value='4']").attr("checked", "checked"); }
        else if (data[0].admit_type == '5') { $("input[type=radio][name=admit_type][value='5']").attr("checked", "checked"); }
        
        if (data[0].smi4_chk == 'Y') {
            $("input[type=radio][name=smi4_chk][value='Y']").attr("checked", "checked");
            $("div#smi4_group").show();
            if (data[0].smi4_1 == '1') { $("input[type=checkbox][name=smi4_1]").attr("checked", "checked"); }
            if (data[0].smi4_2 == '2') { $("input[type=checkbox][name=smi4_2]").attr("checked", "checked"); }
            if (data[0].smi4_3 == '3') { $("input[type=checkbox][name=smi4_3]").attr("checked", "checked"); }
            if (data[0].smi4_4 == '4') { $("input[type=checkbox][name=smi4_4]").attr("checked", "checked"); }
        }
        if (data[0].lawpsych_chk == 'Y') {
            $("input[type=radio][name=lawpsych_chk][value='Y']").attr("checked", "checked");
            $("textarea#lawpsych").show();
            $("textarea#lawpsych").val(data[0].lawpsych);
        }
        if (data[0].sleep_chk == 'Y') {
            $("input[type=radio][name=sleep_chk][value='Y']").attr("checked", "checked");
            $("textarea#sleep").show();
            $("textarea#sleep").val(data[0].sleep);
        }
        if (data[0].IC_chk == 'Y') {
            $("input[type=radio][name=IC_chk][value='Y']").attr("checked", "checked");
            $("textarea#IC").show();
            $("textarea#IC").val(data[0].IC);
        }
        if (data[0].med_chk == 'Y') {
            $("input[type=radio][name=med_chk][value='Y']").attr("checked", "checked");
            $("textarea#med").show();
            $("textarea#med").val(data[0].med);
            }else if (data[0].med_chk == 'A') {
                $("input[type=radio][name=med_chk][value='A']").attr("checked", "checked");
            }else if (data[0].med_chk == '0') {
                $("input[type=radio][name=med_chk][value='0']").attr("checked", "checked");
            }
        if (data[0].wound_chk == 'Y') {
            $("input[type=radio][name=wound_chk][value='Y']").attr("checked", "checked");
            $("textarea#wound").show();
            $("textarea#wound").val(data[0].wound);
        }
        if (data[0].surgery_chk == 'Y') {
            $("input[type=radio][name=surgery_chk][value='Y']").attr("checked", "checked");
            $("textarea#surgery").show();
            $("textarea#surgery").val(data[0].surgery);
        }
        if (data[0].complicate_chk == 'Y') {
            $("input[type=radio][name=complicate_chk][value='Y']").attr("checked", "checked");
            $("textarea#complicate").show();
            $("textarea#complicate").val(data[0].complicate);
        }
        if (data[0].sexcode == 2) {
            $("#menses-div").append($("<div class='row'><label class='col-sm-4 col-form-label'><b>ประจำเดือน </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='menses_chk' value='N'checked required><span class='lbl'> ปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='menses_chk' value='Y' required><span class='lbl'> ผิดปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='menses_chk' value='U' required><span class='lbl'> ไม่ทราบ</span></label></div></div>"
                + "<textarea name='menses' id='menses' class='form-control' placeholder='รายละเอียดประจำเดือน'></textarea>"));
                $("textarea#menses").hide();
             $("input[type=radio][name=menses_chk]").click(function () {
                if ($("input[type=radio][name=menses_chk]:checked").val() == 'Y') { $("textarea#menses").show(); } else { $("textarea#menses").hide(); }
            });
            if (data[0].menses_chk == 'Y') {
                $("input[type=radio][name=menses_chk][value='Y']").attr("checked", "checked");
                $("textarea#menses").show();
                $("textarea#menses").val(data[0].menses);
            }
        } else { $("#menses-div").hide();}
        if (data[0].alcohol_chk == 'Y') {
            $("input[type=radio][name=alcohol_chk][value='Y']").attr("checked", "checked");
            $("div#alcohol").show();
            selectMash("#alcohol_type", "alcoholType_data.php", " เลือกชนิดสุรา ", data[0].alcohol_type);
            selectMash("#alcohol_vol", "alcoholVol_Data.php", " เลือกปริมาณ ", data[0].alcohol_vol);
            $("input#last_useA").val(data[0].last_useA);
        }
        if (data[0].dope_chk == 'Y') {
            $("input[type=radio][name=narcotic_chk][value='Y']").attr("checked", "checked");
            $("div#narcotic").show();
            selectMash("#dope_type0", "drugs_data.php", " เลือกชนิดยาเสพติด ", data[0].dope_type);
            $("input#last_useD0").val(data[0].last_useD);
        }
        $("input[type=radio][name=smi4_chk]").click(function () {
            if ($("input[type=radio][name=smi4_chk]:checked").val() == 'Y') { console.log($.cookie("username"))
                popup('../../CF-Form/font/content/Ass_SMIV.html?vn='+data[0].vn+'?user='+$.cookie("username"), popup, 1440, 900);
                $("div#smi4_group").show();
            } else { $("div#smi4_group").hide(); }
        });
        ///////// End ER Zone ///////////
        $("input[type=radio][name=Hurt_yourself_chk]").click(function () {
            if ($("input[type=radio][name=Hurt_yourself_chk]:checked").val() == 'Y') { console.log("1234")
                popup('../../CF-Form/font/content/Ass_Depress.html?vn=' + data[0].vn + '?user=' + $.cookie("username"), popup, 1440, 900);
                $("div#Hurt_yourself").show();
            }
            else { $("div#Hurt_yourself").hide(); }
        });
    });

    $("#frminv").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        console.log(dataForm)
        for (var value of dataForm.values()) {
            console.log(value);
        }
        var settings = {
            type: "POST",
            url: url+"back/API/prcInterviewAPI.php",
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
            //TBInterviewIPD('#page-content');
            $("input[type=submit][name=submit1]").attr("disabled", "disabled");
        })
    }));
        $("#frmgauge").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: url+"back/API/prcInterviewAPI.php",
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
                TBInterviewIPD('#page-content');
            })
    }));
}
