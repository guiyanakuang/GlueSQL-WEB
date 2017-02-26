<style scoped>
    .select-attr,.group-attr {
        padding-bottom: 8px;
    }
</style>
<template>
    <div class="select-attr">
        <span>按</span>
        <i-select class="period" :model.sync="periodModel" clearable style="width:80px" size="large">
            <i-option v-for="period in periodList" :value="period.value">{{ period.label }}</i-option>
        </i-select>
        <span>统计</span>
        <i-select class="product" :model.sync="productModel" clearable style="width:120px" size="large">
            <i-option v-for="item in productList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <span>的</span>
        <i-select class="index" :model.sync="indexModel" clearable multiple style="width:300px" size="large">
            <i-option v-for="item in indexList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
        <span>指标</span>
    </div>
    <div class="group-attr">
        <span>按</span>
        <i-select class="group" :model.sync="groupModel" clearable style="width:120px" size="large">
            <i-option v-for="item in groups" :value="item.value">{{ item.label }}</i-option>
        </i-select>
    </div>
    <i-button size="large" type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">查询</span>
        <span v-else>查询中...</span>
    </i-button>
</template>
<script>

    export default {
        data () {
            return {
                periodList: [
                    {
                        value: 'day',
                        label: '天',
                    },
                    {
                        value: 'week',
                        label: '星期',
                    },
                    {
                        value: 'month',
                        label: '月',
                    },
                    {
                        value: 'year',
                        label: '年',
                    }
                ],
                productList: [
                    {
                        value: 'one',
                        label: '产品1'
                    },
                    {
                        value: 'two',
                        label: '产品2'
                    },
                    {
                        value: 'three',
                        label: '产品3'
                    }
                ],
                indexList: [
                    {
                        value: 'uv',
                        label: 'UV'
                    },
                    {
                        value: 'pv',
                        label: 'PV'
                    },
                    {
                        value: 'added',
                        label: '新增'
                    },
                    {
                        value: 'keep',
                        label: '留存'
                    }
                ],
                groups: [
                    {
                        value: 'from',
                        label: '渠道'
                    },
                ],
                periodModel: [],
                productModel: [],
                indexModel: [],
                groupModel: [],
                loading: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
                axios.post('/query', {
                    period: this.periodModel,
                    product: this.productModel,
                    index: this.indexModel,
                    group: this.groupModel
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        }
    }
</script>