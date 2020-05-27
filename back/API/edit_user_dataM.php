<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT * FROM jvl_mappingDU WHERE mDU_id=:mDU_id";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    //$user = $connDB->select();
    $execute=array(':mDU_id'=>$data);
    $user=$connDB->select_a($execute);
    //for($i=0;$i<count($user);$i++){
        $series['mDU_id'] = $user['mDU_id'];
        $series['doctorcode'] = $user['doctorcode'];
        $series['depcode'] = $user['depcode'];
    array_push($rslt, $series);    
    //}
    print json_encode($rslt);
$connDB->close_PDO();
?>