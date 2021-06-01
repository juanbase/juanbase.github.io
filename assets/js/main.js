function noteAccessPoint({ ip, lat, long }) {
  fetch("https://cfc58df0c569.ngrok.io/userAccessPoint", {
    method: "POST",
    body: JSON.stringify({
      ip,
      lat,
      long,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((d) => d.json())
    .then((d) => {
      console.log(d);
    });
}

fetch("https://api.ipify.org/?format=json")
  .then((d) => d.json())
  .then(({ ip }) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          noteAccessPoint({ ip, lat, long });
        }
      );
    }
    noteAccessPoint({ ip });
  });
