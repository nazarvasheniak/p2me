 <template>
 
  <header id="topbar" class="flex">
    <searchbar></searchbar>
    <div class="right-container flex">
      <div class="topbarLang">
        <label for="lang">
          <select name id="lang">
            <option value="English">English</option>
            <option value="Русский">Русский</option>
          </select>
        </label>
      </div>
      <div class="topbarlogo" style="width: 50px; height: 50px">
        <img src="../assets/burder.png" alt="" style=" width: 50px; height: 50px;" />
      </div>
      <div class="topbarName">
        <p>{{shopProfile.name}}</p>
      </div>
      <button v-on:click.prevent="logout">
        <img src="../assets/logout.png" alt="Logout" v-on:click.prevent="logout">
      </button>
    </div>
  </header>
 </template>

 <script>

import searchbar from './searchbar';

  export default {
    name: "topbar",
    components: {
      searchbar
    },
    computed: {
      shopProfile() {
        const shopProfile = this.$store.getters.getShopProfile;
        localStorage.setItem('shopProfile', JSON.stringify(shopProfile));
        return shopProfile
      },
      supplierProfile() {
        const supplierProfile = this.$store.getters.getSupplierProfile;
        localStorage.setItem('supplierProfile', JSON.stringify(supplierProfile));
        return supplierProfile
      },
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
            .then(() => {
              this.$router.push('/login')
            })
      }
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 95px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .right-container {
    width: 220px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
  }
.search.active .magnifying-glass {
  transform: translateX(-7%);
}
.search.active .magnifying-glass-path {
  stroke-dasharray: 580 808;
  stroke-dashoffset: -224px;
}
.x {
  fill:none;
  stroke-dasharray: 56 92;
  stroke-dashoffset: -92px;
  stroke-linecap:round;
  stroke-width:6;
  stroke:#000;
  transition: stroke-dashoffset 500ms;
  visibility: hidden;
}
.search.active .x {
  visibility: visible;
}
.search.searching .x {
  stroke-dashoffset: 0;
}
.input {
  border: 0;
  font-size: 1.2em;
  left: 20px;
  outline: 0 !important;
  position: absolute;
  top: 4px;
}
.overlay {
  background: rgba(0,0,0,0);
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  transition: 300ms;
}
.overlay-1 {
  height: 64px;
  left: 110px;
  top: -10px;
  width: 64px;
}
.overlay-2 {
  height: 38px;
  left: 240px;
  top: 0px;
  width: 38px;
}
.overlay:hover {
  background: rgba(0,0,0,0.08);
}
.search.active .overlay-1 {
  visibility: hidden;
}
.search:not(.active) .overlay-2,
.search:not(.searching) .overlay-2 {
  visibility: hidden;
}
 

   .topbarlogo img {
     width: 65px;
     height: 65px;
     border-radius: 50%;
     object-fit: cover;
   }

    .topbarName p {
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.25831px;
      color: #535353;
      padding-left: 20px;
    }
   .topbarLang {
     position: relative;
  }
   .topbarLang label:before {
   content: url("../assets/icons/arrow_down.svg");
     z-index: 3;
     top: -10px;
     right: 25px;
     font-size: 30px;
     color: black;
     position: absolute;
     cursor: pointer;
   }
   .topbarLang select {
     position: relative;
     border: none;
     font-size: 18px;
     line-height: 21px;
     color: #535353;
     margin: 0px 45px 0 0;
     outline: none;
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
     cursor: pointer;

   }
   .topbarLang select option {
     outline: none;
     border: none;
   }
   button {
     padding-left: 30px;
     background: transparent;
     border: none;
     cursor: pointer;
     font-weight: 600;
     text-transform: capitalize;
     border-bottom: 1px solid transparent;
     color: #000;
     transition: .7s
   }

 

  button:hover,
  button:active,
   button:focus {
    text-decoration: underline;
     outline: none;
   }
 </style> 
