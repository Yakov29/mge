document.addEventListener("DOMContentLoaded",async()=>{let e=document.getElementById("profileCircle"),s=document.getElementById("coursesSection"),t=async()=>{try{let e=await fetch("https://669a78899ba098ed61ffc5a3.mockapi.io/accounts/1");if(!e.ok)throw Error("Network response was not ok");return await e.json()}catch(e){return console.error("Ошибка при загрузке данных профиля:",e),{}}},n=e=>{[{name:"Хімія 101",id:1},{name:"Органічна хімія",id:2},{name:"Аналітична хімія",id:3}].forEach(t=>{let n=e.filter(e=>e.id===t.id);if(n.length>0){let e=document.createElement("div");e.innerHTML=`
                    <h3 class="lessons__chapter-title">${t.name}</h3>
                    <ul class="lessons__chapter">
                        ${n.map(e=>`
                            <li class="lessons__lesson">
                                <a href="${e.link}" class="lessons__lesson-link">${e.name}</a>
                            </li>
                        `).join("")}
                    </ul>
                `,s.appendChild(e)}})},o=JSON.parse(localStorage.getItem("userProfile"))||{},a=await t();(()=>{let s=localStorage.getItem("userProfile");if(s){let t=JSON.parse(s);e.textContent=t.name[0].toUpperCase()}else e.style.display="none"})(),o.courses&&o.courses.length>0?n(o.courses):a.courses&&a.courses.length>0&&n(a.courses)});
//# sourceMappingURL=lessons.d1c46694.js.map
