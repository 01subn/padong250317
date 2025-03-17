$(document).ready(function(){
    // 모달 메뉴창
    $('nav').css('right', '-330px');
    $('.right-mo').hide();

    $('.menu_btn').click(function() {
        $('.right-mo').show();
        $('nav').animate({ right: '0' }, 300);
    });

    $('.right-mo').click(function(event) {
        if (!$(event.target).closest('nav').length) {
            // $('.right-mo').fadeOut(100); // 모달 숨김 처리
            $('nav').animate({ right : '-70vw'},500, function(){
                $('.right-mo').fadeOut(100);
            });

        }
    });

    
    
    
    
});