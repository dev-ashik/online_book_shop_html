window.onscroll = () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};


// search box

const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}


// login form

const loginForm = document.querySelector(".login-form-container");
const loginBtn = document.querySelector("#login-btn");
const closeLoginBtn = document.querySelector("#close-login-btn");

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
}

closeLoginBtn.onclick = () => {
    loginForm.classList.remove('active');
}
