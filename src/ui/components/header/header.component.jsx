import React from 'react';
import { Container, Logo } from './styles';
import LogoImage from '../../../assets/img/logo.png'

export const Header = ()=> {
  return(
    <Container>
        <Logo src={LogoImage}/>
    </Container>
);
}
