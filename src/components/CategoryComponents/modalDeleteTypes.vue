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
                <h3>Do you really want to delete category "{{ }} "</h3>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                <p>In this case all sections wich belong to this category and all products will be deleted also </p>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="btn btn-blue" @click="$emit('close')">No</button>
                <button class="btn btn-red" @click="$emit('close')">Yes</button>
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
    name: "modalCloseTypes"
  }
</script>

<style scoped>
  /* ==================== MODAL ===================================================*/
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

  /*==============================End MODAL =========*/

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #4A4A4A;;
    background: transparent;
    outline: none;
  }

  .modal-header h3 {
    font-family: AvenirNext;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }

  .modal-body p {
    font-family: AvenirNext;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
  
</style>
