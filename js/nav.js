const nav = document.querySelector('.nav-menu');
const navCheck = document.querySelector('#nav-check');
const navResponsive = document.querySelector('.navbar-responsive');


const Nav = () => {

    //Eventlistener
    // Close navbar when click event is out of nav element
    window.addEventListener('click', closeNavbar);
    window.addEventListener('touchstart', closeNavbar);
    navResponsive.addEventListener('click', close);

    // Change menu icon
    nav.addEventListener('click', changeIcon);


    // Functions
    function changeIcon() {
        nav.classList.toggle('active');
    }

    function close(e) {
        if (e.target.localName === 'a') {
            navCheck.checked = false;
            nav.classList.remove('active');
        };
    } 

    function closeNavbar(e) {

        if(navResponsive.contains(e.target)) {
            return;
        } else {
            navCheck.checked = false;
            nav.classList.remove('active');
        }
    }

    

};

export default Nav;