<?php session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new TablePDO();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$conv=new convers_encode();?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>แบบการวินิจฉัยทางสังคม</title>
<link rel='SHORTCUT ICON' href='images/icon_set2/compose.ico'>
    <meta charset="UTF-8">
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../../front/template/bootstrap-4.1.1/css/bootstrap.min.css" crossorigin="anonymous">
    <!-- <link rel="stylesheet" type="text/css" href="plugins/Jprint/print.min.css"> -->
    <link rel="stylesheet" href="../../front/plugins/font-awesome-4.6.3/css/font-awesome.min.css">
    <!-- Select2 -->
    <link rel="stylesheet" href="../../front/plugins/select2/select2.min.css">
    <!-- My tools -->
    <!-- <script src="MyTools/createTableAjax.js" type="text/javascript"></script>
    <script src="MyTools/AJAXCharts.js" type="text/javascript"></script>
    <script src="MyTools/reportLayout.js" type="text/javascript"></script> -->
    <!-- End My tools -->
    <link rel="stylesheet" href="../../front/plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.css" />
    <link rel="stylesheet" href="../../front/plugins/jquery-ui-1.11.4.custom/SpecialDateSheet.css" />
    <!-- <link rel="stylesheet" type="text/css" href="plugins/DataTables/datatables.min.css"/> -->
    <link rel="stylesheet" type="text/css" href="../../front/plugins/DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css" />
   
<style type="text/css">
body {
	margin-top: 50px;
}
</style>
</head>
<?php
include_once ('../plugins/funcDateThai.php');
include '../plugins/function_date.php';
    $id=$_GET['id'];

    $sql=  "SELECT prc.doc_result FROM jvl_plan_result_commu prc 
    WHERE prc.plan_cid = ".$id;
    $connDB->imp_sql($sql);
    $docs=$connDB->select_a();
    print_r($docs['doc_result']) ;
    if($docs['doc_result']!='' or $docs['doc_result']!=null){
      echo "<meta http-equiv='refresh' content='0;url=../../front/ProgressDoc_Commu/".$conv->tis620_to_utf8($docs['doc_result'])."' />";
    }else{
      echo "ไม่มีเอกสารแนบครับ";
    }
    
    ?>
<body>


<script src="../plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.js"></script>
</body>
</html>