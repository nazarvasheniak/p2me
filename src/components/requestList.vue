<template>
    <div data-v-edef5880="" class="recentOrdersContainer flex">
    <div class="recentOrdersContainerRow flex">
        <h2>Requests</h2>
        <button class="seeAll">See all</button>
    </div>
    <div class="recentOrdersContainerRow flex requestCotainerStyleClass">
        <!-- <div class="requestsListItem" v-for="item of list" v-bind:key="item.id">
            <div class="requestsListItemRow">
                <div class="requestsListItemsMains"><img src="../assets/driver.png" alt="">
                    <h3>{{ item.name }}</h3></div>
                <div class="requestsListItemDate">
                    {{ item.date }}
                </div>
            </div>
            <div class="requestsListItemRow">
                <div class="requestsListItemColumn">
                    <p>Have a car to drive</p>
                    <p><strong>E-mail:</strong> {{ item.email }}</p>
                    <p><strong>Phone:</strong> {{ item.phone }}</p>
                    <p><strong>Date of birth:</strong> {{ item.birth }}</p>
                    <p><strong>City:</strong> {{ item.city }}</p>
                    <p><strong>Language:</strong> {{ item.lang }}</p>
                </div>
                <div class="requestsListItemColumn">
                    <p><strong>Car manufactorer:</strong> {{ item.car.manufactorer }}</p>
                    <p><strong>Year of production:</strong> {{ item.car.year }}</p>
                    <p><strong>Car number:</strong> {{ item.car.number }}</p>
                    <p><strong>Driver’s license:</strong> {{ item.car.license }}</p>
                    <p><strong>Have a taxi license </strong></p>
                </div>
                <div class="requestsListItemColumn">
                    <p><strong>Photos:</strong></p>
                    <div class="requestsListItemPhotos"><img src="../assets/card1.png" alt=""><img src="../assets/card2.png" alt=""><img src="../assets/card3.png" alt=""></div>
                    <p><strong>Expiration date of driver license:</strong> {{ item.license.exp_date }}</p>
                    <p><strong>Expiration date of car:</strong> {{ item.car.exp_date }}</p>
                </div>
                <div class="requestsListItemColumn">
                    <p><strong>Card number:</strong> {{ item.card.number }}</p>
                    <p><strong>Cardholder:</strong> {{ item.card.holder }}</p>
                    <p><strong>Bank:</strong> {{ item.card.bank }}</p>
                    <p><strong>Account number:</strong> {{ item.card.account }}</p>
                    <p><strong>Want to receive money on credit card</strong></p>
                </div>
                <div class="requestsListItemColumn">
                    <button class="accept" v-on:click="accept">Accept</button>
                    <button class="decline" v-on:click="decline">Decline</button>
                </div>
            </div>
        </div> -->
        <div class="requestsListItem">
            <div class="requestsListItemRow">
                <div class="requestsListItemsMains"><img src="../assets/driver.png" alt="">
                    <h3> {{driver.first_name}} {{driver.second_name}}</h3></div>
                <div class="requestsListItemDate">7
                    13th November, 12:20
                </div>
            </div>
            <div class="requestsListItemRow">
                <div class="requestsListItemColumn">
                    <p>Have a car to drive</p>
                    <p><strong>E-mail:</strong> {{driver.e_mail}}</p>
                    <p><strong>Phone:</strong> {{driver.phone}}</p>
                    <p><strong>Date of birth:</strong> {{driver.birthday}}</p>
                    <p><strong>City:</strong> {{driver.city}}</p>
                    <p><strong>Language:</strong> {{driver.language}}</p>
                </div>
                <div class="requestsListItemColumn">
                    <p><strong>Car manufactorer:</strong> {{driver.car_manufactorer}}</p>
                    <p><strong>Year of production:</strong> {{driver.year_of_production}}</p>
                    <p><strong>Car number:</strong> {{driver.car_number}}</p>
                    <p><strong>Driver’s license:</strong> {{driver.drivers_license}}</p>
                    <p><strong> {{driver.have_license}}</strong></p>
                </div>
                <div class="requestsListItemColumn">
                    <p><strong>Photos:</strong></p>
                    <div class="requestsListItemPhotos"><img src="../assets/card1.png" alt=""><img src="../assets/card2.png" alt=""><img src="../assets/card3.png" alt=""></div>
                    <p><strong>Expiration date of driver license:</strong> {{driver.expiration_license}}</p>
                    <p><strong>Expiration date of car:</strong> {{driver.expiration_car}}</p>
                </div>
                <div class="requestsListItemColumn">
                    <p><strong>Card number:</strong> {{driver.card_number}}</p>
                    <p><strong>Cardholder:</strong> {{driver.cardholder}}</p>
                    <p><strong>Bank:</strong> {{driver.bank_name}}</p>
                    <p><strong>Account number:</strong> {{driver.account_number}}</p>
                    <p><strong> {{driver.receive_money_on_card}}</strong></p>
                </div>
				
                <div class="requestsListItemColumn">
                    <button class="accept" v-on:click="accept">Accept</button>
                    <button class="decline">Decline</button>
                </div>
            </div>
        </div>
    </div>
	<div class="accept-modal-container flex" v-if="acceptModalVision">
		<div class="modal">
			<div class="close" v-on:click="accept">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19.707 0.293006C19.316 -0.0979941 18.684 -0.0979941 18.293 0.293006L10 8.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L8.58601 10L0.293006 18.293C-0.0979941 18.684 -0.0979941 19.316 0.293006 19.707C0.488006 19.902 0.744006 20 1.00001 20C1.25601 20 1.51201 19.902 1.70701 19.707L10 11.414L18.293 19.707C18.488 19.902 18.744 20 19 20C19.256 20 19.512 19.902 19.707 19.707C20.098 19.316 20.098 18.684 19.707 18.293L11.414 10L19.707 1.70701C20.098 1.31601 20.098 0.684006 19.707 0.293006Z" fill="#4A4A4A"/>
				</svg>
			</div>
			<h2>Please determine the class of car for this driver:</h2>
			<form @submit.prevent="accept">
				<div class="radio-btns">
					<label for="st">
						<input type="radio" name="car" id="st" value="Standart">
						Standart
					</label>
					<label for="co">
						<input type="radio" name="car" id="co" value="Comfort">
						Comfort
					</label>
					<label for="lux">
						<input type="radio" name="car" id="lux" value="LUX">
						LUX
					</label>
					<label for="van">
						<input type="radio" name="car" id="van" value="Van">
						Van
					</label>
					<label for="bl">
						<input type="radio" name="car" id="bl" value="Black">
						Black
					</label>
					<label for="cr">
						<input type="radio" name="car" id="cr" value="Courier">
						Courier
					</label>
				</div>
				<button type="submit">OK</button>
			</form>
		</div>
	</div>
</div>
</template> 

<script>
  import carousel from "vue-owl-carousel";
// import testApi from "../gateways/testApi.js";
import axios from 'axios';

export default {
name: "requestList",
components: {
    carousel
},
props: ['list'],
data() {
    return {
    orders: null,
	acceptModalVision: false
    };
},
methods: {
	accept() {
	  this.acceptModalVision = !this.acceptModalVision;
	},
	decline() {
	  this.$router.push('/request/decline');
	}
  }
};


</script>

<style scoped>
.recentOrdersContainer {
	width: 100%;
	margin: 50px 0;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-flow: column nowrap;
	flex-flow: column nowrap;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start
}

.recentOrdersContainerRow {
	width: 100%;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-ms-flex-line-pack: start;
	align-content: flex-start;
	-webkit-box-align: end;
	-ms-flex-align: end;
	align-items: flex-end
}
.recentOrdersContainer h2 {
font-family: AvenirNext;
font-size: 24px;
line-height: 33px;
/* identical to box height, or 137% */


color: #4A4A4A;
}
.seeAll {
	cursor: pointer;
	border: none;
	font-size: .8em;
	background: -webkit-gradient(linear, left top, left bottom, from(#e5a8d6), to(#602693));
	background: linear-gradient(#e5a8d6, #602693);
	-webkit-background-clip: text;
	outline: none;
	-webkit-text-fill-color: transparent;
	-webkit-transition: .7s;
	transition: .7s
}

.seeAll:hover {
	-webkit-transform: scale(1.05);
	transform: scale(1.05)
}

.accept,
.decline {
	margin: 5px 1px
}

.accept {
	background-color: #f56c81;
	color: #fff;
}
.decline {
	color: #f56c81;
	background-color: #fff;
}

.accept,
.accept:hover,
.decline,
.decline:hover {
	-webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, .12);
	box-shadow: 0 2px 10px rgba(0, 0, 0, .12);
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
	font-family: AvenirNext;
    
	letter-spacing: .172206px;
	-webkit-transition: .7s;
	transition: .7s;
	border: 2px solid #f56c81;
	cursor: pointer;
	outline: none
}

/* .accept:hover,
.decline {
	background: #FF0000;
	color: #f56c81;
} */

.requestsListItem {
	-webkit-box-orient: vertical;
	-ms-flex-flow: column nowrap;
	flex-flow: column nowrap;
	border-bottom: 1.5px solid rgba(0, 0, 0, .15);
	margin-bottom: 18px
}

.requestsListItem,
.requestsListItemRow {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-direction: normal;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
	width: 100%
}

.requestsListItemRow {
	-webkit-box-orient: horizontal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between
}

.requestsListItemColumn {
	-webkit-box-orient: vertical;
	-ms-flex-flow: column nowrap;
	flex-flow: column nowrap;
	padding: 19px
	
}

.requestsListItemColumn,
.requestsListItemsMains {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-direction: normal;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start
   
}

.requestsListItemsMains {
	-webkit-box-orient: horizontal;
	-ms-flex-flow: row nowrap;
	flex-flow: row nowrap
}

.requestsListItemsMains,
.requestsListItemsMains h3 {
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center
}

.requestsListItemsMains h3 {
	font-family: 'Avenir Next';
	font-size: 24px;
	line-height: 25px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	letter-spacing: .232479px;
	color: #4a4a4a
}

.requestsListItemsMains img {
	width: 70px;
	display: block;
	margin-right: 19px;
	padding: 0
}

.requestsListItem p {
	font-family: AvenirNext;
    
	font-size: 15px;
	line-height: 22px;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	color: #4a4a4a;
	margin: 0
}

.requestsListItem p strong {
	padding-right: 5px
}

.requestsListItemColumn:nth-child(5) {
	-webkit-box-align: end;
	-ms-flex-align: end;
	align-items: flex-end
}

.requestsListItemColumn:last-child {
	padding-right: 0
}

.requestsListItemColumn:first-child {
	padding-left: 0
}

.requestCotainerStyleClass {
	background: #fff;
	-webkit-box-shadow: 0 2px 25px rgba(30, 30, 30, .146031);
	box-shadow: 0 2px 25px rgba(30, 30, 30, .146031);
	border-radius: 3px;
	padding: 25px;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-flow: column nowrap;
	flex-flow: column nowrap;
	margin-top: 24px
}

.requestsListItemDate {
	font-size: 12px;
	line-height: 19px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	letter-spacing: .25831px;
	color: #4a4a4a;
	opacity: .5
}

.requestsListItem .requestsListItemRow:first-child,
.requestsListItemDate {
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center
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
	height: 574px;
	padding: 61px 124px;
	position: relative;
	box-sizing: border-box;
	border-radius: 3px;
	background: #ffffff;
}
.close { 
	position: absolute;
	right: 25px;
	top: 24px;
	cursor: pointer;
	z-index: 12;
}
.modal h2 {
	font-family: 'AvenirNext', sans-serif;
	font-size: 30px;
	line-height: 41px;
	text-align: center;
	letter-spacing: 0.14359px;
	color: #4A4A4A;
}
form {
	width: 100%;
	height: 80%;
	margin-top: 52px;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
form button {
	width: 132px;
	height: 58px;
	background: radial-gradient(96.87% 96.87% at 3.13% 3.13%, #FB5F68 0%, #EA84AF 100%);
	box-shadow: 0px 2px 15px #FCB3BB;
	border-radius: 24px;
	border: 0;
	font-family: 'AvenirNext', sans-serif;
	font-size: 36px;
	line-height: 49px;
	letter-spacing: 0.172308px;
	color: #FFFFFF;
	cursor: pointer;
}
.radio-btns {
	width: 100%;
	height: 80%;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
}
input {
	width: 18px;
	height: 18px;
	background: transparent;
	border: 1px solid #4A4A4A;
}
</style>


