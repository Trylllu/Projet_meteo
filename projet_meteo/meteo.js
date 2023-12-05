// Clef API
const key ='8cd0419e4c86352e7b07f86dba440338';

// Choix de la ville
let weatherData = {
  "city": "Niort"
};

// Fonction pour obtenir les détails météorologiques à partir des données JSON
let getWeatherFromJSON = () => {
  // Récupérer la ville à partir des données JSON
  let city = weatherData.city;

  // Construire l'URL pour la requête API météo
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=standard&lang=fr`;

  // Effectuer la requête API et mettre à jour l'affichage
  fetch(url)
    .then(resp => resp.json())
    .then(weatherData => {
      result.innerHTML = `
        <h1>${weatherData.name}</h1>
        <h4 class="desc">${weatherData.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
        <h1>${(weatherData.main.temp - 273.15).toFixed(0)} &#176;C</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${(weatherData.main.temp_min - 273.15).toFixed(0)} &#176;C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${(weatherData.main.temp_max - 273.15).toFixed(0)} &#176;C</h4>
            </div>
        </div>
      `;
    })
    .catch(() => {
      result.innerHTML = `<h3 class="msg">Ville non trouvée</h3>`;
    });



  let url_2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=standard&lang=fr`;

  // Récupérer la date de demain
  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }
  
  const tomorrow = getTomorrowDate();
  
  // Effectuer la requête à l'API pour les prévisions de demain
  fetch(url_2)
    .then(response => response.json())
    .then(data => {
      const previsionsDemain = data.list.filter(previs => previs.dt_txt.includes(tomorrow));
  
      if (previsionsDemain.length > 0) {
        const weatherData = previsionsDemain[0];
  
        result2.innerHTML = `
          <h1>${data.city.name}</h1>
          <h3>Demain<h3>
          <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
          <h2>${(weatherData.main.temp - 273.15).toFixed(0)} &#176;C</h2>
          <div class="temp-container">
              <div>
                  <h4 class="title">min</h4>
                  <h4 class="temp">${(weatherData.main.temp_min - 273.15).toFixed(0)} &#176;C</h4>
              </div>
              <div>
                  <h4 class="title">max</h4>
                  <h4 class="temp">${(weatherData.main.temp_max - 273.15).toFixed(0)} &#176;C</h4>
              </div>
          </div>
        `;
      } else {
        result2.innerHTML = `<h3 class="msg">Aucune donnée disponible pour demain</h3>`;
      }
    })
    .catch(() => {
      result2.innerHTML = `<h3 class="msg">Ville non trouvée</h3>`;
    });


  let url_3 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=standard&lang=fr`;

  // Récupérer la date après-demain
  function getTomorrowDate2() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  }
  
  const tomorrow2 = getTomorrowDate2();
  
  // Effectuer la requête à l'API pour les prévisions de après-demain
  fetch(url_3)
  fetch(url_3)
    .then(response => response.json())
    .then(data => {
      const previsionsApresDemain = data.list.filter(previs => previs.dt_txt.includes(tomorrow2));
  
      if (previsionsApresDemain.length > 0) {
        const weatherData = previsionsApresDemain[0];
  
        result3.innerHTML = `
          <h1>${data.city.name}</h1>
          <h3>Après demain<h3>
          <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
          <h2>${(weatherData.main.temp - 273.15).toFixed(0)} &#176;C</h2>
          <div class="temp-container">
              <div>
                  <h4 class="title">min</h4>
                  <h4 class="temp">${(weatherData.main.temp_min - 273.15).toFixed(0)} &#176;C</h4>
              </div>
              <div>
                  <h4 class="title">max</h4>
                  <h4 class="temp">${(weatherData.main.temp_max - 273.15).toFixed(0)} &#176;C</h4>
              </div>
          </div>
        `;
      } else {
        result3.innerHTML = `<h3 class="msg">Aucune donnée disponible pour demain</h3>`;
      }
    })
    .catch(() => {
      result3.innerHTML = `<h3 class="msg">Ville non trouvée</h3>`;
    });



    let url_4 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=standard&lang=fr`;

    // Récupérer la date après après-demain
    function getTomorrowDate3() {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 3);
      return tomorrow.toISOString().split('T')[0];
    }
    
    const tomorrow3 = getTomorrowDate3();
    
    // Effectuer la requête à l'API pour les prévisions de après après-demain
    fetch(url_4)
      .then(response => response.json())
      .then(data => {

        const previsionsJ3 = data.list.filter(previs => previs.dt_txt.includes(tomorrow3));

        if (previsionsJ3.length > 0) {
          const weatherData = previsionsJ3[0];

          result4.innerHTML = `
            <h1>${data.city.name}</h1>
            <h3>Après après demain<h3>
            <img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
            <h2>${(weatherData.main.temp - 273.15).toFixed(0)} &#176;C</h2>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${(weatherData.main.temp_min - 273.15).toFixed(0)} &#176;C</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${(weatherData.main.temp_max - 273.15).toFixed(0)} &#176;C</h4>
                </div>
            </div>
          `;
        } else {
          result4.innerHTML = `<h3 class="msg">Aucune donnée disponible pour demain</h3>`;
        }
      })
      .catch(() => {
        result4.innerHTML = `<h3 class="msg">Ville non trouvée</h3>`;
      });
};

// Appeler la fonction pour obtenir les données météorologiques à partir des données JSON au chargement de la page
window.addEventListener("load", getWeatherFromJSON);

// Actualiser les données toutes les heures
setInterval(getWeatherFromJSON, 3600000);
