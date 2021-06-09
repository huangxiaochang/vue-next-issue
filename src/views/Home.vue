<template>
  <div class="container">
    hello word
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const homeHeight = ref('1000px')
    return {
      homeHeight
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  min-height: v-bind(homeHeight);
}
</style>
