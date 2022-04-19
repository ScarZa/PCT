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
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
if(!empty($data)){
    $code = "and a.ward ='".$data."'";
}else{
    $code ='';
}
$count3Day = 0;
$count7Day = 0;
$count7Daynext = 0;
$countArray = 0;
///////// 3 Day
    $sql="SELECT s.save_id,s.vn,s.place,s.recdate FROM an_stat a 
    inner join jvl_save s on a.vn = s.vn WHERE isnull(a.dchdate) and s.place = 2 group by s.save_id ORDER BY s.save_id asc"; 
    $conn_DB->imp_sql($sql);
    $num_save = $conn_DB->select();
    //print_r($num_save);
    $conv=new convers_encode();
    
    for($i=0;$i<count($num_save);$i++){
    $sql3 = "SELECT s.save_id,s.vn
    FROM an_stat a
    inner join jvl_save s on a.vn = s.vn
    WHERE s.vn = '".$num_save[$i]['vn']."' and isnull(a.dchdate) and (SELECT place FROM jvl_save WHERE vn = '".$num_save[$i]['vn']."' ORDER BY save_id desc limit 1) = 2 and s.place=2
    and DATEDIFF(NOW(),substr(s.recdate,1,11)) >=2 $code  ";
    $conn_DB->imp_sql($sql3);
    $num_save3 = $conn_DB->select_a();
//print_r($num_save3);
//$countArray++;
//echo count($num_save3);
if(count($num_save3) !=0){
    $count3Day++;
    // $series['count'] = $i;
    // $series['countArray'] = $countArray;
    // $series['save_id'] = $num_save3['save_id'];
    // $series['vn'] = $num_save3['vn'];
    // array_push($rslt, $series); 
}
    
    //$series['count_save'] = $num_save['c_save'];
       
    
    } ////////// End 3Day //////////////////////////

///////////////// 7 Day ////////////////////////
    $sql="SELECT s.save_id,s.vn,s.place,s.recdate FROM an_stat a 
    inner join jvl_save s on a.vn = s.vn WHERE isnull(a.dchdate) and s.place = 3 group by s.vn ORDER BY s.save_id asc";
    // "SELECT s.save_id,s.vn,s.place,s.recdate FROM an_stat a 
    // inner join jvl_save s on a.vn = s.vn WHERE isnull(a.dchdate) and s.place = 3 group by s.save_id ORDER BY s.save_id asc"; 
    $conn_DB->imp_sql($sql);
    $num_7save = $conn_DB->select();
    //print_r($num_7save);
    $conv=new convers_encode();
    
    for($i=0;$i<count($num_7save);$i++){
        ////////////////////// Day 7 ////////////////////////
    $sql7 = "SELECT s.save_id,s.vn
    FROM an_stat a
    inner join jvl_save s on a.vn = s.vn
    WHERE s.vn = '".$num_7save[$i]['vn']."' and isnull(a.dchdate) and (SELECT place FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1) = 3 and s.place=3
    and (SELECT count(*) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' and place=3) = 1
    and DATEDIFF(NOW(),substr(s.recdate,1,11)) >=6 ";
    $conn_DB->imp_sql($sql7);
    $num_save7 = $conn_DB->select_a();
print_r($num_save7);
//$countArray++;
//echo count($num_save7);
if(count($num_save7) !=0){
    $count7Day++;
//     $series['count'] = $i;
//     $series['countArray'] = $countArray;
//     $series['save_id'] = $num_save7['save_id'];
//     $series['vn'] = $num_save7['vn'];
//     array_push($rslt, $series); 
 }
    
    //$series['count_save'] = $num_save['c_save'];
       /////////////////// Day 7 next ////////////////////
    $sql7n = "SELECT s.save_id,s.vn
    FROM an_stat a
    inner join jvl_save s on a.vn = s.vn
    WHERE s.vn = '".$num_7save[$i]['vn']."' and isnull(a.dchdate) and (SELECT place FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1) = 3 and s.place=3
    and (SELECT substr(recdate,1,11) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1) = substr(s.recdate,1,11)
    and (SELECT count(*) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' and place=3) >= 2
    and DATEDIFF(NOW(),(SELECT substr(s.recdate,1,11) FROM jvl_save WHERE vn = '".$num_7save[$i]['vn']."' ORDER BY save_id desc limit 1)) >=6 order by s.vn asc";
    $conn_DB->imp_sql($sql7n);
    $num_save7n = $conn_DB->select_a();
print_r($num_save7n);
$countArray++;
//echo count($num_save7n);
if(count($num_save7n) !=0){
    $count7Daynext++;
    $series['count'] = $i;
    $series['countArray'] = $countArray;
    $series['save_id'] = $num_save7n['save_id'];
    $series['vn'] = $num_save7n['vn'];
    array_push($rslt, $series); 
}
    
    }
    //echo $countArray."<br>";
    echo $count3Day."<br>";
    echo $count7Day."<br>";
    echo $count7Daynext;
    $series['count_save'] = $count3Day+$count7Day+$count7Daynext;
     //array_push($rslt, $series); 
    //print_r($rslt);
print json_encode($rslt);
$conn_DB->close_PDO();