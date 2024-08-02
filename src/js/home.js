document.addEventListener("DOMContentLoaded", () => {
  const modals = {
    register: document.querySelector(".register__modal"),
    login: document.querySelector(".login__modal"),
    adminRequest: document.querySelector("#adminRequestModal"),
  };

  const buttons = {
    register: document.querySelector(".regButton"),
    login: document.querySelector(".logButton"),
    adminRequest: document.querySelector(".work__send__btn"),
  };

  const closeButtons = {
    register: modals.register.querySelector(".cross__svg"),
    login: modals.login.querySelector(".cross__svg"),
    adminRequest: modals.adminRequest.querySelector(".cross__svg"),
  };

  const openModal = (modal) => {
    modal.classList.remove("change__invisible");
  };

  const closeModal = (modal) => {
    modal.classList.add("change__invisible");
  };

  const setupModalEvent = (modal, openButton, closeButton) => {
    openButton.addEventListener("click", () => {
      openModal(modal);
    });

    closeButton.addEventListener("click", () => {
      closeModal(modal);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        !modal.classList.contains("change__invisible")
      ) {
        closeModal(modal);
      }
    });
  };

  setupModalEvent(modals.register, buttons.register, closeButtons.register);
  setupModalEvent(modals.login, buttons.login, closeButtons.login);
  setupModalEvent(
    modals.adminRequest,
    buttons.adminRequest,
    closeButtons.adminRequest
  );

  const submitAdminRequestButton = document.querySelector(
    "#submitAdminRequest"
  );
  const adminConfirmationInput = document.querySelector("#adminConfirmation");
  const userNameElement = document.querySelector("#userName");

  submitAdminRequestButton.addEventListener("click", async () => {
    const confirmationText = adminConfirmationInput.value.trim().toLowerCase();
    if (confirmationText === "так") {
      const user = JSON.parse(localStorage.getItem("userProfile"));
      if (user && user.login) {
        try {
          const response = await fetch(
            "https://669a78899ba098ed61ffc5a3.mockapi.io/accounts"
          );
          const users = await response.json();

          const userToUpdate = users.find((u) => u.login === user.login);

          if (userToUpdate) {
            const updateResponse = await fetch(
              `https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${userToUpdate.id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...userToUpdate, admin: true }),
              }
            );

            if (updateResponse.ok) {
              alert("Ви стали адміністратором!");
              closeModal(modals.adminRequest);
            } else {
              const errorData = await updateResponse.json();
              console.error(
                `Error ${updateResponse.status}: ${errorData.message}`
              );
              alert("Помилка при оновленні. Спробуйте ще раз.");
            }
          } else {
            alert("Користувача не знайдено.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Помилка при оновленні. Спробуйте ще раз.");
        }
      } else {
        alert("Ви не увійшли в систему.");
      }
    } else {
      alert("Введіть 'так', щоб підтвердити.");
    }
  });
});
