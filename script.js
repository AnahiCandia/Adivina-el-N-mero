const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");

guessButton.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Por favor ingresa un número válido entre 1 y 100.";
  } else if (guess === randomNumber) {
    feedback.textContent = `¡Correcto! El número era ${randomNumber}. 🎉`;
  } else if (guess < randomNumber) {
    feedback.textContent = "Demasiado bajo. Intenta de nuevo.";
  } else {
    feedback.textContent = "Demasiado alto. Intenta de nuevo.";
  }
});
