document.getElementById("fetchTitle").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    if (currentTab) {
      document.getElementById("title").textContent = currentTab.title;
    }
  });
});
