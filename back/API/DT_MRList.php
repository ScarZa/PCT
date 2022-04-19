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
$sql="SELECT mr.matrix_id,mr.hn,mr.regdate,o.name,cs.clinic_member_status_name as cms
,concat(p.pname,p.fname,' ',p.lname) as fullname
,CASE
    WHEN mr.m_type = 1 THEN 'สุรา'
    WHEN mr.m_type = 2 THEN 'ยาเสพติด'
    ELSE 'สุรา+ยาเสพติด' END as type
,w.name as ward
FROM patient p
inner join jvlmatrix_register mr on mr.hn=p.hn
inner join opduser o on o.doctorcode = mr.doctor
inner join clinic_member_status cs on cs.clinic_member_status_id=mr.m_status
inner join jvl_transferBox tb on tb.hn = mr.hn
LEFT OUTER join an_stat a on a.hn = tb.hn and a.vn = tb.vn
LEFT OUTER join ward w on w.ward = a.ward
group by mr.matrix_id
ORDER BY mr.matrix_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
 
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['matrix_id'] = $num_risk[$i]['matrix_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    //$series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    //$series['type']= $num_risk[$i]['type'];
    //$series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['ward']= $conv->tis620_to_utf8($num_risk[$i]['ward']);
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();