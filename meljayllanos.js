// #region Header
const header = document.getElementsByTagName("header");
const navbar = document.querySelector(".nav-bar");
const navbarLinks = document.querySelectorAll(".nav-links li a");
const navbarButtons = document.querySelectorAll(".nav-actions button");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger i");
const colorModeIcon = document.querySelector("#colorModeToggle i");
const sections = document.querySelectorAll("section");

// scroll effect
window.onscroll = onScrollEffect;
function onScrollEffect() {
    // for header 
    const currentTop = window.scrollY;
    const headerOffset = Math.ceil(window.innerHeight * 0.10);
    const scrollOffset = Math.ceil(window.innerHeight * 0.01);

    if (currentTop >= headerOffset || navbar.classList.contains("active")) {
        if(!header[0].classList.contains("colored")) {
            header[0].classList.add("colored");

            navbarLinks.forEach((link) => {
                if(!link.classList.contains("colored")) {
                    link.classList.add("colored");
                }
            });

            navbarButtons.forEach((button) => {
                if(!button.classList.contains("colored")) {
                    button.classList.add("colored");
                }
            });
        }
    } else {
        header[0].classList.remove("colored");
        navbarLinks.forEach((link) => {
            link.classList.remove("colored");
        });
        navbarButtons.forEach((button) => {
            button.classList.remove("colored");
        });
    }

    // for header and section interaction
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffset = section.offsetTop - headerOffset;
        const sectionHeight = sectionOffset + (section.offsetHeight - scrollOffset);

        if(currentTop >= sectionOffset && currentTop <= sectionHeight) {
            // update header links
            navbarLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeNavbarLink = document.querySelector(".nav-links li a[href*=" + sectionId +"]");
            if(activeNavbarLink) {
                activeNavbarLink.classList.add("active");
            }
        }
    });
}

// hamburger menu action
hamburger.onclick = showHamburgerNavbarMenu;
function showHamburgerNavbarMenu () {
    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")) {
        hamburgerIcon.classList = "bx bx-x";
    } else {
        hamburgerIcon.classList = "bx bx-menu";
    }

    onScrollEffect();
}

function changeMode(event) {
    event.currentTarget.classList.toggle("dark-theme");
    document.body.classList.toggle("dark-theme");

    if(event.currentTarget.classList.contains("dark-theme")) {
        colorModeIcon.classList = "bx bx-sun";
    } else {
        colorModeIcon.classList = "bx bx-moon";
    }
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

// set default values
const startDate = new Date("June 14, 2022").getTime();
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

function viewResume() {
    window.open("files/Mel Jay Llanos - Resume.pdf", "_blank");
}
// #endregion


// #region
function sendEmail() {
    window.location.href = "mailto:mel.jay.llanos@gmail.com";
}
// #endregion