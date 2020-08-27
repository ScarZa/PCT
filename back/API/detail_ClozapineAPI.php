<?php 
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');


function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
if(!empty($data2)){
    $code = "";
}else {
    $code = "(t.status='0' or ISNULL(t.status)) and";
}
    $sql="SELECT clz.*
    ,CASE WHEN clz.WBC= 'N' THEN 0 WHEN clz.WBC = 'Y' THEN 1 ELSE '' END WBCnum
    ,CASE WHEN clz.ANC= 'N' THEN 0 WHEN clz.ANC = 'Y' THEN 1 ELSE '' END ANCnum
    ,CASE WHEN clz.platelet= 'N' THEN 0 WHEN clz.platelet = 'Y' THEN 1 ELSE '' END plateletnum
    ,CASE WHEN clz.last_CBC= 'N' THEN 0 WHEN clz.last_CBC = 'Y' THEN 1 ELSE '' END last_CBCnum
    ,CASE WHEN clz.mg_day= 'N' THEN 0 WHEN clz.mg_day = 'Y' THEN 1 ELSE '' END mg_daynum
    ,CASE WHEN clz.symplomo01= 'N' THEN 0 WHEN clz.symplomo01 = 'Y' THEN 1 ELSE '' END symplomo01num
    ,CASE WHEN clz.symplomo02= 'N' THEN 0 WHEN clz.symplomo02 = 'Y' THEN 1 ELSE '' END symplomo02num
    ,CASE WHEN clz.symplomo03= 'N' THEN 0 WHEN clz.symplomo03 = 'Y' THEN 1 ELSE '' END symplomo03num
    ,CASE WHEN clz.symplomo04= 'N' THEN 0 WHEN clz.symplomo04 = 'Y' THEN 1 ELSE '' END symplomo04num
    ,CASE WHEN clz.symplomo05= 'N' THEN 0 WHEN clz.symplomo05 = 'Y' THEN 1 ELSE '' END symplomo05num
    ,CASE WHEN clz.symplomo06= 'N' THEN 0 WHEN clz.symplomo06 = 'Y' THEN 1 ELSE '' END symplomo06num
    ,ou.name recname
    FROM jvl_clozapine clz
    inner join opduser ou on ou.loginname = clz.recorder
    WHERE cozapine_id=:cozapine_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':cozapine_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
  $series['cozapine_id'] = $data;
  $series['hn'] = $rslt['hn'];
  $series['WBC'] = $rslt['WBC'];
  $series['WBC_val'] = $rslt['WBC_val'];
  $series['ANC'] = $rslt['ANC'];
  $series['ANC_val'] = $rslt['ANC_val'];
  $series['platelet'] = $rslt['platelet'];
  $series['platelet_val'] = $rslt['platelet_val'];
  $series['last_CBC'] = $rslt['last_CBC'];
  $series['last_CBC_val'] = $rslt['last_CBC_val'];
  $series['mg_day'] = $rslt['mg_day'];
  $series['BMI'] = $rslt['BMI'];
  $series['symplomo01'] = $rslt['symplomo01'];
  $series['symplomo02'] = $rslt['symplomo02'];
  $series['symplomo03'] = $rslt['symplomo03'];
  $series['symplomo04'] = $rslt['symplomo04'];
  $series['symplomo05'] = $rslt['symplomo05'];
  $series['symplomo06'] = $rslt['symplomo06'];
  $series['recname'] = $conv->tis620_to_utf8($rslt['recname']);
  $series['regdate'] = Datethai1($rslt['regdate']);
  $series['WBCnum'] = $rslt['WBCnum'];
  $series['ANCnum'] = $rslt['ANCnum'];
  $series['plateletnum'] = $rslt['plateletnum'];
  $series['last_CBCnum'] = $rslt['last_CBCnum'];
  $series['mg_daynum'] = $rslt['mg_daynum'];
  $series['symplomo01num'] = (int)$rslt['symplomo01num'];
  $series['symplomo02num'] = (int)$rslt['symplomo02num'];
  $series['symplomo03num'] = (int)$rslt['symplomo03num'];
  $series['symplomo04num'] = (int)$rslt['symplomo04num'];
  $series['symplomo05num'] = (int)$rslt['symplomo05num'];
  $series['symplomo06num'] = (int)$rslt['symplomo06num'];
  
//array_push($result, $series);    
//}
//print_r($series);
print json_encode($series);
$conn_DB->close_PDO();
?>