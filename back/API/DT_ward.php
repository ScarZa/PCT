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
$mont = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$Y = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
$ward = isset($_POST['data3'])?$_POST['data3']:(isset($_GET['data3'])?$_GET['data3']:'99');
if(empty($ward)){$ward = 99;}
$DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
$month_start = "$Y-$mont-01";
$month_end = "$Y-$mont-$DIM";

$sql="select vstdate 'admdate'
from ovst
where vstdate between '".$month_start."' and '".$month_end."'
group by vstdate";
    $conn_DB->imp_sql($sql);
    $admitdate = $conn_DB->select();
    //print_r($num_7save);
    $conv=new convers_encode();
    
    for($i=0;$i<count($admitdate);$i++){
      $series['admdate'] = DateThai1($admitdate[$i]['admdate']);
    $sqladmit = "SELECT COUNT(DISTINCT w.an) admit from ward_admit_snapshot w inner join ipt i on i.an = w.an WHERE w.snap_date = '".$admitdate[$i]['admdate']."' and w.ward = '$ward'  and w.snap_date = i.regdate";
    $conn_DB->imp_sql($sqladmit);
    $admit = $conn_DB->select_a();
//print_r($admit);
if(count($admit) !=0){
  $series['admit'] = $admit['admit'];
     
}

    $sqldch = "SELECT COUNT(DISTINCT an) dch from ipt WHERE dchdate = '".$admitdate[$i]['admdate']."' and ward ='$ward'";
    $conn_DB->imp_sql($sqldch);
    $dch = $conn_DB->select_a();
//print_r($dch);
if(count($dch) !=0){
  $series['dch'] = $dch['dch'];
    
}
    
$sqlStay = "SELECT COUNT(DISTINCT an) Stay from ward_admit_snapshot w WHERE w.snap_date='".$admitdate[$i]['admdate']."' and w.ward ='$ward'";
    $conn_DB->imp_sql($sqlStay);
    $Stay = $conn_DB->select_a();
//print_r($Stay);
if(count($Stay) !=0){
  $series['Stay'] = $Stay['Stay'];
    
}

$sqladmitim = "select count(DISTINCT w.an) admitim from ward_admit_snapshot w inner join ipt i on i.an = w.an where w.snap_date<= '".$admitdate[$i]['admdate']."' and  w.ward ='$ward' and i.regdate between '$month_start' and '$month_end'";
    $conn_DB->imp_sql($sqladmitim);
    $admitim = $conn_DB->select_a();
//print_r($admitim);
if(count($admitim) !=0){
  $series['admitim'] = $admitim['admitim'];
    
}

$sqldchim = "select count(*) dchim from ipt where dchdate <= '".$admitdate[$i]['admdate']."' and ward ='$ward' and (dchdate between '$month_start' and '$month_end')";
    $conn_DB->imp_sql($sqldchim);
    $dchim = $conn_DB->select_a();
//print_r($dchim);
if(count($dchim) !=0){
  $series['dchim'] = $dchim['dchim'];
     
}
array_push($rslt, $series);
    }


print json_encode($rslt);
$conn_DB->close_PDO();