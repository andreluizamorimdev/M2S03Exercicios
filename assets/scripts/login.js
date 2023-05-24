const loginForm = document.getElementById("loginForm");

function processarLogin(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(`email ${email} , password ${password}`);
}

loginForm.addEventListener("submit", processarLogin);

/* loginForm.addEventListener('submit',  (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(`email ${email} , password ${password}`);
}); */