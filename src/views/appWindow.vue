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
              <div>
                <div
                  class="compList"
                  v-for="(compound, index) in compounds"
                  :key="index"
                >
                  <div class="model" v-if="compound.id == selected">
                    <v-model :gltf-file="compound.gltfFile" />
                  </div>
                </div>
              </div>
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
                    <div v-if="compound.id == selected">
                      <div class="compound">
                        <h6 class="description">Название соединения:</h6>
                        <h5>{{ compound.info.name }}</h5>
                      </div>
                      <h3
                        style="
                          margin: 15px;
                          font-size: 14px;
                          color: var(--contrast-color-dark);
                        "
                      >
                        Физические свойства:
                      </h3>
                      <div>
                        <div class="compound">
                          <h6 class="description">Агрегатное состояние:</h6>
                          <h5>{{ compound.info.agregate }}</h5>
                        </div>
                        <div class="compound">
                          <h6 class="description">Цвет:</h6>
                          <h5>{{ compound.info.color }}</h5>
                        </div>
                        <div class="compound">
                          <h6 class="description">Запах:</h6>
                          <h5>{{ compound.info.smell }}</h5>
                        </div>
                        <div class="compound">
                          <h6 class="description">Растворимость в воде:</h6>
                          <h5>{{ compound.info.solubility }}</h5>
                        </div>
                      </div>
                      <h3
                        style="
                          margin: 15px;
                          font-size: 14px;
                          color: var(--contrast-color-dark);
                        "
                      >
                        Химические свойства:
                      </h3>
                      <div>
                        <div class="compound">
                          <h6 class="description">Агрегатное состояние:</h6>
                          <h5>{{ compound.info.agregate }}</h5>
                        </div>
                        <div class="compound">
                          <h6 class="description">Цвет:</h6>
                          <h5>{{ compound.info.color }}</h5>
                        </div>
                        <div class="compound">
                          <h6 class="description">Запах:</h6>
                          <h5>{{ compound.info.smell }}</h5>
                        </div>
                        <div class="compound">
                          <h6 class="description">Растворимость в воде:</h6>
                          <h5>{{ compound.info.solubility }}</h5>
                        </div>
                      </div>
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
          title: "Метан",
          gltfFile: "models/untitled.gltf",
          info: {
            name: "Метан",
            agregate: "Газ",
            color: "Бесцветное вещество",
            smell: "Без запаха",
            solubility: "Малорастворим",
          },
        },
        {
          id: 2,
          title: "Метанол",
          gltfFile: "models/untitled.gltf",
          info: {
            name: "Метанол",
            agregate: "Жидкость",
            color: "Бесцетное вещество",
            smell: "Похож на запах этилового спирта, но более слабый",
            solubility: "Хорошо растворим",
          },
        },
        {
          id: 3,
          title: "Уксусная кислота",
          gltfFile: "models/untitled.gltf",
          info: {
            name: "Уксусная кислота",
            agregate: "Жидкость",
            color: "Бесцветное вещество",
            smell: "Резкий",
            solubility: "Неограниченно растворима в воде",
          },
        },
        {
          id: 4,
          title: "Диметиловый эфир",
          gltfFile: "models/untitled.gltf",
          info: {
            name: "Диметиловый эфир",
            agregate: "Газ",
            color: "Бесцветное вещество",
            smell: "Эфирный запах, напоминающий хлороформ",
            solubility: "Хорошо растворим",
          },
        },
        {
          id: 5,
          title: "Этанол",
          gltfFile: "models/untitled.gltf",
          info: {
            name: "Этанол",
            agregate: "Жидкость",
            color: "Бесцветное вещество",
            smell: "Характерный спиртовой запах",
            solubility: "Хорошо растворим",
          },
        },
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
