import React from 'react';
import styled from 'styled-components';
import SolarSystemLogo from '../assets/logo-sistema-solar.svg';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 462px;
  max-height: 264px;
  margin: 2.5rem 0;
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
