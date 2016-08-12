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

        $(document).on('click', '.pricing-container .row-item.row-details .col-price .col-desc:not(.has-no-plan)', function() {
            var _parents = $(this).parents('.row-item.row-details');
            _parents.addClass('row-active');
            _parents.find('.plan-details').slideToggle();
            _parents.find('.app-icon').toggleClass('icon-arrow-top icon-arrow-bottom');

        })
    })
})(jQuery);