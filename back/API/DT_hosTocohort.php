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
$sql="SELECT count(a.sex)count
,CASE
    WHEN a.sex = 1 THEN 'ชาย'
    ELSE 'หญิง'
END sex,hc.name 
FROM an_stat a 
inner join referin ri on ri.vn = a.vn
inner join hospcode hc on hc.hospcode = ri.refer_hospcode
WHERE a.regdate = SUBSTR(now(),1,11) and a.ward=99
GROUP BY a.sex,hc.name ORDER BY hc.name"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
 
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
      $series['hosname']= $conv->tis620_to_utf8($num_risk[$i]['name']);
      $series['sex'] = $num_risk[$i]['sex'];
      $series['count'] = $num_risk[$i]['count'];
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();