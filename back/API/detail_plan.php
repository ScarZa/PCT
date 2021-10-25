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
    $sql="SELECT plan_name FROM jvl_plan_commu pc inner join jvl_plan_progress pp on pp.plpg_id = plan_id where plan_cid= :plan_cid";
    $conn_DB->imp_sql($sql);
    $execute=array(':plan_cid'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    
    $series['plan_name'] = $conv->tis620_to_utf8( $rslt['plan_name']);
     
//}
//print_r($result);
print json_encode($series);
$conn_DB->close_PDO();
?>