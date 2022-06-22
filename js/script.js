// html , css, js 로딩완료
$(document).ready();

// html , css, js ,멀티미디어까지 로딩완료
window.onload=function(){
  //visual 슬라이드
  new Swiper('.sw-visual',{
    loop: true,
    autoplay:{
      delay:1000,
      disableOnInteraction:false,


    },
speed:1000,
navigation:{
  prevEl:'.sw-visual-prev',
  nextEl:'sw-visual-next'
}
  });

  //itmes 슬라이드
  new Swiper('.sw-items',{
    loop:true,
    speed:800,
    autoplay:{
      delay:1000,
      disableOnInteraction:false,

    },
    navigation:{
      prevEl:'.sw-itmes-prev',
      nextEl:'.sw-itmes-next'



    },
    pagination:{
      el:'.sw-items-pg'
    }
  });
}
