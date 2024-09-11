export async function waitForElement(parent, selector) {
  return new Promise((resolve) => {
    const elem = parent.querySelector(selector);
    if (elem) {
      resolve(elem);
      return;
    }

    const observer = new MutationObserver(() => {
      const elem = parent.querySelector(selector);
      if (elem) {
        observer.disconnect();
        resolve(elem);
      }
    });

    observer.observe(parent, { childList: true, subtree: true });
  });
}
