<template>
  <div id="app">
    <!-- <mainTemplate></mainTemplate> -->
    <mainTemplate v-if="isLoggedIn"/>
    <Login v-else="!isLoggedIn"/>
  </div>
</template>

<script>
import mainTemplate from "./components/mainTemplate.vue";
import Login from "./views/Login.vue";
export default {
  name: "App",
  components: {
    mainTemplate,
    Login
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      })
    })
  }
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=Questrial");
.app {
  font-family: 'Avenir_Next';
  src: url("http://www.yoursite.com/fonts/Avenir_Next.otf");
}
</style>

<style>
* {
  box-sizing: border-box;
}
::-moz-selection,
::selection {
  background: rgb(155, 119, 251);
  color: rgb(254, 197, 38);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: normal;
}
.flex {
  display: flex;
}
html,
body {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #4a4a4a;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>