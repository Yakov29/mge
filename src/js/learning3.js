document.addEventListener("DOMContentLoaded", () => {
    const lessons = [
      {
        id: 1,
        name: "Основи аналітичної хімії",
        content: `Аналітична хімія є галуззю хімії, яка займається вивченням складу речовин і визначенням їхніх компонентів. У цьому уроці ми розглянемо основи аналітичних методів, таких як якісний і кількісний аналіз. Якісний аналіз допомагає виявити присутність певних елементів або сполук у зразку, тоді як кількісний аналіз дозволяє визначити їхню концентрацію. Вивчимо основи лабораторних методів, таких як титрування, спектроскопія та хроматографія. Цей урок надасть знання про основи аналітичних методів і їхнє застосування в науці і промисловості.`
      },
      {
        id: 2,
        name: "Методи якісного аналізу",
        content: `Якісний аналіз в аналітичній хімії є методикою, яка дозволяє визначити наявність певних іонів або молекул у зразку. У цьому уроці ми розглянемо різні методи якісного аналізу, такі як реакції осадження, кольорові реакції і тестування на присутність певних елементів. Вивчимо, як використовувати хімічні реакції для виявлення різних компонентів у зразках. Обговоримо основи роботи з хімічними реактивами, інструментами і техніками, які використовуються для якісного аналізу.`
      },
      {
        id: 3,
        name: "Методи кількісного аналізу",
        content: `Кількісний аналіз в аналітичній хімії дозволяє визначити точну концентрацію компонентів у зразку. У цьому уроці ми розглянемо різні методи кількісного аналізу, включаючи титрування, спектрофотометрію і мас-спектрометрію. Вивчимо основи титрування, техніку додавання реактиву до зразка до досягнення точки еквівалентності. Обговоримо використання спектрофотометрії для вимірювання поглинання світла певної довжини хвилі і мас-спектрометрії для визначення молекулярної маси і складу зразка.`
      },
      {
        id: 4,
        name: "Хроматографічні методи",
        content: `Хроматографія є технікою розділення компонентів суміші на основі їхніх фізико-хімічних властивостей. У цьому уроці ми розглянемо різні види хроматографії, такі як тонкошарова хроматографія (ТСХ), рідинна хроматографія (РХ) і газова хроматографія (ГХ). Вивчимо, як використовувати ці методи для розділення і аналізу компонентів суміші. Обговоримо принципи роботи хроматографічних колонок, стаціонарних і рухомих фаз, а також інтерпретацію хроматографічних даних.`
      },
      {
        id: 5,
        name: "Сучасні аналітичні техніки",
        content: `Сучасні аналітичні техніки постійно розвиваються, впроваджуючи нові методи і інструменти для аналізу речовин. У цьому уроці ми розглянемо новітні технології, такі як атомно-абсорбційна спектроскопія, мас-спектрометрія з індуктивно зв'язаною плазмою і ядерний магнітний резонанс (ЯМР). Вивчимо, як ці техніки використовуються для аналізу різних матеріалів, включаючи біологічні зразки, довкілля і промислові продукти. Обговоримо їхні переваги і обмеження в порівнянні з традиційними методами аналітичної хімії.`
      }
    ];

    const lessonsContainer = document.getElementById("lessonsContainer");
    const lessonModal = document.getElementById("lessonModal");
    const lessonContent = document.getElementById("lessonContent");
    const completeLessonButton = document.getElementById("completeLessonButton");

    // Add lesson buttons
    lessons.forEach(lesson => {
      const button = document.createElement("button");
      button.textContent = lesson.name;
      button.addEventListener("click", () => {
        lessonContent.innerHTML = `
          <h2>${lesson.name}</h2>
          <p>${lesson.content}</p>
        `;
        completeLessonButton.setAttribute("data-lesson-id", lesson.id);
        lessonModal.style.display = "flex";
      });
      lessonsContainer.appendChild(button);
    });

    // Handle lesson completion
    completeLessonButton.addEventListener("click", () => {
      const lessonId = completeLessonButton.getAttribute("data-lesson-id");
      const userProfile = JSON.parse(localStorage.getItem("userProfile"));
      if (userProfile) {
        fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${userProfile.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...userProfile,
            courses: userProfile.courses.map(course =>
              course.id === parseInt(lessonId) ? { ...course, completed: true } : course
            )
          })
        })
        .then(response => response.json())
        .then(() => {
          lessonModal.style.display = "none";
        });
      }
    });

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === lessonModal) {
        lessonModal.style.display = "none";
      }
    });

    // Profile circle setup
    const profileButton = document.querySelector("#profileCircle");

    const updateProfileButton = () => {
      const userProfile = localStorage.getItem("userProfile");
      if (userProfile) {
        const user = JSON.parse(userProfile);
        profileButton.textContent = user.name[0].toUpperCase();
      } else {
        profileButton.style.display = "none";
      }
    };

    updateProfileButton();
  });