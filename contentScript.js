(() => {
  let signInButton;

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;

    if (type == "NEW") {
      console.log(type);
    }
  });
})();
