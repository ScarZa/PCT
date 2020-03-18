<?php
session_save_path("../session/");
session_start(); 
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
if($_SESSION['status_user']=='ADMIN'){
    $code ='';
}else{
    $code ="where t.dep_send = '".$_SESSION['depcode']."'";
}
$sql="select t.tB_id,t.hn,concat(p.pname,p.fname,' ',p.lname) as fullname,t.send_date,dep.department
,CASE
    WHEN t.status = 'N' THEN 'ไม่รับเคส'
    WHEN t.status = 'Y' THEN 'รับเคสแล้ว'
    ELSE 'อยู่ระหว่างดำเนินการ' END as status
from patient p 
inner join jvl_transferBox t on p.hn=t.hn 
inner join kskdepartment dep on dep.depcode = t.dep_res
$code
order by t.tB_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['tB_id'] = $num_risk[$i]['tB_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['send_date'] = DateThai1($num_risk[$i]['send_date']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['status']= $num_risk[$i]['status'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();