const API_KEY = "3e3621f6aa043358291e94a02d95530e";

async function onGeoOk(position) {
  const { latitude, longitude } = position.coords;
  const lat = latitude;
  const lng = longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

  //   try {
  //     const a = await fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const weather = document.querySelector("#weather span:first-child");
  //         const city = document.querySelector("#weather span:last-child");
  //         city.innerText = data.name;
  //         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  //       });
  //   } catch (e) {
  //     throw new Error("ERROR");
  //   }
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
