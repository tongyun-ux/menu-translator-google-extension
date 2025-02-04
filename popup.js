document.addEventListener('DOMContentLoaded', function() {
  const toggleCheckbox = document.getElementById('translationToggle');

  // 獲取儲存的狀態
  chrome.storage.sync.get(['isEnabled'], function(result) {
    toggleCheckbox.checked = result.isEnabled !== false;
  });

  // 監聽開關變化
  toggleCheckbox.addEventListener('change', function(e) {
    const isEnabled = e.target.checked;
    
    // 儲存狀態
    chrome.storage.sync.set({ isEnabled: isEnabled }, function() {
      // 向當前標籤頁發送消息
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          try {
            chrome.tabs.sendMessage(tabs[0].id, {
              action: 'toggleTranslation',
              isEnabled: isEnabled
            }, function(response) {
              if (chrome.runtime.lastError) {
                console.log('Error:', chrome.runtime.lastError.message);
              }
            });
          } catch (error) {
            console.log('Error sending message:', error);
          }
        }
      });
    });
  });
});