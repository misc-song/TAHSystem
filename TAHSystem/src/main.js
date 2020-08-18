import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from 'vue-router'   //导入router.js文件
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueBus from 'vue-bus'

Vue.config.productionTip = true;
//注册axios
Vue.use(VueAxios, axios);
//注册ElementUI
Vue.use(ElementUI);
//注册Vue Bus
Vue.use(VueBus);
new Vue({
    router,					//全局引入文件
    render: h => h(App),

}).$mount('#app');