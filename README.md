# DeepWiki Browser Extension

A Chrome/Firefox extension template with manifest v3 support.

## Features

- Background service worker for extension functionality
- Content scripts for page interaction
- Chrome/Firefox storage API integration
- Message passing between components

## Installation(Chrome)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top-right corner
3. Click "Load unpacked" and select the extension directory
4. The extension icon should appear in your browser toolbar

## Installation(firefox)

1. Open Firefox and navigate to `about:config`
2. 將 `xpinstall.signatures.required` 設定為 `false`
2. 拖放 .xpi 文件到 Firefox 視窗中，或在「附加元件管理器」中選擇「從檔案安裝附加元件」

## File Structure

```
.
├── README.md                     # 專案說明文件
├── chrome/                       # Chrome 專用檔案
│   ├── background.js             # Chrome 專用背景服務工作者腳本
│   └── manifest.json             # Chrome 擴充功能清單檔案
├── firefox/                      # Firefox 專用檔案
│   ├── background.js             # Firefox 專用背景腳本
│   └── manifest.json             # Firefox 擴充功能清單檔案
└── shared/                       # 兩個瀏覽器共用的檔案
    ├── browser-polyfill.min.js   # 瀏覽器 API 相容性庫
    ├── content.js                # 注入頁面的內容腳本
    ├── styles.css                # 擴充功能樣式
    └── icons/                    # 擴充功能圖示
        ├── icon16.png            # 16x16 圖示
        ├── icon48.png            # 48x48 圖示
        └── icon128.png           # 128x128 圖示
```

## Development

### 開發環境設定

1. 複製專案到本地
   ```
   git clone <repository-url>
   ```

2. 安裝開發相依套件（如果有需要）
   ```
   npm install
   ```

### 開發工作流程

1. **編輯共用檔案**
   - 修改 `shared/` 目錄中的檔案，這些檔案將被 Chrome 和 Firefox 版本共用
   - 使用 `browser-polyfill.min.js` 確保跨瀏覽器相容性

2. **瀏覽器特定開發**
   - Chrome 和 Firefox 的 manifest.json 檔案結構不同，請注意維護兩個版本
   - Chrome 使用單一 service_worker 作為背景腳本
   - Firefox 使用腳本陣列作為背景腳本

3. **測試擴充功能**
   - **Chrome**:
     - 打開 `chrome://extensions/`
     - 啟用開發人員模式
     - 點選「載入未封裝項目」並選擇 `chrome` 目錄
     - 每次修改後需要重新載入擴充功能

   - **Firefox**:
     - 打開 `about:debugging#/runtime/this-firefox`
     - 點選「載入臨時附加元件」並選擇 `firefox/manifest.json` 檔案

4. **偵錯技巧**
   - 使用瀏覽器開發工具檢查背景腳本和內容腳本
   - Chrome: 在擴充功能頁面點選「檢視背景頁面」
   - Firefox: 在「臨時擴充功能」中點選「偵錯」

### 打包與發佈

- **Chrome**:
  - 壓縮 `chrome` 和 `shared` 目錄中的檔案
  - 上傳到 [Chrome Web Store](https://chrome.google.com/webstore/developer/dashboard)

- **Firefox**:
  - 壓縮 `firefox` 和 `shared` 目錄中的檔案
  - 上傳到 [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/)

## License

This project is licensed under the MIT License.