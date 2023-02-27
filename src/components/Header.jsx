import React from 'react';
import styled from 'styled-components';
import SolarSystemLogo from '../assets/logo-sistema-solar.svg';

const HeaderStyle = styled.header`
  margin: 2.5rem auto;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 462px;
  max-height: 264px;
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
