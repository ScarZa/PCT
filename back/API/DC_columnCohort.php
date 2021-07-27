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
$mont = $_GET['data'];
$Y = $_GET['data2'];

    $process = array('admit','discart','คงพยาบาล');
    foreach($process as $key=>$value){
     $processname = $value;
     if($key == 0){
      $code = "(select count(*) from ipt where regdate=a.admdate and ward =99) 'admit'";
     }elseif($key == 1){
      $code = "(select count(*) from ipt where dchdate=a.admdate and ward =99) 'dch'";
     }elseif($key == 2){
      $code = "(select count(*) from ipt where regdate<=a.admdate and (dchdate>a.admdate or dchdate is null) and ward =99) 'Stay'";
     }else{
       //$code = "(select count(*) from ipt where regdate<=a.admdate  and ward =99) collect";
     }

$countnum = array();

$DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
$month_start = "$Y-$mont-01";
$month_end = "$Y-$mont-$DIM";
$sql = "select $code from (select vstdate 'admdate'
            from ovst
            where vstdate between '$month_start' and '$month_end'
            group by vstdate) a";
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