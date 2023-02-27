import React from 'react';
import styled from 'styled-components';
import LogoTrybe from '../assets/logo-trybe.svg';

const FooterContainer = styled.footer`
  margin: 4rem auto 2.5rem;
  display: flex;
  justify-content: center;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <a href="https://www.betrybe.com/"><img src={ LogoTrybe } alt="Logo Trybe" /></a>
      </FooterContainer>
    );
  }
}

export default Footer;
