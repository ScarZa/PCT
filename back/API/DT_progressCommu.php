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
$ipd_fr_id = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
// $Y = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
// $ward = isset($_POST['data3'])?$_POST['data3']:(isset($_GET['data3'])?$_GET['data3']:'99');
// if(empty($ward)){$ward = 99;}
// $DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
// $month_start = "$Y-$mont-01";
// $month_end = "$Y-$mont-$DIM";
$sql="SELECT pc.*,ap.pl_name,doc.name
FROM jvl_progress_commu pc
inner join jvl_problem_list ap on ap.pl_id = pc.assessment
inner join doctor doc on doc.code = pc.recorder
inner join jvl_ipd_first_rec fr on fr.ipd_fr_id = pc.ipd_fr_id
WHERE pc.ipd_fr_id = $ipd_fr_id and fr.chk_update = 0 ORDER BY pc.pc_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['pc_id'] = $num_risk[$i]['pc_id'];
    $series['recdate'] = DateThai1($num_risk[$i]['recdate']);
    $series['name'] = $conv->tis620_to_utf8($num_risk[$i]['name']);
    $series['subj']= $conv->tis620_to_utf8($num_risk[$i]['subj']);
    $series['obj'] = $conv->tis620_to_utf8($num_risk[$i]['obj']);
    $series['pl_name'] = $conv->tis620_to_utf8($num_risk[$i]['pl_name']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();