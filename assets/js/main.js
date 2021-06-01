function noteAccessPoint({ ip, lat, long }) {
  return fetch('https://juanbase.herokuapp.com/userAccessPoint', {
    method: 'POST',
    body: JSON.stringify({
      ip,
      lat,
      long,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((d) => d.json());
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays);
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function readCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const myPoint = readCookie('rePoint');

if (!myPoint) {
  fetch('https://api.ipify.org/?format=json')
    .then((d) => d.json())
    .then(({ ip }) => {
      noteAccessPoint({ ip }).then(() => {
        setCookie('rePoint', true, 15*60*1000);
      });
    });
}
