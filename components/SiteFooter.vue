<script setup lang="ts">
const { site, categories } = useContent()
</script>

<template>
  <footer class="bg-igenco-900 pb-8 pt-14 text-base text-slate-300">
    <div class="wrap grid gap-10 border-b border-igenco-800 pb-10 md:grid-cols-2 lg:grid-cols-4">
      <div class="lg:col-span-2">
        <p class="font-heading text-xl font-bold text-white">{{ site.name }}</p>
        <p class="text-igenco-200">{{ site.legalName }}</p>
        <p class="mt-3 max-w-md">ที่ปรึกษา ออกแบบ และพัฒนาซอฟต์แวร์ระดับองค์กร พร้อมวางระบบโครงสร้างพื้นฐานด้านไอทีครบวงจร</p>
        <p class="mt-3 max-w-md text-slate-400">{{ site.address }}</p>
      </div>
      <div>
        <p class="mb-3 font-heading font-semibold text-white">ผลิตภัณฑ์</p>
        <ul class="space-y-2">
          <li v-for="(c, key) in categories" :key="key">
            <NuxtLink :to="{ path: '/products', query: { category: key } }" class="hover:text-white">{{ c.label }}</NuxtLink>
          </li>
          <li><NuxtLink to="/products" class="hover:text-white">ดูทั้งหมด</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="mb-3 font-heading font-semibold text-white">ติดต่อเรา</p>
        <ul class="space-y-2">
          <li><a :href="`tel:${site.phoneHref}`" class="hover:text-white">{{ site.phone }}</a></li>
          <li><a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a></li>
          <li>LINE {{ site.line }}</li>
          <li>{{ site.hours }}</li>
        </ul>
      </div>
    </div>
    <p class="wrap pt-6 text-sm text-slate-400">© 2026 {{ site.legalName }} สงวนลิขสิทธิ์</p>
  </footer>
</template>
