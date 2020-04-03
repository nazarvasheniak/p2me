<template>
  <div class="notPaidContainer flex tripsCompletedBlockContainer">
    <h4>Completed trips</h4>
    <div class="notPaidContainerRow flex">
        <div class="approved-progress"></div>
    </div>
    <div class="notPaidContainerRow flex">
            <span>43</span> /
            <span>50</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tripsCompleted"
};
</script>

<style scoped>
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
    margin-bottom: 19px
}
.notPaidContainerRow {
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
.tripsCompletedBlockContainer {
  padding: 30px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px!important;
}
.tripsCompletedBlockContainer .notPaidContainerRow {
  width: 100%;
  margin-bottom: 19px;
  text-align: center;
  justify-content: center;
}
</style>


