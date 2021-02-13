<template>
  <div class="h-full">
    <the-header />
    <main id="main" class="overflow-hidden">
      <router-view />
    </main>
    <!-- <the-footer /> -->
  </div>
</template>

<script>
import TheHeader from './TheHeader'
// import TheFooter from './TheFooter'

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
  data() {
    return {
      isLoading: false,
    }
  },
}
</script>

<style scoped></style>
