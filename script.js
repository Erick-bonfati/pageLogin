

// Capturando as tags
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


// Capturar evento da variavel 'registerLink'
registerLink.addEventListener('click', ()=> { // arrowFunc
    wrapper.classList.add('active'); // quando clicamos na classe registerLink, ele adiciona uma classe no wrapper como 'active'
});

// Capturar evento da variavel 'loginLink'
loginLink.addEventListener('click', ()=> { 
    wrapper.classList.remove('active'); // quando clicamos na classe loginLink, ele remove a classe 'active' que adicionamos antes no 'wrapper'
});

// Capturar evento da variavel 'btnPopup'
btnPopup.addEventListener('click', ()=> { 
    wrapper.classList.add('active-popup'); // quando clicamos na classe btnLogin-popup, ele adiciona uma classe no wrapper como 'active-popup'
});

// Capturar evento da variavel 'iconClose'
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup'); // quando clicamos na classe icon-close, ele remove a classe que está como 'active-popup'
});