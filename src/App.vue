<script setup lang="ts">
import Keyboard from './components/keyboard/Keyboard.vue';
import Header from './components/header/Header.vue';
</script>

<template>
  <Header />
  <main>
    <div class="container-game">
      <div class="game"><p>aqui va el juego</p></div>
    </div>
    <Keyboard />
    
  </main>
</template>

<style scoped>




  .container-game {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .game {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    width: 80%;
    border-radius: 25px;
  }

  .game::before{
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

  @media (min-width: 1024px) {
    .game {
      max-width: 1200px;
    }
  }
</style>