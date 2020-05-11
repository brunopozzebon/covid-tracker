import React from 'react';

import { SideBar, Card, CardInformation, ChartContainer, NoCountry } from './styles';
import { GiHealthIncrease } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { GiDeathSkull } from "react-icons/gi";

import { Chart } from "react-google-charts";
import chartConfig from '../../../config/chartConfig';

import {extractChartDataWithCountryData} from '../../../utils';

export const SideMenu = ({country})=> {

  const dataSelectedCountry = extractChartDataWithCountryData(country);
  const totalCurados = dataSelectedCountry[dataSelectedCountry.length -1][3];
  const totalDoentes = dataSelectedCountry[dataSelectedCountry.length -1][2];
  const totalMortos = dataSelectedCountry[dataSelectedCountry.length -1][4];
 
  if(country.name){
    return (
      <SideBar>
              <Card>
                <h1>{country.name}</h1>
                <CardInformation>
                    <div className="totals">
                        <GiHealthIncrease size={20} color="#000"/>
                        <div>
                          <span className="total-name">Curados</span>
                          <span className="total-value">{totalCurados}</span>
                        </div>
                    </div>

                    <div className="totals">
                        <GiDeathSkull size={20} color="#000"/>
                        <div>
                          <span className="total-name">Mortos</span>
                          <span className="total-value">{totalMortos}</span>
                        </div>
                    </div>
  
                    <div className="totals">
                        <GiMedicines size={20} color="#000"/>
                        <div>
                          <span className="total-name">Doentes</span>
                          <span className="total-value">{totalDoentes}</span>
                        </div>
                    </div>
                </CardInformation>
                <ChartContainer className="chart-container">
                  <Chart
                    chartType="LineChart"
                    data={dataSelectedCountry}
                    width="100%"
                    height="100%"
                    options={chartConfig}
                  />
                 </ChartContainer>
              </Card>
            </SideBar>
    )
  }else{
    return (
      <NoCountry>Nenhum pais selecionado</NoCountry>
    )
  }
  
}
