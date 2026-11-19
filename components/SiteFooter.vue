<script setup lang="ts">
const { site, categories } = useContent()
const { locale, t } = useLocale()
</script>

<template>
  <!-- Corporate Black & Green Footer -->
  <footer class="bg-[#171717] text-white pt-14 pb-14 border-t border-[#171717] text-xs sm:text-sm font-heading">
    <div class="wrap">
      
      <!-- Top Disclaimer & ISO 29110 Notice -->
      <div class="border-b border-white/10 pb-6 mb-10 text-xs text-slate-400 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p class="max-w-3xl">
          {{ t('footer.disclaimer') }}
        </p>
        <div class="flex items-center gap-2 flex-shrink-0">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-[#16834A]/25 px-3 py-1 text-xs font-semibold text-emerald-300 border border-[#16834A]/40">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ISO/IEC 29110 Certified
          </span>
        </div>
      </div>

      <!-- Main Directory Columns -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
        
        <!-- Col 1: About IGENCO (Span 2) -->
        <div class="col-span-2">
          <div class="flex items-center gap-3 mb-3">
            <div class="relative flex h-10 w-10 items-center justify-center shrink-0">
              <img
                src="/images/logo.png"
                alt="IGENCO Logo"
                class="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <span class="block font-heading font-bold text-lg text-white leading-tight">{{ site.name }}</span>
              <span class="block text-xs text-emerald-400/90 font-medium">
                {{ locale === 'th' ? site.legalName : 'IGENCO Co., Ltd.' }}
              </span>
            </div>
          </div>
          <p class="mt-3 text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
            {{ t('footer.aboutText') }}
          </p>
          <div class="mt-4 flex items-center gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>{{ t('footer.contactSales') }}</span>
              <span>→</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Col 2: Products -->
        <div>
          <h4 class="font-heading font-semibold text-xs text-white tracking-wider uppercase mb-3.5 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>{{ t('footer.colProducts') }}</span>
          </h4>
          <ul class="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li><NuxtLink to="/products/hr-ai" class="hover:text-emerald-400 transition-colors">HR.ai ({{ locale === 'th' ? 'บริหารบุคคล' : 'HR & Payroll' }})</NuxtLink></li>
            <li><NuxtLink to="/products/igenq" class="hover:text-emerald-400 transition-colors">iGenQ ({{ locale === 'th' ? 'ระบบคิว QR' : 'Smart Queue' }})</NuxtLink></li>
            <li><NuxtLink to="/products/i-smartsoft" class="hover:text-emerald-400 transition-colors">i-SmartSoft ({{ locale === 'th' ? 'e-Office สารบรรณ' : 'e-Office' }})</NuxtLink></li>
            <li><NuxtLink to="/products/i-smartflow" class="hover:text-emerald-400 transition-colors">i-SmartFlow (Workflow)</NuxtLink></li>
            <li><NuxtLink to="/products/i-finsoft" class="hover:text-emerald-400 transition-colors">i-FinSoft ({{ locale === 'th' ? 'ERP การเงิน' : 'Finance ERP' }})</NuxtLink></li>
            <li><NuxtLink to="/products/regist-ai" class="hover:text-emerald-400 transition-colors">Regist.ai ({{ locale === 'th' ? 'ลงทะเบียน' : 'Event Registration' }})</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Services & Navigation -->
        <div>
          <h4 class="font-heading font-semibold text-xs text-white tracking-wider uppercase mb-3.5 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>{{ t('footer.colServices') }}</span>
          </h4>
          <ul class="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li><NuxtLink to="/products/custom-development" class="hover:text-emerald-400 transition-colors">{{ locale === 'th' ? 'พัฒนาระบบตามความต้องการ' : 'Custom Software Development' }}</NuxtLink></li>
            <li><NuxtLink to="/products/it-consulting" class="hover:text-emerald-400 transition-colors">{{ locale === 'th' ? 'ที่ปรึกษา Cloud & API' : 'IT & Cloud Consulting' }}</NuxtLink></li>
            <li><NuxtLink to="/products?category=ecommerce" class="hover:text-emerald-400 transition-colors">{{ locale === 'th' ? 'B2B E-Commerce & POS' : 'B2B E-Commerce & POS' }}</NuxtLink></li>
            <li><NuxtLink to="/#results" class="hover:text-emerald-400 transition-colors">{{ t('nav.results') }}</NuxtLink></li>
            <li><NuxtLink to="/news" class="hover:text-emerald-400 transition-colors">{{ t('nav.news') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Contact & Office -->
        <div>
          <h4 class="font-heading font-semibold text-xs text-white tracking-wider uppercase mb-3.5 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#16834A]"></span>
            <span>{{ t('footer.colContact') }}</span>
          </h4>
          <ul class="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li>
              <a :href="`tel:${site.phoneHref}`" class="hover:text-emerald-400 transition-colors font-medium text-white">
                {{ locale === 'th' ? 'โทร:' : 'Tel:' }} {{ site.phone }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${site.email}`" class="hover:text-emerald-400 transition-colors">
                {{ site.email }}
              </a>
            </li>
            <li>LINE: {{ site.line }}</li>
            <li>{{ t('footer.hours') }}</li>
            <li class="pt-1 text-[11px] text-slate-400 leading-snug">{{ site.address }}</li>
          </ul>
        </div>

      </div>

      <!-- Bottom Copyright Line -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© 2026 {{ site.name }}. {{ t('footer.copyright') }}.</p>
        <div class="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
          <NuxtLink to="/about/history" class="hover:text-emerald-400 transition-colors">{{ t('nav.about') }}</NuxtLink>
          <span>|</span>
          <NuxtLink to="/about/careers" class="hover:text-emerald-400 transition-colors">สมัครงาน</NuxtLink>
          <span>|</span>
          <NuxtLink to="/about/privacy" class="hover:text-emerald-400 transition-colors">นโยบายความเป็นส่วนตัว (PDPA)</NuxtLink>
          <span>|</span>
          <NuxtLink to="/about/cookies" class="hover:text-emerald-400 transition-colors">นโยบายการใช้คุกกี้</NuxtLink>
          <span>|</span>
          <NuxtLink to="/contact" class="hover:text-emerald-400 transition-colors">{{ t('nav.contact') }}</NuxtLink>
          <span>|</span>
          <span class="text-emerald-400">ISO/IEC 29110 Certified</span>
        </div>
      </div>

    </div>
  </footer>
</template>
