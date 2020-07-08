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
    $sql="SELECT fr.hn,fr.an,fr.biographer,fr.relative,fr.patient_add,fr.tel0,fr.tel1,fr.relative1,fr.tel2,fr.relative2,fr.fathername
    ,CASE WHEN fr.father_chk = 'Y' THEN 'ยังมีชีวิตอยู่' ELSE 'เสียชีวิต' END father_chk,fr.father_age,fr.father_occup
    ,fr.mothername,CASE WHEN fr.mother_chk = 'Y' THEN 'ยังมีชีวิตอยู่' ELSE 'เสียชีวิต' END mother_chk,fr.mother_age,fr.mother_occup
    ,CASE WHEN fr.marry_chk = 0 THEN 'โสด' WHEN fr.marry_chk = 1 THEN 'หม้าย' WHEN fr.marry_chk = 2 THEN 'หย่า/แยก' ELSE 'คู่' END marry_chk,fr.spouse_name,fr.child,fr.earmark,fr.bw,fr.height,fr.bmi
    ,fr.cc,fr.hpi,fr.pmh,fr.weapon_chk,fr.weapon,fr.weaponer_chk,fr.weaponer
    ,fr.detain_chk,fr.detain,fr.smi4_chk,fr.smi4_1,fr.smi4_2,fr.smi4_3,fr.smi4_4,fr.lawpsych_chk,fr.lawpsych,fr.sleep_chk,fr.sleep,fr.ic_chk,fr.ic
    ,CASE WHEN fr.med_chk= 'N' THEN 'ต่อเนื่อง' WHEN fr.marry_chk = 'A' THEN 'ไม่สม่ำเสมอ' WHEN fr.marry_chk = 'Y' THEN 'ขาดยา' ELSE 'ไม่เคยรับยา' END med_chk
    ,fr.med,accident_chk,fr.accident
    ,fr.wound_chk,fr.wound,fr.surgery_chk,fr.surgery,fr.complicate_chk,fr.complicate,fr.alcohol_chk,alc.name,alcV.volume_type,fr.alcohol_frequency,fr.drink_age,fr.last_useA,fr.time_stop
    ,fr.drink_cause,fr.dope_chk,dr.drug_name,fr.narcotic_vol,fr.narcotic_frequency,fr.narcotic_age,fr.last_useD,fr.narcotic_stop,fr.narcotic_cause,fr.menses_chk,fr.menses,fr.disease_chk
    ,d1.disease_name d1,d2.disease_name d2,d3.disease_name d3,d4.disease_name d4,d5.disease_name d5,d6.disease_name d6,d7.disease_name d7,fr.disease,fr.heal_chk,fr.heal,fr.whip_chk,fr.whip,fr.regular_med_chk,fr.regular_med
    ,fr.adr_chk,fr.adr,fr.beallergic_chk,fr.beallergic,fr.old_med_chk,fr.old_med,fr.heredity_chk,fr.heredity,fr.Hurt_yourself_chk,fr.think,fr.plan,fr.plan_detial,fr.action,fr.action_detial,fr.lawsuit_chk
    ,fr.lawsuit,fr.personality,fr.typep,fr.refer,fr.admit_type,fr.income,amt.admittype_name,fr.typep_1,fr.typep_2,fr.typep_3,fr.typep_4,fr.typep_5,fr.recdate,doc.name recorder
    ,s.shape_name,sk.skin_name,con.scab_chk,sc1.scab_name sc1,sc2.scab_name sc2,sc3.scab_name sc3,sc4.scab_name sc4,sc5.scab_name sc5,sc6.scab_name sc6,sc7.scab_name sc7,sc8.scab_name sc8,sc9.scab_name sc9
    ,con.detial_scab,con.swelling_chk,con.swelling,con.movement,con.disabled_chk,con.disabled
    FROM jvl_ipd_first_rec fr
    left outer join jvl_disease d1 on d1.disease_id = fr.d0
    left outer join jvl_disease d2 on d2.disease_id = fr.d1
    left outer join jvl_disease d3 on d3.disease_id = fr.d2
    left outer join jvl_disease d4 on d4.disease_id = fr.d3
    left outer join jvl_disease d5 on d5.disease_id = fr.d4
    left outer join jvl_disease d6 on d6.disease_id = fr.d5
    left outer join jvl_disease d7 on d7.disease_id = fr.d6
    left outer join jvl_disease d8 on d8.disease_id = fr.d7
    left outer join jvlmatrix_alcohol_type alc on alc.al_id = fr.alcohol_type 
    left outer join jvlmatrix_alcohol_volume alcV on alcV.volume_id = fr.alcohol_vol 
    left outer join jvlmatrix_drug dr on dr.drug_id = fr.dope_type 
    left outer join jvl_admittype amt on amt.admittype_id = fr.admittype
    inner join doctor doc on doc.code = fr.recorder
    inner join jvl_condition con on con.ipd_fr_id = fr.ipd_fr_id
    inner join jvl_shape s on s.shape_id = con.shape
    inner join jvl_skin sk on sk.skin_id = con.skin_color
    left outer join jvl_scab sc1 on sc1.scab_id = con.scab_0
    left outer join jvl_scab sc2 on sc2.scab_id = con.scab_1
    left outer join jvl_scab sc3 on sc3.scab_id = con.scab_2
    left outer join jvl_scab sc4 on sc4.scab_id = con.scab_3
    left outer join jvl_scab sc5 on sc5.scab_id = con.scab_4
    left outer join jvl_scab sc6 on sc6.scab_id = con.scab_5
    left outer join jvl_scab sc7 on sc7.scab_id = con.scab_6
    left outer join jvl_scab sc8 on sc8.scab_id = con.scab_7
    left outer join jvl_scab sc9 on sc9.scab_id = con.scab_8
    where fr.ipd_fr_id = :ipd_fr_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
  $series['hn'] = $rslt['hn'];
  $series['an'] = $rslt['an'];
  $series['ชื่อผู้ให้ประวัติ'] = isset($rslt['biographer'])?$conv->tis620_to_utf8($rslt['biographer']):'';
  $series['เกี่ยวข้องเป็น'] = isset($rslt['relative'])?$conv->tis620_to_utf8($rslt['relative']):'';
  $series['tel0'] = isset($rslt['tel0'])?$conv->tis620_to_utf8($rslt['tel0']):'';
  $series['tel1'] = isset($rslt['tel1'])?$conv->tis620_to_utf8($rslt['tel1']):'';
  $series['relative1'] = isset($rslt['relative1'])?$conv->tis620_to_utf8($rslt['relative1']):'';
  $series['tel2'] = isset($rslt['tel2'])?$conv->tis620_to_utf8($rslt['tel2']):'';
  $series['relative2'] = isset($rslt['relative2'])?$conv->tis620_to_utf8($rslt['relative2']):'';
  $series['fathername'] = isset($rslt['fathername'])?$conv->tis620_to_utf8($rslt['fathername']):'';
  $series['father_chk'] = isset($rslt['father_chk'])?$rslt['father_chk']:'';
  $series['father_age'] = isset($rslt['father_age'])?$conv->tis620_to_utf8($rslt['father_age']):'';
  $series['father_occup'] = isset($rslt['father_occup'])?$conv->tis620_to_utf8($rslt['father_occup']):'';
  $series['mothername'] = isset($rslt['mothername'])?$conv->tis620_to_utf8($rslt['mothername']):'';
  $series['mother_chk'] = isset($rslt['mother_chk'])?$rslt['mother_chk']:'';
  $series['mother_age'] = isset($rslt['mother_age'])?$conv->tis620_to_utf8($rslt['mother_age']):'';
  $series['mother_occup'] = isset($rslt['mother_occup'])?$conv->tis620_to_utf8($rslt['mother_occup']):'';
  $series['marry_chk'] = isset($rslt['marry_chk'])?$rslt['marry_chk']:'';
  $series['spouse_name'] = isset($rslt['spouse_name'])?$conv->tis620_to_utf8($rslt['spouse_name']):'';
  $series['child'] = isset($rslt['child'])?$conv->tis620_to_utf8($rslt['child']):'';
  $series['earmark'] = isset($rslt['earmark'])?$conv->tis620_to_utf8($rslt['earmark']):'';
  $series['bw'] = isset($rslt['bw'])?$conv->tis620_to_utf8($rslt['bw']):'';
  $series['height'] = isset($rslt['height'])?$conv->tis620_to_utf8($rslt['height']):'';
  $series[' bmi'] = isset($rslt['bmi'])?$conv->tis620_to_utf8($rslt['bmi']):'';
  $series['pmh'] = isset($rslt['pmh'])?$conv->tis620_to_utf8($rslt['pmh']):'';
  $series['cc'] = isset($rslt['cc'])?$conv->tis620_to_utf8($rslt['cc']):'';
  $series['hpi'] = isset($rslt['hpi'])?$conv->tis620_to_utf8($rslt['hpi']):'';
  $series['typeP_1'] = $rslt['typep_1']!=0?'3s':'';
  $series['typeP_2'] = $rslt['typep_2']!=0?'&nbsp;&nbsp; เฝ้าระวังหลบหนี':'';
  $series['typeP_3'] = $rslt['typep_3']!=0?'&nbsp;&nbsp; เฝ้าระวังฆ่าตัวตาย':'';
  $series['typeP_4'] = $rslt['typep_4']!=0?'&nbsp;&nbsp; เฝ้าระวังอุบัติเหตุ':'';
  $series['typeP_5'] = $rslt['typep_5']!=0?'&nbsp;&nbsp; เฝ้าระวังพฤติกรรมรุนแรง':'';
  $series['weapon'] = isset($rslt['weapon'])?$conv->tis620_to_utf8($rslt['weapon']):'';
  $series['weaponer'] = isset($rslt['weapon'])?$conv->tis620_to_utf8($rslt['weaponer']):'';
  $series['detain'] = isset($rslt['detain'])?$conv->tis620_to_utf8($rslt['detain']):'';
  $series['smi4_1'] = $rslt['smi4_1']!=0?'&nbsp;&nbsp; '.$smi4_1:'';
  $series['smi4_2'] = $rslt['smi4_2']!=0?'&nbsp;&nbsp; '.$smi4_2:'';
  $series['smi4_3'] = $rslt['smi4_3']!=0?'&nbsp;&nbsp; '.$smi4_3:'';
  $series['smi4_4'] = $rslt['smi4_4']!=0?'&nbsp;&nbsp; '.$smi4_4:'';
  $series['lawpsych'] = isset($rslt['lawpsych'])?$conv->tis620_to_utf8($rslt['lawpsych']):'';
  $series['sleep'] = isset($rslt['sleep'])?$conv->tis620_to_utf8($rslt['sleep']):'';
  $series['IC'] = isset($rslt['ic'])?$conv->tis620_to_utf8($rslt['ic']):'';
  $series['med_chk']= $rslt['med_chk'];
  $series['med'] = isset($rslt['med'])?$conv->tis620_to_utf8($rslt['med']):'';
  $series['accident'] = isset($rslt['accident'])?$conv->tis620_to_utf8($rslt['accident']):'';
  $series['wound'] = isset($rslt['wound'])?$conv->tis620_to_utf8($rslt['wound']):'';
  $series['surgery'] = isset($rslt['surgery'])?$conv->tis620_to_utf8($rslt['surgery']):'';
  $series['complicate'] = isset($rslt['complicate'])?$conv->tis620_to_utf8($rslt['complicate']):'';
  $series['menses'] = isset($rslt['menses'])?$conv->tis620_to_utf8($rslt['menses']):'';
  $series['last_useA'] = isset($rslt['last_useA'])?'ใช้ครั้งสุดท้ายเมื่อ '.$rslt['last_useA'].' วันทีแล้ว':'';
  $series['drug_name'] = isset($rslt['drug_name'])?$conv->tis620_to_utf8($rslt['drug_name']):'';
  $series['last_useD'] = isset($rslt['last_useD'])?'ใช้ครั้งสุดท้ายเมื่อ '.$rslt['last_useD'].' วันทีแล้ว':'';
  $series['recorder'] = $conv->tis620_to_utf8($rslt['recorder']);
  $series['recdate'] = Datethai1($rslt['recdate']);
//array_push($result, $series);    
//}
//print_r($series);
print json_encode($series);
$conn_DB->close_PDO();
?>