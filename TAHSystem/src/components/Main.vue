﻿<template>
    <div class="Main">

        <!-- 通过v-if 进行条件渲染 如果不使用条件判断则子组件在钩子函数中的无法获取数据  -->
        <!--<LeftContent v-if="Object.keys(result).length" v-bind:result="result" />-->
        <Content class="content"></Content>
        <!--<Content @func="LoadData" class="content"></Content>-->

    </div>
</template>

<script>
    import Content from './Content.vue';
    //import RightContent from './RightContent.vue';
    import Pagination from './Pagination.vue';

    export default {
        name: 'Main',
        data() {
            return {
                result: {},
            }
        },
        props: {
            msg: String
        },
        components: {
            Content,
            //RightContent,
            Pagination
        },
        methods: {
            LoadData(pageIndex) {
                this.axios
                    .get('http://127.0.0.1:5000/api/Article/GetPageActicleList?pageSize=10&pageIndex=' + pageIndex + '&type=hot')
                    .then((response) => {
                        console.log(response.data);
                        this.result = response.data;

                    }).catch((response) => {
                        console.log(response);
                    })
            }
        },
        //钩子函数 在组建创建完成后调用（用于初始化页面的原始数据）
        //created() {
        //    this.axios
        //        .get('http://127.0.0.1:5000/api/Article/GetPageActicleList?pageSize=10&pageIndex=10&type=hot')
        //        .then((response) => {
        //            //console.log(response.data);
        //            this.result = response.data;

        //        }).catch((response) => {
        //            console.log(response);
        //        })
        //}
    }
</script>

<style scoped>
    .Main {
        margin-top: 12px;
    }

    /*.Main_Content {
        margin: 0 auto;
        margin-top: 20px;
        width: 1200px;
        min-height: 800px;*/
    /*border:1px red solid;*/
    /*}*/

    .Main_left {
        width: 400px;
        min-height: 800px;
        float: left;
        /*border-right: 1px #ccc solid;*/
    }

    .Main_right {
        width: 980px;
        float: right;
        min-height: 800px;
    }

    .Main_Bottom {
        float: right;
        width: 800px;
        margin: 0 auto;
    }


</style>