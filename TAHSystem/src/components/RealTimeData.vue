<template>
    <div>
        <ve-line :data="chartData"  :extend="chartExtend"></ve-line>
    </div>
</template>

<script>
    export default {
        name: 'RealTimeData',
        data() {
            this.chartExtend = {
                 series: {
                    connectNulls: true   //自动连接间断点数据
                },
            },
            this.chartSettings = {
                metrics: ['温度1', '温度2', "温度3"],
                dimension: ['时间'],
                connectNulls: true,
            }
            return {
                chartData: {
                    columns: ['时间', '温度1', '温度2', '温度3'],
                    rows: [
                        { '时间': '02:10:10', '温度1': 13.3, '温度2': 82, '温度3': 62 },
                        { '时间': '02:10:11', '温度1': 35.0, '温度2': 81, '温度3': 61 },
                        { '时间': '02:10:12', '温度1': 29.3, '温度2': 88 },
                        { '时间': '02:10:13', '温度1': 17.3, '温度2': 89, '温度3': 69 },
                        { '时间': '02:10:14', '温度1': 37.2, '温度2': 92, '温度3': 62 },
                        { '时间': '', '温度1': 45.3, '温度2': 90, '温度3': 60 }
                    ]
                },
                websock: null,
            }
        },
        methods: {
            initWebSocket() { //初始化weosocket
                const wsuri = "ws://127.0.0.1:30000";
                this.websock = new WebSocket(wsuri);
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onclose = this.websocketclose;
            },
            websocketonopen() { //连接建立之后执行send方法发送数据
                let actions = { "test": "12345" };
                this.websocketsend(JSON.stringify(actions));
            },
            websocketonerror() {//连接建立失败重连
                this.initWebSocket();
            },
            websocketonmessage(e) { //数据接收
               // const redata = JSON.parse(e.data);
                console.log(e);
            },
            websocketsend(Data) {//数据发送
                this.websock.send(Data);
            },
            websocketclose(e) {  //关闭
                console.log('断开连接', e);
            },

        },
        created() {
            this.initWebSocket();
        },
        destroyed() {
            this.websock.close() //离开路由之后断开websocket连接
        },
        mounted() {

        }
    };
</script>

<style scoped>
</style>