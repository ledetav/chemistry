<template>
  <div class="box">
    <div class="loadingWindow">
      <div class="logo">
        <div class="logoChem">
          <img src="@\assets\atom-svgrepo-com.svg">
        </div>
        <div class="logoName">
          <h2 class="appName">ChemistryWebApp 2.0</h2>
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
<style lang="scss" scoped>
  @keyframes effect {
  0% {opacity: 0; }
  80% {opacity: 0.85;}
  100% {opacity: 1;}
}

/* WINDOW APP */
.box {
  position: absolute;

  height: 75%;
  width: 80%;

  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.loadingWindow {
  position: absolute;

  background-color: var(--background-window-color);
  box-shadow: 5px 5px 35px var(--shadow-color-first), -5px -5px 35px var(--shadow-color-second);

  width: 100%;
  height: 100%;

  border-radius: 20px;
  overflow: hidden;
  opacity: 0;

  animation: effect 0.55s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

/* BACKGROUND */
.colorWavy {
  overflow: hidden;
  position: absolute;

  border-radius: 20px;

  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;

  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;

  box-shadow: 5px 10px 10px rgba(var(--background-window-color), 0.2);
  
  &::before, &::after {
    content: '';
    position: absolute;

    width: 1000px;
    height: 1000px;

    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;

    z-index: -1;
  }
  
  &::before {
    left: 40%;
    bottom: -50%;

    background-color: rgba(var(--contrast-color-light), 0.15);

    animation: wawes 10s infinite linear;
  }
  
  &::after {
    left: 35%;
    bottom: -45%;

    background-color: rgba(var(--background-color-second), 0.2);

    animation: wawes 12s infinite;
  }
}

@keyframes wawes {
  from { transform: rotate(0); }
  to {transform: rotate(360deg); }
}

.bgBlock {
  overflow: hidden;

  background: linear-gradient(-120deg, var(--extra-light) 0%, var(--contrast-color-light) 50%, var(--contrast-color-dark) 100%);

  top: 40%;

  height: 45%;
  width: 100%;
  border-radius: 10px;

  position: absolute;

  animation: effect 0.5s ease-in-out;
  animation-delay: 2.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

 /* BUTTON FOR START */
.logInBtn {
  overflow: hidden;
  position: absolute;

  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 150px;
  height: 50px;

  border: 0;
  border-radius: 5px;

  font-weight: 600;
  font-family: Oswald;
  font-size: 20px;

  background-color: var(--contrast-color-dark);
  cursor: pointer;
  display: inline-block;

  transition: all 0.3s ease;
  color: var(--btn-color);

  animation: effectBtn 0.5s ease-in-out;
  animation-delay: 3.5s;
  opacity: 0;
  animation-fill-mode: forwards;
  text-align: center;
}
.logInBtn a {
  color: white;
  text-decoration: none;
}
@keyframes effectBtn {
  from {opacity: 0; top: 40%; }
  to {opacity: 1; top: 50%;}
}
.logInBtn:hover {
  background: var(--contrast-color-dark);
  color: #fff;
}
.logInBtn:before {
    position: absolute;
    content: '';
    display: inline-block;

    top: -180px;
    left: 0;

    width: 30px;
    height: 100%;

    background-color: #fff;

    animation: shiny-btn1 3s ease-in-out infinite;
}
.logInBtn:active {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);

@keyframes shiny-btn1 {
    0% { transform: scale(0) rotate(45deg); opacity: 0; }
    80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { transform: scale(4) rotate(45deg); opacity: 1; }
    100% { transform: scale(50) rotate(45deg); opacity: 0; }
  }
}

/* LOGO AND NAME */
.logo {
  position: absolute;

  height: 50%;
  top: 25%;
  left: 20%;
  width: 100%;
  transform: translate(-20%, -25%);

  display: flex;
  justify-content: center;
}

.logoChem {
  height: 110px;
  width: 110px;

  margin-right: 15px;
}

.logoChem img {
  width: 100%;
  height: 100%;

  animation: effect 0.5s ease-in-out;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

h2 {
  font-family: Oswald, sans-serif;
  font-weight: 800;
  font-size: 35px;

  color: var(--contrast-color-light);

  animation: effect 0.5s ease-in-out;
  animation-delay: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
}
.appName {
  background: linear-gradient(-80deg, var(--extra-light-name) 0%, var(--contrast-color-light-name) 50%, var(--contrast-color-dark-name) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
h4 {
  font-weight: 600;
  font-size: 20px;

  animation: effect 0.5s ease-in-out;
  animation-delay: 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@media screen and (max-width: 479px) {
  .logoChem {
    height: 75px;
    width: 75px;
  }

  h2 {
    font-size: 23px;
  }

  h4 {
    font-size: 17px;
  }
  .logInBtn {
    width: 110px;
    height: 50px;
  }
}

@media screen and (max-width: 767px) {
  .logoChem {
    height: 85px;
    width: 85px;
  }
  h2 {
    font-size: 22px;
  }

  h4 {
    font-size: 17px;
  }
  .logInBtn {
    width: 120px;
    height: 50px;
  }
}

.logInBtn:active .loadingWindow {
    opacity: 1;
    animation: effect2 0.60s ease-in-out;
  animation-delay: 4s;
    animation-fill-mode: forwards;
}

@keyframes effect2 {
  0% {opacity: 1; }
  80% {opacity: 0.85;}
  100% {opacity: 0;}
}
</style>