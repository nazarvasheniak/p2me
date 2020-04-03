<template>
  <div>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-button">
              <button type="button" class="btn-close" >
                <img src="../assets/Shape.png" alt="">
              </button>
            </div>
            <slot name="header">
              <h3>Please, select absent items</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div>
                <div v-for="item in order.item_in_order" class="modal-body-item">
                  <span>There is no {{ item.name }}</span>
                  <label class="checkbox">
                    <input type="checkbox">
                    <div>
                      <i><img src="../assets/Vector.png" alt=""></i>
                      <i class="icon-ok"> <img src="../assets/Rectangle13.1.png" alt=""></i>
                    </div>
                  </label>
                </div>
                <div class="modal-body-item">
                  <span>There are all not positions</span>
                  <label class="checkbox">
                  <input type="checkbox">
                  <div>
                    <i><img src="../assets/Vector.png" alt=""></i>
                    <i class="icon-ok"> <img src="../assets/Rectangle13.1.png" alt=""></i>
                  </div>
                  </label>
                </div>
                <div class="modal-body-item">
                  <span>The company can not accept order</span>
                  <label class="checkbox">
                  <input type="checkbox">
                  <div>
                    <i><img src="../assets/Vector.png" alt="">&nbsp;</i>
                    <i class="icon-ok"> <img src="../assets/Rectangle13.1.png" alt="">&nbsp;</i>
                  </div>
                  </label>
                </div>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="decline" @click="decline">
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
  export default {
    name: "modalOrder",
    computed: {
      order() {
        return this.$store.getters.order;
      }
    },
    methods: {
      decline() {
        this.$emit('declineStatus', this.$router.back());
      }
    }
  }
</script>

<style scoped>
  .decline {
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
  .decline:hover {
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
    width: 670px;
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
    padding: 35px 0 60px 0;
  }
  .modal-button {
    display: flex;
    justify-content: flex-end;
  }
  .modal-body {
    margin: 20px 0;
  }
  .modal-body-item {
    padding: 0 41px 10px 43px ;
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
.checkbox {
  text-transform: none;
  user-select: none;
  -moz-user-select: none;
}
  .checkbox div i {
    display: inline-block;
    transform: translateY(-20px);
  }
  .checkbox div {
    display: inline-block;
  }
  .checkbox input {
    display: none;
  }
  .checkbox input+div i:first-child{
    display: none;
  }
  .checkbox input+div i:last-child{
    position: absolute;
    z-index: 0;
  }
  .checkbox input:checked+div i:first-child{
    display: inline-block;
    position: absolute;
    z-index: 3;
    line-height: 31px;
    padding-left: 4px;
  }
  .checkbox input:checked+div i:last-child{
    position: absolute;
    z-index: 0;
  }



</style>
