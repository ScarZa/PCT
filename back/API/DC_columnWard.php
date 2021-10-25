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

    $process = array('พุทธรักษา','จำปาทอง','ราชาวดี',"ลีลาวดี","ฉัตรชบา","Cohort ward");
    foreach($process as $key=>$value){
     $processname = $value;
     if($key == 0){
      $code = "(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '01' and w.snap_date=s.snap_date) m1";
     }elseif($key == 1){
      $code = "(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '04' and w.snap_date=s.snap_date) m2";
     }elseif($key == 2){
      $code = "(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '05' and w.snap_date=s.snap_date) m3";
     }elseif($key == 3){
      $code = "(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '02' and w.snap_date=s.snap_date) w1";
     }elseif($key == 4){
      $code = "(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '06' and w.snap_date=s.snap_date) s1";
     }else{
      $code = "(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '99' and w.snap_date=s.snap_date) c1";
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