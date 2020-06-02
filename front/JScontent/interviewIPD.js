function InterviewIPD(content, id = null) {

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
    var PL = new TabLayout(content, 3);
    PL.GetTL();
    $("h5.widget-title").empty().prepend("แบบสัมภาษณ์ประวัติผู้ป่วย");
    $("#Budget").remove();

    $("#Tl0 >a").empty().append("แบบแรกรับ");
    $("#Tc0 >p").empty().append($("<form action='' name='frminv' id='frminv' method='post' enctype='multipart/form-data'>"
        + "<div class='widget-main row'><div class='col-lg-12' id='cgi-post'>"
        + "<div id='interviewfrm'></div>"
        + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        + "</div></form>"));

    $("#Tl1 >a").empty().append("แบบประเมิน");
    $("#Tc1 >p").empty().append($("<form action='' name='frmgauge' id='frmgauge' method='post' enctype='multipart/form-data'>"
        + "<div class='widget-main row'><div class='col-lg-12' id='cgi-post'>"
        + "<div id='gaugefrm'></div>"
        + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        + "</div></form>"));
    var idvn = id;

    var FR = new AssFirstRecIPD("#interviewfrm");
    FR.GetFRIPD();
    
    var G = new AssGaugeIPD("#gaugefrm");
    G.GetGIPD();

    selectMash("#alcohol_type", "alcoholType_data.php", " เลือกชนิดสุรา ");
    selectMash("#alcohol_vol", "alcoholVol_Data.php", " เลือกปริมาณ ");
    selectMash("#dope_type", "drugs_data.php", " เลือกชนิดยาเสพติด ");

    $("textarea#disease").hide();
    $("#surgery").hide();
    $("#whip").hide();
    $("#weapon").hide();
    $("#detain").hide();
    $("#wound").hide();
    $("#regular_med").hide();
    $("#beAllergic").hide();
    $("#old_med").hide();
    $("#alcohol").hide();
    $("#narcotic").hide();
    $("#other").hide();
    $("#marry").hide();
    $("#heredity").hide();
    $("#Hurt_yourself").hide();
    $("#plan_datial").hide();
    $("#action_detial").hide();
    $("textarea[name=lawsuit]").hide();
    $("textarea[name=lawpsych]").hide();
    $("#IC").hide();
    $("#sleep").hide();
    $("#med").hide();
    $("#smi4_group").hide();
    $("#other_mood").hide();
    $("#action_4D").hide();
    $("#action_6D").hide();
    $("#action_10D").hide();
    $("#think_group").hide();
    $("#think_1D").hide();
    $("#think_2D").hide();
    $("#think_6D").hide();
    $("#Recognition").hide();
    $("#heal_0").hide();
    $("textarea#heal").hide();

    $("input[type=radio][name=disease_chk]").click(function () {
        if ($("input[type=radio][name=disease_chk]:checked").val() == 'Y') { $("textarea#disease").show(); $("div#heal_0").show(); } else { $("textarea#disease").hide(); $("div#heal_0").hide(); }
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
    $("input[type=radio][name=Hurt_yourself_chk]").click(function () {
        if ($("input[type=radio][name=Hurt_yourself_chk]:checked").val() == 'Y') { $("div#Hurt_yourself").show() }
        else { $("div#Hurt_yourself").hide(); }
    });
    $("input[type=checkbox][name=plan]").click(function () {
        if ($("input[type=checkbox][name=plan]").prop("checked") == true) { $("textarea#plan_datial").show(); }
        else { $("textarea#plan_datial").hide(); }
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
    $("input[type=radio][name=smi4_chk]").click(function () {
        if ($("input[type=radio][name=smi4_chk]:checked").val() == 'Y') { $("div#smi4_group").show(); } else { $("div#smi4_group").hide(); }
    });
    $("input[type=radio][name=mood_chk]").click(function () {
        if ($("input[type=radio][name=mood_chk]:checked").val() == '5') { $("textarea#other_mood").show(); } else { $("textarea#other_mood").hide(); }
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
        if ($("input[type=radio][name=Recognition_chk]:checked").val() == 'Y') { $("textarea#Recognition").show(); } else { $("textarea#Recognition").hide(); }
    });

    $.getJSON('../back/API/patient_detail.php', { data: idvn.data }, function (data) {
        $("b#patient_name").append(data[0].fullname);
        $("b#age").append(data[0].age);
        $("#hn").append(data[0].hn);
        $("#an").append(data[0].an);
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
        $("#pics").append("<img src='../back/API/show_image.php?hn=" + data[0].hn + "' width='125' />");
        $("#biographer").val(data[0].relative);
        $("#patient_add").val(data[0].fulladdressname);
        $("#tel0").val(data[0].hometel);
        $("#tel1").val(data[0].informtel);
        $("#father_name").val(data[0].fathername);
        $("#mother_name").val(data[0].mothername);
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
            selectMash("#dope_type", "drugs_data.php", " เลือกชนิดยาเสพติด ", data[0].dope_type);
            $("input#last_useD").val(data[0].last_useD);
        }

        ///////// End ER Zone ///////////
    });

    $("#frminv").on('submit', (function (e) {
        e.preventDefault();
        var dataForm = new FormData(this);
        // console.log(dataForm)
        // for (var value of dataForm.values()) {
        //     console.log(value);
        // }
        var settings = {
            type: "POST",
            url: "../back/API/prcSocialAPI.php",
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
            $("#body_text").empty();
            popup('../back/API/socialPDF.php?id=' + result.id, popup, 450, 500);
            AssSocial('#index_content', $.cookie('hn'));
        })
    }));
}
