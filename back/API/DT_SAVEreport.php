<?php
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$conv=new convers_encode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');

if($data2==1){
$codeR1 ='sg.s_mode = 1';
$chk_mode = "and (`COLUMN_NAME` like 's1%' or `COLUMN_NAME` like 's2%' or `COLUMN_NAME` like 's3' or `COLUMN_NAME` like 's4%' or `COLUMN_NAME` like 's5%' )";
$mode = "sresult";
}else if($data2==2){
    $codeR1 ='sg.s_mode = 2';
    $chk_mode = "and (`COLUMN_NAME` like 'a1%' or `COLUMN_NAME` like 'a2%' )";
    $mode = "aresult";
}else if($data2==3){
    $codeR1 ='sg.s_mode = 3';
    $chk_mode = "and (`COLUMN_NAME` like 'v1%' or `COLUMN_NAME` like 'v2%' or `COLUMN_NAME` like 'v3%' or `COLUMN_NAME` like 'v4%' or `COLUMN_NAME` like 'v5%' )";
    $mode = "vresult";
}else if($data2==4){
    $codeR1 ='sg.s_mode = 4';
    $chk_mode = "and (`COLUMN_NAME` like 'e1%' or `COLUMN_NAME` like 'e2%' or `COLUMN_NAME` like 'e3%' or `COLUMN_NAME` like 'e4%' or `COLUMN_NAME` like 'e5%')";
    $mode = "eresult";
}
$sql_results1 = "SELECT concat(sg.sg_name,' : <br>',if(ISNULL(rs.save_name),'',rs.save_name)) save_name
FROM jvl_save_group sg 
left outer join jvl_result_save rs on sg.sg_id = rs.save_group where $codeR1 order by sg.sg_id asc";
                            $conn_DB->imp_sql($sql_results1);
                            $results1 = $conn_DB->select();

                            $sql_results2 = "SELECT SUBSTR(recdate,1,11) recdate,recdate recdate_num FROM jvl_save WHERE vn = '".$data."' order by recdate_num asc";
                            $conn_DB->imp_sql($sql_results2);
                            $results2 = $conn_DB->select();

                            $sql_results3 = "SELECT `COLUMN_NAME` 
                            FROM `INFORMATION_SCHEMA`.`COLUMNS` 
                            WHERE `TABLE_SCHEMA`='hosxp' 
                                AND `TABLE_NAME`='jvl_save'
                                $chk_mode;";
                            $conn_DB->imp_sql($sql_results3);
                            $results3 = $conn_DB->select();
                            
                            foreach ($results1 as $key1 => $value1) {
                            //$series['sg_name'] = $conv->tis620_to_utf8($value1['sg_name']);
                            $series['save_name'] = $conv->tis620_to_utf8($value1['save_name']);
                            foreach ($results2 as $key2 => $value2) {  
                            //foreach ($results3 as $key3 => $value3) {
                                
                               $sql = "SELECT ".$results3[$key1]['COLUMN_NAME']."
                               FROM jvl_save s
                               WHERE s.vn ='".$data."' and s.recdate = '".$value2['recdate_num']."'";
                            $conn_DB->imp_sql($sql);
                            $results = $conn_DB->select_a();
                            $series["s".$key2] = $conv->tis620_to_utf8($results[$results3[$key1]['COLUMN_NAME']]);
                            
                            }
                            //}
                            array_push($rslt, $series);
                            }
                            //$series['sg_name'] = '';
                            $series['save_name'] = 'ผลการประเมิน';
                            
                            foreach ($results2 as $key2 => $value2) {
                                $sql = "SELECT CASE
                                WHEN ".$mode." = 1 THEN 'ต่ำ'
                                WHEN ".$mode." = 2 THEN 'กลาง'
                                ELSE 'สูง'
                                END ".$mode."
                                FROM jvl_save s
                                WHERE s.vn ='".$data."' and s.recdate = '".$value2['recdate_num']."'";
                             $conn_DB->imp_sql($sql);
                             $results = $conn_DB->select_a();
                             $series["s".$key2] = $results[$mode];
                            }
                            array_push($rslt, $series);
                            //$series['sg_name'] = '';
                            $series['save_name'] = 'ผู้ประเมิน';
                            
                            foreach ($results2 as $key2 => $value2) {
                                $sql = "SELECT os.name
                                FROM jvl_save s
                                inner join opduser os on os.loginname = s.recorder
                                WHERE s.vn ='".$data."' and s.recdate = '".$value2['recdate_num']."'";
                             $conn_DB->imp_sql($sql);
                             $results = $conn_DB->select_a();
                             $series["s".$key2] = $conv->tis620_to_utf8($results['name']);
                            }
                            array_push($rslt, $series);
                            //print_r($rslt);
                            print json_encode($rslt);
$conn_DB->close_PDO();