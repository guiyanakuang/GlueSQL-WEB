<style scoped>
    .layout{
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        height: 85%;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        height: 100%;
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .ivu-row-flex{
        height: 100%;
    }
    #query{
        height: 30%;
        padding: 10px;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Menu-item key="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">行为事件查询</span>
                    </Menu-item>
                    <Menu-item key="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">主题分析</span>
                    </Menu-item>
                    <Menu-item key="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">用户群分析</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">查询中心</Breadcrumb-item>
                        <Breadcrumb-item>行为事件查询</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <div id="query">
                            <query-select></query-select>
                        </div>
                        <div id="result">
                        </div>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import QuerySelect from './query-select.vue'
    export default {
        components:{ QuerySelect },
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>