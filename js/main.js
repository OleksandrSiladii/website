$(document).ready(function() {
    $("input, textarea").val('');

    var height = $(window).height(),
        margin = height / 2 - $('.ds').height() / 2,
        width = $(window).width();
    // $('.header').css('height', height + 'px');
    
    if(width >= 768){
        $('.header h1').css('margin-top', margin + 'px');    
    }
    
    ////
    $('.closebtn').click(function(e) {
        $('#mySidenav').css('width', '0px');
        $('#screen').hide();
    });
    $('.menubut').click(function(e) {
        $('#mySidenav').css('width', '260px');
        $('#screen').show();
    });

    $('#screen').click(function(e) {
        $('#mySidenav').css('width', '0');
        $(this).hide();
    });
    /////

    $('.modd').click(function(e) {
        clickname_h = $(this).parent().find('h6').text();
        clickname_a = $(this).text().trim();
        $('input').val('');
        $('.modal-header, .modal-body').show();
        $('.succ').hide();
    });
    $('form.modal-form').submit(function(e) {
        if ((typeof clickname_h == "undefined") ||
            (typeof clickname_h == "undefined"))

        {
            clickname_h = $(this).find('.lnk h6').text().trim();
            clickname_a = $(this).find('.lnk a').text().trim();
        }

        var phone = $(this).find("input[name='phone']").val();
        var name = $(this).find("input[name='name']").val();
        var text = $(this).find("textarea").val();

        var dataAttr = "phone=" + phone +
            "&name=" + name +
            "&text=" + text +
            "&clickname_a=" + clickname_a +
            "&clickname_h=" + clickname_h;
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: dataAttr,
        }).done(function() {
            location.href = "success.php"
            /*
                    $('.modal-header, .modal-body').hide();  
                    $('.succ').show(1).delay(3000).hide(1);
                    $('input, textarea').val('');
        			$('.modal-header, .modal-body').show(); 
					*/
            clickname_a == "undefined";
            clickname_h == "undefined";

        }).fail(function() {
            console.log('fail');
        });
        e.preventDefault();
        type = '';
    });      
    /////////

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.responsive'
    });
    $('.responsive').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        //dots: true,
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    ////
    $('.faq a').click(function(e) {
        $(this).toggleClass('active');
        $(this).parent().parent().find('p').slideToggle();
        return false;
    })
    ///

	        $(window).scroll(function() {

	        	if ( $(window).width() > 767 ) {
	        		menu = $(".top");
	        	} else 
	        		menu =  $(".top-cont");

	            if ($(this).scrollTop() > (10) && menu.hasClass("nofix")) {
	                menu.removeClass("nofix").addClass("fixed");
	        		
	        		if ( $(window).width() < 767 ) {
	        			$('.skype').css('display', 'none');






	        			$('.c3').css('display', 'block');
	        			$('.c3').css('position', 'absolute');
	        			$('.c3').css('top', '0');
	        			$('.c3').css('right', '0');

	        		}

	            } else if ($(this).scrollTop() <= (10) && menu.hasClass("fixed")) {
	                menu.removeClass("fixed").addClass("nofix");
	        				//$('.skype').css('float', 'left');

	        		if ( $(window).width() < 767 ) {
	        			$('.skype').css('display', 'inline');

	        			$('.c3').css('display', 'none');
	        		}

	            }

	        });



    $('.main-menu a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top + 16
                }, 1000);
                return false;
            }
        }
    });
    $('.map')
        .click(function() {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('clicked')
        });


	$('#phone, #phone1').keyup(function () { 
    	this.value = this.value.replace(/[^0-9\.]/g,'');
	});



    var map;
        function initialize() {
                map = new google.maps.Map(document.getElementById('map-canvas'), {
                center: new google.maps.LatLng(48.462427, 35.03146),
                zoom: 18,
                scrollwheel: false,
            });

            var myLatLng = {
                lat: 48.462427, 
                lng: 35.03146 
            };

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
            });
        }



});