<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" alt="redrocket logo">
      </router-link>
      <div class="menu">
        <router-link to="/">소개</router-link>
        <router-link to="/campusfund">캠퍼스펀드</router-link>
        <router-link to="/career">채용</router-link>
        <!-- <router-link to="/faq">FAQ</router-link> -->
      </div>
      <transition name="slide">
        <div v-if="sidebar" class="menu_mobile">
          <nav>
            <img @click="sidebar = false" src="../assets/menu_btn_white.svg" alt="menu button">
            <router-link @click.native="sidebar = false" to="/">소개</router-link>
            <router-link @click.native="sidebar = false" to="/campusfund">캠퍼스펀드</router-link>
            <router-link @click.native="sidebar = false" to="/career">채용</router-link>
          </nav>
        </div>
      </transition>
      <transition name="fade">
        <div @click="sidebar = false" v-if="sidebar" class="menu_mobile_back"></div>
      </transition>
      <div @click="sidebar = true" class="menu_mobile__btn">
        <img src="../assets/menu_btn.svg" alt="menu button">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false
    };
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
}
#nav {
  box-sizing: border-box;
  height: 80px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 170px;
  }
  .menu {
    @media screen and (max-width: 600px) {
      display: none;
    }
    display: block;
    a {
      text-decoration: none;
      color: #131313;
      padding: 20px 10px;
      &:not(:first-of-type) {
        margin-left: 20px;
      }
      &:hover {
        opacity: 0.6;
      }
    }
  }
  .slide-enter-active {
    animation: slide-in 0.25s;
  }

  .slide-leave-active {
    animation: slide-in 0.25s reverse;
  }

  @keyframes slide-in {
    0% {
      right: -70%;
    }
    100% {
      right: 0;
    }
  }

  .fade-enter-active {
    animation: fade-in 0.25s;
  }

  .fade-leave-active {
    animation: fade-in 0.25s reverse;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .menu_mobile {
    position: fixed;
    box-sizing: border-box;
    z-index: 9999;
    background-color: #ad2427;
    top: 0;
    /* transform: translateX(70%); */
    right: 0;
    width: 70%;
    height: 100vh;
    nav {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      img {
        margin-top: 18.5px;
        margin-right: 3.5px;
        margin-bottom: 1rem;
      }
      a {
        margin-top: 0.5rem;
        font-size: 1.5rem;
        color: #fff;
        text-decoration: none;
        padding: 0.5rem;
      }
    }
  }
  .menu_mobile_back {
    position: fixed;
    z-index: 9998;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .menu_mobile__btn {
    display: none;
    @media screen and (max-width: 600px) {
      display: block;
    }
  }
}
</style>
