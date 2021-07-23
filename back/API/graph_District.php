<?php 
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/'.$class_name.'.php';
}
set_time_limit(0);
$conn_DB= new EnDeCode();
$conv=new convers_encode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db=$conn_DB->Read_Text();
$conn_DB->conn_PDO();
include_once '../plugins/funcDateThai.php';
$rslt = array();
$series = array();
$dep= array();
$num_hos = "SELECT hospcode,name FROM hospcode WHERE chwpart=42 and hospcode in(10705,11030,11031,11032,11033,11034,11035,11036,11037,11038,11039,11447,14133,28861)";
$conn_DB->imp_sql($num_hos);
$hos = $conn_DB->select();                    
foreach($hos as $key=>$value){ 
  $hosname[] = $conv->tis620_to_utf8($value['name']);
      }
      
      $series['hosname']=$hosname;
      
      print json_encode($series);
    $conn_DB->close_PDO();
                    ?>