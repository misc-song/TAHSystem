<template>
    <div>
        <el-tabs tab-position="left" class="tabs">
            <el-tab-pane label="实时数据">
                <RealTimeData></RealTimeData>
            </el-tab-pane>
            <el-tab-pane label="系统配置">
                系统配置
            </el-tab-pane>
            <el-tab-pane label="系统日志">
                系统日志
            </el-tab-pane>
            <el-tab-pane label="退出登录">

                退出登录
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import RealTimeData from './RealTimeData.vue';

    export default {
        name: 'Content',
        data() {
            return {
                msg: this.result
            }
        },
        props: {
            result: {
                type: Object,
            }
        },
        components: {
            RealTimeData,
        },
        methods: {
            clickMe() {
                console.log(this.result);
            }

        }
    }
</script>

<style>
    el-tab-pane {
    }

    .is-active {
        border: 1px solid #409EFF;
    }

    .tabs {
        height: 400px;
        width: 100%;
    }
</style>