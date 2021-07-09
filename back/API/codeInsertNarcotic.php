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

    $date = date("Y-m-d");
    $time = date("H:i:s");
    $chkdate = date('Y-m-d', strtotime("+7 days "));

    $sql = "SELECT fr.ipd_fr_id,fr.dope_type,fr.narcotic_vol,fr.narcotic_frequency,fr.narcotic_age
    ,fr.last_useD,fr.narcotic_stop,fr.narcotic_cause
    FROM jvl_ipd_first_rec fr WHERE fr.dope_chk = 'Y'";
    $connDB->imp_sql($sql);
    $result = $connDB->select();

    for($i=0;$i<count($result);$i++){

        //echo $result[$i]['id']."<br>";
    // $data = array('N');
    // $field=array("move_status");
    // $table = "takerisk";
    // $where="takerisk_id=:takerisk_id";
    // $execute=array(':takerisk_id' => $result[$i]['id']);
    // $WarpR=$connDB->update($table, $data, $where, $field, $execute);

    $data2 = array($result[$i]['ipd_fr_id'],$result[$i]['dope_type'],$result[$i]['narcotic_vol'],$result[$i]['narcotic_frequency'],$result[$i]['narcotic_age'],$result[$i]['last_useD'],$result[$i]['narcotic_stop'],$result[$i]['narcotic_cause']);
    //$field2=array("takerisk_id","user_edit","evaluate","mmg_rec_date","mng_rec_time","mng_status","mng_date","check_date","chk_show");
    $table2 = "jvl_narcotic";  
    $WarpMR=$connDB->insert($table2, $data2);
  
    }
    $connDB->close_PDO();