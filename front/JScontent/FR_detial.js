function FRDetial(content, id = null) {
    var title = " ข้อมูลแรกรับ";
    var subtitle = "";
    var PL = new PageLayout(content);
        PL.GetPL();
  $("h5").empty().prepend("<img src='../images/icon_set2/compose.ico' width='30'> ").append(title);
    $('#contentGr').empty().append($("<div class='row'><div class='col-lg-12 col-md-12' id='FRD'></div></div>"));
            //$("#FRD").append("<table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'></table>")
        $.getJSON('../../back/API/detail_FRAPI.php',{data : id},function (data) { //console.log(data)
        $.getJSON('../../back/API/detail_patientAPI.php',{data : data.hn},function (data) {
            $("#Budget").empty().attr("align","left").append($("<div class='col-sm-12 alert alert-success'><div class='col-sm-8'><span><label class='col-form-label'>HN : <b>"+data[0].hn+"</b><br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล : <b>"+data[0].fullname+"</b>"
            +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด : "+data[0].birthday+" อายุ : "+data[0].age+" ปี  สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
            +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5
            +"</label></span></div> "
            +"<div class='col-sm-4 block'> <img src='../back/API/show_image.php?hn="+data[0].hn+"' width='100' /></div></div><br>"))
        });
          // create table
            var $table = $('<table>');
            $table.attr("width", "100%");
            $table.attr("border", "0");
            $table.attr("cellspacing", "");
            $table.attr("cellpadding", "");
            $table.attr("frame", "below");
            $table.attr("class", "divider");
            //$table.addclass("divider");
            var tr = $('<tr></tr>') //creates row
            var th = $('<th></th>') //creates table header cells
            var td = $('<td></td>') //creates table cells
// caption
$table.append('<caption> บันทึกแรกรับ</caption>')
// thead
.append('<thead>').children('thead')
//.append('<tr />').children('tr').append('<th>A</th><th>B</th><th>C</th><th>D</th>');

//tbody
            //////////// Loop tbody part ///////////////////
            var $tbody = $table.append('<tbody />').children('tbody');
            $.each(data,function(d,k) { console.log(k)
                var row = tr.clone() //creates a row
                // $.each(d,function(e,j) {
                if (k=='') {
                    row.append(td.clone().append(d)).append(td.clone().append(" : -")) //fills in the row
                } else {
                    row.append(td.clone().append(d)).append(td.clone().append(" : "+k)) //fills in the row
                }
                    
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
$table.appendTo('#FRD');  
      });
}
