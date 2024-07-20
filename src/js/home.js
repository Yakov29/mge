const registerButton = document.querySelector(".regButton");
const registerModal = document.querySelector(".register__modal");
const loginButton = document.querySelector(".logButton")
const loginModal = document.querySelector(".login__modal")
const cross = document.querySelectorAll(".cross__svg")
const cross2 = document.querySelector(".cross__svg2")
console.log(cross[0])
console.log(registerButton);
console.log("test");

registerButton.addEventListener("click", (e) => {
    registerModal.classList.remove("change__invisible");
    loginModal.classList.add("change__invisible");
});


loginButton.addEventListener("click", (e) => {
    loginModal.classList.remove("change__invisible");
    registerModal.classList.add("change__invisible");
});

cross[0].addEventListener("click" , () => {
    loginModal.classList.add("change__invisible");
    registerModal.classList.add("change__invisible");
    console.log(123)
})

cross[1].addEventListener("click" , () => {
    loginModal.classList.add("change__invisible");
    registerModal.classList.add("change__invisible");
    console.log(123)
})


// cross2.addEventListener("click" , () => {
//     loginModal.classList.add("change__invisible");
//     registerModal.classList.add("change__invisible");
//     console.log(123)
// })

