'use strict';

const button = document.getElementById('navToggle');
const buttonItem = document.getElementById('burger-item')
const nav = document.getElementById('nav')

button.addEventListener('click', () => {
    buttonItem.classList.toggle('active');
    nav.classList.toggle('show');
})