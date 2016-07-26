(function($) {
    $(document).ready(function() {
        if($(window).scrollTop() > 30) {
            $('.site-header.navbar-fixed-top').addClass('scroll-active');
        }

        console.log('on scroll');

        $(window).on('scroll', function() {
            if($(window).scrollTop() > 30) {
                $('.site-header.navbar-fixed-top').addClass('scroll-active');
            } else {
                $('.site-header.navbar-fixed-top').removeClass('scroll-active');
            }
        });
    })
})(jQuery);