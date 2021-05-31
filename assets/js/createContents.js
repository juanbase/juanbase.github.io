const createContents = (tag, contents) => {
  const html = document.createElement(tag);
  const txt = document.createElement('span');
  txt.textContent = contents;
  html.appendChild(txt);
  return html;
}
