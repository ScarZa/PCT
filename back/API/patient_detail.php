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
,CONCAT(p.pname,p.fname,' ',p.lname)fullname,a.age_y age,a.hn,a.an,pt.name ptname
,s.name sex,m.name marry_name,birthday,n.name nation_name,r.name religion_name,e.name edu_name,occ.name occ_name,p.cid
,p.addrpart,p.moopart,t3.name tambon,t2.name ampher,t1.name changwat
,concat(p.fathername,' ',p.fatherlname)fathername,concat(p.mathername,' ',p.motherlname)mothername
,oc.bw,oc.height,oc.bmi,p.hometel,p.informtel
,oc.pmh,oc.cc,oc.hpi,i.regdate,SUBSTR(i.regtime,1,5)regtime,doc.name as doctorname,a.pdx,a.dx0,a.dx1,a.dx2,a.dx3,a.dx4
,IF(a.lastvisit ='999', 'ไม่เคยรับการ admit', a.lastvisit)lastvisit
from an_stat a
left outer join patient p on a.hn=p.hn
inner join sex s on s.code=p.sex
inner join marrystatus m on m.code = p.marrystatus
inner join nationality n on n.nationality = p.nationality
inner join religion r on r.religion = p.religion
inner join education e on e.education = p.educate
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
#left outer join an_stat a on a.hn = v.hn
WHERE a.an = :an";
$conn_DB->imp_sql($sql);
//$execute=array(':an' => $data);
$rslt=$conn_DB->select_a($execute);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['admit'] = $rslt['admit'];
    $fullname=$conv->tis620_to_utf8( $rslt['fullname']);
    $series['fullname'] = $fullname;
    $series['age'] = $rslt['age'];
    $series['hn'] = $rslt['hn'];
    $series['an'] = $rslt['an'];
    $series['ptname'] = $conv->tis620_to_utf8($rslt['ptname']);
    $series['marry_name'] = $conv->tis620_to_utf8($rslt['marry_name']);
    $series['nation_name'] = $conv->tis620_to_utf8($rslt['nation_name']);
    $series['religion_name'] = $conv->tis620_to_utf8($rslt['religion_name']);
    $series['edu_name'] = $conv->tis620_to_utf8($rslt['edu_name']);
    $series['occ_name'] = $conv->tis620_to_utf8($rslt['occ_name']);
    $series['cid'] = $rslt['cid'];
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
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>