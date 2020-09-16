<?php

session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new EnDeCode();
$conv=new convers_encode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}
$ipd_fr_id = $_POST['ipd_fr_id'];
$hn = $_POST['hn'];
$an = $_POST['an'];
$recdate = date("Y-m-d");
$recorder = $conv->utf8_to_tis620($_POST['user']);

    //////////////// add photo in DB   
if (isset($_FILES["file"]["type"])) {
    $del_photo="select pic_name from jvl_pics_ipd where ipd_fr_id=:ipd_fr_id";
                $connDB->imp_sql($del_photo);
                $execute=array(':ipd_fr_id' => $ipd_fr_id);
                $result=$connDB->select_a($execute);
                if(!empty($result['pic_name'])){
                $location="../../front/PI_imgs/".$result['pic_name'];
                include '../function/delet_file.php';
                fulldelete($location);
                
                $newname = new upload_resizeimage("file", "../../front/PI_imgs", "PIimage".$ipd_fr_id);
                $img = $newname->upload();
                //print_r($newname);
                if($img != FALSE){
                $table = "jvl_pics_ipd";
                $where = "ipd_fr_id=:ipd_fr_id";
                $execute=array(':ipd_fr_id' => $ipd_fr_id);
                $data = array($ipd_fr_id,$hn,$an,$img,$recdate,$recorder);
                $field=array("ipd_fr_id","hn","an","pic_name","recdate","recorder");
                $edit_piphoto=$connDB->update($table, $data, $where, $field, $execute);  
                
                if ($edit_piphoto == false) {
                    echo "ไม่สามารถอัพโหลดรูปภาพได้!!! " .$edit_piphoto->errorInfo();
                } else {
                            echo "อัพโหลดภาพสำเร็จ!!\n";
                            echo "File Name: " . $img ;
                }
                }
              }else{
                $newname = new upload_resizeimage("file", "../../front/PI_imgs", "PIimage".$ipd_fr_id);
                $img = $newname->upload();
                //print_r($newname);
                if($img != FALSE){
                $table = "jvl_pics_ipd";
                $data = array($ipd_fr_id,$hn,$an,$img,$recdate,$recorder);
                $insert_piphoto=$connDB->insert($table, $data);
                
                if ($insert_piphoto == false) {
                    echo "ไม่สามารถอัพโหลดรูปภาพได้!!! " .$insert_piphoto->errorInfo();
                } else {
                            echo "อัพโหลดภาพสำเร็จ!!\n";
                            echo "File Name: " . $img ;
                }
                }
              }

}
    
    /////////////////
                
                //echo "Temp file: " . $_FILES["file"]["tmp_name"];
            //}
//        }
//    } else {
////echo "<span id='invalid'>***Invalid file Size or Type***<span>";
//        echo "***ไม่ใช่ไฟล์ชนิดรูปภาพ***";
//    }
//}
$connDB->close_PDO();
