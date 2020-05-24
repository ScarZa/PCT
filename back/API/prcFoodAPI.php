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
if ($method == 'confirm_Food') {
        $tB_id = $conv->utf8_to_tis620($_POST['tB_id']);
        $resend = isset($_POST['resend'])?$conv->utf8_to_tis620($_POST['resend']):'';
        $status = $conv->utf8_to_tis620($_POST['status']);
        $hn = $conv->utf8_to_tis620($_POST['hn']);
        $vn = $conv->utf8_to_tis620($_POST['vn']);
        $user = $conv->utf8_to_tis620($_POST['user']);
        $redate = date('Y-m-d');
        
            $data = array($status,$resend,$user,$redate);
            $field = array("status","resend","resendname","redate");
            $table = "jvl_transferBox";
            $where="tB_id=:tB_id";
            $execute=array(':tB_id' => $tB_id);
            $confirm_MR = $connDB->update($table, $data, $where, $field, $execute);
        if($confirm_MR===true){
            if($status=='Y'){
                $res = array("check"=>'Y');
            }elseif($status=='N'){
                $res = array("messege"=>'ส่งคืนเคสเรียบร้อย!!!!',"check"=>'N');
            }
        }else{
            $res = array("messege"=>'บันทึกข้อมูลไม่สำเร็จครับ!!!!',"check"=>'N');
        }
        
            
        print json_encode($res);
        $connDB->close_PDO();
}elseif ($method == 'regis_Food') {
    $hn=$conv->utf8_to_tis620($_POST['hn']);
    $food_type=$conv->utf8_to_tis620($_POST['food_type']);
    $regdate=$conv->utf8_to_tis620($_POST['regdate']);
    $food_status=$conv->utf8_to_tis620($_POST['food_status']);
    $doctor2 = $conv->utf8_to_tis620($_POST['doctor']);  
    $clinic=$conv->utf8_to_tis620('024');
    $lastupdate=  date("Y-m-d H:m:s");
    $status=$conv->utf8_to_tis620('Y');

    $sql = "SELECT food_id FROM jvlfood_regis where hn ='".$hn ."' and regdate ='".$regdate."'";
        $connDB->imp_sql($sql);
        $chk_send=$connDB->select_a();
        if(empty($chk_send)){
    $data = array($doctor2,$hn,$food_type,$regdate,$food_status);
    $table = "jvlfood_regis";
    $Phy_regis = $connDB->insert($table, $data);

//     $sql = "SELECT hn FROM clinicmember where hn = '".$hn."'";
//     $connDB->imp_sql($sql);
//     $check=$connDB->select_a();
    
//     if(empty($check['hn'])){
    
//     $begin_year = $conv->utf8_to_tis620($_POST['begin_year']); 
      

//     $sql = "SELECT serial_no+1 as id, 
//     (SELECT serial_no+1 FROM serial WHERE `name`='clinic-member-number-006')number
//     FROM serial WHERE `name`='clinicmember_id'";
//     $connDB->imp_sql($sql);
//     $serial=$connDB->select_a();

//     $data = array($serial['id'],$hn,$note,$doctor2,$regdate,$clinic,$m_status,$begin_year,$serial['number'],$lastupdate);
//     $field = array('clinicmember_id','hn','note','doctor','regdate','clinic','clinic_member_status_id','','number','lastupdate');
//     $table = "clinicmember";
//     $SC_regis = $connDB->insert($table, $data, $field);
//     //$SC_regis->store_result();
    
//     $data = array($serial['id']);
//     $field = array("serial_no");
//     $table = "serial";
//     $where="`name`='clinicmember_id'";
//     $serial_no1 = $connDB->update($table, $data, $where, $field);

//     $data = array($serial['number']);
//     $field = array("serial_no");
//     $table = "serial";
//     $where="`name`='clinic-member-number-006'";
//     $serial_no2 = $connDB->update($table, $data, $where, $field);
 
//     if($serial_no1===true and $serial_no2===true){
//         $res = array("messege"=>'ลงทะเบียนในคลินิคทานตะวันสำเร็จครับ!!!!',"check"=>'Y');
//     }else{
//         $res = array("messege"=>'บันทึกข้อมูลไม่สำเร็จครับ!!!!',"check"=>'N');
//     }
// }else{
//     $res = array("messege"=>'มีการลงทะเบียนในคลินิคทานตะวันแล้วครับ!!!!',"check"=>'Y');
// }
if($Phy_regis){
            $res = array("messege"=>'ลงทะเบียนในงานโภชนาการสำเร็จครับ!!!!',"check"=>'Y');
        }else{
            $res = array("messege"=>'บันทึกข้อมูลไม่สำเร็จครับ!!!!',"check"=>'N');
        }
}else{
    $res = array("messege"=>'มีการลงทะเบียนเคส '.$_POST['hn'].' เรียบร้อยแล้วครับ!!!!',"check"=>'Y');
}
print json_encode($res);
        $connDB->close_PDO();
}