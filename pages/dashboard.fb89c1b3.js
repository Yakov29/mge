document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("#profileCircle"),t=document.querySelector("#date"),a=document.querySelector("#seasonIcon");(()=>{let t=localStorage.getItem("userProfile");if(t){let a=JSON.parse(t);e.textContent=a.name[0].toUpperCase()}else e.style.display="none"})(),(()=>{let e=new Date,a=["неділя","понеділок","вівторок","середа","четвер","пʼятниця","субота"][e.getDay()],n=e.getDate(),l=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"][e.getMonth()],o=e.getFullYear(),u=`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456} ${a} ${n} ${l} ${o}`;t.textContent=u})(),(()=>{let e;let t=new Date().getMonth()+1;e=t>=3&&t<=5?"fa-seedling":t>=6&&t<=8?"fa-sun":t>=9&&t<=11?"fa-leaf":"fa-snowflake",a.className=`fas ${e}`})()});
//# sourceMappingURL=dashboard.fb89c1b3.js.map
