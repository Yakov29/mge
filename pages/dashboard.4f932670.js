document.addEventListener("DOMContentLoaded",()=>{let e=JSON.parse(localStorage.getItem("userProfile"))||{},t=document.getElementById("showCourses"),n=document.getElementById("courseModal"),a=document.querySelector(".close"),l=document.getElementById("courseList"),o=document.getElementById("addedCourses"),r=document.getElementById("profileCircle");e.name?(r.textContent=e.name.charAt(0).toUpperCase(),r.href="../pages/settings.html"):r.style.display="none";let s=()=>{o.innerHTML="<h3>Додані курси:</h3>",e.courses&&e.courses.length>0&&e.courses.forEach(e=>{let t=document.createElement("div");t.classList.add("course-box");let n=document.createElement("a");n.textContent=e.name,n.href=e.link,n.classList.add("course-link"),t.appendChild(n),o.appendChild(t)})},c=async t=>{e.courses||(e.courses=[]),e.courses.find(e=>e.id===t.id)?alert("Цей курс вже додано до вашого профілю"):(e.courses.push(t),localStorage.setItem("userProfile",JSON.stringify(e)),await d(e),s(),alert(`\u{41A}\u{443}\u{440}\u{441} ${t.name} \u{434}\u{43E}\u{434}\u{430}\u{43D}\u{43E} \u{434}\u{43E} \u{432}\u{430}\u{448}\u{43E}\u{433}\u{43E} \u{43F}\u{440}\u{43E}\u{444}\u{456}\u{43B}\u{44E}`))},d=async e=>{try{await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(e){console.error("Помилка при збереженні курсу до API",e)}};t.onclick=()=>{n.style.display="block"},a.onclick=()=>{n.style.display="none"},window.onclick=e=>{e.target==n&&(n.style.display="none")},l.addEventListener("click",e=>{if(e.target.classList.contains("course-link")){e.preventDefault();let t=e.target;c({id:parseInt(t.getAttribute("data-id")),name:t.getAttribute("data-name"),link:t.getAttribute("href")}),t.style.display="none"}}),s()}),document.addEventListener("DOMContentLoaded",()=>{let e,t;let n=document.querySelector("#calendarDays"),a=document.querySelector("#eventForm"),l=document.querySelector("#eventList"),o=document.querySelector("#eventDate"),r=document.querySelector("#eventTitle"),s=document.querySelector("#calendarTitle"),c=document.querySelector("#prevMonth"),d=document.querySelector("#nextMonth");function u(){let a=new Date(t,e,1),o=new Date(t,e+1,0);s.textContent=`${a.toLocaleString("uk-UA",{month:"long"})} ${t}`,n.innerHTML="";for(let e=0;e<a.getDay();e++)n.innerHTML+='<div class="calendar-day"></div>';for(let a=1;a<=o.getDate();a++)n.innerHTML+=`<div class="calendar-day" data-date="${t}-${e+1}-${a}">${a}</div>`;let r=(7-(a.getDay()+o.getDate())%7)%7;for(let e=0;e<r;e++)n.innerHTML+='<div class="calendar-day"></div>';(function(){let e=JSON.parse(localStorage.getItem("events"))||[];l.innerHTML="",e.forEach(e=>{let t=document.createElement("div");t.className="event",t.innerHTML=`
        <span class="event-date">${new Date(e.date).toLocaleDateString("uk-UA")}</span>
        <span class="event-title">${e.title}</span>
        <button class="delete-event" data-date="${e.date}" data-title="${e.title}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
      `,l.appendChild(t)})})()}a.addEventListener("submit",function(e){e.preventDefault();let t=o.value,n=r.value;if(t&&n){let e=JSON.parse(localStorage.getItem("events"))||[];e.push({date:t,title:n}),localStorage.setItem("events",JSON.stringify(e)),o.value="",r.value="",u()}}),l.addEventListener("click",e=>{e.target.classList.contains("delete-event")&&function(e,t){let n=(JSON.parse(localStorage.getItem("events"))||[]).filter(n=>n.date!==e||n.title!==t);localStorage.setItem("events",JSON.stringify(n)),u()}(e.target.getAttribute("data-date"),e.target.getAttribute("data-title"))}),c.addEventListener("click",()=>{--e<0&&(e=11,t--),u()}),d.addEventListener("click",()=>{++e>11&&(e=0,t++),u()}),function(){let n=new Date;e=n.getMonth(),t=n.getFullYear(),u()}()});
//# sourceMappingURL=dashboard.4f932670.js.map
