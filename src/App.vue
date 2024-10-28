<script setup lang="ts">
import Keyboard from "./components/keyboard/Keyboard.vue";
import Header from "./components/header/Header.vue";
import ContainerGame from "./components/Game/ContainerGame.vue";
import { useGameStore } from "./store/game";
import { computed } from "vue";

const gameStore = useGameStore();

let life = computed(() => gameStore.lifecount);
const gameOver = computed(() => life.value === 0);

// watch(life, (newLife) => {
//   if (newLife === 0) {
//     gameStore.resetGame();
//   }
// })
</script>

<template>
  <div class="app-container">
      <Header />
      <main>
        <ContainerGame />
        <Keyboard />
        <transition name="showModal">
          <div v-if="gameOver" class="modal">
            <div class="modal-content">
              <h2>Game Over</h2>
              <p>Has perdido todas tus vidas.</p>
              <button @click="gameStore.resetGame()">Reiniciar Juego</button>
            </div>
          </div>
        </transition>
      </main>
  </div>
</template>

<style scoped>


.showModal-enter-active,
.showModal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.showModal-enter-from,
.showModal-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
.showModal-enter-to {
  opacity: 1;
  transform: scale(1);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffffd7;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;

  & h2,
  p {
    color: #333;
    margin-bottom: 1rem;
  }
}

.modal-content button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal-content button:hover {
  background-color: #45a049;
}
</style>
