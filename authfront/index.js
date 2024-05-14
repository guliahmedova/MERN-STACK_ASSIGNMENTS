const username = document.getElementById('registerUserName');
const fullname = document.getElementById('registerFullName');
const email = document.getElementById('registerEmail');
const password = document.getElementById('registerPassword');

const loginUsername = document.getElementById('loginUserName');
const loginPassword = document.getElementById('loginPassword');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

async function register(e) {
    e.preventDefault();

    const user = {
        fullName: fullname.value,
        userName: username.value,
        email: email.value,
        password: password.value,
        isActive: true
    };

    const resJson = await fetch("http://localhost:4000/users/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const result = await resJson.json();
    console.log(result);
};

async function login(e) {
    e.preventDefault();

    const user = {
        userName: loginUsername.value,
        password: loginPassword.value,
    };

    const resJson = await fetch("http://localhost:4000/users/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const result = await resJson.json();
    console.log(result);
};

const onLoad = async () => {
    registerForm.addEventListener('submit', register);
    loginForm.addEventListener('submit', login);
};

document.addEventListener("DOMContentLoaded", onLoad);