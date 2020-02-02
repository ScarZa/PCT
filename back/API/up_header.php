<?php 
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include '../class/'.$class_name.'.php';
}
//include 'class/TablePDO.php';
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$db=$conn_DB->conn_PDO();
$data= array();
if($db != FALSE){
$conv=new convers_encode();
$data['status_user'] = $conv->tis620_to_utf8($_SESSION['status_user']);
$data['clinic_user'] = $conv->tis620_to_utf8($_SESSION['clinic_user']);
$data['user'] = $conv->tis620_to_utf8($_SESSION['user']);
$data['name_user'] = $conv->tis620_to_utf8($_SESSION['name_user']);
$data['depcode'] = $conv->tis620_to_utf8($_SESSION['depcode']);

print json_encode($data);                       
}else {
    $data['check']=  md5(trim('check'));
    $data['conn']='Connect_DB_false';
   print json_encode($data);
                                }
$conn_DB->close_PDO();
?>