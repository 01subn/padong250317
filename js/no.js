$(document).ready(function() {
    // const sliderWrapperR = $('.user-review-t'); // 위에서 아래로 이동할 슬라이더
    // const sliderWrapperL = $('.user-review-b'); // 숨길 슬라이더
    // const boxWidth = $('.r-box').outerWidth(true); // 각 박스의 너비
    // const boxHeight = $('.r-box').outerHeight(true); // 각 박스의 높이
    // const slideDuration = 500;
    
    // let slidingR = false;
    // let slidingL = false;
    // let slideIntervalR, slideIntervalL;



    // // 위에서 아래로 슬라이드
    // function slideToBottom() {
    //     if (slidingR) return;
    //     slidingR = true;

    //     sliderWrapperR.children().last().prependTo(sliderWrapperR);
    //     sliderWrapperR.css('transform', 'translateY(' + (-boxHeight) + 'px)',); 
    //     // sliderWrapperR.css({'left' : '0', 'transform':'translateX(-50%)' });


    //     setTimeout(() => {
    //         sliderWrapperR.css({
    //             'transition': `transform ${slideDuration / 1000}s ease-in-out`,
    //             'transform': 'translateY(0)',
    //         });

    //         setTimeout(() => {
    //             sliderWrapperR.css('transition', 'none');
    //             slidingR = false;
    //         }, slideDuration);
    //     }, 50);
    // }

    // let yPos = 0; // Y축 위치를 추적하기 위한 변수

    // function slide() {
    //     yPos -= 200; // Y축으로 200px씩 이동
    //     $('.user-review-t').css('transform', `translateY(${yPos}px)`);
    
    //     // 다음 이동을 위한 2초 대기
    //     setTimeout(function() {
    //         // 이 부분에 애니메이션을 연속적으로 할 수 있습니다.
    //     }, 2000); // 2초 대기
    // }
    
    // function slideToBottom() {
    //     if (window.innerWidth < 768) {
    //         // 2.5초마다 slide 함수 실행
    //         setInterval(slide, 2500); // 2.5초 간격으로 슬라이드 실행
    //     }
    // }
    
    // // 창 크기 변경 시 애니메이션 적용
    // window.addEventListener('resize', slideToBottom);
    
    // // 페이지가 처음 로드될 때 애니메이션 적용
    // window.addEventListener('load', slideToBottom);



    // slideToBottom();

    // // 슬라이드 시작
    // function startSlide() {
    //     stopSlide();
    //     if (window.innerWidth < 768) {
    //         sliderWrapperL.hide();  // 768px 이하일 때 .user-review-b 숨김
    //         sliderWrapperR.css({'display': 'block', 'overflow': 'hidden'}); // .user-review-t를 블록으로 설정
    //         sliderWrapperR.css({'transform' : 'translateX(-50%)'});
    //         slideIntervalR = setInterval(slideToBottom, 3000); // 위로 슬라이드
    //     } else {
    //         sliderWrapperL.show();
    //         sliderWrapperR.css('display', 'flex'); // 원래 상태로 복귀
    //         slideIntervalR = setInterval(slideToLeft, 3000); // 좌측 슬라이드
    //         slideIntervalL = setInterval(slideToRight, 3000); // 우측 슬라이드
    //     }
    // }

    // // 슬라이드 멈춤
    // function stopSlide() {
    //     clearInterval(slideIntervalR);
    //     clearInterval(slideIntervalL);
    //     slideIntervalR = null;
    //     slideIntervalL = null;
    // }

    // function checkWindowSize() {
    //     startSlide();
    // }

    // // 슬라이드 시작
    // startSlide();
    // checkWindowSize();
    // $(window).resize(checkWindowSize);

    // ================== 웹디인기능사에서 배운거 적용 ==================
    // function slideLR() {
    //     // 첫 번째 .r-box 요소를 1000px 왼쪽으로 이동
    //     $('.user-review-t').animate(
    //         { 'marginLeft': '-1000px' }, 
    //         9000, // 애니메이션 시간 9초
    //         'linear', // 일정한 속도로 애니메이션 실행
    //         function() {
    //             // 첫 번째 .r-box를 맨 뒤로 이동
    //             $('.user-review-t .r-box:first').appendTo('.user-review-t');
    //             // 그리고 marginLeft를 다시 0으로 초기화
    //             $(this).css('marginLeft', '0');
    //             // 다시 슬라이드 실행
    //             slideLR();
    //         }
    //     );
    // }
    
    // // 슬라이드 함수 실행
    // slideLR();





    // 메뉴 버튼 애니메이션
    $('nav').css('right', '-330px');
    $('.right-mo').hide();

    $('.menu_btn').click(function() {
        $('.right-mo').show();
        $('nav').animate({ right: '0' }, 300);
    });

    $('.right-mo').click(function() {
        $('nav').animate({ right: '-330px' }, 500, function() {
            $('.right-mo').hide();
        });
    });
});
