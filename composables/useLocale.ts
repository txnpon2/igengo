export type Locale = 'th' | 'en'

export const useLocale = () => {
  const locale = useState<Locale>('igenco-locale', () => 'th')

  // Initialize from localStorage if on client
  onMounted(() => {
    if (import.meta.client) {
      const saved = localStorage.getItem('igenco_lang') as Locale | null
      if (saved === 'th' || saved === 'en') {
        locale.value = saved
      }
    }
  })

  function setLocale(newLocale: Locale) {
    locale.value = newLocale
    if (import.meta.client) {
      localStorage.setItem('igenco_lang', newLocale)
      document.documentElement.lang = newLocale
    }
  }

  function toggleLocale() {
    setLocale(locale.value === 'th' ? 'en' : 'th')
  }

  const translations = {
    th: {
      nav: {
        home: 'หน้าแรก',
        products: 'ผลิตภัณฑ์และบริการ',
        about: 'เกี่ยวกับเรา',
        results: 'ผลงานและลูกค้า',
        news: 'ข่าวสาร',
        contact: 'ติดต่อเรา',
        allProducts: 'ดูผลิตภัณฑ์ทั้งหมด (11 ระบบ)',
        popularSystems: 'ระบบยอดนิยม:',
        subtitle: 'บริษัท ไอเจนโก้ จำกัด',
        lang: 'ภาษา',
      },
      hero: {
        label: 'IGENCO CO., LTD.',
        headline: 'บริษัท ไอเจนโก้ จำกัด',
        subheadline: 'เทคโนโลยีดิจิทัล เพื่อองค์กรยุคใหม่',
        description: 'พัฒนาและให้บริการซอฟต์แวร์และโซลูชันดิจิทัล เพื่อสนับสนุนการบริหารจัดการและยกระดับประสิทธิภาพการทำงานขององค์กร',
        isoCertified: 'มาตรฐาน ISO/IEC 29110',
        primaryCta: 'ปรึกษาทีมผู้เชี่ยวชาญ',
        secondaryCta: 'สำรวจโซลูชันทั้งหมด',
      },
      clients: {
        badge: 'CLIENTS & PARTNERS',
        title: 'กลุ่มผู้ใช้ผลิตภัณฑ์',
        sub: 'บริษัท ไอเจนโก้ จำกัด ขอขอบคุณลูกค้าทุกท่านที่ไว้วางใจและเชื่อใจในผลิตภัณฑ์และบริการของเราเป็นยิ่ง',
        isoBadge: 'มาตรฐาน ISO/IEC 29110',
      },
      about: {
        badge: 'ABOUT IGENCO',
        title: 'ผู้เชี่ยวชาญการพัฒนาซอฟต์แวร์องค์กร และที่ปรึกษาไอทีมาตรฐานสากล',
        body: 'บริษัท ไอเจนโก้ จำกัด ก่อตั้งขึ้นโดยทีมวิศวกรซอฟต์แวร์และนักวิเคราะห์ระบบที่มีประสบการณ์สูง เรามุ่งมั่นพัฒนาซอฟต์แวร์ลิขสิทธิ์ของคนไทยให้มีคุณภาพทัดเทียมมาตรฐานสากล เพื่อตอบสนองภารกิจของหน่วยงานภาครัฐ รัฐวิสาหกิจ และธุรกิจเอกชนอย่างแท้จริง',
        yearsBadge: 'ปีแห่งความเชี่ยวชาญ',
        foundedBadge: 'ก่อตั้งตั้งแต่ปี 2010',
        teamCaption: 'ทีมวิศวกรและนักวิเคราะห์ระบบ IGENCO',
        teamSub: 'พร้อมผลักดันองค์กรสู่ Digital Transformation อย่างมั่นคง',
        readMore: 'อ่านประวัติและข้อมูลองค์กร',
        consult: 'ปรึกษาทีมงาน IGENCO',
      },
      products: {
        badge: 'PRODUCTS & SOLUTIONS',
        title: 'ผลิตภัณฑ์และบริการซอฟต์แวร์ IGENCO',
        sub: 'ซอฟต์แวร์องค์กรมาตรฐาน ISO/IEC 29110 พร้อมติดตั้งทั้งระบบ On-Premise และ Cloud',
        all: 'ทั้งหมด',
        viewDetail: 'ดูรายละเอียด',
        bookDemo: 'นัดสาธิตระบบ',
        compareMatrix: 'ดูตารางเปรียบเทียบคุณสมบัติทุกผลิตภัณฑ์ (Compare Matrix)',
      },
      cases: {
        badge: 'PROVEN RESULTS',
        title: 'ผลลัพธ์จากการใช้งานจริงในองค์กร',
        sub: 'กรณีศึกษาจริงที่พิสูจน์แล้วว่าช่วยลดต้นทุน เวลา และยกระดับประสิทธิภาพการทำงาน',
        resultLabel: 'ผลลัพธ์ที่ได้รับ',
      },
      news: {
        badge: 'NEWS & ACTIVITIES',
        title: 'ข่าวสารและกิจกรรมล่าสุด',
        sub: 'อัปเดตโมดูลระบบใหม่ โครงการส่งมอบงาน และความเคลื่อนไหวองค์กร',
        viewAll: 'ดูข่าวสารทั้งหมด',
        readMore: 'อ่านต่อ',
      },
      cta: {
        badge: 'มาตรฐานสากล ISO/IEC 29110',
        title: 'พร้อมยกระดับระบบงานในองค์กรของคุณหรือยัง?',
        sub: 'นัดหมายสาธิตระบบ หรือปรึกษาแนวทางพัฒนาระบบกับ System Analyst ของ IGENCO เพื่อรับคำแนะนำที่ตรงเป้าหมายที่สุด',
        button: 'นัดหมายสาธิต / ปรึกษาฟรี',
        call: 'โทร',
      },
      footer: {
        disclaimer: '* บริษัท ไอเจนโก้ จำกัด (IGENCO Co., Ltd.) ได้รับการรับรองมาตรฐานสากล ISO/IEC 29110 (Software Engineering Lifecycle) สำหรับกระบวนการบริหารโครงการและการพัฒนาซอฟต์แวร์ระดับองค์กร ข้อมูลและเครื่องหมายการค้าทั้งหมดเป็นลิขสิทธิ์ของบริษัทฯ',
        aboutText: 'ที่ปรึกษา ออกแบบ และพัฒนาซอฟต์แวร์ระดับองค์กร พร้อมวางระบบโครงสร้างพื้นฐานด้านไอทีครบวงจรตามมาตรฐานสากล เพื่อความมั่นคงปลอดภัยและประสิทธิภาพสูงสุด',
        contactSales: 'ติดต่อฝ่ายขายและนัดสาธิตระบบ',
        colProducts: 'ผลิตภัณฑ์องค์กร',
        colServices: 'บริการและโซลูชัน',
        colContact: 'ติดต่อเรา',
        hours: 'จันทร์–ศุกร์ 08:30–17:30 น.',
        copyright: 'สงวนลิขสิทธิ์',
      },
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products & Services',
        about: 'About Us',
        results: 'Clients & Portfolio',
        news: 'News & Events',
        contact: 'Contact Us',
        allProducts: 'View All Products (11 Systems)',
        popularSystems: 'Popular Systems:',
        subtitle: 'IGENCO Co., Ltd.',
        lang: 'Language',
      },
      hero: {
        label: 'IGENCO CO., LTD.',
        headline: 'IGENCO Co., Ltd.',
        subheadline: 'Digital Technologies for Modern Enterprises',
        description: 'Developing and delivering digital software & enterprise solutions to streamline management and elevate organizational performance.',
        isoCertified: 'ISO/IEC 29110 CERTIFIED',
        primaryCta: 'Consult Our Specialists',
        secondaryCta: 'Explore All Solutions',
      },
      clients: {
        badge: 'CLIENTS & PARTNERS',
        title: 'Our Valued Clients',
        sub: 'IGENCO Co., Ltd. extends our sincerest gratitude to all clients and partners who place their highest trust in our products and services.',
        isoBadge: 'ISO/IEC 29110 Certified',
      },
      about: {
        badge: 'ABOUT IGENCO',
        title: 'Enterprise Software Development Experts & Certified IT Consultants',
        body: 'IGENCO Co., Ltd. was established by veteran software engineers and system analysts. We are dedicated to building enterprise software that meets international quality standards, empowering the mission-critical workflows of government and business leaders.',
        yearsBadge: 'Years of Excellence',
        foundedBadge: 'Founded in 2010',
        teamCaption: 'IGENCO Software Engineers & Analysts',
        teamSub: 'Empowering enterprise Digital Transformation with robust technology.',
        readMore: 'About Our Company',
        consult: 'Talk to Our Team',
      },
      products: {
        badge: 'PRODUCTS & SOLUTIONS',
        title: 'IGENCO Software Products & Solutions',
        sub: 'Certified enterprise software under ISO/IEC 29110, ready for both On-Premise and Cloud deployment.',
        all: 'All',
        viewDetail: 'Quick View',
        bookDemo: 'Book a Demo',
        compareMatrix: 'View Product Comparison Matrix',
      },
      cases: {
        badge: 'PROVEN RESULTS',
        title: 'Proven Real-World Enterprise Results',
        sub: 'Documented case studies delivering measurable cost reduction, time savings, and operational speed.',
        resultLabel: 'Achieved Result',
      },
      news: {
        badge: 'NEWS & ACTIVITIES',
        title: 'Latest News & Corporate Updates',
        sub: 'Product releases, delivery milestones, and corporate activities.',
        viewAll: 'View All News',
        readMore: 'Read More',
      },
      cta: {
        badge: 'ISO/IEC 29110 Certified Standard',
        title: "Ready to Elevate Your Organization's Workflow?",
        sub: 'Schedule a system demonstration or consult software architecture with IGENCO System Analysts for tailored recommendations.',
        button: 'Book a Demo / Free Consultation',
        call: 'Call',
      },
      footer: {
        disclaimer: '* IGENCO Co., Ltd. is certified under ISO/IEC 29110 (Software Engineering Lifecycle) for enterprise project management and software implementation. All product trademarks belong to their respective holders.',
        aboutText: 'Consulting, architecting, and engineering enterprise-grade software and end-to-end IT infrastructure adhering to global quality and security benchmarks.',
        contactSales: 'Contact Sales & Schedule Demo',
        colProducts: 'Enterprise Solutions',
        colServices: 'Services & Consulting',
        colContact: 'Contact Us',
        hours: 'Mon–Fri 08:30–17:30',
        copyright: 'All Rights Reserved',
      },
    },
  }

  // Helper function to get text by path e.g. t('nav.products')
  function t(path: string): string {
    const keys = path.split('.')
    let current: any = translations[locale.value]
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k]
      } else {
        return path
      }
    }
    return typeof current === 'string' ? current : path
  }

  return {
    locale,
    setLocale,
    toggleLocale,
    t,
    translations,
  }
}
