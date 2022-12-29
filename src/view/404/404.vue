<template>
  <div class="container">
    <button class="go-home" @click="goHomeBtn"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const goHomeBtn = function () {
      router.push('/main')
    }
    return {
      goHomeBtn
    }
  }
})
</script>

<style scoped lang="less">
.container {
  position: relative;
  background: url('~@/assets/img/404.png') no-repeat;

  .go-home {
    width: 100%;
    height: 60px;
    margin: 360px auto 0;
    background: transparent;
    opacity: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
}
</style>
