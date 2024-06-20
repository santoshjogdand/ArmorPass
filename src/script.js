let range = document.getElementById("range");
let submit = document.getElementById("submit");
let lengthEle = document.getElementById("length");
let Checkboxes = document.querySelectorAll(".CheckBox");
let copyBTN = document.getElementById("copyBTN");
let warningMsg = document.getElementById("warning");
let checkNum = document.getElementById("number");
let checkChars = document.getElementById("chars");
let alphaUpperCheck = document.getElementById("alphaUpper");
let alphaLowerCheck = document.getElementById("alphaLower");
let GenPass = document.getElementById("Genpass");
let closeBtn = document.getElementById("closeBtn")
// let modalMain = document.getElementsByClassName("modalMain")

let alphaUpper = alphaUpperCheck.checked;
let alphaLower = alphaLowerCheck.checked;
let nums = checkNum.checked;
let chars = checkChars.checked;

const alphasUps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaLows = alphasUps.toLowerCase();
const numbers = "1234567890";
const characters = "!@#$%^&*_+-=?.";

function getCharacters(alphaUpper, alphaLower, nums, chars) {
  let allowedChars = "";
  allowedChars += alphaUpper ? alphasUps : "";
  allowedChars += alphaLower ? alphaLows : "";
  allowedChars += nums ? numbers : "";
  allowedChars += chars ? characters : "";
  return allowedChars;
}

function passGenerator(alphaUpper, alphaLower, nums, chars, length) {
    let Password = "";
    let charList = getCharacters(alphaUpper, alphaLower, nums, chars)
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * charList.length);
      Password += charList[randomNum]
  }
    GenPass.textContent = Password;
  }

  

range.value = 12;
let length = Number(range.value);
passGenerator(alphaUpper, alphaLower, nums, chars, length);

copyBTN.onclick = () => {
  navigator.clipboard.writeText(GenPass.innerText);
  copyBTN.innerText = "Copied";
  let modalMain = document.getElementById("modalMain");
  modalMain.classList.remove("hidden")
console.log(  modalMain.classList.remove("hidden"))

};

closeBtn.onclick = () => {

    let modalMain = document.getElementById("modalMain");
    modalMain.classList.add("hidden")

}

lengthEle.value = range.value;

range.addEventListener("input", () => {
  lengthEle.value = range.value;
  length = range.value;
  GeneratePassword();
});
lengthEle.addEventListener("input",()=>{
    range.value = lengthEle.value<=50?lengthEle.value : lengthEle.value = 50;
    length = range.value;
})

submit.addEventListener("click", () => {
  copyBTN.innerText = "Copy";
  GeneratePassword();
});

function GeneratePassword(){
    let checkOne = Array.from(Checkboxes).some((checkbox) => checkbox.checked);
    if (!checkOne) {
      warningMsg.textContent = "Atleast one option should be selected!";
    } else {
      alphaUpper = alphaUpperCheck.checked;
      alphaLower = alphaLowerCheck.checked;
      nums = checkNum.checked;
      chars = checkChars.checked;
  
      passGenerator(alphaUpper, alphaLower, nums, chars, length);
    }
}
