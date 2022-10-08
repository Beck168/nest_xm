<!--
 * @Author: beck
 * @Description:
 * @Date: 2022-10-08 11:35:41
 * @LastEditTime: 2022-10-08 16:45:38
 * @FilePath: \项目nestjs_vue_ts\vue-xm\src\views\home\HomeView.vue
-->
<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <user-outlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content> Content </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>
<style></style>
