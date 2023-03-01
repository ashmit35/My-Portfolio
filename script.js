$(document).ready(function(){

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // smooth scroll to navbar btn
    $('.navbar li a').click(function(){
        $('html').css("scrollBehaviour","smooth")
    });

    // click on navbar button to goto section
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });
});