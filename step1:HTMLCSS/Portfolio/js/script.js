(function($){

    var typed = new Typed('span.txt-rotate',{
        strings: ["I am a Web developer", "I am linux Administrator"],
        typeSpeed: 30,
        backSpeed: 30,
        fadeOut: false,
        smartBackspace: true,
        loop: true
    })
})(jQuery);

$(document).ready(function(){
    $('projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonary',
    });

    $('.list-filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });
    $('.popup-images').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery : {
            enabled: true,
            navigateByImgClick: true,    
        }
    });

});