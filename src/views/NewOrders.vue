<template>
    <div class="neworder">
       <div class="headerRow flex">
         <button class="DateView" style="text-align: center;">
          <p style="color: #4A4A4A, margin: 0px;">12.07-19.07</p>  
           <span class="menu-icon">
             <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 0.15C16.3 -0.05 16 -0.05 15.8 0.15L8.3 7.85L0.8 0.15C0.6 -0.05 0.3 -0.05 0.1 0.15C3.7998e-07 0.25 0 0.349999 0 0.449999C0 0.549999 3.7998e-07 0.65 0.1 0.75L7.9 8.75C8.1 8.95 8.4 8.95 8.6 8.75L16.4 0.75C16.6 0.65 16.6 0.35 16.5 0.15Z" fill="#535353"/>
             </svg>
           </span>
         </button>  
        </div> 
      
          <tabs
          :tabs="tabs"
          :currentTab="currentTab"
          :wrapper-class="'tabs'"
          :tab-class="'tabs__item'"
          :tab-active-class="'tabs__item_active'"
          :line-class="'tabs__active-line'"
          @onClick="handleClick"
         ></tabs>  
     

    </div> 
</template>