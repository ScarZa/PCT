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
    $sql="SELECT lt.*,p.sex
    ,CASE WHEN lt.last_lithium= 'N' THEN 0 WHEN lt.last_lithium = 'Y' THEN 1 ELSE '' END last_lithiumnum
    ,CASE WHEN lt.lithium= 'N' THEN 0 WHEN lt.lithium = 'Y' THEN 1 ELSE '' END lithiumnum
    ,CASE WHEN lt.last_BUN= 'N' THEN 0 WHEN lt.last_BUN = 'Y' THEN 1 ELSE '' END last_BUNnum
    ,CASE WHEN lt.BUN= 'N' THEN 0 WHEN lt.BUN = 'Y' THEN 1 ELSE '' END BUNnum
    ,CASE WHEN lt.last_Cr= 'N' THEN 0 WHEN lt.last_Cr = 'Y' THEN 1 ELSE '' END last_Crnum
		,CASE WHEN lt.Cr= 'N' THEN 0 WHEN lt.Cr = 'Y' THEN 1 ELSE '' END Crnum
		,CASE WHEN lt.eGFR= 'N' THEN 0 WHEN lt.eGFR = 'Y' THEN 1 ELSE '' END eGFRnum
		,CASE WHEN lt.last_TF= 'N' THEN 0 WHEN lt.last_TF = 'Y' THEN 1 ELSE '' END last_TFnum
		,CASE WHEN lt.TSH= 'N' THEN 0 WHEN lt.TSH = 'Y' THEN 1 ELSE '' END TSHnum
		,CASE WHEN lt.FT3= 'N' THEN 0 WHEN lt.FT3 = 'Y' THEN 1 ELSE '' END FT3num
		,CASE WHEN lt.FT4= 'N' THEN 0 WHEN lt.FT4 = 'Y' THEN 1 ELSE '' END FT4num
    ,CASE WHEN lt.symplom01= 'N' THEN 0 WHEN lt.symplom01 = 'Y' THEN 1 ELSE '' END symplom01num
    ,CASE WHEN lt.symplom02= 'N' THEN 0 WHEN lt.symplom02 = 'Y' THEN 1 ELSE '' END symplom02num
    ,CASE WHEN lt.symplom03= 'N' THEN 0 WHEN lt.symplom03 = 'Y' THEN 1 ELSE '' END symplom03num
    ,CASE WHEN lt.symplom04= 'N' THEN 0 WHEN lt.symplom04 = 'Y' THEN 1 ELSE '' END symplom04num
    ,CASE WHEN lt.symplom05= 'N' THEN 0 WHEN lt.symplom05 = 'Y' THEN 1 ELSE '' END symplom05num
    ,CASE WHEN lt.symplom06= 'N' THEN 0 WHEN lt.symplom06 = 'Y' THEN 1 ELSE '' END symplom06num
		,CASE WHEN lt.symplom07= 'N' THEN 0 WHEN lt.symplom07 = 'Y' THEN 1 ELSE '' END symplom07num
		,CASE WHEN lt.symplom08= 'N' THEN 0 WHEN lt.symplom08 = 'Y' THEN 1 ELSE '' END symplom08num
		,CASE WHEN lt.symplom09= 'N' THEN 0 WHEN lt.symplom09 = 'Y' THEN 1 ELSE '' END symplom09num
		,CASE WHEN lt.symplom10= 'N' THEN 0 WHEN lt.symplom10 = 'Y' THEN 1 ELSE '' END symplom10num
    ,ou.name recname
    FROM jvl_lithium lt
		inner join patient p on p.hn = lt.hn
    inner join opduser ou on ou.loginname = lt.recorder
    WHERE lt.lithium_id=:lithium_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':lithium_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
  $series['lithium_id'] = $data;
  $series['hn'] = $rslt['hn'];
  $series['sex'] = $rslt['sex'];
  $series['last_lithium'] = $rslt['last_lithium'];
  $series['last_lithium_val'] = $rslt['last_lithium_val'];
  $series['lithium'] = $rslt['lithium'];
  $series['lithium_val'] = $rslt['lithium_val'];
  $series['last_BUN'] = $rslt['last_BUN'];
  $series['last_BUN_val'] = $rslt['last_BUN_val'];
  $series['BUN'] = $rslt['BUN'];
  $series['BUN_val'] = $rslt['BUN_val'];
  $series['last_Cr'] = $rslt['last_Cr'];
  $series['last_Cr_val'] = $rslt['last_Cr_val'];
  $series['Cr'] = $rslt['Cr'];
  $series['Cr_val'] = $rslt['Cr_val'];
  $series['eGFR'] = $rslt['eGFR'];
  $series['eGFR_val'] = $rslt['eGFR_val'];
  $series['last_TF'] = $rslt['last_TF'];
  $series['last_TF_val'] = $rslt['last_TF_val'];
  $series['TSH'] = $rslt['TSH'];
  $series['TSH_val'] = $rslt['TSH_val'];
  $series['FT3'] = $rslt['FT3'];
  $series['FT3_val'] = $rslt['FT3_val'];
  $series['FT4'] = $rslt['FT4'];
  $series['FT4_val'] = $rslt['FT4_val'];
  $series['symplom01'] = $rslt['symplom01'];
  $series['symplom02'] = $rslt['symplom02'];
  $series['symplom03'] = $rslt['symplom03'];
  $series['symplom04'] = $rslt['symplom04'];
  $series['symplom05'] = $rslt['symplom05'];
  $series['symplom06'] = $rslt['symplom06'];
  $series['symplom07'] = $rslt['symplom07'];
  $series['symplom08'] = $rslt['symplom08'];
  $series['symplom09'] = $rslt['symplom09'];
  $series['symplom10'] = $rslt['symplom10'];
  $series['recname'] = $conv->tis620_to_utf8($rslt['recname']);
  $series['regdate'] = Datethai1($rslt['regdate']);
  $series['last_lithiumnum'] = $rslt['last_lithiumnum'];
  $series['lithiumnum'] = $rslt['lithiumnum'];
  $series['last_BUNnum'] = $rslt['last_BUNnum'];
  $series['BUNnum'] = $rslt['BUNnum'];
  $series['last_Crnum'] = $rslt['last_Crnum'];
  $series['Crnum'] = $rslt['Crnum'];
  $series['eGFRnum'] = $rslt['eGFRnum'];
  $series['last_TFnum'] = $rslt['last_TFnum'];
  $series['TSHnum'] = $rslt['TSHnum'];
  $series['FT3num'] = $rslt['FT3num'];
  $series['FT4num'] = $rslt['FT4num'];
  $series['symplom01num'] = (int)$rslt['symplom01num'];
  $series['symplom02num'] = (int)$rslt['symplom02num'];
  $series['symplom03num'] = (int)$rslt['symplom03num'];
  $series['symplom04num'] = (int)$rslt['symplom04num'];
  $series['symplom05num'] = (int)$rslt['symplom05num'];
  $series['symplom06num'] = (int)$rslt['symplom06num'];
  $series['symplom07num'] = (int)$rslt['symplom07num'];
  $series['symplom08num'] = (int)$rslt['symplom08num'];
  $series['symplom09num'] = (int)$rslt['symplom09num'];
  $series['symplom10num'] = (int)$rslt['symplom10num'];
  
//array_push($result, $series);    
//}
//print_r($series);
print json_encode($series);
$conn_DB->close_PDO();
?>