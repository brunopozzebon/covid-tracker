import tableContryAbreviations from '../data/countryNameAbbreviations.json';

export const getContryNameWithAbbreviation = (countryAbbreviation) =>{
    const countryArrayName = tableContryAbreviations.filter(element => {
        return element.abbreviation == countryAbbreviation;
    });
    if (countryArrayName.length > 0) {
        return countryArrayName[0].pais;
    }
}