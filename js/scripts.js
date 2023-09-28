/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// Update in script.js
// let currentSlide = 0;
// const slides = document.getElementsByClassName("slide");
// function showSlide(n) {
//     if (n < 0) {
//       currentSlide = slides.length - 1;
//     } else if (n >= slides.length) {
//       currentSlide = 0;
//     }
    
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
    
//     slides[currentSlide].style.display = "block";
//   }
  
// function prevSlide() {
// showSlide(currentSlide + 1);
// }

// function nextSlide() {
// showSlide(currentSlide - 1);
// }

// // Show the first slide when the page loads
// showSlide(currentSlide);
// Update in script.js

  
function showSlide(modalId, n) {
    const slides = document.querySelectorAll(`#${modalId} .slide`);
    
    if (n < 0) {
      n = slides.length - 1;
    } else if (n >= slides.length) {
      n = 0;
    }
  
    slides.forEach(slide => {
      slide.style.display = "none";
    });
  
    slides[n].style.display = "block";
  }
  
function prevSlide(modalId) {
    const slides = document.querySelectorAll(`#${modalId} .slide`);
    const currentIndex = Array.from(slides).findIndex(slide => slide.style.display === "block");
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(modalId, prevIndex);
}

function nextSlide(modalId) {
    const slides = document.querySelectorAll(`#${modalId} .slide`);
    const currentIndex = Array.from(slides).findIndex(slide => slide.style.display === "block");
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(modalId, nextIndex);
}


