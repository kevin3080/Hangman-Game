import { ref } from "vue";
import { defineStore } from "pinia";

export const useGameStore = defineStore("game", () => {

    const words = ref([
        "united kingdom",
        "united states",
        "world",
        "Christopher",
        "Garcia",
      ]);
      const selectedWordIndex = ref(0);
      const correctWord = ref<string>(words.value[selectedWordIndex.value]); 
    const lifecount = ref<number>(100);
    const guessedLetters = ref<string[]>([]);

    const decreaseLife = () => {
        lifecount.value -= 10;
    };

  const guessLetter = (letter: string) => {
    if (!guessedLetters.value.includes(letter)) {
      guessedLetters.value.push(letter);
    }
    if (!correctWord.value.split("").includes(letter)) {
        decreaseLife();
      }
  };

  const resetGame = () => {
    guessedLetters.value = []; 
    lifecount.value = 100; 
    selectedWordIndex.value = Math.floor(Math.random() * words.value.length);
    correctWord.value = words.value[selectedWordIndex.value];
};

  return { guessedLetters, guessLetter, lifecount, decreaseLife, correctWord, resetGame};
});