let allCountries = [];
let dark = false;

async function searchCountries(value) {
  //https://restcountries.com/v3.1/region/europe
  let reply = await fetch("https://restcountries.com/v3.1/" + value);

  let data = await reply.json();
  allCountries = data;
  renderCountries();
}

function renderCountries() {
  document.querySelector(".allCountries").innerHTML = "";

  for (let country of allCountries) {
    let card = document.createElement("div");
    // card.classList.add("country");
    if(dark){
      card.classList.add("country");
      card.classList.add("dark-mode");
    }else
     card.classList.add("country");

    card.innerHTML = `
      <a href="country.html?code=${country.cca3}">
        <img width="200" src="${country.flags.png}" alt="Bandeira de ${country.name.common}" />
        <span>${country.name.common}</span>
      </a>
    `;

    document.querySelector(".allCountries").appendChild(card);
  }
}

function filterCountries(input) {
  console.log(input.value);
  // if(dark)
  //   mudar();
  searchCountries(input.value);
}

function searchByName(query) {
  const filteredCountries = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  renderFilteredCountries(filteredCountries);
}

function renderFilteredCountries(filteredCountries) {
  document.querySelector(".allCountries").innerHTML = "";

  for (let country of filteredCountries) {
    let card = document.createElement("div");
    

    card.innerHTML = `
      <a href="country.html?code=${country.cca3}">
        <img width="200" src="${country.flags.png}" alt="Bandeira de ${country.name.common}" />
        <span>${country.name.common}</span>
      </a>
    `;

    document.querySelector(".allCountries").appendChild(card);
  }
}

searchCountries("all");

const toggleDarkModeButton = document.getElementById("toggleDarkMode");

toggleDarkModeButton.addEventListener("click", mudar);

function mudar() {
  
  // dark = !dark;
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelectorAll(".country").forEach((country) => {
      dark = true;
      country.classList.toggle("dark-mode");
    });
    const countryDetails = document.querySelector(".country-details");
    if (countryDetails) {
      countryDetails.classList.toggle("dark-mode");
    }
}