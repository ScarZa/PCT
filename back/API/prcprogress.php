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
if ($method == 'add_PG_commu') {
        $ipd_fr_id = $_POST['ipd_fr_id'];
        $tB_id = isset($_POST['tB_id'])?$_POST['tB_id']:'';
        // $hn = $conv->utf8_to_tis620($_POST['hn']);
        // $vn = $conv->utf8_to_tis620($_POST['vn']);
        // $an = $conv->utf8_to_tis620($_POST['an']);
        $recorder = isset($_POST['user'])?$conv->utf8_to_tis620($_POST['user']):'N';
        $recdate = date('Y-m-d H:i:s');

        $subj = isset($_POST['subj'])?$conv->utf8_to_tis620($_POST['subj']):'';
        $obj = isset($_POST['obj'])?$conv->utf8_to_tis620($_POST['obj']):'';
        $assessment = isset($_POST['assess_type'])?$conv->utf8_to_tis620($_POST['assess_type']):'';

        if($recorder =='N' or $recorder =='null' or $recorder =='undefined'){
          $res = array("messege"=>'ไม่สามารถบันทึกได้ กรุณาติดต่องานคอมพิวเตอร์ (68120) ครับ!!!!',"check"=>'N');
      } else{
        
          $data = array($ipd_fr_id,$subj,$obj,$assessment,$recorder,$recdate,$tB_id);
          $table = "jvl_progress_commu";
          $pc_id = $connDB->insert($table, $data);
          if($pc_id){
          $plan_type_chk=$_POST['plan_type'];
            
foreach ($plan_type_chk as $key => $value) {
         $plan_typeArr[$key] = $conv->utf8_to_tis620($_POST['plan_type'][$key]);
         $begindateArr[$key] = insert_date($_POST['begindate'][$key]);
         $enddateArr[$key] = insert_date($_POST['enddate'][$key]);

        $plan_typearr = $plan_typeArr[$key];
        $begindatearr = $begindateArr[$key];
        $enddatearr = $enddateArr[$key];
       
        $data2 = array($pc_id,$plan_typearr,$begindatearr,$enddatearr);
        $table2 = "jvl_plan_commu";
        $plan_pg = $connDB->insert($table2, $data2);
}
          // if($plan_pg){
          //   $res = array("messege"=>'บันทึก Progress note สำเร็จครับ!!!!',"check"=>'Y');
          // }else{
          //   $res = array("messege"=>'บันทึก Progress note ไม่สำเร็จครับ!!!!',"check"=>'N');
          // }
          $res = array("messege"=>'บันทึก Progress note สำเร็จครับ!!!!',"check"=>'Y');
          }else{
            $res = array("messege"=>'บันทึก Progress note ไม่สำเร็จครับ!!!!',"check"=>'N');
          }
      }
      print json_encode($res);
      $connDB->close_PDO();

}
?>