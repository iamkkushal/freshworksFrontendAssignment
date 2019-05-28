let countries;

fetch('https://restcountries.eu/rest/v2/all')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(JSON.stringify(myJson));
    initialize(myJson);
  })
  .catch(function(err) {
    alert("Error:" + err);
  });

function initialize(countriesData) {
  countries = countriesData;
  //console.log(countriesData);
}

function search() {
  var country;
  country = document.getElementById("search").value;
  //countryName = country;
  //console.log(country);
  for (let i = 0; i < countries.length; i++) {
    if (country === countries[i].name) {
      // console.log(countries[i].name);
      document.getElementById("name").innerHTML = countries[i].name;
      document.querySelector("#flag-container img").src = countries[i].flag;
      document.getElementById("capital").innerHTML = countries[i].capital;
      document.getElementById("region").innerHTML = countries[i].region;
      document.getElementById("timezones").innerHTML = countries[i].timezones;
      document.getElementById("borders").innerHTML = countries[i].borders;
      document.getElementById("currencies").innerHTML = countries[i].currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");;
      document.getElementById("languages").innerHTML = countries[i].languages.filter(c => c.name).map(c => `${c.name}`);;
    }
  }
}
