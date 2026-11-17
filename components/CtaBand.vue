<script setup lang="ts">
const { site } = useContent()
</script>

<template>
  <section class="section bg-igenco-50">
    <div class="wrap">
      <div class="grid items-center gap-8 rounded-3xl bg-igenco-900 p-8 text-white sm:p-12 lg:grid-cols-5">
        <div class="lg:col-span-3">
          <h2 class="text-2xl font-bold !text-white sm:text-3xl">พร้อมยกระดับระบบงานในองค์กรของคุณหรือยัง?</h2>
          <p class="mt-3 max-w-xl text-igenco-100">ระบุระบบหรือขอบเขตงานที่สนใจ ทีมที่ปรึกษาจะติดต่อกลับภายใน 1 วันทำการ เพื่อนัดสาธิตหรือจัดทำใบเสนอราคา</p>
        </div>
        <div class="flex flex-col gap-3 lg:col-span-2">
          <NuxtLink to="/contact" class="btn bg-igenco-500 text-white hover:bg-igenco-600">กรอกฟอร์มติดต่อฝ่ายขาย</NuxtLink>
          <a :href="`tel:${site.phoneHref}`" class="btn border border-white/40 text-white hover:bg-igenco-800">โทร {{ site.phone }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
