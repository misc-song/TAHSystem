<template>
    <div class="HeadBar">
        <el-row class="head_row">
            <el-col >
                <div class="left_head ">
                    <router-link to="/Main">
                        <div class="logo">
                            <img src="../assets/icon.png"  alt="Alternate Text" class="icon"/>
                        </div>
                        <div class="sitename">
                            TEMP&HUMID System
                        </div>
                    </router-link>
                </div>
                <div class="right_head ">
                    <!--<span><a class="head_link" href="#">登录</a></span>
                    <span><a class="head_link" href="#">注册</a></span>-->
                    <!--<span><router-link to="/Login">login</router-link></span>-->
                    <!--<span><router-link to="/Register">register</router-link></span>-->
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'HeadBar',
      
    };
</script>

<style scoped>
    .HeadBar {
        background-color: #333;
    }

    .head_row {
        height: 60px;
    }
    .icon {
        width: 30px;
        height: 30px;
        margin-right:10px;
    }
    .left_head {
        margin-top: 18px;
        float: left;
        /*width: 237px;*/
    }

    .right_head {
        margin-top: 18px;
        float: right;
    }

    .berder_1px {
        border: 1px red solid;
    }

    .logo {
        float: left;
    }

    .sitename {
        width: 230px;
        line-height: 24px;
        color: #0cb1db;
        font-size: 20px;
        float: right;
        padding-left: 13px;
        border-left: 1px solid #fff;
        /*border:1px red solid;*/
        cursor: pointer;
    }

    .head_link{
        color: #fff;
        text-decoration:none;
        font-size:18px;
    }
</style>