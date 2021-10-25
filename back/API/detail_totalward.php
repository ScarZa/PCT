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
$conv=new convers_encode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$month = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$year = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
// $ward = isset($_POST['data3'])?$_POST['data3']:(isset($_GET['data3'])?$_GET['data3']:'');
    $DIM=cal_days_in_month(CAL_GREGORIAN,$month,$year);

    $sql="select s.snap_date
    ,(select count(*) from ipt where regdate<=s.snap_date and (dchdate>s.snap_date or dchdate is null)) stay
    ,(SELECT COUNT(DISTINCT an)  from an_stat a2 WHERE a2.regdate = s.snap_date) admit
    ,(SELECT COUNT(DISTINCT an)  from an_stat a3 WHERE a3.dchdate = s.snap_date) dchdate
    ,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '01' and w.snap_date=s.snap_date) m1
    ,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '04' and w.snap_date=s.snap_date) m2
    ,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '05' and w.snap_date=s.snap_date) m3
    ,(SELECT COUNT(DISTINCT an) from ward_admit_snapshot w WHERE w.ward= '02' and w.snap_date=s.snap_date) w1
    ,(SELECT COUNT(DISTINCT w.an) from ward_admit_snapshot w inner join an_stat a on a.an = w.an WHERE w.ward= '06' and w.snap_date=s.snap_date and a.sex=1) s1m
    ,(SELECT COUNT(DISTINCT w.an) from ward_admit_snapshot w inner join an_stat a on a.an = w.an WHERE w.ward= '06' and w.snap_date=s.snap_date and a.sex=2) s1w
    ,(SELECT COUNT(DISTINCT w.an) from ward_admit_snapshot w inner join an_stat a on a.an = w.an WHERE w.ward= '99' and w.snap_date=s.snap_date and a.sex=1) c1m
    ,(SELECT COUNT(DISTINCT w.an) from ward_admit_snapshot w inner join an_stat a on a.an = w.an WHERE w.ward= '99' and w.snap_date=s.snap_date and a.sex=2) c1w
    from ward_admit_snapshot  s  
    where s.snap_date = SUBSTR(now(),1,11) GROUP BY s.snap_date";
    $conn_DB->imp_sql($sql);
    //$execute=array(':ipd_fr_id'=>$data);
    $rslt=$conn_DB->select_a();
    
//}
//print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();
?>