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
                style="width: 90%; font-weight: 600; font-size: 14px; "
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
                  <div id="listInfo"
                  v-if="selected != null"
                  style="overflow: auto;"
                  >
                    <div
                      v-for="(compound, index) in compounds"
                      :key="index"
                      
                    >
                      <div v-if="compound.id == selected">
                        <div class="compound">
                          <p class="description">Название соединения:</p>
                          <p>{{ compound.info.name }}</p>
                        </div>
                        <p
                          style="
                            margin: 15px;
                            font-size: 14px;
                            font-weight: 900;
                            color: var(--contrast-color-dark);
                          "
                        >
                          Физические свойства:
                        </p>
                        <div>
                          <div class="compound">
                            <p class="description">Агрегатное состояние:</p>
                            <p>{{ compound.info.agregate }}</p>
                          </div>
                          <div class="compound">
                            <p class="description">Цвет:</p>
                            <p>{{ compound.info.color }}</p>
                          </div>
                          <div class="compound">
                            <p class="description">Запах:</p>
                            <p>{{ compound.info.smell }}</p>
                          </div>
                          <div class="compound">
                            <p class="description">Растворимость в воде:</p>
                            <p>{{ compound.info.solubility }}</p>
                          </div>
                        </div>
                        <p
                          style="
                            margin: 15px;
                            font-size: 14px;
                            font-weight: 900;
                            color: var(--contrast-color-dark);
                          "
                        >
                          Химические свойства:
                        </p>
                        <div>
                          <div
                            v-for="(chemical, index) in chemicals"
                            :key="index"
                          >
                            <div
                              class="compound"
                              v-if="chemical.compound_id === selected"
                            >
                              <p class="description">
                                {{ chemical.name }}
                              </p>
                              <p v-html="chemical.value"></p>
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
    </div>
    <router-link to="/">
      <button class="btnBack">
        <i class="fa-duotone fa-arrow-left-from-line fa-lg"></i>
      </button>
    </router-link>
    <router-view />
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
      chemicals: [
        {
          compound_id: 1,
          name: "Горение: ",
          value: "CH<sub>4</sub> + O<sub>2</sub> → C + 2H<sub>2</sub>O",
        },
        {
          compound_id: 1,
          name: "Хлорирование: ",
          value: "CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl",
        },
        {
          compound_id: 1,
          name: "Нитрование: ",
          value: "CH<sub>4</sub> + HNO<sub>3</sub> = CH<sub>3</sub>NO<sub>2</sub> + H<sub>2</sub>O",
        },
        {
          compound_id: 1,
          name: "Пиролиз до ацетилена: ",
          value: "2CH<sub>4</sub> → HC <i class='fa-regular fa-bars'></i> CH + 3H<sub>2</sub>",
        },
        {
          compound_id: 2,
          name: "Горение: ",
          value: "2CH<sub>3</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 4H<sub>2</sub>O",
        },
        {
          compound_id: 2,
          name: "Дегидратация: ",
          value: "2CH<sub>3</sub>OH → CH<sub>3</sub>OCH<sub>3</sub> + 2H<sub>2</sub>O",
        },
        {
          compound_id: 2,
          name: "Дегидрирование: ",
          value: "CH<sub>3</sub>OH → CH<sub>2</sub> = O + H<sub>2</sub>",
        },
        {
          compound_id: 2,
          name: "Взаимодействие с хлороводородом: ",
          value: "CH<sub>3</sub>OH + HCl → CH<sub>3</sub>Cl + 2H<sub>2</sub>O",
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
