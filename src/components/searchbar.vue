<template>
  <div class="searchbarContainer flex">
    <label for="searchinput" class="searchlabel flex">
      <img src="../assets/search.svg" @click="showSearch" alt="">
      <transition name="fade" mode="out-in">
        <input type="text" placeholder="search here" id="searchinput" v-if="show">
      </transition>
    </label>
  </div>
</template>

<script>
import iconSearch from "./icons/iconSearch.vue";
import iconSearchBlack from "./icons/iconSearchBlack.vue";

export default {
  name: "searchbar",
  components: {
    iconSearch,
    iconSearchBlack
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showSearch() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.searchbarContainer {
  width: 300px;
  height: 100%;
  margin-left: 250px;
  align-items: center;
}
.searchlabel {
  width: 100%;
  padding-left: 5px;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: 0.7s;
}
#searchinput {
  width: 100%;
  outline: none;
  height: 40px;
  font-size: 0.8em;
  text-indent: 50px;
  border: none;
  /* transition: 0.5s; */
  border-radius: 50px;
}
img {
  cursor: pointer;
}
/* #searchinput:focus {
  box-shadow: 0 0 3px 3px #fff;
} */
</style>
