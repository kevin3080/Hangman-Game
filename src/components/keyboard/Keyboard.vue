<script setup lang="ts">
import { useGameStore } from "../../store/game";

const gameStore = useGameStore();

const handleLetterClick = (letter: string) => {
  gameStore.addPressedLetter(letter);
  gameStore.guessLetter(letter);
};
</script>

<template>
  <div class="keyboard">
      <div class="keyboard__row">
        <div
          class="key--letter"
          v-for="letter in 'QWERTYUIOP'"
          :key="letter"
          @click="handleLetterClick(letter)"
          :data-pressed="
            gameStore.pressedLetters.includes(letter) ? true : undefined
          "
        >
          {{ letter }}
        </div>
      </div>
      <div class="keyboard__row">
        <div
          class="key--letter"
          v-for="letter in 'ASDFGHJKL'"
          :key="letter"
          @click="handleLetterClick(letter)"
          :data-pressed="
            gameStore.pressedLetters.includes(letter) ? true : undefined
          "
        >
          {{ letter }}
        </div>
      </div>
      <div class="keyboard__row">
        <div
          class="key--letter"
          v-for="letter in 'ZXCVBNM'"
          :key="letter"
          @click="handleLetterClick(letter)"
          :data-pressed="
            gameStore.pressedLetters.includes(letter) ? true : undefined
          "
        >
          {{ letter }}
        </div>
      </div>
    </div>
</template>

<style scoped>
.keyboard {
  margin-top: 20px;
  text-align: center;
  font-size: clamp(12px, 2vw, 18px);
  font-family: sans-serif;
}

.keyboard__row {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.2em;
  height: clamp(3.5em, 2vw, 3em);
  margin: 0.2em;
}

.key--letter {
  background: #333;
  text-align: center;
  color: #eee;
  float: left;
  border-radius: 0.3em;
  margin: 0.2em;
  padding: 0.2em;
  width: clamp(3.3em, 8vw, 3.3em);
  height: clamp(3em, 8vw, 3.3em);
  box-sizing: border-box;
  cursor: pointer;
  -webkit-user-select: none;
  border: 1px solid #444;
  box-shadow: 0 0.2em 0 0.05em #222;
  border-bottom-color: #555;
  font-size: clamp(0.8rem, 2vw, 1rem);
}

.keyboard__row > div[data-pressed],
.keyboard__row > div:active {
  background: #2a2a2a;
  color: #aaa;
  position: relative;
  top: 0.2em;
  box-shadow: 0 0 0 0.05em black;
}

.key--letter {
  line-height: 2.8em;
}

@media (max-width: 470px) {
  .keyboard__row{
    gap: 0;
    margin: 0;
  }

  .key--letter{
    margin: 0;
    padding: 0;
  }
}
</style>
