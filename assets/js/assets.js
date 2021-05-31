const vnd = (num) => new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(num);

const createContents = (tag, contents) => {
  const html = document.createElement(tag);
  const txt = document.createElement('span');
  txt.textContent = contents;
  html.appendChild(txt);
  return html;
}

document.addEventListener('DOMContentLoaded', () => {
  const assets = [
    {
      name: 'Exciter 155 VVA',
      price: 0x2f7e340,
    },
    {
      name: 'Macbook Pro 2015 - 13" - 16Gb Ram',
      price: 0x1406f40,
    },
    {
      name: 'Garmin 45',
      price: 0x50df20,
    },
  ];

  const tbodyAssest = document.getElementById('assets-data-body');

  const assestTemplate = assets.map((asset, i) => {
    const tr = document.createElement('tr');
    const tdNo = createContents('td', i+1);
    const tdName = createContents('td', asset.name);
    const tdPrice = createContents('td', vnd(asset.price));
    tr.appendChild(tdNo);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    return tr;
  });

  for (const tr of assestTemplate) {
    tbodyAssest.appendChild(tr);
  }

  const total = assets.reduce((t, pre) => t += pre.price, 0);

  const trTotal = document.createElement('tr');

  const tdTitleTotal = createContents('td', 'Totals');
  tdTitleTotal.style = 'font-weight: bold;';
  tdTitleTotal.colSpan = '2';

  const tdTotal = createContents('td', vnd(total));
  tdTotal.style = 'font-weight: bold;';

  trTotal.appendChild(tdTitleTotal);
  trTotal.appendChild(tdTotal);
  tbodyAssest.appendChild(trTotal);
});
