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
$data = isset($_GET['data'])?$_GET['data']:$_POST['data'];
$sql="SELECT count(a.an)admit,CONCAT(p.pname,p.fname,' ',p.lname)fullname,v.age_y age,v.hn,a.an,oc.pmh
,oc.cc,oc.hpi
from vn_stat v
left outer join patient p on v.hn=p.hn
left outer join opdscreen oc on oc.vn=v.vn
left outer join an_stat a on a.hn = v.hn
WHERE a.an = :an";
$conn_DB->imp_sql($sql);
$execute=array(':an' => $data);
$rslt=$conn_DB->select_a($execute);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['admit'] = $rslt['admit'];
    $fullname=$conv->tis620_to_utf8( $rslt['fullname']);
    $series['fullname'] = $fullname;
    $series['age'] = $rslt['age'];
    $series['hn'] = $rslt['hn'];
    $series['an'] = $rslt['an'];
    $cc=$conv->tis620_to_utf8( $rslt['cc']);
    $hpi=$conv->tis620_to_utf8( $rslt['hpi']);
    $pmh=$conv->tis620_to_utf8( $rslt['pmh']);
    $series['cc'] = $cc;
    //$series['tvstdate'] = DateThai1($rslt['vstdate']);
    $series['hpi'] = $hpi;
    $series['pmh'] = !empty($pmh)?$pmh:'';
    // $series['sex'] = $rslt['sex'];
    // $series['birthday'] = $rslt['birthday'];
    // $series['pdx'] = $rslt['pdx'];
    // $series['dx0'] = $rslt['dx0'];
    // $series['dx1'] = $rslt['dx1'];
    // $series['dx2'] = $rslt['dx2'];
    // $series['dx3'] = $rslt['dx3'];
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>