<script setup lang="ts">
import { ref } from "vue";
import {
  FlFilledNavigation,
  BsArrowLeftCircleFill,
  BsHeartFill,
} from "@kalimahapps/vue-icons";
import { useGameStore } from "@/store/game";

const gameStore = useGameStore();
const menuIsOpen = ref(false);
const menuOptionSelected = ref("Names");

const openMenu = () => {
  menuIsOpen.value = true;
};

const closeMenu = () => {
  menuIsOpen.value = false;
};

const decreaseLife = () => {
  gameStore.decreaseLife();
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
            <li @click="menuOptionSelected = 'Names'">Names</li>
            <li @click="menuOptionSelected = 'Countries'">Countries</li>
            <li @click="menuOptionSelected = 'Colros'">Colros</li>
            <li @click="menuOptionSelected = 'Objects'">Objects</li>
            <li @click="decreaseLife">decreaseLife</li>
          </ul>
        </div>
        <div class="title-container">
          <h1 class="title">{{ menuOptionSelected }}</h1>
        </div>
      </nav>
      <div class="life-container">
        <span class="life-bar">
          <span class="life" :style="{ width: gameStore.lifecount + '%' }"></span>
        </span>
        <BsHeartFill class="icon-heart" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.life-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.life-bar {
  display: block;
  width: 150px;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
}

.life-bar .life{
  display: block;
  height: 100%;
  background-color: rgb(248, 67, 35);
  border-radius: 5px;
  transition: width .3s ease;
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
</style>
