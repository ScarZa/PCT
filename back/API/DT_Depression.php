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
set_time_limit(0);
$rslt = array();
$series = array();
//$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');

$sql="select p.hn,concat(p.pname,p.fname,' ',p.lname) as fullname,v.age_y age,v.pdx,pt.name ptname 
#,(SELECT count(ds.hn) FROM depression_screen ds inner join jvl_headData_2q8q9q hd on hd.depression_screen_id = ds.depression_screen_id  WHERE ds.hn = p.hn GROUP BY ds.hn)count
from patient p
inner join depression_screen ds on ds.hn = p.hn
inner join jvl_headData_2q8q9q hd on hd.depression_screen_id = ds.depression_screen_id
inner JOIN vn_stat v ON v.hn=p.hn
inner join pttype pt on v.pttype=pt.pttype
GROUP BY ds.hn ORDER BY hd.hd_id desc"; 
$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();

$sql2="SELECT count(ds.hn) count
FROM depression_screen ds 
inner join patient p on p.hn = ds.hn
inner join jvl_headData_2q8q9q hd on hd.depression_screen_id = ds.depression_screen_id  
GROUP BY ds.hn ORDER BY hd.hd_id desc"; 
        $conn_DB->imp_sql($sql2);
        $count = $conn_DB->select(); 
        //print_r($count);
       
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){ 
        // $sql2="SELECT count(ds.hn) count FROM depression_screen ds inner join jvl_headData_2q8q9q hd on hd.depression_screen_id = ds.depression_screen_id WHERE ds.hn = '".$num_risk[$i]['hn']."' GROUP BY ds.hn"; 
        // $conn_DB->imp_sql($sql2);
        // $count = $conn_DB->select_a(); 
        // print_r($count);

    $series['hn'] = $num_risk[$i]['hn'];
    $series['fullname'] = $conv->tis620_to_utf8($num_risk[$i]['fullname']);
    $series['age'] = $num_risk[$i]['age'];
    $series['pdx'] = $num_risk[$i]['pdx'];
    $series['ptname'] = $conv->tis620_to_utf8($num_risk[$i]['ptname']);
    $series['count'] = $count[$i]['count'];
    
    
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();