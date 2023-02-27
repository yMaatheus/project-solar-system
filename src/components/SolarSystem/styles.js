import styled from 'styled-components';

export const Container = styled.div`
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

export const PlanetsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  text-align: center;
  margin: 0px 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
`;

export const Image = styled.img`
  max-width: ${(props) => (props.PlanetWidth ? props.PlanetWidth : '100px')};
  max-height: ${(props) => (props.PlanetHeight ? props.PlanetHeight : '100px')};
`;

export const PlanetName = styled.p`
`;
