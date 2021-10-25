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
$sql="SELECT cm.commu_id
,CASE
    WHEN ISNULL(ifr.ipd_fr_id) THEN 'ยังไม่แรกรับ'
    ELSE 'ลงทะเบียนแรกรับแล้ว'
END frchk
,CASE
    WHEN ISNULL(pc.pc_id) THEN 'ยังไม่ปรับระเมิน'
    ELSE 'ประเมินแล้ว'
END pcchk
,cm.hn,cm.regdate,o.name,cs.clinic_member_status_name as cms
,concat(p.pname,p.fname,' ',p.lname) as fullname
,dep.department
FROM an_stat a
inner join patient p on p.hn = a.hn
inner join jvlcommunity_regis cm on cm.hn=a.hn
inner join opduser o on o.doctorcode = cm.doctor
inner join clinic_member_status cs on cs.clinic_member_status_id=cm.comm_status
inner join jvl_transferBox tb on tb.hn = cm.hn
left outer join jvl_ipd_first_rec ifr on ifr.vn = tb.vn
left outer join jvl_progress_commu pc on pc.ipd_fr_id = ifr.ipd_fr_id
inner join kskdepartment dep on dep.depcode = tb.dep_send
where tb.dep_res = '005' and tb.status='Y' and ISNULL(a.dchdate)
GROUP BY cm.commu_id;"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();

    $sql2="SELECT od.name FROM opduser od 
    inner join jvl_transferBox tb on tb.sender = od.loginname 
    inner join jvlcommunity_regis cm on tb.hn = cm.hn
    ORDER BY cm.commu_id desc"; 
    $conn_DB->imp_sql($sql2);
        $num_risk2 = $conn_DB->select();    
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['commu_id'] = $num_risk[$i]['commu_id'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    //$series['cms']= $conv->tis620_to_utf8($num_risk[$i]['cms']);
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    //$series['type']= $num_risk[$i]['type'];
    //$series['department']= $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['sender']= $conv->tis620_to_utf8($num_risk2[$i]['name']);
    $series['frchk'] = $num_risk[$i]['frchk'];
    $series['pcchk'] = $num_risk[$i]['pcchk'];
    array_push($rslt, $series);    
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();