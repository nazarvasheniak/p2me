<template>
  <div class="ordersContainer flex suppliersListMainContainer">
    
      <div class="ordersHeader flex">
        <h1>
          Suppliers
        </h1>
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

        <div class="recentOrdersContainerRow flex ">
          <div class="content">
            <div v-if="currentTab === 'All suppliers'">
              <div class="recentOrdersContainerRow flex">
              <carousel 
                class="sliderRecentOrders"
                :items="1"
                :nav="true"
                value="All suppliers"
                v-if="currentTab === 'All suppliers'">
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Driver</span>
                    <span>Order</span>
                    <span>Transport</span>
                    <span>Class</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    
                    <button  v-on:click="accept">

                      
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> 
                        </svg>
                      
                    </button> 

                    <div class="accept-modal-container flex" v-if="acceptModalVision">
		<div class="modal">
			<div class="close" v-on:click="accept">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19.707 0.293006C19.316 -0.0979941 18.684 -0.0979941 18.293 0.293006L10 8.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L8.58601 10L0.293006 18.293C-0.0979941 18.684 -0.0979941 19.316 0.293006 19.707C0.488006 19.902 0.744006 20 1.00001 20C1.25601 20 1.51201 19.902 1.70701 19.707L10 11.414L18.293 19.707C18.488 19.902 18.744 20 19 20C19.256 20 19.512 19.902 19.707 19.707C20.098 19.316 20.098 18.684 19.707 18.293L11.414 10L19.707 1.70701C20.098 1.31601 20.098 0.684006 19.707 0.293006Z" fill="#4A4A4A"/>
				</svg>
			</div>
			<h2>Filters</h2>
			<form @submit.prevent="accept">
				<div class="categorysupp flex">
					<h4>Category:</h4>
          <div class="choosecategory flex">
            <v-select class="vSelect" placeholder="Currency" :options="['Food' ,'Clothes', 'Drive']"></v-select>
          </div>

          <h4>Category:</h4>
          <div class="choosecategory">
            <v-select class="vSelect" placeholder="Currency" :options="['Food' ,'Clothes', 'Drive']"></v-select>
          </div>

          <h4>Category:</h4>
          <div class="choosecategory">
            <v-select class="vSelect" placeholder="Currency" :options="['Food' ,'Clothes', 'Drive']"></v-select>
          </div>

          <h4>Category:</h4>
          <div class="choosecategory">
            <v-select class="vSelect" placeholder="Currency" :options="['Food' ,'Clothes', 'Drive']"></v-select>
          </div>

          <h4>Category:</h4>
          <div class="choosecategory">
            <v-select class="vSelect" placeholder="Currency" :options="['Food' ,'Clothes', 'Drive']"></v-select>
          </div>

          <h4>Category:</h4>
          <div class="choosecategory">
            <v-select class="vSelect" placeholder="Currency" :options="['Food' ,'Clothes', 'Drive']"></v-select>
          </div>
					
					
					
				</div>
        <div class="button-ok">
        <button class="ok-button">OK</button>
				
        </div>

			</form>
		</div>
	</div>
                  
                <div class="Push-modal-container flex" v-if="PushModalvision">
                  <div class="modal">
                    <div class="close" v-on:click="Close">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					                  <path d="M19.707 0.293006C19.316 -0.0979941 18.684 -0.0979941 18.293 0.293006L10 8.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L8.58601 10L0.293006 18.293C-0.0979941 18.684 -0.0979941 19.316 0.293006 19.707C0.488006 19.902 0.744006 20 1.00001 20C1.25601 20 1.51201 19.902 1.70701 19.707L10 11.414L18.293 19.707C18.488 19.902 18.744 20 19 20C19.256 20 19.512 19.902 19.707 19.707C20.098 19.316 20.098 18.684 19.707 18.293L11.414 10L19.707 1.70701C20.098 1.31601 20.098 0.684006 19.707 0.293006Z" fill="#4A4A4A"/>
				              </svg>

                       </div> 
                         <h2>Filters</h2> 
                         <form @submit.prevent="Push">  
                           <div class="PushFilter-btns">
                             <h3>Category:</h3>
                              <button class="button-menu">
                              <span class="menu-icon">
                                <svg width="129" height="38" viewBox="0 0 129 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="128" height="37" rx="18.5" stroke="#4A4A4A"/>
                                </svg>

                              </span>
                              
                             </button>
                          </div>
                        </form>
                  </div>
                </div>
              </div>  

                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>  
              </carousel>
              </div>
            </div>
            <div v-if="currentTab === 'Restaurants'">
                <carousel 
                class="sliderRecentOrders"
                :items="1"
                :nav="true"
                value="Restaurants"
                v-if="currentTab === 'Restaurants'">
                <div class="driversListContainer">
                    <div class="driversListRowHeader">
                      <span>Supplier</span>
                      <span>Category</span>
                      <span>Schedule</span>
                      <span>Location</span>
                      <span>Start Date</span>
                      <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Remove</button>
                      </div>
                    </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </carousel>
            </div>
            <div v-if="currentTab === 'Shopping'">
                <carousel 
                class="sliderRecentOrders"
                :items="1"
                :nav="true"
                value="Shopping"
                v-if="currentTab === 'Shopping'">
                <div class="driversListContainer">
                    <div class="driversListRowHeader">
                      <span>Supplier</span>
                      <span>Category</span>
                      <span>Schedule</span>
                      <span>Location</span>
                      <span>Start Date</span>
                      <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Restore</button>
                      </div>
                    </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </carousel>
            </div>
          
          <div v-if="currentTab === 'Removed'">
                <carousel 
                class="sliderRecentOrders"
                :items="1"
                :nav="true"
                value="Removed"
                v-if="currentTab === 'Removed'">
                <div class="driversListContainer">
                    <div class="driversListRowHeader">
                      <span>Supplier</span>
                      <span>Category</span>
                      <span>Schedule</span>
                      <span>Location</span>
                      <span>Start Date</span>
                      <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                    <div class="driversListRowContent">
                      <div>
                        <img src="../assets/burder.png" alt >
                        <strong>Burger King</strong>
                      </div>
                      <div>Burgers</div>
                      <div>06:00-00:00</div>
                      
                      <div>Kyiv, Stereo Plaza</div>
                      <div>19.12.2018</div>
                      <div>
                        <button>Activate</button>
                      </div>
                    </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Restore</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                </div>
                <div class="driversListContainer">
                  <div class="driversListRowHeader">
                    <span>Supplier</span>
                    <span>Category</span>
                    <span>Schedule</span>
                    <span>Location</span>
                    <span>Start Date</span>
                    <span><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.9435 0.554038C19.7822 0.184829 19.5032 0.000199008 19.105 0H0.923598C0.52593 0 0.246473 0.184829 0.0854759 0.554038C-0.075422 0.942153 -0.00920215 1.2738 0.284434 1.54833L7.28737 8.55107V15.4544C7.28737 15.7009 7.37738 15.9137 7.55723 16.0939L11.1934 19.7299C11.364 19.9097 11.5769 20 11.8327 20C11.9462 20 12.0646 19.9762 12.1877 19.9289C12.5572 19.7678 12.7419 19.4885 12.7419 19.0908V8.55112L19.7446 1.54838C20.0384 1.27385 20.1044 0.942303 19.9435 0.554038Z" fill="url(#paint0_linear)"/> <defs> <linearGradient id="paint0_linear" x1="2.5" y1="3.65001e-07" x2="18.5" y2="18.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FA626D"/> <stop offset="1" stop-color="#ED7FA5"/> </linearGradient> </defs> </svg></span>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                  <div class="driversListRowContent">
                    <div>
                      <img src="../assets/burder.png" alt >
                      <strong>Burger King</strong>
                    </div>
                    <div>Burgers</div>
                    <div>06:00-00:00</div>
                    
                    <div>Kyiv, Stereo Plaza</div>
                    <div>19.12.2018</div>
                    <div>
                      <button>Activate</button>
                    </div>
                  </div>
                </div>
              </carousel>
            </div>
          
        </div>
    </div>

 
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";
import vSelect from "vue-select";

export default {
  name: "Suppliers",
  components: {
    carousel,
    Tabs,
    vSelect

  },
  data: () => ({
    tabs: [
      { title: "All suppliers", value: "All suppliers" },
      { title: "Restaurants", value: "Restaurants" },
      { title: "Shopping", value: "Shopping" },
      { title: "Markets", value: "Markets" },
      { title: "Pharmacy", value: "Pharmacy" },
      { title: "Removed", value: "Removed" }
      
    ],
    acceptModalVision: false,
    currentTab: "All suppliers"
  }),
  methods: {
    
    accept() {
	  this.acceptModalVision = !this.acceptModalVision;
	},
    Close() {
      
    },
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style>

.content {
  width: 100%;
}

.ordersContainer {
  overflow-x: hidden;
  /* overflow-y: hidden; */
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
.accept-modal-container {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	justify-content: space-around;
	align-items: center;
	background: rgba(0, 0, 0, 0.6);
	z-index: 10;
}

.modal {
	width: 679px;
	height: 471px;
	padding: 61px 124px;
	position: relative;
	box-sizing: border-box;
	border-radius: 3px;
	background: #ffffff;
}



/* .modal h2 {
margin-bottom: 20px;
font-family: Avenir Next;
font-size: 32px;
line-height: 44px;
/* identical to box height, or 137% */

/* letter-spacing: 0.153162px; */

/* color: #4A4A4A;
} */ 

.close { 
	position: absolute;
	right: 25px;
	top: 24px;
	cursor: pointer;
	z-index: 12;
}

.categorysupp {
  height: 374px;
  flex-flow: row wrap;
  top: 10px;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.choosecategory {
  position: relative;
  margin: 5px 7.5px 20px;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  padding: 15px 15px 35px;
  width: 250px;
  
  background-color: #fff;
  -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
  box-shadow: 0 0 15px 5px #e5e5e585;
  transition: 0.7s;
}
/* input {
	width: 18px;
	height: 18px;
	background: transparent;
	border: 1px solid #4A4A4A;
} */
.modal h2 {
	font-family: 'AvenirNext', sans-serif;
	font-size: 30px;
	line-height: 41px;
	text-align: center;
	letter-spacing: 0.14359px;
	color: #4A4A4A;
  margin-bottom: 20px;
}

.button-ok {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 55px;
  margin-bottom: 60px;
  margin-top: 30px;

}

.ok-button {
 background: #FB5F68;
/* box-shadow: 0px 2px 15px #FCB3BB; */
border-radius: 24px;
display: flex;
width: 142px;
height: 58px;
justify-content: center;

} 

.v-select  {
   border: none;
   height: 20px;
   weight: 40px;
}


.accept,
.decline {
	margin: 5px 1px
}

.accept,
.decline:hover {
	color: #fff;
	background-color: #f56c81
}

.accept,
.accept:hover,
.decline,
.decline:hover {
	-webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, .12);
	/* box-shadow: 0 2px 10px rgba(0, 0, 0, .12); */
	border-radius: 24px;
	display: block;
	width: 108px;
	height: 48px;
	text-align: center;
	line-height: 43px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-weight: 500;
	font-size: 16px;
	letter-spacing: .172206px;
	-webkit-transition: .7s;
	transition: .7s;
	border: 2px solid #f56c81;
	cursor: pointer;
	outline: none
}

.accept:hover,
.decline {
	background: #fff;
	color: #f56c81
}
.ordersContainerTabs {
  position: absolute;
  margin: 5px 5px 15px;
  width: 100%;
}
.recentOrdersListItem:last-child {
  border-bottom: none;
}
.suppliersListMainContainer  .tabs__item {
  display: inline;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #56CCF2;
  background: none;
  border-color: transparent;
  padding: 5px 30px;
}
.suppliersListMainContainer .tabs__item_active,
.suppliersListMainContainer .tabs__item:hover {
  background: #56CCF2!important;
  border: 1px solid #56CCF2;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  line-height: 27px;
  /* identical to box height, or 193% */
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #FFFFFF!important;
}
.driversListContainer {
  display: flex;
  flex-flow: column nowrap ;
  justify-content: flex-start;
}
.driversListRowHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}
.driversListRowContent {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  
}
.driversListRowContent img {
  width: 100%;
}
.driversListRowContent strong {
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.232479px;
  color: #4A4A4A;
}
.suppliersListMainContainer .content {
  overflow: hidden!important;
}
.suppliersListMainContainer h1 {
  margin-right: 5%;
}
.suppliersListMainContainer .owl-theme .owl-nav {
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 0px;
  height: 28px;
}
.suppliersListMainContainer .owl-theme .owl-dots {
  width: 75vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.driversListRowHeader svg {
  float: right;
}
.driversListRowContent > div:last-child {
  justify-content: flex-end;
}
</style>
