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
    $code = "and a.ward ='".$data."'";
}else{
    $code ='';
}
$sql="SELECT smi.smi4_id,smi.hn,smi.regdate,o.name,cs.clinic_member_status_name as cms
,concat(p.pname,p.fname,' ',p.lname) as fullname
,w.name as ward
,CASE
    WHEN smi.smi4_type = 1 THEN 'ดูแลต่อเนื่อง'
    ELSE 'ติดตามในระบบ( HDC )' END as type
FROM an_stat a 
inner join jvlsmiv_regis smi on smi.hn=a.hn
inner join patient p on p.hn=smi.hn
inner join opduser o on o.doctorcode = smi.doctor
inner join clinic_member_status cs on cs.clinic_member_status_id=smi.smi4_status
inner join jvl_smiv smiv on smiv.hn = smi.hn
inner join ward w on w.ward = a.ward
where ISNULL(a.dchdate) $code
GROUP BY smi.smi4_id
ORDER BY smi.smi4_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
 
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['smi4_id'] = $num_risk[$i]['smi4_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    //$series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    //$series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['ward']= $conv->tis620_to_utf8($num_risk[$i]['ward']);
    $series['type']= $num_risk[$i]['type'];
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();