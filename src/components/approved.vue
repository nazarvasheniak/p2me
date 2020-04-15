<template>
    <div class="notPaidContainer flex">
        <h4>Approved</h4>

        <div class="notPaidContainerRow flex">
            <div class="approved-progress"></div>
        </div>

        <div class="notPaidContainerRow flex">
            <img src="../assets/usericon.png" alt="">

            <p>
                Drivers:
                <span>{{ approved | formatNumber }}</span> /
                <span>{{ total | formatNumber }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "approved",
    props: ['total', 'approved'],
    filters: {
        formatNumber: (value) => {
            if (!value) return '';
            if (value < 1000) return value;
            
            value = value.toString();
            return `${value.charAt(0)} ${value.substring(value.length - (value.length - 1))}`;
        }
    }
};
</script>

<style scoded>
.notPaidContainer {
  width: 100%;
  flex-flow: column nowrap;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #e5e5e585;
  background: #fff;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: 20px;;
}
.notPaidContainer > h4{
    font-size: 1.2em;
    margin-bottom: 15px
}
.notPaidContainerRow >{
    font-size: 1em;
}
.notPaidContainerRow img{
    width: 45px;
    height: 45px;
    object-fit: contain;
    margin-right: 15px;
}
.notPaidContainerRow > p > span:nth-child(2){
    font-size: .75em;
    color: #9b9b9b;
}
.notPaidContainerRow {
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center
}
.approved-progress {
    width: 100%;
    background: #e5e5e5;
    border-radius: 15px;
    height: 10.9px;
    position: relative;
    overflow: hidden;
}
.approved-progress:after {
    content: " ";
    width: 10%;
    height: 100%;
    background: linear-gradient(206.57deg,#65c6dd,#1ca0c4);
    position: absolute;
    z-index: 4;
    left: 0;
}
</style>


