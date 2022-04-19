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
$sql="select smi.smiv_id,smi.vn,smi.hn,concat(p.pname,p.fname,' ',p.lname) as fullname,w.name as ward,smi.regdate
,if(!ISNULL(smir.recdate),'ลงทะเบียนแล้ว','ยังไม่ลงทะเบียน')regischk
,CASE
    WHEN smi.processSMIV = 1 THEN 'ประเมินผู้ป่วยใหม่'
    WHEN smi.processSMIV = 2 THEN 'ติดตามผู้ป่วย SMI-V'
    ELSE 'ผู้ป่วย SMI-V ทำซ้ำ'
END smiv_status
FROM an_stat a 
right OUTER join patient p on p.hn=a.hn
inner join jvl_smiv smi on smi.hn = p.hn
inner join jvlsmiv_regis smir on smir.hn = smi.hn
left outer join ward w on w.ward = a.ward
WHERE ISNULL(smi.confirm) and smi.processSMIV in(2,3)
GROUP BY smi.smiv_id
order by smi.smiv_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['smiv_id']= $num_risk[$i]['smiv_id'];
    $series['vn'] = $num_risk[$i]['vn'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['ward']= $conv->tis620_to_utf8($num_risk[$i]['ward']);
    $series['regischk'] = $num_risk[$i]['regischk'];
    $series['smiv_status'] = $num_risk[$i]['smiv_status'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();