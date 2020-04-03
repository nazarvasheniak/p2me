<template>
  <div class="loginContainer flex">
<!--    <div class="logoContainer flex">-->
<!--      <img src="../assets/logo.png" alt class="logo">-->
<!--    </div>-->
    <h1>{{type?'Sign in': 'Sign up'}}</h1>
    <div class="formContainer" v-show="type">
      <ValidationObserver ref="form">
        <form action="#" method="post" class="flex" @submit.prevent="login">
          <div class="inputContainerLogin flex">
            <ValidationProvider rules="required|numeric" v-slot="{ errors }">
              <div class="margin">
                <label for>Phone number
                  <input type="text"
                         placeholder="38(___) ___ __ __"
                         id="email" name="email"
                         autocomplete="off"
                         v-model="phone" required>
                  <span class="validateText">{{ errors[0] }}</span>
                </label>
              </div>
            </ValidationProvider>
          </div>
          <div class="inputContainerLogin flex">
            <ValidationProvider rules="required|alpha_dash" v-slot="{ errors }">
              <div class="margin">
                <label for="password">Password
                  <input type="password"
                          id="password"
                          name="password"
                          autocomplete="off"
                          v-model="password">
                  <span class="validateText">{{ errors[0] }}</span>
                </label>
              </div>
            </ValidationProvider>
          </div>
          <div class="inputContainerLogin flex">
            <input type="submit" value="Next">
            <div class="inputContainerLogin text-center flex">
              <a href="#" class="routerLink">Forgot your password?</a>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <div class="formContainer" v-if="!confirmNumber" v-show="!type">
      <ValidationObserver ref="form">
        <form action="#" method="post" class="flex" @submit.prevent="register">
          <div class="inputContainerLogin flex">
            <ValidationProvider rules="required|numeric" v-slot="{ errors }">
              <div class="margin">
                <label for="phone">Phone number
                  <input type="text"
                         placeholder="38(___) ___ __ __"
                         id="phone"
                         name="phone"
                         autocomplete="off"
                         v-model="phone" required>
                  <span class="validateText">{{ errors[0] }}</span>
                </label>
              </div>
            </ValidationProvider>
          </div>
          <div class="inputContainerLogin flex">
            <ValidationProvider rules="required|alpha_dash|confirmed:passwordConfirmation" v-slot="{ errors }">
              <div class="margin">
                <label for="passwordSignUp">Password
                  <input type="password"
                         id="passwordSignUp"
                         name="password"
                         autocomplete="off"
                         v-model="password">
                  <span class="validateText">{{ errors[0] }}</span>
                </label>
              </div>
            </ValidationProvider>
          </div>
          <div class="inputContainerLogin flex">
            <ValidationProvider rules="required|alpha_dash" vid="passwordConfirmation" v-slot="{ errors }">
              <div class="margin">
                <label for="password">Repeat password
                  <input type="password"
                         id="passwordConfirm"
                         name="passwordConfirm"
                         autocomplete="off"
                         v-model="passwordConfirmation">
                  <span class="validateText">{{ errors[0] }}</span>
                </label>
              </div>
            </ValidationProvider>
          </div>
          <div class="inputContainerLogin flex">
            <input type="submit" value="Next" v-on:click.prevent="register">
          </div>
        </form>
      </ValidationObserver>
    </div>
    <div class="formContainer" v-else v-show="!type">
      <form action="#" method="post" class="flex">
        <div class="inputContainerLogin flex">
          <div class="margin">
          <label for="confirmNumber">Verification Code
            <input type="text"
                   id="confirmNumber"
                   name="Confirm"
                   autocomplete="off"
                   v-model="confirmation_code"
                   required>
          </label>
        </div>
        </div>
        <input type="submit" value="Next" v-on:click.prevent="confirm(); type=!type ">
      </form>
    </div>
    <a v-on:click.prevent="type=!type">
      {{type?'Already have an account? Sign up' : 'Don’t have an account? Sign in'}}
    </a>
  </div>
</template>
<script>
  import {ValidationProvider, ValidationObserver} from "vee-validate";

  export default {
    name: "Login",
    components: {
      ValidationObserver,
      ValidationProvider
    },
    data() {
      return {
        phone: "",
        password: "",
        passwordConfirmation: "",
        confirmation_code: "",
        type: "Sign in",
        confirmNumber: false
      };
    },
    methods: {
      register() {
        let data = {
          phone: this.phone,
          password: this.password,
          is_admin: this.is_admin
        };
        this.$store.dispatch('register', data)
            .then(() => this.confirmNumber = true)
            .catch(err => console.log(err))
      },
      confirm() {
        console.log("confirm");
        let data = {
          phone: this.phone,
          confirmation_code: this.confirmation_code
        };
        this.$store.dispatch('confirm', data)
            .then(() => this.$router.push('/login'))
            .catch(err => console.log(err))
      },
      login() {
        let data = {
          phone: this.phone,
          password: this.password
        };
        this.$store.dispatch('login', data)
            .then(() => {
                localStorage.getItem('userType') == 'superadmin' ? this.$router.push('/request') : this.$router.push('/profile')
              }
            )
            .catch(err => console.log(err))
      }
    }
  };
</script>

<style scoped>
  .loginContainer {
    width: 100%;
    height: 100%;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    background: url("../assets/registrationBack.png") center center ;
    background-size: 1920px 1080px;
  }

  .loginContainer:before {
    content: "";
    position: absolute;
    right: 325px;
    bottom: 70px;
    width: 20%;
    z-index: 2;
    height: 20%;
    background: url("../assets/paketik.png")  center no-repeat ;
    /*background: linear-gradient(to right, #9b77fb 0%, #33c9fe 100%);*/
  }

  .loginContainer h1 {
    margin: 45px 0 40px 0;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;

    color: #000000;
  }

  .logoContainer {
    width: 100%;
    padding: 25px;
    margin-bottom: 50px;
  }

  .formContainer {
    padding: 25px;
    border-radius: 3px;
    -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
    box-shadow: 0 0 15px 5px #e5e5e585;
    background: #fff;
    width: 35%;
    max-width: 35%;
    justify-content: center;
  }

  .loginContainer a {
    cursor: pointer;
  }

  .formContainer form {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    width: 100%;
    margin: 40px auto;
  }

  .inputContainerLogin {
    flex-flow: column nowrap;
  }

  .inputContainerLogin {
    width: 100%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
  }

  .text-center {
    align-items: center !important;
    margin-top: 15px;
  }

  .inputContainerLogin label {
    width: 100%;
    color: #808080;
    font-size: 20px;
    line-height: 23px;
    font-weight: 200;
  }

  .inputContainerLogin div input {
    margin: 15px 0 0 0;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ebebeb;
    /* padding-bottom: 5px; */
    text-indent: 10px; 
    transition: 0.7s;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.138462px;
    color: #4a4a4a;
  }

  .inputContainerLogin input:focus {
    border-bottom: 1px solid #777;
    outline: none;
  }

  input[type="submit"] {
    width: 100%;
    border-radius: 25px;
    border: none;
    background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#f56c80),
            to(#ea84af)
    );
    background: linear-gradient(to right, #f56c80 0%, #ea84af 100%);
    padding: 15px 15px;
    color: #fff;
    font-size: 20px;
    line-height: 23px;
    margin-top: 50px;
    cursor: pointer;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    outline: none;
  }

  input[type="submit"]:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px 5px #99999991;
  }

  .loginContainer > a {
    text-decoration: none;
    color: #4a4a4a;
    margin: 45px auto;
  }

  .loginContainer > a:hover {
    text-decoration: underline;
  }

  .routerLink {
    align-items: center !important;
    font-size: 16px;
    line-height: 19px;
    color: #9b9b9b;
    text-decoration: underline;
  }

  .validateText {
    margin-bottom: 20px;
    font-size: 15px;
    color: #FB5F68;
  }

  .margin {
    margin: 0 0 15px 0;
  }
</style>
