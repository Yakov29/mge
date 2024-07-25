document.addEventListener("DOMContentLoaded", ()=>{
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
    const userList = document.querySelector("#userList");
    const userConversationModal = document.querySelector("#userConversationModal");
    const closeUserConversationModalButton = document.querySelector("#closeUserConversationModal");
    const conversationTitle = document.querySelector("#conversationTitle");
    const conversationMessages = document.querySelector("#conversationMessages");
    const userSearchInput = document.querySelector("#userSearchInput");
    const searchButton = document.querySelector("#searchButton");
    const handleNotificationSubmit = async (e)=>{
        e.preventDefault();
        const message = document.querySelector("#notificationMessage").value;
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const login = userProfile ? userProfile.login : null;
        if (!login) return;
        try {
            const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const users = await response.json();
            const user = users[0];
            const updatedNotifications = Array.isArray(user.notifications) ? [
                ...user.notifications,
                message
            ] : [
                message
            ];
            const updateResponse = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...user,
                    notifications: updatedNotifications
                })
            });
            if (!updateResponse.ok) throw new Error("Network response was not ok");
            await fetchNotifications();
            if (notificationForm) notificationForm.reset();
        } catch (error) {
            console.error("Sending notification failed:", error);
        }
    };
    const fetchNotifications = async ()=>{
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const login = userProfile ? userProfile.login : null;
        if (!login) return;
        try {
            const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const users = await response.json();
            const notifications = users[0]?.notifications || [];
            if (notificationsList) notificationsList.innerHTML = notifications.map((notification, index)=>`<div class="notification-item">
                        <p>${notification}</p>
                        <button data-index="${index}" class="delete-notification">&times;</button>
                    </div>`).join("");
            addDeleteEventListeners();
        } catch (error) {
            console.error("Fetching notifications failed:", error);
        }
    };
    const addDeleteEventListeners = ()=>{
        const deleteButtons = document.querySelectorAll(".delete-notification");
        deleteButtons.forEach((button)=>{
            button.addEventListener("click", async ()=>{
                const index = button.dataset.index;
                const userProfile = JSON.parse(localStorage.getItem("userProfile"));
                const login = userProfile ? userProfile.login : null;
                if (!login) return;
                try {
                    const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
                    if (!response.ok) throw new Error("Network response was not ok");
                    const users = await response.json();
                    const user = users[0];
                    const updatedNotifications = user.notifications.filter((_, i)=>i !== parseInt(index));
                    const updateResponse = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${user.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ...user,
                            notifications: updatedNotifications
                        })
                    });
                    if (!updateResponse.ok) throw new Error("Network response was not ok");
                    await fetchNotifications();
                } catch (error) {
                    console.error("Deleting notification failed:", error);
                }
            });
        });
    };
    const handleSearch = async ()=>{
        const searchTerm = userSearchInput.value.toLowerCase();
        try {
            const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts`);
            if (!response.ok) throw new Error("Network response was not ok");
            const users = await response.json();
            const filteredUsers = users.filter((user)=>user.name.toLowerCase().includes(searchTerm) || user.surname.toLowerCase().includes(searchTerm));
            userList.innerHTML = filteredUsers.map((user)=>`<div>
                    <p>${user.name} ${user.surname}</p>
                    <button class="view-conversation" data-user="${user.id}">\u{41F}\u{435}\u{440}\u{435}\u{433}\u{43B}\u{44F}\u{43D}\u{443}\u{442}\u{438} \u{440}\u{43E}\u{437}\u{43C}\u{43E}\u{432}\u{443}</button>
                </div>`).join("");
            addViewConversationEventListeners();
        } catch (error) {
            console.error("Search failed:", error);
        }
    };
    const addViewConversationEventListeners = ()=>{
        const viewConversationButtons = document.querySelectorAll(".view-conversation");
        viewConversationButtons.forEach((button)=>{
            button.addEventListener("click", async ()=>{
                const userId = button.dataset.user;
                try {
                    const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${userId}`);
                    if (!response.ok) throw new Error("Network response was not ok");
                    const user = await response.json();
                    conversationTitle.textContent = `${user.name} ${user.surname}`;
                    conversationMessages.innerHTML = user.conversationMessages.map((msg)=>`<div><p>${msg}</p></div>`).join("");
                    userConversationModal.style.display = "flex";
                } catch (error) {
                    console.error("Fetching conversation failed:", error);
                }
            });
        });
    };
    const handleProfileFormSubmit = async (e)=>{
        e.preventDefault();
        const name = profileName.value;
        const surname = document.querySelector("#profileSurname").value;
        const password = document.querySelector("#profilePassword").value;
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        const login = userProfile ? userProfile.login : null;
        if (!login) return;
        try {
            const response = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts?login=${login}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const users = await response.json();
            const user = users[0];
            const updateResponse = await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...user,
                    name,
                    surname,
                    password
                })
            });
            if (!updateResponse.ok) throw new Error("Network response was not ok");
            localStorage.setItem("userProfile", JSON.stringify({
                ...user,
                name,
                surname,
                password
            }));
            profileModal.style.display = "none";
        } catch (error) {
            console.error("Updating profile failed:", error);
        }
    };
    const closeModal = (modal)=>{
        modal.style.display = "none";
    };
    profileButton.addEventListener("click", ()=>{
        profileModal.style.display = "flex";
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (userProfile) {
            profileName.value = userProfile.name || "";
            document.querySelector("#profileSurname").value = userProfile.surname || "";
        }
    });
    closeProfileModalButton.addEventListener("click", ()=>closeModal(profileModal));
    closeNotificationsModalButton.addEventListener("click", ()=>closeModal(notificationsModal));
    closeUserConversationModalButton.addEventListener("click", ()=>closeModal(userConversationModal));
    notificationsButton.addEventListener("click", ()=>{
        notificationsModal.style.display = "flex";
        fetchNotifications();
    });
    settingsForm.addEventListener("submit", handleProfileFormSubmit);
    notificationForm.addEventListener("submit", handleNotificationSubmit);
    searchButton.addEventListener("click", handleSearch);
    window.addEventListener("click", (event)=>{
        if (event.target === profileModal) closeModal(profileModal);
        if (event.target === notificationsModal) closeModal(notificationsModal);
        if (event.target === userConversationModal) closeModal(userConversationModal);
    });
});

//# sourceMappingURL=settings.4b1c9ff4.js.map
