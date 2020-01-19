(() => {
  const S = (x, rootEl = document) => {
    const foundElements = Array.from(rootEl.querySelectorAll(x));
    return (foundElements.length === 1) ? foundElements[0] : foundElements;
  }

  const solutionsObject = S('.list-item.solutions').map(rootElement => {
    const title = S('.item-title', rootElement).innerText.replace('\n', ': ');
    const link = S('.item-title > a', rootElement).href;
    const type = S('h6', rootElement).innerText.toLowerCase().replace(':', '');
    const code = S('.markdown', rootElement).innerText;

    return { title, link, type, code };
  });

  console.log(JSON.stringify(solutionsObject));
})();
