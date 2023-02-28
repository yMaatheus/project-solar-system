import styled from 'styled-components';

export const Container = styled.div`
  margin: 6.25rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Line = styled.img`
  position: relative;
  top: 142px;
  z-index: -1;
  
  max-width: 100%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const PlanetsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  text-align: center;
  margin: 0px 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;

  overflow-x: hidden;

  @media (max-width: 1560px) {
   margin: 0; 
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  align-items: center;

  overflow-x: hidden;
`;

export const Image = styled.img`
  max-width: ${(props) => (props.PlanetWidth ? props.PlanetWidth : '100px')};
  max-height: ${(props) => (props.PlanetHeight ? props.PlanetHeight : '100px')};

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 100%;
  }
`;

export const PlanetName = styled.p`
`;
