<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <nav-menu :fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="48px">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main class="el-main">
          <div class="page-container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/nav-menu.vue'
import NavHeader from '@/components/nav-header/nav-header.vue'

export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isFold = ref(false)

    const handleFoldChange = (isFoldVal: boolean) => {
      isFold.value = isFoldVal
    }

    return {
      isFold,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
}
.main-content {
  height: 100%;
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-main {
    background-color: #f0f2f5;

    .page-container {
      border-radius: 6px;
      background: #fff;
    }
  }
}
</style>
