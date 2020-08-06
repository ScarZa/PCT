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
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}
$conv=new convers_encode();
$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'add_CC') {
        $doctor = $_POST['doctor'];
        $depcode = $_POST['depcode'];
  $data = array($doctor,$depcode);
  //$field = array("doctor","hn","comm_type","regdate","comm_status");
  $table = "jvl_mappingDU";
  $AddUser = $connDB->insert($table, $data);
if($AddUser){
          $res = array("messege"=>'บันทึกผู้ใช้งานเรียบร้อยจ้า!!!!',"check"=>'Y');
      }else{
          $res = array("messege"=>'บันทึกผู้ใช้งานไม่สำเร็จครับ!!!!',"check"=>'N');
      }
        print json_encode($res);
        $connDB->close_PDO();
}elseif ($method == 'edit_user') {
        $mDU_id = $_POST['mDU_id'];
        $doctor = $_POST['doctor'];
        $depcode = $_POST['depcode'];
        
            $data = array($doctor,$depcode);
            $field = array("doctorcode","depcode");
            $table = "jvl_mappingDU";
            $where="mDU_id=:mDU_id";
            $execute=array(':mDU_id' => $mDU_id);
            $upadte_DU = $connDB->update($table, $data, $where, $field, $execute);
        if($upadte_DU===true){
                $res = array("messege"=>'แก้ไขผู้ใช้งานเรียบร้อยจ้า!!!!');
        }else{
            $res = array("messege"=>'แก้ไขผู้ใช้งานไม่สำเร็จครับ!!!!');
        }
print json_encode($res);
        $connDB->close_PDO();
}