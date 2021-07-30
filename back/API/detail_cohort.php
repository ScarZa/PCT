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
$conv=new convers_encode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$month = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$year = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
$ward = isset($_POST['data3'])?$_POST['data3']:(isset($_GET['data3'])?$_GET['data3']:'');
if(!empty($ward)){
    $DIM=cal_days_in_month(CAL_GREGORIAN,$month,$year);
    $code = "an.ward='".$ward."' and an.regdate BETWEEN '".$year."-".$month."-01' and '".$year."-".$month."-".$DIM."'";
    $code1 ="an.ward=".$ward;
    $code2 = "an.ward='".$ward."' and an.dchdate BETWEEN '".$year."-".$month."-01' and '".$year."-".$month."-".$DIM."'";
}else {
    $code = "an.ward='99' ";
    $code1 ="an.ward='99' ";
    $code2 = "an.ward='99' and an.dchdate BETWEEN '2021-07-05' and substr(now(),1,11)";
}
    $sql="SELECT count(*)total,w.name
    ,(select count(*) from an_stat an where ".$code2.")dc
    ,(select count(*) from an_stat an where an.sex=1 and ".$code.")male
    ,(select count(*) from an_stat an where an.sex=2 and ".$code.")female
    ,(select count(*) from an_stat an where ISNULL(an.dchdate) and ".$code1.")stay
    ,(select count(*) from an_stat an where ISNULL(an.dchdate) and an.regdate = SUBSTR(now(),1,11) and ".$code1.")admit
    ,(select count(*) from an_stat an where an.dchdate = SUBSTR(now(),1,11) and ".$code1.")dctoday
    ,(select count(*) from an_stat an where an.sex=1 and ISNULL(an.dchdate) and ".$code1.")maletoday
    ,(select count(*) from an_stat an where an.sex=2 and ISNULL(an.dchdate) and ".$code1.")femaletoday
    FROM an_stat an
    inner join ward w on w.ward = an.ward
    WHERE ".$code;
    $conn_DB->imp_sql($sql);
    //$execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select_a();
    array_push($rslt, $conv->tis620_to_utf8($rslt['name']));
    unset($rslt['name']);
//}
//print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();
?>