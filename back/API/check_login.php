<?php 
session_save_path("../session/");
session_start(); 

function __autoload($class_name) {
    include_once '../class/' . $class_name . '.php';
}

$dbh=new dbPDO_mng();
$read="../connection/conn_DB.txt";
$dbh->para_read($read);
//$dbh->Read_Text();
$dbh->conn_PDO();
//print_r($dbh);
$conv=new convers_encode();
$user_account = $conv->utf8_to_tis620(trim(filter_input(INPUT_POST, 'user_account',FILTER_SANITIZE_STRING)));
$user_pwd = $conv->utf8_to_tis620(md5(trim(filter_input(INPUT_POST, 'user_pwd',FILTER_SANITIZE_STRING))));
$sql = "select u.doctorcode as doctorcode,u.clinic as clinic,u.status_user as status_user,o.name as name 
    from jvlmatrix_user u 
INNER JOIN opduser o on o.doctorcode=u.doctorcode
where   u.username= :user_account and u.password= :user_pwd";
$execute=array(':user_account' => $user_account, ':user_pwd' => $user_pwd);
$dbh->imp_sql($sql);
$result=$dbh->select_a($execute);
//print_r($result);
$_SESSION['status_user'] = isset($result['status_user'])?$result['status_user']:'';
$_SESSION['clinic_user'] = isset($result['clinic'])?$result['clinic']:'';

if (!$result) {
    
$sql2 ="select doctorcode,name from opduser where   loginname= :user_account and passweb= :user_pwd";
$execute2=array(':user_account' => $user_account, ':user_pwd' => $user_pwd);
$dbh->imp_sql($sql2);
$result=$dbh->select_a($execute2);   

$_SESSION['status_user']='HOS';

}
if($result){
    $sql3 ="SELECT m.depcode,mdw.ward FROM jvl_mappingDU m
    left outer join jvl_mapd_w mdw on mdw.depcode = m.depcode
    where m.doctorcode=:doctorcode";
    $execute3=array(':doctorcode' => $result['doctorcode']);
    $dbh->imp_sql($sql3);
    $result3=$dbh->select_a($execute3); 

    $date_login = date("Y-m-d");
    $time_login = date('H:i:s');
    $data = array($date_login, $time_login);
    $field=array("date_login","time_login");
    $table = "jvlmatrix_user";
    $where="username=:username and password=:password";
    $execute=array(':username' => $user_account,':password'=>$user_pwd);
    $receive_repair=$dbh->update($table, $data, $where, $field, $execute);
    $_SESSION['username'] = $user_account;
    $_SESSION['user'] = $result['doctorcode'];
    $_SESSION['name_user'] = $result['name'];
    $_SESSION['depcode'] = $result3['depcode'];
    $_SESSION['ward'] = $result3['ward'];
}else{
	echo "ชื่อหรือรหัสผ่านผิด กรุณาตรวจสอบอีกครั้ง!";
        exit();
}

$dbh->close_PDO();
?>
