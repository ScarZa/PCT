function photoPIModal(divModal = '#createModal') {
    $(divModal).empty().append("<div class='modal' id='photoPIModal' role='dialog' aria-labelledby='exampleModalLabel'>"
            + "<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
            + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
            + "<h4 class='modal-title' id='photoPIModalLabel'>บันทึกรูปผู้ป่วย IPD </h4></div><div class='modal-body' id='modelphotoPD'></div> "
            + "<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#photoPIModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever')
        var modal = $(this)

        $.getJSON('../back/API/detail_picsAPI.php', {data: recipient}, function (data) {
            // if(data.photo_pd == '' || data.photo_pd === null){
            //     $('#PDimage').empty().attr('src', 'images/icon_set2/image.ico');
            // }else{
            //     $('#PDimage').empty().attr('src', 'PD_imgs/'+data.photo_pd);
            // }
            modal.find('.modal-title').text('AN : ' + data.an+'  HN : '+data.hn+' ( '+data.fullname+' )')
            $('div#modelphotoPD').append("<form name='uploadimage' id='uploadimage' method='post' enctype='multipart/form-data'></form>");
            $('#uploadimage').empty().append($("<div class='main'><b>เพิ่มรูปผู้ป่วย</b>")
                    , $("<div id='image_preview'><img id='previewing' src='images/icon_set2/image.ico' width='50' /></div>")
                    , $("<div id='selectImage'><label>เลือกรูปผู้ป่วย</label><br/>")
                    , $("<input type='file' name='file' id='file' class='form-control' required /></div></div><h4 id='loading' >loading..</h4><div id='message'></div>")
                    , $("<input type='hidden' id='ipd_fr_id' name='ipd_fr_id'>")
                    , $("<input type='hidden' id='method' name='method'>")
                    , $("<input type='hidden' cid='hn' name='hn'>")
                    , $("<input type='hidden' id='an' name='an'>")
                    , $("<input type='hidden' id='user' name='user'>")
                    , $("<br><input type='submit' value='เพิ่มรูป' class='btn btn-success' />"));

            modal.find('input#ipd_fr_id').val(recipient)
            modal.find('input#method').val('uploaad_image')
            modal.find('input#hn').val(data.hn)
            modal.find('input#an').val(data.an)
            modal.find('input#user').val($.cookie("user"))
            $('#loading').hide();
            $("#uploadimage").on('submit', (function (e) {
                e.preventDefault();
                $("#message").empty();
                $('#loading').show();
                $.ajax({
                    url: "../back/API/prcupimg.php",
                    type: "POST",
                    data: new FormData(this),
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function (data)
                    {
                        $('#loading').hide();
                        //$("#message").html(data);
                        alert(data);
                        e.preventDefault();
                        modal.modal('hide');
                    }
                });
            }));

// Function to preview image after validation
            $(function () {
                $("#file").change(function () {
                    $("#message").empty(); // To remove the previous error message
                    var file = this.files[0];
                    var imagefile = file.type;
                    var match = ["image/jpeg", "image/png", "image/jpg","image/JPEG", "image/PNG", "image/JPG"];
                    if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2] || imagefile == match[3]) || (imagefile == match[4]) || (imagefile == match[5])))
                    {
                        $('#previewing').attr('src', 'noimage.png');
                        $("#message").html("<p id='error'><h5 style='color:red'>โปรดเลือกไฟล์ชนิดรูปภาพ</h5></p>" + "<h4>Note</h4>" + "<span id='error_message' style='color:red'>เฉพาะภาพชนิด jpeg, jpg และ png เท่านั้น</span>");
                        $("#file").css("color", "red");
                        return false;
                    } else
                    {
                        var reader = new FileReader();
                        reader.onload = imageIsLoaded;
                        reader.readAsDataURL(this.files[0]);
                    }
                });
            });
            function imageIsLoaded(e) {
                $("#file").css("color", "green");
                $('#image_preview').css("display", "block");
                $('#previewing').attr('src', e.target.result);
                $('#previewing').attr('width', '100px');
                //$('#previewing').attr('height', '230px');
            }
            ;

        });
    });
}