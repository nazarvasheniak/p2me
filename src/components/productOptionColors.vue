<template>
  <div class="chooseSizeContainer flex">
    <div class="optionHeading">Colors:</div>
    <div class="colorItem selected" style="background: orange"></div>
    <div class="colorItem" style="background: red"></div>
    <div class="colorItem" style="background: green"></div>
    <div class="colorItem" style="background: white"></div>
    <div class="colorItem" style="background: grey"></div>
    <modalColors/>
  </div>
</template>

<script>
// import modal from "../components/modal.vue";

export default {
  name: "productOptions",
  components: {
    // modal
  }
};
</script>


<style scoped>
.chooseSizeContainer {
  margin: 25px 0;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
.colorItem {
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
  width: 25px;
  transition: 0.7s;
  height: 25px;
  border: 1px solid transparent;
  position: relative;
  box-shadow: 0 0 3px 3px #c9c9c9;
}

.colorItem:hover:after,
.selected:after {
  content: "";
  left: 48%;
  top: 50%;
  transform: translate(-48%, -49%);
  position: absolute;
  border: 1px solid #000;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  z-index: 2;
  transition: 0.7s;
}
.anotherOption {
  font-size: 0.8em;
  color: #4391ff;
  margin-left: 15px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background: transparent;
  outline: none;
}
.anotherOption:hover {
  text-decoration: underline;
}
</style>


