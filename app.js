const navToggle = document.querySelector(".header_nav-toggle");
const navMenu = document.querySelector(".header_nav_menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})
