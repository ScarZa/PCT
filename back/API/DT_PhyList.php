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
$sql="SELECT ph.phy_id,ph.hn,ph.regdate,o.name,cs.clinic_member_status_name as cms
,concat(p.pname,p.fname,' ',p.lname) as fullname
,w.name as ward
FROM patient p
inner join jvlphy_regis ph on ph.hn=p.hn
inner join opduser o on o.doctorcode = ph.doctor
inner join clinic_member_status cs on cs.clinic_member_status_id=ph.phy_status
inner join jvl_transferBox tb on tb.hn = ph.hn
inner join an_stat a on a.vn = tb.vn
inner join ward w on w.ward = a.ward
where tb.dep_res = '006' and tb.status='Y'
GROUP BY ph.hn
ORDER BY ph.phy_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
 
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['phy_id'] = $num_risk[$i]['phy_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    $series['ward']= $conv->tis620_to_utf8($num_risk[$i]['ward']);
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();