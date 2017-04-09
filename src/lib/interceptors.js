import axios from "axios";

/**
 * 默认请示方式若是用json对象会使用json格式发送，改成form-urlencoded
 */
axios.interceptors.request.use((request) => {
    if (typeof request.data != "object") {
        return request;
    }

    request.headers["Content-Type"] = "application/x-www-form-urlencoded";
    request.data = Object.keys(request.data).map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(request.data[key]);
    }).join("&");

    return request;
});

/**
 * 将请求返回的数据拦截处理一下
 */
axios.interceptors.response.use((response) => {
    return typeof response.data != "object" ? Promise.reject({
        code: "-999",
        msg: "请求返回数据损坏",
        data: null
    }) : response.data;
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

console.log("here");

export default {}

