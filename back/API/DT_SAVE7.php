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
// $select = ($data=='1')?'01':'02';
if(!empty($data)){
    $code = "and a.ward ='".$data."'";
}else{
    $code ='';
}
$sql="SELECT s.vn,a.an,s.hn,concat(p.pname,p.fname,' ',p.lname)fullname,w.name
FROM jvl_save s
inner join patient p on p.hn = s.hn
inner join an_stat a on a.vn = s.vn
inner join ward w on w.ward = a.ward
WHERE (SELECT place FROM jvl_save WHERE vn = s.vn ORDER BY save_id desc limit 1) = 3 and s.place=3
and (SELECT recdate FROM jvl_save WHERE vn = s.vn ORDER BY save_id desc limit 1) = s.recdate
and DATEDIFF(NOW(),(SELECT recdate FROM jvl_save WHERE vn = s.vn ORDER BY save_id desc limit 1)) >=7 $code"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['vn'] = $num_risk[$i]['vn'];
    $series['an'] = $num_risk[$i]['an'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name'] = $conv->tis620_to_utf8($num_risk[$i]['name']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();