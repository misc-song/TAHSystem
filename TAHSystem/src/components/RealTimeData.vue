<template>
    <div>
        实时数据
        <ve-line :data="chartData"></ve-line>
    </div>
</template>

<script>
    export default {
        name: 'RealTimeData',
        data() {
            this.chartSettings = {
                metrics: ['温度', '湿度'],
                dimension: ['时间']
            }
            return {
                chartData: {
                    columns: ['时间', '温度', '湿度'],
                    rows: [
                        { '时间': '10:10', '温度': 13.3, '湿度': 82 },
                        { '时间': '10:11', '温度': 35.0, '湿度': 81 },
                        { '时间': '10:12', '温度': 29.3, '湿度': 88 },
                        { '时间': '10:13', '温度': 17.3, '湿度': 89 },
                        { '时间': '10:14', '温度': 37.2, '湿度': 92 },
                        { '时间': '10:15', '温度': 45.3, '湿度': 90 }
                    ]
                }
            }
        },
        mounted() {

        }
    };
</script>

<style scoped>
</style>