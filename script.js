///toggle icon navbar

// scroll section
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{

   

    //sticky navbar

    let header=document.querySelector('header');


    header.classList.toggle('sticky',window.scrollY>100)
}