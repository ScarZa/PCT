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
if ($method == 'add_user') {
        $doctor = $_POST['doctor'];
        $username = $conv->tis620_to_utf8($_POST['username']);
        $password = $conv->tis620_to_utf8(md5(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_STRING))));
        $clinic = $_POST['depcode'];
        $status_user = $_POST['status_user'];
  $data = array($doctor,$username,$password,$clinic,$status_user);
  //$field = array("doctor","hn","comm_type","regdate","comm_status");
  $table = "jvlmatrix_user";
  $AddUser = $connDB->insert($table, $data);
if($AddUser){
          $res = array("messege"=>'บันทึกผู้ใช้งานเรียบร้อยจ้า!!!!',"check"=>'Y');
      }else{
          $res = array("messege"=>'บันทึกผู้ใช้งานไม่สำเร็จครับ!!!!',"check"=>'N');
      }
        print json_encode($res);
        $connDB->close_PDO();
}elseif ($method == 'edit_user') {
    $user_id = $_POST['user_id'];
    $doctor = $_POST['doctor'];
    $username = $conv->tis620_to_utf8($_POST['username']);
    $password = isset($_POST['password'])?$conv->tis620_to_utf8(md5(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_ENCODED)))):'';
    $clinic = $_POST['depcode'];
    $status_user = $_POST['status_user'];
        
            
            $table = "jvlmatrix_user";
            $where="user_id=:user_id";
            $execute=array(':user_id' => $user_id);
            if(empty($password)){
                $data = array($doctor,$username,$clinic,$status_user);
                $field=array("doctor","username","clinic", "status_user");
                $edit_user=$connDB->update($table, $data, $where, $field, $execute);    
                }else{
                $data = array($doctor,$username,$password,$clinic,$status_user);
                $edit_user=$connDB->update($table, $data, $where, null, $execute);
                }
            
        if($edit_user===true){
                $res = array("messege"=>'แก้ไขผู้ใช้งานเรียบร้อยจ้า!!!!');
        }else{
            $res = array("messege"=>'แก้ไขผู้ใช้งานไม่สำเร็จครับ!!!!');
        }
print json_encode($res);
        $connDB->close_PDO();
}