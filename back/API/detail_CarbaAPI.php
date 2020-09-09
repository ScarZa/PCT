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
    $sql="SELECT cb.*
    ,CASE WHEN cb.WBC= 'N' THEN 0 WHEN cb.WBC = 'Y' THEN 1 ELSE '' END WBCnum
    ,CASE WHEN cb.symplomo01= 'N' THEN 0 WHEN cb.symplomo01 = 'Y' THEN 1 ELSE '' END symplomo01num
    ,CASE WHEN cb.symplomo02= 'N' THEN 0 WHEN cb.symplomo02 = 'Y' THEN 1 ELSE '' END symplomo02num
    ,CASE WHEN cb.symplomo03= 'N' THEN 0 WHEN cb.symplomo03 = 'Y' THEN 1 ELSE '' END symplomo03num
    ,CASE WHEN cb.symplomo04= 'N' THEN 0 WHEN cb.symplomo04 = 'Y' THEN 1 ELSE '' END symplomo04num
    ,CASE WHEN cb.symplomo05= 'N' THEN 0 WHEN cb.symplomo05 = 'Y' THEN 1 ELSE '' END symplomo05num
    ,CASE WHEN cb.symplomo06= 'N' THEN 0 WHEN cb.symplomo06 = 'Y' THEN 1 ELSE '' END symplomo06num
		,CASE WHEN cb.symplomo07= 'N' THEN 0 WHEN cb.symplomo07 = 'Y' THEN 1 ELSE '' END symplomo07num
    ,CASE WHEN cb.symplomo08= 'N' THEN 0 WHEN cb.symplomo08 = 'Y' THEN 1 ELSE '' END symplomo08num
    ,ou.name recname
    FROM jvl_carbamazepine cb
    inner join opduser ou on ou.loginname = cb.recorder
    WHERE carbamazepine_id=:carbamazepine_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':carbamazepine_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
  $series['carbamazepine_id'] = $data;
  $series['hn'] = $rslt['hn'];
  $series['WBC'] = $rslt['WBC'];
  $series['WBC_val'] = $rslt['WBC_val'];
  $series['last_WBC'] = $rslt['last_WBC'];
  $series['last_WBC_val'] = $rslt['last_WBC_val'];
  $series['symplomo01'] = $rslt['symplomo01'];
  $series['symplomo02'] = $rslt['symplomo02'];
  $series['symplomo03'] = $rslt['symplomo03'];
  $series['symplomo04'] = $rslt['symplomo04'];
  $series['symplomo05'] = $rslt['symplomo05'];
  $series['symplomo06'] = $rslt['symplomo06'];
  $series['symplomo07'] = $rslt['symplomo07'];
  $series['symplomo08'] = $rslt['symplomo08'];
  $series['recname'] = $conv->tis620_to_utf8($rslt['recname']);
  $series['regdate'] = Datethai1($rslt['regdate']);
  $series['WBCnum'] = $rslt['WBCnum'];
  $series['symplomo01num'] = (int)$rslt['symplomo01num'];
  $series['symplomo02num'] = (int)$rslt['symplomo02num'];
  $series['symplomo03num'] = (int)$rslt['symplomo03num'];
  $series['symplomo04num'] = (int)$rslt['symplomo04num'];
  $series['symplomo05num'] = (int)$rslt['symplomo05num'];
  $series['symplomo06num'] = (int)$rslt['symplomo06num'];
  $series['symplomo07num'] = (int)$rslt['symplomo07num'];
  $series['symplomo08num'] = (int)$rslt['symplomo08num'];
//array_push($result, $series);    
//}
//print_r($series);
print json_encode($series);
$conn_DB->close_PDO();
?>