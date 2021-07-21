<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql="SELECT * FROM jvl_narcotic WHERE ipd_fr_id = :ipd_fr_id ORDER BY nct_id asc";
$connDB->imp_sql($sql);
$execute=array(':ipd_fr_id' => $data);
$rslt=$connDB->select($execute);
//print_r($rslt);
$conv=new convers_encode();
for($i=0;$i<count($rslt);$i++){
  $series['nct_id'] = $rslt[$i]['nct_id'];
  $series['ipd_fr_id'] = $rslt[$i]['ipd_fr_id'];
  $series['dope_type'] = $rslt[$i]['dope_type'];
  $series['narcotic_vol'] = $rslt[$i]['narcotic_vol'];
  $series['narcotic_frequency'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_frequency']);
  $series['narcotic_age'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_age']);
  $series['last_useD'] = $rslt[$i]['last_useD'];
  $series['narcotic_stop'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_stop']);
  $series['narcotic_cause'] = $conv->tis620_to_utf8($rslt[$i]['narcotic_cause']);
array_push($result, $series);    
}
//print_r($result);
print json_encode($result);
$connDB->close_PDO();
?>