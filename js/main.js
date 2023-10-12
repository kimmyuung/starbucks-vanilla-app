const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    // Logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll' , _.throttle (function() {
    console.log('scroll');    
    if(window.scrollY > 500) {
            // badge hide
            //gsap.to(요소, 지속시간, 옵션)
            gsap.to(badgeEl, .6 , {
                opacity : 0,
                display: 'none'
            });
            //badgeEl.style.display = 'none';
    } else {
            // badge show
            //badgeEl.style.display = 'block';
            gsap.to(badgeEl, .6 , {
                opacity : 1 ,
                display : 'block'
            });
    }
} , 300));
// _.throttle (함수, 시간) : 시간 단위로 함수 실행 100 : 1초

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        opacity : 1 ,
        delay : (index + 1) * .7,
    });
});

