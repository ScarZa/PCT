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
    $sql="SELECT sd.*,p.sex
    ,CASE WHEN sd.last_lft= 'N' THEN 0 WHEN sd.last_lft = 'Y' THEN 1 ELSE '' END last_lftnum
    ,CASE WHEN sd.symplom01= 'N' THEN 0 WHEN sd.symplom01 = 'Y' THEN 1 ELSE '' END symplom01num
    ,CASE WHEN sd.symplom02= 'N' THEN 0 WHEN sd.symplom02 = 'Y' THEN 1 ELSE '' END symplom02num
    ,CASE WHEN sd.symplom03= 'N' THEN 0 WHEN sd.symplom03 = 'Y' THEN 1 ELSE '' END symplom03num
    ,ou.name recname
    FROM jvl_sodium sd
    inner join patient p on p.hn = sd.hn
    inner join opduser ou on ou.loginname = sd.recorder
    WHERE sodium_id=:sodium_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':sodium_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
  $series['sodium_id'] = $data;
  $series['hn'] = $rslt['hn'];
  $series['sex'] = $rslt['sex'];
  $series['last_lft'] = $rslt['last_lft'];
  $series['last_lft_val'] = $rslt['last_lft_val'];
  $series['albumin'] = $rslt['albumin'];
  $series['albumin_val'] = $rslt['albumin_val'];
  $series['ast'] = $rslt['ast'];
  $series['ast_val'] = $rslt['ast_val'];
  $series['alt'] = $rslt['alt'];
  $series['alt_val'] = $rslt['alt_val'];
  $series['alp'] = $rslt['alp'];
  $series['alp_val'] = $rslt['alp_val'];
  $series['total_bilirubin'] = $rslt['total_bilirubin'];
  $series['total_bilirubin_val'] = $rslt['total_bilirubin_val'];
  $series['direct_bilirubin'] = $rslt['direct_bilirubin'];
  $series['direct_bilirubin_val'] = $rslt['direct_bilirubin_val'];
  $series['symplom01'] = $rslt['symplom01'];
  $series['symplom02'] = $rslt['symplom02'];
  $series['symplom03'] = $rslt['symplom03'];
  $series['recname'] = $conv->tis620_to_utf8($rslt['recname']);
  $series['regdate'] = Datethai1($rslt['regdate']);
  $series['last_lftnum'] = $rslt['last_lftnum'];
  $series['symplom01num'] = (int)$rslt['symplom01num'];
  $series['symplom02num'] = (int)$rslt['symplom02num'];
  $series['symplom03num'] = (int)$rslt['symplom03num'];
  //array_push($result, $series);    
//}
//print_r($series);
print json_encode($series);
$conn_DB->close_PDO();
?>