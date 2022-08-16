import 'normalize.css/normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './index.css';
import 'owl.carousel';


// start Fixed Desktop Top Menu
document.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerContent = document.querySelector('.header');
    if(headerContent){
        if(document.documentElement.clientWidth > 1000 && scrollTop > 120){
            headerContent.classList.add('header_sticky');
        } else if(document.documentElement.clientWidth > 1000 && scrollTop <= 100){
            headerContent.classList.remove('header_sticky');
        } else if (document.documentElement.clientWidth <= 1000){
            headerContent.classList.remove('header_sticky');
        }
    }
});
// end Fixed Desktop Top Menu


// start Mobile Top Menu
const buttonOpenTopMenu = document.querySelector('.mobile-button-menu');
if(buttonOpenTopMenu){
    const topMenu = document.querySelector('.mobile-top-menu');
    if(topMenu){
        buttonOpenTopMenu.addEventListener('click', function(e){
            e.preventDefault();
            topMenu.classList.add('active');
            if(topMenu.classList.contains('active')){
                topMenu.style.height = `${topMenu.scrollHeight}px`;
            }
        });
        const buttonCloseTopMenu = document.querySelector('.mobile-top-menu__close');
        if(buttonCloseTopMenu){
            buttonCloseTopMenu.addEventListener('click', function(e){
                e.preventDefault();
                topMenu.classList.remove('active');
                window.getComputedStyle(topMenu, null).getPropertyValue("height");
                topMenu.style.height = "0";
            });
        }
    }
}
// end Mobile Top Menu

// start Mobile Search
const buttonMobileSearch = document.querySelector('.mobile-list-buttons__search');
if(buttonMobileSearch){
    const mobileSearch = document.querySelector('.mobile-search');
    if(mobileSearch){
        buttonMobileSearch.addEventListener('click', function(e){
            e.preventDefault();
            buttonMobileSearch.classList.toggle('active');
            mobileSearch.classList.toggle('active');
            
        });
        const buttonCloseMobileSearch= document.querySelector('.mobile-search__button-close');
        buttonCloseMobileSearch.addEventListener('click', function(e){
            e.preventDefault();
            buttonMobileSearch.classList.remove('active');
            mobileSearch.classList.remove('active');
        });
    }
}
// end Mobile Search


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots: true
    });
});




