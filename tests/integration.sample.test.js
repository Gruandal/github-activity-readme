// 整合測試：驗證 build 產物存在（你的 build 步驟會產生 build.zip）
const fs = require('fs');
const path = 'build.zip';

if (!fs.existsSync(path)) {
  console.error('❌ Integration: build.zip not found');
  process.exit(1);
}
const bytes = fs.statSync(path).size;
if (bytes <= 0) {
  console.error('❌ Integration: build.zip is empty');
  process.exit(1);
}
console.log(`✅ Integration: build.zip present (${bytes} bytes)`);
