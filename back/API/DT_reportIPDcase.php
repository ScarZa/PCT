<?php
session_save_path("../session/");
session_start(); 
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
$clinic = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$year = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');

$sql="SELECT tf.cons_id,cs.cons_name 
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".($year-1)."-10-01' and '".($year-1)."-10-31'))m10
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".($year-1)."-11-01' and '".($year-1)."-11-30'))m11
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".($year-1)."-12-01' and '".($year-1)."-12-31'))m12
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-01-01' and '".$year."-01-31'))m01
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-02-01' and '".$year."-02-28'))m02
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-03-01' and '".$year."-03-31'))m03
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-04-01' and '".$year."-04-30'))m04
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-05-01' and '".$year."-05-31'))m05
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-06-01' and '".$year."-06-30'))m06
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-07-01' and '".$year."-07-31'))m07
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-08-01' and '".$year."-08-31'))m08
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".$year."-09-01' and '".$year."-09-30'))m09
,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.cons_id = cs.cons_id and (tf.send_date between '".($year-1)."-10-01' and '".$year."-09-30'))total
FROM jvl_transferBox tf
right outer join jvl_consult cs on cs.cons_id = tf.cons_id
WHERE tf.dep_res = '".$clinic."'
GROUP BY cs.cons_id
#UNION
#SELECT '' cons_id,'รวม' cons_name 
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2020-10-01' and '2020-10-31'))m10
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2020-11-01' and '2020-11-30'))m11
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2020-12-01' and '2020-12-31'))m12
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-01-01' and '2021-01-31'))m01
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-02-01' and '2021-02-28'))m02
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-03-01' and '2021-03-31'))m03
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-04-01' and '2021-04-30'))m04
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-05-01' and '2021-05-31'))m05
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-06-01' and '2021-06-30'))m06
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-07-01' and '2021-07-31'))m07
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-08-01' and '2021-08-31'))m08
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2021-09-01' and '2021-09-30'))m09
#,(SELECT count(tf.cons_id) FROM jvl_transferBox tf WHERE tf.dep_res = '005' and (tf.send_date between '2020-10-01' and '2021-09-30'))total
#FROM jvl_transferBox tf
#right outer join jvl_consult cs on cs.cons_id = tf.cons_id
#WHERE tf.dep_res = '005'
#GROUP BY cs.cons_id"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['cons_id'] = $num_risk[$i]['cons_id'];
    $series['cons_name'] = $conv->tis620_to_utf8($num_risk[$i]['cons_name']);
    $series['m10'] = $num_risk[$i]['m10'];
    $series['m11'] = $num_risk[$i]['m11'];
    $series['m12'] = $num_risk[$i]['m12'];
    $series['m01'] = $num_risk[$i]['m01'];
    $series['m02'] = $num_risk[$i]['m02'];
    $series['m03'] = $num_risk[$i]['m03'];
    $series['m04'] = $num_risk[$i]['m04'];
    $series['m05'] = $num_risk[$i]['m05'];
    $series['m06'] = $num_risk[$i]['m06'];
    $series['m07'] = $num_risk[$i]['m07'];
    $series['m08'] = $num_risk[$i]['m08'];
    $series['m09'] = $num_risk[$i]['m09'];
    $series['total'] = $num_risk[$i]['total'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();