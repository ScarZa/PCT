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
//$mont = $_GET['data'];
//$Y = $_GET['data2'];

$num_hos = "SELECT count(*) total FROM an_stat an WHERE an.ward =99";
$conn_DB->imp_sql($num_hos);
$hos = $conn_DB->select_a();//print_r($hos);
$hosname = 'ยอดสะสมตั้งแต่วันที่ 5 ก.ค. 2564 จำนวน '.$hos['total'].' ราย';
$series['name'] = $hosname;
$series['colorByPoint'] = 'true';    
     

$countnum = array();

// $DIM=cal_days_in_month(CAL_GREGORIAN,$mont,$Y); 
// $month_start = "$Y-$mont-01";
// $month_end = "$Y-$mont-$DIM";
$sql = "SELECT a.hosname
,(SELECT count(an.an) 
FROM an_stat an 
inner join referin ri on ri.vn = an.vn 
inner join hospcode hc on hc.hospcode = ri.refer_hospcode  
WHERE an.ward =99 and ri.refer_hospcode=a.hospcode)num
from (select hc.hospcode 'hospcode',hc.name 'hosname'
from hospcode hc
inner join referin ri on hc.hospcode = ri.refer_hospcode
inner join an_stat an on ri.vn = an.vn 
where  hc.hospcode in(10705,11030,11031,11032,11033,11034,11035,11036,11037,11038,11039,11447,14133,28861)
group by hc.hospcode) a";
            $conn_DB->imp_sql($sql);
            $rs = $conn_DB->select();
            //print_r($rs);
    //         foreach($rs as $key2=>$value2){ 
    //           foreach($value2 as $key3=>$value3){
    //             //echo $key3.'=>'.$value3.'<br>';
    //             $countnum[0]= (int) $value3;  
    //           }
    // }
    for($i=0;$i<count($rs);$i++){
      $countnum[0] = $conv->tis620_to_utf8($rs[$i]['hosname']);
      $countnum[1] = (int)$rs[$i]['num'];
      
      $series['data'][$i] = $countnum;
       } 
    //$series['data'] = $countnum;
  
  array_push($rslt, $series); 
print json_encode($rslt);
$conn_DB->close_PDO();