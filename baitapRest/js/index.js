// -------------Khoi 1------------------
document.querySelector("#btnKhoi1").onclick = function () {
  let mathGrade = +document.querySelector("#inpToan").value;
  let physicGrade = +document.querySelector("#inpLy").value;
  let chemistryGrade = +document.querySelector("#inpHoa").value;

  let khoiMotGrade = gpa(mathGrade, physicGrade, chemistryGrade);
  document.querySelector("#tbKhoi1").innerHTML = khoiMotGrade;
};

// -----------------Khoi 2-----------------------
document.querySelector("#btnKhoi2").onclick = function () {
  let literGrade = +document.querySelector("#inpVan").value;
  let historyGrade = +document.querySelector("#inpSu").value;
  let geoGrade = +document.querySelector("#inpDia").value;
  let englishGrade = +document.querySelector("#inpEnglish").value;

  let khoiHaiGrade = gpa(literGrade, historyGrade, geoGrade, englishGrade);
  document.querySelector("#tbKhoi2").innerHTML = khoiHaiGrade;
};
//  ----------------rest param--------------------
let gpa = (...rest) => {
  let totalGrade = 0;
  let subjectNumber = 0;
  for (let subjectGrade of rest) {
    totalGrade += subjectGrade;
    subjectNumber++;
  }
  return (totalGrade / subjectNumber).toFixed(2);
};
