<template>
  <div>
    <div class="">
      <h3 class="">Select subcategories: </h3>
      <div class="mainCatSelectContainer borderBottom flex">
        <div class="mainCatSelectItem" v-for="type in shoppingCategory">
          <label>{{ type.name }}
            <input type="checkbox"
                   name="subCatSelect"
                   v-model="shopType"
                   @click="uploadType"
                   :value="type.id"
                   class="mainCatSelect">
          </label>
        </div>
      </div>
    </div>
    <div>
      <div v-for="type in shoppingCategory" v-if="showSection">
        <h3 class="">For {{ type.name }}: </h3>
        <div class="mainCatSelectContainer flex">
          <label class="mainCatSelectItem" v-for="section in type.section">
            {{ section.name }}
            <input type="checkbox"
                   name="subCatSelect"
                   :disabled="edit"
                   class="mainCatSelect">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Shopping",
    computed: {
      shoppingCategory() {
        const shoppingCategory = this.$store.getters.getShoppingCategory;
        localStorage.setItem('shopping_category', JSON.stringify(shoppingCategory));
        return shoppingCategory
      },
    },
    props: ['edit'],
    data() {
      return {
        showSection: false,
        shopType: [ ],

      }
    },
    methods: {
      uploadType() {
        const shopData = new FormData();
        console.log(this.shopType);

        shopData.append('type', this.shopType);

        axios.put('http://localhost:8080/control_panel/supplier/profile_update/c69b99ad-67f5-46fc-ba4c-b29bb566e201/', shopData, {
          headers: {
            "Access-Control-Allow-Origin": '*',
            'Content-Type': 'multipart/form-data',
            "X-CSRFToken": "T4Y3zIK4UvgDYEurfYpmweKYRSUy0IEiqpuOtwyRZQNVAzoStLGFhShUi24TV8AP",
            Authorization: 'token ' + localStorage.getItem('token')
          }
        })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error.response)
            });
      }
    }
  }
</script>

<style scoped>
  .mainCatSelectItem {

    position: relative;
    cursor: pointer;
    border-radius: 25px;
    margin: 15px 10px;
    z-index: 1;
    background: transparent;
    padding: 15px 30px;
    transition: 0.8s ease-in;
    box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
  }

  .mainCatSelectItem:hover {
    box-shadow: 0 2px 15px rgba(30, 30, 30, 0.45);
  }

  .mainCatSelect {
    appearance: none;
    position: absolute;
    outline: none;
    width: 100%;
    border-radius: 25px;
    height: 100%;
    background-color: #fff;
    z-index: -1;
    left: 0;
    top: 0;
    margin: 0;
  }

  .mainCatSelect:checked {
    box-shadow: 0px 2px 15px #fcb3bb;
    background: linear-gradient(to right, #f56c80 0%, #ea84af 100%);
  }

  .mainCatSelectContainer {
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0;
  }

  .borderBottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 15px;
  }
</style>
