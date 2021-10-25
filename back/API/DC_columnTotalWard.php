<?php
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$month = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$Y = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
//$ward = isset($_POST['data3'])?$_POST['data3']:(isset($_GET['data3'])?$_GET['data3']:'');
$DIM=cal_days_in_month(CAL_GREGORIAN,$month,$Y);
  
  $code0 = "regdate BETWEEN '".$Y."-".$month."-01' and '".$Y."-".$month."-".$DIM."'";
  //$code1 ="ward=".$ward;

    $process = array('คงพยาบาล','admit','discart');
    foreach($process as $key=>$value){
     $processname = $value;
     if($key == 0){
      $code = "(select count(*) from ipt where regdate<=s.snap_date and (dchdate>s.snap_date or dchdate is null)) Stay";
     }elseif($key == 1){
      $code = "(SELECT COUNT(DISTINCT an) from an_stat a2 WHERE a2.regdate = s.snap_date) admit";
     }elseif($key == 2){
      $code = "(SELECT COUNT(DISTINCT an) from an_stat a3 WHERE a3.dchdate = s.snap_date) dc";
     }else{
       //$code = "(select count(*) from ipt where regdate<=a.admdate  and ward =99) collect";
     }

$countnum = array();

//$DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
$month_start = "$Y-$month-01";
$month_end = "$Y-$month-$DIM";
$sql = "select $code 
from ward_admit_snapshot  s
where s.snap_date between '$month_start' and '$month_end' GROUP BY s.snap_date";
            $conn_DB->imp_sql($sql);
            $rs = $conn_DB->select();
            //print_r($rs);
            foreach($rs as $key2=>$value2){ 
              foreach($value2 as $key3=>$value3){
                //echo $key3.'=>'.$value3.'<br>';
                $countnum[$key2]= (int) $value3;  
              }
              
                 
    }
    $series['name'] = $processname;
    $series['data'] = $countnum;

     array_push($rslt, $series); 
  }
print json_encode($rslt);
$conn_DB->close_PDO();