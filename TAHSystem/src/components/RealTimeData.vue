<template>
    <div>
        <ve-line :data="chartData" :extend="chartExtend" :settings="chartSettings" :data-zoom="dataZoom" height="800px" :toolbox="toolbox" :change-delay="0"></ve-line>
        <ve-line :data="chartData1" :extend="chartExtend1" :settings="chartSettings1" :data-zoom="dataZoom" height="800px" :toolbox="toolbox"></ve-line>
        <ve-line :data="chartData2" :extend="chartExtend2" :settings="chartSettings2" :data-zoom="dataZoom" height="800px" :toolbox="toolbox"></ve-line>
        <ve-line :data="chartData3" :extend="chartExtend3" :settings="chartSettings3" :data-zoom="dataZoom" height="800px" :toolbox="toolbox"></ve-line>
    </div>
</template>

<script>
    export default {
        name: 'RealTimeData',
        data() {
            const tempA = ['温度A1', '温度A2', '温度A3', '温度A4', '温度A5', '温度A6', '温度A7', '温度A8', '温度A9', '温度A10', '温度A11', '温度A12', '温度A13', '温度A14', '温度A15', '温度A16', '温度A17', '温度A18', '温度A19', '温度A20', '温度A21', '温度A22', '温度A23']
            const tempB = ['温度B1', '温度B2', '温度B3', '温度B4', '温度B5', '温度B6', '温度B7', '温度B8', '温度B9', '温度B10', '温度B11', '温度B12', '温度B13', '温度B14', '温度B15', '温度B16', '温度B17', '温度B18', '温度B19', '温度B20', '温度B21', '温度B22', '温度B23']
            const humiA = ['湿度A1', '湿度A2', '湿度A3', '湿度A4', '湿度A5', '湿度A6', '湿度A7', '湿度A8', '湿度A9', '湿度A10', '湿度A11', '湿度A12', '湿度A13', '湿度A14', '湿度A15', '湿度A16', '湿度A17', '湿度A18', '湿度A19', '湿度A20', '湿度A21', '湿度A22', '湿度A23']
            const humiB = ['湿度B1', '湿度B2', '湿度B3', '湿度B4', '湿度B5', '湿度B6', '湿度B7', '湿度B8', '湿度B9', '湿度B10', '湿度B11', '湿度B12', '湿度B13', '湿度B14', '湿度B15', '湿度B16', '湿度B17', '湿度B18', '湿度B19', '湿度B20', '湿度B21', '湿度B22', '湿度B23']
            this.chartExtend = {
                series: {
                    connectNulls: true   //自动连接间断点数据
                }
            }
            this.chartExtend1 = {
                series: {
                    connectNulls: true   //自动连接间断点数据
                }
            }
            this.chartExtend2 = {
                series: {
                    connectNulls: true   //自动连接间断点数据
                }
            }
            this.chartExtend3 = {
                series: {
                    connectNulls: true   //自动连接间断点数据
                }
            }
            //this.dataZoom = [
            //    {
            //        type: 'slider',
            //        start: 0,
            //        end: 20
            //    }
            //]
            this.toolbox = {
                feature: {
                    magicType: { type: ['line', 'bar'] },
                    saveAsImage: {}
                }
            }

            this.chartSettings = {
                metrics: tempA,
                dimension: ['时间'],
            }
            this.chartSettings1 = {
                metrics: tempB,
                dimension: ['时间'],
            }

            this.chartSettings2 = {
                metrics: humiA,
                dimension: ['时间'],
            }

            this.chartSettings3 = {
                metrics: humiB,
                dimension: ['时间'],
            }

            return {
                chartData: {
                    columns: tempA,
                    rows: []
                },
                chartData1: {
                    columns: tempB,
                    rows: []
                },
                chartData2: {
                    columns: humiA,
                    rows: []
                },
                chartData3: {
                    columns: humiB,
                    rows: []
                },
                seriesData: [],
                seriesData1: [],
                seriesData2: [],
                seriesData3: [],
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
                //  let actions = { "test": "12345" };
                //  this.websocketsend(JSON.stringify(actions));
            },
            websocketonerror() {//连接建立失败重连
                this.initWebSocket();
            },
            websocketonmessage(e) { //数据接收
                // const redata = JSON.parse(e.data);
                // console.log(e.data);
                if (e.data != "null") {
                    const redata = JSON.parse(e.data);
                    // console.log(redata.name);
                    if (redata.name === "\rTemp_A2") {
                        console.log(redata.addDateTime +" "+ redata.value);
                        //2020-09-05T15:31:58.3231495+08:00
                        var data = { '时间': this.dateFormat(redata.addDateTime), '温度A1': redata.value };
                        //  console.log(data + "fuckyou ");
                        console.log(data);
                        this.seriesData.push(data);
                        console.log(this.seriesData);
                        this.chartData.rows = this.seriesData;
                    }
                }
            },
            websocketsend(Data) {//数据发送
                this.websock.send(Data);
            },
            websocketclose(e) {  //关闭
                console.log('断开连接', e);
            },
            afterSetOption(chartObj) {

            },
            closeConnection() {

            },
            //格式化时间
            dateFormat(date) {
                var datetime = date.split(".");
                var res = datetime[0].split("T");
                var r = res[0] + " " + res[1];
                console.log(r);
                return r;
            },
           

           
        },
        created() {
            //console.log(this);
            this.initWebSocket();
            //this.chartData.rows = [{ '时间': '02:10:12', '温度1': 29.3, '温度2': 88 },
            //    { '时间': '02:10:13', '温度1': 17.3, '温度2': 89, '温度3': 69 },
            //    { '时间': '02:10:14', '温度1': 37.2, '温度2': 92, '温度3': 62 },
            //    { '时间': '', '温度1': 45.3, '温度2': 90, '温度3': 60 }]
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