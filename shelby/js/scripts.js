
$('.btn-menu').on('click', function () {
    $('header .nav, .btn-menu').toggleClass('active')
    $('body').toggleClass('unscroll')
})
/*---------------------------------------------------end*/

$('.nav-drop').click(function (e) {
    $(this).children('.nav-drop-content').slideToggle();
    $(this).children('.nav-drop-btn').toggleClass('active');
});

/*---------------------------------------------------end*/


$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
    }

    function hideModals() {
        $('.modal iframe').remove();
        $('.modal').fadeOut();

    };

    $('.open-modal').on('click', function (e) {
        let modId = $(this).attr("data-modal");
        if ($(this).hasClass('vid')) { $(this).children('iframe').clone().appendTo('#modal-video .modal-content'); }
        showModal('#' + modId);
    });


    $('.modal-close').on('click', function () {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.open-modal').length) ||
            ($(e.target).parents('.modal-content')) ||
            ($(e.target).hasClass('open-modal')) ||
            ($(e.target).hasClass('modal-open'))
        )) {
            hideModals();
        }
    });
});
/*---------------------------------------------------end*/

$('.faq-wrap').click(function (e) {
    e.preventDefault();
    $(this).children('.faq-content').slideToggle();
    $(this).children('.faq-heading').toggleClass('active');
});


/*---------------------------------------------------end*/


$('.tab-btn').click(function (e) {
    e.preventDefault();
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    let tabAttr = $(this).attr('data-tab-btn');
    $('.tab-content').removeClass('active');
    $('.tab-content.tab-' + tabAttr).addClass('active')
});
/*---------------------------------------------------end*/


$('input[type=tel]').inputmask({"mask": "+7 (999)-999-99-99"});

$("form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    $.ajax({
        type: "POST",
        method: 'POST',
        url: "../send.php",
        data: $(this).serialize()
    }).done(function () {
        $('form').trigger('reset');
        window.location.href = "thanks.html";
        // setTimeout(function () {
        //     $('.modal').fadeOut();
        // }, 2000);
    });
    return false;
});


/*---------------------------------------------------end*/