fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(countries => {
    const countriesDiv = document.getElementById("countries");
    countries.map(country =>{
        let countryDiv = document.createElement("div");
        countryDiv.className = "country";
        let countryInfo = `<h3 class = "countryName">${country.name}</h3>
                            <p>${country.capital}</p>
                            <button onclick = "displayCountryDetails('${country.name}')">Details</button>
                        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv)
    });
});

let displayCountryDetails = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => renderDetails(data[0]));
};

renderDetails = country => {
    console.log(country);
    let detailsDiv = document.getElementById("countryDetails");
    detailsDiv.innerHTML  = `
                            <h1>${country.name}</h1>
                            <p>POPULATION: ${country.population}</p>
                            <p>Area: ${country.area} square kilometer</p>
                            <p>currency: ${country.currencies[0].name}</p>
                            <img src = "${country.flag}">

                            `;
}