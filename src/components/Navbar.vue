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
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>
