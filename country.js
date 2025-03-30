document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const countryCode = urlParams.get("code");

    if (!countryCode) {
        alert("Código do país não encontrado!");
        return;
    }

    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        const country = data[0];

        document.getElementById("country-name").textContent = country.name.official;
        document.getElementById("flag").src = country.flags.png;
        document.getElementById("flag").alt = `Bandeira de ${country.name.common}`;
        document.getElementById("capital").textContent = country.capital?.[0] || "N/A";
        document.getElementById("language").textContent = Object.values(country.languages || {}).join(", ");
        document.getElementById("currency").textContent = Object.values(country.currencies || {}).map(c => c.name).join(", ");
        document.getElementById("continent").textContent = country.continents?.[0] || "N/A";
        document.getElementById("population").textContent = country.population.toLocaleString();
        document.getElementById("area").textContent = country.area.toLocaleString();
        document.getElementById("maps").href = country.maps.googleMaps;
    } catch (error) {
        console.error("Erro ao buscar os detalhes do país", error);
    }
});

