import { CardHover } from "./js/cardHover.js";
import Nav from "./js/nav.js";
import { Up } from "./js/upBtn.js";

Nav();

Up();

CardHover();

// AOS library
AOS.init();

// Add year to footer
const footerY = document.querySelector('.footer-year');
const year = new Date();
footerY.innerHTML = year.getFullYear();