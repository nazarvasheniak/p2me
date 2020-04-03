<template>
    <div class="ordersContainer flex">
        <h1>Drivers</h1>
        <tabs
                class="ordersContainerTabs tabs flex "
                :tabs="tabs"
                :currentTab="currentTab"
                :wrapper-class="'tabs'"
                :tab-class="'tabs__item'"
                :tab-active-class="'tabs__item_active'"
                :line-class="'tabs__active-line'"
                @onClick="handleClick"
        ></tabs>
        <div class="recentOrdersContainerRow flex ">
            <carousel
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true"
                    value="NewOrders"
                    v-if="currentTab === 'NewOrders'"
            >
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="operator">Operator</td>
                                <td class="location">Location</td>
                                <td class="distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </carousel>
            <carousel
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true"
                    value="Accepted"
                    v-if="currentTab === 'Accepted'"
            >
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </carousel>
            <carousel
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true"
                    value="PickedUp"
                    v-if="currentTab === 'PickedUp'"
            >
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </carousel>
            <carousel
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true"
                    value="Delivered"
                    v-if="currentTab === 'Delivered'"
            >
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </carousel>
            <carousel
                    class="sliderRecentOrders"
                    :items="1"
                    :nav="true"
                    value="Declined"
                    v-if="currentTab === 'Declined'"
            >
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="recentOrdersList flex">
                    <div class="recentOrdersListItem flex">
                        <table class="recentOrdersList flex">
                            <thead>
                            <tr class="recentOrdersListItem flex borderBottom ">
                                <td class="orderNumber">Order №</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">Start date</td>
                                <td class="Status">Status</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="recentOrdersListItem flex borderBottom" v-for="item in orders" :key="orders.id">
                                <td class="orderNumber">{{item.count_item}}</td>
                                <td class="Operator">Operator</td>
                                <td class="Location">Location</td>
                                <td class="Distance">Distance</td>
                                <td class="startDate">{{item.departure_time.slice(0,10)}}</td>
                                <td class="Status">{{item.status}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </carousel>
        </div>
    </div>
</template>

<script>
    import carousel from "vue-owl-carousel";
    import Tabs from "vue-tabs-with-active-line";

    export default {
        name: "Profile",
        components: {
            carousel,
            Tabs
        },
        data: () => ({
            tabs: [
                {title: "New orders", value: "NewOrders"},
                {title: "Accepted", value: "Accepted"},
                {title: "Picked up", value: "PickedUp"},
                {title: "Delivered", value: "Delivered"},
                {title: "Declined", value: "Declined"}
            ],
            currentTab: "NewOrders"
        }),
        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
            }
        },
        computed: {
            orders() {
                return this.$store.getters.getOrders
            }
        },
        created() {
            this.$store.dispatch('load_orders')
        }
    };
</script>

<style>
    .ordersContainer {
        overflow-x: hidden;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 0 !important;
    }
    .noGap {
        padding: 0 !important;
    }
    .ordersContainerTabs {
        margin: 5px 5px 15px;
        width: 100%;
    }

    .borderBottom {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
    }

    .recentOrdersListItem:last-child {
        border-bottom: none;
    }

    .ordersContainerTabs > .tabs__item {
        color: #fff;
        padding: 5px 25px;
        background: transparent;
        border: none;
        font-size: 1em;
        cursor: pointer;
        border-radius: 25px;
        transition: 1s;
        outline: none;
        margin: 0 15px;
    }

    .tabs {
        /* position: absolute !important; */
        top: 80px;
        left: 266px;
    }

    .tabs__item {
        border-radius: 24px !important;
    }

    .tabs__item_active,
    .tabs__item:hover {
        background-color: #fff !important;
        color: #4a4a4a !important;
    }

    .sliderRecentOrders {
        margin: 0 !important;
    }
</style>
