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
$sql="SELECT mp.mDU_id,d.name,dep.department
FROM jvl_mappingDU mp
inner join doctor d on d.code = mp.doctorcode
inner join kskdepartment dep on dep.depcode = mp.depcode
ORDER BY mp.mDU_id"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['mDU_id']= $num_risk[$i]['mDU_id'];
    $series['name'] = $conv->tis620_to_utf8($num_risk[$i]['name']);
    $series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();