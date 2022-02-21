<template>
  <div class="box">
    <div class="loadingWindow">
      <div class="logo">
        <div class="logoChem">
          <img src="@\assets\atom-svgrepo-com.svg">
        </div>
        <div class="logoName">
          <h2 class="appName">ChemBook 3D</h2><h2 style="color: red; font-size: 16px;">demo</h2>
          <h4>Карманный справочник</h4>
        </div>
      </div>
      <div class="bgBlock">
        <div class="colorWavy"></div>
          <router-link to="app">
            <button class="logInBtn">
              Начать!
              <i class="fa-regular fa-chevron-right fa-lg" style="margin-left: 15px;"></i>
            </button>
          </router-link>
      </div>
    </div>
  </div>
</template>