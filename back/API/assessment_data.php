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
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
 $sql = "SELECT pl.pl_id as id,concat(ps.pscate_name,' : ',pl.pl_name) name 
 FROM jvl_problem_list pl 
 inner join jvl_problem_subcategory ps on ps.pscate_id = pl.pscate_id
 inner join jvl_problem_category pc on pc.pcate_id = ps.pcate_id
 where pc.depcode = '$data'
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