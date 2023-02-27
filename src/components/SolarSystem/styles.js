import styled from 'styled-components';

export const SolarSystemContainer = styled.div`
  margin: 6.25rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Line = styled.img`
  position: relative;
  top: 128px;
  z-index: -1;
`;

export const PlanetsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlanetCard = styled.div`
  text-align: center;
  margin: 0px 1.5rem;
`;

export const PlanetImg = styled.img`
  max-width: ${(props) => (props.PlanetWidth ? props.PlanetWidth : '100px')};
  max-height: ${(props) => (props.PlanetHeight ? props.PlanetHeight : '100px')};
`;
