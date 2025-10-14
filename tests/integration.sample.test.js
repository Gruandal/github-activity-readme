// 整合測試：驗證 build 產物存在（你的 build 步驟會產生 build.zip）
const fs = require('fs');

const candidates = ['build.zip', 'build-artifact/build.zip'];
const found = candidates.find(p => fs.existsSync(p));

if (!found) {
  console.error('❌ Integration: build.zip not found in expected locations');
  process.exit(1);
}
const bytes = fs.statSync(found).size;
if (bytes <= 0) {
  console.error(`❌ Integration: ${found} is empty`);
  process.exit(1);
}
console.log(`✅ Integration: ${found} present (${bytes} bytes)`);
