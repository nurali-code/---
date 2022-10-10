$(document).ready(function () {
    $('.close').click(function () {
        $('.menuson').removeClass('shows');
        return false;
    });

    $('.menusd').click(function () {
        $('.menuson').toggleClass('shows');
        return false;
    });



})
/* End */