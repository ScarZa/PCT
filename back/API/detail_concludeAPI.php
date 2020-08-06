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
//$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
    $sql="SELECT cn.topic,cn.begin_date,cn.end_date,cn.recdate,doc.name FROM jvl_conclude_nurse cn
    inner join doctor doc on doc.code = cn.recorder
    WHERE cn.ipd_fr_id=:ipd_fr_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select($execute);


//print_r($rslt);
$conv=new convers_encode();
for($i=0;$i<count($rslt);$i++){
  $series['topic']=$conv->tis620_to_utf8( $rslt[$i]['topic']);
    $series['begin_date'] = DateThai1( $rslt[$i]['begin_date']);
    $series['end_date'] = DateThai1( $rslt[$i]['end_date']);
    $series['recdate'] = DateThai1( $rslt[$i]['recdate']);
    $series['name'] = $conv->tis620_to_utf8($rslt[$i]['name']);
array_push($result, $series);    
}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>