<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <div class="modal-button">
                <button type="button" class="btn-close" @click="$emit('close')">
                  <img src="../../assets/icons/close.svg" alt="close">
                </button>
              </div>
              <slot name="header">
                <h3>What do you provide?</h3>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                <div>
                  <div class="mainCatSelectContainer borderBottom flex">
                    <div class="mainCatSelectItem"
                         v-for="category in categoryTree"
                         :key="categoryTree.id">
                      <label>
                        {{ category.name }}
                        <input type="radio"
                               name="mainCatSelect"
                               v-model="shopCategory"
                               :value="category.id"
                               @click=" selectedComponent=category.name;"
                               class="mainCatSelect mainCatGroup"
                               >
                      </label>
                    </div>
                    <button @click="uploadCategory">ok</button>
                  </div>
                  <keep-alive>
                    <component :is="selectedComponent" :edit="edit"></component>
                  </keep-alive>
                </div>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="close" @click="uploadCategory">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import axios from "axios";
  import Restaurant from '../CategoryComponents/Restaurant'
  import Market from '../CategoryComponents/Market'
  import Pharmacy from '../CategoryComponents/Pharmacy'
  import Shopping from '../CategoryComponents/Shopping'

  export default {
    name: "modalOrder",
    components: {
      Restaurant: Restaurant,
      Market: Market,
      Pharmacy: Pharmacy,
      Shopping: Shopping,
    },
    data() {
      return {
        showCategory: false,
        shopCategory: '',
        selectedComponent: null,
        edit: true
      }
    },
    mounted() {
      this.$store.dispatch('load_category_tree');
    },
    computed: {
      categoryTree() {
        const category_tree = this.$store.getters.getCategoryTree;
        // console.log(category_tree);
        // localStorage.setItem('category_tree', JSON.stringify(category_tree));
        return category_tree
      },
    },
    methods: {
      uploadCategory() {
        const data = new FormData;
        console.log(this.shopCategory);
        data.append('category', this.shopCategory);
        axios.put('http://localhost:8080/control_panel/supplier/profile_update/c69b99ad-67f5-46fc-ba4c-b29bb566e201/', data, {
          headers: {
            "Access-Control-Allow-Origin": '*',
            "Content-Type": "application/json",
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
  .close {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    display: block;
    width: 108px;
    height: 48px;
    text-align: center;
    line-height: 43px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 26px;
    letter-spacing: 0.172206px;
    transition: 0.7s;
    color: #fff;
    border: 2px solid #f56c81;
    background-color: #f56c81;
    cursor: pointer;
    outline: none;
  }
  /* .scrollable-element {
  scrollbar-width: thin;
} */
  .close:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    display: block;
    width: 108px;
    height: 48px;
    text-align: center;
    line-height: 43px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 26px;
    letter-spacing: 0.172206px;
    transition: 0.7s;
    background: #fff;
    border: 2px solid #f56c81;
    color: #f56c81;
    cursor: pointer;
    outline: none;
  }
  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #4A4A4A;;
    background: transparent;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    display: table;
    transition: opacity .3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-container {
    overflow: scroll;
    max-height: 700px;
    min-width: 470px;
    max-width: 70%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  .modal-header h3 {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.14359px;
    color: #4A4A4A;
    padding: 20px 0 0px 0;
  }
  .modal-button {
    display: flex;
    justify-content: flex-end;
  }
  .modal-body {
    /*margin: 20px 0;*/
  }
  .modal-body-item {
    padding: 0 41px 10px 43px;
    display: flex;
    justify-content: space-between;
  }
  .modal-footer {
    text-align: -webkit-center;
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .mainCatSelectContainer {
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0;
  }
  .mainCatSelectItem:hover {
    box-shadow: 0 2px 15px rgba(30, 30, 30, 0.45);
  }
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
  .mainCatSelectItem label, .mainCatSelectItem input {
    cursor: pointer;
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
    justify-content: space-between;
    align-items: flex-start;
    /*margin: 10px 0;*/
  }


</style>
