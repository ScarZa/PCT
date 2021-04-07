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
    ,fr.drink_cause,fr.dope_chk,dr.drug_name,fr.narcotic_vol,fr.narcotic_frequency,fr.narcotic_age,fr.last_useD,fr.narcotic_stop,fr.narcotic_cause,fr.menses_chk,fr.menses
    ,CASE WHEN fr.disease_chk= 'N' THEN 'ไม่มี' WHEN fr.disease_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END disease_chk
    ,d1.disease_name d1,d2.disease_name d2,d3.disease_name d3,d4.disease_name d4,d5.disease_name d5,d6.disease_name d6,d7.disease_name d7,fr.disease
    ,CASE WHEN fr.heal_chk= 'N' THEN 'ไม่ได้รักษา' ELSE 'อยู่ระหว่างรักษา' END heal_chk
    ,fr.heal
    ,CASE WHEN fr.whip_chk= 'N' THEN 'ไม่มี' WHEN fr.whip_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END whip_chk
    ,fr.whip
    ,CASE WHEN fr.regular_med_chk= 'N' THEN 'ไม่มี' WHEN fr.regular_med_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END regular_med_chk
    ,fr.regular_med
    ,CASE WHEN fr.adr_chk= 'N' THEN 'ไม่มี' WHEN fr.adr_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END adr_chk
    ,fr.adr
    ,CASE WHEN fr.beallergic_chk= 'N' THEN 'ไม่มี' WHEN fr.beallergic_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END beallergic_chk
    ,fr.beallergic
    ,CASE WHEN fr.old_med_chk= 'N' THEN 'ไม่มี' WHEN fr.old_med_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END old_med_chk
    ,fr.old_med
    ,CASE WHEN fr.heredity_chk= 'N' THEN 'ไม่มี' WHEN fr.heredity_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END heredity_chk
    ,fr.heredity
    ,CASE WHEN fr.Hurt_yourself_chk= 'N' THEN 'ไม่มี' WHEN fr.Hurt_yourself_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END Hurt_yourself_chk
    ,CASE WHEN fr.think= 1 THEN 'มีความคิดอยากฆ่าตัวตาย' ELSE '' END think
    ,CASE WHEN fr.plan= 1 THEN 'มีความคิดและมีแผนการที่จะฆ่าตัวตาย' ELSE '' END plan,fr.plan_detial
    ,CASE WHEN fr.action= 1 THEN 'มีความพยายามหรือลงมือกระทำการฆ่าตัวตาย' ELSE '' END action,fr.action_detial
    ,CASE WHEN fr.lawsuit_chk= 'N' THEN 'ไม่มี' WHEN fr.lawsuit_chk = 'Y' THEN 'มี' ELSE 'ไม่ทราบ' END lawsuit_chk
    ,fr.lawsuit,fr.personality
    ,CASE WHEN fr.typep= 1 THEN 'จิตเวชทั่วไป' ELSE 'พรบ.สุรา/ยาเสพติด' END typep
    ,CASE WHEN fr.refer= 1 THEN 'Refer-in' ELSE 'ไม่มีใบ Refer' END refer
    ,CASE WHEN fr.admit_type= 1 THEN 'มารับบริการเอง' WHEN fr.admit_type = 2 THEN 'รพ.ในเครือข่ายนำส่ง'  WHEN fr.admit_type = 3 THEN 'รพ.นอกเครือข่ายนำส่ง'  WHEN fr.admit_type = 4 THEN 'มูลนิธินำส่ง' ELSE 'ตำรวจ/หรือฝ่ายปกครองนำส่ง' END admit_type
    ,CASE WHEN fr.income= 1 THEN 'Admit แบบปกติ' WHEN fr.income = 2 THEN 'Admit โดยการ Refer กลับ' ELSE 'Admit เพื่อการ Rehabilitation' END income
    ,fr.income income_code,amt.admittype_name,fr.typep_1,fr.typep_2,fr.typep_3,fr.typep_4,fr.typep_5,fr.recdate,doc.name recorder
    ,s.shape_name,sk.skin_name,con.scab_chk,sc1.scab_name sc1,sc2.scab_name sc2,sc3.scab_name sc3,sc4.scab_name sc4,sc5.scab_name sc5,sc6.scab_name sc6,sc7.scab_name sc7,sc8.scab_name sc8,sc9.scab_name sc9
    ,con.detial_scab
    ,CASE WHEN con.swelling_chk= 'N' THEN 'ไม่มี' ELSE 'มี' END swelling_chk
    ,con.swelling,con.movement
    ,CASE WHEN con.disabled_chk= 'N' THEN 'ไม่มี' ELSE 'มี' END disabled_chk,con.disabled
    ,ms.mental_id
		,CASE WHEN ms.think_chk= 'N' THEN 'ไม่สมเหตุสมผล' ELSE 'สมเหตุสมผล' END think_chk
		,CASE WHEN ms.continuous= 'N' THEN 'ไม่ต่อเนื่อง' WHEN ms.continuous= 'Y' THEN 'ต่อเนื่อง' ELSE '' END continuous,ms.continuous_detial
		,CASE WHEN ms.think_1= '0' THEN '' ELSE 'หลงผิด' END think_1,ms.think_1d
		,CASE WHEN ms.think_2= '0' THEN '' ELSE 'หวาดระแวง' END think_2,ms.think_2d
		,CASE WHEN ms.think_3= '0' THEN '' ELSE 'หยุดชะงัก' END think_3
		,CASE WHEN ms.think_4= '0' THEN '' ELSE 'วกวน' END think_4
		,CASE WHEN ms.think_5= '0' THEN '' ELSE 'หลากหลาย/ฟุ้งซาน' END think_5
		,CASE WHEN ms.think_6= '0' THEN '' ELSE 'อื่นๆ' END think_6,ms.think_6d
		,CASE WHEN ms.mood1= '0' THEN '' ELSE 'แจ่มใส' END mood1
		,CASE WHEN ms.mood2= '0' THEN '' ELSE 'หงุดหงิด' END mood2
		,CASE WHEN ms.mood3= '0' THEN '' ELSE 'ซึมเศร้า' END mood3
		,CASE WHEN ms.mood4= '0' THEN '' ELSE 'เฉยเมย/ไร้อารมณ์' END mood4
		,CASE WHEN ms.mood5= '0' THEN '' ELSE 'อื่นๆ' END mood5,ms.other_mood
		,CASE WHEN ms.action_1= '0' THEN '' ELSE 'ก้าวร้าว' END action_1
		,CASE WHEN ms.action_2= '0' THEN '' ELSE 'ทำลายสิ่งของเครื่องใช้' END action_2
		,CASE WHEN ms.action_3= '0' THEN '' ELSE 'หวาดระแวง' END action_3
		,CASE WHEN ms.action_4= '0' THEN '' ELSE 'ทำร้ายตัวเอง' END action_4,ms.action_4d
		,CASE WHEN ms.action_5= '0' THEN '' ELSE 'พูดมาก' END action_5
		,CASE WHEN ms.action_6= '0' THEN '' ELSE 'ทำร้ายผู้อื่น' END action_6,ms.action_6d
		,CASE WHEN ms.action_7= '0' THEN '' ELSE 'พูดคนเดียว' END action_7
		,CASE WHEN ms.action_8= '0' THEN '' ELSE 'หัวเราะคนเดียว' END action_8
		,CASE WHEN ms.action_9= '0' THEN '' ELSE 'ร้องไห้ไม่สมเหตุผล' END action_9
		,CASE WHEN ms.action_10= '0' THEN '' ELSE 'อื่นๆ' END action_10,ms.action_10d
		,CASE WHEN ms.recognition_chk= 'N' THEN 'ตรงสภาพที่เป็นจริง' ELSE 'ประสาทหลอน' END recognition_chk
		,CASE WHEN ms.recog_1= 'N' THEN '' ELSE 'หู' END recog_1,ms.recog_1d
		,CASE WHEN ms.recog_2= 'N' THEN '' ELSE 'ตา' END recog_2,ms.recog_2d
		,CASE WHEN ms.recog_3= 'N' THEN '' ELSE 'จมูก' END recog_3,ms.recog_3d
		,CASE WHEN ms.recog_4= 'N' THEN '' ELSE 'ปาก' END recog_4,ms.recog_4d
		,CASE WHEN ms.recog_5= 'N' THEN '' ELSE 'สัมผัส' END recog_5,ms.recog_5d
		,CASE WHEN ms.accept_chk= 'N' THEN 'ยอมรับการเจ็บป่วย' ELSE 'ไม่ยอมรับการเจ็บป่วย' END accept_chk,ms.accept
		,CASE WHEN ms.memo_short= 'N' THEN 'ปกติ' ELSE 'ไม่ปกติ' END memo_short,ms.memos
		,CASE WHEN ms.memo_long= 'N' THEN 'ปกติ' ELSE 'ไม่ปกติ' END memo_long,ms.memol
		,ms.recdate recdate2,doc2.name recorder2
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
    left outer join doctor doc on doc.code = fr.recorder
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
	left outer join jvl_mental_state ms on ms.ipd_fr_id = fr.ipd_fr_id
	left outer join doctor doc2 on doc2.code = ms.recorder
    where fr.ipd_fr_id = :ipd_fr_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
  $series['ipd_fr_id'] = $data;
  $series['hn'] = $rslt['hn'];
  $series['an'] = $rslt['an'];
  $series['biographer'] = isset($rslt['biographer'])?$conv->tis620_to_utf8($rslt['biographer']):'';
  $series['relative'] = isset($rslt['relative'])?$conv->tis620_to_utf8($rslt['relative']):'';
  $series['tel0'] = isset($rslt['tel0'])?$conv->tis620_to_utf8($rslt['tel0']):'';
  $series['tel1'] = isset($rslt['tel1'])?$conv->tis620_to_utf8($rslt['tel1']):'';
  $series['relative1'] = isset($rslt['relative1'])?$conv->tis620_to_utf8($rslt['relative1']):'ไม่ระบุ';
  $series['tel2'] = isset($rslt['tel2'])?$conv->tis620_to_utf8($rslt['tel2']):'';
  $series['relative2'] = isset($rslt['relative2'])?$conv->tis620_to_utf8($rslt['relative2']):'ไม่ระบุ';
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
  $series['bmi'] = isset($rslt['bmi'])?$conv->tis620_to_utf8($rslt['bmi']):'';
  $series['pmh'] = isset($rslt['pmh'])?$conv->tis620_to_utf8($rslt['pmh']):'';
  $series['cc'] = isset($rslt['cc'])?$conv->tis620_to_utf8($rslt['cc']):'';
  $series['hpi'] = isset($rslt['hpi'])?$conv->tis620_to_utf8($rslt['hpi']):'';
  $series['typeP_1'] = $rslt['typep_1']!=0?'3s &nbsp;&nbsp;':'';
  $series['typeP_2'] = $rslt['typep_2']!=0?'เฝ้าระวังหลบหนี &nbsp;&nbsp;':'';
  $series['typeP_3'] = $rslt['typep_3']!=0?'เฝ้าระวังฆ่าตัวตาย &nbsp;&nbsp;':'';
  $series['typeP_4'] = $rslt['typep_4']!=0?'เฝ้าระวังอุบัติเหตุ &nbsp;&nbsp;':'';
  $series['typeP_5'] = $rslt['typep_5']!=0?'เฝ้าระวังพฤติกรรมรุนแรง &nbsp;&nbsp;':'';
  $series['weapon'] = isset($rslt['weapon'])?$conv->tis620_to_utf8($rslt['weapon']):'';
  $series['weaponer'] = isset($rslt['weapon'])?$conv->tis620_to_utf8($rslt['weaponer']):'';
  $series['detain'] = isset($rslt['detain'])?$conv->tis620_to_utf8($rslt['detain']):'';
  $series['smi4_1'] = $rslt['smi4_1']!=0?$rslt['smi4_1'].'&nbsp;&nbsp; ':'';
  $series['smi4_2'] = $rslt['smi4_2']!=0?$rslt['smi4_2'].'&nbsp;&nbsp; ':'';
  $series['smi4_3'] = $rslt['smi4_3']!=0?$rslt['smi4_3'].'&nbsp;&nbsp; ':'';
  $series['smi4_4'] = $rslt['smi4_4']!=0?$rslt['smi4_4'].'&nbsp;&nbsp; ':'';
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
  $series['alcohol_chk']= $rslt['alcohol_chk']=='Y'?'ดื่ม':'ไม่ดื่ม';
  $series['name'] = isset($rslt['name'])?$conv->tis620_to_utf8($rslt['name']):'';
  $series['volume_type'] = isset($rslt['volume_type'])?$conv->tis620_to_utf8($rslt['volume_type']):'';
  $series['alcohol_frequency'] = isset($rslt['alcohol_frequency'])?$conv->tis620_to_utf8($rslt['alcohol_frequency']):'';
  $series['drink_age'] = isset($rslt['drink_age'])?$conv->tis620_to_utf8($rslt['drink_age']):'';
  $series['last_useA'] = isset($rslt['last_useA'])?'ใช้ครั้งสุดท้ายเมื่อ '.$rslt['last_useA'].' วันทีแล้ว':'';
  $series['time_stop'] = !empty($rslt['time_stop'])?'หยุดมาแล้ว '.$rslt['time_stop'].' วัน':'';
  $series['drink_cause'] = isset($rslt['drink_cause'])?$conv->tis620_to_utf8($rslt['drink_cause']):'';
  $series['dope_chk']= $rslt['dope_chk']=='Y'?'เสพ':'ไม่เสพ';
  $series['drug_name'] = isset($rslt['drug_name'])?$conv->tis620_to_utf8($rslt['drug_name']):'';
  $series['narcotic_vol'] = isset($rslt['narcotic_vol'])?$conv->tis620_to_utf8($rslt['narcotic_vol']):'';
  $series['narcotic_frequency'] = isset($rslt['narcotic_frequency'])?$conv->tis620_to_utf8($rslt['narcotic_frequency']):'';
  $series['narcotic_age'] = isset($rslt['narcotic_age'])?$conv->tis620_to_utf8($rslt['narcotic_age']):'';
  $series['last_useD'] = isset($rslt['last_useD'])?'ใช้ครั้งสุดท้ายเมื่อ '.$rslt['last_useD'].' วันทีแล้ว':'';
  $series['narcotic_stop'] = !empty($rslt['narcotic_stop'])?'หยุดมาแล้ว '.$rslt['narcotic_stop'].' วัน':'';
  $series['narcotic_cause'] = isset($rslt['narcotic_cause'])?$conv->tis620_to_utf8($rslt['narcotic_cause']):'';
  $series['disease_chk']= $rslt['disease_chk'];
  $series['d1'] = isset($rslt['d1'])?$conv->tis620_to_utf8($rslt['d1']):'';
  $series['d2'] = isset($rslt['d2'])?$conv->tis620_to_utf8($rslt['d2']):'';
  $series['d3'] = isset($rslt['d3'])?$conv->tis620_to_utf8($rslt['d3']):'';
  $series['d4'] = isset($rslt['d4'])?$conv->tis620_to_utf8($rslt['d4']):'';
  $series['d5'] = isset($rslt['d5'])?$conv->tis620_to_utf8($rslt['d5']):'';
  $series['d6'] = isset($rslt['d6'])?$conv->tis620_to_utf8($rslt['d6']):'';
  $series['d7'] = isset($rslt['d7'])?$conv->tis620_to_utf8($rslt['d7']):'';
  $series['disease'] = isset($rslt['disease'])?$conv->tis620_to_utf8($rslt['disease']):'';
  $series['heal_chk']= $rslt['heal_chk'];
  $series['heal'] = isset($rslt['heal'])?$conv->tis620_to_utf8($rslt['heal']):'';
  $series['whip_chk']= $rslt['whip_chk'];
  $series['whip'] = isset($rslt['whip'])?$conv->tis620_to_utf8($rslt['whip']):'';
  $series['regular_med_chk']= $rslt['regular_med_chk'];
  $series['regular_med'] = isset($rslt['regular_med'])?$conv->tis620_to_utf8($rslt['regular_med']):'';
  $series['adr_chk']= $rslt['adr_chk'];
  $series['adr'] = isset($rslt['adr'])?$conv->tis620_to_utf8($rslt['adr']):'';
  $series['beallergic_chk']= $rslt['beallergic_chk'];
  $series['beallergic'] = isset($rslt['beallergic'])?$conv->tis620_to_utf8($rslt['beallergic']):'';
  $series['old_med_chk']= $rslt['old_med_chk'];
  $series['old_med'] = isset($rslt['old_med'])?$conv->tis620_to_utf8($rslt['old_med']):'';
  $series['heredity_chk']= $rslt['heredity_chk'];
  $series['heredity'] = isset($rslt['heredity'])?$conv->tis620_to_utf8($rslt['heredity']):'';
  $series['Hurt_yourself_chk']= $rslt['Hurt_yourself_chk'];
  $series['think']= $rslt['think'];
  $series['plan']= $rslt['plan'];
  $series['plan_detial'] = isset($rslt['plan_detial'])?$conv->tis620_to_utf8($rslt['plan_detial']):'';
  $series['action']= $rslt['action'];
  $series['action_detial'] = isset($rslt['action_detial'])?$conv->tis620_to_utf8($rslt['action_detial']):'';
  $series['lawsuit_chk']= $rslt['lawsuit_chk'];
  $series['lawsuit'] = isset($rslt['lawsuit'])?$conv->tis620_to_utf8($rslt['lawsuit']):'';
  $series['personality'] = isset($rslt['personality'])?$conv->tis620_to_utf8($rslt['personality']):'';
  $series['shape_name'] = isset($rslt['shape_name'])?$conv->tis620_to_utf8($rslt['shape_name']):'';
  $series['skin_name'] = isset($rslt['skin_name'])?$conv->tis620_to_utf8($rslt['skin_name']):'';
  $series['sc1'] = isset($rslt['sc1'])?$conv->tis620_to_utf8($rslt['sc1']):'';
  $series['sc2'] = isset($rslt['sc2'])?$conv->tis620_to_utf8($rslt['sc2']):'';
  $series['sc3'] = isset($rslt['sc3'])?$conv->tis620_to_utf8($rslt['sc3']):'';
  $series['sc4'] = isset($rslt['sc4'])?$conv->tis620_to_utf8($rslt['sc4']):'';
  $series['sc5'] = isset($rslt['sc5'])?$conv->tis620_to_utf8($rslt['sc5']):'';
  $series['sc6'] = isset($rslt['sc6'])?$conv->tis620_to_utf8($rslt['sc6']):'';
  $series['sc7'] = isset($rslt['sc7'])?$conv->tis620_to_utf8($rslt['sc7']):'';
  $series['sc8'] = isset($rslt['sc8'])?$conv->tis620_to_utf8($rslt['sc8']):'';
  $series['sc9'] = isset($rslt['sc9'])?$conv->tis620_to_utf8($rslt['sc9']):'';
  $series['detial_scab'] = isset($rslt['detial_scab'])?$conv->tis620_to_utf8($rslt['detial_scab']):'';
  $series['swelling_chk']= $rslt['swelling_chk'];
  $series['swelling'] = isset($rslt['swelling'])?$conv->tis620_to_utf8($rslt['swelling']):'';
  $series['movement'] = isset($rslt['movement'])?$conv->tis620_to_utf8($rslt['movement']):'';
  $series['disabled_chk']= $rslt['disabled_chk'];
  $series['disabled'] = isset($rslt['disabled'])?$conv->tis620_to_utf8($rslt['disabled']):'';
  $series['typep']= $rslt['typep'];
  $series['refer']= $rslt['refer'];
  $series['admit_type']= $rslt['admit_type'];
  $series['income']= $rslt['income'];
  $series['income_code']= $rslt['income_code'];
  $series['admittype_name'] = isset($rslt['admittype_name'])?$conv->tis620_to_utf8($rslt['admittype_name']):'';
  $series['recorder'] = $conv->tis620_to_utf8($rslt['recorder']);
  $series['recdate'] = Datethai1($rslt['recdate']);
  $series['think_chk']= $rslt['think_chk'];
  $series['continuous']= $rslt['continuous'];
  $series['continuous_detial'] = isset($rslt['continuous_detial'])?$conv->tis620_to_utf8($rslt['continuous_detial']):'';
  $series['think_1']= $rslt['think_1'];
  $series['think_1d'] = isset($rslt['think_1d'])?$conv->tis620_to_utf8($rslt['think_1d']):'';
  $series['think_2']= $rslt['think_2'];
  $series['think_2d'] = isset($rslt['think_2d'])?$conv->tis620_to_utf8($rslt['think_2d']):'';
  $series['think_3']= $rslt['think_3'];
  $series['think_4']= $rslt['think_4'];
  $series['think_5']= $rslt['think_5'];
  $series['think_6']= $rslt['think_6'];
  $series['think_6d'] = isset($rslt['think_6d'])?$conv->tis620_to_utf8($rslt['think_6d']):'';
  $series['mood1']= $rslt['mood1'];
  $series['mood2']= $rslt['mood2'];
  $series['mood3']= $rslt['mood3'];
  $series['mood4']= $rslt['mood4'];
  $series['mood5']= $rslt['mood5'];
  $series['other_mood'] = isset($rslt['other_mood'])?$conv->tis620_to_utf8($rslt['other_mood']):'';
  $series['action_1']= $rslt['action_1'];
  $series['action_2']= $rslt['action_2'];
  $series['action_3']= $rslt['action_3'];
  $series['action_4']= $rslt['action_4'];
  $series['action_4d'] = isset($rslt['action_4d'])?$conv->tis620_to_utf8($rslt['action_4d']):'';
  $series['action_5']= $rslt['action_5'];
  $series['action_6']= $rslt['action_6'];
  $series['action_6d'] = isset($rslt['action_6d'])?$conv->tis620_to_utf8($rslt['action_6d']):'';
  $series['action_7']= $rslt['action_7'];
  $series['action_8']= $rslt['action_8'];
  $series['action_9']= $rslt['action_9'];
  $series['action_10']= $rslt['action_10'];
  $series['action_10d'] = isset($rslt['action_10d'])?$conv->tis620_to_utf8($rslt['action_10d']):'';
  $series['recognition_chk']= $rslt['recognition_chk'];
  $series['recog_1']= $rslt['recog_1'];
  $series['recog_1d'] = isset($rslt['recog_1d'])?$conv->tis620_to_utf8($rslt['recog_1d']):'';
  $series['recog_2']= $rslt['recog_2'];
  $series['recog_2d'] = isset($rslt['recog_2d'])?$conv->tis620_to_utf8($rslt['recog_2d']):'';
  $series['recog_3']= $rslt['recog_3'];
  $series['recog_3d'] = isset($rslt['recog_3d'])?$conv->tis620_to_utf8($rslt['recog_3d']):'';
  $series['recog_4']= $rslt['recog_4'];
  $series['recog_4d'] = isset($rslt['recog_4d'])?$conv->tis620_to_utf8($rslt['recog_4d']):'';
  $series['recog_5']= $rslt['recog_5'];
  $series['recog_5d'] = isset($rslt['recog_5d'])?$conv->tis620_to_utf8($rslt['recog_5d']):'';
  $series['accept_chk']= $rslt['accept_chk'];
  $series['accept'] = isset($rslt['accept'])?$conv->tis620_to_utf8($rslt['accept']):'';
  $series['memo_short']= $rslt['memo_short'];
  $series['memos'] = isset($rslt['memos'])?$conv->tis620_to_utf8($rslt['memos']):'';
  $series['memo_long']= $rslt['memo_long'];
  $series['memol'] = isset($rslt['memol'])?$conv->tis620_to_utf8($rslt['memol']):'';
  $series['recorder2'] = $conv->tis620_to_utf8($rslt['recorder2']);
  $series['recdate2'] = Datethai1($rslt['recdate2']);
//array_push($result, $series);    
//}
//print_r($series);
print json_encode($series);
$conn_DB->close_PDO();
?>