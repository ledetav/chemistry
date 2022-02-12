<template>
  <div>
    <div class="appWindow">
      <div class="frame">
        <button class="menu">
          <i
            class="fa-regular fa-bars fa-xl"
            style="color: var(--icon-color-primary); position: absolute"
          ></i>
        </button>
        <div class="window">
          <div id="left" v-show="visibleSelect == true">
            <div id="select">
              <v-select
                :options="compounds"
                label="title"
                :reduce="(compound) => compound.id"
                v-model="selected"
                :searchable="false"
                style="width: 90%"
              >
              </v-select>
            </div>
          </div>
          <button
            class="show showSelect"
            @click.prevent="showSelect"
            v-bind:class="{ isShowSelect: visibleSelect == false }"
          >
            <i class="fa-solid fa-angles-left" v-if="visibleSelect == true"></i>
            <i
              class="fa-solid fa-angles-right"
              v-if="visibleSelect == false"
            ></i>
          </button>
          <div
            class="notification"
            v-if="selected == null && visibleSelect == true"
          >
            <img
              src="@/assets/arrow.png"
              class="arrow"
              width="100"
              height="100"
            />
            <h3>Выберите соединение из списка слева.</h3>
            <img src="@/assets/pa.png" class="pap" width="200" height="200" />
          </div>
          <div
            class="notification"
            v-else-if="visibleSelect == false && selected == null"
          >
            <h3>Разверните список слева.</h3>
            <img src="@/assets/pa.png" class="pap" width="200" height="200" />
          </div>
          <div class="compoundWindow" v-else>
            <div>
              <div class="model"></div>
              <button
                class="show showInfo"
                @click.prevent="showInfo"
                v-if="selected != null"
                v-bind:class="{ isShowInfo: visibleInfo == false }"
              >
                <i
                  class="fa-solid fa-angles-left"
                  v-if="visibleInfo == false"
                ></i>
                <i
                  class="fa-solid fa-angles-right"
                  v-if="visibleInfo == true"
                ></i>
              </button>
              <div id="right" v-if="visibleInfo == true">
                <div id="listInfo" v-if="selected != null">
                  <div
                    class="compList"
                    v-for="(compound, index) in compounds"
                    :key="index"
                  >
                    <div class="compound" v-if="compound.id == selected">
                      <h5>{{ compound.title }}</h5>
                      <h6 class="description">{{ compound.body }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/">
      <button class="btnBack">
        <i class="fa-duotone fa-arrow-left-from-line fa-lg"></i>
      </button>
    </router-link>
    <router-view />
    <div class="warningBlock">
      <div class="warning">
        <h4>
          Приложение пока не расситано на устройство с экраном такого размера.
          Мы работаем над этим!
        </h4>
        <br />
        <h5>
          <i
            >Пожалуйста, поверните устройство в горизонтальное положение или
            откройте с утройства с большим размером экрана (планшет, ПК).</i
          >
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      compounds: [
        {
          id: 1,
          title: "Compound 1",
          body: "description",
          info: {
            name: "",
            formula: "",
          },
        },
        { id: 2, title: "Compound 2", body: "description" },
        { id: 3, title: "Compound 3", body: "description" },
        { id: 4, title: "Compound 4", body: "description" },
        { id: 5, title: "Compound 5", body: "description" },
        { id: 6, title: "Compound 6", body: "description" },
      ],
      visibleSelect: true,
      visibleInfo: true,
      selected: null,
    };
  },
  methods: {
    showSelect() {
      if (this.visibleSelect == true) {
        this.visibleSelect = false;
      } else {
        this.visibleSelect = true;
      }
    },
    showInfo() {
      if (this.visibleInfo == true) {
        this.visibleInfo = false;
      } else {
        this.visibleInfo = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes effect {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0.85;
  }
  100% {
    opacity: 1;
  }
}

/* WINDOW APP */
.appWindow {
  position: relative;

  height: 90%;
  width: 90%;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  overflow: hidden;
  position: absolute;

  opacity: 0;
  animation-delay: 0.5s;
  animation: effect 0.55s ease-in-out;
  animation-fill-mode: forwards;

  box-shadow: 10px 10px 35px var(--shadow-color-first),
    -10px -10px 35px var(--shadow-color-second);
}

/* FRAME FOR MAIN BUTTONS & MENU */
.frame {
  position: absolute;
  overflow: hidden;

  height: 100%;
  width: 100%;

  background: linear-gradient(
    -120deg,
    var(--extra-light) -30%,
    var(--contrast-color-dark) 100%
  );
}

/* MAIN WINDOW */
.window {
  position: absolute;
  overflow: hidden;
  display: flex;

  height: 93%;
  width: 97%;

  top: 51%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  border-radius: 7px;
  background-color: var(--background-window-color);
}

/* MENU BUTTON */
.menu {
  position: absolute;

  width: 25px;
  height: 20px;

  margin-left: 15px;
  margin-top: 5px;

  border: none;
  border-radius: 2px;

  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--contrast-color-dark);
}

/* BACK BUTTON */
.btnBack {
  position: absolute;

  margin-top: 40px;
  margin-left: 25px;

  height: 35px;
  width: 35px;
  opacity: 0;
  border-radius: 50%;
  border: none;

  background-color: var(--extra-light);
  color: var(--contrast-color-light);
  font-size: 15px;
  font-weight: 900;
  text-align: center;

  cursor: pointer;

  animation: effect 1s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: var(--contrast-color-light);
    color: var(--contrast-color-dark);

    transition: all 0.5s ease-in-out;
  }
}
a {
  text-decoration: none;
  &:hover,
  &:active,
  &:focus,
  &:visited,
  &:link {
    color: inherit;
  }
}

/* SELECT */
#left {
  position: relative;
  display: flex;

  margin-top: 2%;
  width: 25%;
  height: 100%;

  z-index: 1;

  animation: effect 0.3s ease-in-out;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}

#select {
  background-color: var(--background-color-second);

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2%;

  width: 100%;
  height: 10%;

  border-radius: 10px;
  box-shadow: 6px 6px 22px var(--shadow-color-first),
    -6px -6px 22px var(--shadow-color-second);
}

.searchInput {
  background-color: var(--select);
  color: var(--text-main-color);

  margin-top: 5%;
  margin-left: 5%;
  padding: 4%;

  height: 60%;
  width: 75%;
  border: none;
  border-radius: 5px;

  &:active,
  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: var(--select-text-color);
  }
}

.searchBtn {
  padding: 10px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  background-color: var(--contrast-color-light);
}

/* LIST OF COMPOUNDS */
#list {
  overflow: hidden;

  margin-top: 3%;
  margin-left: 2%;

  background-color: var(--background-color-second);
  height: 85%;
  width: 100%;

  border-radius: 10px;
}

/* COMPOUND BLOCK */
.compound {
  position: relative;
  overflow: hidden;

  padding: 5%;
  margin: 5%;

  background: var(--background-color-compound);

  border-radius: 5px;
  transition: all 1s ease-in-out;
  &:hover {
    background: linear-gradient(
      120deg,
      var(--background-window-color) 10%,
      var(--extra-light) 100%
    );

    transition: all 1s ease-in-out;
  }
}
.description {
  color: var(--select-text-color);
  margin-top: 3px;
}
#right {
  position: absolute;
  display: flex;

  margin-top: 20px;
  margin-left: 850px;

  width: 285px;
  height: 525px;

  animation: effect 0.3s ease-in-out;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}

#listInfo {
  background-color: var(--background-color-second);

  border-radius: 10px;
  width: 100%;
  box-shadow: -6px 6px 22px var(--shadow-color-first),
    6px -6px 22px var(--shadow-color-second);
}
.show {
  height: 20px;
  width: 30px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color: var(--extra-light);
}
.showInfo {
  margin-top: 35px;
  margin-left: 815px;
  position: absolute;
  z-index: 1;
  animation: effect 0.3s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}
.showSelect {
  margin-top: 35px;
  margin-left: 5px;
  position: relative;

  z-index: 1;

  animation: effect 0.3s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.compoundWindow {
  display: flex;
  position: fixed;
}

.notification {
  margin-top: 50px;
  margin-left: 140px;
  width: 700px;
  height: 500px;

  position: fixed;

  animation: effect 0.2s ease-in-out;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
  //display: flex;
  h3 {
    text-align: center;
    margin-top: 200px;
    margin-left: 160px;
    color: var(--select-text-color);
    font-weight: 400;
    font-size: 20px;
  }
}

.arrow {
  position: absolute;
  filter: opacity(30%);
  top: 13%;
  left: 22%;
  transform: rotate(-10deg);

  animation: effect 0.2s ease-in-out;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.pap {
  position: absolute;
  top: 60%;
  left: 43%;
  filter: opacity(40%);

  animation: effect 0.2s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.isShowSelect {
  margin-left: 15px;
}

.isShowInfo {
  margin-left: 1115px;
}
.warningBlock {
  background: rgba(21, 21, 21, 0.748);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.warning {
  top: 40%;
  z-index: 1;
  position: absolute;
  margin: auto;
  min-width: 99%;
  height: 30%;
  background-color: var(--background-window-color);
  text-align: center;
  padding: 20px;
  border-radius: 10px;

  h4 {
    margin-top: 10px;
    font-size: 1rem;
    color: var(--contrast-color-dark);
  }

  h5 {
    color: var(--select-text-color);
    font-size: 0.6rem;
  }
}

@keyframes effect {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0.85;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
  .warningBlock {
    opacity: 1;
  }
}
</style>