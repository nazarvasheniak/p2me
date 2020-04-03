<template>
  <div class="socialMainContainer flex">
      <h2>Social</h2>
    <div class="socialMainContainerRow flex">
      <img src="../assets/inst.png" alt>
      <input class="editbleInput" value="@burderking">
    </div>
    <div class="socialMainContainerRow flex">
      <img src="../assets/inst.png" alt>
      <input class="editbleInput" value="@burderking">
    </div>
    <div class="socialMainContainerRow flex">
      <img src="../assets/inst.png" alt>
      <input class="editbleInput" disabled value="@burderking">
    </div>
  </div>
</template>

<script>
export default {
  name: "profileSocial"
};
</script>

<style scoped>
.socialMainContainer {
  width: 100%;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 15px 5px #e5e5e585;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  padding: 25px;
  margin-top: 25px;
}
.editbleInput {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 0.8em;
  font-weight: 600;
  transition: 0.7s;
  outline-color: #9b77fb;
  /* text-indent: 3px; */
  padding: 5px;
}
.socialMainContainer h2{
    margin-bottom: 25px;
}
.socialMainContainerRow{
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
    /* border-bottom: 2px solid #000; */
}
.socialMainContainerRow img{
    width: 25px;
    height: 25px;
    object-fit: contain;
    margin-right: 10px;
}
.socialMainContainerRow span{
    font-weight: 600;
    font-size: .8em;
}
</style>
