import { getProfiles, addProfile } from "./profileSystem";

document.addEventListener("DOMContentLoaded", () => {
  const profileCircle = document.querySelector(".profile__circle");
  const regButton = document.querySelector(".regButton");
  const logButton = document.querySelector(".logButton");
  const logoutButton = document.querySelector("#logout-button");
  const boardLink = document.querySelector("#board-link");
  const registerForm = document.querySelector(".register__form");
  const loginForm = document.querySelector(".login__form");
  const loginErrorMessage = loginForm
    ? loginForm.querySelector(".error-message")
    : null;
  const registerErrorMessage = registerForm
    ? registerForm.querySelector(".error-message")
    : null;
  const registerModal = document.querySelector(".register__modal");
  const loginModal = document.querySelector(".login__modal");
  const tryButton = document.querySelector(".tryButton");
  const updateUI = () => {
    const userProfile = localStorage.getItem("userProfile");

    if (profileCircle) {
      if (userProfile) {
        profileCircle.classList.remove("change__invisible");
        if (logoutButton) logoutButton.classList.remove("change__invisible");
        if (boardLink) boardLink.classList.remove("change__invisible");
        if (regButton) regButton.classList.add("change__invisible");
        if (logButton) logButton.classList.add("change__invisible");

        const user = JSON.parse(userProfile);
        profileCircle.textContent = user.name[0].toUpperCase();
      } else {
        profileCircle.classList.add("change__invisible");
        if (logoutButton) logoutButton.classList.add("change__invisible");
        if (boardLink) boardLink.classList.add("change__invisible");
        if (regButton) regButton.classList.remove("change__invisible");
        if (logButton) logButton.classList.remove("change__invisible");
      }
    }
  };

  const isLoginTaken = async (login) => {
    try {
      const profiles = await getProfiles();
      return profiles.some((profile) => profile.login === login);
    } catch (error) {
      console.error("Failed to check login availability:", error);
      return false;
    }
  };

  updateUI();

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (registerErrorMessage) registerErrorMessage.textContent = "";

      const profilename = e.target.elements.profilename.value;
      const profilesurname = e.target.elements.profilesurname.value;
      const profilelogin = e.target.elements.profilelogin.value;
      const profilepassword = e.target.elements.profilepassword.value;

      if (
        !profilename ||
        !profilesurname ||
        !profilelogin ||
        !profilepassword
      ) {
        if (registerErrorMessage)
          registerErrorMessage.textContent = "Please fill in all fields";
        return;
      }

      if (await isLoginTaken(profilelogin)) {
        if (registerErrorMessage)
          registerErrorMessage.textContent =
            "Login is already taken. Please choose another one.";
        return;
      }

      const profile = {
        name: profilename,
        surname: profilesurname,
        login: profilelogin,
        password: profilepassword,
      };

      try {
        await addProfile(profile);
        localStorage.setItem("userProfile", JSON.stringify(profile));
        updateUI();
        if (registerModal) registerModal.classList.add("change__invisible");
      } catch (error) {
        if (registerErrorMessage)
          registerErrorMessage.textContent =
            "Registration failed. Please try again.";
        console.error("Registration failed:", error);
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (loginErrorMessage) loginErrorMessage.textContent = "";

      const profilelogin = e.target.elements.profilelogin.value;
      const profilepassword = e.target.elements.profilepassword.value;

      if (!profilelogin || !profilepassword) {
        if (loginErrorMessage)
          loginErrorMessage.textContent = "Please fill in all fields";
        return;
      }

      try {
        const profiles = await getProfiles();
        const user = profiles.find(
          (profile) =>
            profile.login === profilelogin &&
            profile.password === profilepassword
        );

        if (user) {
          localStorage.setItem("userProfile", JSON.stringify(user));
          updateUI();
          if (loginModal) loginModal.classList.add("change__invisible");
        } else {
          if (loginErrorMessage)
            loginErrorMessage.textContent =
              "Invalid login or password. Please try again.";
        }
      } catch (error) {
        if (loginErrorMessage)
          loginErrorMessage.textContent = "Login failed. Please try again.";
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

  const closeModal = (modal) => {
    if (modal) modal.classList.add("change__invisible");
  };

  const modalCloseButtons = document.querySelectorAll(".modal__close");
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  const modalBackgrounds = document.querySelectorAll(".modal-background");
  modalBackgrounds.forEach((background) => {
    background.addEventListener("click", (e) => {
      if (e.target === background) {
        const modal = e.target.closest(".modal");
        if (modal) closeModal(modal);
      }
    });
  });
});
