<template>
    <div>
        <p>系统状态</p>
        <p><span>id：</span><span>{{id}}</span></p>
        <p><span>进程名称：</span><span>{{processName}}</span></p>
        <p><span>COM端口：</span><span>{{comName}}</span></p>
        <p><span>进程id：</span><span>{{processId}}</span></p>
        <el-button type="primary" @click="CloseProcess">关闭服务</el-button>
        <el-button type="primary" @click="GetRunningProcess">刷新状态</el-button>
    </div>
</template>

<script>
    export default {
        name: "SysStatue",
        data() {
            return {
                id: "",
                comName: "",
                processName: "",
                processId: "",
                res: {},
            }
        },

        methods: {              // 方法
            //绑定ElementUI current-change 事件 当分页页码改变的时候触发
            GetRunningProcess() {
                this.axios
                    .get('http://localhost:5000/api/Configure/GetRunningProcess')
                    .then((response) => {
                     //   console.log(response.data.serverData);
                        if (response.data.serverData == null) {
                            return;
                        }
                        this.res = response.data.serverData
                        this.id = this.res.id;
                        this.comName = this.res.comName;
                        this.processName = this.res.processName;
                        this.processId = this.res.processId;


                    }).catch((response) => {
                        console.log(response);
                    })

            },
            //关闭一个服务
            CloseProcess() {
                if (this.id == null) {
                    alert("当前没有正在运行的服务");
                    return;
                }
                this.axios
                    .get('http://localhost:5000/api/Configure/KillProcess?id=' + this.id)
                    .then((response) => {
                        console.log(response.data.serverData);

                        var ok = response.data.data;
                        if (ok) {
                            alert("服务已经关闭");
                        }
                        else {
                            alert("服务关闭失败");

                        }


                    }).catch((response) => {
                        console.log(response);
                    })
            },

        },
        created: function () {
            this.GetRunningProcess();
            // console.log("start ");
        }
    }
</script>

<style scoped>
</style>