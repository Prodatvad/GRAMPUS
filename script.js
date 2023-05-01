const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 2.2,
    spaceBetween: 30,
    speed: 700,

    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
 
});

new Swiper('.swiper_2', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 2500,

    pagination: {
      el: '.swiper-pagination',
    },
      
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },
 
});

