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

$sql="select npiq.npiqr_id as id, p.hn,concat(p.pname,p.fname,' ',p.lname) as fullname,v.age_y age,v.pdx,npiq.recdate
from patient p
inner join jvl_npiq npiq on npiq.hn = p.hn
inner JOIN vn_stat v ON v.hn=p.hn
group by npiq.recdate ORDER BY npiq.npiqr_id desc"; 
$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();

    
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['id'] = $num_risk[$i]['id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['age'] = $num_risk[$i]['age'];
    $series['pdx'] = $num_risk[$i]['pdx'];
    $series['recdate'] = DateThai1($num_risk[$i]['recdate']);
    
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();