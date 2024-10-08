document.addEventListener("DOMContentLoaded", () => {
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
  } else {
    profileCircle.style.display = "none";
  }

  const renderAddedCourses = () => {
    addedCourses.innerHTML = "<h3>Додані курси:</h3>";
    if (userProfile.courses && userProfile.courses.length > 0) {
      userProfile.courses.forEach((course) => {
        const courseBox = document.createElement("div");
        courseBox.classList.add("course-box");
        const a = document.createElement("a");
        a.textContent = course.name;
        a.href = course.link;
        a.classList.add("course-link");
        courseBox.appendChild(a);
        addedCourses.appendChild(courseBox);
      });
    }
  };

  const addCourse = async (course) => {
    if (!userProfile.courses) {
      userProfile.courses = [];
    }

    if (!userProfile.courses.find((c) => c.id === course.id)) {
      userProfile.courses.push(course);
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      await saveCourseToAPI(userProfile);
      renderAddedCourses();
      alert(`Курс ${course.name} додано до вашого профілю`);
    } else {
      alert("Цей курс вже додано до вашого профілю");
    }
  };

  const saveCourseToAPI = async (profile) => {
    try {
      await fetch(
        `https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${profile.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        }
      );
    } catch (error) {
      console.error("Помилка при збереженні курсу до API", error);
    }
  };

  showCoursesButton.onclick = () => {
    courseModal.style.display = "block";
  };

  closeModal.onclick = () => {
    courseModal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == courseModal) {
      courseModal.style.display = "none";
    }
  };

  courseList.addEventListener("click", (event) => {
    if (event.target.classList.contains("course-link")) {
      event.preventDefault();
      const link = event.target;
      const course = {
        id: parseInt(link.getAttribute("data-id")),
        name: link.getAttribute("data-name"),
        link: link.getAttribute("href"),
      };
      addCourse(course);
      link.style.display = "none";
    }
  });

  renderAddedCourses();
});
document.addEventListener("DOMContentLoaded", () => {
  const calendarDays = document.querySelector("#calendarDays");
  const eventForm = document.querySelector("#eventForm");
  const eventList = document.querySelector("#eventList");
  const eventDateInput = document.querySelector("#eventDate");
  const eventTitleInput = document.querySelector("#eventTitle");
  const calendarTitle = document.querySelector("#calendarTitle");
  const prevMonthButton = document.querySelector("#prevMonth");
  const nextMonthButton = document.querySelector("#nextMonth");

  let currentMonth;
  let currentYear;

  function initializeCalendar() {
    const now = new Date();
    currentMonth = now.getMonth();
    currentYear = now.getFullYear();
    renderCalendar();
  }

  function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    calendarTitle.textContent = `${firstDayOfMonth.toLocaleString('uk-UA', { month: 'long' })} ${currentYear}`;

    calendarDays.innerHTML = '';

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      calendarDays.innerHTML += '<div class="calendar-day"></div>';
    }

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      calendarDays.innerHTML += `<div class="calendar-day" data-date="${currentYear}-${currentMonth + 1}-${day}">${day}</div>`;
    }

    const daysInWeek = 7;
    const totalDays = firstDayOfMonth.getDay() + lastDayOfMonth.getDate();
    const remainingDays = (daysInWeek - (totalDays % daysInWeek)) % daysInWeek;
    for (let i = 0; i < remainingDays; i++) {
      calendarDays.innerHTML += '<div class="calendar-day"></div>';
    }

    loadEvents();
  }

  function loadEvents() {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    eventList.innerHTML = '';

    events.forEach(event => {
      const eventElement = document.createElement("div");
      eventElement.className = "event";
      eventElement.innerHTML = `
        <span class="event-date">${new Date(event.date).toLocaleDateString('uk-UA')}</span>
        <span class="event-title">${event.title}</span>
        <button class="delete-event" data-date="${event.date}" data-title="${event.title}">Видалити</button>
      `;
      eventList.appendChild(eventElement);
    });
  }

  function saveEvent(event) {
    event.preventDefault();
    
    const date = eventDateInput.value;
    const title = eventTitleInput.value;
    
    if (date && title) {
      const events = JSON.parse(localStorage.getItem("events")) || [];
      events.push({ date, title });
      localStorage.setItem("events", JSON.stringify(events));
      eventDateInput.value = '';
      eventTitleInput.value = '';
      renderCalendar();
    }
  }

  function deleteEvent(date, title) {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = events.filter(event => event.date !== date || event.title !== title);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    renderCalendar();
  }

  eventForm.addEventListener("submit", saveEvent);

  eventList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-event")) {
      const date = event.target.getAttribute("data-date");
      const title = event.target.getAttribute("data-title");
      deleteEvent(date, title);
    }
  });

  prevMonthButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  nextMonthButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

  initializeCalendar();
});
