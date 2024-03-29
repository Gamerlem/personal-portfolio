// #region Header
const header = document.getElementsByTagName("header");
const navbar = document.querySelector(".nav-bar");
const navbarLinks = document.querySelectorAll(".nav-links li a");
const hamburger = document.querySelector(".hamburger");

window.onscroll = updateHeaderBackground;
hamburger.onclick = showHamburgerNavbarMenu;

function updateHeaderBackground() {
    if (window.scrollY >= 60 || navbar.classList.contains('active')) {
        if(!header[0].classList.contains('colored')) {
            header[0].classList.add('colored');

            navbarLinks.forEach((link) => {
                if(!link.classList.contains('colored')) {
                    link.classList.add('colored');
                }
            })
        }
    } else {
        header[0].classList.remove('colored');
        navbarLinks.forEach((link) => {
            link.classList.remove('colored');
        })
    }
}

function showHamburgerNavbarMenu () {
    navbar.classList.toggle("active");
    updateHeaderBackground();
}
// #endregion


// #region Stats
const yearElement = document.getElementById("stats-years");
const yearTextElement = document.getElementById("stats-years-text");
const monthElement = document.getElementById("stats-months");
const monthTextElement = document.getElementById("stats-months-text");
const dayElement = document.getElementById("stats-days");
const dayTextElement = document.getElementById("stats-days-text");
const hourElement = document.getElementById("stats-hours");
const hourTextElement = document.getElementById("stats-hours-text");
const minuteElement = document.getElementById("stats-minutes");
const minuteTextElement = document.getElementById("stats-minutes-text");
const secondElement = document.getElementById("stats-seconds");
const secondTextElement = document.getElementById("stats-seconds-text");

// set start
const startDate = new Date("June 14, 2022").getTime();
// set default values
calculateProfessionalTime();
// update each 1ms
const timer = setInterval(calculateProfessionalTime, 1000);

function calculateProfessionalTime() {
    const today = new Date().getTime();
    const distance = today - startDate;

    // calculate for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // calculate for years and months
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);

    // output results
    yearElement.innerHTML = years;
    yearTextElement.innerHTML = years === 1 ? " year" : " years";
    monthElement.innerHTML = months;
    monthTextElement.innerHTML = months === 1 ? " month" : " months";
    dayElement.innerHTML = days;
    dayTextElement.innerHTML = days === 1 ? " day" : " days";
    hourElement.innerHTML = hours;
    hourTextElement.innerHTML = hours === 1 ? " hour" : " hours";
    minuteElement.innerHTML = minutes;
    minuteTextElement.innerHTML = minutes === 1 ? " minute" : " minutes";
    secondElement.innerHTML = seconds;
    secondTextElement.innerHTML = seconds === 1 ? " second" : " seconds";
}
// #endregion


// #region About
function openInfo(event, infoName) {
    // remove active in all about-main-link
    const aboutMainLink = document.getElementsByClassName("about-main-link");
    for (var i = 0; i < aboutMainLink.length; i++) {
        aboutMainLink[i].className = aboutMainLink[i].className.replace(" active", "");
    }

    // hide all about-main-content
    const aboutMainContent = document.getElementsByClassName("about-main-content");
    for (var i = 0; i < aboutMainContent.length; i++) {
        aboutMainContent[i].className = aboutMainContent[i].className.replace(" active", "");
    }

    // // Show the current tab, and add an "active" class to the button that opened the tab
    event.currentTarget.className += " active";
    document.getElementById(infoName).className += " active";
}
// #endregion