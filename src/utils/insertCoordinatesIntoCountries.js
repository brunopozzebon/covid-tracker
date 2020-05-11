import tableContryCoordinates from '../data/countryLocations.json';

export const insertCoordinatesIntoCountries = (countriesData = []) => {
    function getContriesCoordinates() {
        let table = new Array();
        tableContryCoordinates.forEach(contry => {
            table[contry.pais] = { "latitude": contry.latitude, "longitude": contry.longitude };
        });
        return table;
    }

    let maxCase = 0;
    const countryCoordinates = getContriesCoordinates();
    const contriesDataWithCoordinates = [...countriesData];

    contriesDataWithCoordinates.forEach(country => {
        if (countryCoordinates[country[0]] == null) {

        } else {
            country.latitude = countryCoordinates[country[0]].latitude;
            country.longitude = countryCoordinates[country[0]].longitude;
            country.cases = country[1];
            country.name = country[0];

            delete country[1];
            delete country[0];

            country.totalConfirmed = country.cases[country.cases.length - 1].confirmed;
            if (country.totalConfirmed > maxCase) {
                maxCase = country.totalConfirmed;
            }
        }
    })
    return { maxCase, contriesDataWithCoordinates };

}