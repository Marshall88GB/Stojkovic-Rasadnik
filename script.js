AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});


const navMenu = document.getElementById("navigation");
const header = document.getElementById('header');
let numPic = 0;


function headImg() {

    if (
        numPic > 1
    ) {
        header.children[numPic - 1].hidden = true;
    }

    header.children[numPic].hidden = false;

    if (numPic >= 5) {
        numPic = 0;
    } else {
        numPic++;
    }

};
headImg();
setInterval(function() { headImg(); }, 6000);


const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
// Control Navigation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {

        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}

function toggleNav() {
    // Toggle :Menu bars
    menuBars.classList.toggle('change');
    // Toogle: Menu Activ
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
            // Animate In Nav
        navAnimation('out', 'in')
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
            // Animate Out Nav
        navAnimation('in', 'out')
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})


window.onscroll = function() { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navMenu.classList.add('navScr');

    } else {
        navMenu.classList.remove('navScr');
        navMenu.classList.add('nav');

    }
}



const config = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        1024: {
            perView: 2
        },
        700: {
            perView: 1
        }
    }
}

new Glide('.glide', config).mount()

var myMap = L.map("map", {
    center: [43.66, 21.1],
    zoom: 13,
    scrollWheelZoom: false,
});
L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoibWFyc2hhbGw4OGdiIiwiYSI6ImNrZmF0emdvMjB6NDUyem1hdmoybjB1cHIifQ.PATcsscaygxEJcmjMGmMjg",
    }
).addTo(myMap);
var iconL = L.icon({
    iconUrl: 'lokacija.png',
    iconSize: [38, 40],
    iconAnchor: [22, 94]
})

var marker = L.marker([43.671853, 21.159219], { icon: iconL }).addTo(myMap);
marker.bindPopup("Stojković-Kalem Lazarevac").openPopup();