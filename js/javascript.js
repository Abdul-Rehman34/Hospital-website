let manu = document.querySelector('#manu-btn');
let navbar = document.querySelector('#navbar');

manu.onclick = () =>{
    manu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    manu.classList.remove('fa-times');
    navbar.classList.remove('active');
}