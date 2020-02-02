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
$sql="SELECT sc.social_id,sc.hn,sc.regdate,o.name,cs.clinic_member_status_name as cms
,concat(p.pname,p.fname,' ',p.lname) as fullname
,dep.department
FROM patient p
inner join jvlsocial_regis sc on sc.hn=p.hn
inner join opduser o on o.doctorcode = sc.doctor
inner join clinic_member_status cs on cs.clinic_member_status_id=sc.soc_status
inner join jvl_transferBox tb on tb.hn = sc.hn
inner join kskdepartment dep on dep.depcode = tb.dep_send
where tb.dep_res = '008' and tb.status='Y'
ORDER BY sc.social_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();

    $sql2="SELECT od.name FROM opduser od 
    inner join jvl_transferBox tb on tb.sender = od.loginname 
    inner join jvlsocial_regis sc on tb.hn = sc.hn
    ORDER BY sc.social_id desc"; 
    $conn_DB->imp_sql($sql2);
        $num_risk2 = $conn_DB->select();    
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['social_id'] = $num_risk[$i]['social_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    //$series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    //$series['type']= $num_risk[$i]['type'];
    //$series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['sender']= $conv->tis620_to_utf8($num_risk2[$i]['name']);
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();