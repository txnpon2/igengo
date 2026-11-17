<script setup lang="ts">
const { about, site } = useContent()
const tabs = [
  { id: 'history', label: 'ประวัติและเส้นทางความสำเร็จ' },
  { id: 'values', label: 'นโยบายและค่านิยม' },
  { id: 'org', label: 'แผนผังการบริหาร' },
] as const
const current = ref<(typeof tabs)[number]['id']>('history')
useSeoMeta({ title: 'เกี่ยวกับเรา' })
</script>

<template>
  <section class="section">
    <div class="wrap">
      <h1 class="text-3xl font-bold">เกี่ยวกับ {{ site.legalName }}</h1>
      <p class="mt-3 max-w-3xl text-slate-700">
        ก่อตั้งโดยทีมวิศวกรซอฟต์แวร์และนักวิเคราะห์ระบบที่มีประสบการณ์ เพื่อออกแบบ พัฒนาซอฟต์แวร์ระดับองค์กร และวางระบบไอทีครบวงจร
        เรามุ่งพัฒนาซอฟต์แวร์ลิขสิทธิ์ของคนไทยให้มีคุณภาพทัดเทียมมาตรฐานสากล
      </p>

      <div class="mt-8 flex flex-wrap gap-2" role="tablist">
        <button
          v-for="t in tabs" :key="t.id" role="tab" :aria-selected="current === t.id"
          class="rounded-full px-5 py-2.5 font-heading text-base font-medium"
          :class="current === t.id ? 'bg-igenco-700 text-white' : 'bg-igenco-50 text-slate-700 hover:bg-igenco-100'"
          @click="current = t.id"
        >{{ t.label }}</button>
      </div>

      <div class="mt-6 rounded-2xl border border-slate-200 bg-igenco-50/50 p-6 sm:p-8">
        <ol v-if="current === 'history'" class="space-y-6 border-l-2 border-igenco-600 pl-6">
          <li v-for="m in about.milestones" :key="m.year">
            <p class="font-heading font-bold text-igenco-800">{{ m.year }} · {{ m.title }}</p>
            <p class="text-slate-600">{{ m.text }}</p>
          </li>
        </ol>

        <div v-else-if="current === 'values'" class="grid gap-6 md:grid-cols-3">
          <div v-for="v in about.values" :key="v.title" class="rounded-xl border border-slate-200 border-t-4 border-t-igenco-700 bg-white p-5">
            <h3 class="font-bold">{{ v.title }}</h3>
            <p class="mt-2 text-base text-slate-600">{{ v.text }}</p>
          </div>
        </div>

        <div v-else class="mx-auto max-w-4xl text-center">
          <p class="inline-block rounded-xl bg-igenco-900 px-8 py-3 font-heading font-semibold text-white">กรรมการผู้จัดการ (Managing Director)</p>
          <div class="mx-auto h-6 w-px bg-slate-400"></div>
          <div class="grid gap-4 border-t border-slate-400 pt-4 sm:grid-cols-4">
            <div v-for="u in about.units" :key="u.en" class="rounded-xl border border-slate-200 bg-white p-4">
              <p class="font-heading font-bold text-igenco-900">{{ u.th }}</p>
              <p class="text-sm text-slate-500">{{ u.en }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <CtaBand />
</template>
