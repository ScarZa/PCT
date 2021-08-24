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
$plpg_id = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql="SELECT pc.plan_cid,pp.plan_name,pc.begindate,pc.enddate
FROM jvl_plan_commu pc
inner join jvl_plan_progress pp on pp.plpg_id = pc.plan_id
WHERE pc.pc_id = $plpg_id ORDER BY pc.plan_cid asc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['plan_cid'] = $num_risk[$i]['plan_cid'];
    $series['plan_name'] = $conv->tis620_to_utf8($num_risk[$i]['plan_name']);
    $series['begindate'] = DateThai1($num_risk[$i]['begindate']);
    $series['enddate'] = DateThai1($num_risk[$i]['enddate']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();