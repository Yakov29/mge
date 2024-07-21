document.addEventListener('DOMContentLoaded', () => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};
    const showCoursesButton = document.getElementById('showCourses');
    const courseModal = document.getElementById('courseModal');
    const closeModal = document.querySelector('.close');
    const courseList = document.getElementById('courseList');
    const addedCourses = document.getElementById('addedCourses');
    const profileCircle = document.getElementById('profileCircle');

    // Обработчик отображения профиля пользователя
    if (userProfile.name) {
        profileCircle.textContent = userProfile.name.charAt(0).toUpperCase();
        profileCircle.href = "../pages/settings.html";
    } else {
        profileCircle.style.display = 'none';
        showCoursesButton.style.display = 'none'; // Скрываем кнопку, если пользователь не зарегистрирован
    }

    // Функция для рендеринга добавленных курсов
    const renderAddedCourses = () => {
        addedCourses.innerHTML = '<h3>Додані курси:</h3>';
        if (userProfile.courses && userProfile.courses.length > 0) {
            userProfile.courses.forEach(course => {
                const courseBox = document.createElement('div');
                courseBox.classList.add('course-box');
                const a = document.createElement('a');
                a.textContent = course.name;
                a.href = course.link;
                a.classList.add('course-link');
                courseBox.appendChild(a);
                addedCourses.appendChild(courseBox);
            });
        }
    };

    // Функция для добавления курса
    const addCourse = async (course) => {
        if (!userProfile.courses) {
            userProfile.courses = [];
        }

        if (!userProfile.courses.find(c => c.id === course.id)) {
            userProfile.courses.push(course);
            localStorage.setItem('userProfile', JSON.stringify(userProfile));
            await saveCourseToAPI(userProfile);
            renderAddedCourses();
            alert(`Курс ${course.name} додано до вашого профілю`);
        } else {
            alert('Цей курс вже додано до вашого профілю');
        }
    };

    // Функция для сохранения курса в API
    const saveCourseToAPI = async (profile) => {
        try {
            await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${profile.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            });
        } catch (error) {
            console.error('Помилка при збереженні курсу до API', error);
        }
    };

    // Открытие модалки
    showCoursesButton.onclick = () => {
        courseModal.style.display = 'block';
    };

    // Закрытие модалки
    closeModal.onclick = () => {
        courseModal.style.display = 'none';
    };

    // Закрытие модалки при клике вне модалки
    window.onclick = (event) => {
        if (event.target == courseModal) {
            courseModal.style.display = 'none';
        }
    };

    // Обработчик кликов по списку курсов
    courseList.addEventListener('click', (event) => {
        if (event.target.classList.contains('course-link')) {
            event.preventDefault();
            const link = event.target;
            const course = {
                id: parseInt(link.getAttribute('data-id')),
                name: link.getAttribute('data-name'),
                link: link.getAttribute('href')
            };
            addCourse(course);
            link.style.display = 'none';
        }
    });

    renderAddedCourses();
});
