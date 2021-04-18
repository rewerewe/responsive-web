/* Trigger */
$(function () {
    /* $(functuin(){ ~ }) 은 document.ready 와 동일함. 
    html을 다 읽고 ~ 코드를 실행해줘, 라는 의미임 */
    var mobileBtn = $('.trigger');
    var gnb = $('.gnb');

    mobileBtn.click(function () {
        $(this).toggleClass('active');
        gnb.toggleClass('active');
    })

    $('section, .menu a').click(function () {
        mobileBtn.removeClass('active');
        gnb.removeClass('active');
    })

    /* Smooth Scrolling */
    $('.menu a, .gototop').click(function (e) {
        /* 0.9 초 동안 이동하라, 는 의미임 */
        $.scrollTo(this.hash || 0, 900)
    })

    // Change CSS with Scroll
    $(window).scroll(function () {

        if ($(window).scrollTop() > 50) {
            $('header, .gototop').addClass('active');
        } else {
            $('header, .gototop').removeClass('active');
        }
    })
})