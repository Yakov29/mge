const registerButton = document.querySelector(".regButton");
const registerModal = document.querySelector(".register__modal");
const loginButton = document.querySelector(".logButton")
const loginModal = document.querySelector(".login__modal")
console.log(registerButton);
console.log("test");

registerButton.addEventListener("click", (e) => {
    registerModal.classList.remove("change__invisible");
});


loginButton.addEventListener("click", (e) => {
    loginModal.classList.remove("change__invisible");
});


