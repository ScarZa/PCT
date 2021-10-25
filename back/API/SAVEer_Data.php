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
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
$conv=new convers_encode();

$sql = "SELECT * FROM jvl_save WHERE vn = '".$data."' and place = 1 and SUBSTR(recdate,1,11) = '".$data2."'";

    $connDB->imp_sql($sql);
    $save = $connDB->select();
    $enS3 =   $conv->tis620_to_utf8($save[0]['s3_text']);
    $save[0]['s3_text'] = $enS3; 
      
    //print_r($rslt);
    print json_encode($save);
$connDB->close_PDO();
?>