<template>
    <div class="tabbar">
        <tab-bar-item path='/home'>
            <img slot="icon" src="~assets/img/tabbar/label1.png" />
            <img slot="icon1" src="~assets/img/tabbar/label1-1.png" />
            <div slot="text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/about'>
            <img slot="icon" src="~assets/img/tabbar/label2.png" />
            <img slot="icon1" src="~assets/img/tabbar/label2-2.png" />
            <div slot="text">关于</div>
        </tab-bar-item>
        <tab-bar-item path='/cart'>
            <img slot="icon" src="~assets/img/tabbar/label3.png" />
            <img slot="icon1" src="~assets/img/tabbar/label3-3.png" />
            <div slot="text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile'>
            <img slot="icon" src="~assets/img/tabbar/label4.png" />
            <img slot="icon1" src="~assets/img/tabbar/label4-4.png" />
            <div slot="text">我的</div>
        </tab-bar-item>
    </div>
</template>

<script>
    import TabBarItem from "./Tabbleitem";
    export default {
        name: "TabBar",
        components: {
            TabBarItem
        },
        methods: {
            itemClick(path) {
                // console.log(this.$route);
                console.log("TabBar");
                this.$router.push(path);
            }
        }
    };
</script>

<style>
    /* @import url("~assets/css/base.css"); */

    .tabbar {
        position: fixed;
        left: 0;
        right: 0px;
        bottom: 0px;
        display: flex;
        text-align: center;
        background-color: #94fa94;
        box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
    }
</style>