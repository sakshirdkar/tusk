const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data) {

    const html = `<article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
            data.population / 1000
        ).toFixed(0)}K people </p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);


};
const whereAmI = function (lat, lng) {

    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`Problem with geocoding ${res.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city},${data.state}`);
            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Country not found ${res.status}`);
            }
            return response.json();
        })
        .then(dataCountry => {
            console.log(dataCountry[0]);
            renderCountry(dataCountry[0]);
        })

        .catch(error => console.error(error))
        .finally(() => {
            countriesContainer.style.opacity = 1;
        }
        );



};

whereAmI(`19.037`, `72.873`);