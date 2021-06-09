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

$sql="select p.hn,concat(p.pname,p.fname,' ',p.lname) as fullname,v.age_y age,v.pdx,pt.name ptname
,(SELECT count(cdi.hn) count FROM jvl_CDI cdi WHERE cdi.hn = p.hn)count
from patient p
inner join jvl_CDI cdi on cdi.hn = p.hn
inner JOIN vn_stat v ON v.hn=p.hn
inner join pttype pt on v.pttype=pt.pttype
GROUP BY cdi.hn ORDER BY cdi.CDI_id desc"; 
$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();

    // $sql2="SELECT count(hn) count FROM jvl_CDI GROUP BY hn ORDER BY CDI_id desc"; 
    // $conn_DB->imp_sql($sql2);
    // $count = $conn_DB->select();    
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['hn'] = $num_risk[$i]['hn'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['age'] = $num_risk[$i]['age'];
    $series['pdx'] = $num_risk[$i]['pdx'];
    $series['ptname'] = $conv->tis620_to_utf8($num_risk[$i]['ptname']);
    $series['count'] = $num_risk[$i]['count'];
    
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();