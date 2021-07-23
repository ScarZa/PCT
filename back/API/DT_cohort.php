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
$DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
$month_start = "$Y-$mont-01";
$month_end = "$Y-$mont-$DIM";
$sql="select a.admdate
,(select count(*) from ipt where regdate=a.admdate and ward =99) 'admit'
,(select count(*) from ipt where dchdate=a.admdate and ward =99) 'dch'
,(select count(*) from ipt where regdate<=a.admdate and (dchdate>a.admdate or dchdate is null) and ward =99) 'Stay'
,(select count(*) from ipt where regdate<=a.admdate  and ward =99) 'collect'
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 10705)hos01
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11030)hos02
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11031)hos03
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11032)hos04
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11033)hos05
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11034)hos06
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11035)hos07
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11036)hos08
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11037)hos09
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11038)hos10
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11039)hos11
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 11447)hos12
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 14133)hos13
,(SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = 28861)hos14
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
    $series['collect'] = $num_risk[$i]['collect'];
    $series['hos01'] = $num_risk[$i]['hos01'];
    $series['hos02'] = $num_risk[$i]['hos02'];
    $series['hos03'] = $num_risk[$i]['hos03'];
    $series['hos04'] = $num_risk[$i]['hos04'];
    $series['hos05'] = $num_risk[$i]['hos05'];
    $series['hos06'] = $num_risk[$i]['hos06'];
    $series['hos07'] = $num_risk[$i]['hos07'];
    $series['hos08'] = $num_risk[$i]['hos08'];
    $series['hos09'] = $num_risk[$i]['hos09'];
    $series['hos10'] = $num_risk[$i]['hos10'];
    $series['hos11'] = $num_risk[$i]['hos11'];
    $series['hos12'] = $num_risk[$i]['hos12'];
    $series['hos13'] = $num_risk[$i]['hos13'];
    $series['hos14'] = $num_risk[$i]['hos14'];
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();