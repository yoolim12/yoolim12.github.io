const form = document.querySelector('#gameForm');
const maxInput = document.querySelector('#maxNum');
const gameStart = document.querySelector('.game-start');
const guessInput = document.querySelector('#guessNum');
const nicoImg2 = document.querySelector('#nico2');
const res1 = document.querySelector('#res1');
const res2 = document.querySelector('#res2');
const res3 = document.querySelector('#res3');
const res4 = document.querySelector('#res4');

const testtest = document.querySelector('.testtest');

let randomNum;

function startSubmit(event) {
  event.preventDefault();
  const maxVal = parseInt(maxInput.value, 10);
  randomNum = Math.floor(Math.random() * maxVal + 1);
  form.classList.add(HIDDEN_CLASSNAME);
  gameStart.classList.remove(HIDDEN_CLASSNAME);
  guessInput.max = maxVal;
}

function guessSubmit(event) {
  event.preventDefault();

  const guessNum = parseInt(guessInput.value, 10);

  if (guessNum === randomNum) {
    testtest.classList.add(HIDDEN_CLASSNAME);
    nicoImg2.src = "img/nico2.jpg";
    // res1.classList.add(HIDDEN_CLASSNAME);
    res2.innerHTML = "You got the number!"
    // res3.classList.add(HIDDEN_CLASSNAME);
    res4.innerHTML = `The number was ${randomNum}`;

    const btn = document.createElement('button');
    btn.innerHTML = "Play Again";

    btn.addEventListener("click", function(){
      gameStart.classList.add(HIDDEN_CLASSNAME);
      form.classList.remove(HIDDEN_CLASSNAME);

      testtest.classList.remove(HIDDEN_CLASSNAME);
      nicoImg2.src = "img/nico1.jpg";
      // res1.classList.remove(HIDDEN_CLASSNAME);
      // res3.classList.remove(HIDDEN_CLASSNAME);

      // res1.innerHTML = "";
      res2.innerHTML = "";
      // res3.innerHTML = "";
      res4.innerHTML = "";
      guessInput.value = "";

      btn.remove();
    });

    gameStart.appendChild(btn);
  }
  else {
    res2.innerHTML = "The number is";

    if (randomNum > guessNum) {
      res4.innerHTML = `HIGHER than ${guessNum}`;
    }
    else {
      res4.innerHTML = `LOWER than ${guessNum}`;
    }
  }
}

form.addEventListener("submit", startSubmit);
gameStart.addEventListener("submit", guessSubmit);

// JSON.stringify

// https://www.w3schools.com/icons/tryit.asp?filename=tryicons_google-replay