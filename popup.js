document.addEventListener("DOMContentLoaded", () => {
  const countSpan = document.getElementById("count");
  chrome.storage.local.get(["distractionCount"], (res) => {
    countSpan.textContent = res.distractionCount || 0;
  });
});
