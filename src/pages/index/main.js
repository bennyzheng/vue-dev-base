// 若不需要考虑兼容性可以不包含babel-polyfill，仅需在入口文件包含
import "babel-polyfill";
import "./main.scss";
import "utils/interceptors";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import store from "./store";
import routes from "./routes";
import AppNav from "./nav.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

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
