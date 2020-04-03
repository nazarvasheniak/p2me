<template>
    
  <div class="ordersContainer flex suppliersListMainContainer suppliersListMainContainerFeedbacks">
    
    <div class="recentOrdersContainerRow flex">
  
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
    <div class="recentOrdersContainerRow flex feedbakcsListContainer">
        <div class="content">
            <div v-if="currentTab === 'New feedbacks'">
             <!-- <div v-if="currentTab === 'Accepted'">  -->
              <div class="recentOrdersContainerRow flex">

                <carousel 
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true">
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                </carousel>
              </div>
            </div>
            <div v-if="currentTab === 'Accepted'">
              <div class="recentOrdersContainerRow flex">
                <carousel 
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true">
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                </carousel>
              </div>
            </div>
            <div v-if="currentTab === 'Declined'">
              <div class="recentOrdersContainerRow flex">
                <carousel 
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true">
                   <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                    <div class="driversListContainer">
                    <div class="driversListRowHeader">
                        
                        <span>Order No</span>
                        <span>Customer</span>
                        <span>Supplier</span>
                        <span>Location</span>
                        <span>Comment</span>
                        <span>   </span>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                        
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                       <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    <div class="driversListRowContent">
                       
                        <div>#111111</div>
                        <div class="avatarCellBlock"><img src="../assets/burder.png" alt>Kevin K.</div>
                        <div>Burger King</div>
                        <div>Kyiv, Stereo Plaza</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac luctus quam, non lacinia lorem. Aliquam sed arcu eros. Aenean nec posuere mauris. Ut sit amet leo pulvinar, efficitur erat vel, aliquet ante. </div>
                        <div>
                            <button class="redBackgroundButtonMain">Publish</button>
                            <button class="redBorderButtonMain">Delete</button>
                        </div>
                    </div>
                    </div>
                </carousel>
              </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Tabs from "vue-tabs-with-active-line";

export default {
  name: "feedbacks",
  components: {
    carousel,
    Tabs
  },
  data: () => ({
    tabs: [
      { title: "New feedbacks", value: "New feedbacks" },
      { title: "Accepted", value: "Accepted" },
      { title: "Declined", value: "Declined" }
      
    ],
    currentTab: "New feedbacks"
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style >
.ordersContainer {
  overflow-x: hidden;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.ordersContainerTabs {
  margin: 5px 5px 15px;
  width: 100%;
}
.recentOrdersListItem:last-child {
  /* border-bottom: none; */
}
.suppliersListMainContainer  .tabs__item {
  
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  color: #FFFFFF;
  background: none;
  border-color: transparent;
  padding: 5px 30px;
}
/* .suppliersListMainContainer .tabs__item_active  */
/* .suppliersListMainContainer .tabs__item:hover {  */
   /* background: #4A4A4A!important; 
   border: 1px solid #333; 
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 14px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25831px;
  /* color: #FFFFFF!important; */ 


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
  margin-right: 17px;
  display: block;
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
.feedbakcsListContainer { 
    background: #FFFFFF;
    box-shadow: 0px 2px 25px rgba(30, 30, 30, 0.146031);
    border-radius: 3px;
    padding: 30px;
    margin-top: 25px;
}
.ordersContainer.suppliersListMainContainerFeedbacks {
    background: none;
    box-shadow: none;
    border-radius: none;
    padding: 0px;
}
.suppliersListMainContainerFeedbacks .recentOrdersContainerRow.tabs.flex {
    justify-content: flex-start;
    padding-left: 15px;
    text-align: center;
}
.suppliersListMainContainerFeedbacks .recentOrdersContainerRow.tabs.flex .tabs__item {
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    margin-right: 45px;
} 
.suppliersListMainContainerFeedbacks .recentOrdersContainerRow.tabs.flex .tabs__item_active, .suppliersListMainContainerFeedbacks .recentOrdersContainerRow.tabs.flex .tabs__item:hover, .suppliersListMainContainerFeedbacks .recentOrdersContainerRow.tabs.flex .tabs__item_active:hover {  
    background: !important;
    border-radius: 24px;
    font-size: 20px;
    line-height: 27px;
    border-color: white!important;
    display: flex;
    align-items: center;
    color: #4A4A4A!important;
}
.suppliersListMainContainerFeedbacks .driversListRowHeader span:nth-child(5) {
    width: 25.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowHeader span {
    width: 14.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowContent div:nth-child(5) {
    width: 25.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowContent > div {
    width: 14.1%;
}
.suppliersListMainContainerFeedbacks .driversListRowHeader {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 19px;
    padding-top: 5px;
}
.suppliersListMainContainerFeedbacks .driversListRowContent div:nth-child(6) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
.suppliersListMainContainerFeedbacks .sliderRecentOrders {
    margin-top: 0px;
}
.redBackgroundButtonMain {
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.172206px;
    color: white!important;
    border: 1px solid #FB5F68!important;
    box-shadow: 0px 2px 15px #FCB3BB!important;
    border-radius: 24px;
    padding : 9px 30px;
    background: radial-gradient(110.91px at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%)!important;
    transition: 0.7s;
    margin-bottom: 18px;
}
.redBackgroundButtonMain:hover {
    background: none!important;
    color: #FB5F68!important;
    position: relative!important;
}
.redBorderButtonMain {
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 137% */
    display: flex;
    align-items: center;
    letter-spacing: 0.172206px;
    color: #FB5F68!important;
    border: 1px solid #FB5F68!important;
    box-shadow: 0px 2px 15px #FCB3BB!important;
    border-radius: 24px;
    padding : 9px 30px;
    background: none!important;
    transition: 0.7s;
}
.redBorderButtonMain:hover {
    background: #FB5F68!important;
    color: white!important;
    text-align: center!important;
}
</style>
