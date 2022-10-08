/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-08 14:28:16
 * @LastEditTime: 2022-10-08 14:45:44
 * @FilePath: \项目nestjs_vue_ts\vue-xm\src\service\index.ts
 */
import axios from "axios";
const API = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 6000,
});

export default API;
