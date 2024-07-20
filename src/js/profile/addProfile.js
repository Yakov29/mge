import { addProfile, getProfiles } from "./profileSystem.js";

document.addEventListener("DOMContentLoaded", () => {
    const profileCircle = document.querySelector(".profile__circle");
    const regButton = document.querySelector(".regButton");
    const logButton = document.querySelector(".logButton");
    const logoutButton = document.querySelector("#logout-button");
    const registerForm = document.querySelector(".register__form");
    const loginForm = document.querySelector(".login__form");
    const loginErrorMessage = loginForm ? loginForm.querySelector('.error-message') : null;
    const registerErrorMessage = registerForm ? registerForm.querySelector('.error-message') : null;
    const registerModal = document.querySelector(".register__modal");
    const loginModal = document.querySelector(".login__modal");
    const tryButton = document.querySelector(".tryButton");

    const updateUI = () => {
        const userProfile = localStorage.getItem("userProfile");

        if (profileCircle) {
            if (userProfile) {
                profileCircle.classList.remove("change__invisible");
                if (logoutButton) logoutButton.classList.remove("change__invisible");
                if (regButton) regButton.classList.add("change__invisible");
                if (logButton) logButton.classList.add("change__invisible");

                const user = JSON.parse(userProfile);
                profileCircle.textContent = user.name[0].toUpperCase();
            } else {
                profileCircle.classList.add("change__invisible");
                if (logoutButton) logoutButton.classList.add("change__invisible");
                if (regButton) regButton.classList.remove("change__invisible");
                if (logButton) logButton.classList.remove("change__invisible");
            }
        }
    };

    updateUI();

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (registerErrorMessage) registerErrorMessage.textContent = '';

            const profilename = e.target.elements.profilename.value;
            const profilesurname = e.target.elements.profilesurname.value;
            const profilelogin = e.target.elements.profilelogin.value;
            const profilepassword = e.target.elements.profilepassword.value;

            if (!profilename || !profilesurname || !profilelogin || !profilepassword) {
                if (registerErrorMessage) registerErrorMessage.textContent = 'Please fill in all fields';
                return;
            }

            const profile = {
                name: profilename,
                surname: profilesurname,
                login: profilelogin,
                password: profilepassword
            };

            try {
                console.log("Registering profile:", profile); // Debugging statement
                await addProfile(profile);
                localStorage.setItem("userProfile", JSON.stringify(profile));
                updateUI();
                if (registerModal) registerModal.classList.add("change__invisible");
            } catch (error) {
                if (registerErrorMessage) registerErrorMessage.textContent = 'Registration failed. Please try again.';
                console.error("Registration failed:", error);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (loginErrorMessage) loginErrorMessage.textContent = '';

            const profilelogin = e.target.elements.profilelogin.value;
            const profilepassword = e.target.elements.profilepassword.value;

            if (!profilelogin || !profilepassword) {
                if (loginErrorMessage) loginErrorMessage.textContent = 'Please fill in all fields';
                return;
            }

            try {
                console.log("Logging in with:", profilelogin); // Debugging statement
                const profiles = await getProfiles();
                const user = profiles.find(profile => profile.login === profilelogin && profile.password === profilepassword);

                if (user) {
                    localStorage.setItem("userProfile", JSON.stringify(user));
                    updateUI();
                    if (loginModal) loginModal.classList.add("change__invisible");
                } else {
                    if (loginErrorMessage) loginErrorMessage.textContent = 'Invalid login or password. Please try again.';
                }
            } catch (error) {
                if (loginErrorMessage) loginErrorMessage.textContent = 'Login failed. Please try again.';
                console.error("Login failed:", error);
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("userProfile");
            updateUI();
        });
    }

    if (regButton) {
        regButton.addEventListener("click", () => {
            if (registerModal) registerModal.classList.remove("change__invisible");
        });
    }

    if (logButton) {
        logButton.addEventListener("click", () => {
            if (loginModal) loginModal.classList.remove("change__invisible");
        });
    }

    if (tryButton) {
        tryButton.addEventListener("click", () => {
            if (registerModal) registerModal.classList.remove("change__invisible");
        });
    }
});
