chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("scratch.mit.edu")) {
    console.log(tab.url);
    // const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      // videoId: urlParameters.get("v"),
    });
  }
});
