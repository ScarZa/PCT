<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$dep = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$pl_id = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
 $sql = "SELECT plpg_id as id,plan_name name 
 FROM jvl_plan_progress pp
 inner join jvl_problem_category pc on pc.pcate_id = pp.pcate_id
 inner join jvl_problem_subcategory ps on  pc.pcate_id = ps.pcate_id
 inner join jvl_problem_list pl on pl.pscate_id = ps.pscate_id
 where pc.depcode = '$dep' and pl.pl_id = $pl_id
 ORDER BY id asc";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $user = $connDB->select();
    for($i=0;$i<count($user);$i++){
        $series['id'] = $conv->tis620_to_utf8($user[$i]['id']);
        $series['name'] = $conv->tis620_to_utf8($user[$i]['name']);
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>