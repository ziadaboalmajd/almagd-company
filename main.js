// @ input dom
const titleCont = document.getElementById("titleCont");
const sendtoCont = document.getElementById("sendToCont");
const messCont = document.getElementById("messCont");
const greetC = document.getElementById("greetC");
const closingC = document.getElementById("closingC");
const stampC = document.getElementById("stampC");
const amlC = document.getElementById("amlC");
const ahmC = document.getElementById("ahmC");

// @ output dom
const titleFv = document.querySelector(".titleContf");
const sendtoFv = document.querySelector(".sendToContf");
const messFv = document.querySelector(".messContf");
const greetFv = document.querySelector(".greetCont");
const closingFv = document.querySelector(".closingCont");
const stampFv = document.querySelector(".stampC");
const amlFv = document.querySelector(".amlC");
const ahmFv = document.querySelector(".ahmC");

// @ btn
const printbtn = document.getElementById("generate");
const passBtn = document.getElementById("passBtn");

// @ security
const weakPass = document.getElementById("weakPass");
const weakQ = document.querySelector(".weakQ");
const passValue = document.getElementById("passValue");
let admin = false;

function typeData() {
  // retrieve values
  const titleValue = titleCont.innerText.trim();
  const sendtoValue = sendtoCont.innerText.trim();
  const messValue = messCont.innerText.trim();

  // checkbox values
  const greetValue = greetC.checked;
  const closingValue = closingC.checked;
  const stampValue = stampC.checked;
  const amlCValue = amlC.checked;
  const ahmCValue = ahmC.checked;

  // fill content
  titleFv.textContent = titleValue;
  sendtoFv.textContent = sendtoValue;
  messFv.textContent = messValue;

  // display logic
  titleFv.style.display = titleValue ? "block" : "none";
  sendtoFv.style.display = sendtoValue ? "block" : "none";
  messFv.style.display = messValue ? "block" : "none";

  greetFv.style.display = greetValue ? "block" : "none";
  closingFv.style.display = closingValue ? "block" : "none";
  stampFv.src = stampValue ? "img/001__2_-removebg-preview.png" : "";
  amlFv.src = amlCValue ? "img/امضاء__2_-removebg-preview.png" : "";
  ahmFv.src = ahmCValue ? "img/photo_2022-10-27_01-50-10-removebg-preview.png" : "";
}

printbtn.addEventListener("click", () => {
  if (admin) {
    typeData();
    window.print();
  }
});

passBtn.addEventListener("click", () => {
  if (passValue.value === "amola") {
    weakPass.style.display = "none";
    weakQ.style.display = "none";
    admin = true;
  }
});
