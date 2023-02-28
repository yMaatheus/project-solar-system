import React from 'react';
import styled from 'styled-components';
import SolarSystemLogo from '../assets/logo-sistema-solar.svg';

const HeaderStyle = styled.header`
  margin: 2.5rem auto;
  display: flex;
  justify-content: center;
  max-width: 100%;

  overflow-x: hidden;
`;

const Logo = styled.img`
  max-height: 264px;

  flex: 1;

  @media (max-width: 992px) {
    max-width: 70%;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <Logo src={ SolarSystemLogo } alt="Logo Sistema Solar" />
      </HeaderStyle>
    );
  }
}

export default Header;
