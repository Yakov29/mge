document.addEventListener("DOMContentLoaded", ()=>{
    const lessons = [
        {
            id: 1,
            name: "\u0412\u0441\u0442\u0443\u043F \u0434\u043E \u0445\u0456\u043C\u0456\u0457",
            content: `
        <h2>\u{412}\u{441}\u{442}\u{443}\u{43F} \u{434}\u{43E} \u{445}\u{456}\u{43C}\u{456}\u{457}</h2>
        <p>\u{426}\u{435}\u{439} \u{443}\u{440}\u{43E}\u{43A} \u{454} \u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{43E}\u{44E} \u{434}\u{43B}\u{44F} \u{440}\u{43E}\u{437}\u{443}\u{43C}\u{456}\u{43D}\u{43D}\u{44F} \u{445}\u{456}\u{43C}\u{456}\u{457} \u{44F}\u{43A} \u{43D}\u{430}\u{443}\u{43A}\u{438}. \u{41C}\u{438} \u{43F}\u{43E}\u{447}\u{43D}\u{435}\u{43C}\u{43E} \u{437} \u{432}\u{438}\u{437}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{445}\u{456}\u{43C}\u{456}\u{457} \u{442}\u{430} \u{457}\u{457} \u{437}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{443} \u{43D}\u{430}\u{448}\u{43E}\u{43C}\u{443} \u{436}\u{438}\u{442}\u{442}\u{456}...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%92%D1%81%D1%82%D1%83%D0%BF+%D0%B4%D0%BE+%D1%85%D1%96%D0%BC%D1%96%D1%97" alt="\u{412}\u{441}\u{442}\u{443}\u{43F} \u{434}\u{43E} \u{445}\u{456}\u{43C}\u{456}\u{457}" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/hM-pRag3aqQ?si=hB-HntSzEJeNZ8KJ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
            youtubeUrl: "https://www.youtube.com/embed/hM-pRag3aqQ?si=hB-HntSzEJeNZ8KJ"
        },
        {
            id: 2,
            name: "\u0425\u0456\u043C\u0456\u0447\u043D\u0456 \u0440\u0435\u0430\u043A\u0446\u0456\u0457",
            content: `
        <h2>\u{425}\u{456}\u{43C}\u{456}\u{447}\u{43D}\u{456} \u{440}\u{435}\u{430}\u{43A}\u{446}\u{456}\u{457}</h2>
        <p>\u{425}\u{456}\u{43C}\u{456}\u{447}\u{43D}\u{456} \u{440}\u{435}\u{430}\u{43A}\u{446}\u{456}\u{457} - \u{446}\u{435} \u{43F}\u{440}\u{43E}\u{446}\u{435}\u{441}\u{438}, \u{43F}\u{456}\u{434} \u{447}\u{430}\u{441} \u{44F}\u{43A}\u{438}\u{445} \u{43E}\u{434}\u{43D}\u{430} \u{430}\u{431}\u{43E} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{430} \u{440}\u{435}\u{447}\u{43E}\u{432}\u{438}\u{43D} \u{43F}\u{435}\u{440}\u{435}\u{442}\u{432}\u{43E}\u{440}\u{44E}\u{44E}\u{442}\u{44C}\u{441}\u{44F} \u{43D}\u{430} \u{456}\u{43D}\u{448}\u{456}. \u{423} \u{446}\u{44C}\u{43E}\u{43C}\u{443} \u{443}\u{440}\u{43E}\u{446}\u{456} \u{43C}\u{438} \u{440}\u{43E}\u{437}\u{433}\u{43B}\u{44F}\u{43D}\u{435}\u{43C}\u{43E} \u{440}\u{456}\u{437}\u{43D}\u{456} \u{442}\u{438}\u{43F}\u{438} \u{445}\u{456}\u{43C}\u{456}\u{447}\u{43D}\u{438}\u{445} \u{440}\u{435}\u{430}\u{43A}\u{446}\u{456}\u{439}...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%A5%D1%96%D0%BC%D1%96%D1%87%D0%BD%D1%96+%D1%80%D0%B5%D0%B0%D0%BA%D1%86%D1%96%D1%97" alt="\u{425}\u{456}\u{43C}\u{456}\u{447}\u{43D}\u{456} \u{440}\u{435}\u{430}\u{43A}\u{446}\u{456}\u{457}" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
            youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2"
        },
        {
            id: 3,
            name: "\u0421\u0442\u0438\u0445\u0456\u043E\u043C\u0435\u0442\u0440\u0456\u044F",
            content: `
        <h2>\u{421}\u{442}\u{438}\u{445}\u{456}\u{43E}\u{43C}\u{435}\u{442}\u{440}\u{456}\u{44F}</h2>
        <p>\u{421}\u{442}\u{438}\u{445}\u{456}\u{43E}\u{43C}\u{435}\u{442}\u{440}\u{456}\u{44F} \u{454} \u{432}\u{430}\u{436}\u{43B}\u{438}\u{432}\u{43E}\u{44E} \u{447}\u{430}\u{441}\u{442}\u{438}\u{43D}\u{43E}\u{44E} \u{445}\u{456}\u{43C}\u{456}\u{457}, \u{44F}\u{43A}\u{430} \u{434}\u{43E}\u{437}\u{432}\u{43E}\u{43B}\u{44F}\u{454} \u{440}\u{43E}\u{437}\u{440}\u{430}\u{445}\u{43E}\u{432}\u{443}\u{432}\u{430}\u{442}\u{438} \u{43A}\u{456}\u{43B}\u{44C}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{440}\u{435}\u{430}\u{433}\u{435}\u{43D}\u{442}\u{456}\u{432} \u{456} \u{43F}\u{440}\u{43E}\u{434}\u{443}\u{43A}\u{442}\u{456}\u{432} \u{443} \u{445}\u{456}\u{43C}\u{456}\u{447}\u{43D}\u{438}\u{445} \u{440}\u{435}\u{430}\u{43A}\u{446}\u{456}\u{44F}\u{445}...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%A1%D1%82%D0%B8%D1%85%D1%96%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D1%96%D1%8F" alt="\u{421}\u{442}\u{438}\u{445}\u{456}\u{43E}\u{43C}\u{435}\u{442}\u{440}\u{456}\u{44F}" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
            youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3"
        },
        {
            id: 4,
            name: "\u0421\u0442\u0430\u043D \u0440\u0435\u0447\u043E\u0432\u0438\u043D",
            content: `
        <h2>\u{421}\u{442}\u{430}\u{43D} \u{440}\u{435}\u{447}\u{43E}\u{432}\u{438}\u{43D}</h2>
        <p>\u{423} \u{446}\u{44C}\u{43E}\u{43C}\u{443} \u{443}\u{440}\u{43E}\u{446}\u{456} \u{43C}\u{438} \u{432}\u{438}\u{432}\u{447}\u{438}\u{43C}\u{43E} \u{440}\u{456}\u{437}\u{43D}\u{456} \u{441}\u{442}\u{430}\u{43D}\u{438} \u{440}\u{435}\u{447}\u{43E}\u{432}\u{438}\u{43D}: \u{442}\u{432}\u{435}\u{440}\u{434}\u{456}, \u{440}\u{456}\u{434}\u{43A}\u{456} \u{442}\u{430} \u{433}\u{430}\u{437}\u{43E}\u{43F}\u{43E}\u{434}\u{456}\u{431}\u{43D}\u{456}...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%A1%D1%82%D0%B0%D0%BD+%D1%80%D0%B5%D1%87%D0%BE%D0%B2%D0%B8%D0%BD" alt="\u{421}\u{442}\u{430}\u{43D} \u{440}\u{435}\u{447}\u{43E}\u{432}\u{438}\u{43D}" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
            youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4"
        },
        {
            id: 5,
            name: "\u041A\u0438\u0441\u043B\u043E\u0442\u0438 \u0442\u0430 \u043E\u0441\u043D\u043E\u0432\u0438",
            content: `
        <h2>\u{41A}\u{438}\u{441}\u{43B}\u{43E}\u{442}\u{438} \u{442}\u{430} \u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{438}</h2>
        <p>\u{423} \u{446}\u{44C}\u{43E}\u{43C}\u{443} \u{443}\u{440}\u{43E}\u{446}\u{456} \u{43C}\u{438} \u{432}\u{438}\u{432}\u{447}\u{438}\u{43C}\u{43E} \u{432}\u{43B}\u{430}\u{441}\u{442}\u{438}\u{432}\u{43E}\u{441}\u{442}\u{456} \u{43A}\u{438}\u{441}\u{43B}\u{43E}\u{442} \u{456} \u{43E}\u{441}\u{43D}\u{43E}\u{432}, \u{457}\u{445}\u{43D}\u{456} \u{440}\u{435}\u{430}\u{43A}\u{446}\u{456}\u{457} \u{442}\u{430} \u{437}\u{430}\u{441}\u{442}\u{43E}\u{441}\u{443}\u{432}\u{430}\u{43D}\u{43D}\u{44F}...</p>
        <img src="https://via.placeholder.com/800x400?text=%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%B8+%D1%82%D0%B0+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B8" alt="\u{41A}\u{438}\u{441}\u{43B}\u{43E}\u{442}\u{438} \u{442}\u{430} \u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{438}" style="width: 100%; height: auto; margin-bottom: 20px;">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
            youtubeUrl: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5"
        }
    ];
    const lessonsContainer = document.getElementById("lessonsContainer");
    const lessonModal = document.getElementById("lessonModal");
    const lessonContent = document.getElementById("lessonContent");
    // Добавляем кнопки для уроков
    lessons.forEach((lesson)=>{
        const button = document.createElement("button");
        button.textContent = lesson.name;
        button.className = "lesson-button";
        button.addEventListener("click", ()=>{
            lessonContent.innerHTML = lesson.content;
            lessonModal.style.display = "flex";
        });
        lessonsContainer.appendChild(button);
    });
    // Закрытие модалки при клике за пределами
    window.addEventListener("click", (event)=>{
        if (event.target === lessonModal) lessonModal.style.display = "none";
    });
    // Обновление иконки профиля
    const profileButton = document.querySelector("#profileCircle");
    const updateProfileButton = ()=>{
        const userProfile = localStorage.getItem("userProfile");
        if (userProfile) {
            const user = JSON.parse(userProfile);
            profileButton.textContent = user.name[0].toUpperCase();
        } else profileButton.style.display = "none";
    };
    updateProfileButton();
});

//# sourceMappingURL=lessons1.44a48489.js.map
