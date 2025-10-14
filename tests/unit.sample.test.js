// 單元測試：僅做本地快速檢查，不觸發 action 主程式
const fs = require('fs');

// 1) 必要檔案存在
const mustExist = ['package.json', 'README.md'];
for (const f of mustExist) {
  if (!fs.existsSync(f)) {
    console.error(`❌ Unit: ${f} missing`);
    process.exit(1);
  }
}

// 2) package.json 能被解析
try {
  JSON.parse(fs.readFileSync('package.json', 'utf8'));
} catch (e) {
  console.error('❌ Unit: package.json is invalid JSON');
  console.error(e);
  process.exit(1);
}

console.log('✅ Unit: repo sanity checks passed');
