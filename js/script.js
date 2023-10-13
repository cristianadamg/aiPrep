"use strict"; 

// Variables
const yearC = document.querySelector('.year-c');
const searchBtn = document.querySelector('.searchBtn');
const searchContainer = document.querySelector('.search');
const input = document.querySelector('.input');
const closeBtn = document.querySelector('.closeBtn');
const searchAndAcc = document.querySelector('.search-and-account');
const headerNav = document.querySelector('.navbar');
const heroDescription = document.querySelector('.hero-description');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const allNavLinks = document.querySelectorAll('.nav-link');
const searchInput = document.querySelector('.searchInput');

// AUTOMATICALLY Update Copyright Year
function dynamicYear () {
    const currentYear = new Date().getFullYear();

    if (currentYear !== yearC) {
        yearC.textContent = currentYear;
    }
};

dynamicYear();

// Search bar effect
searchBtn.addEventListener('click', function() {
    if(window.innerWidth >= 1681) {
    searchContainer.classList.add('active');
    searchInput.focus();
    searchAndAcc.style.marginLeft = '24rem';
}
});

closeBtn.addEventListener('click', function () {
    searchContainer.classList.remove('active');
    searchAndAcc.style.marginLeft = '40rem';
});

window.addEventListener('resize', function () {
    searchContainer.classList.remove('active');

    if (window.innerWidth <= 1680) {
        searchAndAcc.style.marginLeft = '0';
    } else if (window.innerWidth >= 1681) {
        searchAndAcc.style.marginLeft = '40rem';
    }
});

// Mobile Menu
mobileMenuBtn.addEventListener('click', function () {
    headerNav.classList.toggle('open-nav');

    if (headerNav.classList.contains('open-nav')) {
        heroDescription.style.opacity = 0.01;
    } else {
        heroDescription.style.opacity = 1;
    };
});


allNavLinks.forEach(function(current) {
    current.addEventListener('click', function () {
        headerNav.classList.toggle('open-nav');
        heroDescription.style.opacity = 1;
    })
});