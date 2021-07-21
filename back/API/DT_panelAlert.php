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
$sql="SELECT count(DISTINCT smi.smi4_id) count_smiv
FROM an_stat a 
inner join patient p on p.hn=a.hn
inner join jvlsmiv_regis smi on smi.hn=p.hn
inner join jvl_smiv smiv on smiv.hn = smi.hn
where ISNULL(a.dchdate) $code"; 
$conn_DB->imp_sql($sql);
$num_smiv = $conn_DB->select_a();

    $sql2="SELECT count(DISTINCT fr.ipd_fr_id) s3
    FROM jvl_ipd_first_rec fr 
    inner join an_stat a on fr.an = a.an
    where ISNULL(a.dchdate) and fr.typep_1 !=0 and fr.chk_update=0 $code"; 
    $conn_DB->imp_sql($sql2);
    $num_3s = $conn_DB->select_a();
        
        $sql2="SELECT count(DISTINCT fr.ipd_fr_id) escab
        FROM jvl_ipd_first_rec fr 
        inner join an_stat a on fr.an = a.an
        where ISNULL(a.dchdate) and fr.typep_2 !=0 and fr.chk_update=0 $code"; 
$conn_DB->imp_sql($sql2);
    $num_escab = $conn_DB->select_a();

    $sql="SELECT count(DISTINCT fr.ipd_fr_id) suiside
    FROM jvl_ipd_first_rec fr 
    inner join an_stat a on fr.an = a.an
    where ISNULL(a.dchdate) and fr.typep_3 !=0 and fr.chk_update=0 $code"; 
$conn_DB->imp_sql($sql);
    $num_suiside = $conn_DB->select_a();

    $sql="SELECT count(DISTINCT fr.ipd_fr_id) accident
    FROM jvl_ipd_first_rec fr 
    inner join an_stat a on fr.an = a.an
    where ISNULL(a.dchdate) and fr.typep_4 !=0 and fr.chk_update=0 $code"; 
$conn_DB->imp_sql($sql);
    $num_accident = $conn_DB->select_a();

    $sql="SELECT count(DISTINCT fr.ipd_fr_id) assail
    FROM jvl_ipd_first_rec fr 
    inner join an_stat a on fr.an = a.an
    where ISNULL(a.dchdate) and fr.typep_5 !=0 and fr.chk_update=0 $code"; 
$conn_DB->imp_sql($sql);
    $num_assail = $conn_DB->select_a();

    $sql="SELECT count(DISTINCT op.hn)drug
    FROM opitemrece op 
    inner join an_stat a on a.an = op.an and ISNULL(a.dchdate)
    WHERE ((op.icode = '1570044' and (op.income in(03,19))) or (op.icode = '1540027' and (op.income in(03,19))) 
    or (op.icode = '1460332' and (op.income in(03,19))) or (op.icode = '1480107' and (op.income in(03,19))) 
    or (op.icode = '1000059' and (op.income in(03,19))) or (op.icode = '1480069' and (op.income in(03,19))) 
    or (op.icode = '1480070' and (op.income in(03,19)))) $code
    #GROUP BY op.an"; 
$conn_DB->imp_sql($sql);
    $num_drug = $conn_DB->select_a();
 
    $conv=new convers_encode();
    //for($i=0;$i<count($num_risk);$i++){
    $series['count_smiv'] = $num_smiv['count_smiv'];
    $series['count_3s'] = $num_3s['s3'];
    $series['count_escab'] = $num_escab['escab'];
    $series['count_suiside'] = $num_suiside['suiside'];
    $series['count_accident'] = $num_accident['accident'];
    $series['count_assail'] = $num_assail['assail'];
    $series['count_drug'] = $num_drug['drug'];
    //array_push($rslt, $series);    
    //}
    //print_r($rslt);
print json_encode($series);
$conn_DB->close_PDO();