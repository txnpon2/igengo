<script setup lang="ts">
const { isInfoOpen, activeInfo, closeInfo, confirmInfo } = useAppleModal()

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isInfoOpen.value) {
    closeInfo()
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', onKeyDown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeyDown)
  }
})
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop transition -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isInfoOpen && activeInfo"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md"
        @click.self="closeInfo"
      >
        <!-- Modal Card with Apple Spring Animation -->
        <Transition
          appear
          enter-active-class="transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform"
          enter-from-class="opacity-0 scale-95 translate-y-3"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in transform"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-2"
        >
          <div
            class="relative w-full max-w-md sm:max-w-lg rounded-[28px] bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] p-6 sm:p-8 text-slate-800 flex flex-col"
            role="dialog"
            aria-modal="true"
            :aria-label="activeInfo.title"
          >
            <!-- Close Button (Apple minimal round button) -->
            <button
              type="button"
              aria-label="ปิดหน้าต่าง"
              class="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-all focus:outline-none"
              @click="closeInfo"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Apple Style Icon Badge -->
            <div class="flex items-center gap-3 mb-4">
              <!-- Info Icon -->
              <div
                v-if="activeInfo.type === 'info' || !activeInfo.type"
                class="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#16834A]/10 text-[#16834A] shadow-sm border border-[#16834A]/20"
              >
                <svg class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <!-- Success Icon -->
              <div
                v-else-if="activeInfo.type === 'success'"
                class="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#16834A]/10 text-[#16834A] shadow-sm border border-[#16834A]/20"
              >
                <svg class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <!-- Warning Icon -->
              <div
                v-else-if="activeInfo.type === 'warning'"
                class="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 shadow-sm border border-amber-100/80"
              >
                <svg class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>

              <!-- Notice Icon -->
              <div
                v-else
                class="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#16834A]/10 text-[#16834A] shadow-sm border border-[#16834A]/20"
              >
                <svg class="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>

              <!-- Optional Badge -->
              <span
                v-if="activeInfo.badge"
                class="inline-flex items-center rounded-full bg-[#16834A]/10 px-3 py-1 text-xs font-semibold text-[#16834A] border border-[#16834A]/20"
              >
                {{ activeInfo.badge }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#171717] leading-snug">
              {{ activeInfo.title }}
            </h2>

            <!-- Message Body -->
            <p class="mt-3 text-base text-apple-subtext leading-relaxed font-normal">
              {{ activeInfo.message }}
            </p>

            <!-- Optional Details List -->
            <div
              v-if="activeInfo.details && activeInfo.details.length"
              class="mt-4 rounded-2xl bg-[#F5F5F7] border border-[#171717]/5 p-4 space-y-2"
            >
              <div
                v-for="(detail, index) in activeInfo.details"
                :key="index"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]"
              >
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-[#16834A] flex-shrink-0"></span>
                <span>{{ detail }}</span>
              </div>
            </div>

            <!-- Apple-Style Action Buttons -->
            <div class="mt-7 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-3 border-t border-[#171717]/10">
              <!-- Cancel / Dismiss Button -->
              <button
                type="button"
                class="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 font-heading text-sm font-semibold text-[#171717]/70 hover:bg-black/5 hover:text-[#171717] transition-colors active:scale-95"
                @click="closeInfo"
              >
                {{ activeInfo.cancelText || 'ปิด' }}
              </button>

              <!-- Confirm / Action Button -->
              <button
                type="button"
                class="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#16834A] px-6 py-2.5 font-heading text-sm font-semibold text-white hover:bg-[#137340] shadow-md hover:shadow-lg transition-all active:scale-95"
                @click="confirmInfo"
              >
                {{ activeInfo.confirmText || 'ตกลง' }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
