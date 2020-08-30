<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div>
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="选择串口">
                            <el-select v-model="postName" placeholder="选择串口">
                                <el-option v-for="item in portList" :key="item.index" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="波特率">
                            <el-select v-model="baudRate" placeholder="波特率">
                                <el-option label="115200" value="115200"></el-option>
                                <el-option label="38400" value="38400"></el-option>
                                <el-option label="19200" value="19200"></el-option>
                                <el-option label="9600" value="9600"></el-option>
                                <el-option label="2400" value="2400"></el-option>
                                <el-option label="1200" value="1200"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="数据位">
                            <el-select v-model="dataBits" placeholder="数据位">
                                <el-option label="8" value="8"></el-option>
                                <el-option label="7" value="7"></el-option>
                                <el-option label="6" value="6"></el-option>
                                <el-option label="5" value="5"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="校验方式">
                            <el-select v-model="parity" placeholder="校验方式">
                                <el-option label="None" value="0"></el-option>
                                <el-option label="Odd" value="1"></el-option>
                                <el-option label="Even" value="2"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="停止位">
                            <el-select v-model="stopBits" placeholder="停止位">
                                <el-option label="1" value="1"></el-option>
                                <el-option label="2" value="2"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="读取超时">
                            <el-input v-model="readTimeout" class="elinput"></el-input>
                        </el-form-item>
                        <el-form-item label="写入超时">
                            <el-input v-model="writeTimeout" class="elinput"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="sendToServer">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "SysConfig",
        data() {
            return {
                portList: {},
                postName: "",
                baudRate: "",
                dataBits: "",
                parity: "",
                stopBits: "",
                readTimeout: "",
                writeTimeout: ""
            }
        },
        methods: {              // 方法
            //绑定ElementUI current-change 事件 当分页页码改变的时候触发
            GetPortName(val) {
                this.axios
                    .get('http://localhost:5000/api/Configure/GetAllSerialPortName')
                    .then((response) => {
                        console.log(response.data.serverData);
                        this.portList = response.data.serverData;

                    }).catch((response) => {
                        console.log(response);
                    })

            },
            getData() {
                console.log(this.result.total);
            },
            sendToServer() {
                console.log("sending....");
                let data = new FormData();
                console.log("portName:" + this.postName + "stopBits:" + this.stopBits)
                data.append("portName", this.postName);
                data.append("stopBits", this.stopBits);
                data.append("baudRate", this.baudRate);
                data.append("dataBits", this.dataBits);
                data.append("parity", this.parity);
                data.append("readTimeout", this.readTimeout);
                data.append("writeTimeout", this.writeTimeout);

                //axios 发送请求
                this.axios
                    .post('http://localhost:5000/api/Configure/SetSerialPort', data)
                    .then((response) => {
                        console.log(response.data.serverData);
                        this.portList = response.data.serverData;

                    }).catch((response) => {
                        console.log(response);
                    })
            }
        },
        mounted: function () {
            this.GetPortName();
        }
    }

</script>

<style scoped>
    .elinput {
        width: 200px;
    }
</style>