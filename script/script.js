const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1500,
    autoplay:{
        delay: 5000
    },
    navigation: {
        prevEl: "#slide-prev",  // Corrected typo here
        nextEl: "#slide-next"   // Corrected typo here
    }
});