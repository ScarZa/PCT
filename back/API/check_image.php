<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
$conv=new convers_encode();
set_time_limit(0);
$rslt = array();
$series = array();
$hn = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$an = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
$sql = "SELECT pic_name FROM jvl_pics_ipd WHERE an = '".$an."'";
$conn_DB->imp_sql($sql);
    $pic_name = $conn_DB->select_a();
    if(empty($pic_name['pic_name'])){
        $sql="select image as cc from patient_image where hn='".$hn."'"; 
        $conn_DB->imp_sql($sql);
            $pic_name = $conn_DB->select_a();
            $pics = isset($pic_name['cc'])?$conv->tis620_to_utf8($pic_name['cc']):'';
            $chk = 'N';
        }else{
            $pics = isset($pic_name['pic_name'])?$conv->tis620_to_utf8($pic_name['pic_name']):'';
            $chk = 'Y';
        }

 //print_r($num_risk['cc']); 
 $series['cc'] = $pics;
 $series['chk'] = $chk;
print json_encode($series);
$conn_DB->close_PDO();