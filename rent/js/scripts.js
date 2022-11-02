
$('.btn-menu').on('click', () => {
    $('header .nav, body, .btn-menu').toggleClass('active')
})

/*---------------------------------------------------end*/

$('input[name="dates"]').daterangepicker({
    // singleDatePicker: true,

});


/*---------------------------------------------------end*/
$(".avtocomplite").autocomplete({
    source: cities
});

/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})

/*---------------------------------------------------end*/

$('.drd-btn').on('click', function () {
    $(this).toggleClass('active')
    $(this).next('.drd-cont').slideToggle(200)
});

$(document).on('click', function (e) {
    if (!(
        ($(e.target).parents('.drd-btn').length) ||
        ($(e.target).parents('.drd-cont').length) ||
        ($(e.target).hasClass('drd-btn')) ||
        ($(e.target).hasClass('drd-cont'))
    )) {
        $('.drd-btn').removeClass('active')
        $('.drd-cont').slideUp(200)
    }
});

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
            ($(e.target).hasClass('modal-content')) ||
            ($(e.target).hasClass('open-modal'))
        )) {
            hideModals();
            $('header .nav, body, .btn-menu').removeClass('active')

        }
    });
});
/*---------------------------------------------------end*/

