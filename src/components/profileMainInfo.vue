<template>
  <div class="profileMainInfoContainer flex">
    <div class="profileMainInfoSubContainer flex">
      <div class="subContainerSub flex">
        <label for="uploadPhoto">
          <input type="file" id="uploadPhoto" title="photo">
        </label>
        <img src="../assets/avatar.png" alt>
        <textarea id="profileName" v-on:hover="test()">{{profileName}}</textarea>
        <button class="allowEdit">Edit</button>
        <div id="editButtons" class="edit flex">
          <button>cancel</button>
          <button>save</button>
        </div>
      </div>
      <div class="profileMainInfoSubContainer flex">
        <h3>Information</h3>
        <textarea name="mainInfo" class="editbleTextarea" v-model="mainInfo" disabled></textarea>
        <button class="allowEdit" @click="$emit('editInfo', true)">Edit</button>
        <div id="editButtons" class="edit flex" v-show="$on(editInfo)">
          <button>cancel</button>
          <button>save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileMainInfo",
  data() {
    return {
      disabled: false,
      profileName: "Burger King",
      mainInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus quos omnis optio, enim neque similique quaerat perspiciatis culpa tenetur placeat nostrum quis veritatis architecto impedit. Adipisci, exercitationem! Quo, iusto!"
    };
  },
  methods: {
    editInfo: function() {
      console.log("click event is done");
    }
  }
};
function test(){
  console.log(123)
}
</script>

<style scoped>
.profileMainInfoContainer {
  border-radius: 5px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 15px 5px #e5e5e585;
  flex-flow: column nowrap;
  padding: 25px;
}
.subContainerSub {
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
}
#profileName {
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.322887px;
  margin: 0 15px;
  background: transparent;
  color: #000;
  outline-color: #9b77fb;

  resize: none;
  border: none;
}
.subContainerSub label {
  position: absolute;
  width: 75px;
  height: 75px;
  left: -20px;
  top: -20px;
  background: url(../assets/camera.png) center center no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 0.7s;
  z-index: 2;
}
.subContainerSub label:hover {
  transform: scale(1.2)
}
.subContainerSub img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: contain;
}
.subContainerSub label input {
  width: 100%;
  height: 100%;
  opacity: 0;
}
.profileMainInfoSubContainer {
  width: 100%;
  flex-flow: column nowrap;
  position: relative;
}
.profileMainInfoSubContainer h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}
/* .profileMainInfoSubContainer p{
    color: #9b9b9b;
    font-size: .8em;
} */
.editbleTextarea:focus {
  box-shadow: 0 0 12px 2px #9b77fb;
}
.editbleTextarea {
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.215258px;
  font-weight: 600;
  transition: 0.7s;
  text-indent: 3px;
  color: #9b9b9b;
  width: 100%;
  appearance: none;
  resize: none;
  padding: 15px;
  outline: none;
  min-height: 250px;
  position: relative;
}
.allowEdit {
  /*display: none;*/
  position: absolute;
  color: #9B9B9B;;
  background: #ffffff;
  padding: 5px 10px;
  transition: 0.7s;
  right: 0;
  cursor: pointer;
  top: 0;
  border: none;
  outline: none;
  z-index: 5;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.232479px;
  /*background: linear-gradient(to right, #9b77fb 0%, #33c9fe 100%);*/
}
/* .profileMainInfoSubContainer:hover > .allowEdit {
  display: block;
} */
.profileMainInfoSubContainer:nth-child(2) {
  margin-top: 50px;
}
.edit {
  margin-top: 15px;
  font-weight: 600;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  /*display: none;*/
}
.edit > button {
  padding: 5px;
  cursor: pointer;
  outline: none;
}
.edit > button:first-child {
  background: none;
  border: none;
  color: #d0102c;
  border-bottom: 2px solid transparent;
  transition: 0.7s;
}
.edit > button:first-child:hover {
  border-bottom: 2px solid #d0102c;
}
.edit > button:last-child {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  transition: 0.7s;
  color: #37c5fe;
}
.edit > button:last-child:hover {
  border-bottom: 2px solid #37c5fe;
}
#uploadPhoto{
  cursor: pointer;
}
</style>

