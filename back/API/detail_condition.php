<?php 
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');


function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
    $exe = ':ipd_fr_id';
    $sql="SELECT * 
    FROM jvl_condition con 
    WHERE con.ipd_fr_id=:ipd_fr_id and con.chk_update=0";
    $conn_DB->imp_sql($sql);
    $execute=array($exe=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['condition_id'] = $rslt['condition_id'];
    $series['ipd_fr_id'] = $rslt['ipd_fr_id'];
    $series['shape'] = $rslt['shape'];
    $series['skin_color'] = $rslt['skin_color'];
    $series['scab_chk'] = $conv->tis620_to_utf8($rslt['scab_chk']);
    $series['scab_0'] = $rslt['scab_0'];
    $series['scab_1'] = $rslt['scab_1'];
    $series['scab_2'] = $rslt['scab_2'];
    $series['scab_3'] = $rslt['scab_3'];
    $series['scab_4'] = $rslt['scab_4'];
    $series['scab_5'] = $rslt['scab_5'];
    $series['scab_6'] = $rslt['scab_6'];
    $series['scab_7'] = $rslt['scab_7'];
    $series['scab_8'] = $rslt['scab_8'];
    $series['scab_9'] = $rslt['scab_9'];
    $series['detial_scab'] = $conv->tis620_to_utf8($rslt['detial_scab']);
    $series['swelling_chk'] = $conv->tis620_to_utf8($rslt['swelling_chk']);
    $series['swelling'] = $conv->tis620_to_utf8($rslt['swelling']);
    $series['movement'] = $conv->tis620_to_utf8($rslt['movement']);
    $series['disabled_chk'] = $conv->tis620_to_utf8($rslt['disabled_chk']);
    $series['disabled'] = $conv->tis620_to_utf8($rslt['disabled']);
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>