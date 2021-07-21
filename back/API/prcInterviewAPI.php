<?php
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');
function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
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
$conv=new convers_encode();
$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'add_FR') {
        $biographer = isset($_POST['biographer'])?$conv->utf8_to_tis620($_POST['biographer']):'';
        $relative = isset($_POST['relative'])?$conv->utf8_to_tis620($_POST['relative']):'';
        $patient_add = isset($_POST['patient_add'])?$conv->utf8_to_tis620($_POST['patient_add']):'';
        $tel0 = isset($_POST['tel0'])?$conv->utf8_to_tis620($_POST['tel0']):'';
        $tel1 = isset($_POST['tel1'])?$conv->utf8_to_tis620($_POST['tel1']):'';
        $relative1 = isset($_POST['relative1'])?$conv->utf8_to_tis620($_POST['relative1']):'';
        $tel2 = isset($_POST['tel2'])?$conv->utf8_to_tis620($_POST['tel2']):'';
        $relative2 = isset($_POST['relative2'])?$conv->utf8_to_tis620($_POST['relative2']):'';
        $fathername = isset($_POST['fathername'])?$conv->utf8_to_tis620($_POST['fathername']):'';
        $father_chk = $conv->utf8_to_tis620($_POST['father_chk']);
        $father_age = isset($_POST['father_age'])?$conv->utf8_to_tis620($_POST['father_age']):'';
        $father_occup = isset($_POST['father_occup'])?$conv->utf8_to_tis620($_POST['father_occup']):'';
        $mothername = isset($_POST['mothername'])?$conv->utf8_to_tis620($_POST['mothername']):'';
        $mother_chk = $conv->utf8_to_tis620($_POST['mother_chk']);
        $mother_age = isset($_POST['mother_age'])?$conv->utf8_to_tis620($_POST['mother_age']):'';
        $mother_occup = isset($_POST['mother_occup'])?$conv->utf8_to_tis620($_POST['mother_occup']):'';
        $marry_chk = $conv->utf8_to_tis620($_POST['marry_chk']);
        $spouse_name = isset($_POST['spouse_name'])?$conv->utf8_to_tis620($_POST['spouse_name']):'';
        $child = isset($_POST['child'])?$conv->utf8_to_tis620($_POST['child']):'';
        $earmark = isset($_POST['earmark'])?$conv->utf8_to_tis620($_POST['earmark']):'';
        $bw = isset($_POST['bw'])?$conv->utf8_to_tis620($_POST['bw']):'';
        $height = isset($_POST['height'])?$conv->utf8_to_tis620($_POST['height']):'';
        $bmi = isset($_POST['bmi'])?$conv->utf8_to_tis620($_POST['bmi']):'';
        $cc = isset($_POST['CC'])?$conv->utf8_to_tis620($_POST['CC']):'';
        $hpi = isset($_POST['HPI'])?$conv->utf8_to_tis620($_POST['HPI']):'';
        $pmh = isset($_POST['pmh'])?$conv->utf8_to_tis620($_POST['pmh']):'';
        //////////////// ER
        $weapon_chk = $conv->utf8_to_tis620($_POST['weapon_chk']);
        $weapon = isset($_POST['weapon'])?$conv->utf8_to_tis620($_POST['weapon']):'';
        $weaponer_chk = $conv->utf8_to_tis620($_POST['weaponer_chk']);
        $weaponer = isset($_POST['weaponer'])?$conv->utf8_to_tis620($_POST['weaponer']):'';
        $detain_chk = $conv->utf8_to_tis620($_POST['detain_chk']);
        $detain = isset($_POST['detain'])?$conv->utf8_to_tis620($_POST['detain']):'';
        $smi4_chk = $conv->utf8_to_tis620($_POST['smi4_chk']);
        $smi4_1 = isset($_POST['smi4_1'])?$conv->utf8_to_tis620($_POST['smi4_1']):'';
        $smi4_2 = isset($_POST['smi4_2'])?$conv->utf8_to_tis620($_POST['smi4_2']):'';
        $smi4_3 = isset($_POST['smi4_3'])?$conv->utf8_to_tis620($_POST['smi4_3']):'';
        $smi4_4 = isset($_POST['smi4_4'])?$conv->utf8_to_tis620($_POST['smi4_4']):'';
        $lawpsych_chk = $conv->utf8_to_tis620($_POST['lawpsych_chk']);
        $lawpsych = isset($_POST['lawpsych'])?$conv->utf8_to_tis620($_POST['lawpsych']):'';
        $sleep_chk = $conv->utf8_to_tis620($_POST['sleep_chk']);
        $sleep = isset($_POST['sleep'])?$conv->utf8_to_tis620($_POST['sleep']):'';
        $ic_chk = $conv->utf8_to_tis620($_POST['IC_chk']);
        $ic = isset($_POST['IC'])?$conv->utf8_to_tis620($_POST['IC']):'';
        $med_chk = $conv->utf8_to_tis620($_POST['med_chk']);
        $med = isset($_POST['med'])?$conv->utf8_to_tis620($_POST['med']):'';
        $accident_chk = isset($_POST['accident_chk'])?$conv->utf8_to_tis620($_POST['accident_chk']):'';
        $accident = isset($_POST['accident'])?$conv->utf8_to_tis620($_POST['accident']):'';
        $wound_chk = $conv->utf8_to_tis620($_POST['wound_chk']);
        $wound = isset($_POST['wound'])?$conv->utf8_to_tis620($_POST['wound']):'';
        $surgery_chk = $conv->utf8_to_tis620($_POST['surgery_chk']);
        $surgery = isset($_POST['surgery'])?$conv->utf8_to_tis620($_POST['surgery']):'';
        $complicate_chk = $conv->utf8_to_tis620($_POST['complicate_chk']);
        $complicate = isset($_POST['complicate'])?$conv->utf8_to_tis620($_POST['complicate']):'';
        $alcohol_chk = $conv->utf8_to_tis620($_POST['alcohol_chk']);
        $alcohol_type = isset($_POST['alcohol_type'])?$conv->utf8_to_tis620($_POST['alcohol_type']):'';
        $alcohol_vol = isset($_POST['alcohol_vol'])?$conv->utf8_to_tis620($_POST['alcohol_vol']):'';
        $alcohol_frequency = isset($_POST['alcohol_frequency'])?$conv->utf8_to_tis620($_POST['alcohol_frequency']):'';
        $drink_age = isset($_POST['drink_age'])?$conv->utf8_to_tis620($_POST['drink_age']):'';
        $last_useA = isset($_POST['last_useA'])?$conv->utf8_to_tis620($_POST['last_useA']):'';
        $time_stop = isset($_POST['time_stop'])?$conv->utf8_to_tis620($_POST['time_stop']):'';
        $drink_cause = isset($_POST['drink_cause'])?$conv->utf8_to_tis620($_POST['drink_cause']):'';
        $dope_chk = $conv->utf8_to_tis620($_POST['narcotic_chk']);

        $dope_type = isset($_POST['dope_type'][0])?$conv->utf8_to_tis620($_POST['dope_type'][0]):'';
        $narcotic_vol = isset($_POST['narcotic_vol'][0])?$conv->utf8_to_tis620($_POST['narcotic_vol'][0]):'';
        $narcotic_frequency = isset($_POST['narcotic_frequency'][0])?$conv->utf8_to_tis620($_POST['narcotic_frequency'][0]):'';
        $narcotic_age = isset($_POST['narcotic_age'][0])?$conv->utf8_to_tis620($_POST['narcotic_age'][0]):'';
        $last_useD = isset($_POST['last_useD'][0])?$conv->utf8_to_tis620($_POST['last_useD'][0]):'';
        $narcotic_stop = isset($_POST['narcotic_stop'][0])?$conv->utf8_to_tis620($_POST['narcotic_stop'][0]):'';
        $narcotic_cause = isset($_POST['narcotic_cause'][0])?$conv->utf8_to_tis620($_POST['narcotic_cause'][0]):'';
        
        $menses_chk = isset($_POST['menses_chk'])?$conv->utf8_to_tis620($_POST['menses_chk']):'';
        $menses = isset($_POST['menses'])?$conv->utf8_to_tis620($_POST['menses']):'';
        ////////////////// End ER
        $disease_chk = $conv->utf8_to_tis620($_POST['disease_chk']);
        $d0 = isset($_POST['D0'])?$conv->utf8_to_tis620($_POST['D0']):'';
        $d1 = isset($_POST['D1'])?$conv->utf8_to_tis620($_POST['D1']):'';
        $d2 = isset($_POST['D2'])?$conv->utf8_to_tis620($_POST['D2']):'';
        $d3 = isset($_POST['D3'])?$conv->utf8_to_tis620($_POST['D3']):'';
        $d4 = isset($_POST['D4'])?$conv->utf8_to_tis620($_POST['D4']):'';
        $d5 = isset($_POST['D5'])?$conv->utf8_to_tis620($_POST['D5']):'';
        $d6 = isset($_POST['D6'])?$conv->utf8_to_tis620($_POST['D6']):'';
        $d7 = isset($_POST['D7'])?$conv->utf8_to_tis620($_POST['D7']):'';
        $disease = isset($_POST['disease'])?$conv->utf8_to_tis620($_POST['disease']):'';
        $heal_chk = $conv->utf8_to_tis620($_POST['heal_chk']);
        $heal = isset($_POST['heal'])?$conv->utf8_to_tis620($_POST['heal']):'';
        $whip_chk = $conv->utf8_to_tis620($_POST['whip_chk']);
        $whip = isset($_POST['whip'])?$conv->utf8_to_tis620($_POST['whip']):'';
        $regular_med_chk = $conv->utf8_to_tis620($_POST['regular_med_chk']);
        $regular_med = isset($_POST['regular_med'])?$conv->utf8_to_tis620($_POST['regular_med']):'';
        $adr_chk = $conv->utf8_to_tis620($_POST['ADR_chk']);
        $adr = isset($_POST['ADR'])?$conv->utf8_to_tis620($_POST['ADR']):'';
        $beallergic_chk = $conv->utf8_to_tis620($_POST['beAllergic_chk']);
        $beallergic = isset($_POST['beAllergic'])?$conv->utf8_to_tis620($_POST['beAllergic']):'';
        $old_med_chk = $conv->utf8_to_tis620($_POST['old_med_chk']);
        $old_med = isset($_POST['old_med'])?$conv->utf8_to_tis620($_POST['old_med']):'';
        $heredity_chk = $conv->utf8_to_tis620($_POST['heredity_chk']);
        $heredity = isset($_POST['heredity'])?$conv->utf8_to_tis620($_POST['heredity']):'';
        $Hurt_yourself_chk = $conv->utf8_to_tis620($_POST['Hurt_yourself_chk']);
        $think = isset($_POST['think'])?$conv->utf8_to_tis620($_POST['think']):'';
        $plan = isset($_POST['plan'])?$conv->utf8_to_tis620($_POST['plan']):'';
        $plan_detial = isset($_POST['plan_detial'])?$conv->utf8_to_tis620($_POST['plan_detial']):'';
        $action = isset($_POST['action'])?$conv->utf8_to_tis620($_POST['action']):'';
        $action_detial = isset($_POST['action_detial'])?$conv->utf8_to_tis620($_POST['action_detial']):'';
        $lawsuit_chk = $conv->utf8_to_tis620($_POST['lawsuit_chk']);
        $lawsuit = isset($_POST['lawsuit'])?$conv->utf8_to_tis620($_POST['lawsuit']):'';
        $personality = isset($_POST['personality'])?$conv->utf8_to_tis620($_POST['personality']):'';
        $typep = $conv->utf8_to_tis620($_POST['typeP']);
        $refer = $conv->utf8_to_tis620($_POST['refer']);
        $admit_type = $conv->utf8_to_tis620($_POST['admit_type']);
        $income = isset($_POST['income'])?$conv->utf8_to_tis620($_POST['income']):'';
        $admittype = $conv->utf8_to_tis620($_POST['admittype']);
        $typep_1 = isset($_POST['typeP_1'])?$conv->utf8_to_tis620($_POST['typeP_1']):'';
        $typep_2 = isset($_POST['typeP_2'])?$conv->utf8_to_tis620($_POST['typeP_2']):'';
        $typep_3 = isset($_POST['typeP_3'])?$conv->utf8_to_tis620($_POST['typeP_3']):'';
        $typep_4 = isset($_POST['typeP_4'])?$conv->utf8_to_tis620($_POST['typeP_4']):'';
        $typep_5 = isset($_POST['typeP_5'])?$conv->utf8_to_tis620($_POST['typeP_5']):'';

        /////////////////////// condition ///////////////////////
        $shape = $conv->utf8_to_tis620($_POST['shape']);
        $skin_color = $conv->utf8_to_tis620($_POST['skin_color']);
        $scab_chk = $conv->utf8_to_tis620($_POST['scab_chk']);
        $scab_0 = isset($_POST['scab_0'])?$conv->utf8_to_tis620($_POST['scab_0']):'';
        $scab_1 = isset($_POST['scab_1'])?$conv->utf8_to_tis620($_POST['scab_1']):'';
        $scab_2 = isset($_POST['scab_2'])?$conv->utf8_to_tis620($_POST['scab_2']):'';
        $scab_3 = isset($_POST['scab_3'])?$conv->utf8_to_tis620($_POST['scab_3']):'';
        $scab_4 = isset($_POST['scab_4'])?$conv->utf8_to_tis620($_POST['scab_4']):'';
        $scab_5 = isset($_POST['scab_5'])?$conv->utf8_to_tis620($_POST['scab_5']):'';
        $scab_6 = isset($_POST['scab_6'])?$conv->utf8_to_tis620($_POST['scab_6']):'';
        $scab_7 = isset($_POST['scab_7'])?$conv->utf8_to_tis620($_POST['scab_7']):'';
        $scab_8 = isset($_POST['scab_8'])?$conv->utf8_to_tis620($_POST['scab_8']):'';
        $scab_9 = isset($_POST['scab_9'])?$conv->utf8_to_tis620($_POST['scab_9']):'';
        $detial_scab = isset($_POST['detial_scab'])?$conv->utf8_to_tis620($_POST['detial_scab']):'';
        $swelling_chk = $conv->utf8_to_tis620($_POST['swelling_chk']);
        $swelling = isset($_POST['swelling'])?$conv->utf8_to_tis620($_POST['swelling']):'';
        $movement = isset($_POST['movement'])?$conv->utf8_to_tis620($_POST['movement']):'';
        $disabled_chk= $conv->utf8_to_tis620($_POST['disabled_chk']);
        $disabled = isset($_POST['disabled'])?$conv->utf8_to_tis620($_POST['disabled']):'';
        /////////////////////// End condition ///////////////////////

        $hn = $conv->utf8_to_tis620($_POST['hn']);
        $vn = $conv->utf8_to_tis620($_POST['vn']);
        $an = $conv->utf8_to_tis620($_POST['an']);
        $user = isset($_POST['user'])?$conv->utf8_to_tis620($_POST['user']):'N';
        $redate = date('Y-m-d H:i:s');
        if($user =='N' or $user =='null' or $user =='undefined'){
            $res = array("messege"=>'ไม่สามารถบันทึกได้ กรุณาติดต่องานคอมพิวเตอร์ (68120) ครับ!!!!',"check"=>'N');
        } else{
        $sql = "SELECT ipd_fr_id FROM jvl_ipd_first_rec WHERE an='".$an."'";
        $connDB->imp_sql($sql);
        $chk_fr=$connDB->select_a();
        if(empty($chk_fr)){
            $data = array($hn,$vn,$an,$biographer,$relative,$patient_add,$tel0,$tel1,$relative1,$tel2,$relative2,$fathername,$father_chk,$father_age,$father_occup,$mothername,$mother_chk,$mother_age,$mother_occup
            ,$marry_chk,$spouse_name,$child,$earmark,$bw,$height,$bmi,$cc,$hpi,$pmh,$weapon_chk,$weapon,$weaponer_chk,$weaponer,$detain_chk,$detain,$smi4_chk,$smi4_1,$smi4_2,$smi4_3,$smi4_4
            ,$lawpsych_chk,$lawpsych,$sleep_chk,$sleep,$ic_chk,$ic,$med_chk,$med,$accident_chk,$accident,$wound_chk,$wound,$surgery_chk,$surgery,$complicate_chk,$complicate,$alcohol_chk
            ,$alcohol_type,$alcohol_vol,$alcohol_frequency,$drink_age,$last_useA,$time_stop,$drink_cause,$dope_chk,$dope_type,$narcotic_vol,$narcotic_frequency,$narcotic_age,$last_useD,$narcotic_stop,$narcotic_cause
            ,$menses_chk,$menses,$disease_chk,$d0,$d1,$d2,$d3,$d4,$d5,$d6,$d7,$disease,$heal_chk,$heal,$whip_chk,$whip,$regular_med_chk,$regular_med,$adr_chk,$adr
            ,$beallergic_chk,$beallergic,$old_med_chk,$old_med,$heredity_chk,$heredity,$Hurt_yourself_chk,$think,$plan,$plan_detial,$action,$action_detial,$lawsuit_chk,$lawsuit,$personality
            ,$typep,$refer,$admit_type,$income,$admittype,$typep_1,$typep_2,$typep_3,$typep_4,$typep_5,$redate,$user);
            $table = "jvl_ipd_first_rec";
            $first_rec = $connDB->insert($table, $data);

            $dope_type_chk=$_POST['dope_type'];
            
foreach ($dope_type_chk as $key => $value) {
         $dope_typeArr[$key] = $conv->utf8_to_tis620($_POST['dope_type'][$key]);
        $narcotic_volArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_vol'][$key]);
        $narcotic_frequencyArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_frequency'][$key]);
        $narcotic_ageArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_age'][$key]);
        $last_useDArr[$key]=$conv->utf8_to_tis620($_POST['last_useD'][$key]);
        $narcotic_stopArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_stop'][$key]);
        $narcotic_causeArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_cause'][$key]);

        $dope_typearr = $dope_typeArr[$key];
        $narcotic_volarr = $narcotic_volArr[$key];
        $narcotic_frequencyarr = $narcotic_frequencyArr[$key];
        $narcotic_agearr = $narcotic_ageArr[$key];
        $last_useDarr = $last_useDArr[$key];
        $narcotic_stoparr = $narcotic_stopArr[$key];
        $narcotic_causearr = $narcotic_causeArr[$key];
        

        // if($key == 0){
        //     $data4 = array($dope_typearr,$narcotic_volarr,$narcotic_frequencyarr,$narcotic_agearr,$last_useDarr,$narcotic_stoparr,$narcotic_causearr);
        //     $field4=array("dope_type","narcotic_vol","narcotic_frequency", "narcotic_age","last_useD","narcotic_stop","narcotic_cause");
        //     $table4 = "jvl_ipd_first_rec";
        //     $where4="ipd_fr_id=:ipd_fr_id";
        //     $execute4=array(':ipd_fr_id' => $first_rec);
        //     $connDB->update($table4, $data4, $where4, $field4, $execute4);
        // }
       
        $data3 = array($first_rec,$dope_typearr,$narcotic_volarr,$narcotic_frequencyarr,$narcotic_agearr,$last_useDarr,$narcotic_stoparr,$narcotic_causearr);
        $table3 = "jvl_narcotic";
        $connDB->insert($table3, $data3);
}
        if($first_rec){
            $data2 = array($first_rec,$shape,$skin_color,$scab_chk,$scab_0,$scab_1,$scab_2,$scab_3,$scab_4,$scab_5,$scab_6,$scab_7,$scab_8,$scab_9,$detial_scab,$swelling_chk,$swelling,$movement,$disabled_chk,$disabled);
            $table2 = "jvl_condition";
            $condition = $connDB->insert($table2, $data2);
            if($condition){
              $res = array("messege"=>'บันทึกข้อมูลประเมินทางกายสำเร็จครับ!!!!',"check"=>'Y');
            }else{
              $res = array("messege"=>'บันทึกข้อมูลประเมินทางกายไม่สำเร็จครับ!!!!',"check"=>'N');
          }
        }else{
            $res = array("messege"=>'บันทึกข้อมูลไม่สำเร็จครับ!!!!',"check"=>'N');
        }
    }else{
        $res = array("messege"=>'AN : '.$an.' บันทึกข้อมูลแล้วครับ!!!!',"check"=>'N');
    }

    
}
        print json_encode($res);
        $connDB->close_PDO();

}elseif ($method == 'add_GG') {
    $think_chk = isset($_POST['think_chk'])?$conv->utf8_to_tis620($_POST['think_chk']):'';
    $continuous = isset($_POST['continuous'])?$conv->utf8_to_tis620($_POST['continuous']):'';
    $continuous_detial = isset($_POST['continuous_detial'])?$conv->utf8_to_tis620($_POST['continuous_detial']):'';
    $think_1 = isset($_POST['think_1'])?$conv->utf8_to_tis620($_POST['think_1']):'';
    $think_1D = isset($_POST['think_1D'])?$conv->utf8_to_tis620($_POST['think_1D']):'';
    $think_2 = isset($_POST['think_1'])?$conv->utf8_to_tis620($_POST['think_2']):'';
    $think_2D = isset($_POST['think_1D'])?$conv->utf8_to_tis620($_POST['think_2D']):'';
    $think_3 = isset($_POST['think_3'])?$conv->utf8_to_tis620($_POST['think_3']):'';
    $think_4 = isset($_POST['think_4'])?$conv->utf8_to_tis620($_POST['think_4']):'';
    $think_5 = isset($_POST['think_5'])?$conv->utf8_to_tis620($_POST['think_5']):'';
    $think_6 = isset($_POST['think_6'])?$conv->utf8_to_tis620($_POST['think_6']):'';
    $think_6D = isset($_POST['think_6D'])?$conv->utf8_to_tis620($_POST['think_6D']):'';
    $mood1 = isset($_POST['mood1'])?$conv->utf8_to_tis620($_POST['mood1']):'';
    $mood2 = isset($_POST['mood2'])?$conv->utf8_to_tis620($_POST['mood2']):'';
    $mood3 = isset($_POST['mood3'])?$conv->utf8_to_tis620($_POST['mood3']):'';
    $mood4 = isset($_POST['mood4'])?$conv->utf8_to_tis620($_POST['mood4']):'';
    $mood5 = isset($_POST['mood5'])?$conv->utf8_to_tis620($_POST['mood5']):'';
    $other_mood = isset($_POST['other_mood'])?$conv->utf8_to_tis620($_POST['other_mood']):'';
    $action_1 = isset($_POST['action_1'])?$conv->utf8_to_tis620($_POST['action_1']):'';
    $action_2 = isset($_POST['action_2'])?$conv->utf8_to_tis620($_POST['action_2']):'';
    $action_3 = isset($_POST['action_3'])?$conv->utf8_to_tis620($_POST['action_3']):'';
    $action_4 = isset($_POST['action_4'])?$conv->utf8_to_tis620($_POST['action_4']):'';
    $action_4D = isset($_POST['action_4D'])?$conv->utf8_to_tis620($_POST['action_4D']):'';
    $action_5 = isset($_POST['action_5'])?$conv->utf8_to_tis620($_POST['action_5']):'';
    $action_6 = isset($_POST['action_6'])?$conv->utf8_to_tis620($_POST['action_6']):'';
    $action_6D = isset($_POST['action_6D'])?$conv->utf8_to_tis620($_POST['action_6D']):'';
    $action_7 = isset($_POST['action_7'])?$conv->utf8_to_tis620($_POST['action_7']):'';
    $action_8 = isset($_POST['action_8'])?$conv->utf8_to_tis620($_POST['action_8']):'';
    $action_9 = isset($_POST['action_9'])?$conv->utf8_to_tis620($_POST['action_9']):'';
    $action_10 = isset($_POST['action_10'])?$conv->utf8_to_tis620($_POST['action_10']):'';
    $action_10D = isset($_POST['action_10D'])?$conv->utf8_to_tis620($_POST['action_10D']):'';
    $Recognition_chk = isset($_POST['Recognition_chk'])?$conv->utf8_to_tis620($_POST['Recognition_chk']):'';
    $Recog_1 = isset($_POST['Recog_1'])?$conv->utf8_to_tis620($_POST['Recog_1']):'';
    $Recog_1D = isset($_POST['Recog_1D'])?$conv->utf8_to_tis620($_POST['Recog_1D']):'';
    $Recog_2 = isset($_POST['Recog_2'])?$conv->utf8_to_tis620($_POST['Recog_2']):'';
    $Recog_2D = isset($_POST['Recog_2D'])?$conv->utf8_to_tis620($_POST['Recog_2D']):'';
    $Recog_3 = isset($_POST['Recog_3'])?$conv->utf8_to_tis620($_POST['Recog_3']):'';
    $Recog_3D = isset($_POST['Recog_3D'])?$conv->utf8_to_tis620($_POST['Recog_3D']):'';
    $Recog_4 = isset($_POST['Recog_4'])?$conv->utf8_to_tis620($_POST['Recog_4']):'';
    $Recog_4D = isset($_POST['Recog_4D'])?$conv->utf8_to_tis620($_POST['Recog_4D']):'';
    $Recog_5 = isset($_POST['Recog_5'])?$conv->utf8_to_tis620($_POST['Recog_5']):'';
    $Recog_5D = isset($_POST['Recog_5D'])?$conv->utf8_to_tis620($_POST['Recog_5D']):'';
    $accept_chk = isset($_POST['accept_chk'])?$conv->utf8_to_tis620($_POST['accept_chk']):'';
    $accept = isset($_POST['accept'])?$conv->utf8_to_tis620($_POST['accept']):'';
    $memo_short = isset($_POST['memo_short'])?$conv->utf8_to_tis620($_POST['memo_short']):'';
    $memoS = isset($_POST['memoS'])?$conv->utf8_to_tis620($_POST['memoS']):'';
    $memo_long = isset($_POST['memo_long'])?$conv->utf8_to_tis620($_POST['memo_long']):'';
    $memoL = isset($_POST['memoL'])?$conv->utf8_to_tis620($_POST['memoL']):'';
    $user = $conv->utf8_to_tis620($_POST['user']);
    $redate = date('Y-m-d H:i:s');
    $vn = $conv->utf8_to_tis620($_POST['vn']);

    $sql = "SELECT ipd_fr_id FROM jvl_ipd_first_rec WHERE vn='".$vn."'";
        $connDB->imp_sql($sql);
        $chk_fr=$connDB->select_a();
        if($chk_fr){
            $sql2 = "SELECT count(ms.ipd_fr_id)count FROM jvl_mental_state ms inner join jvl_ipd_first_rec fr on fr.ipd_fr_id = ms.ipd_fr_id WHERE vn='".$vn."'";
        $connDB->imp_sql($sql2);
        $chk_mental=$connDB->select_a();
        if($chk_mental['count']==0){
    $data = array($chk_fr['ipd_fr_id'],$think_chk,$continuous,$continuous_detial,$think_1,$think_1D,$think_2,$think_2D,$think_3,$think_4
                ,$think_5,$think_6,$think_6D,$mood1,$mood2,$mood3,$mood4,$mood5,$other_mood,$action_1,$action_2,$action_3,$action_4,$action_4D,$action_5
                ,$action_6,$action_6D,$action_7,$action_8,$action_9,$action_10,$action_10D,$Recognition_chk,$Recog_1
                ,$Recog_1D,$Recog_2,$Recog_2D,$Recog_3,$Recog_3D,$Recog_4,$Recog_4D,$Recog_5,$Recog_5D,$accept_chk
                ,$accept,$memo_short,$memoS,$memo_long,$memoL,$redate,$user);
    $table = "jvl_mental_state";
    $mental_state = $connDB->insert($table, $data);
if($mental_state === false){
            $res = array("messege"=>'ประเมินสภาพจิต ไม่สำเร็จครับ!!!!',"check"=>'N');
        }else{
            $res = array("messege"=>'ประเมินสภาพจิต สำเร็จครับ!!!!',"check"=>'Y');
        }
    }else{
        $res = array("messege"=>'HN : '.$_POST['hn'].' บันทึกการประเมินสภาพจิตใจแล้วครับ!!!!',"check"=>'N');
    }
}else{
    $res = array("messege"=>'HN : '.$_POST['hn'].' ยังไม่ได้บันทึกแรกรับครับ!!!!',"check"=>'N');
}
print json_encode($res);
        $connDB->close_PDO();
}elseif ($method == 'edit_FR') {
    $ipd_fr_id = $_POST['ipd_fr_id'];
    $biographer = isset($_POST['biographer'])?$conv->utf8_to_tis620($_POST['biographer']):'';
    $relative = isset($_POST['relative'])?$conv->utf8_to_tis620($_POST['relative']):'';
    $patient_add = isset($_POST['patient_add'])?$conv->utf8_to_tis620($_POST['patient_add']):'';
    $tel0 = isset($_POST['tel0'])?$conv->utf8_to_tis620($_POST['tel0']):'';
    $tel1 = isset($_POST['tel1'])?$conv->utf8_to_tis620($_POST['tel1']):'';
    $relative1 = isset($_POST['relative1'])?$conv->utf8_to_tis620($_POST['relative1']):'';
    $tel2 = isset($_POST['tel2'])?$conv->utf8_to_tis620($_POST['tel2']):'';
    $relative2 = isset($_POST['relative2'])?$conv->utf8_to_tis620($_POST['relative2']):'';
    $fathername = isset($_POST['fathername'])?$conv->utf8_to_tis620($_POST['fathername']):'';
    $father_chk = $conv->utf8_to_tis620($_POST['father_chk']);
    $father_age = isset($_POST['father_age'])?$conv->utf8_to_tis620($_POST['father_age']):'';
    $father_occup = isset($_POST['father_occup'])?$conv->utf8_to_tis620($_POST['father_occup']):'';
    $mothername = isset($_POST['mothername'])?$conv->utf8_to_tis620($_POST['mothername']):'';
    $mother_chk = $conv->utf8_to_tis620($_POST['mother_chk']);
    $mother_age = isset($_POST['mother_age'])?$conv->utf8_to_tis620($_POST['mother_age']):'';
    $mother_occup = isset($_POST['mother_occup'])?$conv->utf8_to_tis620($_POST['mother_occup']):'';
    $marry_chk = $conv->utf8_to_tis620($_POST['marry_chk']);
    $spouse_name = isset($_POST['spouse_name'])?$conv->utf8_to_tis620($_POST['spouse_name']):'';
    $child = isset($_POST['child'])?$conv->utf8_to_tis620($_POST['child']):'';
    $earmark = isset($_POST['earmark'])?$conv->utf8_to_tis620($_POST['earmark']):'';
    $bw = isset($_POST['bw'])?$conv->utf8_to_tis620($_POST['bw']):'';
    $height = isset($_POST['height'])?$conv->utf8_to_tis620($_POST['height']):'';
    $bmi = isset($_POST['bmi'])?$conv->utf8_to_tis620($_POST['bmi']):'';
    $cc = isset($_POST['CC'])?$conv->utf8_to_tis620($_POST['CC']):'';
    $hpi = isset($_POST['HPI'])?$conv->utf8_to_tis620($_POST['HPI']):'';
    $pmh = isset($_POST['pmh'])?$conv->utf8_to_tis620($_POST['pmh']):'';
    //////////////// ER
    $weapon_chk = $conv->utf8_to_tis620($_POST['weapon_chk']);
    $weapon = isset($_POST['weapon'])?$conv->utf8_to_tis620($_POST['weapon']):'';
    $weaponer_chk = $conv->utf8_to_tis620($_POST['weaponer_chk']);
    $weaponer = isset($_POST['weaponer'])?$conv->utf8_to_tis620($_POST['weaponer']):'';
    $detain_chk = $conv->utf8_to_tis620($_POST['detain_chk']);
    $detain = isset($_POST['detain'])?$conv->utf8_to_tis620($_POST['detain']):'';
    $smi4_chk = $conv->utf8_to_tis620($_POST['smi4_chk']);
    $smi4_1 = isset($_POST['smi4_1'])?$conv->utf8_to_tis620($_POST['smi4_1']):'';
    $smi4_2 = isset($_POST['smi4_2'])?$conv->utf8_to_tis620($_POST['smi4_2']):'';
    $smi4_3 = isset($_POST['smi4_3'])?$conv->utf8_to_tis620($_POST['smi4_3']):'';
    $smi4_4 = isset($_POST['smi4_4'])?$conv->utf8_to_tis620($_POST['smi4_4']):'';
    $lawpsych_chk = $conv->utf8_to_tis620($_POST['lawpsych_chk']);
    $lawpsych = isset($_POST['lawpsych'])?$conv->utf8_to_tis620($_POST['lawpsych']):'';
    $sleep_chk = $conv->utf8_to_tis620($_POST['sleep_chk']);
    $sleep = isset($_POST['sleep'])?$conv->utf8_to_tis620($_POST['sleep']):'';
    $ic_chk = $conv->utf8_to_tis620($_POST['IC_chk']);
    $ic = isset($_POST['IC'])?$conv->utf8_to_tis620($_POST['IC']):'';
    $med_chk = $conv->utf8_to_tis620($_POST['med_chk']);
    $med = isset($_POST['med'])?$conv->utf8_to_tis620($_POST['med']):'';
    $accident_chk = isset($_POST['accident_chk'])?$conv->utf8_to_tis620($_POST['accident_chk']):'';
    $accident = isset($_POST['accident'])?$conv->utf8_to_tis620($_POST['accident']):'';
    $wound_chk = $conv->utf8_to_tis620($_POST['wound_chk']);
    $wound = isset($_POST['wound'])?$conv->utf8_to_tis620($_POST['wound']):'';
    $surgery_chk = $conv->utf8_to_tis620($_POST['surgery_chk']);
    $surgery = isset($_POST['surgery'])?$conv->utf8_to_tis620($_POST['surgery']):'';
    $complicate_chk = $conv->utf8_to_tis620($_POST['complicate_chk']);
    $complicate = isset($_POST['complicate'])?$conv->utf8_to_tis620($_POST['complicate']):'';
    $alcohol_chk = $conv->utf8_to_tis620($_POST['alcohol_chk']);
    $alcohol_type = isset($_POST['alcohol_type'])?$conv->utf8_to_tis620($_POST['alcohol_type']):'';
    $alcohol_vol = isset($_POST['alcohol_vol'])?$conv->utf8_to_tis620($_POST['alcohol_vol']):'';
    $alcohol_frequency = isset($_POST['alcohol_frequency'])?$conv->utf8_to_tis620($_POST['alcohol_frequency']):'';
    $drink_age = isset($_POST['drink_age'])?$conv->utf8_to_tis620($_POST['drink_age']):'';
    $last_useA = isset($_POST['last_useA'])?$conv->utf8_to_tis620($_POST['last_useA']):'';
    $time_stop = isset($_POST['time_stop'])?$conv->utf8_to_tis620($_POST['time_stop']):'';
    $drink_cause = isset($_POST['drink_cause'])?$conv->utf8_to_tis620($_POST['drink_cause']):'';
    $dope_chk = $conv->utf8_to_tis620($_POST['narcotic_chk']);

    $dope_type = isset($_POST['dope_type'][0])?$conv->utf8_to_tis620($_POST['dope_type'][0]):'';
    $narcotic_vol = isset($_POST['narcotic_vol'][0])?$conv->utf8_to_tis620($_POST['narcotic_vol'][0]):'';
    $narcotic_frequency = isset($_POST['narcotic_frequency'][0])?$conv->utf8_to_tis620($_POST['narcotic_frequency'][0]):'';
    $narcotic_age = isset($_POST['narcotic_age'][0])?$conv->utf8_to_tis620($_POST['narcotic_age'][0]):'';
    $last_useD = isset($_POST['last_useD'][0])?$conv->utf8_to_tis620($_POST['last_useD'][0]):'';
    $narcotic_stop = isset($_POST['narcotic_stop'][0])?$conv->utf8_to_tis620($_POST['narcotic_stop'][0]):'';
    $narcotic_cause = isset($_POST['narcotic_cause'][0])?$conv->utf8_to_tis620($_POST['narcotic_cause'][0]):'';
    
    $menses_chk = isset($_POST['menses_chk'])?$conv->utf8_to_tis620($_POST['menses_chk']):'';
    $menses = isset($_POST['menses'])?$conv->utf8_to_tis620($_POST['menses']):'';
    ////////////////// End ER
    $disease_chk = $conv->utf8_to_tis620($_POST['disease_chk']);
    $d0 = isset($_POST['D0'])?$conv->utf8_to_tis620($_POST['D0']):'';
    $d1 = isset($_POST['D1'])?$conv->utf8_to_tis620($_POST['D1']):'';
    $d2 = isset($_POST['D2'])?$conv->utf8_to_tis620($_POST['D2']):'';
    $d3 = isset($_POST['D3'])?$conv->utf8_to_tis620($_POST['D3']):'';
    $d4 = isset($_POST['D4'])?$conv->utf8_to_tis620($_POST['D4']):'';
    $d5 = isset($_POST['D5'])?$conv->utf8_to_tis620($_POST['D5']):'';
    $d6 = isset($_POST['D6'])?$conv->utf8_to_tis620($_POST['D6']):'';
    $d7 = isset($_POST['D7'])?$conv->utf8_to_tis620($_POST['D7']):'';
    $disease = isset($_POST['disease'])?$conv->utf8_to_tis620($_POST['disease']):'';
    $heal_chk = $conv->utf8_to_tis620($_POST['heal_chk']);
    $heal = isset($_POST['heal'])?$conv->utf8_to_tis620($_POST['heal']):'';
    $whip_chk = $conv->utf8_to_tis620($_POST['whip_chk']);
    $whip = isset($_POST['whip'])?$conv->utf8_to_tis620($_POST['whip']):'';
    $regular_med_chk = $conv->utf8_to_tis620($_POST['regular_med_chk']);
    $regular_med = isset($_POST['regular_med'])?$conv->utf8_to_tis620($_POST['regular_med']):'';
    $adr_chk = $conv->utf8_to_tis620($_POST['ADR_chk']);
    $adr = isset($_POST['ADR'])?$conv->utf8_to_tis620($_POST['ADR']):'';
    $beallergic_chk = $conv->utf8_to_tis620($_POST['beAllergic_chk']);
    $beallergic = isset($_POST['beAllergic'])?$conv->utf8_to_tis620($_POST['beAllergic']):'';
    $old_med_chk = $conv->utf8_to_tis620($_POST['old_med_chk']);
    $old_med = isset($_POST['old_med'])?$conv->utf8_to_tis620($_POST['old_med']):'';
    $heredity_chk = $conv->utf8_to_tis620($_POST['heredity_chk']);
    $heredity = isset($_POST['heredity'])?$conv->utf8_to_tis620($_POST['heredity']):'';
    $Hurt_yourself_chk = $conv->utf8_to_tis620($_POST['Hurt_yourself_chk']);
    $think = isset($_POST['think'])?$conv->utf8_to_tis620($_POST['think']):'';
    $plan = isset($_POST['plan'])?$conv->utf8_to_tis620($_POST['plan']):'';
    $plan_detial = isset($_POST['plan_detial'])?$conv->utf8_to_tis620($_POST['plan_detial']):'';
    $action = isset($_POST['action'])?$conv->utf8_to_tis620($_POST['action']):'';
    $action_detial = isset($_POST['action_detial'])?$conv->utf8_to_tis620($_POST['action_detial']):'';
    $lawsuit_chk = $conv->utf8_to_tis620($_POST['lawsuit_chk']);
    $lawsuit = isset($_POST['lawsuit'])?$conv->utf8_to_tis620($_POST['lawsuit']):'';
    $personality = isset($_POST['personality'])?$conv->utf8_to_tis620($_POST['personality']):'';
    $typep = $conv->utf8_to_tis620($_POST['typeP']);
    $refer = $conv->utf8_to_tis620($_POST['refer']);
    $admit_type = $conv->utf8_to_tis620($_POST['admit_type']);
    $income = isset($_POST['income'])?$conv->utf8_to_tis620($_POST['income']):'';
    $admittype = $conv->utf8_to_tis620($_POST['admittype']);
    $typep_1 = isset($_POST['typeP_1'])?$conv->utf8_to_tis620($_POST['typeP_1']):'';
    $typep_2 = isset($_POST['typeP_2'])?$conv->utf8_to_tis620($_POST['typeP_2']):'';
    $typep_3 = isset($_POST['typeP_3'])?$conv->utf8_to_tis620($_POST['typeP_3']):'';
    $typep_4 = isset($_POST['typeP_4'])?$conv->utf8_to_tis620($_POST['typeP_4']):'';
    $typep_5 = isset($_POST['typeP_5'])?$conv->utf8_to_tis620($_POST['typeP_5']):'';

    /////////////////////// condition ///////////////////////
    $shape = $conv->utf8_to_tis620($_POST['shape']);
    $skin_color = $conv->utf8_to_tis620($_POST['skin_color']);
    $scab_chk = $conv->utf8_to_tis620($_POST['scab_chk']);
    $scab_0 = isset($_POST['scab_0'])?$conv->utf8_to_tis620($_POST['scab_0']):'';
    $scab_1 = isset($_POST['scab_1'])?$conv->utf8_to_tis620($_POST['scab_1']):'';
    $scab_2 = isset($_POST['scab_2'])?$conv->utf8_to_tis620($_POST['scab_2']):'';
    $scab_3 = isset($_POST['scab_3'])?$conv->utf8_to_tis620($_POST['scab_3']):'';
    $scab_4 = isset($_POST['scab_4'])?$conv->utf8_to_tis620($_POST['scab_4']):'';
    $scab_5 = isset($_POST['scab_5'])?$conv->utf8_to_tis620($_POST['scab_5']):'';
    $scab_6 = isset($_POST['scab_6'])?$conv->utf8_to_tis620($_POST['scab_6']):'';
    $scab_7 = isset($_POST['scab_7'])?$conv->utf8_to_tis620($_POST['scab_7']):'';
    $scab_8 = isset($_POST['scab_8'])?$conv->utf8_to_tis620($_POST['scab_8']):'';
    $scab_9 = isset($_POST['scab_9'])?$conv->utf8_to_tis620($_POST['scab_9']):'';
    $detial_scab = isset($_POST['detial_scab'])?$conv->utf8_to_tis620($_POST['detial_scab']):'';
    $swelling_chk = $conv->utf8_to_tis620($_POST['swelling_chk']);
    $swelling = isset($_POST['swelling'])?$conv->utf8_to_tis620($_POST['swelling']):'';
    $movement = isset($_POST['movement'])?$conv->utf8_to_tis620($_POST['movement']):'';
    $disabled_chk= $conv->utf8_to_tis620($_POST['disabled_chk']);
    $disabled = isset($_POST['disabled'])?$conv->utf8_to_tis620($_POST['disabled']):'';
    /////////////////////// End condition ///////////////////////

    $hn = $conv->utf8_to_tis620($_POST['hn']);
    $vn = $conv->utf8_to_tis620($_POST['vn']);
    $an = $conv->utf8_to_tis620($_POST['an']);
    $user = isset($_POST['user'])?$conv->utf8_to_tis620($_POST['user']):'N';
    $redate = date('Y-m-d H:i:s');
    if($user =='N' or $user =='null' or $user =='undefined'){
        $res = array("messege"=>'ไม่สามารถบันทึกได้ กรุณาติดต่องานคอมพิวเตอร์ (68120) ครับ!!!!',"check"=>'N');
    } else{
       $data = array($hn,$vn,$an,$biographer,$relative,$patient_add,$tel0,$tel1,$relative1,$tel2,$relative2,$fathername,$father_chk,$father_age,$father_occup,$mothername,$mother_chk,$mother_age,$mother_occup
        ,$marry_chk,$spouse_name,$child,$earmark,$bw,$height,$bmi,$cc,$hpi,$pmh,$weapon_chk,$weapon,$weaponer_chk,$weaponer,$detain_chk,$detain,$smi4_chk,$smi4_1,$smi4_2,$smi4_3,$smi4_4
        ,$lawpsych_chk,$lawpsych,$sleep_chk,$sleep,$ic_chk,$ic,$med_chk,$med,$accident_chk,$accident,$wound_chk,$wound,$surgery_chk,$surgery,$complicate_chk,$complicate,$alcohol_chk
        ,$alcohol_type,$alcohol_vol,$alcohol_frequency,$drink_age,$last_useA,$time_stop,$drink_cause,$dope_chk,$dope_type,$narcotic_vol,$narcotic_frequency,$narcotic_age,$last_useD,$narcotic_stop,$narcotic_cause
        ,$menses_chk,$menses,$disease_chk,$d0,$d1,$d2,$d3,$d4,$d5,$d6,$d7,$disease,$heal_chk,$heal,$whip_chk,$whip,$regular_med_chk,$regular_med,$adr_chk,$adr
        ,$beallergic_chk,$beallergic,$old_med_chk,$old_med,$heredity_chk,$heredity,$Hurt_yourself_chk,$think,$plan,$plan_detial,$action,$action_detial,$lawsuit_chk,$lawsuit,$personality
        ,$typep,$refer,$admit_type,$income,$admittype,$typep_1,$typep_2,$typep_3,$typep_4,$typep_5,$redate,$user);
        $table = "jvl_ipd_first_rec";
        $first_rec = $connDB->insert($table, $data);



        $dope_type_chk=$_POST['dope_type'];
        
foreach ($dope_type_chk as $key => $value) {
     $dope_typeArr[$key] = $conv->utf8_to_tis620($_POST['dope_type'][$key]);
    $narcotic_volArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_vol'][$key]);
    $narcotic_frequencyArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_frequency'][$key]);
    $narcotic_ageArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_age'][$key]);
    $last_useDArr[$key]=$conv->utf8_to_tis620($_POST['last_useD'][$key]);
    $narcotic_stopArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_stop'][$key]);
    $narcotic_causeArr[$key]=$conv->utf8_to_tis620($_POST['narcotic_cause'][$key]);

    $dope_typearr = $dope_typeArr[$key];
    $narcotic_volarr = $narcotic_volArr[$key];
    $narcotic_frequencyarr = $narcotic_frequencyArr[$key];
    $narcotic_agearr = $narcotic_ageArr[$key];
    $last_useDarr = $last_useDArr[$key];
    $narcotic_stoparr = $narcotic_stopArr[$key];
    $narcotic_causearr = $narcotic_causeArr[$key];
    
   
    $data3 = array($first_rec,$dope_typearr,$narcotic_volarr,$narcotic_frequencyarr,$narcotic_agearr,$last_useDarr,$narcotic_stoparr,$narcotic_causearr);
    $table3 = "jvl_narcotic";
    $connDB->insert($table3, $data3);
}
        $table = "jvl_narcotic";
        $where="ipd_fr_id=:ipd_fr_id";
        $execute=array(':ipd_fr_id' => $ipd_fr_id);
        $data = array(1);
        $field1=array("narcotic_chk");
        $edit_nar=$connDB->update($table, $data, $where, $field1, $execute);  
    if($first_rec){

        $table1 = "jvl_ipd_first_rec";
        //$where="ipd_fr_id=:ipd_fr_id";
        //$execute=array(':ipd_fr_id' => $ipd_fr_id);
        //$data = array(1);
        $field2=array("chk_update");
        $edit_FR=$connDB->update($table1, $data, $where, $field2, $execute);    
         

        $data2 = array($first_rec,$shape,$skin_color,$scab_chk,$scab_0,$scab_1,$scab_2,$scab_3,$scab_4,$scab_5,$scab_6,$scab_7,$scab_8,$scab_9,$detial_scab,$swelling_chk,$swelling,$movement,$disabled_chk,$disabled);
        $table2 = "jvl_condition";
        $field2=array("ipd_fr_id","shape","skin_color","scab_chk","scab_0","scab_1","scab_2","scab_3","scab_4","scab_5","scab_6","scab_7","scab_8","scab_9","detial_scab","swelling_chk","swelling","movement","disabled_chk","disabled");
        $condition = $connDB->insert($table2, $data2,$field2);

        //$table = "jvl_condition";
       // $where="ipd_fr_id=:ipd_fr_id";
        //$execute=array(':ipd_fr_id' => $ipd_fr_id);
        //$data = array(1);
        $field3=array("chk_update");
        $edit_con=$connDB->update($table2, $data, $where, $field3, $execute);  
        if($condition){
          $res = array("messege"=>'บันทึกข้อมูลประเมินทางกายสำเร็จครับ!!!!',"check"=>'Y');
        }else{
          $res = array("messege"=>'บันทึกข้อมูลประเมินทางกายไม่สำเร็จครับ!!!!',"check"=>'N');
      }
    }else{
        $res = array("messege"=>'บันทึกข้อมูลไม่สำเร็จครับ!!!!',"check"=>'N');
    }
// }else{
//     $res = array("messege"=>'AN : '.$an.' บันทึกข้อมูลแล้วครับ!!!!',"check"=>'N');
// }


}
    print json_encode($res);
    $connDB->close_PDO();

}