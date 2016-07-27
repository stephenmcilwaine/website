(function($) {
    $(document).ready(function() {
        if($(window).scrollTop() > 30) {
            $('.site-header.navbar-fixed-top').addClass('scroll-active');
        }

        $(window).on('scroll', function() {
            if($(window).scrollTop() > 30) {
                $('.site-header.navbar-fixed-top').addClass('scroll-active');
            } else {
                $('.site-header.navbar-fixed-top').removeClass('scroll-active');
            }
        });

        $(document).on('click', '.text-highlighted', function() {
            var data_text = $(this).attr('data-text');
            $('.text-highlighted').removeClass('text-selected');
            $(this).addClass('text-selected');

            $('.show-highlighted-text').html(data_text);
        });
    })
})(jQuery);