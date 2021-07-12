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
    $sql="SELECT d.drug_name,nct.narcotic_vol,nct.narcotic_frequency,nct.narcotic_age,nct.last_useD,nct.narcotic_stop,nct.narcotic_cause
    FROM jvl_narcotic nct
    inner join jvlmatrix_drug d on d.drug_id = nct.dope_type
    WHERE nct.ipd_fr_id =:ipd_fr_id";
    $conn_DB->imp_sql($sql);
    $execute=array($exe=>$data);
    $rslt=$conn_DB->select($execute);


//print_r($rslt);
$conv=new convers_encode();
for($i=0;$i<count($rslt);$i++){
    $series['drug_name'] = $conv->tis620_to_utf8($rslt[$i]['drug_name']);
    $series['narcotic_vol'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_vol']);
    $series['narcotic_frequency'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_frequency']);
    $series['narcotic_age'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_age']);
    $series['last_useD'] = $conv->tis620_to_utf8($rslt[$i]['last_useD']);
    $series['narcotic_stop'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_stop']);
    $series['narcotic_cause'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_cause']);
array_push($result, $series);    
}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>