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

    $sql=  "select v.age_y,p.hn,concat(p.pname,p.fname,' ',p.lname)fullname
    ,CASE WHEN p.sex = 1 THEN 'ชาย' WHEN p.sex = 2 THEN 'หญิง' ELSE 'ไม่ระบุเพศ' END as sex
    ,v.vn,v.pdx,v.dx0,v.dx1,v.dx2,v.dx3,v.dx4,v.dx5,pt.name ptname,oc.pmh,oc.cc,oc.hpi
    ,CASE WHEN npiq.chk1 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b1 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b1
    ,CASE WHEN npiq.chk1 = 1 THEN npiq.c1 ELSE '' END as c1
    ,CASE WHEN npiq.chk2 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b2 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b2
    ,CASE WHEN npiq.chk2 = 1 THEN npiq.c2 ELSE '' END as c2
    ,CASE WHEN npiq.chk3 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b3 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b3
    ,CASE WHEN npiq.chk3 = 1 THEN npiq.c3 ELSE '' END as c3
    ,CASE WHEN npiq.chk4 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b4 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b4
    ,CASE WHEN npiq.chk4 = 1 THEN npiq.c4 ELSE '' END as c4
    ,CASE WHEN npiq.chk5 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b5 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b5
    ,CASE WHEN npiq.chk5 = 1 THEN npiq.c5 ELSE '' END as c5
    ,CASE WHEN npiq.chk6 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b6 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b6
    ,CASE WHEN npiq.chk6 = 1 THEN npiq.c6 ELSE '' END as c6
    ,CASE WHEN npiq.chk7 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b7 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b7
    ,CASE WHEN npiq.chk7 = 1 THEN npiq.c7 ELSE '' END as c7
    ,CASE WHEN npiq.chk8 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b8 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b8
    ,CASE WHEN npiq.chk8 = 1 THEN npiq.c8 ELSE '' END as c8
    ,CASE WHEN npiq.chk9 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b9 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b9
    ,CASE WHEN npiq.chk9 = 1 THEN npiq.c9 ELSE '' END as c9
    ,CASE WHEN npiq.chk10 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b10 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b10
    ,CASE WHEN npiq.chk10 = 1 THEN npiq.c10 ELSE '' END as c10
    ,CASE WHEN npiq.chk11 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b11 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b11
    ,CASE WHEN npiq.chk11 = 1 THEN npiq.c11 ELSE '' END as c11
    ,CASE WHEN npiq.chk12 = 1 THEN 
    (SELECT rnpiq.npiq_result FROM jvl_npiq npiq inner join jvl_result_npiq rnpiq on rnpiq.npiq_id=npiq.b12 where npiq.npiqr_id= ".$id.")
    ELSE '' END as b12
    ,CASE WHEN npiq.chk12 = 1 THEN npiq.c12 ELSE '' END as c12
        ,d.name as recorder,opd.entryposition
        ,SUBSTR(npiq.recdate,1,11)recdate,SUBSTR(npiq.recdate,12,5)rectime 
        from patient p 
        LEFT OUTER JOIN vn_stat v ON v.hn=p.hn 
        left outer join opdscreen oc on oc.vn=v.vn 
        left outer join pttype pt on v.pttype=pt.pttype 
        left outer join jvl_npiq npiq on npiq.vn = v.vn 
        inner join opduser opd on opd.loginname = npiq.recorder 
        inner join doctor d on d.code = opd.doctorcode 
        where npiq.npiqr_id= ".$id;
    $connDB->imp_sql($sql);
    $detial_patient=$connDB->select_a();
    //print_r($detial_patient);
    // $regdate = Datethai2($detial_patient['regdate']);
    // $regtime = $detial_patient['regtime'];
    $age = $detial_patient['age_y'];
    $hn = $detial_patient['hn'];
    $vn = $detial_patient['vn'];
    $fullname = $conv->tis620_to_utf8($detial_patient['fullname']);
    $sex = $conv->tis620_to_utf8($detial_patient['sex']);
    $ptname = $conv->tis620_to_utf8($detial_patient['ptname']);
    $pmh = isset($detial_patient['pmh'])?$conv->tis620_to_utf8($detial_patient['pmh']):'';
    $cc = isset($detial_patient['cc'])?$conv->tis620_to_utf8($detial_patient['cc']):'';
    $hpi = isset($detial_patient['hpi'])?$conv->tis620_to_utf8($detial_patient['hpi']):'';
    $b1 = isset($detial_patient['b1'])?$conv->tis620_to_utf8($detial_patient['b1']):'';
    $c1 = isset($detial_patient['c1'])?$conv->tis620_to_utf8($detial_patient['c1']):'';
    $b2 = isset($detial_patient['b2'])?$conv->tis620_to_utf8($detial_patient['b2']):'';
    $c2 = isset($detial_patient['c2'])?$conv->tis620_to_utf8($detial_patient['c2']):'';
    $b3 = isset($detial_patient['b3'])?$conv->tis620_to_utf8($detial_patient['b3']):'';
    $c3 = isset($detial_patient['c3'])?$conv->tis620_to_utf8($detial_patient['c3']):'';
    $b4 = isset($detial_patient['b4'])?$conv->tis620_to_utf8($detial_patient['b4']):'';
    $c4 = isset($detial_patient['c4'])?$conv->tis620_to_utf8($detial_patient['c4']):'';
    $b5 = isset($detial_patient['b5'])?$conv->tis620_to_utf8($detial_patient['b5']):'';
    $c5 = isset($detial_patient['c5'])?$conv->tis620_to_utf8($detial_patient['c5']):'';
    $b6 = isset($detial_patient['b6'])?$conv->tis620_to_utf8($detial_patient['b6']):'';
    $c6 = isset($detial_patient['c6'])?$conv->tis620_to_utf8($detial_patient['c6']):'';
    $b7 = isset($detial_patient['b7'])?$conv->tis620_to_utf8($detial_patient['b7']):'';
    $c7 = isset($detial_patient['c7'])?$conv->tis620_to_utf8($detial_patient['c7']):'';
    $b8 = isset($detial_patient['b8'])?$conv->tis620_to_utf8($detial_patient['b8']):'';
    $c8 = isset($detial_patient['c8'])?$conv->tis620_to_utf8($detial_patient['c8']):'';
    $b9 = isset($detial_patient['b9'])?$conv->tis620_to_utf8($detial_patient['b9']):'';
    $c9 = isset($detial_patient['c9'])?$conv->tis620_to_utf8($detial_patient['c9']):'';
    $b10 = isset($detial_patient['b10'])?$conv->tis620_to_utf8($detial_patient['b10']):'';
    $c10 = isset($detial_patient['c10'])?$conv->tis620_to_utf8($detial_patient['c10']):'';
    $b11 = isset($detial_patient['b11'])?$conv->tis620_to_utf8($detial_patient['b11']):'';
    $c11 = isset($detial_patient['c11'])?$conv->tis620_to_utf8($detial_patient['c11']):'';
    $b12 = isset($detial_patient['b12'])?$conv->tis620_to_utf8($detial_patient['b12']):'';
    $c12 = isset($detial_patient['c12'])?$conv->tis620_to_utf8($detial_patient['c12']):'';
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
    <div class="col-lg-12" align="center"><b valign="bottom">แบบประเมิน NPI-Q thai</b></div>
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
                        <td colspan='2' height="25">อาการสำคัญ <u> &nbsp;&nbsp;<?= empty($cc)?'ไม่มี':$cc;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">ประวัติการเจ็บป่วยปัจจุบัน <u> &nbsp;&nbsp;<?= empty($hpi)?'ไม่มี':$hpi;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">ประวัติการเจ็บป่วยในอดีต <u> &nbsp;&nbsp;<?= empty($pmh)?'ไม่มี':$pmh;?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">1. ความคิดหงุดหงิด : ท่านคิดว่าผู้ป่วยมีความเชื่อในสิ่งที่ไม่เป็นจริงมั้ย? ตัวอย่างเช่น ผู้ป่วยพูดบ่อยๆว่าจะมีคนมาคอยทำร้ายหรือขโมยของจากเข้า หรือผู้ป่วยพูดว่าคนในบ้านไม่ใช่คนเดิมที่เขารู้จักหรือบ้านที่ผู้ป่วยอยู่ไม่ใช่หลังเดิมที่เขาเคยอยู่ โดยไม่ใช่แค่คิดสงสัย แต่ผู้ป่วยมั่นใจว่าสิ่งที่คิดเป็นจริง</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b1)?'ไม่มี':$b1;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c1)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c1;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">2. ประสาทหลอน : ผู้ป่วยเห็นภาพที่ไม่มีอยู่จริงหรือได้ยินเสียงที่ไม่มีอยู่จริง เช่น ภาพหลอน, หูแว่วหรือไม่ ทั้งนี้ไม่ใช่เพียงแค่ผู้ป่วยทึกทักผิดๆเท่านั้น ตัวอย่างเช่น ผู้ป่วยพูดว่าเพื่อหรือญาติยังมีชีวิตอยู่ทั้งที่พึ่งเสียชีวิตไปเร็วๆนี้</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b2)?'ไม่มี':$b2;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c2)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c2;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">3. กระสับกระส่าย/ก้าวร้าว : มีบางครั้งที่ผู้ป่วยปฏิเสธที่จะร่วมมือหรือไม่ยอมให้ผู้อื่นช่วยเหลือ หรือมีพฤติกรรมก้าวร้าวหรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b3)?'ไม่มี':$b3;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c3)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c3;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">4. ซึมเศร้า/ละเหี่ยใจ : ผู้ป่วยมีท่าทีหรือเคยพูดว่าเศร้าหรือหดหู่หรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b4)?'ไม่มี':$b1;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c4)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c4;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">5. ความวิตกกังวล : ผู้ป่วยมีลักษณธวิตกกังวล หงุดหงิด ตื่นกลัวโดยไม่มีเหตุผล ผู้ป่วยดูเหมือนมีอารมณ์ตึงเคลียดหรือหยุกหยิกอยู่ไม่สุข หรือตื่นกลัวเมื่ออยู่ห่างจากท่านหรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b5)?'ไม่มี':$b5;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c5)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c5;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">6. อารมณ์ร่าเริงเกินเหตุ/ครึ้มใจ : ผู้ป่วยดูร่าเริงหรือแสดงออกว่ามีความสุขมากเกินไปหรือไม่ ทั้งนี้ไม่ใช่ความสุขตามธรรมดาเมื่อได้เจอเพื่อฝูง ครอบครัวหรือเมื่อได้รับของขวัญ แต่หมายถึงมีความสุขอยูตลอดเวลามากเกินกว่าที่เคยเป็นหรือในขณะที่ผู้อื่นไม่ได้รู้สึกไปด้วย</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b6)?'ไม่มี':$b6;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c6)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c6;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">7. ความเฉยเมยไม่สนใจสิ่งรอบตัว/ไร้อารมณ์ : ผู้ป่วยขาดความสนใจในสิ่งต่างๆรอบตัว ทั้งในกิจกรรมต่างๆหรือขาดแรงจูงใจในการเริ่มกิจกรรมใหม่ๆ หรือมีลักษณะเฉยเมยไม่แสดงอารมณ์หรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b7)?'ไม่มี':$b7;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c7)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c7;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">8. ความไม่ยังยั้งชั่งใจ : ผู้ป่วยดูเหมือนทำอะไรหุมหันพลันแล่นโดยไม่คิด ผู้ป่วยพูดหรือทำอะไรที่ปกติแล้วจะไม่พูดหรือทำในสิ่งที่ไม่ควรในที่สาธารณะ ผู้ป่วยทำในสิ่งที่หน้าอับอายต่อท่านหรือคนอื่นหรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b8)?'ไม่มี':$b8;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c8)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c8;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">9. อารมณ์หงุดหงิด/อารมณ์เปลี่ยนแปลงง่าย : ผู้ป่วยหงุดหงิดง่ายหรือทำให้โกรธได้ง่าย ผู้ป่วยมีอารมณ์เปลี่ยนแปลงเร็วหรือไม่มีความอดทน ทั้งนี้ไม่ใช่ความหงุดหงิดจากความจำเสื่อมที่ลงหรือไม่สามารถทำกิจกรรมที่เคยทำได้ แต่เป็นอารมณ์หงุดหงิดขาดความอดทน หรืออารมณ์เปลี่ยนแปลงรวดเร็วผิดปกติไปจากคนเดิม</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b9)?'ไม่มี':$b9;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c9)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c9;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">10. พฤติกรรมแปลก : ผู้ป่วยเดินไปเดินมา ทำอะไรซ้ำๆ เช่น เปิดตู้เสื้อผ้า หรือเปิดลิ้นชักซ้ำแล้วซ้ำอีก จับคลำสิ่งของซ้ำๆหรือแกะกระดุมซ้ำๆหรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b10)?'ไม่มี':$b10;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c10)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c10;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">11. การนอนหลับ/ปัญหาพฤติกรรมช่วงกลางคืน : ผู้ป่วยมีปัญหาในการนอนหลับหรือไม่ โดยไม่ได้หมายถึงการตื่นเพื่อเข้าห้องน้ำหรือครั้ง2ครั้งแล้วนอนหลับต่อได้เอง แต่ผู้ป่วยตื่นขึ้นมากลางดึก หรือเดินไปเดินมา ลุกขึ้นแต่งตัว หรือรบกวนการนอนของคนอื่นตอนกลางคืนหรือไม่</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b11)?'ไม่มี':$b11;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c11)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c11;?>&nbsp;&nbsp;</u></td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">12. ความอยากอาหารและการกินที่ผิดปกติ : ผู้ป่วยมีความเปลี่ยนแปลงของความอยากอาหาร น้ำหนัก นิสัยการรับประทานอาหารหรือประเภทของอาหารที่เคยชอบหรือไม่(ไม่รวมถึงผู้ป่วยที่กินเองไม่ได้และต้องป้อนอาหาร)</td>
                    </tr>
                    <tr>
                        <td colspan='2' height="25">&nbsp;&nbsp;&nbsp;&nbsp;<u> &nbsp;&nbsp;<?= empty($b12)?'ไม่มี':$b12;?>&nbsp;&nbsp;</u> <br>&nbsp;&nbsp;&nbsp;&nbsp;<u>&nbsp;&nbsp;<?= empty($c12)?'ไม่มี':'ความทุกข์ใจของผู้ดูแลระดับ : '.$c12;?>&nbsp;&nbsp;</u></td>
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

$pdf = new mPDF('tha2','A4','10','');
$pdf->autoScriptToLang = true;
$pdf->autoLangToFont = true;
$pdf->SetDisplayMode('fullpage');

$pdf->WriteHTML($html, 2);
$pdf->Output("../NPIQPDF/NPIQ.pdf");
echo "<meta http-equiv='refresh' content='0;url=../NPIQPDF/NPIQ.pdf' />";
?>
<script src="../plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.js"></script>
</body>
</html>