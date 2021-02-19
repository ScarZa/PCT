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
$conv=new convers_encode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$conv->utf8_to_tis620($_POST['data']):(isset($_GET['data'])?$conv->utf8_to_tis620($_GET['data']):'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
// if(!empty($data2)){
//     $code = "";
// }else {
//     $code = "(t.status='0' or ISNULL(t.status)) and";
// }
    $sql="SELECT doctorcode FROM opduser WHERE loginname = :user";
    $conn_DB->imp_sql($sql);
    $execute=array(':user'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);

//for($i=0;$i<count($rslt);$i++){
    $series['user'] = $rslt['doctorcode'];
//array_push($result, $series);    
//}
//print_r($result);
print json_encode($series);
$conn_DB->close_PDO();
?>