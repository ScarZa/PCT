<?php
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();

$hn = $_GET['data']; 
$sql1 = "SELECT sg.skg_name
FROM jvl_skillgroup sg
ORDER BY sg.skg_id asc";
$conn_DB->imp_sql($sql1);
            $rs1 = $conn_DB->select();
for($ii=0;$ii < count($rs1);$ii++){
    
$sql2 = "SELECT dsi.total_age".$ii." as name
FROM jvl_dsi300 dsi
WHERE dsi.hn='".$hn."' ORDER BY dsi.recdate asc";
$countnum = array();
            $conn_DB->imp_sql($sql2);
            $rs2 = $conn_DB->select();
            $series['name']=$rs1[$ii]['skg_name'];
for($i=0;$i<count($rs2);$i++){
    $countnum[$i] = (double)$rs2[$i]['name'];
    
    $series['data'] = $countnum;
     } 
     array_push($rslt, $series); 
    }
print json_encode($rslt);
$conn_DB->close_PDO();