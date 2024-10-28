import { ref } from "vue";
import { defineStore } from "pinia";
import { data, type IData } from "./data";

export const useGameStore = defineStore("game", () => {
  const words = ref<string[]>(data.countries);
  const selectedWordIndex = ref(Math.floor(Math.random() * words.value.length));
  const correctWord = ref<string>(words.value[selectedWordIndex.value]);
  const lifecount = ref<number>(100);
  const pressedLetters = ref<string[]>([]);
  const guessedLetters = ref<Set<string>>(new Set());
  const score = ref<number>(0);
  const pointsPerLetter = 50;


  const incrementScore = (guessedLetter: string) => {
    const currentCorrectWord = correctWord.value.toLowerCase();
    const matches = currentCorrectWord.match(new RegExp(guessedLetter, "g"))
    const letterCount = matches ? matches.length : 0;

    if(letterCount > 0) {
      const scoreIncrement = letterCount * pointsPerLetter;
      score.value += scoreIncrement;
    }

  };

  console.log(correctWord.value);

  const decreaseLife = () => {
    lifecount.value -= 10;
  };

  const guessLetter = (letter: string) => {
    letter = letter.toLowerCase();
    if (
      !guessedLetters.value.has(letter) &&
      !pressedLetters.value.includes(letter)
    ) {
      addPressedLetter(letter);
      if (correctWord.value.toLocaleLowerCase().includes(letter)) {
        guessedLetters.value.add(letter);
        incrementScore(letter);
    } else {
        decreaseLife();
    }
}
   
  };

  const addPressedLetter = (letter: string) => {
    pressedLetters.value.push(letter);
  };

  const resetGame = () => {
    pressedLetters.value = [];
    guessedLetters.value = new Set();
    lifecount.value = 100;
    selectedWordIndex.value = Math.floor(Math.random() * words.value.length);
    correctWord.value = words.value[selectedWordIndex.value];
    score.value = 0;
  };

  const setCategory = (category: keyof IData) => {
    words.value = data[category];
    resetGame();
  };

  return {
    correctWord,
    guessedLetters,
    lifecount,
    pressedLetters,
    addPressedLetter,
    decreaseLife,
    guessLetter,
    resetGame,
    setCategory,
    score,
    incrementScore,
  };
});
