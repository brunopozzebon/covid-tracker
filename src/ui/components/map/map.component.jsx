import React, {useState} from 'react';
import settings from '../../../config/mapConfig';
import wc from 'which-country'

import { MapBox } from './styles';
import {CircleMarker} from '../../components';
import {getContryNameWithAbbreviation} from '../../../utils/getContryNameWithAbbreviation'

export const Map = ({countries=[], maxCase, selectCountry})=> {

  const [viewport, setViewport] = useState({...settings});

  function handleClickOnMap(e){
    const lngLat = e.lngLat;
    const abbreviation = wc([lngLat[0], lngLat[1]]);
   
    if (abbreviation != undefined) {
      const countryName = getContryNameWithAbbreviation(abbreviation)

      countries.forEach(country => {
        if (country.name && country.name == countryName) {
          selectCountry(country)
        }
      })
    }
  }

  function handleViewportChange(view){
    setViewport({ ...view })
  }

  return (
    <MapBox {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
            onClick={(e) => handleClickOnMap(e)}
            onViewportChange={viewport => handleViewportChange(viewport)}>
          
            {countries.map((country) => {
              return country.latitude ? <CircleMarker key={country.name} maxCase={maxCase} country={country}></CircleMarker> : null
            })}
    </MapBox>
  )
}
