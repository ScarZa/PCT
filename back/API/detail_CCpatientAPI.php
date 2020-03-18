<?php 
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');


function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
if(!empty($data2)){
    $code = "";
}else {
    $code = "(t.status='0' or ISNULL(t.status)) and";
}
    $sql="select t.tB_id,p.hn,p.pname,p.fname,p.lname,p.informaddr,p.cid,p.birthday,m.name as mrname,v.vn,v.pdx,v.dx0,v.dx1,v.dx2,v.dx3,v.dx4,v.dx5
    ,d.department,c.cons_name,t.cause,w.name as ward
    ,(SELECT d.name FROM vn_stat v inner join doctor d on d.code = v.dx_doctor WHERE v.vn=t.vn and t.tB_id=:tB_id)doctor_name
    ,(SELECT o.name FROM jvl_transferBox t inner join opduser o on o.loginname = t.sender WHERE ".$code." t.tB_id=:tB_id)sender_name
        from patient p 
        LEFT OUTER JOIN vn_stat v ON v.hn=p.hn
        LEFT OUTER JOIN an_stat a on a.vn =v.vn
        LEFT OUTER JOIN ward w on w.ward = a.ward
        inner join jvl_transferBox t on t.vn = v.vn
        inner join kskdepartment d on d.depcode = t.dep_res
        inner join jvl_consult c on c.cons_id = t.cons_id
        left outer join marrystatus m on p.marrystatus=m.code 
        where ".$code." t.tB_id=:tB_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':tB_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['tB_id'] = $rslt['tB_id'];
    $pname=$conv->tis620_to_utf8( $rslt['pname']);
    $fname=$conv->tis620_to_utf8( $rslt['fname']);
    $lname=$conv->tis620_to_utf8( $rslt['lname']);
    $series['fullname'] = $pname.$fname.' '.$lname;
    $series['hn'] = $rslt['hn'];
    $series['informaddr'] = $conv->tis620_to_utf8( $rslt['informaddr']);
    $series['cid'] = $rslt['cid'];
    $series['birthday'] = DateThai1($rslt['birthday']);
    $series['mrname'] = $conv->tis620_to_utf8( $rslt['mrname']);
    $series['pdx'] = $rslt['pdx'];
    $series['dx0'] = $rslt['dx0'];
    $series['dx1'] = $rslt['dx1'];
    $series['dx2'] = $rslt['dx2'];
    $series['dx3'] = $rslt['dx3'];
    $series['dx4'] = $rslt['dx4'];
    $series['dx5'] = $rslt['dx5'];
    $series['ward'] = $conv->tis620_to_utf8($rslt['ward']);
    $series['department'] = $conv->tis620_to_utf8($rslt['department']);
    $series['cons_name'] = $conv->tis620_to_utf8($rslt['cons_name']);
    $series['cause'] = $conv->tis620_to_utf8($rslt['cause']);
    $series['doctor_name'] = $conv->tis620_to_utf8($rslt['doctor_name']);
    $series['sender_name'] = $conv->tis620_to_utf8($rslt['sender_name']);
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>