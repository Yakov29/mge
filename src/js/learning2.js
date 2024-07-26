document.addEventListener("DOMContentLoaded", () => {
    const lessons = [
      {
        id: 1,
        name: "Основи органічної хімії",
        content: `
          <h2>Основи органічної хімії</h2>
          <p>У цьому уроці ми ознайомимося з основними поняттями органічної хімії, такими як органічні сполуки, їх класифікація та властивості. Ми розглянемо значення органічних сполук у природі та промисловості.</p>
          <img src="https://techemy.com/wp-content/uploads/2019/12/IMG_UA_0281_001.png" alt="Основи органічної хімії" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/R0uXE11aano?si=wcO-Y2nQ7JH0zxWu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/R0uXE11aano?si=wcO-Y2nQ7JH0zxWu"
      },
      {
        id: 2,
        name: "Гомологічний ряд алканів",
        content: `
          <h2>Гомологічний ряд алканів</h2>
          <p>В цьому уроці ми розглянемо гомологічний ряд алканів, їхні властивості, методи синтезу та застосування. Ви дізнаєтеся про фізичні та хімічні властивості алканів та їхні структурні особливості.</p>
          <img src="https://naurok.com.ua/uploads/blog-2020/05%D0%B0%D0%BB%D0%BA%D0%B0%D0%BD.png" alt="Гомологічний ряд алканів" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YGVLJefOxoI?si=l67si9i6TOcgq9Qo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/YGVLJefOxoI?si=l67si9i6TOcgq9Qo"
      },
      {
        id: 3,
        name: "Хімічні властивості алкенів та алкінів",
        content: `
          <h2>Хімічні властивості алкенів та алкінів</h2>
          <p>У цьому уроці ми розглянемо хімічні властивості алкенів та алкінів, їхні реакції та механізми. Ми також ознайомимося з методами синтезу і застосуванням цих сполук у промисловості.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy30BC2MY1J4N12FIXUcxEqgujoYM7Q_LS-A&s" alt="Хімічні властивості алкенів та алкінів" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hhmzmG0zk_4?si=TKpCUEp3_rYsaly2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/hhmzmG0zk_4?si=TKpCUEp3_rYsaly2"
      },
      {
        id: 4,
        name: "Функціональні групи органічних сполук",
        content: `
          <h2>Функціональні групи органічних сполук</h2>
          <p>У цьому уроці ми вивчимо різні функціональні групи органічних сполук, їхню структуру та реакційну здатність. Ви дізнаєтеся про спирти, альдегіди, кетони та інші групи.</p>
          <img src="https://uahistory.co/zno/chemistry-zno-2020-berezan-comprehensive-edition/chemistry-zno-2020-berezan-comprehensive-edition.files/image608.jpg" alt="Функціональні групи органічних сполук" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/OQ1UYjrmJ28?si=gjnI37A4nf4VWDyt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/OQ1UYjrmJ28?si=gjnI37A4nf4VWDyt"
      },
      {
        id: 5,
        name: "Органічні реакції",
        content: `
          <h2>Органічні реакції</h2>
          <p>Вивчимо основні типи органічних реакцій, такі як заміщення, додавання та елімінація. Ми також ознайомимося з умовами їх протікання та прикладами з життя.</p>
          <img src="https://www.madr.rv.ua/wp-content/uploads/2020/03/yakisni-reakcii-organichnux-spolyk-1500x890-1.jpg" alt="Органічні реакції" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/2iGq0nUdQFI?si=epE-Bu8FUWHvTNtl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/2iGq0nUdQFI?si=epE-Bu8FUWHvTNtl"
      },
      {
        id: 6,
        name: "Біоорганічна хімія",
        content: `
          <h2>Біоорганічна хімія</h2>
          <p>Огляд основ біоорганічної хімії, яка досліджує органічні молекули, що є частинами живих систем. Ми розглянемо роль органічних сполук у біологічних процесах та їхню важливість для життя.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbSTb6VLj0gimuf72KORccxZujkMtdgSIag&s" alt="Біоорганічна хімія" style="width: 100%; height: auto; margin-bottom: 20px;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/2iGq0nUdQFI?si=JW1eqdf9-6zQeN8m" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        youtubeUrl: "https://www.youtube.com/embed/2iGq0nUdQFI?si=JW1eqdf9-6zQeN8m"
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
