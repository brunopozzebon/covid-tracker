export const extractChartDataWithCountryData = (country) => {

    let chartData = Array();
    chartData.push(["Dias", "Total", "Doentes", "Recuperados", "Mortos"]);

    if (country.cases != undefined) {
        for (let i = 0; i < country.cases.length; i++) {
            if (country.cases[i].confirmed > 0) {
                let sickness = country.cases[i].confirmed - country.cases[i].recovered - country.cases[i].deaths
                chartData.push([i, country.cases[i].confirmed, sickness, country.cases[i].recovered, country.cases[i].deaths])
            }
        }
    }
    return chartData;
}