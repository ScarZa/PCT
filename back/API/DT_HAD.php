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
$rslt2 = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
// if(!empty($data)){
//     $code = "WHERE a.ward ='".$data."'";
// }else{
//     $code ='';
// }

$sql="select ds.depression_score,ds.suicide_score
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((op.an = :an 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine100
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((op.an = :an 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine100Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine25
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine25Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Carbamazepine200
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Carbamazepine200Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)LithiumCarbonate300
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)LithiumCarbonate300Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((op.an = :an 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200CHRONO
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200CHRONODate
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((op.an = :an 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate500
,(SELECT op.vstdate FROM opitemrece op inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((op.an = :an
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate500Date
    from patient p 
    LEFT OUTER JOIN an_stat a ON a.hn=p.hn
    left outer join opdscreen oc on oc.vn=a.vn
	  left outer join depression_screen ds on ds.vn=a.vn
    where a.an = :an GROUP BY a.an"; 
$conn_DB->imp_sql($sql);
$execute=array(':an' => $data);
$rslt=$conn_DB->select_a($execute);
    $conv=new convers_encode();
    //for($i=0;$i<count($num_risk);$i++){
    $series['Q9'] = isset($rslt['depression_score'])?$rslt['depression_score']:'-';
    $series['Q8'] = isset($rslt['suicide_score'])?$rslt['suicide_score']:'-';
    $series['Clozapine100'] = $rslt['Clozapine100'];
    $series['Clozapine100Date'] = isset($rslt['Clozapine100Date'])?DateThai1($rslt['Clozapine100Date']):'';
    $series['Clozapine25'] = $rslt['Clozapine25'];
    $series['Clozapine25Date'] = isset($rslt['Clozapine25Date'])?DateThai1($rslt['Clozapine25Date']):'';
    $series['Carbamazepine200'] = $rslt['Carbamazepine200'];
    $series['Carbamazepine200Date'] = isset($rslt['Carbamazepine200Date'])?DateThai1($rslt['Carbamazepine200Date']):'';
    $series['LithiumCarbonate300'] = $rslt['LithiumCarbonate300'];
    $series['LithiumCarbonate300Date'] = isset($rslt['LithiumCarbonate300Date'])?DateThai1($rslt['LithiumCarbonate300Date']):'';
    $series['SodiumValproate200'] = $rslt['SodiumValproate200'];
    $series['SodiumValproate200Date'] = isset($rslt['SodiumValproate200Date'])?DateThai1($rslt['SodiumValproate200Date']):'';
    $series['SodiumValproate200CHRONO'] = $rslt['SodiumValproate200CHRONO'];
    $series['SodiumValproate200CHRONODate'] = isset($rslt['SodiumValproate200CHRONODate'])?DateThai1($rslt['SodiumValproate200CHRONODate']):'';
    $series['SodiumValproate500'] = $rslt['SodiumValproate500'];
    $series['SodiumValproate500Date'] = isset($rslt['SodiumValproate500Date'])?DateThai1($rslt['SodiumValproate500Date']):'';
    //array_push($rslt2, $series);    //print_r($rslt2);
    //}
print json_encode($series);
$conn_DB->close_PDO();