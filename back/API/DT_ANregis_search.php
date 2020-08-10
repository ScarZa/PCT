<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
$conv=new convers_encode();
set_time_limit(0);
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
if(!empty($data)){
  $data =$conv->utf8_to_tis620($data);
    $code = "WHERE (a.an like '%".$data."%' or p.fname like '%".$data."%' or p.lname like '%".$data."%' or a.hn like '%".$data."%')";
}else{
    $code ='';
}

$sql="select fr.ipd_fr_id,a.an,a.hn,a.vn,a.regdate
,(SELECT count(a2.hn)
FROM an_stat a2
left outer join patient p2 on a2.hn=p2.hn
where a2.hn = a.hn
GROUP BY a2.hn) admit
,CONCAT(timestampdiff(month,a.regdate,NOW())-(timestampdiff(year,a.regdate,NOW())*12),' เดือน ',
FLOOR(TIMESTAMPDIFF(DAY,a.regdate,NOW())%30.4375),' วัน')AS admit_day  
,CONCAT(p.pname,p.fname,' ',p.lname)fullname,w.name
,CASE WHEN !ISNULL(ms.mental_id) THEN 'ประเมินแล้ว' ELSE 'ยังไม่ประเมิน' END mental
,fr.smi4_chk,fr.smi4_1,fr.smi4_2,fr.smi4_3,fr.smi4_4,fr.typep_1,fr.typep_2,fr.typep_3,fr.typep_4,fr.typep_5
,fr.cc,fr.hpi,fr.complicate_chk,fr.complicate
,a.pdx,a.dx0,a.dx1,a.dx2,a.dx3,a.dx4,a.dx5,smivr.smi4_id
from an_stat a 
inner join patient p on a.hn=p.hn and ISNULL(a.dchdate)
inner join ward w on w.ward = a.ward
left outer join jvl_ipd_first_rec fr on fr.an = a.an
left outer join jvl_mental_state ms on ms.ipd_fr_id = fr.ipd_fr_id
left outer join jvlsmiv_regis smivr on smivr.hn = fr.hn
".$code."
GROUP BY a.hn
order by fr.ipd_fr_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    
    for($i=0;$i<count($num_risk);$i++){
      $series['ipd_fr_id'] = $num_risk[$i]['ipd_fr_id'];
    $series['an'] = $num_risk[$i]['an'];
    $series['vn'] = $num_risk[$i]['vn'];
    $series['hn'] = $num_risk[$i]['hn'];
    $series['smi4_id'] = $num_risk[$i]['smi4_id'];
    $series['regdate'] = DateThai1($num_risk[$i]['regdate']);
    $series['admit'] = $num_risk[$i]['admit'];
    $series['admit_day'] = $num_risk[$i]['admit_day'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    $series['mental'] = $num_risk[$i]['mental'];
    $series['pdx'] = $num_risk[$i]['pdx'];
    $series['dx0'] = $num_risk[$i]['dx0'];
    $series['dx1'] = $num_risk[$i]['dx1'];
    $series['dx2'] = $num_risk[$i]['dx2'];
    $series['dx3'] = $num_risk[$i]['dx3'];
    $series['dx4'] = $num_risk[$i]['dx4'];
    $series['dx5'] = $num_risk[$i]['dx5'];
    $series['typeP_1'] = (int) $num_risk[$i]['typep_1'];
    $series['typeP_2'] = (int) $num_risk[$i]['typep_2'];
    $series['typeP_3'] = (int) $num_risk[$i]['typep_3'];
    $series['typeP_4'] = (int) $num_risk[$i]['typep_4'];
    $series['typeP_5'] = (int) $num_risk[$i]['typep_5'];
    $series['typeP_1R'] = $num_risk[$i]['typep_1']!=0?'3s &nbsp;&nbsp;':'';
    $series['typeP_2R'] = $num_risk[$i]['typep_2']!=0?'เฝ้าระวังหลบหนี &nbsp;&nbsp;':'';
    $series['typeP_3R'] = $num_risk[$i]['typep_3']!=0?'เฝ้าระวังฆ่าตัวตาย &nbsp;&nbsp;':'';
    $series['typeP_4R'] = $num_risk[$i]['typep_4']!=0?'เฝ้าระวังอุบัติเหตุ &nbsp;&nbsp;':'';
    $series['typeP_5R'] = $num_risk[$i]['typep_5']!=0?'เฝ้าระวังพฤติกรรมรุนแรง':'';
    $series['cc'] = isset($num_risk[$i]['cc'])?$conv->tis620_to_utf8($num_risk[$i]['cc']):'';
    $series['hpi'] = isset($num_risk[$i]['hpi'])?$conv->tis620_to_utf8($num_risk[$i]['hpi']):'';
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();