<template>
    <div>
        <ve-line :data="chartData" :extend="chartExtend" :settings="chartSettings" height="800px" :toolbox="toolbox" :change-delay="0"></ve-line>
        <ve-line :data="chartData1" :extend="chartExtend1" :settings="chartSettings1" height="800px" :toolbox="toolbox"></ve-line>
        <ve-line :data="chartData2" :extend="chartExtend2" :settings="chartSettings2" height="800px" :toolbox="toolbox"></ve-line>
        <ve-line :data="chartData3" :extend="chartExtend3" :settings="chartSettings3" height="800px" :toolbox="toolbox"></ve-line>
        <ve-line :data="chartData4" :extend="chartExtend4" :settings="chartSettings4" height="800px" :toolbox="toolbox"></ve-line>
        <ve-line :data="chartData5" :extend="chartExtend5" :settings="chartSettings5" height="800px" :toolbox="toolbox"></ve-line>

    </div>
</template>

<script>
    import { Select } from "element-ui";

    export default {
        name: 'HistoryData',
        data() {
            const tempA = ['温度A1', '温度A2', '温度A3', '温度A4', '温度A5', '温度A6', '温度A7', '温度A8', '温度A9', '温度A10', '温度A11', '温度A12', '温度A13', '温度A14', '温度A15', '温度A16', '温度A17', '温度A18', '温度A19', '温度A20', '温度A21', '温度A22', '温度A23']
            const tempB = ['温度B1', '温度B2', '温度B3', '温度B4', '温度B5', '温度B6', '温度B7', '温度B8', '温度B9', '温度B10', '温度B11', '温度B12', '温度B13', '温度B14', '温度B15', '温度B16', '温度B17', '温度B18', '温度B19', '温度B20', '温度B21', '温度B22', '温度B23']
            const humiA = ['湿度A1', '湿度A2', '湿度A3', '湿度A4', '湿度A5', '湿度A6', '湿度A7', '湿度A8', '湿度A9', '湿度A10', '湿度A11', '湿度A12', '湿度A13', '湿度A14', '湿度A15', '湿度A16', '湿度A17', '湿度A18', '湿度A19', '湿度A20', '湿度A21', '湿度A22', '湿度A23']
            const humiB = ['湿度B1', '湿度B2', '湿度B3', '湿度B4', '湿度B5', '湿度B6', '湿度B7', '湿度B8', '湿度B9', '湿度B10', '湿度B11', '湿度B12', '湿度B13', '湿度B14', '湿度B15', '湿度B16', '湿度B17', '湿度B18', '湿度B19', '湿度B20', '湿度B21', '湿度B22', '湿度B23']
            const illuA = ['照度A1', '照度A2', '照度A3', '照度A4', '照度A5', '照度A6', '照度A7', '照度A8', '照度A9', '照度A10', '照度A11', '照度A12', '照度A13', '照度A14', '照度A15', '照度A16', '照度A17', '照度A18', '照度A19', '照度A20', '照度A21', '照度A22', '照度A23']
            const illuB = ['照度B1', '照度B2', '照度B3', '照度B4', '照度B5', '照度B6', '照度B7', '照度B8', '照度B9', '照度B10', '照度B11', '照度B12', '照度B13', '照度B14', '照度B15', '照度B16', '照度B17', '照度B18', '照度B19', '照度B20', '照度B21', '照度B22', '照度B23']
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
            this.chartExtend4 = {
                series: {
                    connectNulls: true   //自动连接间断点数据
                }
            }
            this.chartExtend5 = {
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
            this.chartSettings4 = {
                metrics: illuA,
                dimension: ['时间'],
            }
            this.chartSettings5 = {
                metrics: illuB,
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
                chartData4: {
                    columns: illuA,
                    rows: []
                },

                chartData5: {
                    columns: illuB,
                    rows: []
                },
                seriesData: [],
                seriesData1: [],
                seriesData2: [],
                seriesData3: [],
                seriesData4: [],
                seriesData5: [],
                //date: null,
                //result: null,
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
                    switch (redata.name) {
                        //Temp_A
                        case "\rTemp_A0":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A1': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A1":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A2': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A2":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A3': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A3":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A4': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A4":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A5': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A5":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A6': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A6":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A7': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A7":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A8': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A8":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A9': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A9":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A10': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A10":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A11': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A11":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A12': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A12":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A13': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A13":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A14': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A14":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A15': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A15":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A16': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A16":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A17': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A17":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A18': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A18":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A19': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A19":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A20': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A20":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A21': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A21":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A22': redata.value };
                            this.seriesData.push(data);
                            break;
                        case "\rTemp_A22":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度A23': redata.value };
                            this.seriesData.push(data);
                            break;
                        //Temp_B
                        case "\rTemp_B0":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B1': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B1":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B2': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B2":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B3': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B3":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B4': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B4":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B5': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B5":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B6': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B6":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B7': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B7":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B8': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B8":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B9': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B9":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B10': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B10":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B11': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B11":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B12': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B12":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B13': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B13":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B14': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B14":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B15': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B15":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B16': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B16":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B17': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B17":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B18': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B18":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B19': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B19":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B20': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B20":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B21': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B21":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B22': redata.value };
                            this.seriesData1.push(data);
                            break;
                        case "\rTemp_B22":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '温度B23': redata.value };
                            this.seriesData1.push(data);
                            break;
                        //Humi_A
                        case "\rHumi_A0":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A1': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A1":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A2': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A2":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A3': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A3":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A4': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A4":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A5': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A5":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A6': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A6":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A7': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A7":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A8': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A8":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A9': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A9":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A10': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A10":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A11': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A11":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A12': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A12":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A13': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A13":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A14': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A14":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A15': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A15":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A16': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A16":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A17': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A17":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A18': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A18":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A19': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A19":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A20': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A20":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A21': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A21":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A22': redata.value };
                            this.seriesData2.push(data);
                            break;
                        case "\rHumi_A22":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度A23': redata.value };
                            this.seriesData2.push(data);
                            break;

                        //Humi_B
                        case "\rHumi_B0":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B1': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B1":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B2': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B2":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B3': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B3":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B4': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B4":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B5': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B5":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B6': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B6":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B7': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B7":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B8': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B8":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B9': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B9":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B10': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B10":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B11': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B11":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B12': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B12":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B13': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B13":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B14': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B14":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B15': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B15":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B16': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B16":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B17': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B17":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B18': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B18":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B19': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B19":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B20': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B20":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B21': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B21":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B22': redata.value };
                            this.seriesData3.push(data);
                            break;
                        case "\rHumi_B22":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '湿度B23': redata.value };
                            this.seriesData3.push(data);
                            break;
                        //照度
                        case "\rlight_A0":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A1': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A1":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A2': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A2":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A3': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A3":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A4': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A4":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A5': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A5":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A6': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A6":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A7': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A7":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A8': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A8":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A9': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A9":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A10': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A10":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A11': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A11":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A12': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A12":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A13': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A13":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A14': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A14":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A15': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A15":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A16': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A16":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A17': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A17":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A18': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A18":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A19': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A19":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A20': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A20":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A21': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A21":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A22': redata.value };
                            this.seriesData4.push(data);
                            break;
                        case "\rlight_A22":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度A23': redata.value };
                            this.seriesData4.push(data);
                            break;
                        //light_B
                        case "\rlight_B0":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B1': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B1":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B2': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B2":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B3': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B3":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B4': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B4":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B5': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B5":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B6': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B6":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B7': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B7":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B8': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B8":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B9': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B9":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B10': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B10":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B11': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B11":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B12': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B12":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B13': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B13":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B14': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B14":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B15': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B15":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B16': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B16":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B17': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B17":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B18': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B18":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B19': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B19":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B20': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B20":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B21': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B21":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B22': redata.value };
                            this.seriesData5.push(data);
                            break;
                        case "\rlight_B22":
                            var data = { '时间': this.dateFormat(redata.addDateTime), '照度B23': redata.value };
                            this.seriesData5.push(data);
                            break;
                        default:
                            break;
                    }
                    //console.log(this.seriesData);
                    //console.log(this.seriesData1);
                    //console.log(this.seriesData2);
                    //console.log(this.seriesData3);
                    //console.log(this.seriesData4);
                    //console.log(this.seriesData5);

                    this.chartData.rows = this.seriesData;
                    this.chartData1.rows = this.seriesData1;
                    this.chartData2.rows = this.seriesData2;
                    this.chartData3.rows = this.seriesData3;
                    this.chartData4.rows = this.seriesData4;
                    this.chartData5.rows = this.seriesData5;
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
                // console.log(r);
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





            //:data-zoom="dataZoom"
            //:data-zoom="dataZoom"
            //:data-zoom="dataZoom"
            //:data-zoom="dataZoom"
            //:data-zoom="dataZoom"
            //:data-zoom="dataZoom"









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