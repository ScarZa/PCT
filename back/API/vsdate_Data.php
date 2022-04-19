<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT recdate,vn,SUBSTR(regdate,11,6)rectime
,CASE
WHEN processSMIV = 1 THEN 'ประเมินผู้ป่วยใหม่'
WHEN processSMIV = 2 THEN 'ติดตามผู้ป่วย SMI-V'
ELSE 'ผู้ป่วย SMI-V ทำซ้ำ'
END smiv_status 
FROM jvl_smiv WHERE hn = '".$data."' and !isnull(confirm) ORDER BY recdate desc";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $user = $connDB->select();
    for($i=0;$i<count($user);$i++){
        $series['recdate'] = DateThai1($user[$i]['recdate']);
        $series['rectime'] = $user[$i]['rectime'];
        $series['vn'] = $user[$i]['vn'];
        $series['smiv_status'] = $user[$i]['smiv_status'];
        //$series['an'] = $user[$i]['an'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>