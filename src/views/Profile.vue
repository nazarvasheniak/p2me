<template>
  <div class="profileContainer flex">
    <div class="headerRow flex">
      <h1>Profile</h1>
      <h2>(here you can edit your main info)</h2>
    </div>
    <ValidationObserver>
      <!--  ===========================    Main Container ==========================-->
      <div class="profileMainContainer flex">
        <div class="profileSubContainer flex">
          <div class="profileMainInfoContainer flex">
            <div class="profileMainInfoSubContainer flex">
              <h3>Main Info</h3>
              <button class="allowEdit" v-if="edit" @click="edit = !edit">Edit</button>
              <button class="allowEdit" v-else @click="UploadProfile">Save</button>
                <!-- ==========   Logo Profile =============-->
              <div class="subContainerSub flex">
                <label for="uploadPhoto" :class="{labelUploadPhoto: !edit}" class="uploadPhoto">
                  <input type="file" id="uploadPhoto" title="photo" :disabled="edit">
                </label>
                <img :src="shopProfile.logo_image"
                     id="profileLogo" alt
                     >
                <div class="subContainerSub flex">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="flex">
                      <label for="profileName"></label>
                      <textarea id="profileName"
                                name="profileName"
                                :disabled="edit"
                                v-model="profileName"
                                autocomplete="off"
                                rows="1"
                                :placeholder="shopProfile.name"
                                :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}"
                      ></textarea>

                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <!-- ==========   Name Profile =============-->
              <div class="profileMainInfoSubContainer flex">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="">
                    <label for="mainInfo">
                <textarea name="mainInfo"
                          id="mainInfo"
                          rows="17"
                          v-model="mainInfo"
                          :placeholder="shopProfile.description"
                          class="editbleTextarea"
                          :disabled="edit"
                          :class="{editbleTextareaEditBorder: !edit, validateColorTextarea: errors[0]}"
                ></textarea>
                    </label>
                  </div>
                  <span class="validateText">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>
        <div class="profileSubContainer flex">
          <div class="contactsContainer flex">
            <div class="profileMainInfoSubContainer flex">
              <button class="allowEdit" v-if="edit" @click="edit = !edit">Edit</button>
              <button class="allowEdit" v-else @click="edit = true; UploadProfile">Save</button>
              <h2>Contacts</h2>
              <!--  =====================    Contacts profile ===============-->
              <div class="contactsContainerRow flex">
                <ValidationProvider rules="numeric" v-slot="{ errors }">
                  <div class="flex">
                    <img src="../assets/phone.png">
                    <span></span>
                    <input class="editbleInput"
                           type="text"
                           v-model="phone"
                           :placeholder="supplierProfile.contact_person_phone"
                           :disabled="edit"
                           :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">
                  </div>
                  <span class="validateText">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <!--  =====================    Email profile ===============-->
              <div class="contactsContainerRow flex">
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <div class="flex">
                    <img src="../assets/mail.png">
                    <span></span>
                    <input class="editbleInput"
                           v-model="email" autocomplete="off"
                           :placeholder="supplierProfile.contact_person_email"
                           :disabled="edit"
                           :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                  </div>
                  <span class="validateText">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="socialMainContainer flex">
            <div class="profileMainInfoSubContainer flex">
              <button class="allowEdit" v-if="edit" @click="edit = !edit">Edit</button>
              <button class="allowEdit" v-else @click="edit = true; UploadProfile">Save</button>
              <h2>Social</h2>
              <!--  =====================    Inst profile ===============-->
              <div class="socialMainContainerRow flex" :class="{deleteBorder: !edit}">
                <img src="../assets/inst.png" alt>
                <input class="editbleInput"
                       :disabled="edit"
                       :placeholder="shopProfile.link_to_instagram"
                       v-model="link_to_instagram"
                       :class="{editbleTextareaEdit: !edit}">
              </div>
              <!--  =====================    Facebook profile ===============-->
              <div class="socialMainContainerRow flex" :class="{deleteBorder: !edit}">
                <img src="../assets/fb.png" alt>
                <input class="editbleInput"
                       :disabled="edit"
                       :placeholder="shopProfile.link_to_facebook"
                       v-model="link_to_facebook"
                       :class="{editbleTextareaEdit: !edit}">
              </div>
              <!--  =====================    Inst profile ===============-->
              <div class="socialMainContainerRow flex" :class="{deleteBorder: !edit}">
                <img src="../assets/inst.png" alt>
                <input class="editbleInput"
                       :disabled="edit"
                       :placeholder="shopProfile.link_to_twitter"
                       v-model="link_to_twitter"
                       :class="{editbleTextareaEdit: !edit}">
              </div>
              <!--  =====================    Inst profile ===============-->
              <div class="socialMainContainerRow flex" :class="{deleteBorder: !edit}">
                <img src="../assets/inst.png" alt>
                <input class="editbleInput"
                       :disabled="edit"
                       :placeholder="shopProfile.link_to_telegram"
                       v-model="link_to_telegram"
                       :class="{editbleTextareaEdit: !edit}">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  ===========================    Address Container ==========================-->
      <div class="profileSubContainer flex">
        <div class="addresContainer flex">
          <div class="profileMainInfoSubContainer flex">
            <button class="allowEdit" v-if="edit" @click="edit = !edit">Edit</button>
            <button class="allowEdit" v-else @click="edit = true; UploadProfile">Save</button>
            <h2>Adress</h2>
            <div class="adressContainerRows flex">
              <div class="adressContainerRow flex">
                <div class="adressInput adressInputNumber">
                  <label for="shopNumber"></label>
                  <input id="shopNumber" class="adressContainerRowSub adressContainerRowSubNumber" value="№1"
                         :disabled="edit">
                </div>
                <div class="adressInputAddress">
                  <ValidationProvider rules="required|numeric" v-slot="{ errors }">
                    <div class="adressInput ">
                      <label for="shopAdress"></label>
                      <input class="adressContainerRowSub"
                             id="shopAdress"
                             v-model="shopAdress" autocomplete="off"
                             placeholder="Write branch address"
                             :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}"
                             :disabled="edit">
                      <span class="validateText">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="adressInputTime">
                  <ValidationProvider rules="required|numeric" v-slot="{ errors }">
                    <div class="adressInput ">
                      <label for="shopTime"></label>
                      <input class="adressContainerRowSub"
                             placeholder="Working hours"
                             v-model="shopTime" autocomplete="off"
                             id="shopTime"
                             :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}"
                             :disabled="edit">
                      <span class="validateText">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="adressInputPhone">
                  <ValidationProvider rules="required|numeric" v-slot="{ errors }">
                    <div class="adressInput ">
                      <label for="shopPhone"></label>
                      <input class="adressContainerRowSub"
                             placeholder="+38 (___) ___ __ __"
                             id="shopPhone"
                             v-model="shopPhone" autocomplete="off"
                             :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}"
                             :disabled="edit">
                      <span class="validateText">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="adressContainerFooter flex">
              <button id="addANewAdress">Add a new adress</button>
            </div>
          </div>
        </div>
      </div>
      <!--  ===========================    Category Container ==========================-->
      <div class="profileSubContainer flex">
        <div class="setCategoriesContainer flex">
          <div class="profileMainInfoSubContainer flex">
            <div class="adressContainerFooter flex justify-content-between">
              <h2>Categories</h2>
              <button id="addCategory" @click.prevent="showCategory = !showCategory">Choose categories</button>
            </div>
            <div class="mainCatSelectContainer borderBottom flex">
              <div class="mainCatSelectItem" v-for="category in shopProfile.category_tree">
<!--                <img src="../assets/icons/close_white.svg" alt="close" @click="modalTypes = !modalTypes">-->
                <div>{{ category.name }}</div>
              </div>
            </div>
            <h2>Type</h2>
            <div class="mainCatSelectContainer borderBottom flex">
              <div class="mainCatSelectItem" v-for="type in shopProfile.category_tree[0].type">
                <img src="../assets/icons/close_white.svg" alt="close" @click="modalTypes = !modalTypes">
                <div>{{ type.name }}</div>
              </div>
            </div>

            <div class="mainCatSelectContainer borderBottom flex">
              <div class="mainCatSelectContainer" v-for="(type, i) in shopProfile.category_tree[0].type" :key="i">
                <h2>For {{ type.name }}</h2>
                <div class="mainCatSelectItem" v-for="section in shopProfile.category_tree[0].type[i].section">
                  <img src="../assets/icons/close_white.svg" alt="close" @click="modalTypes = !modalTypes">
                  <div>{{ section.name }}</div>
                </div>
              </div>
            </div>
            <app-modal-category v-if="showCategory" @close="showCategory = false"></app-modal-category>
            <modal-delete-types v-if="modalTypes" @close="modalTypes = false"></modal-delete-types>
            <modal-delete-types v-if="modalSection" @close="modalSection = false"></modal-delete-types>
          </div>
        </div>
      </div>
      <!--  ===========================    Banner Container ==========================-->
      <div class="profileSubContainer flex">
        <div class="bannersAndSales flex">
          <h2>Banners and sales</h2>
          <div class="bannersAndSalesSubRow flex">
            <div class="bannersAndSalesSubRowItem flex">
              <div class="bannersAndSalesSubRowItemPic">
                <img :src="shopProfile.header_image" alt>
                <div class="bannersAndSalesSubRowItemPicSub flex">
                  <button >Make main</button>
                  <button>Show in the main menu</button>
                  <button>Delete banner</button>
                </div>
              </div>
            </div>
            <div class="bannersAndSalesSubRowItem flex">
              <div class="bannersAndSalesSubRowItemAdd flex">
                <label for="uploadBanner">
                  <iconPlus/>
                  <input type="file" name="addBanner" id="uploadBanner" title="Add banner" >
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  ===========================    Legal Container ==========================-->
      <div class="profileSubContainer flex">
        <div class="legalInfoContainer flex">
          <div class="profileMainInfoSubContainer flex">
            <button class="allowEdit" v-if="edit" @click="edit = !edit">Edit</button>
            <button class="allowEdit" v-else @click="edit = true; UploadProfile">Save</button>
            <h2>Legal information</h2>
            <div class="legalInfoContainerColumns flex">
              <div class="legalInfoContainerSub flex">
                <div class="legalInfoContainerItem flex">
                  <h2>Accounting Contact Person:</h2>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>Name:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               :placeholder="supplierProfile.contact_person_name"
                               :disabled="edit"
                               v-model="personName"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>

                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>Phone:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               v-model="personPhone"
                               :placeholder="supplierProfile.contact_person_phone"
                               :disabled="edit"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>
                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="legalInfoContainerItem flex">
                  <h2>Legal address:</h2>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>Adress:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               :placeholder="supplierProfile.registration_country"
                               rows="2"
                               v-model="legalAddress"
                               :disabled="edit"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>
                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="legalInfoContainerItem flex">
                  <h2>Bank details:</h2>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>Bank's name:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               :placeholder="supplierProfile.bank_name"
                               v-model="bankName"
                               :disabled="edit"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>
                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>Account number:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               :placeholder="supplierProfile.bank_account"
                               :disabled="edit"
                               v-model="accountNumber"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>
                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>MFI:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               :placeholder="supplierProfile.bank_mfo"
                               v-model="MFI"
                               :disabled="edit"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>
                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider rules="numeric" v-slot="{ errors }">
                    <div class="legalInfoContainerItemName flex">
                      <div>EDRPOU:</div>
                      <span></span>
                      <div>
                        <input class="editbleInput"
                               :placeholder="supplierProfile.bank_edrpou"
                               :disabled="edit"
                               v-model="EDRPOU"
                               :class="{editbleTextareaEdit: !edit, validateColor: errors[0]}">

                      </div>
                    </div>
                    <span class="validateText">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="legalInfoContainerSub flex">
                <div class="legalInfoContainerItem flex">
                  <h2>Type of ownership:</h2>
                  <select name id="ownershipType">
                    <option value="ВАТ">ВАТ</option>
                    <option value="ЗАТ">ЗАТ</option>
                    <option value="ТОВ">ТОВ</option>
                  </select>
                </div>
                <div class="legalInfoContainerItem flex">
                  <h2>Documents:</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at est, ex explicabo impedit </p>
                    <div>
                      <ul  class="documentList">
                        <li v-for="item in uploadDocuments" class="documentItem">
                          <img :src="item" alt="">
                          <img class="documentClose" src="../assets/icons/close_white.svg" alt="">
                        </li>
                      </ul>
                    </div>
                  <div class="documentInput">
                  <span>choose your files</span>
                    <label for="fileInputDocsProfile">

                      Choose files
                      <input type="file" id="fileInputDocsProfile"  multiple>
                    </label>
                  </div>

                  <button class="documentUpload " @click="submit">Upload</button>
<!--                  <drop class="drop" @drop="handleDrop">-->
<!--                    <img src="../assets/dragfiles.png" alt>-->
<!--                  </drop>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  ===========================    Setting Container ==========================-->
      <div class="profileSubContainer flex">
        <div class="profileSettingsContainer flex">
          <h2>Settings</h2>
          <div class="profileSettingsContainerSub">
            <button>Change Password</button>
            <button>Delete this restaurant</button>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
  import Restaurant from '../components/CategoryComponents/Restaurant'
  import Market from '../components/CategoryComponents/Market'
  import Pharmacy from '../components/CategoryComponents/Pharmacy'
  import Shopping from '../components/CategoryComponents/Shopping'
  import modalCategory from '../components/CategoryComponents/modalCategory'
  import modalDeleteTypes from '../components/CategoryComponents/modalDeleteTypes'
  import modalDeleteSection from '../components/CategoryComponents/modalDeleteSection'
  import {ValidationProvider, ValidationObserver} from "vee-validate";
  import iconPlus from "../components/icons/iconPlus.vue";
  import {Drop} from "vue-drag-drop";
  import axios from "axios";

  export default {
    name: "Profile",
    components: {
      Restaurant: Restaurant,
      Market: Market,
      Pharmacy: Pharmacy,
      Shopping: Shopping,
      iconPlus,
      Drop,
      ValidationObserver,
      ValidationProvider,
      appModalCategory: modalCategory,
      modalDeleteTypes: modalDeleteTypes,
      modalDeleteSection: modalDeleteSection
    },
    data() {
      return {
        edit: true,
        showCategory: false,
        modalTypes: false,
        modalSection: false,
        profileName: '',
        phone: '',
        email: '',
        mainInfo: '',
        link_to_instagram: '',
        link_to_facebook: '',
        link_to_twitter: '',
        link_to_telegram: '',
        shopAdress: '',
        shopTime: '',
        shopPhone: '',
        personName: '',
        personPhone: '',
        legalAddress: '',
        bankName: '',
        accountNumber: '',
        MFI: '',
        EDRPOU: '',
        selectedComponent: null,

      }
    },
    computed: {
      supplierProfile() {
        const supplierProfile = this.$store.getters.getSupplierProfile;
        localStorage.setItem('supplierProfile', JSON.stringify(supplierProfile));
        return supplierProfile
      },
      categories() {
        console.log(this.store.getters.getSupplierProfile);
        // const categories = this.$store.getters.getCategory();
        // localStorage.setItem('category', JSON.stringify(categories));
        // return categories
      },

      uploadDocuments() {
        const upload_documents = this.$store.getters.getUploadDocuments;
        localStorage.setItem('upload_documents', JSON.stringify(upload_documents));
        return upload_documents
      },

      shopProfile() {
        const shopProfile = this.$store.getters.getShopProfile;
        localStorage.setItem('shopProfile', JSON.stringify(shopProfile));
        return shopProfile
      },
    },
    created() {
      this.$store.dispatch('load_profile');
    },
    methods: {
      UploadProfile() {
        const data = new FormData;
        let imageFile = document.querySelector('#uploadPhoto');
        let imageFileBanner = document.querySelector('#uploadBanner');


        if(this.profileName !== '' ) {
          data.append('shop_name', this.profileName);
        }
        if(this.phone !== '' ) {
          data.append('contact_person_phone', this.phone);
        }
        if(this.personName !== '' ) {
          data.append('contact_person_name', this.personName);
        }
        if(this.email !== '' ) {
          data.append('contact_person_email', this.email);
        }
        if(this.personPhone !== '' ) {
          data.append('phone_for_driver', this.personPhone);
        }
        if(this.legalAddress !== '' ) {
          data.append('registration_country', this.legalAddress);
        }
        if(this.bankName !== '' ) {
          data.append('bank_name', this.bankName);
        }
        if(this.accountNumber !== '' ) {
          data.append('bank_account', this.accountNumber);
        }
        if(this.MFI !== '' ) {
          data.append('bank_mfo', this.MFI);
        }
        if(this.EDRPOU !== '' ) {
          data.append('bank_edrpou', this.EDRPOU);
        }
        if(this.mainInfo !== '' ) {
          data.append('shop_description', this.mainInfo);
        }
        console.log(document.querySelector('#profileLogo').load);
        
        if(this.link_to_instagram !== '' ) {
          data.append('link_to_instagram', this.link_to_instagram);
        }
        if(this.link_to_facebook !== '' ) {
          data.append('link_to_facebook', this.link_to_facebook);
        }
        if(this.link_to_twitter !== '' ) {
          data.append('link_to_twitter', this.link_to_twitter);
        }
        if(this.link_to_telegram !== '' ) {
          data.append('link_to_telegram', this.link_to_telegram);
        }

        

        axios.put('http://localhost:8080/control_panel/supplier/profile_update/89b48bb9-ef54-46d5-b1b3-ca16a6019643/', data, {
          headers: {
            "Access-Control-Allow-Origin": '*',
            "Content-Type": "application/json",
            "X-CSRFToken": "m3s8naT9iWxPCjiRoix4m5jGXBsOyp8sd8dwUyDJxOG0wOdmS0MAVWEBVBD9KC5l",
            Authorization: 'token ' + localStorage.getItem('token')
          }
        })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error.response)
            });
        this.edit = true;
      },
      submit() {
        const dataFile = new FormData;
        let file = document.querySelector('#fileInputDocsProfile');
        console.log(file.files[0]);
          dataFile.append( "profile_supplier", this.$store.getters.getSupplierProfile.id);
          dataFile.append('document', file.files[0]);

        axios.post('http://localhost:8080/control_panel/supplier/profile_upload_documents/', dataFile, {
          headers: {
            "Access-Control-Allow-Origin": '*',
            "Content-Type": "application/json",
            "X-CSRFToken": "m3s8naT9iWxPCjiRoix4m5jGXBsOyp8sd8dwUyDJxOG0wOdmS0MAVWEBVBD9KC5l",
            Authorization: 'token ' + localStorage.getItem('token')
          }
        })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error.response)
            });
      },
      handleDrop( event) {
        event.preventDefault();
        const files = event.dataTransfer.files;
        const filenames = [];
        for (let i = 0; i < files.length; i++) {
          filenames.push(files.item(i).name);
        }
        alert(`You dropped files: ${JSON.stringify(filenames)}`);

      },
    }
  };
</script>

<style scoped>

  /* ================Main Container============*/
  #profileName {
    font-family: AvenirNext;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.25831px;
    margin: 0 35px;
    background: transparent;
    color: #000;
    outline: none;
    resize: none;
    border: none;
  }
  #mainInfo {
    font-family: AvenirNext;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.25831px;
  }
  .profileMainInfoContainer {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    flex-flow: column nowrap;
    padding: 25px;
  }
  .profileMainInfoSubContainer {
    width: 100%;
    /*height: 100%;*/
    flex-flow: column nowrap;
    position: relative;
  }
  .profileMainInfoSubContainer h3 {
    padding-left: 10px;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.25831px;

    color: #4A4A4A;
    margin-bottom: 10px;
  }
  .profileMainInfoSubContainer:nth-child(2) {
    margin-top: 50px;
  }
  .profileContainer {
    flex-flow: column nowrap;
    width: 100%;
    margin-bottom: 25px;
  }
  .profileMainContainer > .profileSubContainer:nth-child(1) {
    width: 60%;
  }
  .profileMainContainer > .profileSubContainer:nth-child(2) {
    width: 35%;
    flex-flow: column nowrap;
    background: transparent;
    box-shadow: none;
  }
  .profileMainContainer {
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
  }

  .headerRow {
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    margin-bottom: 13px;
  }
  .headerRow h1 {
    color: #535353;
    margin: 0;
    font-family: AvenirNext;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.25831px;
    font-weight: bold;
  }
  .headerRow h2 {
    margin: 0 15px;
    color: #535353;
    font-size: 18px;
    align-self: flex-end;
  }

  .subContainerSub {
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
  }
  .subContainerSub label {
    position: absolute;
    width: 75px;
    height: 75px;
    left: -20px;
    top: -20px;
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
    object-fit: cover;
  }
  .subContainerSub label input {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .labelUploadPhoto {
    background: url(../assets/camera.png) center center no-repeat;
  }
  .uploadPhoto {
    left: 10px !important;
    top: 10px !important;
  }
  #uploadPhoto {
    cursor: pointer;
  }

  .editbleTextarea:focus {
    box-shadow: 0 0 12px 2px #E8E8E8;
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
  .editbleInput {
    font-family: AvenirNext;
    font-size: 16px !important;
    line-height: 19px;
    letter-spacing: 0.215258px;
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-weight: 600;
    transition: 0.7s;
    padding: 5px;
  }
  .editbleTextareaEdit {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
  }
  .editbleTextareaEditBorder {
    border: 1px solid rgba(0, 0, 0, 0.12) !important;
  }
  .deleteBorder {
    border-bottom: none !important;
  }

  .allowEdit {
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
  }

  .edit {
    margin-top: 15px;
    font-weight: 600;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
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

  .mainCatSelectContainer {
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 10px 0;
  }
  .mainCatSelectItem {
    position: relative;
    border-radius: 25px;
    margin: 15px 10px;
    z-index: 1;
    background: transparent;
    padding: 15px 30px;
    transition: 0.8s ease-in;
    box-shadow: 0px 2px 15px #fcb3bb;
    background: linear-gradient(to right, #f56c80 0%, #ea84af 100%);
  }
  .mainCatSelectItem img {
    width: 12px;
    height: 12px;
    cursor: pointer;
    margin-right: 15px;
    margin-left: -10px;
    color: #fff;
  }
  .mainCatSelectItem div {
    display: inline-block;
    color: #fff;
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

  .validateText {
    margin-bottom: 20px !important;
    font-size: 13px !important;
    color: #FB5F68 !important;
    display: inline-block;
    font-weight: 300 !important;
  }
  .validateColor {
    border-bottom: 1px solid #FB5F68 !important;
  }
  .validateColorTextarea {
    border: 1px solid #FB5F68 !important;
  }
  .borderBottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 15px;
  }

  /* ================Contacts profile============*/
  .contactsContainer {
    border-radius: 5px;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    padding: 25px;
    position: relative;
  }
  .contactsContainer h2 {
    margin-bottom: 15px;
  }
  .contactsContainerRow {
    padding-left: 45px;
    width: 90%;
    margin: 5px auto;
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
  /* ================Social profile============*/
  .socialMainContainer {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    padding: 25px;
    margin-top: 25px;
  }
  .socialMainContainer h2 {
    margin-bottom: 25px;
  }
  .socialMainContainerRow {
    width: 67%;
    margin: 0 auto;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .socialMainContainerRow img {
    width: 25px;
    height: 25px;
    object-fit: contain;
    margin-right: 10px;
  }
  .socialMainContainerRow span {
    font-weight: 600;
    font-size: .8em;
  }
  /* ================Address profile============*/
  .addresContainer {
    width: 100%;
    flex-flow: column nowrap;
    background: #ffffff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    padding: 25px;
    margin: 25px 0;
    border-radius: 3px;
    position: relative;
  }
  .adressContainerFooter {
    width: 100%;
    padding: 25px 0;
  }
  #addANewAdress, .documentUpload {
    min-width: 200px;
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
    border: 1px solid #0000;
    padding: 10px 15px;
    color: #fff;
    font-size: 0.8em;
    cursor: pointer;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    outline: none;
  }
  #addANewAdress:hover, .documentUpload:hover {
    transform: scale(1.1);
  }
  #addCategory {
    background: radial-gradient(100% 100% at 0% 0%, #56CCF2 0%, #2F80ED 100%), radial-gradient(96.87% 96.87% at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%);
    box-shadow: 0px 2px 15px rgba(51, 201, 254, 0.16);
    border-radius: 24px;
    border: 1px solid #0000;
    padding: 10px 15px;
    color: #fff;
    font-size: 0.8em;
    cursor: pointer;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    outline: none;
  }
  #addCategory:hover {
    transform: scale(1.1);
  }
  .adressContainerRows {
    width: 100%;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  .adressContainerRow {
    width: 100%;
    /*border-bottom: 1px solid #f0f0f0;*/
    padding: 30px 15px;
    transition: 0.7s;
    margin-top: 15px;
    justify-content: space-between;
  }
  .adressContainerRowSub {
    width: 100%;
    font-size: 0.7em;
    outline: none;
    margin: 0 10px;
    border: none;
    background: transparent;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .adressContainerRowSubNumber {
    border-bottom: none !important;
  }
  .adressInputNumber {
    width: 5%;
    border-bottom: none !important;
  }
  .adressInputAddress {
    width: 45%;
  }
  .adressInputTime {
    width: 20%;
  }
  .adressInputPhone {
    width: 20%;
  }
  .setCategoriesContainer {
    width: 100%;
    flex-flow: column nowrap;
    background: #ffffff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 3px;
  }

  .profileTabs {
    margin: 0 0 15px;
    width: 100%;
  }
  .recentOrdersListItem:last-child {
    border-bottom: none;
  }
  .tabsItem {
    box-shadow: 0 0 15px 5px #e5e5e585;
    padding: 13px 30px;
    margin: 0 20px;
  }
  .tabs__item_active,
  .tabs__item:hover {
    transform: scale(1.1);
  }
  .tabsItemActive {
    background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#f56c80),
            to(#ea84af)
    ) !important;
    color: #ffffff !important;
  }
  /* ================Banner profile============*/
  .bannersAndSales {
    width: 100%;
    flex-flow: column nowrap;
    background: #ffffff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    padding: 25px;
    margin: 25px 0;
    border-radius: 3px;
  }
  .bannersAndSalesSubRow {
    width: 100%;
    margin-top: 25px;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .bannersAndSalesSubRowItem {
    width: 49%;
    padding: 20px 25px;
    background: #ffffff;
    box-shadow: 0 0 15px 5px #e5e5e585;
    margin: 10px 0;
    min-height: 240px;
  }
  .bannersAndSalesSubRowItemPic {
    width: 100%;
    height: 100%;
    position: relative;
    flex-flow: column nowrap;
  }
  .bannersAndSalesSubRowItemAdd {
    justify-content: center;
    align-items: center;
    background: radial-gradient(502.48px at 0% 0%, #56ccf2 0%, #2f80ed 100%);
    width: 100%;
    height: 100%;
  }
  .bannersAndSalesSubRowItemAdd label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .bannersAndSalesSubRowItemAdd input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .bannersAndSalesSubRowItemPicSub {
    display: none;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.349);
  }
  .bannersAndSalesSubRowItemPic:hover .bannersAndSalesSubRowItemPicSub {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .bannersAndSalesSubRowItemPic > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }
  .bannersAndSalesSubRowItemPicSub > button {
    min-width: 200px;
    border-radius: 25px;
    border: none;
    background: #fff;
    padding: 10px 15px;
    color: #4a4a4a;
    font-size: 0.8em;
    cursor: pointer;
    -webkit-transition: 0.2s;
    transition: 0.7s ease-in;
    outline: none;
    margin: 10px 0;
  }
  .bannersAndSalesSubRowItemPicSub > button:hover {
    box-shadow: 0 0 15px 5px #e5e5e585;
    background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#f56c80),
            to(#ea84af)
    ) !important;
    color: #fff;
  }
  /* ================Legal profile============*/
  .legalInfoContainer {
    width: 100%;
    flex-flow: column nowrap;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 15px 5px #e5e5e585;
    padding: 25px;
    margin: 0 0 25px;
  }
  .legalInfoContainerSub {
    margin-top: 10px;
    flex-flow: column wrap;
    justify-content: space-between;
  }
  .legalInfoContainerItem {
    width: 100%;
    flex-flow: column nowrap;
    padding: 20px 30px;
    background: #fff;
    -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
    box-shadow: 0 0 15px 5px #e5e5e585;
    margin: 10px 0;
  }
  .legalInfoContainerColumns {
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }
  .legalInfoContainerSub {
    width: 49%;
  }
  .legalInfoContainerItem h2 {
    font-size: 1em;
    margin-bottom: 20px;
  }
  .legalInfoContainerItemName {
    align-items: center;

  }
  .legalInfoContainerItemName div:first-child {
    font-family: AvenirNext;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.172206px;
    /*margin: 10px 0;*/
    width: 30%;
  }
  .legalInfoContainerItemName div {
    /*margin: 10px 0;*/
    width: 100%;
  }
  .legalInfoContainerItemName div input {

    width: 80%;
  }
  .legalInfoContainerItemName span {
    font-weight: bold;
    margin-right: 5px;
  }
  .legalInfoContainerItemName input {
    letter-spacing: 0.215258px;
    color: #BBBBBB;
    outline: none;
  }
  .legalInfoContainerItem  label {
    width: 40%;
    position: relative;
    border-radius: 25px;
    border: 1px solid #2F80ED;
    background: radial-gradient(100% 100% at 0% 0%, #56CCF2 0%, #2F80ED 100%);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);

    padding: 10px 15px;
    color: #fff;
    font-size: 0.8em;
    cursor: pointer;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    outline: none;
    text-align: center;
    font-weight: bold;
  }
  .legalInfoContainerItem  label:hover {
    background: radial-gradient(100% 100% at 0% 0%, #56CCF2 0%, #2f68cf 100%);
  }

  #ownershipType {
    padding: 15px 20px;
    border-radius: 30px;
    outline: none;
    width: 180px;
  }
  /* =========================== Section Upload Documents ==================================*/
  #fileInputDocsProfile {
    appearance: none;
    opacity: 0;
    position: absolute;
    top: 10px;
    right: 194px;
  }

  .documentList {
    display: flex;
    flex-direction: row;
  }
  .documentItem {
    list-style: none;
    margin-left: 15px;
    /*border: 1px solid #BBBBBB;*/
    transition: 0.5s ease;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0 15px 5px #e5e5e585;
    display: inline-block;
  }
  .documentItem:first-child {
    margin-left: 0;
  }
  .documentItem img:hover {
    /*opacity: 0.35;*/
    filter: brightness(0.4);
  }
  .documentItem img:first-child {
    width: 60px;
    height: 70px;
  }
  .documentClose {
    position: absolute;
    z-index: 1;
    width: 18px;
    height: 18px;
    right: 2px;
    top: 2px;
  }
  .documentInput {
    display: flex;
  }
  .documentInput span {
    width: 60%;
    border: 1px solid rgba(151, 151, 151, 0.5);
    border-radius: 100px;
    position: relative;
    left: 35px;
    align-self: center;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 23px;
    font-family: AvenirNext;
    font-size: 14px;
    line-height: 16px;
    color: rgba(151, 151, 151, 0.5);
  }
  .documentUpload {
    margin-top: 80px;
    margin-bottom: 50px;
    width: 20%;
    align-self: center;
  }
  /* ================Drop profile============*/
  .drop {
    margin: 60px auto !important;

  }
  .drop > img {
    width: 100%;
  }
  /* ================Setting profile============*/
  .profileSettingsContainer {
    flex-flow: column nowrap;
    background: #fff;
    padding: 25px;
    -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
    box-shadow: 0 0 15px 5px #e5e5e585;
    margin: 10px 0;
  }
  .profileSettingsContainerSub {
    margin-top: 15px;
  }
  .profileSettingsContainerSub > button:hover {
    transform: scale(1.1);
  }
  .profileSettingsContainerSub > button:nth-child(1) {
    border-radius: 25px;
    border: none;
    background: -webkit-gradient(
            linear,
            left bottom,
            left top,
            from(#f56c80),
            to(#ea84af)
    );
    background: linear-gradient(to top, #f56c80 0%, #ea84af 100%);
    border: 1px solid #0000;
    padding: 10px 15px;
    color: #fff;
    font-size: 0.8em;
    cursor: pointer;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    outline: none;
    text-align: center;
    font-weight: bold;
    margin-right: 30px;
  }
  .profileSettingsContainerSub > button:nth-child(2) {
    border-radius: 25px;
    border: none;
    background: #fff;
    border: 1px solid #0000;
    padding: 10px 15px;
    color: inherit;
    font-size: 0.8em;
    cursor: pointer;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    outline: none;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 0 15px 5px #e5e5e585;
  }
  .profileSubContainer {
    width: 100%;
    border-radius: 3px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    /* padding: 20px 25px; */
  }
  /*========   media ===============*/
  @media only screen and (max-width: 1024px) {
    .profileMainContainer {
      flex-flow: column nowrap;
      width: 100%;
    }

    .profileMainContainer > .profileSubContainer:nth-child(1) {
      width: 100%;
    }

    .profileMainContainer > .profileSubContainer:nth-child(2) {
      width: 100%;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-start;
    }

    .socialMainContainer {
      margin-top: 0 !important;
    }

    .contactsContainer,
    .socialMainContainer {
      width: 45% !important;
    }

    .editbleInput {
      width: 100%;
    }

    .bannersAndSalesSubRow {
      flex-flow: column nowrap;
    }

    .bannersAndSalesSubRowItem {
      width: 100%;
    }

    .bannersAndSalesSubRowItemAdd {
      height: auto;
    }

    .legalInfoContainerColumns {
      flex-flow: column nowrap;
    }
  }
</style>

