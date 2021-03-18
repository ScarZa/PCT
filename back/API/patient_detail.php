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
$sql0 = "SELECT a.hn from an_stat a WHERE a.an = :an";
$conn_DB->imp_sql($sql0);
$execute=array(':an' => $data);
$rslt0=$conn_DB->select_a($execute);
$sql="SELECT (SELECT count(a.an) from an_stat a WHERE a.hn = '".$rslt0['hn']."')admit
,CONCAT(p.pname,p.fname,' ',p.lname)fullname,a.age_y age,a.hn,a.vn,a.an,pt.name ptname
,p.sex sexcode,s.name sex,m.name marry_name,birthday,n.name nation_name,r.name religion_name,e.name edu_name,occ.name occ_name,p.cid
,p.addrpart,p.moopart,t3.name tambon,t2.name ampher,t1.name changwat
,concat(p.fathername,' ',p.fatherlname)fathername,concat(p.mathername,' ',p.motherlname)mothername
,oc.bw,oc.height,oc.bmi,oc.temperature,oc.pulse,oc.rr,oc.bps,oc.bpd
,p.hometel,p.informtel
,oc.pmh,oc.cc,oc.hpi,i.regdate,SUBSTR(i.regtime,1,5)regtime,doc.name as doctorname,a.pdx,a.dx0,a.dx1,a.dx2,a.dx3,a.dx4
,IF(a.lastvisit ='999', 'ไม่เคยรับการ admit', a.lastvisit)lastvisit
,er.relative,er.police_name,er.weapon_chk,er.weapon,er.weaponer_chk,er.weaponer,er.detain_chk,er.detain,er.typeP_1,er.typeP_2,er.typeP_3,er.typeP_4
,er.typeP_5,er.typeP_6,er.typeP_7,er.smi4_chk,er.smi4_1,er.smi4_2,er.smi4_3,er.smi4_4,er.lawpsych_chk,er.lawpsych
,er.sleep_chk,er.sleep,er.IC_chk,er.IC,er.med_chk,er.med,er.accident_chk,er.accident,er.wound_chk,er.wound,er.surgery_chk,er.surgery
,er.cigarette_chk,er.D_cigarette,er.last_useC,er.alcohol_chk,er.alcohol_type,er.alcohol_vol,er.last_useA,er.dope_chk,er.dope_type,last_useD
,er.marihuana_chk,er.D_marihuana,er.last_useM,er.ADL,er.work,er.menses_chk,er.menses
,er.admit_chk,er.refer,er.admit admit_type,er.complicate_chk,er.complicate
from an_stat a
left outer join patient p on a.hn=p.hn
left outer join jvlER_regis er on er.vn = a.vn
inner join sex s on s.code=p.sex
inner join marrystatus m on m.code = p.marrystatus
left outer join nationality n on n.nationality = p.nationality
left outer join religion r on r.religion = p.religion
left outer join education e on e.education = p.educate
inner join occupation occ on occ.occupation = p.occupation
left outer join opdscreen oc on oc.vn=a.vn
left outer join pttype pt on a.pttype=pt.pttype
left outer join ipt i on a.an=i.an
left outer join doctor doc on i.admdoctor=doc.code
left outer join thaiaddress t1 on t1.chwpart=p.chwpart and
     t1.amppart='00' and t1.tmbpart='00'
left outer join thaiaddress t2 on t2.chwpart=p.chwpart and
     t2.amppart=p.amppart and t2.tmbpart='00'
left outer join thaiaddress t3 on t3.chwpart=p.chwpart and
     t3.amppart=p.amppart and t3.tmbpart=p.tmbpart
left outer JOIN thaiaddress t4 ON t4.chwpart=p.chwpart
WHERE a.an = :an GROUP BY a.an";
$conn_DB->imp_sql($sql);
//$execute=array(':an' => $data);
$rslt=$conn_DB->select_a($execute);
//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
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
    $addrpart = $conv->tis620_to_utf8($rslt['addrpart']);
    $moopart = $conv->tis620_to_utf8($rslt['moopart']);
    $tambon = $conv->tis620_to_utf8($rslt['tambon']);
    $ampher = $conv->tis620_to_utf8($rslt['ampher']);
    $changwat = $conv->tis620_to_utf8($rslt['changwat']);
    $series['fulladdressname'] = $addrpart.'หมู่ '.$moopart.' ต.'.$tambon.' อ.'.$ampher.' จ.'.$changwat;
    $series['fathername'] = $conv->tis620_to_utf8($rslt['fathername']);
    $series['mothername'] = $conv->tis620_to_utf8($rslt['mothername']);
    $series['bw'] = $rslt['bw'];
    $series['height'] = $rslt['height'];
    $series['bmi'] = $rslt['bmi'];
    $series['temp'] = round($rslt['temperature'],1);
    $series['pr'] = round($rslt['pulse']);
    $series['rr'] = round($rslt['rr']);
    $series['bps'] = round($rslt['bps']);
    $series['bpd'] = round($rslt['bpd']);
    $series['hometel'] = $conv->tis620_to_utf8($rslt['hometel']);
    $series['informtel'] = $conv->tis620_to_utf8($rslt['informtel']);
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
    $series['police_name'] = isset($rslt['police_name'])?$conv->tis620_to_utf8($rslt['police_name']):'';
    $series['weapon_chk'] = $rslt['weapon_chk'];
    $series['weapon'] = isset($rslt['weapon'])?$conv->tis620_to_utf8($rslt['weapon']):'';
    $series['weaponer_chk'] = $rslt['weaponer_chk'];
    $series['weaponer'] = isset($rslt['weaponer'])?$conv->tis620_to_utf8($rslt['weaponer']):'';
    $series['detain_chk'] = $rslt['detain_chk'];
    $series['detain'] = isset($rslt['detain'])?$conv->tis620_to_utf8($rslt['detain']):'';
    $series['typeP_1'] = $rslt['typeP_1'];
    $series['typeP_2'] = $rslt['typeP_2'];
    $series['typeP_3'] = $rslt['typeP_3'];
    $series['typeP_4'] = $rslt['typeP_4'];
    $series['typeP_5'] = $rslt['typeP_5'];
    $series['typeP_6'] = $rslt['typeP_6'];
    $series['typeP_7'] = $rslt['typeP_7'];
    $series['smi4_chk'] = $rslt['smi4_chk'];
    $series['smi4_1'] = $rslt['smi4_1'];
    $series['smi4_2'] = $rslt['smi4_2'];
    $series['smi4_3'] = $rslt['smi4_3'];
    $series['smi4_4'] = $rslt['smi4_4'];
    $series['lawpsych_chk'] = $rslt['lawpsych_chk'];
    $series['lawpsych'] = isset($rslt['lawpsych'])?$conv->tis620_to_utf8($rslt['lawpsych']):'';
    $series['sleep_chk'] = $rslt['sleep_chk'];
    $series['sleep'] = isset($rslt['sleep'])?$conv->tis620_to_utf8($rslt['sleep']):'';
    $series['IC_chk'] = $rslt['IC_chk'];
    $series['IC'] = isset($rslt['IC'])?$conv->tis620_to_utf8($rslt['IC']):'';
    $series['med_chk'] = $rslt['med_chk'];
    $series['med'] = isset($rslt['med'])?$conv->tis620_to_utf8($rslt['med']):'';
    $series['accident_chk'] = $rslt['accident_chk'];
    $series['accident'] = isset($rslt['accident'])?$conv->tis620_to_utf8($rslt['accident']):'';
    $series['wound_chk'] = $rslt['wound_chk'];
    $series['wound'] = isset($rslt['wound'])?$conv->tis620_to_utf8($rslt['wound']):'';
    $series['surgery_chk'] = $rslt['surgery_chk'];
    $series['surgery'] = isset($rslt['surgery'])?$conv->tis620_to_utf8($rslt['surgery']):'';
    $series['cigarette_chk'] = $rslt['cigarette_chk'];
    $series['D_cigarette'] = isset($rslt['D_cigarette'])?$conv->tis620_to_utf8($rslt['D_cigarette']):'';
    $series['last_useC'] = isset($rslt['last_useC'])?$rslt['last_useC']:'';
    $series['alcohol_chk'] = $rslt['alcohol_chk'];
    $series['alcohol_type'] = isset($rslt['alcohol_type'])?$rslt['alcohol_type']:'';
    $series['alcohol_vol'] = isset($rslt['alcohol_vol'])?$rslt['alcohol_vol']:'';
    $series['last_useA'] = isset($rslt['last_useA'])?$rslt['last_useA']:'';
    $series['dope_chk'] = $rslt['dope_chk'];
    $series['dope_type'] = isset($rslt['dope_type'])?$rslt['dope_type']:'';
    $series['last_useD'] = isset($rslt['last_useD'])?$rslt['last_useD']:'';
    $series['marihuana_chk'] = $rslt['marihuana_chk'];
    $series['D_marihuana'] = isset($rslt['D_marihuana'])?$conv->tis620_to_utf8($rslt['D_marihuana']):'';
    $series['last_useM'] = isset($rslt['last_useM'])?$conv->tis620_to_utf8($rslt['last_useM']):'';
    $series['ADL'] = $rslt['ADL'];
    $series['work'] = $rslt['work'];
    $series['menses_chk'] = $rslt['menses_chk'];
    $series['menses'] = isset($rslt['menses'])?$conv->tis620_to_utf8($rslt['menses']):'';
    $series['admit_chk'] = $rslt['admit_chk'];
    $series['refer'] = isset($rslt['refer'])?$conv->tis620_to_utf8($rslt['refer']):'';
    $series['admit_type'] = isset($rslt['admit_type'])?$conv->tis620_to_utf8($rslt['admit_type']):'';
    $series['complicate_chk'] = $rslt['complicate_chk'];
    $series['complicate'] = isset($rslt['complicate'])?$conv->tis620_to_utf8($rslt['complicate']):'';
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>