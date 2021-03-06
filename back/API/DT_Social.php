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
$select = ($data=='1')?'01':'02';

$sql="select s.social_id,s.vn,s.hn,s.vdate,concat(p.pname,p.fname,' ',p.lname) as fullname
,o.name
from patient p
inner join jvl_social".$select." s on p.hn = s.hn
inner join opduser o on o.loginname = s.recorder
ORDER BY s.social_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['id'] = $num_risk[$i]['social_id'];
    $series['vn'] = $num_risk[$i]['vn'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['vdate'] = DateThai1($num_risk[$i]['vdate']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name'] = $conv->tis620_to_utf8($num_risk[$i]['name']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();