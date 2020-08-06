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
        $begin_date = insert_date($_POST['begin_date']);
        $end_date = insert_date($_POST['end_date']);
        $topic = $conv->utf8_to_tis620($_POST['topic']);
        $hn = $conv->utf8_to_tis620($_POST['hn']);
        $vn = $conv->utf8_to_tis620($_POST['vn']);
        $an = $conv->utf8_to_tis620($_POST['an']);
        $ipd_fr_id = $conv->utf8_to_tis620($_POST['ipd_fr_id']);
        $user = $conv->utf8_to_tis620($_POST['user']);
        $redate = date('Y-m-d H:i:s');
  $data = array($ipd_fr_id,$hn,$an,$topic,$begin_date,$end_date,$redate,$user);
  //$field = array("doctor","hn","comm_type","regdate","comm_status");
  $table = "jvl_conclude_nurse";
  $conclude = $connDB->insert($table, $data);
if($conclude){
          $res = array("messege"=>'บันทึกสรุปข้อวินิจฉัยทางการพยาบาลเรียบร้อยจ้า!!!!',"check"=>'Y');
      }else{
          $res = array("messege"=>'บันทึกสรุปข้อวินิจฉัยทางการพยาบาลไม่สำเร็จครับ!!!!',"check"=>'N');
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