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
    $sql="SELECT count(*)total
    ,(select count(*) from an_stat an where !ISNULL(an.dchdate) and ward =99)dc
    ,(select count(*) from an_stat an where an.sex=1 and ward =99)male
    ,(select count(*) from an_stat an where an.sex=2 and ward =99)female
    ,(select count(*) from an_stat an where ISNULL(an.dchdate) and ward =99)stay
    ,(select count(*) from an_stat an where ISNULL(an.dchdate) and an.regdate = SUBSTR(now(),1,11) and ward =99)admit
    ,(select count(*) from an_stat an where an.dchdate = '2021-07-26' and ward =99)dctoday
    ,(select count(*) from an_stat an where an.sex=1 and ISNULL(an.dchdate) and ward =99)maletoday
    ,(select count(*) from an_stat an where an.sex=2 and ISNULL(an.dchdate) and ward =99)femaletoday
    FROM an_stat an
    WHERE an.ward=99";
    $conn_DB->imp_sql($sql);
    //$execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select_a();

//}
//print_r($series);
print json_encode($rslt);
$conn_DB->close_PDO();
?>