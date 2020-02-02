<?php

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$conv=new convers_encode();
    $date = date("Y-m-d");
    $time = date("H:i:s");
    $chkdate = date('Y-m-d', strtotime("+7 days "));

    $sql = "SELECT sender FROM jvl_transferBox tb order by tB_id asc";
    $connDB->imp_sql($sql);
    $result = $connDB->select();

    for($i=0;$i<count($result);$i++){

        $sql = "SELECT loginname FROM opduser od where loginname like '".$result[$i]['sender']."%'";
    $connDB->imp_sql($sql);
    $result2 = $connDB->select();
    for($ii=0;$ii<count($result2);$ii++){
    echo $conv->tis620_to_utf8($result[$i]['sender']).'='.$conv->tis620_to_utf8($result2[$ii]['loginname']).'<br>';
    $data = array($result2[$ii]['loginname']);
    $field=array("sender");
    $table = "jvl_transferBox";
    $where="sender=:sender";
    $execute=array(':sender' => $result[$i]['sender']);
    $WarpR=$connDB->update($table, $data, $where, $field, $execute);
    }
    }
    $connDB->close_PDO();