<?php 
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/'.$class_name.'.php';
}
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db=$conn_DB->Read_Text();
$conn_DB->conn_PDO();
include_once '../plugins/funcDateThai.php';
$rslt = array();
$series = array();
$dep= array();
$mont = $_GET['data1'];
$Y = $_GET['data2'];
    $DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y);                     
    for ($I=1;$I<=$DIM;$I++) {

      $day[]=DateThai1($Y.'-'.$mont.'-'.$I);
      }
  
      $series['day']=$day;
      print json_encode($series);
    $conn_DB->close_PDO();
                    ?>