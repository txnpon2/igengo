import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const uploads = [
  { file: 'media_1795061038956_dbd56fdb.png', name: 'logo-tat', alt: 'การท่องเที่ยวแห่งประเทศไทย (TAT)' },
  { file: 'media_1795061044139_f128b225.png', name: 'logo-saint-john', alt: "Saint John's University" },
  { file: 'media_1795061049644_c54d7a21.png', name: 'logo-phetchabun', alt: 'มหาวิทยาลัยราชภัฏเพชรบูรณ์' },
  { file: 'media_1795061054282_410571b2.png', name: 'logo-chombueng', alt: 'มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง' },
  { file: 'media_1795061059267_4dd191c9.png', name: 'logo-guts', alt: 'Guts Investigation Security Guard' },
  { file: 'media_1795061063733_dd7e53a2.png', name: 'logo-tceb', alt: 'TCEB - สำนักงานส่งเสริมการจัดประชุมและนิทรรศการ' },
  { file: 'media_1795061072353_48ca9523.png', name: 'logo-ktbgs', alt: 'KTB General Services and Security (KTBGS)' },
  { file: 'media_1795061100829_b478e6fa.png', name: 'logo-thairung', alt: 'Thairung Group' },
  { file: 'media_1795061106300_88350465.png', name: 'logo-tint-1', alt: 'สถาบันเทคโนโลยีนิวเคลียร์แห่งชาติ (TINT)' },
  { file: 'media_1795061110658_01c766f9.png', name: 'logo-footjoy', alt: 'FootJoy (FJ)' },
  { file: 'media_1795061115400_e1a124f6.png', name: 'logo-nightsafari', alt: 'เชียงใหม่ไนท์ซาฟารี (Chiang Mai Night Safari)' },
  { file: 'media_1795061120398_d321ca77.png', name: 'logo-tint-2', alt: 'สถาบันเทคโนโลยีนิวเคลียร์แห่งชาติ (TINT)' },
  { file: 'media_1795061125200_e9aeccd7.png', name: 'logo-library', alt: 'สมาคมห้องสมุดแห่งประเทศไทยฯ' },
  { file: 'media_1795061130579_95b5bb7d.png', name: 'logo-critical-care', alt: 'สมาคมเวชบำบัดวิกฤตแห่งประเทศไทย' }
];

const uploadDir = 'C:/Users/thana/.gemini/antigravity/brain/1f056585-6145-43c6-9751-0176fcebad30/.user_uploaded';
const targetDir = 'public/images/clients';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
  const results = [];
  for (const item of uploads) {
    const src = path.join(uploadDir, item.file);
    const meta = await sharp(src).metadata();
    const dest = path.join(targetDir, `${item.name}.png`);
    fs.copyFileSync(src, dest);
    results.push({
      ...item,
      srcWidth: meta.width,
      srcHeight: meta.height,
      hasAlpha: meta.hasAlpha,
      aspectRatio: (meta.width / meta.height).toFixed(2),
      destPath: `/images/clients/${item.name}.png`
    });
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
