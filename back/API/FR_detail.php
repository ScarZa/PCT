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
$data = isset($_GET['data'])?$_GET['data']:$_POST['data'];
//$data = '640000961';
$sql0 = "SELECT a.hn from an_stat a WHERE a.an = :an";
$conn_DB->imp_sql($sql0);
$execute=array(':an' => $data);
$rslt0=$conn_DB->select_a($execute);
$sql="SELECT (SELECT count(a.an) from an_stat a WHERE a.hn = '".$rslt0['hn']."')admit
,CONCAT(p.pname,p.fname,' ',p.lname)fullname,a.age_y age,pt.name ptname
,p.sex sexcode,s.name sex,m.name marry_name,birthday,n.name nation_name,r.name religion_name,e.name edu_name,occ.name occ_name,p.cid
,i.regdate,SUBSTR(i.regtime,1,5)regtime,doc.name as doctorname,a.pdx,a.dx0,a.dx1,a.dx2,a.dx3,a.dx4
,IF(a.lastvisit ='999', 'ไม่เคยรับการ admit', a.lastvisit)lastvisit
,oc.temperature,oc.pulse,oc.rr,oc.bps,oc.bpd
,fr.*
FROM jvl_ipd_first_rec fr
inner join an_stat a on a.an = fr.an
left outer join patient p on fr.hn=p.hn
inner join sex s on s.code=p.sex
inner join marrystatus m on m.code = p.marrystatus
left outer join nationality n on n.nationality = p.nationality
left outer join religion r on r.religion = p.religion
left outer join education e on e.education = p.educate
inner join occupation occ on occ.occupation = p.occupation
left outer join pttype pt on a.pttype=pt.pttype
left outer join opdscreen oc on oc.vn=a.vn
left outer join ipt i on a.an=i.an
left outer join doctor doc on i.admdoctor=doc.code
WHERE fr.an = :an and fr.chk_update = 0";
$conn_DB->imp_sql($sql);
//$execute=array(':an' => $data);
$rslt=$conn_DB->select_a($execute);
//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['ipd_fr_id'] = $rslt['ipd_fr_id'];
    $series['admit'] = $rslt['admit'];
    $fullname=$conv->tis620_to_utf8( $rslt['fullname']);
    $series['fullname'] = $fullname;
    $series['age'] = $rslt['age'];
    $series['hn'] = $rslt['hn'];
    $series['vn'] = $rslt['vn'];
    $series['an'] = $rslt['an'];
    $series['ptname'] = $conv->tis620_to_utf8($rslt['ptname']);
    $series['marry_name'] = $conv->tis620_to_utf8($rslt['marry_name']);
    $series['nation_name'] = $conv->tis620_to_utf8($rslt['nation_name']);
    $series['religion_name'] = $conv->tis620_to_utf8($rslt['religion_name']);
    $series['edu_name'] = $conv->tis620_to_utf8($rslt['edu_name']);
    $series['occ_name'] = $conv->tis620_to_utf8($rslt['occ_name']);
    $series['cid'] = $rslt['cid'];
    $series['sexcode'] = $rslt['sexcode'];
    $series['sex'] = $conv->tis620_to_utf8($rslt['sex']);
    $series['birthday'] = DateThai1($rslt['birthday']);
    $series['fulladdressname'] = $conv->tis620_to_utf8($rslt['patient_add']);
    
    $series['bw'] = $rslt['bw'];
    $series['height'] = $rslt['height'];
    $series['bmi'] = $rslt['bmi'];
    $series['temp'] = round($rslt['temperature'],1);
    $series['pr'] = round($rslt['pulse']);
    $series['rr'] = round($rslt['rr']);
    $series['bps'] = round($rslt['bps']);
    $series['bpd'] = round($rslt['bpd']);
    $series['hometel'] = $conv->tis620_to_utf8($rslt['tel0']);
    $series['informtel'] = $conv->tis620_to_utf8($rslt['tel1']);
    $series['relative1'] = $conv->tis620_to_utf8($rslt['relative1']);
    $series['tel2'] = $conv->tis620_to_utf8($rslt['tel2']);
    $series['relative2'] = $conv->tis620_to_utf8($rslt['relative2']);
    $cc=$conv->tis620_to_utf8( $rslt['cc']);
    $hpi=$conv->tis620_to_utf8( $rslt['hpi']);
    $pmh=$conv->tis620_to_utf8( $rslt['pmh']);
    $series['cc'] = $cc;
    $series['hpi'] = $hpi;
    $series['pmh'] = !empty($pmh)?$pmh:'';
    $series['admitdate'] = DateThai1($rslt['regdate']);
    $series['regtime'] = $rslt['regtime'];
    $series['doctorname'] = $conv->tis620_to_utf8($rslt['doctorname']);
    $series['pdx'] = $rslt['pdx'];
    $series['dx0'] = $rslt['dx0'];
    $series['dx1'] = $rslt['dx1'];
    $series['dx2'] = $rslt['dx2'];
    $series['dx3'] = $rslt['dx3'];
    $series['dx4'] = $rslt['dx4'];
    $series['lastvisit'] = $rslt['lastvisit'];
    $series['relative'] = isset($rslt['relative'])?$conv->tis620_to_utf8($rslt['relative']):'';
    $series['biographer'] = isset($rslt['biographer'])?$conv->tis620_to_utf8($rslt['biographer']):'';
    $series['fathername'] = $conv->tis620_to_utf8($rslt['fathername']);
    $series['father_chk'] = $rslt['father_chk'];
    $series['father_age'] = isset($rslt['father_age'])?$conv->tis620_to_utf8($rslt['father_age']):'';
    $series['father_occup'] = isset($rslt['father_occup'])?$conv->tis620_to_utf8($rslt['father_occup']):'';
    $series['mothername'] = $conv->tis620_to_utf8($rslt['mothername']);
    $series['mother_chk'] = $rslt['mother_chk'];
    $series['mother_age'] = isset($rslt['mother_age'])?$conv->tis620_to_utf8($rslt['mother_age']):'';
    $series['mother_occup'] = isset($rslt['mother_occup'])?$conv->tis620_to_utf8($rslt['mother_occup']):'';
    $series['marry_chk'] = $rslt['marry_chk'];
    $series['spouse_name'] = isset($rslt['spouse_name'])?$conv->tis620_to_utf8($rslt['spouse_name']):'';
    $series['child'] = isset($rslt['child'])?$conv->tis620_to_utf8($rslt['child']):'';
    $series['earmark'] = isset($rslt['earmark'])?$conv->tis620_to_utf8($rslt['earmark']):'';
    $series['weapon_chk'] = $rslt['weapon_chk'];
    $series['weapon'] = isset($rslt['weapon'])?$conv->tis620_to_utf8($rslt['weapon']):'';
    $series['weaponer_chk'] = $rslt['weaponer_chk'];
    $series['weaponer'] = isset($rslt['weaponer'])?$conv->tis620_to_utf8($rslt['weaponer']):'';
    $series['detain_chk'] = $rslt['detain_chk'];
    $series['detain'] = isset($rslt['detain'])?$conv->tis620_to_utf8($rslt['detain']):'';
    
    $series['smi4_chk'] = $rslt['smi4_chk'];
    $series['smi4_1'] = $rslt['smi4_1'];
    $series['smi4_2'] = $rslt['smi4_2'];
    $series['smi4_3'] = $rslt['smi4_3'];
    $series['smi4_4'] = $rslt['smi4_4'];
    $series['lawpsych_chk'] = $rslt['lawpsych_chk'];
    $series['lawpsych'] = isset($rslt['lawpsych'])?$conv->tis620_to_utf8($rslt['lawpsych']):'';
    $series['sleep_chk'] = $rslt['sleep_chk'];
    $series['sleep'] = isset($rslt['sleep'])?$conv->tis620_to_utf8($rslt['sleep']):'';
    $series['IC_chk'] = $rslt['ic_chk'];
    $series['IC'] = isset($rslt['ic'])?$conv->tis620_to_utf8($rslt['ic']):'';
    $series['med_chk'] = $rslt['med_chk'];
    $series['med'] = isset($rslt['med'])?$conv->tis620_to_utf8($rslt['med']):'';
    $series['accident_chk'] = $rslt['accident_chk'];
    $series['accident'] = isset($rslt['accident'])?$conv->tis620_to_utf8($rslt['accident']):'';
    $series['wound_chk'] = $rslt['wound_chk'];
    $series['wound'] = isset($rslt['wound'])?$conv->tis620_to_utf8($rslt['wound']):'';
    $series['surgery_chk'] = $rslt['surgery_chk'];
    $series['surgery'] = isset($rslt['surgery'])?$conv->tis620_to_utf8($rslt['surgery']):'';
    $series['complicate_chk'] = $rslt['complicate_chk'];
    $series['complicate'] = isset($rslt['complicate'])?$conv->tis620_to_utf8($rslt['complicate']):'';
    //$series['last_useC'] = isset($rslt['last_useC'])?$rslt['last_useC']:'';
    $series['alcohol_chk'] = $rslt['alcohol_chk'];
    $series['alcohol_type'] = isset($rslt['alcohol_type'])?$rslt['alcohol_type']:'';
    $series['alcohol_vol'] = isset($rslt['alcohol_vol'])?$rslt['alcohol_vol']:'';
    $series['alcohol_frequency'] = isset($rslt['alcohol_frequency'])?$conv->tis620_to_utf8($rslt['alcohol_frequency']):'';
    $series['drink_age'] = isset($rslt['drink_age'])?$conv->tis620_to_utf8($rslt['drink_age']):'';
    $series['last_useA'] = isset($rslt['last_useA'])?$rslt['last_useA']:'';
    $series['time_stop'] = isset($rslt['time_stop'])?$conv->tis620_to_utf8($rslt['time_stop']):'';
    $series['drink_cause'] = isset($rslt['drink_cause'])?$conv->tis620_to_utf8($rslt['drink_cause']):'';
    $series['dope_chk'] = $rslt['dope_chk'];
    $series['dope_type'] = isset($rslt['dope_type'])?$rslt['dope_type']:'';
    $series['narcotic_vol'] = isset($rslt['narcotic_vol'])?$rslt['narcotic_vol']:'';
    $series['narcotic_frequency'] = isset($rslt['narcotic_frequency'])?$conv->tis620_to_utf8($rslt['narcotic_frequency']):'';
    $series['narcotic_age'] = isset($rslt['narcotic_age'])?$conv->tis620_to_utf8($rslt['narcotic_age']):'';
    $series['last_useD'] = isset($rslt['last_useD'])?$rslt['last_useD']:'';
    $series['narcotic_stop'] = isset($rslt['narcotic_stop'])?$conv->tis620_to_utf8($rslt['narcotic_stop']):'';
    $series['narcotic_cause'] = isset($rslt['narcotic_cause'])?$conv->tis620_to_utf8($rslt['narcotic_cause']):'';
    // $series['marihuana_chk'] = $rslt['marihuana_chk'];
    // $series['D_marihuana'] = isset($rslt['D_marihuana'])?$conv->tis620_to_utf8($rslt['D_marihuana']):'';
    // $series['last_useM'] = isset($rslt['last_useM'])?$conv->tis620_to_utf8($rslt['last_useM']):'';
    // $series['ADL'] = $rslt['ADL'];
    // $series['work'] = $rslt['work'];
    $series['menses_chk'] = $rslt['menses_chk'];
    $series['menses'] = isset($rslt['menses'])?$conv->tis620_to_utf8($rslt['menses']):'';
    $series['disease_chk'] = $rslt['disease_chk'];
    $series['d0'] = $rslt['d0'];
    $series['d1'] = $rslt['d1'];
    $series['d2'] = $rslt['d2'];
    $series['d3'] = $rslt['d3'];
    $series['d4'] = $rslt['d4'];
    $series['d5'] = $rslt['d5'];
    $series['d6'] = $rslt['d6'];
    $series['d7'] = $rslt['d7'];
    $series['disease'] = isset($rslt['disease'])?$conv->tis620_to_utf8($rslt['disease']):'';
    $series['heal_chk'] = $rslt['heal_chk'];
    $series['heal'] = isset($rslt['heal'])?$conv->tis620_to_utf8($rslt['heal']):'';
    $series['whip_chk'] = $rslt['whip_chk'];
    $series['whip'] = isset($rslt['whip'])?$conv->tis620_to_utf8($rslt['whip']):'';
    $series['regular_med_chk'] = $rslt['regular_med_chk'];
    $series['regular_med'] = isset($rslt['regular_med'])?$conv->tis620_to_utf8($rslt['regular_med']):'';
    $series['adr_chk'] = $rslt['adr_chk'];
    $series['adr'] = isset($rslt['adr'])?$conv->tis620_to_utf8($rslt['adr']):'';
    $series['beallergic_chk'] = $rslt['beallergic_chk'];
    $series['beallergic'] = isset($rslt['beallergic'])?$conv->tis620_to_utf8($rslt['beallergic']):'';
    $series['old_med_chk'] = $rslt['old_med_chk'];
    $series['old_med'] = isset($rslt['old_med'])?$conv->tis620_to_utf8($rslt['old_med']):'';
    $series['heredity_chk'] = $rslt['heredity_chk'];
    $series['heredity'] = isset($rslt['heredity'])?$conv->tis620_to_utf8($rslt['heredity']):'';
    $series['Hurt_yourself_chk'] = $rslt['Hurt_yourself_chk'];
    $series['think'] = $rslt['think'];
    $series['plan'] = $rslt['plan'];
    $series['plan_detial'] = isset($rslt['plan_detial'])?$conv->tis620_to_utf8($rslt['plan_detial']):'';
    $series['action'] = $rslt['action'];
    $series['action_detial'] = isset($rslt['action_detial'])?$conv->tis620_to_utf8($rslt['action_detial']):'';
    $series['lawsuit_chk'] = $rslt['lawsuit_chk'];
    $series['lawsuit'] = isset($rslt['lawsuit'])?$conv->tis620_to_utf8($rslt['lawsuit']):'';
    $series['personality'] = isset($rslt['personality'])?$conv->tis620_to_utf8($rslt['personality']):'';
    $series['typep'] = $rslt['typep'];
    //$series['admit_chk'] = $rslt['admit_chk'];
    $series['refer'] = isset($rslt['refer'])?$conv->tis620_to_utf8($rslt['refer']):'';
    $series['admit_type'] = isset($rslt['admit_type'])?$conv->tis620_to_utf8($rslt['admit_type']):'';
    $series['income'] = $rslt['income'];
    $series['admittype'] = isset($rslt['admittype'])?$conv->tis620_to_utf8($rslt['admittype']):'';
    $series['typeP_1'] = $rslt['typep_1'];
    $series['typeP_2'] = $rslt['typep_2'];
    $series['typeP_3'] = $rslt['typep_3'];
    $series['typeP_4'] = $rslt['typep_4'];
    $series['typeP_5'] = $rslt['typep_5'];
    $series['typeP_6'] = $rslt['admit_type'];
    $series['typeP_7'] = $rslt['admit_type'];

    // $series['typep_1'] = $rslt['typep_1'];
    // $series['typep_2'] = $rslt['typep_2'];
    // $series['typep_3'] = $rslt['typep_3'];
    // $series['typep_4'] = $rslt['typep_4'];
    // $series['typep_5'] = $rslt['typep_5'];
    
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>