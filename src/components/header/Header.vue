<script setup lang="ts">
import { ref, watch } from "vue";
import {
  FlFilledNavigation,
  BsArrowLeftCircleFill,
  BsHeartFill,
  IoReload,
} from "@kalimahapps/vue-icons";
import { useGameStore } from "@/store/game";
import type { IData } from "@/store/data";

const gameStore = useGameStore();
const menuIsOpen = ref(false);
const menuOptionSelected = ref("Countries");
const reload = ref(false);
const isScaling = ref(false);

watch( () => gameStore.lifecount, (newVal, oldVal) => {
  if (newVal < oldVal) {
    isScaling.value = true;
    setTimeout(() => {
      isScaling.value = false;
    }, 300);
  }
});

const openMenu = () => {
  !menuIsOpen.value ? (menuIsOpen.value = true) : (menuIsOpen.value = false);
};

const closeMenu = () => {
  menuIsOpen.value = false;
};

const selectMenuOption = (option: string) => {
  menuOptionSelected.value = option;
  gameStore.setCategory(option.toLowerCase() as keyof IData);
  closeMenu();
};
</script>
<template>
  <header>
    <div class="header-container">
      <nav class="navbar">
        <div class="hamburger-icon">
          <FlFilledNavigation class="icon" @click="openMenu" />
        </div>
        <div class="dropdown-menu" :class="{ open: menuIsOpen }">
          <div class="header-menu">
            <button class="close-button" @click="closeMenu">
              <BsArrowLeftCircleFill class="icon" />
            </button>
          </div>
          <ul class="list-menu">
            <li @click="selectMenuOption('Names')">Names</li>
            <li @click="selectMenuOption('Countries')">Countries</li>
            <li @click="selectMenuOption('Colors')">Colros</li>
            <li @click="selectMenuOption('Objects')">Objects</li>
          </ul>
        </div>
        <div class="title-container">
          <h1 class="title">{{ menuOptionSelected }}</h1>
        </div>
      </nav>
      <div class="status-container">
        <IoReload class="icon-reload" @click="reload = true" />
        <p class="score">Score: {{ gameStore.score }}</p>
        <div class="modal" v-if="reload">
          <div class="modal-content">
            <h3>¿Seguro que desea reiniciar el juego?</h3>
            <button
              class="button-reload"
              @click="gameStore.resetGame(), (reload = false)"
            >
              Reiniciar
            </button>
            <button class="button-cancel" @click="reload = false">
              Cancelar
            </button>
          </div>
        </div>
        <span class="life-bar" :class="{ 'scale-effect': isScaling }">
          <span
            class="life"
            :style="{ width: gameStore.lifecount + '%'}"
          ></span>
        </span>
        <BsHeartFill class="icon-heart" :class="{ 'scale-effect': isScaling }" />
      </div>
    </div>
  </header>
</template>

<style scoped>
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

  & h3 {
    color: #333;
    margin-bottom: 1rem;
  }
}

.modal-content button {
  padding: 0.5rem 1rem;
  background-color: #af4c4c;
  color: white;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3 ease;

  &:hover {
    background-color: #f44336;
  }

  &.button-cancel {
    background-color: #555;

    &:hover {
      background-color: #333;
    }
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.status-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.score{ 
  font-size: 1.2rem;
  font-weight: 600;
}

.icon-reload {
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  & * {
    color: #e4e4e4;
  }

  &:hover {
    transform: rotate(20deg);
  }
}

@keyframes lifeEffect {
  0% {
    transform: scale(1);
    fill: rgb(248, 67, 35);
  }
  50% {
    transform: scale(1.2);
    fill: #ffffff;
  }
  100% {
    transform: scale(1);
    fill: rgb(248, 67, 35);
  }
}


.life-bar {
  display: inline-block;
  width: 150px;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
  transition: lifeEffect 0.3s ease;
}

.life-bar .life {
  display: block;
  height: 100%;
  background-color: rgb(248, 67, 35);
  border-radius: 5px;
  transition: width 0.3s ease;
}

.scale-effect .life,
.scale-effect.icon-heart {
  animation: lifeEffect 0.3s ease;
}

.icon-heart {
  font-size: 30px;
  cursor: pointer;
  fill: rgb(248, 67, 35);
}

.navbar {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  color: #fff;
  padding: 0 20px;

}

.hamburger-icon {
  font-size: 30px;
  cursor: pointer;
}

.icon {
  display: block;
}

.title-container {
  z-index: 1;
  margin-left: 2rem;
}

.dropdown-menu {
  position: fixed;
  top: 0;
  left: -310px;
  min-width: 310px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 1;
}

.dropdown-menu.open {
  transform: translateX(310px);
}

.header-menu {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.list-menu {
  list-style: none;
  padding: 0;
  margin-top: 30px;
}

.list-menu li {
  padding: 0.4rem 0 0.4rem 1rem;
  margin: 0.6rem 0;
  border-radius: 25px;
  transition: background-color 0.2s ease;
}

.list-menu li:hover {
  background-color: #fff;
  color: #333;
  cursor: pointer;
}

@media (max-width: 590px) {

  header{

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-container{
    width: 80%;
    display: block;
  }
}
</style>
