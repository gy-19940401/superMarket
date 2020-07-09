<template>
    <div class="tabbar-item" @click='curClick'>
        <div v-if="!isActive">
            <slot name="icon"></slot>
        </div>
        <div v-else>
            <slot name="icon1"></slot>
        </div>
        <div :class="{active: !isActive}">
            <slot name="text"></slot>
        </div>
    </div>
    <!-- <img src="../../assets/img/tabbar/label1.png" alt="">
        <div class="context">首页</div>-->
</template>

<script>
    export default {
        name: 'Tabbleitem',
        props: {
            path: String
        },
        data() {
            return {
                // isActive: true
            };
        },
        methods: {
            curClick() {
                this.$router.replace(this.path)
            }
        },
        computed: {
            isActive() {
                // console.log(this.path + this.$route.path);
                return this.$route.path.indexOf(this.path) !== -1
            }
        }
    }
</script>

<style scoped>
    .tabbar-item {
        flex: 1;
        height: 49px;
        /* line-height: 49px; */
        list-style: none;
        font-size: 12px;
        /* background-color:red; */
    }

    .active {
        color: red;
    }

    img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
    }
</style>