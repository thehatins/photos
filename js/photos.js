let c=-1,r=0,s=!1;var e=()=>{var e;document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")};window.addEventListener("resize",e);const a=(e,t,n)=>{s=!0;const d=document.querySelector(".current"),r=(d.classList.add("new-image-"+e),document.createElement("img"));r.classList.add("current","new-image-"+t),r.src=`images/photos/${c+=n}.jpg`,d.insertAdjacentElement("afterend",r),setTimeout(()=>{r.classList.add("move")},50),setTimeout(()=>{d.remove(),r.classList.value="current",s=!1},600)};var t=()=>{document.getElementById("c0mf2").addEventListener("click",e=>{e.preventDefault(),document.body.classList.remove("o2mf6"),document.querySelector(`[data-idx="${c}"`).scrollIntoView()});const t=()=>{s||0===c||a("right","left",-1)},n=(document.getElementById("djf9g").addEventListener("click",t),()=>{s||c>=r||a("left","right",1)});document.getElementById("r9ghh").addEventListener("click",n);let d=0;var e=document.querySelector("#pms8g .emd9f");e.addEventListener("touchstart",e=>d=e.changedTouches[0].screenX),e.addEventListener("touchend",e=>{var e=e.changedTouches[0].screenX;5<Math.abs(d-e)&&(0<d-e?n:t)()})};const n=e=>{let t=document.createElement("img");t.src=`images/photos/${e}.jpg`,t.classList.add("h1mf9"),t.setAttribute("data-idx",""+e),t.addEventListener("load",()=>{t.loading="lazy",document.querySelector("#p7vm2").append(t),t.addEventListener("click",e=>{var t,e=(document.getElementById("pms8g").style.transformOrigin=`${e.clientX}px ${e.clientY}px`,document.body.classList.add("o2mf6"),e.target);document.querySelector(".current").src=e.src,c=Number(e.getAttribute("data-idx"))}),n(++e)}),t.addEventListener("error",()=>{r=e-1})};e(),t(),n(0);