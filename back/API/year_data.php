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
//$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$year = date('Y');
$year_be = $year-10;
    for($i=$year_be;$i<=($year);$i++){
        $series['id'] = $i;
        $series['name'] = $i+543;
    array_push($rslt, $series);  
    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>