!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){timeId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(null),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.6156398e.js.map
