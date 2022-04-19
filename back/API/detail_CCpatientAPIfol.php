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

$sql="select smi.smiv_id,p.hn,ops.vn,p.pname,p.fname,p.lname,p.informaddr,p.cid,p.birthday,m.name as mrname,v.vn,v.pdx,v.dx0,v.dx1,v.dx2,v.dx3,v.dx4,v.dx5
,w.name as ward,ops.cc,ops.hpi,ops.pmh,smi.comment
,CASE
WHEN smi.processSMIV = 1 THEN 'ประเมินผู้ป่วยใหม่'
WHEN smi.processSMIV = 2 THEN 'ติดตามผู้ป่วย SMI-V'
ELSE 'ผู้ป่วย SMI-V ทำซ้ำ'
END smiv_status,smi.processSMIV,smi.smiv_class
,(SELECT d.name FROM vn_stat v inner join doctor d on d.code = v.dx_doctor WHERE v.vn=smi.vn and smi.smiv_id=:smiv_id)doctor_name
,(SELECT o.name FROM jvl_smiv smi inner join opduser o on o.loginname = smi.recorder WHERE smi.smiv_id=:smiv_id)sender_name
from patient p 
        LEFT OUTER JOIN vn_stat v ON v.hn=p.hn
        LEFT OUTER JOIN opdscreen ops on ops.vn = v.vn
        LEFT OUTER JOIN an_stat a on a.vn =v.vn
        LEFT OUTER JOIN ward w on w.ward = a.ward
        inner join jvl_smiv smi on smi.vn = v.vn
        left outer join marrystatus m on p.marrystatus=m.code 
        where smi.smiv_id=:smiv_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':smiv_id'=>$data);
    $rslt=$conn_DB->select_a($execute);

    
$sql = "SELECT * FROM jvl_smiv where hn = '".$rslt['hn']."' and processSMIV = 3 ORDER BY smiv_id desc limit 1";
$conn_DB->imp_sql($sql);
$fol_chk=$conn_DB->select_a();
if($fol_chk){
  $smiv_id = $fol_chk['smiv_id'];
}else{
  $sql = "SELECT * FROM jvl_smiv where hn = '".$rslt['hn']."' and processSMIV = 1 ORDER BY smiv_id desc limit 1";
$conn_DB->imp_sql($sql);
$fol_chk=$conn_DB->select_a();
$smiv_id = $fol_chk['smiv_id'];
}
$sql="select smi.vn fol_vn,smi.chk_1,smi1.smiv_result smi1_1,smi2.smiv_result smi1_2,smi3.smiv_result smi1_3,smi4.smiv_result smi1_4,smi5.smiv_result smi1_5,smi6.smiv_result smi1_6,smi7.smiv_result smi1_7,smi8.smiv_result smi1_8
            ,smi9.smiv_result smi1_9,smi10.smiv_result smi1_10,smi11.smiv_result smi1_11,smi12.smiv_result smi1_12,smi.t1_12
            ,smi.chk_2,smi13.smiv_result smi2_1,smi14.smiv_result smi2_2,smi15.smiv_result smi2_3,smi16.smiv_result smi2_4,smi17.smiv_result smi2_5,smi18.smiv_result smi2_6,smi19.smiv_result smi2_7,smi20.smiv_result smi2_8
            ,smi21.smiv_result smi2_9,smi22.smiv_result smi2_10,smi23.smiv_result smi2_11,smi24.smiv_result smi2_12,smi.t2_12
            ,smi.chk_3,smi25.smiv_result smi3_1,smi26.smiv_result smi3_2,smi27.smiv_result smi3_3,smi.t3_3
            ,smi.chk_4,smi28.smiv_result smi4_1,smi29.smiv_result smi4_2,smi30.smiv_result smi4_3,smi31.smiv_result smi4_4
            ,smi.chk_5,smi32.smiv_result smi5_1,smi33.smiv_result smi5_2,smi34.smiv_result smi5_3,smi35.smiv_result smi5_4
            
            from jvl_smiv smi
                    LEFT OUTER join jvl_result_smiv smi1 on smi1.Rsmiv_id = smi.smiv1_1
                    LEFT OUTER join jvl_result_smiv smi2 on smi2.Rsmiv_id = smi.smiv1_2
                    LEFT OUTER join jvl_result_smiv smi3 on smi3.Rsmiv_id = smi.smiv1_3
                    LEFT OUTER join jvl_result_smiv smi4 on smi4.Rsmiv_id = smi.smiv1_4
                    LEFT OUTER join jvl_result_smiv smi5 on smi5.Rsmiv_id = smi.smiv1_5
                    LEFT OUTER join jvl_result_smiv smi6 on smi6.Rsmiv_id = smi.smiv1_6
                    LEFT OUTER join jvl_result_smiv smi7 on smi7.Rsmiv_id = smi.smiv1_7
                    LEFT OUTER join jvl_result_smiv smi8 on smi8.Rsmiv_id = smi.smiv1_8
                    LEFT OUTER join jvl_result_smiv smi9 on smi9.Rsmiv_id = smi.smiv1_9
                    LEFT OUTER join jvl_result_smiv smi10 on smi10.Rsmiv_id = smi.smiv1_10
                    LEFT OUTER join jvl_result_smiv smi11 on smi11.Rsmiv_id = smi.smiv1_11
                    LEFT OUTER join jvl_result_smiv smi12 on smi12.Rsmiv_id = smi.smiv1_12
                    LEFT OUTER join jvl_result_smiv smi13 on smi13.Rsmiv_id = smi.smiv2_1
                    LEFT OUTER join jvl_result_smiv smi14 on smi14.Rsmiv_id = smi.smiv2_2
                    LEFT OUTER join jvl_result_smiv smi15 on smi15.Rsmiv_id = smi.smiv2_3
                    LEFT OUTER join jvl_result_smiv smi16 on smi16.Rsmiv_id = smi.smiv2_4
                    LEFT OUTER join jvl_result_smiv smi17 on smi17.Rsmiv_id = smi.smiv2_5
                    LEFT OUTER join jvl_result_smiv smi18 on smi18.Rsmiv_id = smi.smiv2_6
                    LEFT OUTER join jvl_result_smiv smi19 on smi19.Rsmiv_id = smi.smiv2_7
                    LEFT OUTER join jvl_result_smiv smi20 on smi20.Rsmiv_id = smi.smiv2_8
                    LEFT OUTER join jvl_result_smiv smi21 on smi21.Rsmiv_id = smi.smiv2_9
                    LEFT OUTER join jvl_result_smiv smi22 on smi22.Rsmiv_id = smi.smiv2_10
                    LEFT OUTER join jvl_result_smiv smi23 on smi23.Rsmiv_id = smi.smiv2_11
                    LEFT OUTER join jvl_result_smiv smi24 on smi24.Rsmiv_id = smi.smiv2_12
                    LEFT OUTER join jvl_result_smiv smi25 on smi25.Rsmiv_id = smi.smiv3_1
                    LEFT OUTER join jvl_result_smiv smi26 on smi26.Rsmiv_id = smi.smiv3_2
                    LEFT OUTER join jvl_result_smiv smi27 on smi27.Rsmiv_id = smi.smiv3_3
                    LEFT OUTER join jvl_result_smiv smi28 on smi28.Rsmiv_id = smi.smiv4_1
                    LEFT OUTER join jvl_result_smiv smi29 on smi29.Rsmiv_id = smi.smiv4_2
                    LEFT OUTER join jvl_result_smiv smi30 on smi30.Rsmiv_id = smi.smiv4_3
                    LEFT OUTER join jvl_result_smiv smi31 on smi31.Rsmiv_id = smi.smiv4_4
                    LEFT OUTER join jvl_result_smiv smi32 on smi32.Rsmiv_id = smi.smiv5_1
                    LEFT OUTER join jvl_result_smiv smi33 on smi33.Rsmiv_id = smi.smiv5_2
                    LEFT OUTER join jvl_result_smiv smi34 on smi34.Rsmiv_id = smi.smiv5_3
                    LEFT OUTER join jvl_result_smiv smi35 on smi35.Rsmiv_id = smi.smiv5_4
                    where smi.smiv_id=:smiv_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':smiv_id'=>$smiv_id);
    $rsltSMIV=$conn_DB->select_a($execute);
//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['smiv_id'] = $rslt['smiv_id'];
    $pname=$conv->tis620_to_utf8( $rslt['pname']);
    $fname=$conv->tis620_to_utf8( $rslt['fname']);
    $lname=$conv->tis620_to_utf8( $rslt['lname']);
    $series['fullname'] = $pname.$fname.' '.$lname;
    $series['hn'] = $rslt['hn'];
    $series['vn'] = $rslt['vn'];
    $series['processSMIV'] = $rslt['processSMIV'];
    $series['informaddr'] = $conv->tis620_to_utf8( $rslt['informaddr']);
    $series['cid'] = $rslt['cid'];
    $series['birthday'] = DateThai1($rslt['birthday']);
    $series['mrname'] = $conv->tis620_to_utf8( $rslt['mrname']);
    $series['pdx'] = $rslt['pdx'];
    $series['dx0'] = $rslt['dx0'];
    $series['dx1'] = $rslt['dx1'];
    $series['dx2'] = $rslt['dx2'];
    $series['dx3'] = $rslt['dx3'];
    $series['dx4'] = $rslt['dx4'];
    $series['dx5'] = $rslt['dx5'];
    $series['smiv_class'] = $rslt['smiv_class'];
    $series['ward'] = $conv->tis620_to_utf8($rslt['ward']);
    $series['doctor_name'] = $conv->tis620_to_utf8($rslt['doctor_name']);
    $series['sender_name'] = $conv->tis620_to_utf8($rslt['sender_name']);
    $series['cc'] = $conv->tis620_to_utf8($rslt['cc']);
    $series['hpi'] = $conv->tis620_to_utf8($rslt['hpi']);
    $series['pmh'] = $conv->tis620_to_utf8($rslt['pmh']);
    $series['comment'] = $conv->tis620_to_utf8($rslt['comment']);
    $series['smiv_status'] = $rslt['smiv_status'];
    $series['fol_vn'] = $conv->tis620_to_utf8($rsltSMIV['fol_vn']);
    $series['smi1_1'] = $conv->tis620_to_utf8($rsltSMIV['smi1_1']);
    $series['smi1_2'] = $conv->tis620_to_utf8($rsltSMIV['smi1_2']);
    $series['smi1_3'] = $conv->tis620_to_utf8($rsltSMIV['smi1_3']);
    $series['smi1_4'] = $conv->tis620_to_utf8($rsltSMIV['smi1_4']);
    $series['smi1_5'] = $conv->tis620_to_utf8($rsltSMIV['smi1_5']);
    $series['smi1_6'] = $conv->tis620_to_utf8($rsltSMIV['smi1_6']);
    $series['smi1_7'] = $conv->tis620_to_utf8($rsltSMIV['smi1_7']);
    $series['smi1_8'] = $conv->tis620_to_utf8($rsltSMIV['smi1_8']);
    $series['smi1_9'] = $conv->tis620_to_utf8($rsltSMIV['smi1_9']);
    $series['smi1_10'] = $conv->tis620_to_utf8($rsltSMIV['smi1_10']);
    $series['smi1_11'] = $conv->tis620_to_utf8($rsltSMIV['t1_12']);
    $series['t1_12'] = $conv->tis620_to_utf8($rsltSMIV['smi1_1']);
    $series['smi2_1'] = $conv->tis620_to_utf8($rsltSMIV['smi2_1']);
    $series['smi2_2'] = $conv->tis620_to_utf8($rsltSMIV['smi2_2']);
    $series['smi2_3'] = $conv->tis620_to_utf8($rsltSMIV['smi2_3']);
    $series['smi2_4'] = $conv->tis620_to_utf8($rsltSMIV['smi2_4']);
    $series['smi2_5'] = $conv->tis620_to_utf8($rsltSMIV['smi2_5']);
    $series['smi2_6'] = $conv->tis620_to_utf8($rsltSMIV['smi2_6']);
    $series['smi2_7'] = $conv->tis620_to_utf8($rsltSMIV['smi2_7']);
    $series['smi2_8'] = $conv->tis620_to_utf8($rsltSMIV['smi2_8']);
    $series['smi2_9'] = $conv->tis620_to_utf8($rsltSMIV['smi2_9']);
    $series['smi2_10'] = $conv->tis620_to_utf8($rsltSMIV['smi2_10']);
    $series['smi2_11'] = $conv->tis620_to_utf8($rsltSMIV['smi2_11']);
    $series['t2_12'] = $conv->tis620_to_utf8($rsltSMIV['t2_12']);
    $series['smi3_1'] = $conv->tis620_to_utf8($rsltSMIV['smi3_1']);
    $series['smi3_2'] = $conv->tis620_to_utf8($rsltSMIV['smi3_2']);
    $series['t3_3'] = $conv->tis620_to_utf8($rsltSMIV['t3_3']);
    $series['smi4_1'] = $conv->tis620_to_utf8($rsltSMIV['smi4_1']);
    $series['smi4_2'] = $conv->tis620_to_utf8($rsltSMIV['smi4_2']);
    $series['smi4_3'] = $conv->tis620_to_utf8($rsltSMIV['smi4_3']);
    $series['smi4_4'] = $conv->tis620_to_utf8($rsltSMIV['smi4_4']);
    $series['smi5_1'] = $conv->tis620_to_utf8($rsltSMIV['smi5_1']);
    $series['smi5_2'] = $conv->tis620_to_utf8($rsltSMIV['smi5_2']);
    $series['smi5_3'] = $conv->tis620_to_utf8($rsltSMIV['smi5_3']);
    $series['smi5_4'] = $conv->tis620_to_utf8($rsltSMIV['smi5_4']);
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>