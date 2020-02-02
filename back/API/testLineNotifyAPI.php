<?php
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');
        //////////////////// Line Notify //////////////////////////////
//if(!empty($_SESSION['m_tokenkey'])){ 

    include_once '../function/LineNotify.php';  
    include_once '../plugins/funcDateThai.php';
    $token = "2bs05X1pgtYXH6nauTZCcyKSqdpi1qDvuKSo7C5FUKk";
    $text =  "ทดสอบ Line Notify";
     
    $resnoti = notify_message($text,$token);
    //}
    print_r($resnoti);
    
    /////////////////////
