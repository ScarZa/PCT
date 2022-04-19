<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB2.php";
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
$sql="select a.admdate
,(SELECT COUNT(DISTINCT w.an) from ward_admit_snapshot w inner join ipt i on i.an = w.an WHERE w.snap_date = admdate and w.ward = '$ward'  and w.snap_date = i.regdate) admit
,(SELECT COUNT(DISTINCT an) from ipt WHERE dchdate = admdate and ward ='$ward') dch
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.snap_date=admdate and w.ward ='$ward') Stay
,(select count(DISTINCT w.an) from ward_admit_snapshot w inner join ipt i on i.an = w.an where w.snap_date<=a.admdate and  w.ward ='$ward' and i.regdate between '$month_start' and '$month_end') admitim
,(select count(*) from ipt where dchdate<=a.admdate and ward ='$ward' and (dchdate between '$month_start' and '$month_end')) dchim
from (select vstdate 'admdate'
from ovst
where vstdate between '$month_start' and '$month_end'
group by vstdate) a";
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['admdate'] = DateThai1($num_risk[$i]['admdate']);
    $series['admit']= $num_risk[$i]['admit'];
    $series['dch'] = $num_risk[$i]['dch'];
    $series['Stay'] = $num_risk[$i]['Stay'];
    $series['admitim'] = $num_risk[$i]['admitim'];
    $series['dchim'] = $num_risk[$i]['dchim'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();