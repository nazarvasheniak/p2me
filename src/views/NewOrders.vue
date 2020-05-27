<template>
    <div class="neworder">
      <div class="headerRow1 flex">
         <button class="DateView1">
           <span class="datePicker">
             12.07-19.07
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