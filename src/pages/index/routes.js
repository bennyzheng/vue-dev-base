import ModHome from "./views/home";
import ModUser from "./views/user";
import ModPost from "./views/post";

export default {
    routes: [
        { "path": "/", "component": ModHome },
        { "path": "/user", "component": ModUser },
        { "path": "/post/:id", "component": ModPost }
    ]
}