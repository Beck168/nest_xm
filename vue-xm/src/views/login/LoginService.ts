/*
 * @Author: beck
 * @Description:
 * @Date: 2022-10-08 14:33:34
 * @LastEditTime: 2022-10-08 15:37:27
 * @FilePath: \项目nestjs_vue_ts\vue-xm\src\views\login\LoginService.ts
 */
import API from "@/service";
import type { FormState } from "./login.dto";

/**
 *登录
 * @param data
 */
const APILogin = (data: FormState) => {
  const datas = API.post("/auth/login", {
    username: data.username,
    password: data.password,
  })
    .then((res) => {
      return res;
    })
    .catch((rej) => {
      return rej.response;
    });
  return datas;
};

export { APILogin };
