const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let a=!1,o=null;t.addEventListener("click",(()=>{a||(o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),a=!0,t.setAttribute("disabled",""))})),e.addEventListener("click",(()=>{clearInterval(o),a=!1,r.style.backgroundColor="#fafafa",t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.ca05b884.js.map