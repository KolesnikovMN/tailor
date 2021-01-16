const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');

var mySwiper = new Swiper(slider, {
            // Optional parameters
            autoplay: {
                delay: 5000,
            },
            loop: true,

            // If we need pagination
            pagination: {
                el: '.pag-1',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });