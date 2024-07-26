document.addEventListener("DOMContentLoaded", () => {
  const lessons = [
    {
      id: 1,
      name: "Вступ до хімії",
      content: `
        <h2>Вступ до хімії</h2>
        <p>Цей урок є основою для розуміння хімії як науки. Ми почнемо з визначення хімії та її значення у нашому житті...</p>
        <img src="https://lh6.googleusercontent.com/proxy/kPcB3IMLYpyfQC_kpt3bLz_7LQgWgbSa6LU0q1ICFFUG582ME1ffpsEzNc4290pIYWdz6yjyjF4tTBD-84RNAFiI5Xlkb8xQ2hiJAskBAmArtk07ofo9-Q" alt="Вступ до хімії" style="width: 100%; height: auto; margin-bottom: 20px;">
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
        <img src="https://fs02.vseosvita.ua/0200lbt4-2d2f-940x588.png" alt="Хімічні реакції" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/UNSBcPE5Vus?si=hfu0dk_-OcmibMXQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/UNSBcPE5Vus?si=hfu0dk_-OcmibMXQ"
    },
    {
      id: 3,
      name: "Стихіометрія",
      content: `
        <h2>Стихіометрія</h2>
        <p>Стихіометрія є важливою частиною хімії, яка дозволяє розраховувати кількість реагентів і продуктів у хімічних реакціях...</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kbSehz6zE5q77LpyjabrR2Sl5_lJ4Okwpg&s" alt="Стихіометрія" style="width: 100%; height: auto; margin-bottom: 20px;">
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
        <img src="https://naurok.com.ua/uploads/files/520372/327799/363474_images/10.jpg" alt="Стан речовин" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ww1VSHb_FCg?si=d4X-dtwgRiAnsa1l" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/Ww1VSHb_FCg?si=d4X-dtwgRiAnsa1l"
    },
    {
      id: 5,
      name: "Кислоти та основи",
      content: `
        <h2>Кислоти та основи</h2>
        <p>У цьому уроці ми вивчимо властивості кислот і основ, їхні реакції та застосування...</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1lMK9tJHpvcHjvQmraq00fW9wPu0g3mNIg&s" alt="Кислоти та основи" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/u6rC3jJzg2w?si=l-sjHOmFKjsGuD48" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
      youtubeUrl: "https://www.youtube.com/embed/u6rC3jJzg2w?si=l-sjHOmFKjsGuD48"
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
