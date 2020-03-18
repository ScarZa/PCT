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
if(!empty($data)){
    $code = "WHERE a.ward ='".$data."'";
}else{
    $code ='';
}

$sql="select a.an,a.hn,a.regdate,p.cid,CONCAT(p.pname,p.fname,' ',p.lname)fullname,p.informaddr from an_stat a 
inner join patient p on a.hn=p.hn and ISNULL(a.dchdate)
".$code."
order by a.an desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['an'] = $num_risk[$i]['an'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    $series['cid']= $num_risk[$i]['cid'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['informaddr']= $conv->tis620_to_utf8($num_risk[$i]['informaddr']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();