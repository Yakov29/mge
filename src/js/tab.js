document.addEventListener("DOMContentLoaded", () => {
    const profileButton = document.querySelector("#profileCircle");
    const dateElement = document.querySelector("#date");
    const seasonIcon = document.querySelector("#seasonIcon");

    const updateProfileButton = () => {
      const userProfile = localStorage.getItem("userProfile");
      if (userProfile) {
        const user = JSON.parse(userProfile);
        profileButton.textContent = user.name[0].toUpperCase();
      } else {
        profileButton.style.display = "none";
      }
    };

    const updateDate = () => {
      const dayNames = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
      const monthNames = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

      const date = new Date();
      const weekday = dayNames[date.getDay()];
      const day = date.getDate();
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();

      const formattedDate = `Сьогодні ${weekday} ${day} ${month} ${year}`;
      dateElement.textContent = formattedDate;
    };

    const updateSeasonIcon = () => {
      const month = new Date().getMonth() + 1; 
      let iconClass;
      if (month >= 3 && month <= 5) {
        iconClass = 'fa-seedling'; 
      } else if (month >= 6 && month <= 8) {
        iconClass = 'fa-sun'; 
      } else if (month >= 9 && month <= 11) {
        iconClass = 'fa-leaf'; 
      } else {
        iconClass = 'fa-snowflake'; 
      }
      seasonIcon.className = `fas ${iconClass}`;
    };

    updateProfileButton();
    updateDate();
    updateSeasonIcon();
  });