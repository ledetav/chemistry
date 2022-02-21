<template>
  <div>
    <button @click.prevent="toggleTheme" class="theme">
      <i
        class="fa-duotone fa-moon-stars fa-xl"
        style="color: var(--icon-color-second)"
      ></i>
    </button>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&display=swap');

:root {
  --background-color: #e0e5e6;
  --background-color-second: #f0f2f3;
  --text-main-color: #000;
  --background-color-compound: #f4faf1;
  --select: #e0e5e6;
  --background-window-color: #f3f4f8;
  --contrast-color-dark: #023026;
  --contrast-color-light: #6e9a44;
  --extra-light: #bad072;
  --panel-color: #3d9690;
  --shadow-color-first: #bebebe;
  --select-text-color: #a9a9a9;
  --shadow-color-second: #ffffff;
  --icon-color-primary: #bad072;
  --icon-color-second: #023026;
  --btn-color: #fbfcfd;
  --contrast-color-dark-name: #023026;
  --contrast-color-light-name: #6e9a44;
  --extra-light-name: #bad072;
  --select-lightest: rgba(0, 0, 0, 0.26);
  --select-light: rgba(0, 0, 0, 0.5);
  --select-dark: #000;
  --select-darkest:rgba(0, 0, 0, 0.15);
  --btn-color-bg: #023026; 
  --logo-color: linear-gradient(-80deg, var(--extra-light-name) 0%, var(--contrast-color-light-name) 50%, var(--contrast-color-dark-name) 100%);
}
:root.dark-theme {
  --contrast-color-dark: #101827;
  --contrast-color-light: rgba(21, 30, 47, 1);
  --text-main-color: #c5cae9;
  --select: #4e5b72;
  --background-color: #141924;
  --background-color-second: #323f57;
  --background-window-color: #1d283c;
  --background-color-compound: #4e5b72;
  --panel-color: #3d9690;
  --shadow-color-first: #1d283c;
  --extra-light: #3e5170;
  --shadow-color-second: #1a2231;
  --select-text-color: #c5cae9;
  --icon-color-primary: #c5cae9;
  --icon-color-second: #c5cae9;
  --btn-color: #fbfcfd;
  --contrast-color-dark-name: #4e5b72;
  --contrast-color-light-name: #3e5170;
  --extra-light-name: #c5cae9;
  --select-lightest: rgba(197, 202, 233, 0.26);
  --select-light: rgba(197, 202, 233, 0.5);
  --select-dark: #c5cae9;
  --select-darkest:rgba(197, 202, 233, 0.15); 
  --btn-color-bg: #4e5b72;
  --logo-color: #c5cae9;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
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