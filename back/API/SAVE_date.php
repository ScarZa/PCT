<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$conv=new convers_encode();

$sql = "SELECT SUBSTR(recdate,1,11) recdate,recdate recdate_num FROM jvl_save WHERE vn = '".$data."'";

$connDB->imp_sql($sql);
$result=$connDB->select();
      
//print_r($rslt);
print json_encode($result);
$connDB->close_PDO();
?>