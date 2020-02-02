<?php 
session_save_path("../session/");
session_start(); 
unset($_SESSION['status_user']);
unset($_SESSION['clinic_user']);
unset($_SESSION['user']);
unset($_SESSION['name_user']);
session_destroy();
echo 'Logout เรียบร้อยครับ !!!';
?>