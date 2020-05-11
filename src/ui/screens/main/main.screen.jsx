import React,{useState, useEffect} from 'react';

import { Container } from './styles';
import {Header, Map, SideMenu} from '../../components';
import { useCovidApi } from '../../../hook';

import {insertCoordinatesIntoCountries} from '../../../utils';

export const Main = ()=> {

  const [countries, setCountries] = useState([]);
  const [maxCase, setMaxCase] = useState(0);
  const [countrySelected, setCountrySelected] = useState({});


  const covidApi = useCovidApi();

  function selectCountry(country){
    setCountrySelected(country);    
  }

  useEffect(() => {
      async function getCountriesData() {
          const countriesData = Object.entries(await covidApi.getCovidDatabase());  
          const {maxCase,contriesDataWithCoordinates} = insertCoordinatesIntoCountries(countriesData);
          
          setCountries(contriesDataWithCoordinates);
          setMaxCase(maxCase);
      }

      getCountriesData()
  }, [covidApi])

  return (
    <>
      <Header/>
      <Container>
        <Map countries={countries} maxCase={maxCase} selectCountry={selectCountry}/>
        <SideMenu country={countrySelected}/>
      </Container>
    
    </>
  )
}
