// 1. Hiển thị button ra giao diện
let html = "";
let arrColor = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
const changeHouseColor = () => {
  for (let color of arrColor) {
    let button = `
    <button class ="color-button ${color}" onclick = "changeColorClick('${color}')"></button> 
    `;
    html += button;
  }
  document.querySelector("#colorContainer").innerHTML = html;
};
// 2. Click button hiển thị trên giao diện màu tương ứng
window.changeColorClick = (color) => {
  document.querySelector("#house").className = "house" + " " + color;
};

window.onload = function () {
  changeHouseColor();
};
