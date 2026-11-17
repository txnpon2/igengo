<script setup lang="ts">
const route = useRoute()
const { site, getProducts } = useContent()
const { data: products } = await useAsyncData('contact-products', () => getProducts())
useSeoMeta({ title: 'ติดต่อฝ่ายขาย / นัดสาธิตระบบ' })

const form = reactive({
  product: String(route.query.product ?? ''),
  name: '', org: '', phone: '', message: '',
})
const sent = ref(false)

function submit() {
  // TODO: เมื่อ Strapi พร้อม ให้ POST ไปที่ /api/contact-requests
  sent.value = true
}

const field = 'mt-1 w-full rounded-xl border border-slate-300 px-4 py-2.5 focus:border-igenco-700'
</script>

<template>
  <section class="section">
    <div class="wrap grid gap-10 lg:grid-cols-5">
      <div class="lg:col-span-2">
        <h1 class="text-3xl font-bold">ติดต่อฝ่ายขาย / นัดสาธิตระบบ</h1>
        <p class="mt-3 text-slate-700">เจ้าหน้าที่จะติดต่อกลับภายใน 1 วันทำการ</p>
        <dl class="mt-6 space-y-4">
          <div><dt class="font-heading font-semibold text-igenco-800">โทรศัพท์</dt><dd><a :href="`tel:${site.phoneHref}`" class="hover:underline">{{ site.phone }}</a></dd></div>
          <div><dt class="font-heading font-semibold text-igenco-800">อีเมล</dt><dd><a :href="`mailto:${site.email}`" class="hover:underline">{{ site.email }}</a></dd></div>
          <div><dt class="font-heading font-semibold text-igenco-800">LINE Official</dt><dd>{{ site.line }}</dd></div>
          <div><dt class="font-heading font-semibold text-igenco-800">เวลาทำการ</dt><dd>{{ site.hours }}</dd></div>
          <div><dt class="font-heading font-semibold text-igenco-800">สำนักงานใหญ่</dt><dd>{{ site.address }}</dd></div>
        </dl>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-3">
        <p v-if="sent" class="rounded-xl bg-igenco-50 p-5 font-medium text-igenco-900" role="status">
          รับข้อมูลแล้ว เจ้าหน้าที่ฝ่ายขายจะติดต่อกลับภายใน 1 วันทำการ
        </p>
        <form v-else class="space-y-4" @submit.prevent="submit">
          <label class="block">ระบบหรือบริการที่สนใจ
            <select v-model="form.product" :class="field">
              <option value="">ขอคำปรึกษาทั่วไป</option>
              <option v-for="p in products" :key="p.slug" :value="p.slug">{{ p.code }} · {{ p.title }}</option>
            </select>
          </label>
          <label class="block">ชื่อ-นามสกุล *
            <input v-model="form.name" required autocomplete="name" :class="field" />
          </label>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block">หน่วยงาน / บริษัท *
              <input v-model="form.org" required autocomplete="organization" :class="field" />
            </label>
            <label class="block">เบอร์โทรศัพท์ *
              <input v-model="form.phone" required type="tel" autocomplete="tel" :class="field" />
            </label>
          </div>
          <label class="block">รายละเอียดความต้องการ
            <textarea v-model="form.message" rows="4" placeholder="ขอบเขตงานหรือจำนวนผู้ใช้งานโดยประมาณ" :class="field"></textarea>
          </label>
          <button type="submit" class="btn-primary">ส่งข้อมูลติดต่อ</button>
        </form>
      </div>
    </div>
  </section>
</template>
