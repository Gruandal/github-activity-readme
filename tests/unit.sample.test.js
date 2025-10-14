// 單元測試：至少能載入主程式（不碰網路或 secrets）
try {
  require('../index.js');
  console.log('✅ Unit: index.js can be required');
} catch (e) {
  console.error('❌ Unit: require index.js failed\n', e);
  process.exit(1);
}
