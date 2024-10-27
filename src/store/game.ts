import { ref } from "vue";
import { defineStore } from "pinia";
import { data, type IData } from "./data";

export const useGameStore = defineStore("game", () => {
  const words = ref<string[]>(data.countries);
  const selectedWordIndex = ref(Math.floor(Math.random() * words.value.length));
  const correctWord = ref<string>(words.value[selectedWordIndex.value]);
  const lifecount = ref<number>(100);
  const guessedLetters = ref<string[]>([]);
  const pressedLetters = ref<string[]>([]);

  const decreaseLife = () => {
    lifecount.value -= 10;
  };

  const guessLetter = (letter: string) => {
    letter = letter.toLowerCase();
    if (
      !guessedLetters.value.includes(letter) &&
      !pressedLetters.value.includes(letter)
    ) {
      addPressedLetter(letter);
      if (!correctWord.value.toLocaleLowerCase().split("").includes(letter)) {
        decreaseLife();
      }
    }
    guessedLetters.value.push(letter);
  };

  const addPressedLetter = (letter: string) => {
    pressedLetters.value.push(letter);
  };

  const resetGame = () => {
    pressedLetters.value = [];
    guessedLetters.value = [];
    lifecount.value = 100;
    selectedWordIndex.value = Math.floor(Math.random() * words.value.length);
    correctWord.value = words.value[selectedWordIndex.value];
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
  };
});
