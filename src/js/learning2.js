document.addEventListener("DOMContentLoaded", () => {
    const lessons = [
      {
        id: 1,
        name: "Основи органічної хімії",
        content: `
          <h2>Основи органічної хімії</h2>
          <p>У цьому уроці ми ознайомимося з основними поняттями органічної хімії, такими як органічні сполуки, їх класифікація та властивості. Ми розглянемо значення органічних сполук у природі та промисловості.</p>
          <img src="https://via.placeholder.com/800x400?text=%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B8+%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D1%85%D1%96%D0%BC%D1%96%D1%97" alt="Основи органічної хімії" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_1"
      },
      {
        id: 2,
        name: "Гомологічний ряд алканів",
        content: `
          <h2>Гомологічний ряд алканів</h2>
          <p>В цьому уроці ми розглянемо гомологічний ряд алканів, їхні властивості, методи синтезу та застосування. Ви дізнаєтеся про фізичні та хімічні властивості алканів та їхні структурні особливості.</p>
          <img src="https://via.placeholder.com/800x400?text=%D0%93%D0%BE%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B8%D0%B9+%D1%80%D1%8F%D0%B4+%D0%B0%D0%BB%D0%BA%D0%B0%D0%BD%D1%96%D0%B2" alt="Гомологічний ряд алканів" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2"
      },
      {
        id: 3,
        name: "Хімічні властивості алкенів та алкінів",
        content: `
          <h2>Хімічні властивості алкенів та алкінів</h2>
          <p>У цьому уроці ми розглянемо хімічні властивості алкенів та алкінів, їхні реакції та механізми. Ми також ознайомимося з методами синтезу і застосуванням цих сполук у промисловості.</p>
          <img src="https://via.placeholder.com/800x400?text=%D0%A5%D1%96%D0%BC%D1%96%D1%87%D0%BD%D1%96+%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D1%96+%D0%B0%D0%BB%D0%BA%D0%B5%D0%BD%D1%96%D0%B2+%D1%82%D0%B0+%D0%B0%D0%BB%D0%BA%D1%96%D0%BD%D1%96%D0%B2" alt="Хімічні властивості алкенів та алкінів" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3"
      },
      {
        id: 4,
        name: "Функціональні групи органічних сполук",
        content: `
          <h2>Функціональні групи органічних сполук</h2>
          <p>У цьому уроці ми вивчимо різні функціональні групи органічних сполук, їхню структуру та реакційну здатність. Ви дізнаєтеся про спирти, альдегіди, кетони та інші групи.</p>
          <img src="https://via.placeholder.com/800x400?text=%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%96+%D0%B3%D1%80%D1%83%D0%BF%D0%B8+%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D1%87%D0%BD%D0%B8%D1%85+%D1%81%D0%BF%D0%BE%D0%BB%D1%83%D0%BA" alt="Функціональні групи органічних сполук" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4"
      },
      {
        id: 5,
        name: "Органічні реакції",
        content: `
          <h2>Органічні реакції</h2>
          <p>Вивчимо основні типи органічних реакцій, такі як заміщення, додавання та елімінація. Ми також ознайомимося з умовами їх протікання та прикладами з життя.</p>
          <img src="https://via.placeholder.com/800x400?text=%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D1%87%D0%BD%D1%96+%D1%80%D0%B5%D0%B0%D0%BA%D1%86%D1%96%D1%97" alt="Органічні реакції" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5"
      },
      {
        id: 6,
        name: "Біоорганічна хімія",
        content: `
          <h2>Біоорганічна хімія</h2>
          <p>Огляд основ біоорганічної хімії, яка досліджує органічні молекули, що є частинами живих систем. Ми розглянемо роль органічних сполук у біологічних процесах та їхню важливість для життя.</p>
          <img src="https://via.placeholder.com/800x400?text=%D0%91%D1%96%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D1%96%D1%87%D0%BD%D0%B0+%D1%85%D1%96%D0%BC%D1%96%D1%8F" alt="Біоорганічна хімія" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_6"
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
  
    // Закриття модалки при кліку за межами
    window.addEventListener("click", (event) => {
      if (event.target === lessonModal) {
        lessonModal.style.display = "none";
      }
    });
  
    // Обновлення іконки профілю
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
