<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql="SELECT dsi.recdate,ag.ag_name,dsi.total_age0,dsi.total_age1,dsi.total_age2,dsi.total_age3,dsi.total_age4,ou.name
FROM jvl_dsi300 dsi
inner join jvl_agegroup ag on ag.ag_id = dsi.agegroup
inner join opduser ou on ou.loginname = dsi.recorder
WHERE dsi.hn ='".$data."'"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
 
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['recdate'] = DateThai1($num_risk[$i]['recdate']);
    $series['ag_name'] = $conv->tis620_to_utf8($num_risk[$i]['ag_name']);
    $GM = explode(".", $num_risk[$i]['total_age0']);
    $series['total_age0'] = ($GM[1]==00)?$GM[0]." ปี ":$GM[0]." ปี ".$GM[1]." เดือน";
    $FM = explode(".", $num_risk[$i]['total_age1']);
    $series['total_age1'] = ($FM[1]==00)?$FM[0]." ปี ":$FM[0]." ปี ".$FM[1]." เดือน";
    $RL = explode(".", $num_risk[$i]['total_age2']);
    $series['total_age2'] = ($RL[1]==00)?$RL[0]." ปี ":$RL[0]." ปี ".$RL[1]." เดือน";
    $EL = explode(".", $num_risk[$i]['total_age3']);
    $series['total_age3'] = ($EL[1]==00)?$EL[0]." ปี ":$EL[0]." ปี ".$EL[1]." เดือน";
    $PS = explode(".", $num_risk[$i]['total_age4']);
    $series['total_age4'] = ($PS[1]==00)?$PS[0]." ปี ":$PS[0]." ปี ".$PS[1]." เดือน";
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();