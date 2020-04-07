<template>
  <div class="mainAppContainer flex">
    <sidebar/>
    <topbar/>
    <div class="contentContainer flex">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/sidebar.vue";
import topbar from "../components/topbar.vue";

export default {
  name: "mainTemplate",
  components: {
    sidebar,
    topbar
  },
};
</script>

<style>
#sidebar {
  width: 263px;
  padding: 15px;
  height: 100%;
  position: fixed;
  z-index: 1;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 0 0 15px 5px #ededed;
}
#topbar {
  background: #fff;
  width: 100%;
  height: 95px;
  padding: 20px 40px 30px;
  justify-content: space-between;
  align-items: center;
}
.mainAppContainer {
  width: 100%;
  z-index: 0;
  height: 100%;
  flex-flow: column nowrap;
  background: transparent;
}
.contentContainer {
  width: auto;
  max-width: 100%;
  height: 100%;
  margin-left: 250px;
  padding: 0 25px 25px;
  z-index: 10;
}

.owl-next,
.owl-prev {
  width: 0 !important;
  height: 0 !important;
  position: relative !important;
  padding: 0 !important;
  margin: 0 !important;
}
.owl-next:before {
  content: ">";
  font-size: 2em;
  color: #4a4a4a;
  left: 50px;
  bottom: -55px;
  position: absolute;
}
.owl-prev:before {
  content: "<";
  font-size: 2em;
  color: #4a4a4a;
  right: 50px;
  bottom: -55px;
  position: absolute;
}
.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #9b9b9b;
}
.owl-nav {
  margin: 25px;
}
</style>


