document.addEventListener("DOMContentLoaded", ()=>{
    const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    const showCoursesButton = document.getElementById("showCourses");
    const courseModal = document.getElementById("courseModal");
    const closeModal = document.querySelector(".close");
    const courseList = document.getElementById("courseList");
    const addedCourses = document.getElementById("addedCourses");
    const profileCircle = document.getElementById("profileCircle");
    if (userProfile.name) {
        profileCircle.textContent = userProfile.name.charAt(0).toUpperCase();
        profileCircle.href = "../pages/settings.html";
    } else profileCircle.style.display = "none";
    const renderAddedCourses = ()=>{
        addedCourses.innerHTML = "<h3>\u0414\u043E\u0434\u0430\u043D\u0456 \u043A\u0443\u0440\u0441\u0438:</h3>";
        if (userProfile.courses && userProfile.courses.length > 0) userProfile.courses.forEach((course)=>{
            const courseBox = document.createElement("div");
            courseBox.classList.add("course-box");
            const a = document.createElement("a");
            a.textContent = course.name;
            a.href = course.link;
            a.classList.add("course-link");
            courseBox.appendChild(a);
            addedCourses.appendChild(courseBox);
        });
    };
    const addCourse = async (course)=>{
        if (!userProfile.courses) userProfile.courses = [];
        if (!userProfile.courses.find((c)=>c.id === course.id)) {
            userProfile.courses.push(course);
            localStorage.setItem("userProfile", JSON.stringify(userProfile));
            await saveCourseToAPI(userProfile);
            renderAddedCourses();
            alert(`\u{41A}\u{443}\u{440}\u{441} ${course.name} \u{434}\u{43E}\u{434}\u{430}\u{43D}\u{43E} \u{434}\u{43E} \u{432}\u{430}\u{448}\u{43E}\u{433}\u{43E} \u{43F}\u{440}\u{43E}\u{444}\u{456}\u{43B}\u{44E}`);
        } else alert("\u0426\u0435\u0439 \u043A\u0443\u0440\u0441 \u0432\u0436\u0435 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044E");
    };
    const saveCourseToAPI = async (profile)=>{
        try {
            await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${profile.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            });
        } catch (error) {
            console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u0456 \u043A\u0443\u0440\u0441\u0443 \u0434\u043E API", error);
        }
    };
    showCoursesButton.onclick = ()=>{
        courseModal.style.display = "block";
    };
    closeModal.onclick = ()=>{
        courseModal.style.display = "none";
    };
    window.onclick = (event)=>{
        if (event.target == courseModal) courseModal.style.display = "none";
    };
    courseList.addEventListener("click", (event)=>{
        if (event.target.classList.contains("course-link")) {
            event.preventDefault();
            const link = event.target;
            const course = {
                id: parseInt(link.getAttribute("data-id")),
                name: link.getAttribute("data-name"),
                link: link.getAttribute("href")
            };
            addCourse(course);
            link.style.display = "none";
        }
    });
    renderAddedCourses();
});

//# sourceMappingURL=dashboard.f6513ea3.js.map
