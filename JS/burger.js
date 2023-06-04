const menu = document.querySelector(".menu");
const projectButtons = document.querySelector(".projectButtons");
const nav = document.querySelector(".nav");

if (window.matchMedia('(max-width: 750px)').matches) {
    nav.style.display = "none";
    projectButtons.addEventListener('click',()=>{
        if (nav.style.display === "none"){
        } else {
            nav.style.display = "none";
        }
    })
}

menu.addEventListener('click',()=>{
    if (nav.style.display === "none"){
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
})