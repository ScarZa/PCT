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
$sql="select t.tB_id,t.vn,t.hn,concat(p.pname,p.fname,' ',p.lname) as fullname,w.name as ward,t.send_date,t.status,pr.regdate
from an_stat a
inner join jvl_transferBox t on a.vn = t.vn
left outer join jvlphar_regis pr on pr.hn=t.hn
inner join patient p on p.hn=t.hn 
inner join ward w on w.ward = a.ward
where t.dep_res='006' and ((t.status='0' or ISNULL(t.status)) and ISNULL(pr.regdate)) and t.status!='N'
order by t.tB_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['tB_id']= $num_risk[$i]['tB_id'];
    $series['vn'] = $num_risk[$i]['vn'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['send_date'] = DateThai1($num_risk[$i]['send_date']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['ward']= $conv->tis620_to_utf8($num_risk[$i]['ward']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();