$(() => {
    $('.scroll').click(e => {
        e.preventDefault();

        let id = e.target.href.substring(e.target.href.indexOf('#'));
        let targetOffset = 0;
        let menuHeight = 0;

        if (window.innerWidth <= 767.98) {
            $('#main-nav').collapse('hide');

            targetOffset = $(id).offset().top;
            menuHeight = $('#menu').innerHeight();

            $('html, body').animate({
                scrollTop: targetOffset - 89
            }, 500);
        } else {
            targetOffset = $(id).offset().top;
            menuHeight = $('#menu').innerHeight();

            $('html, body').animate({
                scrollTop: targetOffset - menuHeight
            }, 500);
        }
    });
});