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
        });

        var pricing = {
            1: {
                turnover: '500,000',
                price: '285',
                ecommerce: '2',
                transaction: '85'
            },
            2: {
                turnover: '1,000,000',
                price: '570',
                ecommerce: '3',
                transaction: '170'
            },
            3: {
                turnover: '2,000,000',
                price: '855',
                ecommerce: '4',
                transaction: '340'
            },
            4: {
                turnover: '3,000,000',
                price: '1140',
                ecommerce: '5',
                transaction: '510'
            },
        };

        $('#pricing-in-slider').slider({
            formatter: function(value) {
                var data = pricing[value];
                var turnover = data.turnover;
                var price = data.price;
                var ecommerce = data.ecommerce;
                var transaction = data.transaction;

                var price_wrapper = $('.pricing-calculation');
                price_wrapper.find('.price-text>span').text(price);
                price_wrapper.find('.ecommerce-text').text(ecommerce);
                price_wrapper.find('.transaction-text').text(transaction);

                return '$' + turnover;
            }
        });
    })
})(jQuery);