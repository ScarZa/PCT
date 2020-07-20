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
$sql = "SELECT * FROM jvl_ipd_first_rec where ipd_fr_id=:ipd_fr_id";
//$conv=new convers_encode();
$connDB->imp_sql($sql);
$execute=array(':ipd_fr_id'=>$data);
$rs=$connDB->select_a($execute);
//print_r($connDB);
    //for($i=0;$i<count($user);$i++){
        $series['hn'] = $rs['hn'];
        $series['vn'] = $rs['vn'];
        $series['an'] = $rs['an'];
    //array_push($rslt, $series);  

    //}
    print json_encode($series);
$connDB->close_PDO();
?>