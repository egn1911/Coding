const hamBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-bar');

function toggleButton(){
    nav.classList.toggle('w')
}

hamBtn.addEventListener('click',toggleButton);
