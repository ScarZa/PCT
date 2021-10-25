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
// $data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
// if($data2 == '009'){
//     $join = 'inner join jvlmatrix_register mr on mr.hn = t.hn';
//     $where = 'where mr.matrix_id = :matrix_id';
//     $exe = ':matrix_id';
// }else if($data2 == '008'){
//     $join = 'inner join jvlsocial_regis sc on sc.hn = t.hn';
//     $where = 'where sc.social_id = :social_id';
//     $exe = ':social_id';
// }else if($data2 == '006'){
//     $join = 'inner join jvlphy_regis ph on ph.hn = t.hn';
//     $where = 'where ph.phy_id = :phy_id';
//     $exe = ':phy_id';
// }else if($data2 == '018'){
//     $join = 'inner join jvlphar_regis pr on pr.hn = t.hn';
//     $where = 'where pr.phar_id = :phar_id';
//     $exe = ':phar_id';
// }else if($data2 == '024'){
//     $join = 'inner join jvlfood_regis f on f.hn = t.hn';
//     $where = 'where f.food_id = :food_id';
//     $exe = ':food_id';
// }else if($data2 == '005'){
//     $join = 'inner join jvlcommunity_regis co on co.hn = t.hn';
//     $where = 'where co.commu_id = :commu_id';
//     $exe = ':commu_id';
// }else {
//     $join = '';
//     $where = 'where t.tB_id=:tB_id';
//     $exe = ':tB_id';
// }
    $sql="select fr.ipd_fr_id,a.an,p.hn,p.pname,p.fname,p.lname,p.informaddr,p.cid,p.birthday,m.name as mrname,v.age_y,v.age_m,v.vn,v.pdx,v.dx0,v.dx1,v.dx2,v.dx3,v.dx4,v.dx5
    ,w.name as ward
    ,(SELECT d.name FROM vn_stat v inner join doctor d on d.code = v.dx_doctor WHERE v.vn=a.vn)doctor_name
        from patient p 
        inner JOIN vn_stat v ON v.hn=p.hn
        inner join an_stat a on a.vn = v.vn
        LEFT OUTER JOIN ward w on w.ward = a.ward
        LEFT OUTER join jvl_ipd_first_rec fr on fr.vn = a.vn
        LEFT OUTER join jvl_progress_commu pc on fr.ipd_fr_id = pc.ipd_fr_id				
         left outer join marrystatus m on p.marrystatus=m.code 
				where fr.ipd_fr_id = :ipd_fr_id";
    $conn_DB->imp_sql($sql);
    $execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $series['ipd_fr_id'] = isset($rslt['ipd_fr_id'])?$rslt['ipd_fr_id']:'';
    $series['pc_id'] = isset($rslt['pc_id'])?$rslt['pc_id']:'';
    $series['an'] = $rslt['an'];
    $pname=$conv->tis620_to_utf8( $rslt['pname']);
    $fname=$conv->tis620_to_utf8( $rslt['fname']);
    $lname=$conv->tis620_to_utf8( $rslt['lname']);
    $series['fullname'] = $pname.$fname.' '.$lname;
    $series['hn'] = $rslt['hn'];
    $series['informaddr'] = $conv->tis620_to_utf8( $rslt['informaddr']);
    $series['cid'] = $rslt['cid'];
    $series['birthday'] = DateThai1($rslt['birthday']);
    $series['mrname'] = $conv->tis620_to_utf8( $rslt['mrname']);
    $series['age_y'] = $rslt['age_y'];
    $series['age_m'] = $rslt['age_m'];
    $series['pdx'] = $rslt['pdx'];
    $series['dx0'] = $rslt['dx0'];
    $series['dx1'] = $rslt['dx1'];
    $series['dx2'] = $rslt['dx2'];
    $series['dx3'] = $rslt['dx3'];
    $series['dx4'] = $rslt['dx4'];
    $series['dx5'] = $rslt['dx5'];
    $series['ward'] = $conv->tis620_to_utf8($rslt['ward']);
    $series['doctor_name'] = $conv->tis620_to_utf8($rslt['doctor_name']);
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>