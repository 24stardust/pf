

    //  메뉴 이동 + 색변경
    const menu = $('header .gnb > li'),
    contents = $('main > section')

    menu.click(function(e){
    e.preventDefault();
    $(this).addClass('on');
    $(this).siblings().removeClass('on');

    let idx = $(this).index();
    let section = contents.eq(idx)
    let sectionDistance = section.offset().top-(80)
    $('html, body').animate({
        scrollTop : sectionDistance
    })
    })


        //     // 윈도우 스크롤 메뉴 색 변경
    //     $(window).scroll(function(){
    //     contents.each(function(){
    //       if($(this).offset().top <= $(window).scrollTop()+114){
    //           let idx = $(this).index();
    //           menu.removeClass('on')
    //           menu.eq(idx).addClass('on')
    //       }
    //   })
    // })
    // mywork 팝업창

        
    // let mixer = mixitup('.mix-wrapper',{
    //     // 애니메이션 설정. 홈페이지에서 가져올 수 있음.
    //     "animation": {
    //         "duration": 757,
    //         "nudge": true,
    //         "reverseOut": false,
    //         "effects": "translateZ(-60px) rotateY(-45deg)"
    //     }
    // })   
    // $('#filter-select').change(function(){
    //     let value = $(this).val(); // val: value
    //     mixer.filter(value)
    // })
    // $('#sort-select').change(function(){
    //     let value = $(this).val(); // val: value
    //     mixer.sort(value)
    // })