<template>
  <div class="prodcutsContainer flex">
    <div class="headerRow flex">
      <h1>Products</h1>
      <h2>(here you can edit your main info)</h2>
    </div>
     
    <div class="prodcutsSubContainer flex">
      <div class="prodcutsSubContainerHeading flex">
        <h2>Burgers (2)</h2>
      </div>
      <div>
       <productItem></productItem>
       </div>
        <div class="productNutContainer ">
          <h2>Beverages (1)</h2>
        </div>
       <div>
         <productitemBev></productitemBev>
       </div>
    </div>
  </div>
  
</template>

<script>
     import searchbar from '../components/searchbar'
   import productItem from '../components/productItem'
   import productitemBev from '../components/productitemBev'

   export default {
    name: "ProductCategoryItem",
    components: {
         searchbar,
      productItem,
      productitemBev
    },
    data() {
      return {
        sectionItem: this.$route.params.id
      }
    },
  }
</script>

<style scoped>
  .prodcutsContainer {
    width: 100%;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  .headerRow {
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    margin-bottom: 5px;
    margin-left: 23px;
  }

  .headerRow h1 {
    font-family: AvenirNext;
    color: #4A4A4A;
    margin: 0;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.200907px;
  }

  .headerRow h2 {
    font-family: AvenirNext;
    margin-left: 15px;
    margin-bottom: 0px;
    margin-top: 8px;
    color: #606060;
    font-size: 14px;
    line-height: 33px;
    letter-spacing: 0.200907px;
    mix-blend-mode: normal;
    opacity: 0.88;
  }

  .prodcutsSubContainer {
    font-family: AvenirNext;
    width: 100%;
    padding: 25px;
    margin-bottom: 30px;
    flex-flow: column nowrap;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
    box-shadow: 0 0 15px 5px #e5e5e585;
    background: #fff;
  }

  .prodcutsSubContainerHeading {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
    justify-content: space-between;
    align-items: baseline;
  }
 
  .productNutContainer  {
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
    justify-content: space-between;
    align-items: baseline;
  }

  .productNutContainer h2 {
    font-family: AvenirNext;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 0.200907px;
    color: #4A4A4A;
    margin-left: 17px;
  }

  .prodcutsSubContainerHeading h2 {
    font-family: AvenirNext;
    font-size: 28px;
    line-height: 33px;
    letter-spacing: 0.200907px;
    color: #4A4A4A;
    margin-left: 17px;

    /* width: 100%;
    color: #F7666A;
    display: flex; */
  }

  .prodcutsSubContainerItems {
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .prodcutsSubContainerItem {
    position: relative;
    margin: 15px 7.5px 30px;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px 15px 35px;
    width: 250px;
    background-color: #fff;
    -webkit-box-shadow: 0 0 15px 5px #e5e5e585;
    box-shadow: 0 0 15px 5px #e5e5e585;
    transition: 0.7s;
  }

  .prodcutsSubContainerItem:hover {
    box-shadow: 0 0 15px 5px #9b77fb;
  }

  .productImgContainerAddNew {
    width: 225px;
    height: 160px;
    margin-bottom: 15px;
    background: linear-gradient(
            to right,
            rgba(154, 119, 251, 0.8) 0%,
            rgba(51, 200, 254, 0.8) 100%
    );
    justify-content: center;
    align-items: center;
  }

  .productImgContainer {
    width: 225px;
    height: 160px;
    margin-bottom: 15px;
    position: relative;
  }

  .productImgContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .prodcutsSubContainerItem:hover > .productImgContainer > .price {
    bottom: 5px;
  }

  .price {
    position: absolute;
    color: #fff;
    z-index: 5;
    bottom: 0;
    left: 0;
    font-weight: 400;
    font-size: 0.8em;
    padding: 5px 15px;
    transition: 0.1s ease-in-out;
    background: linear-gradient(
            to right,
            rgba(154, 119, 251, 0.8) 0%,
            rgba(51, 200, 254, 0.8) 100%
    );
  }

  .name {
    margin-bottom: 15px;
    font-size: 0.9em;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .description {
    font-size: 0.8em;
    color: #b6b6b6;
  }

  .routerLink {
    color: inherit;
    text-decoration: none;
  }
</style>
