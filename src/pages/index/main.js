import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Promise from "promise";
import css from "./common.scss";
import axios from "axios";
import store from "./store";
import routes from "./routes";
import AppNav from "./nav.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

/**
 * 将请求返回的数据拦截处理一下
 */
axios.interceptors.response.use((response) => {
    return typeof response.data != "object" ? {
        code: "-999",
        msg: "请求返回数据损坏",
        data: null
    } : response.data;
}, function (error) {
    return Promise.reject({
        code: "-999",
        msg: `[${error.response.status}]网络请求失败，请重试`,
        data: {
            status: error.response.status,
            statusText: error.response.statusText,
            error
        }
    });
});

const app = new Vue({
    components: {AppNav},
    store: new Vuex.Store(store),
    router: new VueRouter(routes),
    created() {
        this.$store.dispatch("common.navList")
            .then(data => {
                console.log(data);
            })
            .catch(msg => {
                console.error(msg);
            })
    }
}).$mount("#app");
