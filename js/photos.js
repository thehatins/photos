let r=-1,s=266,a=!1;var e=()=>{var e;document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")};window.addEventListener("resize",e);const m=(e,t,c)=>{a=!0;const n=document.querySelector(".c9j12"),d=(n.classList.add("f01mg",e),document.createElement("img"));d.classList.add("c9j12",t),d.src=`images/grid/${r+=c}.jpg`,n.insertAdjacentElement("afterend",d),setTimeout(()=>{d.classList.add("m1n4g")},50),setTimeout(()=>{n.remove(),d.classList.value="c9j12",a=!1},450)};var t=()=>{const t=e=>{e.preventDefault(),document.body.classList.remove("o2mf6"),document.querySelector(`[data-idx="${r}"`).scrollIntoView(),document.querySelector(".c9j12").src=""},c=(document.getElementById("c0mf2").addEventListener("click",t),()=>{a||0===r||m("rn91p","lc71n",-1)}),n=(document.getElementById("djf9g").addEventListener("click",c),()=>{a||r>=s||m("lc71n","rn91p",1)});document.getElementById("r9ghh").addEventListener("click",n),document.addEventListener("keyup",e=>{"ArrowLeft"===e.key&&c(),"ArrowRight"===e.key&&n(),"Escape"===e.key&&t(e)});let d=0;var e=document.querySelector("#pms8g .emd9f");e.addEventListener("touchstart",e=>d=e.changedTouches[0].screenX),e.addEventListener("touchmove",e=>{var e=e.changedTouches[0].screenX;5<Math.abs(d-e)&&(0<d-e?n:c)()})};const c=e=>{let t=document.createElement("img");t.src=`images/grid_small/${e}.jpg`,t.classList.add("h1mf9"),t.loading="lazy",t.setAttribute("data-idx",""+e),document.querySelector("#p7vm2").append(t),t.addEventListener("load",()=>{t.addEventListener("click",e=>{var t,e=(document.getElementById("pms8g").style.transformOrigin=`${e.clientX}px ${e.clientY}px`,document.body.classList.add("o2mf6"),e.target),c,n;document.querySelector(".c9j12").src=e.src.replace("_small",""),r=Number(e.getAttribute("data-idx")),(new Image).src=`images/grid/${r-1}.jpg`,(new Image).src=`images/grid/${r+1}.jpg`}),e<s&&c(++e)})};e(),t(),c(0);