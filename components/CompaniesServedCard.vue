<script setup lang="ts">
const { servedCompanies } = useContent()
const { t } = useLocale()

const logoScrollContainer = ref<HTMLElement | null>(null)

function scrollLogosLeft() {
  if (logoScrollContainer.value) {
    logoScrollContainer.value.scrollBy({ left: -220, behavior: 'smooth' })
  }
}

function scrollLogosRight() {
  if (logoScrollContainer.value) {
    logoScrollContainer.value.scrollBy({ left: 220, behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- Overlapping Customer Showcase Card (Greenpacket Corporate Reference) -->
  <div class="wrap relative z-30 -mt-20 sm:-mt-24 lg:-mt-28 mb-14 sm:mb-20">
    <div class="relative rounded-2xl lg:rounded-3xl bg-white shadow-2xl shadow-slate-900/15 border border-slate-100/90 p-6 sm:p-8 lg:p-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Column: Title & Subtitle -->
        <div class="lg:col-span-3 pr-2 lg:border-r lg:border-slate-100">
          <div class="inline-flex items-center gap-1.5 text-xs font-semibold tracking-apple-badge uppercase text-[#16834A] mb-2 font-heading">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>{{ t('clients.badge') }}</span>
          </div>
          <h2 class="font-heading font-bold text-2xl sm:text-3xl text-[#171717] tracking-apple-headline leading-apple-subhead">
            Companies<br class="hidden lg:inline" /> We've Served
          </h2>
          <p class="mt-2 text-xs sm:text-sm text-slate-500 font-normal leading-apple-body tracking-apple-body">
            {{ t('clients.sub') }}
          </p>
          <div class="mt-4 flex items-center gap-2">
            <span class="rounded-full bg-[#16834A]/10 px-3 py-1 text-xs font-medium tracking-apple-subhead text-[#16834A]">
              {{ t('clients.isoBadge') }}
            </span>
          </div>
        </div>

        <!-- Right Column: Logo Carousel / Multi-column Grid -->
        <div class="lg:col-span-9 relative">
          
          <!-- Desktop Grid of 5 Columns x 2 Rows -->
          <div class="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-3">
            <div
              v-for="c in servedCompanies"
              :key="c.name"
              class="group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-[#F4F5F4]/60 border border-slate-100 hover:bg-white hover:border-[#16834A]/30 hover:shadow-md transition-all duration-200"
              :title="c.name"
            >
              <div class="h-12 w-full flex items-center justify-center">
                <img
                  :src="c.logo"
                  :alt="c.name"
                  class="max-h-10 max-w-[85px] object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span class="mt-1.5 block text-[11px] text-center text-[#171717]/80 group-hover:text-[#16834A] line-clamp-1 font-medium transition-colors">
                {{ c.shortName || c.name }}
              </span>
              <span v-if="c.tag" class="text-[10px] text-slate-400">
                {{ c.tag }}
              </span>
            </div>
          </div>

          <!-- Mobile Horizontal Scrollable Carousel -->
          <div class="sm:hidden relative">
            <div
              ref="logoScrollContainer"
              class="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-2"
            >
              <div
                v-for="c in servedCompanies"
                :key="c.name"
                class="w-[140px] flex-shrink-0 flex flex-col items-center justify-center p-3 rounded-xl bg-[#F4F5F4]/80 border border-slate-100"
              >
                <div class="h-11 w-full flex items-center justify-center">
                  <img
                    :src="c.logo"
                    :alt="c.name"
                    class="max-h-9 max-w-[80px] object-contain"
                    loading="lazy"
                  />
                </div>
                <span class="mt-1 block text-[10px] text-center text-[#171717] line-clamp-1 font-medium">
                  {{ c.shortName || c.name }}
                </span>
              </div>
            </div>

            <!-- Mobile Controls -->
            <div class="flex justify-end gap-2 mt-2">
              <button
                type="button"
                aria-label="Scroll logos left"
                class="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                @click="scrollLogosLeft"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Scroll logos right"
                class="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                @click="scrollLogosRight"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>
