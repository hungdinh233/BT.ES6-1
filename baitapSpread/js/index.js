let textStr = document.querySelector(".heading").innerHTML;
let spread = [...textStr];
console.log(spread);
let html = "";
const hoverAnimate = () => {
  for (let letter of spread) {
    html += `<span class="heading">${letter}</span>`;
  }
  document.querySelector("h2.heading").innerHTML = html;
};
window.onload = function () {
  hoverAnimate();
};
