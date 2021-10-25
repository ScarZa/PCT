function SAVEDetial(content, id = null) {
    var title = " ข้อมูลแรกรับ";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
  $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
    $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
            //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
    $("#Budget").empty().attr("align", "left").append($("<div class='col-sm-12 alert alert-success'><div class='' id='medical-detial1'></div></div>")
                                                    , $("<div class='col-sm-12 alert alert-info' id='conclude-nurse'><u><b>ผลการประเมิน SAVE</b></u><div class='' id='SAVE-result'></div><br></div>")
                                                    , $("<div class='col-sm-12 alert alert-warning'><div class='' id='conclude'></div></div><br>")
                                                    , $("<div class='col-sm-12'><center><span id='recorder'></span></center></div>")
                                                    , $("<div class='col-sm-12'><br><center><button id='print' class='btn btn-primary'>พิมพ์ข้อมูล</button></center></div>")
                                                    );
        $.getJSON('../../back/API/detail_FRAPI.php',{data : id},function (data) { console.log(data)
        $.getJSON('../../back/API/detail_patientAPI.php',{data : data.hn},function (data) {
            $("#medical-detial1").append($("<div class='col-sm-8'><span><label id='medical' class='col-form-label'>เลขบัตรประชาชน : " + data[0].cid + "<br>ชื่อ-สกุล : <b>" + data[0].fullname + "</b>"
                + "<br>ที่อยู่ : " + data[0].informaddr + "<br>วันเกิด : " + data[0].birthday + " อายุ : " + data[0].age + " ปี  สถานะภาพ : " + data[0].mrname + "<br>การวินิจฉัย : " + data[0].pdx + " " + data[0].dx0
                + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5
                + "</label></span></div> "
                + "<div class='col-sm-4 block'> <img id='pics-panel' width='100' /></div>"));
                $.getJSON('../../back/API/check_image.php', { data1: data[0].hn , data2: data[0].an }, function (datai) { 
                    if (datai.cc == '') { var img = '../images/person.png' } else {
                        if (datai.chk == 'Y') {
                            var img = '../PI_imgs/'+datai.cc
                        } else {
                            var img = '../../back/API/show_image.php?hn=' + data[0].hn
                        }
                        
                    }
                    $("#pics-panel").attr("src", img)
                });
        });
            $("#medical-detial1").prepend($("<div class='col-sm-8'>AN : <b>" + data.an + "</b> HN : <b>" + data.hn + "</b></div>"))
            
            
            //if (data == '') { $("#conclude-nurse").hide() } else {
                // create table
                var $table = $('<table>');
                $table.attr("width", "100%");
                $table.attr("border", "1");
                $table.attr("cellspacing", "");
                $table.attr("cellpadding", "");
                //$table.attr("frame", "below");
                $table.attr("class", "divider");
                //$table.addclass("divider");
                var tr = $('<tr></tr>') //creates row
                var th = $('<th></th>') //creates table header cells
                var td = $('<td></td>') //creates table cells
                // caption
            $table
                //.append('<caption> บันทึกสรุป</caption>')
                    // thead
                    .append('<thead>').children('thead')
                    .append('<tr />').children('tr').append('<th> เกณฑ์การเฝ้าระวังความเสี่ยงสำคัญทางคลินิก </th><th> OPD/ER</th><th> แรกรับ</th><th> ขณะรักษาในโรงพยาบาล</th>');

                //tbody
                //////////// Loop tbody part ///////////////////
            var $tbody = $table.append('<tbody />').children('tbody');

            var row;
            var vn = data.vn;
            $.getJSON('../../back/API/SAVE_date.php', { data: vn }, function (data_date) {
                row = tr.clone();
                row.append(td.clone().append('<center>วัน / เดือน / ปี</center>'))
                $.each(data_date, function (d, k) {
                    row.append(td.clone().append('<center>' + k.recdate + '</center>'));
                    $tbody.append(row) //puts row on the tbody
                });
                
            row = tr.clone();
                        row.append(td.clone().append('<center><u> <b>แบบประเมินฆ่าตัวตาย  </u> ( S : Suicide )</b></center>'));
                        $tbody.append(row) //puts row on the tbody
                        row = tr.clone();
                        row.append(td.clone().append('<b>มีแนวโน้มจะทำร้ายตนเองจากอาการทางจิต</b>'));
                        $tbody.append(row) //puts row on the tbody
                
                        
                $.getJSON('../../back/API/SAVE_Data.php', { data: 1 }, function (data) {
                            var c = 1;
                            $.each(data, function (d, k) {
                               
                                
                                // $.getJSON('../../back/API/SAVE_date.php', { data: vn }, function (data) {
                                    row = tr.clone();
                                    row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name))
                                //     var cc = 1;
                                //     $.each(data, function (d, k) { console.log(data)
                                //         row.append(td.clone().append('<center>' + k.recdate + '</center>'))
                                //         cc++; console.log(cc);
                                //     });
                                //     $tbody.append(row)
                                // });
                                console.log(data_date)
                                for (let ic = 0; ic < data_date.length; ic++){
                                    $.getJSON('../../back/API/S1_data.php', { data: vn , data2:data_date[ic].recdate_num }, function (data) { console.log(data)
                                        row.append(td.clone().append(data[0].s1_4))
                                    });
                                    $tbody.append(row)
                                }
                                   // .append(td.clone().append(c)).append(td.clone().append(c+1)).append(td.clone().append(c+2));
                                    
                                    console.log(c);c++; 
                            }); 
                            $.getJSON('../../back/API/SAVE_Data.php', { data: 2 }, function (data) {
                                row = tr.clone();
                                row.append(td.clone().append('<b>ตลอดชีวิตที่ผ่านมา เคยพยายามฆ่าตัวตาย</b>'))
                                    //.append(td.clone().append('1'));
                                $tbody.append(row);
                                row = tr.clone();
                                row.append(td.clone().append('<b>ใน 6 เดือนที่ผ่านมา มีความสูญเสียที่สำคัญ เช่น บุคคลใกล้ชิด/หน้าที่การงาน/อวัยวะ</b>'));
                                $tbody.append(row);
                                row = tr.clone();
                                row.append(td.clone().append('<b>ใน 1 เดือนที่ผ่านมา</b>'));
                                $tbody.append(row);
                                $.each(data, function (d, k) {
                                    row = tr.clone();
                                    row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                    $tbody.append(row)
                                });
                                row = tr.clone();
                                row.append(td.clone().append('<b>หมายเหตุ : 0-3 = ต่ำ / 4-6 = ปานกลาง / 7-9 = สูง &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; รวมคะแนน</b>'));
                                $tbody.append(row);
                                $.getJSON('../../back/API/SAVE_Data.php', { data: 3 }, function (data) {
                                    row = tr.clone();
                                    row.append(td.clone().append('<b>ใน 1 สัปดาห์ที่ผ่านมา</b>'));
                                    $tbody.append(row);
                                    $.each(data, function (d, k) {
                                        row = tr.clone();
                                        row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                        $tbody.append(row)
                                    });
                                    row = tr.clone();
                                    row.append(td.clone().append('<b>หมายเหตุ : 0-2 = ต่ำ / 3-5 = ปานกลาง / 6-7 = สูง &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; รวมคะแนน</b>'));
                                    $tbody.append(row);
                                    row = tr.clone();
                                    row.append(td.clone().append('<center><u> <b>แบบประเมินอุบัติเหตุ (A : Accident)</b> </u></center>'));
                                    $tbody.append(row);
                                    row = tr.clone();
                                    row.append(td.clone().append('<b>การทรงตัวไม่ดี</b>'));
                                    $tbody.append(row);
                                    $.getJSON('../../back/API/SAVE_Data.php', { data: 4 }, function (data) {
                                        $.each(data, function (d, k) {
                                            row = tr.clone();
                                            row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                            $tbody.append(row)
                                        });
                                        $.getJSON('../../back/API/SAVE_Data.php', { data: 5 }, function (data) {
                                            row = tr.clone();
                                            row.append(td.clone().append('<b>มีแนวโน้มที่จะได้รับอุบัติเหตุจากโรคร่วม/ภาวะทางกาย</b>'));
                                            $tbody.append(row);
                                            $.each(data, function (d, k) {
                                                row = tr.clone();
                                                row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                                $tbody.append(row)
                                            });
                                            row = tr.clone();
                                            row.append(td.clone().append('<b>หมายเหตุ : 0-3 = ต่ำ / 4-6 = ปานกลาง / 7-9 = สูง &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; รวมคะแนน</b>'));
                                            $tbody.append(row);

                                            $.getJSON('../../back/API/SAVE_Data.php', { data: 6 }, function (data) {
                                                row = tr.clone();
                                                row.append(td.clone().append('<center><u> <b>แบบประเมินพฤติกรรมรุนแรง (V : Violance)</b> </u></center>'));
                                                $tbody.append(row);
                                                row = tr.clone();
                                                row.append(td.clone().append('<b>ใน 2 สัปดาห์ที่ผ่านมา มีประวัติพกพาอาวุธ/ทำลายของ/ทำร้ายร่างกายผู้อื่น</b>'));
                                                $tbody.append(row);
                                                row = tr.clone();
                                                row.append(td.clone().append('<b>ใน 2 สัปดาห์ที่ผ่านมามีแนวโน้มที่จะเกิดพฤติกรรมรุนแรงจากอาการทางจิต</b>'));
                                                $tbody.append(row);
                                                $.each(data, function (d, k) {
                                                    row = tr.clone();
                                                    row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                                    $tbody.append(row)
                                                });
                                    
                                    
                                                $.getJSON('../../back/API/SAVE_Data.php', { data: 7 }, function (data) {
                                                    row = tr.clone();
                                                    row.append(td.clone().append('<b>พฤติกรรมก้าวร้าวรุนแรงต่อตนเอง</b>'));
                                                    $tbody.append(row);
                                        
                                                    $.each(data, function (d, k) {
                                                        row = tr.clone();
                                                        row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                                        $tbody.append(row)
                                                    });
                                        
                                                    $.getJSON('../../back/API/SAVE_Data.php', { data: 8 }, function (data) {
                                                        row = tr.clone();
                                                        row.append(td.clone().append('<b>พฤติกรรมก้าวร้าวรุนแรงต่อผู้อื่นทั้งทางคำพูดและการแสดงออก</b>'));
                                                        $tbody.append(row);
                                            
                                                        $.each(data, function (d, k) {
                                                            row = tr.clone();
                                                            row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                                            $tbody.append(row)
                                                        });
                                            
                                                        $.getJSON('../../back/API/SAVE_Data.php', { data: 9 }, function (data) {
                                                            row = tr.clone();
                                                            row.append(td.clone().append('<b>พฤติกรรมก้าวร้าวรุนแรงต่อทรัพย์สิน</b>'));
                                                            $tbody.append(row);
                                                
                                                            $.each(data, function (d, k) {
                                                                row = tr.clone();
                                                                row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                                                $tbody.append(row)
                                                            });
                                                            row = tr.clone();
                                                            row.append(td.clone().append('<b>หมายเหตุ : 0-4 = ต่ำ / 5-8 = ปานกลาง / 9-12 = สูง &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; รวมคะแนน</b>'));
                                                            $tbody.append(row);
                                                
                                                            $.getJSON('../../back/API/SAVE_Data.php', { data: 10 }, function (data) {
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<center><u> <b>แบบประเมินหลบหนี (E : Escape)</b> </u></center>'));
                                                                $tbody.append(row);
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<b>มีประวัติพยายามหลบหนีปฏิเสธการเจ็บป่วย ไม่อยากอยู่ รพ.</b>'));
                                                                $tbody.append(row);
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<b>มีประวัติติดสุรา/ยา/สารเสพติด</b>'));
                                                                $tbody.append(row);
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<b>วิตกกังวลเกี่ยวกับภารกิจส่วนตัวที่ต้องจัดการด้วยตัวเอง หรือมีภาระรับผิดชอบครอบครับ รบเร้าให้ติดต่อญาติรับกลับบ้าน ขอออกนอกตึกบ่อย ๆ </b>'));
                                                                $tbody.append(row);
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<b>มีพฤติกรรมพยายามหลบหนี *</b>'));
                                                                $tbody.append(row);
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<b>มีแนวโน้มที่จะหลบหนี</b>'));
                                                                $tbody.append(row);
                                                    
                                                                $.each(data, function (d, k) {
                                                                    row = tr.clone();
                                                                    row.append(td.clone().append('&nbsp;&nbsp;&nbsp;' + k.save_name));
                                                                    $tbody.append(row)
                                                                });
                                                                row = tr.clone();
                                                                row.append(td.clone().append('<b>หมายเหตุ : 0-2 = ต่ำ / 3-5 = ปานกลาง / 6-8 = สูง &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; รวมคะแนน</b>'));
                                                                $tbody.append(row);
                                                                    
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                //         $.each(data, function (d, k) {
                            
                //             $.getJSON('../../back/API/SAVEer_Data.php', { data: vn, data2: k.recdate_num }, function (data) {
                //                 $.each(data, function (d, k) { console.log(k)
                //                     row = tr.clone(); 
                //                     row.append(td.clone().append(k));
                //                     $tbody.append(row)
                //                 });
                        
                //     });//SAVE data
                // });//for loop
        });    
            
            
            
            
                $.getJSON('../../back/API/detail_concludeAPI.php', { data: data.ipd_fr_id }, function (data) { console.log(data)    
                    $.each(data, function (d, k) {
                        console.log(k)
                        row = tr.clone() //creates a row
                        // $.each(d,function(e,j) {
                
                        row.append(td.clone().append(k.topic)).append(td.clone().append(k.begin_date)).append(td.clone().append(k.end_date)).append(td.clone().append(k.name)).append(td.clone().append(k.recdate)) //fills in the row
                
                    
                        // })
                        $tbody.append(row) //puts row on the tbody
                    })
                
                //////////// End Loop tbody part ///////////////////
                // // add row
                // $tbody.append('<tr />').children('tr:last')
                // .append("<td>val</td>")
                // .append("<td>val</td>")
                // .append("<td>val</td>")
                // .append("<td>val</td>");

                // // add another row
                // $tbody.append('<tr />').children('tr:last')
                // .append("<td>val</td>")
                // .append("<td>val</td>")
                // .append("<td>val</td>")
                // .append("<td>val</td>");

                // add table to dom
                $table.appendTo('#SAVE-result');
                //}
                })
               // $tbody.append(row) //puts row on the tbody
                $table.appendTo('#SAVE-result');
        });
        $("button#print").click(function (e) {
            window.print()
        });
}
