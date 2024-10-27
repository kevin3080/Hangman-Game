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
    <div>
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
  </div>
</template>

<style scoped>
.keyboard {
  text-align: center;
  font-size: 14px;
  font-family: sans-serif;
  width: 100%;

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
  }
}

.keyboard__row {
  display: inline-block;
  height: 3em;
  margin: 0.2em;
}

.keyboard__row > * {
  position: relative;
  background: #333;
  text-align: center;
  color: #eee;
  float: left;
  border-radius: 0.3em;
  margin: 0.2em;
  padding: 0.2em;
  width: 3.3em;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-user-select: none;
  border: 1px solid #444;
  box-shadow: 0 0.2em 0 0.05em #222;
  border-bottom-color: #555;
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
</style>
