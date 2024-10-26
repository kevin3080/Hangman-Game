<script setup lang="ts">
import { computed } from "vue";
import { useGameStore } from "../../store/game";

const gameStore = useGameStore();

let word = computed(() => gameStore.correctWord);
const wordList = word.value.split(" ");
const guessedLetters = computed(() => gameStore.guessedLetters);
</script>

<template>
  <div class="container-game">
    <div class="game">
      <div class="gameWord-container">
        <div class="game__word" v-for="(word, index) in wordList" :key="index">
          <div
            class="game__letter"
            v-for="(letter, i) in word.split('')"
            :key="i"
          >
            <template v-if="letter !== ' '">
              <div
                class="letter"
                :class="{
                  'letter--flipped': guessedLetters.includes(
                    letter.toUpperCase()
                  ),
                }"
              >
                <span
                  class="letter__text"
                  v-if="guessedLetters.includes(letter.toUpperCase())"
                  >{{ letter }}</span
                >
              </div>
            </template>
          </div>
          <div class="empty-space"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-game {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.game {
  min-height: 400px;
  width: 80%;
  border-radius: 25px;
  gap: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game::before {
  z-index: -1;
  content: "";
  display: block;
  position: absolute;
  border-radius: 25px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(90px);
  opacity: 0.7;
}

.gameWord-container {
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 0.5rem;
}

.game__word {
  display: flex;
  gap: 0.2rem;
}

.game__letter {
  border-radius: 8px;
  overflow: hidden;
  width: 60px;
  height: 60px;
}

.game__letter .letter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
}

.letter {
  background-color: #363636;
  border: 1px solid #363636;
  perspective: 1000px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
}
.letter--flipped {
  background-color: #2668be;
  border: 1px solid #2668be;
  transform: rotateY(0deg);
}

.letter__text {
  backface-visibility: hidden;
}

.empty-space {
  width: 30px;
}

@media (min-width: 1024px) {
  .game {
    max-width: 1200px;
  }
}
</style>
