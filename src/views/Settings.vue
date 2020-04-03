<template>
    <div class="profileContainer flex settingsMainContainerBlock">
        <div class="headerRow flex">
        <h1>Settings</h1>
        
        </div>
        <div class="profileMainContainer flex settingMainContainerBlock">
            
                
                    <div class="recentOrdersContainerRow ">
                      <div v-if="currentTab === 'Notifications'">
                        <h3>Conditions of use</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod velit vel faucibus auctor. Donec lacinia pellentesque venenatis. Etiam non ante ut libero posuere imperdiet.</p>
                        <p>Cras tempus, eros at cursus cursus, metus augue bibendum velit, sit amet consectetur tortor ante eu nibh. Donec posuere mi sed dictum varius. Vestibulum tellus orci, egestas ut magna euismod, ornare laoreet lorem. Pellentesque arcu purus, aliquet eget ex fermentum, dictum vehicula felis.</p>
                        <p>Donec at congue turpis, eget rutrum elit. Praesent elementum odio id laoreet elementum.</p>
                        <br>
                        <h3>Privacy Policy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod velit vel faucibus auctor. Donec lacinia pellentesque venenatis. Etiam non ante ut libero posuere imperdiet. </p>
                        <p>Cras tempus, eros at cursus cursus, metus augue bibendum velit, sit amet consectetur tortor ante eu nibh. Donec posuere mi sed dictum varius. Vestibulum tellus orci, egestas ut magna euismod, ornare laoreet lorem. Pellentesque arcu purus, aliquet eget ex fermentum, dictum vehicula felis. </p>
                        <p>Donec at congue turpis, eget rutrum elit. Praesent elementum odio id laoreet elementum.</p>
                    </div>
                </div>
                    <div class="recentOrdersContainerRow ">
                        <tabs
                        class="recentOrdersContainerRow tabs flex"
                        :tabs="tabs"
                        :currentTab="currentTab"
                        :wrapper-class="'tabs'"
                        :tab-class="'tabs__item'"
                        :tab-active-class="'tabs__item_active'"
                        :line-class="'tabs__active-line'"
                        @onClick="handleClick"
                        ></tabs>
                    </div>
            
        </div>
    </div>    
</template>

<script>

import Tabs from "vue-tabs-with-active-line";

import axios from "axios";

export default {
  name: "Supplier",
  components: {
   Tabs
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  },
  data: () => ({
    tabs: [
      { title: "Notifications", value: "Notifications" },
      { title: "About us", value: "About us" }
    ],
    currentTab: "Notifications"
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style>
.settingMainContainerBlock {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 95%!important;
}
.settingMainContainerBlock > .recentOrdersContainerRow:first-child {
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
  padding: 30px;
  border-radius: 5px;
  width: 85%;
}
.settingMainContainerBlock > .recentOrdersContainerRow:nth-child(1) {
  width: 81%!important;
}
.settingMainContainerBlock > .recentOrdersContainerRow:last-child {
  width: 19%!important;
}
.settingMainContainerBlock > .recentOrdersContainerRow:last-child nav {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
}
.settingMainContainerBlock > .recentOrdersContainerRow:last-child nav button.tabs__item {
  width: 215px!important;
  padding: 31px 18px;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
  border-radius: 3px;
  font-size: 20px;
  line-height: 27px;
  color: #4A4A4A;
  border: none;
}
.settingMainContainerBlock > .recentOrdersContainerRow:last-child nav button.tabs__item.tabs__item_active {
  background: radial-gradient(227.68px at 0% 0%, #56CCF2 0%, #2F80ED 100%);
  border-radius: 3px;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF!important;
  width: 215px;
  box-shadow: 0px 2px 10px rgba(30, 30, 30, 0.12);
}
.settingsMainContainerBlock h1 {
  margin-bottom: 19px;
}
.settingsMainContainerBlock h3 {
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 137% */
  font-weight: bold;

  color: #4A4A4A;
}
.settingsMainContainerBlock p {
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  text-align: justify;

  color: #4A4A4A;
}
</style>
