<template>
  <div>
    <!--<button @click.prevent="toggleTheme" class="theme">
      <i
        class="fa-duotone fa-moon-stars fa-xl"
        style="color: var(--icon-color-second)"
      ></i>
    </button>
    -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
@import "./views/scss/app";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  text-rendering: geometricPrecision;
}

body {
  background-color: var(--background-color);
  color: var(--text-main-color);
}

.theme {
  float: right;
  margin-right: 15px;
  margin-top: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

@import "vue-select/src/scss/vue-select.scss";
</style>