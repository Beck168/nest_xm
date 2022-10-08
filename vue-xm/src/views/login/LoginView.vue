<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="账号"
      name="username"
      :rules="[{ required: true, message: '请输入账号' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a class="login-form-forgot" href="">忘记密码</a>
    </a-form-item>

    <a-form-item>
      <a-button
        :disabled="disabled"
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { APILogin } from "./LoginService";
import { message } from "ant-design-vue";
interface FormState {
  username: string;
  password: string;
}

const router = useRouter(); //全局路由

const formState = reactive<FormState>({
  username: "",
  password: "",
});
//表单验证
const onFinish = async (values: any) => {
  console.log("Success:", values);
  const data = await APILogin(values);
  const datas = data.data;
  console.log(datas);

  if (datas.success === "true") {
    localStorage.setItem("token", datas.data.token);
    message.success("登录成功");
    router.push({ name: "home" });
  } else {
    message.error(datas.data);
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style>
.login-form {
  max-width: 500px;
  position: relative;
  left: 50%;
  top: -20%;
  box-shadow: 1px 1px 3px rgb(157, 157, 157);
  padding: 50px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
