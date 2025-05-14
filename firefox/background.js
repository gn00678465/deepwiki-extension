/**
 * 處理擴充功能安裝事件
 */
browser.runtime.onInstalled.addListener(() => {
  // 將擴充功能啟用狀態儲存
  browser.storage.local.set({
    isEnabled: true
  });
});

/**
 * 監聽擴充功能圖標點擊事件
 */
browser.action.onClicked.addListener((tab) => {
  // 檢查目前的 URL 是否為 GitHub 頁面
  if (tab.url && tab.url.includes('github.com')) {
    // 將 GitHub URL 轉換為 DeepWiki URL
    const deepWikiUrl = tab.url.replace('github.com', 'deepwiki.com');
    // 更新當前標籤頁的 URL
    browser.tabs.update(tab.id, { url: deepWikiUrl });
  } else {
    // 如果不是 GitHub 頁面，則直接前往 DeepWiki 首頁
    browser.tabs.update(tab.id, { url: 'https://deepwiki.com' });
  }
});

/**
 * 監聽來自內容腳本的訊息
 */
browser.runtime.onMessage.addListener((request, sender) => {
  // 當請求狀態時回應
  if (request.action === "getStatus") {
    return Promise.resolve({status: "擴充功能正在執行中"});
  }
  
  // 處理 URL 轉換
  if (request.action === "convertToDeepWiki") {
    const githubUrl = request.url;
    // 在 URL 中將 github.com 替換為 deepwiki.com
    const deepwikiUrl = githubUrl.replace('github.com', 'deepwiki.com');
    return Promise.resolve({url: deepwikiUrl});
  }
  
  return false;
});