<?php
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

$conn_DB = new EnDeCode();
$conv=new convers_encode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
// $mont = $_GET['data'];
// $Y = $_GET['data2'];
// $DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
// $month_start = "$Y-$mont-01";
// $month_end = "$Y-$mont-$DIM";
$sql = "SELECT count(an.an)count
,CASE
    WHEN an.sex = 1 THEN 'ชาย'
    ELSE 'หญิง'
END sex
FROM an_stat an
WHERE an.ward = 99 GROUP BY an.sex";
$conn_DB->imp_sql($sql);
$rs = $conn_DB->select();
for ($i = 0; $i < count($rs); $i++) {
    $series[$i] = array($rs[$i]['sex'], (int) $rs[$i]['count']);
}
$jsonArray = array(
    array('name' => 'Admit',
        'data' => $series));
print json_encode($jsonArray);
$conn_DB->close_PDO();
