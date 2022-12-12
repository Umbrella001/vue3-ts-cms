<template>
  <div>
    Home: store >>> {{ state.name }}
    <p>直接使用$stote {{ $store.state.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      state: { ...store.state }
    }
  }
})
</script>

<style scoped></style>
