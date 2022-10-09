const beforeLogin = document.querySelector('.before-login');
const afterLogin = document.querySelector('.after-login');
const loginForm = document.querySelector('#login-form');

const HIDDEN_CLASSNAME = "hidden";

if(localStorage.getItem("username") === null){
    function loginSubmit(){
        const username = document.querySelector('#username');
        const greeting = document.querySelector('.greeting');
        localStorage.setItem("username", username.value);
        greeting.innerHTML = localStorage.getItem("username");
        beforeLogin.classList.add(HIDDEN_CLASSNAME);
        afterLogin.classList.remove(HIDDEN_CLASSNAME);
        // afterLogin.style.display = "flex";
    }
    loginForm.addEventListener("submit", loginSubmit);

    afterLogin.classList.add(HIDDEN_CLASSNAME);
    beforeLogin.classList.remove(HIDDEN_CLASSNAME);
}
else{
    const greeting = document.querySelector('.greeting');
    greeting.innerHTML = localStorage.getItem("username");
    beforeLogin.classList.add(HIDDEN_CLASSNAME);
    afterLogin.classList.remove(HIDDEN_CLASSNAME);
    // afterLogin.style.display = "flex";
}