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
 $sql = "SELECT cons_id,cons_name FROM jvl_consult where depcode = '".$data."' order by cons_id asc";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $user = $connDB->select();
    for($i=0;$i<count($user);$i++){
        $series['id'] = $conv->tis620_to_utf8($user[$i]['cons_id']);
        $series['name'] = $conv->tis620_to_utf8($user[$i]['cons_name']);
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>