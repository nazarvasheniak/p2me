<template>
    <div class="chooseSizeContainer flex">
        <div class="optionHeading">Sizes:</div>
        <div class="sizeItem selected">Add</div>
        <div class="sizeItem">XXS</div>
        <div class="sizeItem">XS</div>
        <div class="sizeItem">S</div>
        <div class="sizeItem">M</div>
        <div class="sizeItem">L</div>
    </div>
</template>

<script>
export default {
    name: "productOptionsSizes",
}
</script>


<style scoped>
.chooseSizeContainer{
    margin: 25px 0;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
}
.optionHeading{
    margin-right: 25px;
}
.sizeItem{
    padding: 5px 15px;
    font-size: 1em;
    border: 1px solid transparent;
    border-radius: 25px;
    margin: 0 5px;
    transition: .7s;
    cursor: pointer;
}
.sizeItem:hover{
    border: 1px solid #000;
}
.sizeItem.selected{
    background-color: #000;
    color: #fff;
}
</style>


