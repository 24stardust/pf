$(document).ready(function(){
    
    $('.project .project-box.other').mouseenter(()=>{
        $('.project .project-box.other svg').css('fill', makeColor)
    })
    $('.project .project-box.other').mouseleave(()=>{
        $('.project .project-box.other svg').css('fill', '#fff') 
    })
    function makeColor(){ // 랜덤 색을 지정해주는 함수
        const randomColor="#" + Math.round(Math.random() * 0xffffff).toString(16);
        console.log(randomColor)
        return randomColor
    }


    // 폼 애니메이션
    $('fieldset input, fieldset textarea').focus(function(){
        $('.contact-form i').addClass('gelatine');
    })
    $('fieldset input, fieldset textarea').blur(function(){
        $('.contact-form i').removeClass('gelatine');
    })

    $('.project li .redesign').click(function(){
        let gogo = $('.swiper-slide').index()
    })

    // 아코디언
    const acco = $('.project li a')

    acco.click(function(e){
        e.preventDefault();
        // 띄우기 + 위치고정
        let target = $(this).attr('href')
        // $(target).css({
        //     'top' : (($(window).height() - $(target).outerHeight())/2 + $(window).scrollTop())+'px',
        //     // 'left' : (($(window).width() - $(target).outerWidth())/2 + $(window).scrollLeft())+'px',
        // });
        $(target).css('display', 'block')
        $('body').addClass('hidden')
    })


    // 닫기
    $('a.close').click(function(){
        let target = $(this).attr('href')
        $(target).css('display', 'none')
        $('body').removeClass('hidden')
    })

    // 아코디언 썸네일 슬라이드
    $('.redesign .slide img:gt(0)').hide()
    function nono(){
      $('.slide img:first').fadeOut(900).next().fadeIn(900)  
      $('.slide img:first').appendTo('.slide')
     }
    $('.redesign').mouseenter(function(){
        yes = setInterval(nono, 3000)
    })
    $('.redesign').mouseleave(function(){
        clearInterval(yes)
    })
    
    function move(){
        $('.folder h3').addClass('move')
    }
    $('.folder .icon').mouseenter(function(){
        Dmove = setTimeout(move, 500)
    })
    $('.folder .icon').mouseleave(function(){
        clearTimeout(Dmove)
        $('.folder h3').removeClass('move')
    })

    // 타이틀 움직이기
    elementAlign();
    function elementAlign() {
      var textHolderSize = $(window).width() / 2;
      var halfWindowHeight = $(window).height() / 2;
      var halfWindowWidth = $(window).width() / 2;
      $(".textHolder")
        .css("width", textHolderSize)
        .css("height", textHolderSize);
      $(".textHolder").css("margin-top", halfWindowHeight - textHolderSize / 2);
      $(".textHolder").css("margin-left", halfWindowWidth - textHolderSize / 2);
    }
    $(window).on("resize", function() {
      elementAlign();
    });
  });
  $('#visual').on("mousemove", function(event) {
    var window_height = $(this).height();
    var window_width = $(this).width();
    var mouseXpos = event.clientX;
    var mouseYpos = event.clientY;
    var YrotateDeg = (window_width / 2 - mouseXpos) * 0.05;
    var XrotateDeg = (window_height / 2 - mouseYpos) * -0.05;
    $(".title-wrap").css({
        "transform": "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)" 
    });

})

// 어바웃 팝업창
function Pop(){
    var node = document.getElementById("content");
    var winbox = new WinBox({

        title: "hello!",
        icon: "images/icon/heart.svg",
        background: "#4028A3",
    
        x: "center",
        y: "center",
        border: "0.3em",
        
        root: document.body, // 바디에 생성
        
        width: "62%", 
        height: "68%",
        resize: ("center", "center"),
        move: ("center", "center"),
    
        mount: node,
    });
    winbox.removeControl("wb-max");
    winbox.addControl({
        index: 0,
        class: "wb-modal",
        image: "images/icon/thumbtack-solid.svg",
        click: function(event, winbox){
            //         console.log(winbox.id);
            this.classList.toggle("active")
            if(winbox.min == false){
                winbox.toggleClass("modal");
            }else{
                winbox.removeClass("modal");
            }
        }
        })
}


(function(MIX){
    let mixer = mixitup('.mix-wrapper',{
        "animation": {
            "duration": 757,
            "nudge": true,
            "reverseOut": false,
            "effects": "fade translateZ(-37px)"
        }
    })
})();


gsap.registerPlugin(MotionPathPlugin);

gsap.to("#imo", {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    // autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});


// const slideBG = document.getElementById('slide-wrap')
// const slideEl = document.querySelectorAll('.swiper-slide')
// const slideidx = slideEl.getAttribute('data-swiper-slide-index')
// const slideEla = slideEl.classList.contains('swiper-slide-active')
// console.log(slideidx)


// if((slideidx == 0)){
//     slideBG.classList.add('BG1')
// }else if(slideidx == 1){
//     slideBG.classList.add('BG2')
// }else if(slideidx == 2){
//     slideBG.classList.add('BG3')
// }else{
//     slideBG.classList.add('BG4')
// }