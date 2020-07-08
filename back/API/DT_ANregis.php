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

$sql="select fr.ipd_fr_id,a.an,a.hn,a.regdate,CONCAT(p.pname,p.fname,' ',p.lname)fullname,w.name
,CASE
    WHEN !ISNULL(ms.mental_id) THEN 'ประเมินแล้ว'
    ELSE 'ยังไม่ประเมิน'
END mental
from an_stat a 
inner join patient p on a.hn=p.hn and ISNULL(a.dchdate)
inner join ward w on w.ward = a.ward
inner join jvl_ipd_first_rec fr on fr.an = a.an
left outer join jvl_mental_state ms on ms.ipd_fr_id = fr.ipd_fr_id
".$code."
order by a.an desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
      $series['ipd_fr_id'] = $num_risk[$i]['ipd_fr_id'];
    $series['an'] = $num_risk[$i]['an'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    $series['mental'] = $num_risk[$i]['mental'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();