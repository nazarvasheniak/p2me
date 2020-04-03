<template>
  <div class="contactsContainer flex">
    <h2>Contacts</h2>
    <div class="contactsContainerRow flex">
      <img src="../assets/phone.png">
      <span></span>
      <div>
        <input class="editbleInput">
      </div>
    </div>
    <div class="contactsContainerRow flex">
      <img src="../assets/mail.png">
      <span></span>
      <div>
        <input class="editbleInput">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileContacts"
};
</script>

<style scoped>
.contactsContainer {
  border-radius: 5px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 15px 5px #e5e5e585;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  padding: 25px;
}
.contactsContainer h2 {
  margin-bottom: 15px;
}
.contactsContainerRow {
  width: 90%;
  margin: 15px auto;
  align-items: center;
}
.contactsContainerRow span {
  font-size: 0.8em;
  font-weight: 600;
}
.contactsContainerRow img {
  width: 25px;
  height: 25px;
  object-fit: contain;
  margin-right: 10px;
}

.editbleInput {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 0.8em;
  font-weight: 600;
  transition: 0.7s;
  outline-color: #9b77fb;
  padding: 5px;
}
</style>
