import { addProfile, getProfiles } from "./profileSystem.js";

document.addEventListener("DOMContentLoaded", () => {
    const profileCircle = document.querySelector(".profile__circle");
    const regButton = document.querySelector(".regButton");
    const logButton = document.querySelector(".logButton");
    const logoutButton = document.querySelector(".logoutButton");
    const registerForm = document.querySelector(".register__form");
    const loginForm = document.querySelector(".login__form");
    const loginErrorMessage = loginForm ? loginForm.querySelector('.error-message') : null;
    const registerErrorMessage = registerForm ? registerForm.querySelector('.error-message') : null;
    const registerModal = document.querySelector(".register__modal");
    const loginModal = document.querySelector(".login__modal");
    const tryButton = document.querySelector(".tryButton"); // Кнопка "Сбробувати"

    // Function to update the UI based on user login state
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

    // Initial UI update
    updateUI();

    // Handle profile registration
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (registerErrorMessage) registerErrorMessage.textContent = ''; // Clear previous error message

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
                await addProfile(profile);
                localStorage.setItem("userProfile", JSON.stringify(profile));
                updateUI(); // Update UI to show profile circle and logout button
                if (registerModal) registerModal.classList.add("change__invisible"); // Close the registration modal
            } catch (error) {
                if (registerErrorMessage) registerErrorMessage.textContent = 'Registration failed. Please try again.';
                console.error("Registration failed:", error);
            }
        });
    }

    // Handle user login
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (loginErrorMessage) loginErrorMessage.textContent = ''; // Clear previous error message

            const profilelogin = e.target.elements.profilelogin.value;
            const profilepassword = e.target.elements.profilepassword.value;

            if (!profilelogin || !profilepassword) {
                if (loginErrorMessage) loginErrorMessage.textContent = 'Please fill in all fields';
                return;
            }

            try {
                const profiles = await getProfiles();
                const user = profiles.find(profile => profile.login === profilelogin && profile.password === profilepassword);

                if (user) {
                    localStorage.setItem("userProfile", JSON.stringify(user));
                    updateUI(); // Update UI to show profile circle and logout button
                    if (loginModal) loginModal.classList.add("change__invisible"); // Close the login modal
                } else {
                    if (loginErrorMessage) loginErrorMessage.textContent = 'Invalid login or password. Please try again.';
                }
            } catch (error) {
                if (loginErrorMessage) loginErrorMessage.textContent = 'Login failed. Please try again.';
                console.error("Login failed:", error);
            }
        });
    }

    // Handle user logout
    if (profileCircle) {
        profileCircle.addEventListener("click", () => {
            localStorage.removeItem("userProfile");
            updateUI(); // Update UI to hide profile circle and logout button
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("userProfile");
            updateUI(); // Update UI to hide profile circle and logout button
        });
    }

    // Show the appropriate modal on button clicks
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

    // Show the registration modal when "Сбробувати" is clicked
    if (tryButton) {
        tryButton.addEventListener("click", () => {
            if (registerModal) registerModal.classList.remove("change__invisible");
        });
    }
});
