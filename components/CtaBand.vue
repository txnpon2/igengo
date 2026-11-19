<script setup lang="ts">
const { site } = useContent()
const { locale, t } = useLocale()
</script>

<template>
  <section class="py-16 sm:py-24 bg-[#F4F5F4]">
    <div class="wrap">
      <div class="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#171717] p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-white/10">
        <!-- Subtle background glow -->
        <div class="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#16834A]/35 blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid items-center gap-8 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-300 border border-white/20 backdrop-blur shadow-sm mb-4">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{{ t('cta.badge') }}</span>
            </span>
            <h2 class="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              <template v-if="locale === 'th'">
                พร้อมยกระดับระบบงาน<span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">ในองค์กรของคุณหรือยัง?</span>
              </template>
              <template v-else>
                Ready to Elevate Your Organization's <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">Digital Workflow?</span>
              </template>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-300 font-normal max-w-xl leading-relaxed tracking-apple-body">
              {{ t('cta.sub') }}
            </p>
          </div>

          <div class="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-[#16834A] px-8 py-3.5 font-heading text-base font-semibold text-white hover:bg-[#106B3B] shadow-lg hover:shadow-xl transition-all transform active:scale-95 text-center"
            >
              <span>{{ t('cta.button') }}</span>
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>

            <a
              :href="`tel:${site.phoneHref}`"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3.5 font-heading text-base font-medium text-white hover:bg-white/15 hover:border-white transition-all text-center"
            >
              <svg class="w-4 h-4 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{{ t('cta.call') }} {{ site.phone }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
