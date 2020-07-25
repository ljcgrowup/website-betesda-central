$(() => {
    $('.scroll').click(e => {
        e.preventDefault();

        let id = e.target.href.substring(e.target.href.indexOf('#')),
        targetOffset = $(id).offset().top,
        menuHeight = $('#menu').innerHeight();

        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    });
});