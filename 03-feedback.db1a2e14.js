function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function T(){var e=y();if(b(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?v(e):(i=o=void 0,a)}function w(){var e=y(),n=b(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(T,t),s?v(e):a}(l);if(d)return f=setTimeout(T,t),v(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==o}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const T=document.querySelector(".feedback-form"),h=document.querySelector("form input"),w=document.querySelector("form textarea");let O={};const x="feedback-form-state";T.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.value||""===w.value)return alert("Fields must be filled in");console.log(O),localStorage.removeItem(x),e.currentTarget.reset(),O={}})),T.addEventListener("input",e(t)((function(e){const t=e.target.value,n=e.target.name;O[n]=t,localStorage.setItem(x,JSON.stringify(O))}),500)),function(){const e=JSON.parse(localStorage.getItem(x));e&&(h.value=e.email||"",O.email=e.email||"",w.value=e.message||"",O.message=e.message||"")}();
//# sourceMappingURL=03-feedback.db1a2e14.js.map
