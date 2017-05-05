import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import css from "./main.scss";
import axios from "axios";
import store from "./store";
import routes from "./routes";
import AppNav from "./nav.vue";
import interceptors from "utils/interceptors";

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
