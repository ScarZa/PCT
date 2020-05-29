var AssGaugeIPD = function(content){
    this.content = content;
    this.GetGIPD= function (){
        $(this.content).empty().append($("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การประเมินสภาพร่างกายเบื้องต้น  </b></label></div>")
        ,$("<div class='col-lg-12'>"
            +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-right' for='shape'>รูปร่าง</label>"
            +"<div class='col-sm-10 row'><input class='input-sm  col-lg-12' type='text' id='shape' name='shape' placeholder='ลักษณะรูปร่าง' /></div> "
            +"</div>"
            +"<div class='form-group col-lg-6 row'><label class='col-sm-1 control-label no-padding-left' for='skin_color'> สีผิว</label>"
            +"<div class='col-sm-11 row'><input class='input-sm col-lg-12' type='text' id='skin_color' name='skin_color' placeholder='สีผิว'/></div> "
            +"</div>"
            +"</div>")
            ,$("<div class='col-lg-12'>"
            +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-right' for='scab'>โรคผิวหนัง</label>"
            +"<div class='col-sm-10 row'><input class='input-sm  col-lg-12' type='text' id='scab' name='scab' placeholder='ลักษณะโรคผิวหนัง' /></div> "
            +"</div>"
            +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-left' for='swelling'> อาการบวม</label>"
            +"<div class='col-sm-10 row'><input class='input-sm col-lg-12' type='text' id='swelling' name='swelling' placeholder='อาการบวม'/></div> "
            +"</div>"
            +"</div>")
            ,$("<div class='col-lg-12'>"
            +"<div class='form-group col-lg-6 row'><label class='col-sm-3 control-label no-padding-right' for='movement'>การเคลื่อนไหว</label>"
            +"<div class='col-sm-9 row'><input class='input-sm  col-lg-12' type='text' id='movement' name='movement' placeholder='ลักษณะการเคลื่อนไหว' /></div> "
            +"</div>"
            +"<div class='form-group col-lg-6 row'><label class='col-sm-2 control-label no-padding-left' for='disabled'> ความพิการ</label>"
            +"<div class='col-sm-10 row'><input class='input-sm col-lg-12' type='text' id='disabled' name='disabled' placeholder='ลักษณะความพิการ'/></div> "
            +"</div>"
            +"</div>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การประเมินสภาพจิต  </b></label></div>")
        ,$("<div class='form-group row'><label class='col-sm-2 col-form-label'><b>อารมณ์ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='1'><span class='lbl'> แจ่มใส</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='2'><span class='lbl'> หงุดหงิด</span></label></div>"
        +"<div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='3'><span class='lbl'> ซึมเศร้า</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='4'><span class='lbl'> เฉยเมย/ไร้อารมณ์</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='mood_chk' value='5'><span class='lbl'> อื่นๆ</span></label></div></div>")
        ,$("<textarea name='other_mood' id='other_mood' class='form-control' placeholder='รายละเอียด'></textarea><p>")
        ,$("<div class='form-group row'><label class='col-sm-2 col-form-label'><b>พฤติกรรม </b></label><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_1' value='1'><span class='lbl'> ก้าวร้าว</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_2' value='2'><span class='lbl'> ทำลายสิ่งของเครื่องใช้</span></label></div></div>")
        ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_3' value='3'><span class='lbl'> หวาดระแวง</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_4' value='4'><span class='lbl'> ทำร้ายตัวเอง</span></label></div></div>")
        ,$("<textarea name='action_4D' id='action_4D' class='form-control' placeholder='ระบุวิธีการ'></textarea><p>")
        ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_5' value='5'><span class='lbl'> พูดมาก</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_6' value='6'><span class='lbl'> ทำร้ายผู้อื่น</span></label></div></div>")
        ,$("<textarea name='action_6D' id='action_6D' class='form-control' placeholder='ระบุวิธีการ'></textarea><p>")
        ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_7' value='7'><span class='lbl'> พูดคนเดียว</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_8' value='8'><span class='lbl'> หัวเราะคนเดียว</span></label></div></div>")
        ,$("<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_9' value='9'><span class='lbl'> ร้องไห้ไม่สมเหตุผล</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='action_10' value='10'><span class='lbl'> อื่นๆ</span></label></div></div>")
        ,$("<textarea name='action_10D' id='action_10D' class='form-control' placeholder='ระบุวิธีการ'></textarea><p>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ความคิด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='think_chk' value='Y' checked><span class='lbl'> สมเหตุสมผล</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='think_chk' value='N'><span class='lbl'> ไม่สมเหตุสมผล</span></label></div></div>")
        ,$("<div id='think_group' class='row'><div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_1' value='1'><span class='lbl'> หลงผิด</span></label></div></div>"
            +"<textarea name='think_1D' id='think_1D' class='form-control' placeholder='ระบุลักษณะการหลงผิด'></textarea><p>"
            +"<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_2' value='2'><span class='lbl'> หวาดระแวง</span></label></div></div>"
            +"<textarea name='think_2D' id='think_2D' class='form-control' placeholder='ระบุอาการหวาดระแวง'></textarea><p>"
            +"<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_3' value='3'><span class='lbl'> หยุดชะงัก</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_4' value='4'><span class='lbl'> วกวน</span></label></div></div>"
            +"<div class='form-group row'><div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_5' value='5'><span class='lbl'> หลากหลาย/ฟุ้งซาน</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='think_6' value='6'><span class='lbl'> อื่นๆ</span></label></div></div>"
            +"<textarea name='action_10D' id='think_6D' class='form-control' placeholder='ระบุวิธีการ'></textarea></div><p>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การรับรู้ (perception) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Recognition_chk' value='N'checked required><span class='lbl'> ตรงสภาพที่เป็นจริง</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Recognition_chk' value='Y' required><span class='lbl'> ประสาทหลอน</span></label></div></div>")
        ,$("<textarea name='Recognition' id='Recognition' class='form-control' placeholder='ระบุรายละเอียด'></textarea><p>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>การตระหนักรู้ (insigth) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='accept_chk' value='N'checked required><span class='lbl'> ยอมรับการเจ็บป่วย</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='accept_chk' value='Y' required><span class='lbl'> ไม่ยอมรับการเจ็บป่วย</span></label></div></div>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ความจำ  </b></label></div>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ระยะสั้น  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_short' value='N'checked required><span class='lbl'> ปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_short' value='Y' required><span class='lbl'> ไม่ปกติ</span></label></div></div>")
        ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'><b>ระยะยาว  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_long' value='N'checked required><span class='lbl'> ปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='memo_long' value='Y' required><span class='lbl'> ไม่ปกติ</span></label></div></div>"));
    }
}
