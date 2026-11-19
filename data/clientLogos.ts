export interface ClientLogo {
  id: string
  name: string
  image: string
}

// 13 Unique Organization Logos (No duplicates)
// Row 1: Moves Left-to-Right (Right Direction) - 7 Unique Logos
export const clientLogosRow1: ClientLogo[] = [
  {
    id: 'tat',
    name: 'การท่องเที่ยวแห่งประเทศไทย (TAT)',
    image: '/images/clients/logo-tat.png',
  },
  {
    id: 'ktbgs',
    name: 'KTB General Services and Security (KTBGS)',
    image: '/images/clients/logo-ktbgs.png',
  },
  {
    id: 'saint-john',
    name: "Saint John's University",
    image: '/images/clients/logo-saint-john.png',
  },
  {
    id: 'thairung',
    name: 'Thairung Group',
    image: '/images/clients/logo-thairung.png',
  },
  {
    id: 'tceb',
    name: 'TCEB - สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ',
    image: '/images/clients/logo-tceb.png',
  },
  {
    id: 'phetchabun',
    name: 'มหาวิทยาลัยราชภัฏเพชรบูรณ์',
    image: '/images/clients/logo-phetchabun.png',
  },
  {
    id: 'footjoy',
    name: 'FootJoy (FJ)',
    image: '/images/clients/logo-footjoy.png',
  },
]

// Row 2: Moves Right-to-Left (Left Direction) - 6 Unique Logos
export const clientLogosRow2: ClientLogo[] = [
  {
    id: 'tint',
    name: 'สถาบันเทคโนโลยีนิวเคลียร์แห่งชาติ (TINT)',
    image: '/images/clients/logo-tint.png',
  },
  {
    id: 'guts',
    name: 'Guts Investigation Security Guard',
    image: '/images/clients/logo-guts.png',
  },
  {
    id: 'nightsafari',
    name: 'เชียงใหม่ไนท์ซาฟารี (Chiang Mai Night Safari)',
    image: '/images/clients/logo-nightsafari.png',
  },
  {
    id: 'chombueng',
    name: 'มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง',
    image: '/images/clients/logo-chombueng.png',
  },
  {
    id: 'library',
    name: 'สมาคมห้องสมุดแห่งประเทศไทยฯ',
    image: '/images/clients/logo-library.png',
  },
  {
    id: 'critical-care',
    name: 'สมาคมเวชบำบัดวิกฤตแห่งประเทศไทย',
    image: '/images/clients/logo-critical-care.png',
  },
]
