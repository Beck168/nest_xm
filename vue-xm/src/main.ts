/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-06 11:28:11
 * @LastEditTime: 2022-10-08 16:47:15
 * @FilePath: \项目nestjs_vue_ts\vue-xm\src\main.ts
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.min.css";
import axios from "@/service";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");
app.config.globalProperties.$axios = axios; //把axios挂载到全局上
