document.addEventListener("DOMContentLoaded", () => {
  const lessons = [
    {
      id: 1,
      name: "Вступ до хімії",
      content: `
        <h2>Вступ до хімії</h2>
        <p>Цей урок є основою для розуміння хімії як науки. Ми почнемо з визначення хімії та її значення у нашому житті...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%92%D1%81%D1%82%D1%83%D0%BF+%D0%B4%D0%BE+%D1%85%D1%96%D0%BC%D1%96%D1%97" alt="Вступ до хімії" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/hM-pRag3aqQ?si=hB-HntSzEJeNZ8KJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/hM-pRag3aqQ?si=hB-HntSzEJeNZ8KJ"
    },
    {
      id: 2,
      name: "Хімічні реакції",
      content: `
        <h2>Хімічні реакції</h2>
        <p>Хімічні реакції - це процеси, під час яких одна або кілька речовин перетворюються на інші. У цьому уроці ми розглянемо різні типи хімічних реакцій...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%A5%D1%96%D0%BC%D1%96%D1%87%D0%BD%D1%96+%D1%80%D0%B5%D0%B0%D0%BA%D1%86%D1%96%D1%97" alt="Хімічні реакції" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2"
    },
    {
      id: 3,
      name: "Стихіометрія",
      content: `
        <h2>Стихіометрія</h2>
        <p>Стихіометрія є важливою частиною хімії, яка дозволяє розраховувати кількість реагентів і продуктів у хімічних реакціях...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%A1%D1%82%D0%B8%D1%85%D1%96%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D1%96%D1%8F" alt="Стихіометрія" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3"
    },
    {
      id: 4,
      name: "Стан речовин",
      content: `
        <h2>Стан речовин</h2>
        <p>У цьому уроці ми вивчимо різні стани речовин: тверді, рідкі та газоподібні...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%A1%D1%82%D0%B0%D0%BD+%D1%80%D0%B5%D1%87%D0%BE%D0%B2%D0%B8%D0%BD" alt="Стан речовин" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4"
    },
    {
      id: 5,
      name: "Кислоти та основи",
      content: `
        <h2>Кислоти та основи</h2>
        <p>У цьому уроці ми вивчимо властивості кислот і основ, їхні реакції та застосування...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%B8+%D1%82%D0%B0+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B8" alt="Кислоти та основи" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5"
    }
  ];

  const lessonsContainer = document.getElementById("lessonsContainer");
  const lessonModal = document.getElementById("lessonModal");
  const lessonContent = document.getElementById("lessonContent");

  // Добавляем кнопки для уроков
  lessons.forEach(lesson => {
    const button = document.createElement("button");
    button.textContent = lesson.name;
    button.className = "lesson-button";
    button.addEventListener("click", () => {
      lessonContent.innerHTML = lesson.content;
      lessonModal.style.display = "flex";
    });
    lessonsContainer.appendChild(button);
  });

  // Закрытие модалки при клике за пределами
  window.addEventListener("click", (event) => {
    if (event.target === lessonModal) {
      lessonModal.style.display = "none";
    }
  });

  // Обновление иконки профиля
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
