document.addEventListener("DOMContentLoaded", async () => {
  const profileCircle = document.getElementById("profileCircle");
  const coursesSection = document.getElementById("coursesSection");

  const updateProfileButton = () => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      const user = JSON.parse(userProfile);
      profileCircle.textContent = user.name[0].toUpperCase();
      profileCircle.style.display = "flex";
    } else {
      profileCircle.style.display = "none";
    }
  };

  const fetchProfileData = async () => {
    try {
      const response = await fetch(
        "https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Ошибка при загрузке данных профиля:", error);
      return {};
    }
  };

  const renderCourseSections = (courses) => {
    coursesSection.innerHTML = "";

    const sections = [
      { name: "Хімія 101", id: 1 },
      { name: "Органічна хімія", id: 2 },
      { name: "Аналітична хімія", id: 3 },
    ];

    sections.forEach((section) => {
      const sectionCourses = courses.filter(
        (course) => course.id === section.id
      );

      if (sectionCourses.length > 0) {
        const sectionElement = document.createElement("div");
        sectionElement.innerHTML = `
                    <h3 class="lessons__chapter-title">${section.name}</h3>
                    <ul class="lessons__chapter">
                        ${sectionCourses
                          .map(
                            (course) => `
                            <li class="lessons__lesson">
                                <a href="${course.link}" class="lessons__lesson-link">${course.name}</a>
                            </li>
                        `
                          )
                          .join("")}
                    </ul>
                `;
        coursesSection.appendChild(sectionElement);
      }
    });
  };

  const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const profileData = await fetchProfileData();

  updateProfileButton();

  if (userProfile.courses && userProfile.courses.length > 0) {
    renderCourseSections(userProfile.courses);
  } else if (profileData.courses && profileData.courses.length > 0) {
    renderCourseSections(profileData.courses);
  }
});
