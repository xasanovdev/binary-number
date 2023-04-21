const modalContainer = document.querySelector('.modal__container')
const modalLost = document.querySelector('.modal__lost')
const modalCongratulation = document.querySelector(".modal__congratulation");
const playAgain = document.querySelector(".play__again");
const playAgain2 = document.querySelector(".play__again_2");
const buttonNext = document.querySelector('.button__next')
const buttonGenerate = document.querySelector('.button__generate')
const generatedText = document.querySelector('.generated__number')
const generateContainer = document.querySelector('.generate')
const buttonKids = document.querySelector('.button__kids')
const buttonSerious = document.querySelector('.button__serious')
const calculatedTitle = document.querySelector(".calculated__numbers");

const inputMainText = document.querySelector('.input__main')

const buttonAdd = document.querySelectorAll(".binary__wrapper-button");
const buttonRemove = document.querySelectorAll(".binary__wrapper-button-remove");
const buttonAddIndex = document.querySelectorAll(".binary__wrapper-index");
const buttonAddTitle = document.querySelectorAll(".binary__wrapper-number");

const outputValue = document.querySelector('.input__total')

let summ = 0;


generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

buttonGenerate.addEventListener("click", () => {
  generatedText.textContent = `${generateNumber(1, 255)}`;
  inputMainText.value = generatedText.textContent;
  generatedText.style.borderColor = "#DC9D00";
});

buttonNext.addEventListener("click", () => {
  if (generatedText.textContent != 0) {
    generateContainer.style.transform = "translateX(-510px)";
  } else {
    generatedText.style.borderColor = "red";
  }
});

type = ''

buttonKids.addEventListener("click", () => {
  type = 'kids';
    for (let i = 0; i < buttonRemove.length; i++) {
      buttonRemove[i].classList.remove("active");
    }
  modalContainer.classList.remove("active");
});

buttonSerious.addEventListener("click", () => {
  type = 'serious';
    for (let i = 0; i < buttonRemove.length; i++) {
      buttonRemove[i].classList.add("active");
    }
    modalContainer.classList.remove("active");
});


for (let i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].addEventListener("click", () => {
    let index = parseInt(buttonAddIndex[i].textContent - 1);
    summ += 2 ** index;
    outputValue.value = summ;
    calculatedTitle.value += `+${2 ** index}`;

      if (type === "serious") {
        if (outputValue.value > inputMainText.value) {
          modalLost.classList.add("active");
          playAgain2.addEventListener("click", () => {
            modalLost.classList.remove("active");
            inputMainText.value = 0;
            outputValue.value = 0;
            generatedText.textContent = 0;
            modalContainer.classList.add("active");
            generateContainer.style.transform = "translateX(0px)";
            calculatedTitle.value = "";
            summ = 0;
          });
        }
      }
      if (outputValue.value == inputMainText.value) {
          modalCongratulation.classList.add("active");
          playAgain.addEventListener("click", () => {
            modalCongratulation.classList.remove("active");
            inputMainText.value = 0;
            outputValue.value = 0;
            generatedText.textContent = 0;
            modalContainer.classList.add("active");
            generateContainer.style.transform = "translateX(0px)";
            calculatedTitle.value = '';
            summ = 0;
          });
        }
      buttonAddTitle[i].textContent = 1;
    });
}

for (let i = 0; i < buttonAdd.length; i++) {
      buttonRemove[i].addEventListener("click", () => {
      let index = parseInt(buttonAddIndex[i].textContent - 1);
      summ -= 2 ** index;
      calculatedTitle.value += `-${2 ** index}`;
      outputValue.value = summ;
      countMinus[i] = 1;
      if (outputValue.value == inputMainText.value) {
        modalCongratulation.classList.add("active");
        playAgain.addEventListener("click", () => {
          modalCongratulation.classList.remove("active");
          inputMainText.value = 0;
          outputValue.value = 0;
          generatedText.textContent = 0;
          modalContainer.classList.add("active");
          calculatedTitle.value = "";
          generateContainer.style.transform = "translateX(0px)";
          summ = 0;
        });
      }
      buttonAddTitle[i].textContent = 0;
    });
}




