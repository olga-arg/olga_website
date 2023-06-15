<template>
  <div @click="toggle" v-on-clickaway="away" class="relative">
    <slot name="toggler"> </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  mixins: [],
  provide() {
    return {
      sharedState: this.sharedState,
    }
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    }
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active
    },
    away() {
      this.sharedState.active = false
    },
  },
}
</script>
