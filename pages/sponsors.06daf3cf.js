const e=document.querySelectorAll(".slides"),t=document.getElementById("next"),n=document.getElementById("previous"),d=document.getElementById("dotsContainer");console.log(t),console.log(n);let l=0;function c(){let e=document.getElementById("window").clientWidth;document.getElementById("slide-container").style.transform=`translateX(${-e*l}px)`,document.querySelectorAll(".dot").forEach((e,t)=>{e.classList.toggle("active",t===l)})}e.forEach((e,t)=>{let n=document.createElement("div");n.classList.add("dot"),t===l&&n.classList.add("active"),d.appendChild(n)}),t.addEventListener("click",()=>{l=(l+1)%e.length,c()}),n.addEventListener("click",()=>{l=(l-1+e.length)%e.length,c()}),d.addEventListener("click",e=>{e.target.classList.contains("dot")&&(l=Array.from(d.children).indexOf(e.target),c())}),window.addEventListener("resize",c),c();
//# sourceMappingURL=sponsors.06daf3cf.js.map
