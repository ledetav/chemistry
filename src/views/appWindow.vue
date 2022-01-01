<template>
    <div>
      <div class="appWindow">
           <div class="frame">
             <button class="menu"></button>
             <button class="theme">☼</button>
             <div class="window">
               <div id="left">
                 <div id ="search">
                   <input class="searchInput" placeholder="Поиск по соединениям">
                 </div>
                 <div id="list">
                   <div class="compList" v-for="compound in compounds" :key="compound.id">
                     <div class="compound">
                       <h5>{{ compound.title }}</h5>
                       <h6>{{ compound.body }}</h6>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
      </div>
      <button class="btnBack"><router-link to="/">←</router-link></button>
      <router-view/>
    </div>
</template>
<script>
export default {
    data () {
      return {
        compounds: [
          {id: 1, title: "Compound 1", body: "description"},
          {id: 2, title: "Compound 2", body: "description"},
          {id: 3, title: "Compound 3", body: "description"},
        ]
      }
    }
}
</script>

<style lang="scss">
    $bgColor: #e0e5e6;
    $panelColor: #3d9690;
    $contrastColorDark: #023026;
    $contrastColorLight: #6e9a44;
    $bgColorWavy: #bad072;
    $bgColorSecond: #d5e2ed;
    $bgWindow: #fbfcfd;

    * {
      box-sizing: border-box;
    }

    @keyframes effect {
        0% {opacity: 0; }
        80% {opacity: 0.85;}
        100% {opacity: 1;}
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

        box-shadow: 10px 10px 35px #bebebe, -10px -10px 35px #ffffff;
    }

    /* FRAME FOR MAIN BUTTONS & MENU */
    .frame {
        position: absolute;
        overflow: hidden;

        height: 100%;
        width: 100%;

        background: linear-gradient(-120deg, $bgColorWavy -30%, $contrastColorDark 100%);
    }

    /* MAIN WINDOW */
    .window {
        position: absolute;
        overflow: hidden;

        height: 93%;
        width: 97%;

        top: 51%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);

        border-radius: 7px;
        background-color: $bgColor;
    }

    /* MENU BUTTON */
    .menu {
      position: absolute;

      margin-top: 8px;
      margin-left: 10px;
      width: 12px;
      height: 12px;

      border: none;
      border-radius: 50%;

      background-color: $contrastColorLight;
      cursor: pointer;
      overflow: hidden;

      text-align: center;
      font-size: 10px;
      font-weight: 750;

      color: $contrastColorDark;
    }

    /* BACK BUTTON */
    .btnBack {
      position: absolute;

      margin-top: 40px;
      margin-left: 25px;

      height: 30px;
      width: 30px;
      opacity: 0;
      border-radius: 50%;
      border: none;

      background-color: $bgColorWavy;
      color: $contrastColorLight;
      font-size: 15px;
      font-weight: 900;
      text-align: center;

      cursor: pointer;

      animation: effect 1s ease-in-out;
      animation-delay: 1.5s;
      animation-fill-mode: forwards;
      transition: all 0.5s ease-in-out;

      &:hover {
        background-color: $contrastColorLight;
        color: $contrastColorDark;

        transition: all 0.5s ease-in-out;
      }
    }

    /* THEME BUTTON */
    .theme {
      float: right;
      width: 20px;
      height: 20px;

      margin-right: 15px;
      margin-top: 5px;

      border: none;
      border-radius: 50%;

      background-color: $bgColorWavy;
      cursor: pointer;
      overflow: hidden;

      text-align: center;
      font-size: 10px;
      font-weight: 900;

      color: $contrastColorDark;
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

    /* SEARCH */
    #left {
      position: relative;

      width: 25%;
      height: 100%;
    }

    #search {
      overflow: hidden;

      background-color: $bgWindow;

      margin-top: 3%;
      margin-left: 2%;

      width: 100%;
      height: 10%;

      border-radius: 10px;

      box-shadow: 10px 10px 35px #bebebe, -10px -10px 35px #ffffff;
    }

    .searchInput {
      background-color: $bgColor;

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
    }

    /* LIST OF COMPOUNDS */
    #list {
      overflow: hidden;

      margin-top: 3%;
      margin-left: 2%;

      background-color: $bgWindow;
      height: 85%;
      width: 100%;

      border-radius: 10px;

      box-shadow: 10px 10px 35px #bebebe, -10px -10px 35px #ffffff;
    }

    /* COMPOUND BLOCK */
    .compound {
      position: relative;
      overflow: hidden;

      padding: 5%;
      margin: 5%;

      background: none;

      border-radius: 5px;
      transition: all 1s ease-in-out;
      box-shadow: 2px 2px 10px #bebebe, -2px -2px 10px #ffffff;
      &:hover {
        background: linear-gradient(120deg, #ffffff 10%, rgba(186, 208, 114, 0.48) 100%);

        transition: all 1s ease-in-out;
      }
    }

    @media screen and (max-width: 479px) {
      .btnBack {
        margin-top: 10px;
        margin-left: 10px;

        height: 15px;
        width: 15px;
      }
    }

    @media screen and (max-width: 767px) {
      .btnBack {
        margin-top: 40px;
        margin-left: 0px;

        height: 22px;
        width: 22px;

        font-size: 10px;
      }
    }
</style>