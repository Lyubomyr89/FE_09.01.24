$(document).ready(function () {
    let lastScrollTop = 0;
    const header = $('.header');
    const body = $('body');

    $(window).scroll(function () {
        if (!header[0]) {
            return;
        }

        const headerHeight = header.outerHeight(true);
        const currentScroll = $(this).scrollTop();

        if (currentScroll > 1) {
            header.addClass('header-fixed');
            body.css({ paddingTop: headerHeight + 'px' });

        } else {
            header.removeClass('header-fixed');
            body.css({ paddingTop: 0 });
        }

        if (currentScroll > headerHeight) {
            header.addClass('transform-top-header');

        } else {
            header.removeClass('transform-top-header');
        }

        if (currentScroll < lastScrollTop && currentScroll > headerHeight) {
            header.addClass('show');
        } else {
            header.removeClass('show');
        }

        lastScrollTop = currentScroll;
    });
})