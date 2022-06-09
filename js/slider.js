$(document).ready(function () {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    let sBgFix = $('.sectBg');
    let bg = $('.bg');
    if (isIOS) {
        bg.addClass("bg-scroll");
        sBgFix.addClass("h100-scroll");
    } else {
        bg.addClass("bg-fixed");
        sBgFix.addClass("h100-fixed");
    }
    if ($(window).width() > 1024) {

        let menu = $('#menu_wrapper');
        let $element = $('#whyarewe');
        let active = false;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop() + $(window).height();
            //Если скролл до конца елемента
            // var offset = menu.offset().top + $element.height() + menu.height();
            //Если скролл до начала елемента
            var offset = $element.offset().top + menu.height();

            if (active == false && scroll > offset) {

                $('#menu_wrapper').animate(0, function () {
                    menu.addClass("scrlOn");
                    menu.css("transition", "0.7s");
                })
                $('#menu_wrapper').animate({ opacity: 1 }, 170, function () {
                    menu.removeClass("scrlOn");
                    menu.addClass("scrlOff");
                    menu.addClass("darkHeader");

                })
                active = true;
            }
            else if (active == true && scroll < offset) {
                menu.css("transition", "0s");
                menu.removeClass("darkHeader");
                menu.removeClass("scrlOff");
                active = false;
            }
        });
    }

    $('.btn').click(function () {
        $('#block').slideUp();
    });

    var images = Array(
        "/img/4.webp",
        "/img/1.webp",
        "/img/5.webp");
    var currimg = 0;


    function loadimg() {
        var newimage = images[currimg];

        $('.header').css("background-image", "url(" + newimage + ")");
        $('.bg').animate({ opacity: 1 }, 0, function () {

            //finished animating, minifade out and fade new back in           
            $('.bg').animate({ opacity: 0 }, 300, function () {

                currimg++;

                if (currimg > images.length - 1) {

                    currimg = 0;

                }


                //swap out bg src                
                $('.bg').css("background-image", "url(" + newimage + ")");

                //animate fully back in
                $('.bg').animate({ opacity: 1 }, 300, function () {

                    //set timer for next
                    setTimeout(loadimg, 3000);

                });

            });

        })
    }

    loadimg();


    $('.burger').click(function () {
        $('.burger, .nav-panel').toggleClass('active');
        $('body').toggleClass('lock');
    });

});
