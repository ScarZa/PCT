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
$sql = "SELECT *  FROM clinic_member_status order by clinic_member_status_id";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $user = $connDB->select();
    for($i=0;$i<count($user);$i++){
        $series['id'] = $conv->tis620_to_utf8($user[$i]['clinic_member_status_id']);
        $series['name'] = $conv->tis620_to_utf8($user[$i]['clinic_member_status_name']);
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>