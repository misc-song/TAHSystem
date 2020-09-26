<template>
    <el-row>
        <el-col :span="24" class="naviContent">
            <div>
                <el-tabs tab-position="top" class="tabs">
                    <el-tab-pane sstyle="overflow-y:auto;" label="实时数据" lazy>
                        <RealTimeData></RealTimeData>
                    </el-tab-pane>
                    <el-tab-pane label="历史数据" lazy>
                        <HistoryData></HistoryData>
                    </el-tab-pane>
                    <el-tab-pane label="系统配置">
                        <SysConfig></SysConfig>
                    </el-tab-pane>
                    <!--<el-tab-pane label="系统日志">
                        <SysLog></SysLog>
                    </el-tab-pane>-->
                    <el-tab-pane label="系统状态">
                        <SysStatue></SysStatue>
                    </el-tab-pane>
                    <!--<el-tab-pane label="退出登录">
                        退出登录
                    </el-tab-pane>-->
                </el-tabs>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import RealTimeData from './RealTimeData.vue';
    import SysConfig from './SysConfig.vue';
    //import SysLog from './SysLog.vue';
    import SysStatue from './SysStatue.vue';
    import HistoryData from './HistoryData.vue'
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
            SysConfig,
            //  SysLog,
            SysStatue,
            HistoryData,
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
        /*        border: 1px solid #409EFF;*/
    }

    .tabs {
        /*   position: fixed;
        height: 100%;
        width: 100%;*/
    }
</style>