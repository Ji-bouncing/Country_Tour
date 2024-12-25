

document.querySelector('#check').addEventListener('click',getCountry)

function getCountry(){
     const country = document.querySelector('#countryName').value.toLowerCase();
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
    fetch(url)
    .then(res => res.json())
    .then(data => {
            console.log(data)
            console.log(data[0])
            document.querySelector('.nameOfCountry').innerHTML =data[0].name.common;
            document.querySelector('.countryFlag').src = data[0].flags.png;
            document.querySelector('.putCapital').innerHTML =data[0].capital[0];
            document.querySelector('.putContinent').innerHTML =data[0].continents[0];
            document.querySelector('.putPopulation').innerHTML =data[0].population;
            document.querySelector('.putCurrency').innerHTML =data[0].currencies[Object.keys(data[0].currencies)].name;
            document.querySelector('.putSymbol').innerHTML =data[0].currencies[Object.keys(data[0].currencies)].symbol;
        
    })
    .catch(err => {
        console.log(err)
    })
    document.querySelector('.countryImage').style.display = 'block';
    document.querySelector('.otherInfo').style.display = 'block';
}