document.addEventListener("DOMContentLoaded", () => {
    const profileButton = document.querySelector("#profileCircle");
    const profileModal = document.querySelector("#profileModal");
    const notificationsModal = document.querySelector("#notificationsModal");
    const closeProfileModalButton = document.querySelector("#closeProfileModal");
    const closeNotificationsModalButton = document.querySelector("#closeNotificationsModal");
    const notificationsButton = document.querySelector("#notificationsButton");
    const settingsForm = document.querySelector("#settingsForm");
    const profileName = document.querySelector("#profileName");
    const notificationForm = document.querySelector("#notificationForm");
    const notificationsList = document.querySelector("#notificationsList");

    const handleNotificationSubmit = async (e) => {
        e.preventDefault();
        const message = document.querySelector("#notificationMessage").value;
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const login = userProfile ? userProfile.login : null;

        if (!login) {
            console.error('User login is not available.');
            return;
        }

        try {
            const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const users = await response.json();
            const user = users[0];

            const updatedNotifications = Array.isArray(user.notifications) ? [...user.notifications, message] : [message];

            const updateResponse = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...user,
                    notifications: updatedNotifications
                }),
            });
            if (!updateResponse.ok) throw new Error('Network response was not ok');

            await fetchNotifications();
            if (notificationForm) notificationForm.reset();
        } catch (error) {
            console.error('Sending notification failed:', error);
        }
    };

    const fetchNotifications = async () => {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const login = userProfile ? userProfile.login : null;

        if (!login) {
            console.error('User login is not available.');
            return;
        }

        try {
            const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const users = await response.json();
            const notifications = users[0]?.notifications || [];
            if (notificationsList) {
                notificationsList.innerHTML = notifications.map((notification, index) =>
                    `<div class="notification-item">
                        <p>${notification}</p>
                        <button data-index="${index}" class="delete-notification">&times;</button>
                    </div>`
                ).join('');
            }
            addDeleteEventListeners();
        } catch (error) {
            console.error('Fetching notifications failed:', error);
        }
    };

    const addDeleteEventListeners = () => {
        const deleteButtons = document.querySelectorAll(".delete-notification");
        deleteButtons.forEach(button => {
            button.addEventListener("click", async () => {
                const index = button.dataset.index;
                const userProfile = JSON.parse(localStorage.getItem("userProfile"));
                const login = userProfile ? userProfile.login : null;

                if (!login) {
                    console.error('User login is not available.');
                    return;
                }

                try {
                    const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    if (!response.ok) throw new Error('Network response was not ok');
                    const users = await response.json();
                    const user = users[0];

                    const updatedNotifications = user.notifications.filter((_, i) => i !== parseInt(index, 10));

                    const updateResponse = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${user.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            ...user,
                            notifications: updatedNotifications
                        }),
                    });
                    if (!updateResponse.ok) throw new Error('Network response was not ok');

                    await fetchNotifications();
                } catch (error) {
                    console.error('Deleting notification failed:', error);
                }
            });
        });
    };

    const handleProfileModalOpen = () => {
        if (profileModal) profileModal.style.display = "flex";
    };

    const handleNotificationsModalOpen = () => {
        if (notificationsModal) {
            notificationsModal.style.display = "flex";
            fetchNotifications(); // Загрузка уведомлений при открытии модального окна
        }
    };

    const handleCloseProfileModal = () => {
        if (profileModal) profileModal.style.display = "none";
    };

    const handleCloseNotificationsModal = () => {
        if (notificationsModal) notificationsModal.style.display = "none";
    };

    const updateProfileButton = async () => {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const login = userProfile ? userProfile.login : null;

        if (login) {
            try {
                const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const users = await response.json();
                const user = users[0];
                if (profileButton) {
                    profileButton.textContent = user.name[0].toUpperCase();
                    profileButton.style.display = "flex";
                }
                if (profileName) profileName.textContent = `${user.name} ${user.surname}`;
            } catch (error) {
                console.error('Fetching user profile failed:', error);
            }
        } else {
            if (profileButton) profileButton.style.display = "none";
            if (profileName) profileName.textContent = "Ім'я користувача";
        }
    };

    if (profileButton) {
        profileButton.addEventListener("click", handleProfileModalOpen);
    }

    if (closeProfileModalButton) {
        closeProfileModalButton.addEventListener("click", handleCloseProfileModal);
    }

    if (notificationsButton) {
        notificationsButton.addEventListener("click", handleNotificationsModalOpen);
    }

    if (closeNotificationsModalButton) {
        closeNotificationsModalButton.addEventListener("click", handleCloseNotificationsModal);
    }

    if (settingsForm) {
        settingsForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(settingsForm);
            const data = Object.fromEntries(formData.entries());
            const userProfile = JSON.parse(localStorage.getItem("userProfile"));
            const login = userProfile ? userProfile.login : null;

            if (!login) {
                console.error('User login is not available.');
                return;
            }

            try {
                const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const users = await response.json();
                const user = users[0];

                const updateResponse = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${user.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...user,
                        ...data
                    }),
                });
                if (!updateResponse.ok) throw new Error('Network response was not ok');
                alert("Налаштування збережено");
                handleCloseProfileModal();
            } catch (error) {
                console.error('Updating profile failed:', error);
            }
        });
    }

    if (notificationForm) {
        notificationForm.addEventListener("submit", handleNotificationSubmit);
    }

    updateProfileButton();
});
