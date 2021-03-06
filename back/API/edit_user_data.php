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
$sql = "SELECT * FROM jvlmatrix_user WHERE user_id=:user_id";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    //$user = $connDB->select();
    $execute=array(':user_id'=>$data);
    $user=$connDB->select_a($execute);
    //for($i=0;$i<count($user);$i++){
        $series['user_id'] = $user['user_id'];
        $series['doctorcode'] = $user['doctorcode'];
        $series['username'] = $user['username'];
        $series['depcode'] = $user['clinic'];
        $series['status_user'] = $conv->tis620_to_utf8($user['status_user']);
    array_push($rslt, $series);    
    //}
    print json_encode($rslt);
$connDB->close_PDO();
?>