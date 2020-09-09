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
$sql="SELECT cp.lithium_id,cp.hn,cp.regdate,concat(p.pname,p.fname,' ',p.lname) as fullname,w.name as ward
FROM an_stat a
right outer join jvl_lithium cp on a.vn = cp.vn
left outer join ward w on w.ward = a.ward
inner join patient p on cp.hn=p.hn"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['lithium_id']= $num_risk[$i]['lithium_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['ward']= empty($num_risk[$i]['ward'])?'งานผู้ป่วยนอก( OPD )':$conv->tis620_to_utf8($num_risk[$i]['ward']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();