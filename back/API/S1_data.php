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

$sql = "SELECT s1_4 FROM jvl_save WHERE vn = '".$data."' and recdate='".$data2."' ORDER BY recdate asc";

//"SELECT s1_1,s1_2,s1_3,s1_4 FROM jvl_save WHERE vn = '".$data."' ORDER BY recdate asc";

    $connDB->imp_sql($sql);
    $user = $connDB->select();
      
       for($i=0;$i<count($user);$i++){
          $series['s1_4'] = $user[$i]['s1_4'];
          // $series['s1_2'] = $user[$i]['s1_2'];
          // $series['s1_3'] = $user[$i]['s1_3'];
          // $series['s1_4'] = $user[$i]['s1_4'];
          array_push($rslt, $series);
      }
      
    //print_r($rslt);
    print json_encode($rslt);
$connDB->close_PDO();
?>