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
$sql="SELECT smi.smi4_id,a.an,smi.hn,a.dchdate
,concat(p.pname,p.fname,' ',p.lname) as fullname
,w.name as ward,cs.clinic_member_status_name as cms
,CASE
    WHEN smiv.confirm = 1 THEN 'ดูแลต่อเนื่อง'
    WHEN smiv.confirm = 2 THEN 'ติดตามในระบบ HDC'
    WHEN smiv.confirm = 3 THEN 'ไม่เป็นผู้ป่วย SMI-V'
    ELSE 'อยู่ระหว่างการพิจารณา'
    END type
FROM an_stat a 
inner join jvlsmiv_regis smi on smi.hn=a.hn
inner join patient p on p.hn=smi.hn
inner join opduser o on o.doctorcode = smi.doctor
inner join clinic_member_status cs on cs.clinic_member_status_id=smi.smi4_status
inner join jvl_smiv smiv on smiv.hn = smi.hn
inner join ward w on w.ward = a.ward
where !ISNULL(a.dchdate) $code
GROUP BY smi.smi4_id
ORDER BY a.an desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
 
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['smi4_id'] = $num_risk[$i]['smi4_id'];
    $series['an'] = $num_risk[$i]['an'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['dchdate'] = DateThai1($num_risk[$i]['dchdate']);
    //$series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    //$series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['ward']= $conv->tis620_to_utf8($num_risk[$i]['ward']);
    $series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['type']= $num_risk[$i]['type'];
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();