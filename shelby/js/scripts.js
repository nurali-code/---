
$('.btn-menu').on('click', () => { $('header .nav, body, .btn-menu').toggleClass('active') })

/*---------------------------------------------------end*/

$('.nav-drop').click(function (e) {
    $(this).children('.nav-drop-content').slideToggle();
    $(this).children('.nav-drop-btn').toggleClass('active');
});

/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

/*---------------------------------------------------end*/

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
        $('body').addClass('active')
    }

    function hideModals() {
        $('.modal').fadeOut();
        $('body').removeClass('active')
    };

    $('.open-modal').on('click', function (e) {
        e.preventDefault()
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.open-modal').length) ||
            ($(e.target).parents('.nav').length) ||
            ($(e.target).parents('.btn-menu').length) ||
            ($(e.target).hasClass('nav')) ||
            ($(e.target).hasClass('btn-menu')) ||
            ($(e.target).hasClass('.modal-content')) ||
            ($(e.target).hasClass('open-modal'))
        )) {
            hideModals();
            $('header .nav, body, .btn-menu').removeClass('active')

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


$('input[type=tel]').inputmask({ "mask": "+7 (999)-999-99-99" });

$("form").submit(function () {
    $('form .btn').attr('disabled', 'disabled');
    $.ajax({
        type: "POST",
        method: 'POST',
        url: "../telegram.php",
        data: $(this).serialize()
    }).done(function () {
        $('form').trigger('reset');
        alert('sended')
        // setTimeout(function () {
        //     $('.modal').fadeOut();
        // }, 2000);
    });
    return false;
});


/*---------------------------------------------------end*/

// async function getCurrencies() {
//     const RESPONSE = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
//     const DATA = await RESPONSE.json();
//     const RESULT = await DATA;
//     console.log(RESULT);
//     console.log(
//         RESULT.Valute.JPY.Value
//     );
// }
// getCurrencies();

$('#calculate').click(function (e) {
    e.preventDefault();
    $('.modal-resulte').slideDown()
});


/*---------------------------------------------------end*/

