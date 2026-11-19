<script setup lang="ts">
const route = useRoute()

// Seamlessly forward to sales/demo with any query parameters (e.g. ?product=xxx)
await navigateTo({
  path: '/contact/sales',
  query: route.query,
}, { replace: true })
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA]"></div>
</template>
