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
//$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');

$sql="select p.hn vhn,concat(p.pname,p.fname,' ',p.lname) as fullname,v.age_y age
,(SELECT v.pdx from vn_stat v
inner join patient p on p.hn = v.hn
WHERE v.hn=vhn
ORDER BY v.vn desc limit 1) pdx
,pt.name ptname
from patient p
inner join jvl_dsi300 dsi on dsi.hn = p.hn
inner JOIN vn_stat v ON v.hn=p.hn
inner join pttype pt on v.pttype=pt.pttype
GROUP BY dsi.hn ORDER BY dsi.dsi300_id desc
"; 
$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();

    $sql2="SELECT count(hn) count FROM jvl_dsi300 GROUP BY hn ORDER BY dsi300_id desc"; 
    $conn_DB->imp_sql($sql2);
    $count = $conn_DB->select();    
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['hn'] = $num_risk[$i]['vhn'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['age'] = $num_risk[$i]['age'];
    $series['pdx'] = $num_risk[$i]['pdx'];
    $series['ptname'] = $conv->tis620_to_utf8($num_risk[$i]['ptname']);
    $series['count'] = $count[$i]['count'];
    
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();