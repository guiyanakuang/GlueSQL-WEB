<template>
    <span slot="prepend">从</span>
    <i-select :model.sync="model8" clearable style="width:200px">
        <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
    </i-select>
    <span slot="append">查询</span>
</template>
<script>

    export default {
        data () {
            return {
                cityList: [
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
                model8: ''
            }
        }
    }
</script>