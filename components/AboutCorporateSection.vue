<script setup lang="ts">
const { site, about } = useContent()
const { locale, t } = useLocale()
</script>

<template>
  <section class="py-16 sm:py-24 bg-white overflow-hidden border-b border-slate-100">
    <div class="wrap">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column: Large Corporate Image with Floating Stats Card -->
        <div class="lg:col-span-6 relative">
          <div class="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-slate-100 bg-[#F4F5F4]">
            <img
              src="/images/team-photo-clean.png"
              alt="IGENCO Team & Engineers"
              class="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

            <!-- Floating Badge Overlay inside image -->
            <div class="absolute bottom-5 left-5 right-5 z-10 text-white">
              <span class="rounded-full bg-[#16834A] px-3.5 py-1 text-xs font-semibold shadow-md inline-block mb-1 font-heading">
                {{ t('about.teamCaption') }}
              </span>
              <p class="text-xs sm:text-sm text-slate-200">
                {{ t('about.teamSub') }}
              </p>
            </div>
          </div>

          <!-- Corporate Floating Milestone Pill -->
          <div class="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 z-20">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16834A]/10 text-[#16834A] font-bold text-xl font-heading">
              14+
            </div>
            <div>
              <span class="block font-heading font-bold text-sm text-[#171717]">{{ t('about.yearsBadge') }}</span>
              <span class="block text-xs text-slate-500 font-normal">{{ t('about.foundedBadge') }}</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Text & Values Breakdown -->
        <div class="lg:col-span-6">
          <div class="section-eyebrow mb-3.5">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16834A] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#16834A]"></span>
            </span>
            <span>{{ t('about.badge') }}</span>
          </div>

          <h2 class="text-2xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#171717] tracking-tight leading-[1.2]">
            <template v-if="locale === 'th'">
              ผู้เชี่ยวชาญการพัฒนาซอฟต์แวร์องค์กร และที่ปรึกษาไอที<span class="text-gradient-emerald">มาตรฐานสากล</span>
            </template>
            <template v-else>
              Enterprise Software Experts & <span class="text-gradient-emerald">Certified IT Consultants</span>
            </template>
          </h2>

          <p class="section-subtitle">
            {{ t('about.body') }}
          </p>

          <!-- Core Values Strip -->
          <div class="mt-6 space-y-3">
            <div
              v-for="val in about.values"
              :key="val.title"
              class="flex items-start gap-3.5 rounded-2xl bg-[#F0FDF4] p-4 border border-[#BBF7D0]/60"
            >
              <div class="flex h-6 w-6 rounded-full bg-[#16834A] text-white items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <div>
                <h3 class="font-heading font-semibold text-sm sm:text-base text-[#171717] tracking-apple-subhead leading-apple-subhead">
                  {{ val.title }}
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 mt-0.5 leading-apple-body tracking-apple-body font-normal">
                  {{ val.text }}
                </p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <NuxtLink
              to="/about"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-[#16834A] px-7 py-3 font-heading text-sm font-semibold text-white hover:bg-[#106B3B] shadow-md transition-all active:scale-95"
            >
              <span>{{ t('about.readMore') }}</span>
              <span>→</span>
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-heading text-sm font-medium text-[#171717] hover:bg-slate-50 transition-all active:scale-95"
            >
              <span>{{ t('about.consult') }}</span>
            </NuxtLink>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
