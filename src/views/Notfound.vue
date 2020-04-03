<template>
  <div class="NFcontainer flex">
    <h1>Page not found!</h1>
    <router-link to="/dashboard" class="backButton">Back to dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: "Notfound"
};
</script>

<style scoped>
.NFcontainer {
  padding: 15px 0;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.NFcontainer h1 {
  font-size: 3em;
  text-transform: uppercase;
  font-weight: 900;
  background: -webkit-linear-gradient(#9b77fb, #33c9fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.backButton {
  text-decoration: none;
  padding: 10px 25px;
  margin-top: 50px;
  background: linear-gradient(to right, #9b77fb 0%, #33c9fe 100%);
  font-size: 1.2em;
  border: none;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.7s;
}
.backButton:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px 3px #9b77fb;
}
</style>
