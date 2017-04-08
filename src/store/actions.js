import axios from "axios";
import mockjs from "mockjs";
import cgi from "conf/cgi";

export default {
    ["common.navList"](context) {
        // 造点假数据
        mockjs.mock(cgi.navList, {
            "code": 0,
            "msg": "success",
            "data": [
                { "path": "/", "title": "首页"},
                { "path": "/user", "title": "用户信息"},
                { "path": "/post/1234", "title": "文章详情"},
            ]
        });

        return axios.get(cgi.navList)
            .then(res => {
                if (res.code == 0) {
                    context.commit("common.navList", res.data);
                    return res.data;
                } else {
                    return Promise.reject("请求数据失败!");
                }
            }, error => {
                return Promise.reject(error.msg);
            });
    }
}