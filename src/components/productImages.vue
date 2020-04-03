<template>
  <div class="productImagesContainer flex">
    <drop class="drop list" @drop="handleDrop(list, ...arguments)">
      <drag
        v-for="item in list"
        class="drag"
        :key="item"
        :class="{ [item]: true }"
        :transfer-data="{ item: item, list: list, example: 'lists' }"
      >{{ item }}</drag>
    </drop> -->
    <label for="uploadPhoto" class="uploadPhotoLable">
      Add photo
      <input type="file" id="uploadPhoto">
    </label>
  </div>
</template>

<script>
import { Drag, Drop } from "vue-drag-drop";

export default {
  name: "productImages",

  components: {
     Drag,
    Drop
  },
  data() {
     return {
      lists: [["A", "B", "C"], ["D", "E", "F"]]
     };
  },
   methods: {
     handleDrop(toList, data) {
       const fromList = data.list;
       if (fromList) {
        toList.push(data.item);
         fromList.splice(fromList.indexOf(data.item), 1);
        toList.sort((a, b) => a > b);
      }
    }
   }
};
</script>

<style>
.productImagesContainer {
  width: 32%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
}
 .productImagesContainer img {
  width: 90%;
  max-height: 400px;
  margin: 0 auto;
  object-fit: cover;
} 
.uploadPhotoLable {
  min-width: 60%;
  border-radius: 25px;
  border: none;
  background: linear-gradient(to right, #45abf0 0%, #2f80ed 100%);
  border: 1px solid transparent;
  padding: 15px 25px;
  color: #fff;
  font-size: 0.8em;
  cursor: pointer;
  transition: 0.7s;
  outline: none;
  text-align: center;
  position: relative;
  transition: 0.7s;
  margin: 15px 0;
}
.uploadPhotoLable > input {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
}
.uploadPhotoLable:hover {
  transform: scale(1.1);
}
</style>


