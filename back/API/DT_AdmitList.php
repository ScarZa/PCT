<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$sql="SELECT ifr.ipd_fr_id
,CASE
    WHEN ISNULL(ifr.ipd_fr_id) THEN 'ยังไม่แรกรับ'
    ELSE 'ลงทะเบียนแรกรับแล้ว'
END frchk
,CASE
    WHEN ISNULL(pc.pc_id) THEN 'ยังไม่ปรับระเมิน'
    ELSE 'ประเมินแล้ว'
END pcchk
,a.hn,a.regdate
,concat(p.pname,p.fname,' ',p.lname) as fullname
,w.name
FROM an_stat a
inner join patient p on p.hn = a.hn
inner join jvl_ipd_first_rec ifr on ifr.vn = a.vn
left outer join jvl_progress_commu pc on pc.ipd_fr_id = ifr.ipd_fr_id
inner join ward w on w.ward = a.ward
where ISNULL(a.dchdate) and ifr.chk_update = 0
GROUP BY a.an"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();

  
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['ipd_fr_id'] = $num_risk[$i]['ipd_fr_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    //$series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    //$series['type']= $num_risk[$i]['type'];
    //$series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
   
    $series['frchk'] = $num_risk[$i]['frchk'];
    $series['pcchk'] = $num_risk[$i]['pcchk'];
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();