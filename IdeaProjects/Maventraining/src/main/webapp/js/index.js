$("#searchh").on("keyup paste", function() {
    var value = $(this).val();
    var $rows = $("table tr");

    if (value === '') {
        $rows.show(500);
        return false;
    }

    $rows.each(function(index) {
        if (index !== 0) {

            $row = $(this);

            var column1 = $row.find("td:nth-child(2)").html();
            var column2 = $row.find("td:nth-child(3)").html();
            var column3 = $row.find("td:nth-child(4)").html();
            var column4 = $row.find("td:nth-child(5)").html();
            if (column1.indexOf(value) > -1 || column2.indexOf(value) > -1 || column3.indexOf(value) > -1 || column4.indexOf(value) > -1) {
                $row.show(500);
            } else {
                $row.hide(500);
            }
        }
    });
});


$("#searchhh").on("keyup paste", function() {
    var value = $(this).val();
    var $rows = $("table tr");

    if (value === '') {
        $rows.show(500);
        return false;
    }

    $rows.each(function(index) {
        if (index !== 0) {

            $row = $(this);

            var column1 = $row.find("td:nth-child(2)").html();
            var column2 = $row.find("td:nth-child(3)").html();
            var column3 = $row.find("td:nth-child(4)").html();
            var column4 = $row.find("td:nth-child(5)").html();
            if (column1.indexOf(value) > -1 || column2.indexOf(value) > -1 || column3.indexOf(value) > -1 || column4.indexOf(value) > -1) {
                $row.show(500);
            } else {
                $row.hide(500);
            }
        }
    });
});


$("#order_book").click(function() {
    $("#order_Book").css("display", "block");
    $("#Orders").css("display", "none");
    $("#Total_Orders").css("display", "none");
    $("#Available_Books").css("display", "none")
    $("#homee").css("display", "none");


});


$("#orders").click(function() {
    $("#Orders").css("display", "block");
    $("#order_Book").css("display", "none");
    $("#Total_Orders").css("display", "none");
    $("#Available_Books").css("display", "none");
    $("#homee").css("display", "none");


});

$("#home").click(function() {
    $("#homee").css("display", "block");

    $("#Orders").css("display", "none");
    $("#order_Book").css("display", "none");
    $("#Total_Orders").css("display", "none");
    $("#Available_Books").css("display", "none")

});

$("#total_orders").click(function() {

    $("#Total_Orders").css("display", "block")
    $("#Orders").css("display", "none");
    $("#order_Book").css("display", "none");
    $("#Available_Books").css("display", "none")
    $("#homee").css("display", "none");


});
$("#availble_books").click(function() {

    $("#Total_Orders").css("display", "none")
    $("#Orders").css("display", "none");
    $("#order_Book").css("display", "none");
    $("#Available_Books").css("display", "block")
    $("#homee").css("display", "none");

});

$('select').on('change', function() {
    if (this.value == 'author') {
        $("#author").css("display", "block");
        $("#book").css("display", "none");
        $('#book').val('');
        $("#disable1").removeAttr("disabled");
        $("#disable").css("display", "none");
        $("#disable1").css("display", "block");


    } else if (this.value == 'book') {
        $("#author").css("display", "none");
        $("#book").css("display", "block");
        $('#author').val('')
        $("#disable").removeAttr("disabled");
        $("#disable1").css("display", "none");
        $("#disable").css("display", "block");


    } else {
        $("#author").css("display", "none");
        $("#book").css("display", "none");

    }
});




$(function() {

    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        unhighlight: function(element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-error');
        },
        errorPlacement: function(error, element) {
            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    $("#register-form").validate({
        rules: {
            a_name: {
                required: true,
                a_name: true,
                lettersonly: true
            },
            b_name: {
                required: true,
                b_name: true,
                lettersonly: true
            }
        },
        messages: {
            a_name: {
                required: 'Author name cannot be blank.',
                a_name: 'Please enter a Author name'

            },
            b_name: {
                required: 'Book name cannot be blank.',
                b_name: 'Please enter a Book name'

            }
        }
    });


    $("#register-form1").validate({
        rules: {
            y_name: {
                required: true,
                y_name: true,
                lettersonly: true
            },
            quantity: {
                required: true,
                quantity: true,
                lettersonly: true
            },
            s_book: {
                required: true,
                s_book: true,
            }
        },
        messages: {
            y_name: {
                required: 'Your name cannot be blank.',

            },
            quantity: {
                required: 'Quantity cannot be blank.',

            },
            s_book: {
                required: 'Select Book cannot be blank.',

            }
        }
    });
});