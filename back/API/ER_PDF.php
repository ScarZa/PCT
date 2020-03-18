<?php session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new TablePDO();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$conv=new convers_encode();?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>แบบการวินิจฉัยทางสังคม</title>
<link rel='SHORTCUT ICON' href='images/icon_set2/compose.ico'>
    <meta charset="UTF-8">
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../../front/template/bootstrap-4.1.1/css/bootstrap.min.css" crossorigin="anonymous">
    <!-- <link rel="stylesheet" type="text/css" href="plugins/Jprint/print.min.css"> -->
    <link rel="stylesheet" href="../../front/plugins/font-awesome-4.6.3/css/font-awesome.min.css">
    <!-- Select2 -->
    <link rel="stylesheet" href="../../front/plugins/select2/select2.min.css">
    <!-- My tools -->
    <!-- <script src="MyTools/createTableAjax.js" type="text/javascript"></script>
    <script src="MyTools/AJAXCharts.js" type="text/javascript"></script>
    <script src="MyTools/reportLayout.js" type="text/javascript"></script> -->
    <!-- End My tools -->
    <link rel="stylesheet" href="../../front/plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.css" />
    <link rel="stylesheet" href="../../front/plugins/jquery-ui-1.11.4.custom/SpecialDateSheet.css" />
    <!-- <link rel="stylesheet" type="text/css" href="plugins/DataTables/datatables.min.css"/> -->
    <link rel="stylesheet" type="text/css" href="../../front/plugins/DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css" />
   
<style type="text/css">
body {
	margin-top: 50px;
}
</style>
</head>
<?php
include_once ('../plugins/funcDateThai.php');
include '../plugins/function_date.php';
    $id=$_GET['id'];

    $sql=  "select v.age_y,p.hn,concat(p.pname,p.fname,' ',p.lname)fullname,p.sex,er.relative,er.police_name,v.vn,v.pdx,v.dx0,v.dx1,v.dx2,v.dx3,v.dx4,v.dx5,pt.name ptname,oc.pmh,oc.cc,oc.hpi
    ,er.typeP_1,er.typeP_2,er.typeP_3,er.typeP_4,er.typeP_5,er.typeP_6,er.typeP_7,er.weapon,er.detain ,er.smi4_1,er.smi4_2,er.smi4_3,er.smi4_4,er.lawpsych,er.sleep,er.IC 
    ,CASE WHEN er.med_chk = 1 THEN 'ต่อเนื่อง' WHEN er.med_chk = 2 THEN 'ไม่สม่ำเสมอ' ELSE 'ขาดยา' END as med_chk 
    ,er.med,er.accident,er.wound,er.surgery,er.menses ,er.D_cigarette,er.last_useC
    ,alc.name as alc_name,alcV.volume_type,er.last_useA,dr.drug_name,er.last_useD,er.D_marihuana,er.last_useM 
    ,CASE WHEN er.ADL = 1 THEN 'ทำเองได้' WHEN er.ADL = 2 THEN 'ทำได้บางส่วน' WHEN er.ADL = 3 THEN 'ญาติต้องดูแล' ELSE 'ญาติทำให้ทั้งหมด' END as ADL 
    ,CASE WHEN er.work = 1 THEN 'ทำงานได้ มีเงินเดือน' WHEN er.work = 2 THEN 'ทำงานได้ มีรายได้บ้าง' WHEN er.work = 3 THEN 'ช่วยงานบ้านได้' WHEN er.work = 5 THEN 'ช่วยงานบ้างบางครั้ง' ELSE 'ไม่ช่วยงานบ้าน' END as work 
    ,d.name as recorder,opd.entryposition
    ,SUBSTR(er.recdate,1,11)recdate,SUBSTR(er.recdate,12,5)rectime 
    from patient p 
    LEFT OUTER JOIN vn_stat v ON v.hn=p.hn 
    left outer join opdscreen oc on oc.vn=v.vn 
    left outer join pttype pt on v.pttype=pt.pttype 
    left outer join jvlER_regis er on er.vn = v.vn 
    left outer join jvlmatrix_alcohol_type alc on alc.al_id = er.alcohol_type 
    left outer join jvlmatrix_alcohol_volume alcV on alcV.volume_id = er.alcohol_vol 
    left outer join jvlmatrix_drug dr on dr.drug_id = er.dope_type 
    inner join opduser opd on opd.loginname = er.recorder 
    inner join doctor d on d.code = opd.doctorcode 
    where er.ER_id= ".$id;
    $connDB->imp_sql($sql);
    $detial_patient=$connDB->select_a();
    //print_r($detial_patient);
    // $regdate = Datethai2($detial_patient['regdate']);
    // $regtime = $detial_patient['regtime'];
    $age = $detial_patient['age_y'];
    $hn = $detial_patient['hn'];
    $vn = $detial_patient['vn'];
    $fullname = $conv->tis620_to_utf8($detial_patient['fullname']);
    $sex = $detial_patient['sex'];
    $ptname = $conv->tis620_to_utf8($detial_patient['ptname']);
    $pmh = isset($detial_patient['pmh'])?$conv->tis620_to_utf8($detial_patient['pmh']):'';
    $relative = isset($detial_patient['relative'])?$conv->tis620_to_utf8($detial_patient['relative']):'';
    $police_name = isset($detial_patient['police_name'])?$conv->tis620_to_utf8($detial_patient['police_name']):'';
    $cc = isset($detial_patient['cc'])?$conv->tis620_to_utf8($detial_patient['cc']):'';
    $hpi = isset($detial_patient['hpi'])?$conv->tis620_to_utf8($detial_patient['hpi']):'';
    $typeP_1 = $detial_patient['typeP_1']!=0?'3s':'';
    $typeP_2 = $detial_patient['typeP_2']!=0?'&nbsp;&nbsp; เฝ้าระวังหลบหนี':'';
    $typeP_3 = $detial_patient['typeP_3']!=0?'&nbsp;&nbsp; เฝ้าระวังฆ่าตัวตาย':'';
    $typeP_4 = $detial_patient['typeP_4']!=0?'&nbsp;&nbsp; เฝ้าระวังอุบัติเหตุ':'';
    $typeP_5 = $detial_patient['typeP_5']!=0?'&nbsp;&nbsp; เฝ้าระวังพฤติกรรมรุนแรง':'';
    $typeP_6 = $detial_patient['typeP_6']!=0?'&nbsp;&nbsp; พรบ. 120 ยาเสพติด':'';
    $typeP_7 = $detial_patient['typeP_7']!=0?'&nbsp;&nbsp; พรบ.สุรา':'';
    $weapon = isset($detial_patient['weapon'])?$conv->tis620_to_utf8($detial_patient['weapon']):'';
    $detain = isset($detial_patient['detain'])?$conv->tis620_to_utf8($detial_patient['detain']):'';
    $smi4_1 = $detial_patient['smi4_1']!=0?'&nbsp;&nbsp; '.$smi4_1:'';
    $smi4_2 = $detial_patient['smi4_2']!=0?'&nbsp;&nbsp; '.$smi4_2:'';
    $smi4_3 = $detial_patient['smi4_3']!=0?'&nbsp;&nbsp; '.$smi4_3:'';
    $smi4_4 = $detial_patient['smi4_4']!=0?'&nbsp;&nbsp; '.$smi4_4:'';
    $lawpsych = isset($detial_patient['lawpsych'])?$conv->tis620_to_utf8($detial_patient['lawpsych']):'';
    $sleep = isset($detial_patient['sleep'])?$conv->tis620_to_utf8($detial_patient['sleep']):'';
    $IC = isset($detial_patient['IC'])?$conv->tis620_to_utf8($detial_patient['IC']):'';
    $med_chk = $detial_patient['med_chk'];
    $med = isset($detial_patient['med'])?$conv->tis620_to_utf8($detial_patient['med']):'';
    $accident = isset($detial_patient['accident'])?$conv->tis620_to_utf8($detial_patient['accident']):'';
    $wound = isset($detial_patient['wound'])?$conv->tis620_to_utf8($detial_patient['wound']):'';
    $surgery = isset($detial_patient['surgery'])?$conv->tis620_to_utf8($detial_patient['surgery']):'';
    $menses = isset($detial_patient['menses'])?$conv->tis620_to_utf8($detial_patient['menses']):'';
    $D_cigarette = isset($detial_patient['D_cigarette'])?$conv->tis620_to_utf8($detial_patient['D_cigarette']):'';
    $last_useC = isset($detial_patient['last_useC'])?'ใช้ครั้งสุดท้ายเมื่อ '.$detial_patient['last_useC'].' วันทีแล้ว':'';
    $alc_name = isset($detial_patient['alc_name'])?$conv->tis620_to_utf8($detial_patient['alc_name']):'';
    $volume_type = isset($detial_patient['volume_type'])?'ปริมาณ '.$conv->tis620_to_utf8($detial_patient['volume_type']):'';
    $last_useA = isset($detial_patient['last_useA'])?'ใช้ครั้งสุดท้ายเมื่อ '.$detial_patient['last_useA'].' วันทีแล้ว':'';
    $drug_name = isset($detial_patient['drug_name'])?$conv->tis620_to_utf8($detial_patient['drug_name']):'';
    $last_useD = isset($detial_patient['last_useD'])?'ใช้ครั้งสุดท้ายเมื่อ '.$detial_patient['last_useD'].' วันทีแล้ว':'';
    $D_marihuana = isset($detial_patient['D_marihuana'])?$conv->tis620_to_utf8($detial_patient['D_marihuana']):'';
    $last_useM = isset($detial_patient['last_useM'])?'ใช้เพื่อ '.$conv->tis620_to_utf8($detial_patient['last_useM']):'';
    $ADL = $detial_patient['ADL'];
    $work = $detial_patient['work'];
    $recorder = $conv->tis620_to_utf8($detial_patient['recorder']);
    $entryposition = $conv->tis620_to_utf8($detial_patient['entryposition']);
    $recdate = Datethai1($detial_patient['recdate']);
    $rectime = $detial_patient['rectime'];
    
 ?>
<body>
    <?php
require_once('../plugins/library/mpdf60/mpdf.php'); //ที่อยู่ของไฟล์ mpdf.php ในเครื่องเรานะครับ
ob_start(); // ทำการเก็บค่า html นะครับ*/
?>
    <div class="col-lg-12" align="center"><b valign="bottom">แบบบันทึกการบริการผู้ป่วยจิตเวชฉุกเฉิน</b></div>
             <div class="col-lg-12">
            <table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'>
                    <tr>
                        <td colspan='2'>
                <table width='100%' border='1' cellspacing='' cellpadding=''>
                    <tr>
                        <td>
                        <table width='100%' border='0' cellspacing='' cellpadding=''>
                        <tr>
                        <td height="25">วันที่ <u> &nbsp;&nbsp;<?= $recdate?>&nbsp;&nbsp; </u> เวลา <u> &nbsp;&nbsp;<?= $rectime?>&nbsp;&nbsp; </u> นาที</td>
                    </tr>
                        <tr>
                        <td height="25">ชื่อ-สกุลผู้ป่วย <u> &nbsp;&nbsp;<?= $fullname?>&nbsp;&nbsp; </u> อายุ <u> &nbsp;&nbsp;<?= $age?>&nbsp;&nbsp; </u> ปี  HN <u> &nbsp;&nbsp;<b><?= $hn?></b>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">สิทธิการรักษา <u> &nbsp;&nbsp;<?= $ptname?></td>
                    </tr>
                        </table>
                        </td>
                        </tr>
                        </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td colspan='2' height="25">ผู้นำส่ง <u> &nbsp;&nbsp;<?= $relative?>&nbsp;&nbsp; </u>&nbsp;&nbsp; ตำรวจ/มูลนิธินำส่ง <u> &nbsp;&nbsp;<?= $police_name?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">อาการสำคัญ <u> &nbsp;&nbsp;<?= empty($cc)?'ไม่มี':$cc;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">ประวัติการเจ็บป่วยปัจจุบัน <u> &nbsp;&nbsp;<?= empty($hpi)?'ไม่มี':$hpi;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">ประวัติการเจ็บป่วยในอดีต <u> &nbsp;&nbsp;<?= empty($pmh)?'ไม่มี':$pmh;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">ความเสี่ยงที่สำคัญที่ต้องเฝ้าระวัง <u> &nbsp;&nbsp;<?= $typeP_1?> <?= $typeP_2?> <?= $typeP_3?> <?= $typeP_4?> <?= $typeP_5?> <?= $typeP_6?> <?= $typeP_7?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">พกพาอาวุธ <u> &nbsp;&nbsp;<?= empty($weapon)?'ไม่มี':$weapon;?>&nbsp;&nbsp; </u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; การจำกัดพฤติกรรม <u> &nbsp;&nbsp;<?= empty($detain)?'ไม่มี':$detain;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">คัดกรอง SMI-V <u> &nbsp;&nbsp;<?= $smi4_1?> <?= $smi4_2?> <?= $smi4_3?> <?= $smi4_4?> &nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">นิติจิตเวช <u> &nbsp;&nbsp;<?= empty($lawpsych)?'ไม่มี':$lawpsych?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การนอนหลับ <u> &nbsp;&nbsp;<?= empty($sleep)?'ไม่มี':$lawpsych?>&nbsp;&nbsp; </u>&nbsp;&nbsp;  คัดกรอง IC <u> &nbsp;&nbsp;<?= empty($IC)?'ไม่มี':$IC?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การรับทานยา <u> &nbsp;&nbsp;<?= empty($med_chk)?'ไม่มี':$med_chk?> &nbsp;&nbsp; <?= $med?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">อุบัติเหตุ <u> &nbsp;&nbsp;<?= empty($accident)?'ไม่มี':$accident?>&nbsp;&nbsp; </u>&nbsp;&nbsp;  บาดแผล <u> &nbsp;&nbsp;<?= empty($wound)?'ไม่มี':$wound?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">อุบัติเหตุทางสมอง/การผ่าตัด <u> &nbsp;&nbsp;<?= empty($surgery)?'ไม่มี':$surgery?>&nbsp;&nbsp; </u>&nbsp;&nbsp;  
                        <?php if($sex == 2){?>ประจำเดือน <u> &nbsp;&nbsp;<?= empty($menses)?'ปกติ':$menses?>&nbsp;&nbsp; </u><?php }?></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การสูบบุรี่ <u> &nbsp;&nbsp;<?= empty($D_cigarette)?'ไม่มี':$D_cigarette?> &nbsp;&nbsp; <?= empty($detial_patient['last_useC'])?'':$last_useC?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การดื่มสุรา <u> &nbsp;&nbsp;<?= empty($alc_name)?'ไม่มี':$alc_name?> &nbsp;&nbsp; <?=  empty($detial_patient['volume_type'])?'':$volume_type?>&nbsp;&nbsp;  &nbsp;&nbsp; <?= empty($detial_patient['last_useA'])?'':$last_useA?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การใช้สารเสพติด <u> &nbsp;&nbsp;<?= empty($drug_name)?'ไม่มี':$drug_name?> &nbsp;&nbsp; <?= empty($detial_patient['last_useD'])?'':$last_useD?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การใช้สารกัญชา <u> &nbsp;&nbsp;<?= empty($D_marihuana)?'ไม่มี':$D_marihuana?> &nbsp;&nbsp; <?= empty($detial_patient['last_useM'])?'':$last_useM?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">ADL <u> &nbsp;&nbsp;<?= $ADL?> &nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">การทำงาน <u> &nbsp;&nbsp;<?= $work?> &nbsp;&nbsp;</u></td>
                    </tr>
                </table>
            </div><br><br>
            <table border="0" width="100%">
                                         <tr>
                                             <td width='50%' align="center">&nbsp;</td>
                                             <td width='50%' align="center">
                                     พยาบาลผู้ซักประวัติ................................................<br><br>
                                     ( <?= $recorder?> )<br>
                                     ตำแหน่ง <?= $entryposition?> <br>วันที่ <?= $recdate?> เวลา <?= $rectime?> นาที</td>
                                     
                                         </tr>
                                     </table>
<?php
$html = ob_get_contents();
ob_clean();

$pdf = new mPDF('tha2','A4','11','');
$pdf->autoScriptToLang = true;
$pdf->autoLangToFont = true;
$pdf->SetDisplayMode('fullpage');

$pdf->WriteHTML($html, 2);
$pdf->Output("../SCPDF/Social.pdf");
echo "<meta http-equiv='refresh' content='0;url=../SCPDF/Social.pdf' />";
?>
<script src="../plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.js"></script>
</body>
</html>