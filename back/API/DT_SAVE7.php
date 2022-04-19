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
// $select = ($data=='1')?'01':'02';
if(!empty($data)){
    $code = "and a.ward ='".$data."'";
}else{
    $code ='';
}
$sql="SELECT s.save_id,s.vn,s.place,s.recdate FROM an_stat a 
    inner join jvl_save s on a.vn = s.vn WHERE isnull(a.dchdate) and s.place = 3 group by s.vn ORDER BY s.save_id asc";
    $conn_DB->imp_sql($sql);
    $num_7save = $conn_DB->select();
    //print_r($num_7save);
    
    
    for($i=0;$i<count($num_7save);$i++){
        ////////////////////// Day 7 ////////////////////////
    $sql7 = "SELECT s.vn,a.an,p.hn,concat(p.pname,p.fname,' ',p.lname)fullname,w.name
    FROM an_stat a
    left outer join jvl_save s on a.vn = s.vn
    left outer join patient p on p.hn = a.hn
    left outer join ward w on w.ward = a.ward
    WHERE s.vn = '".$num_7save[$i]['vn']."' and isnull(a.dchdate) and (SELECT place FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1) = 3 and s.place=3
        and (SELECT substr(recdate,1,11) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1) = substr(s.recdate,1,11)
        and (SELECT count(*) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' and place=3) >= 2
        and DATEDIFF(NOW(),(SELECT substr(s.recdate,1,11) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1)) >=6 $code GROUP BY s.vn";
    $conn_DB->imp_sql($sql7);
    $num_save7 = $conn_DB->select_a();
//print_r($num_save7);
//$countArray++;
//echo count($num_save7);
if(count($num_save7) !=0){
    
    $series['vn'] = $num_save7['vn'];
    $series['an'] = $num_save7['an'];
    $series['hn'] = $num_save7['hn'];
    $series['fullname'] = $conv->tis620_to_utf8($num_save7['fullname']);
    $series['name'] = $conv->tis620_to_utf8($num_save7['name']);
    array_push($rslt, $series);   
 }
    }
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();