export async function waitForElement(parent, id) {
  return new Promise((resolve) => {
    const elem = parent.getElementById(id);
    if (elem) {
      resolve(elem);
      return;
    }

    const observer = new MutationObserver(() => {
      const elem = parent.getElementById(id);
      if (elem) {
        observer.disconnect();
        resolve(elem);
      }
    });

    observer.observe(parent, { childList: true, subtree: true });
  });
}
