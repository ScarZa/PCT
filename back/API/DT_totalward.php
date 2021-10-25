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
//$ward = isset($_POST['data3'])?$_POST['data3']:(isset($_GET['data3'])?$_GET['data3']:'99');
if(empty($ward)){$ward = 99;}
$DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
$month_start = "$Y-$mont-01";
$month_end = "$Y-$mont-$DIM";
$sql="select s.snap_date admdate
,(select count(*) from ipt where regdate<=s.snap_date and (dchdate>s.snap_date or dchdate is null)) stay
,(SELECT COUNT(DISTINCT an) from an_stat a2 WHERE a2.regdate = s.snap_date) admit
,(SELECT COUNT(DISTINCT an) from an_stat a3 WHERE a3.dchdate = s.snap_date) dchdate
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '01' and w.snap_date=s.snap_date) m1
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '04' and w.snap_date=s.snap_date) m2
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '05' and w.snap_date=s.snap_date) m3
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '02' and w.snap_date=s.snap_date) w1
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '06' and w.snap_date=s.snap_date) s1
,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '99' and w.snap_date=s.snap_date) c1
from ward_admit_snapshot  s
where s.snap_date between '$month_start' and '$month_end' GROUP BY s.snap_date"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['admdate'] = DateThai1($num_risk[$i]['admdate']);
    $series['stay']= $num_risk[$i]['stay'];
    $series['admit'] = $num_risk[$i]['admit'];
    $series['dchdate'] = $num_risk[$i]['dchdate'];
    $series['m1'] = $num_risk[$i]['m1'];
    $series['m2'] = $num_risk[$i]['m2'];
    $series['m3'] = $num_risk[$i]['m3'];
    $series['w1'] = $num_risk[$i]['w1'];
    $series['s1'] = $num_risk[$i]['s1'];
    $series['c1'] = $num_risk[$i]['c1'];
    array_push($rslt, $series);    
    $avgstay += $num_risk[$i]['stay'];
    $avgadmit += $num_risk[$i]['admit'];
    $avgdc += $num_risk[$i]['dchdate'];
    $avgm1 += $num_risk[$i]['m1'];
    $avgm2 += $num_risk[$i]['m2'];
    $avgm3 += $num_risk[$i]['m3'];
    $avgw1 += $num_risk[$i]['w1'];
    $avgs1 += $num_risk[$i]['s1'];
    $avgc1 += $num_risk[$i]['c1'];
    }
    $series['admdate'] = 'เฉลี่ย';
    $series['stay']= ROUND($avgstay/$i);
    $series['admit'] = ROUND($avgadmit/$i);
    $series['dchdate'] = ROUND($avgdc/$i);
    $series['m1'] = ROUND($avgm1/$i);
    $series['m2'] = ROUND($avgm2/$i);
    $series['m3'] = ROUND($avgm3/$i);
    $series['w1'] = ROUND($avgw1/$i);
    $series['s1'] = ROUND($avgs1/$i);
    $series['c1'] = ROUND($avgc1/$i);
    array_push($rslt, $series);
print json_encode($rslt);
$conn_DB->close_PDO();