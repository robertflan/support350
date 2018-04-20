$(function() {
    var has_error;
    $('#get-quote-form input,#get-quote-form textarea, #get-quote-form select').each(function() {
        $(this).on('focus', function() {
            $(this).removeClass('error');
            $(this).next('.error-msg').html('');
        });
    });

    $('#get-quote-form').on('submit', function() {
        has_error = 0;
        $(this).find('.nm_err').html('');
        $(this).find('.uname').removeClass('error');
        var name = $.trim($('.uname').val());
        if (!name) {
            has_error++;
            $(this).find('.nm_err').html('Please enter name');
            $(this).find('.uname').addClass('error');
        } else {
            var pat = /^[A-Za-z\s]+$/;
            var result = pat.test(name);
            if (!result) {
                has_error++;
                $(this).find('.nm_err').html('Please enter only letters');
                $(this).find('.uname').addClass('error');
            }

        }

        $(this).find('.ph_err').html('');
        $(this).find('.phone').removeClass('error');
        var phone = $.trim($(this).find('.phone').val());
        if (!phone) {
            has_error++;
            $(this).find('.ph_err').html('Please enter phone');
            $(this).find('.phone').addClass('error');
        } else {
            var pat = /^[0-9]{1,}$/;
            var result = pat.test(phone);
            if (!result) {
                has_error++;
                $(this).find('.ph_err').html('Please enter only letters');
                $(this).find('.phone').addClass('error');
            }

        }



        $(this).find('.em_err').html('');
        $(this).find('.email').removeClass('error');
        var email = $.trim($(this).find('.email').val());
        if (!email) {
            has_error++;
            $(this).find('.em_err').html('Please enter email');
            $(this).find('.email').addClass('error');
        } else {
            // var pat = /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            var pat = /(\s?)+\w+(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*(\s?)+/;
            var result = pat.test(email);
            if (!result) {
                has_error++;
                $(this).find('.em_err').html('Please enter a valid email');
                $(this).find('.email').addClass('error');
            }
        }

        $(this).find('.hr_err').html('');
        $(this).find('.way_of_hear').removeClass('error');
        var way_of_hear = $.trim($(this).find('.way_of_hear').val());
        if (!way_of_hear) {
            has_error++;
            $(this).find('.hr_err').html('Please select an option');
            $(this).find('.way_of_hear').addClass('error');
        }

        $(this).find('.bgt_err').html('');
        $(this).find('.budget').removeClass('error');
        var way_of_hear = $.trim($(this).find('.budget').val());
        if (!way_of_hear) {
            has_error++;
            $(this).find('.bgt_err').html('Please select an option');
            $(this).find('.budget').addClass('error');
        }


        $('.msg_err').html('');
        $('.msg').removeClass('error');
        var msg = $.trim($(this).find('.msg').val());

        if (msg == '') {
            has_error++;
            $('.msg_err').html('Please enter some text');
            $(this).find('.msg').addClass('error');
        }
      
        if (has_error > 0) {
            //$("html, body").animate({scrollTop: conatct_section_top}, "slow");
            return false;
        } else {
           
            $.ajax({
                url: "https://www.ehorizon.ae/form_submit.php",
                type: "POST",
                data: $('#get-quote-form').serialize(),
                async: false,
                success: function(res) {
                    //alert(res);
                    if (res == 1) {
                        //alert(res);
                        $('#get-quote-form')[0].reset();
                        $('.success-msg').css('display', 'block');
                       
                    }
//                        setTimeout(function() {
//                            $('.lightbox form.email_share_form').find('.sucss_txt').html('');
//                        }, 5000);
                    //$('#contact-from')[0].reset();
                }
            });
            return false;
        }
    });
});