<?php
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

$conn_DB = new EnDeCode();
$conv=new convers_encode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$mont = $_GET['data'];
$Y = $_GET['data2'];

$num_hos = "SELECT hospcode,name FROM hospcode WHERE chwpart=42 and hospcode in(10705,11030,11031,11032,11033,11034,11035,11036,11037,11038,11039,11447,14133,28861)";
$conn_DB->imp_sql($num_hos);
$hos = $conn_DB->select();//print_r($hos);
    foreach($hos as $key=>$value){ //echo $key."=>".$conv->tis620_to_utf8($value['name'])."/";
     $hosname = $conv->tis620_to_utf8($value['name']);

$countnum = array();

$DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
$month_start = "$Y-$mont-01";
$month_end = "$Y-$mont-$DIM";
$sql = "SELECT (SELECT count(an.an) FROM an_stat an inner join referin ri on ri.vn = an.vn WHERE an.ward =99 and regdate<=a.admdate and (an.dchdate>a.admdate or ISNULL(an.dchdate)) and ri.refer_hospcode = ".$value['hospcode'].")hospital
from (select vstdate 'admdate'
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
    $series['name'] = $hosname;
    $series['data'] = $countnum;

     array_push($rslt, $series); 
  }
print json_encode($rslt);
$conn_DB->close_PDO();