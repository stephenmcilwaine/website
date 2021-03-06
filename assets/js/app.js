(function($) {
    $(document).ready(function() {

        var _sidebar = $('#markdown-toc-menu');
        var _sidebar_item = _sidebar.attr('data-item');
        if(_sidebar_item !== '' && _sidebar_item !== undefined) {
            _sidebar.removeClass('hidden-xs-up');
            var _cloened = $('#' + _sidebar_item).clone();
            _cloened.find('li').addClass('nav-item');
            _cloened.find('li>a').addClass('nav-link');
            _sidebar.find('.navbar ul.nav').html(_cloened.html());
            $('#' + _sidebar_item).remove();
            var _header_height = $('header.site-header').height();
            $('.page-content').css('margin-top', _header_height + 'px');
        }

        var _scrollTop = $(window).scrollTop();
        var _content_height = $('.page-content').height();

        if(_scrollTop > 30) {
            $('.site-header.navbar-fixed-top').addClass('scroll-active');
        }

        if(_scrollTop < (_content_height - (_sidebar.height() + 30))) {
            if(_scrollTop > 30) {
                $('#sidebar').css('top', parseInt(_scrollTop - 30) + 'px');
            } else {
                $('#sidebar').css('top', '0px');
            }
        }

        $(window).on('scroll', function() {
            _scrollTop = $(window).scrollTop();
            _content_height = $('.page-content').height();

            if(_scrollTop > 30) {
                $('.site-header.navbar-fixed-top').addClass('scroll-active');
            } else {
                $('.site-header.navbar-fixed-top').removeClass('scroll-active');
            }

            if(_scrollTop < (_content_height - (_sidebar.height() + 30))) {
                if(_scrollTop > 30) {
                    $('#sidebar').css('top', parseInt(_scrollTop - 30) + 'px');
                } else {
                    $('#sidebar').css('top', '0px');
                }
            }
        });

        _sidebar.find('.navbar ul.nav li a').on('click', function(e) {
            e.preventDefault();
            _sidebar.find('.navbar ul.nav li').removeClass('toc-active');
            $(this).parent().addClass('toc-active');

            var _id = $(this).attr('href');
            window.location.hash = _id;
            $('body, html').animate({
                scrollTop: parseInt($(_id).offset().top - 110)
            }, '500');
        })

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
            _parents.find('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
        });

        $(document).on('click', '.data-toggle', function() {
            if(!$(this).find('>div').hasClass('has-no-plan')) {
                var _item = $(this).next('.toggle-details');
                _item.slideToggle();
                $(this).find('.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
            }
        });

        $(document).on('change', 'input#annual-toggle', function() {
            $('.price-rate-annual').toggle('slow');
            $('.price-rate').toggle('slow');
        });

        var pricing = {
            80000: {
                price: 0,
                price_annual: 0,
                ecommerce: 6,
                transaction: 110
            },
            450000: {
                price: 285,
                price_annual: 243,
                ecommerce: 2,
                transaction: 85
            },
            1000000: {
                price: 480,
                price_annual: 408,
                ecommerce: 1.5,
                transaction: 75
            },
            20000000: {
                price: 930,
                price_annual: 791,
                ecommerce: 1,
                transaction: 65
            }
        };

        function updateSlider(volume) {
            var price_wrapper = $('.pricing-calculation');
            price_wrapper.find('.price-rate>span').text(pricing[volume].price);
            price_wrapper.find('.price-rate-annual>span').text(pricing[volume].price_annual);
            price_wrapper.find('.ecommerce-text').text(pricing[volume].ecommerce);
            price_wrapper.find('.transaction-text').text(pricing[volume].transaction);

            if (pricing[volume].price == 0) {
                price_wrapper.find('.not-free').addClass('has-no-plan');

            } else {
                price_wrapper.find('.not-free').removeClass('has-no-plan');
            }
        }

        $('#pricing-in-slider').slider({
            min: 10000,
            max: 20000000,
            step: 1000,
            scale: 'logarithmic',
            tooltip: 'always',
            formatter: function(value) {
                if (value == 20000000) return "$20,000,000 and over";
                return '$' + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }
        });

        $('#pricing-in-slider').on("change", function(slideEvt) {
            for (var i in pricing) {
                if (slideEvt.value.newValue < i) {
                    break;
                }
            }
            updateSlider(i);
        });

        updateSlider(80000);

    })
})(jQuery);