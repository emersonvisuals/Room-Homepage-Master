const header = document.querySelector('.wrapper h1');
const para = document.querySelector('.wrapper p');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

right.addEventListener('click', function() {
    console.log('clicked');
    header.innerHTML="hello";
});