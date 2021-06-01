fetch("https://api.ipify.org/?format=json")
  .then((d) => d.json())
  .then(({ ip }) => {
    fetch('https://juanbase.herokuapp.com/userAccessPoint', {
      method: 'POST',
      body: {
        ip,
      },
    })
      .then(d => d.json())
      .then((d) => {
        console.log(d);
      })
  });
