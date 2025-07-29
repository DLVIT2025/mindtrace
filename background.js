// background.js

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["distractionCount"], (res) => {
    if (res.distractionCount === undefined) {
      chrome.storage.local.set({ distractionCount: 0 });
    }
  });
});
